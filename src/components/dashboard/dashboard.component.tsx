import React, { useEffect, useState } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import {
  Button,
  CardHeader,
  Container,
  DropdownItem,
  FormSelect,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap';
import { AppState } from '../../types';
import {
  getAllData,
  getAllDataUser,
  getUserData,
  logout,
  getCurrentJobs,
  getJobHistory,
  refreshToken,
  getCurrentTotals,
  getDepartmentMaintenanceRequests,
} from '../../store/actions';
import {
  BillingComponent,
  NotificationsComponent,
  PrintersComponent,
  ProfileComponent,
  TrackingComponent,
  MaintenanceComponent,
  AdminSettingsComponent,
} from './components';
import { CONSTANTS } from '../../config/constants';
import IncompleteProfileComponent from './ui/incomplete-profile.component';
import MenuSideComponent from './ui/menu-side.component';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { departmentsList } from '../../config/app-data';
import NotificationsWidget from './ui/notifications.widget';

const connector = connect(
  (state: AppState, props: any) => ({
    account: state.account,
    auth: state.auth,
    billing: state.billing,
  }),
  {
    getUserData,
    getAllData,
    getAllDataUser,
    logout,
    getJobHistory,
    getCurrentJobs,
    refreshToken,
    getCurrentTotals,
    getDepartmentMaintenanceRequests,
  }
);

type DashboardProps = ConnectedProps<typeof connector>;

const DashboardComponent = (props: DashboardProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [department, setDepartment] = useState<string>('');

  useEffect(() => {
    const onMount = async () => {
      const { user } = props.account;
      if (user?.type === CONSTANTS.ADMIN) {
        await props.getAllData();
        await props.getJobHistory();
        await props.getCurrentTotals();
      } else if (user?.type === CONSTANTS.USER) {
        await props.getAllDataUser(user.department_id);
        await props.getJobHistory(user.department_id);
        await props.getCurrentTotals(user.department_id);
        await props.getDepartmentMaintenanceRequests(user.department_id);
      }
    };
    onMount();
  }, []);

  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  const onChange = async (event: any) => {
    setDepartment(event.target.value);
    await props.getAllDataUser(event.target.value);
    await props.getJobHistory(event.target.value);
    await props.getCurrentJobs(event.target.value);
    await props.getDepartmentMaintenanceRequests(event.target.value);
  };

  const {
    account: { user },
    auth: { loggedIn },
  } = props;
  let completedProfile =
    user.firstName && user.lastName && user.department_id !== '';
  if (!completedProfile && loggedIn) {
    return <IncompleteProfileComponent></IncompleteProfileComponent>;
  } else
    return (
      <div className='d-flex flex-column'>
        <Navbar className='bg-primary'>
          <Container fluid>
            <Nav>
              <Navbar.Brand as={Button} onClick={toggleOpen}>
                <FontAwesomeIcon icon={faBars} color={'white'} />
                <img
                  alt='logo'
                  src='navlogo.png'
                  height='30'
                  className='d-inline-block align-top'
                ></img>
              </Navbar.Brand>
            </Nav>

            {user.type === CONSTANTS.ADMIN && (
              <Nav>
                <FormSelect
                  id={'department'}
                  data-testid={'select-department'}
                  onChange={onChange}
                  value={department}
                >
                  <option value={''}>All Departments</option>
                  {departmentsList.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </FormSelect>
              </Nav>
            )}

            <Nav className='align-items-center'>
              <NotificationsWidget></NotificationsWidget>
              <NavDropdown
                className='btn btn-primary'
                align={'end'}
                title={
                  <img
                    alt='avatar'
                    className='rounded-circle'
                    src='avatar.jpg'
                    width={30}
                    height={30}
                  ></img>
                }
              >
                <CardHeader>
                  <DropdownItem as={Link} to={'/profile'}>
                    Settings
                  </DropdownItem>
                  <Button
                    className='w-100 text-left'
                    variant='secondary'
                    onClick={props.logout}
                  >
                    Logout
                  </Button>
                </CardHeader>
              </NavDropdown>
            </Nav>
          </Container>
        </Navbar>
        <div className='d-flex'>
          <MenuSideComponent isOpen={isOpen}></MenuSideComponent>
          <div
            style={{
              height: 'calc(100vh - 75px)',
              overflowY: 'scroll',
              flex: '1 1 auto',
            }}
          >
            <Container fluid className='mt-3'>
              <Routes>
                {user?.type === CONSTANTS.ADMIN ? (
                  [
                    <Route
                      key={'any'}
                      path='*'
                      element={<Navigate to='/settings' />}
                    ></Route>,
                    <Route
                      key={'settings'}
                      path='settings'
                      Component={AdminSettingsComponent}
                    ></Route>,
                  ]
                ) : (
                  <Route path='*' element={<Navigate to='/printers' />}></Route>
                )}
                <Route
                  path='printers'
                  element={<PrintersComponent departmentId={department} />}
                ></Route>
                <Route
                  path='maintenance'
                  Component={MaintenanceComponent}
                ></Route>
                <Route
                  path='tracking'
                  element={
                    <TrackingComponent selectedDepartment={department} />
                  }
                ></Route>
                <Route
                  path='billing'
                  element={<BillingComponent department={department} />}
                ></Route>
                <Route path='profile' Component={ProfileComponent}></Route>
                <Route
                  path='notifications'
                  Component={NotificationsComponent}
                ></Route>
              </Routes>
            </Container>
          </div>
        </div>
      </div>
    );
};

export default connector(DashboardComponent);
