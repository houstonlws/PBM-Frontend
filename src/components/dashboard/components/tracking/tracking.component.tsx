import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  FormSelect,
  Stack,
  Table,
} from 'react-bootstrap';
import { ConnectedProps, connect } from 'react-redux';
import { departmentsMap } from '../../../../config/app-data';
import { CONSTANTS } from '../../../../config/constants';
import {
  getBillingPeriods,
  getCurrentBillingPeriod,
  getJobsByBillingPeriod,
  getPriceProfile,
} from '../../../../store/actions';
import { AppState, Job } from '../../../../types';
import GraphComponent from './components/graph.component';
import TotalsBlockComponent from './components/totals-block.component';

interface Props {
  selectedDepartment?: string;
}

const TrackingModule = (props: TrackingProps) => {
  const [billingPeriod, setBillingPeriod] = useState(
    props.tracking.currentBillingPeriod.id
  );

  const {
    user,
    printer: { printersMap },
    tracking: { currentJobs, totals, billingPeriods },
    selectedDepartment,
  } = props;

  useEffect(() => {
    const getData = async () => {
      await props.getPriceProfile();
      await props.getBillingPeriods();
      await props.getCurrentBillingPeriod();
      setBillingPeriod(props.tracking.currentBillingPeriod.id);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.tracking.currentBillingPeriod.id]);

  const getJobsByBillingPeriod = async (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    setBillingPeriod(event.target.value);
    await props.getJobsByBillingPeriod(
      event.target.value,
      user.type === CONSTANTS.ADMIN ? selectedDepartment : user.id
    );
  };

  return (
    <Stack data-testid='tracking-component' gap={3}>
      <Card>
        <CardHeader>
          <h2>Tracking</h2>
        </CardHeader>
      </Card>

      <Card>
        <CardBody className='d-flex align-items-center'>
          <h3 className='me-auto'>{`${
            selectedDepartment
              ? departmentsMap[selectedDepartment].name
              : departmentsMap[user.department_id]?.name || 'All Departments'
          }`}</h3>
          <div className='d-flex align-items-center'>
            <strong className='text-nowrap me-1'>Billing Period:</strong>
            <FormSelect value={billingPeriod} onChange={getJobsByBillingPeriod}>
              {billingPeriods?.map(({ id, year, month }, i) => (
                <option key={i} value={id}>{`${year}-${month}`}</option>
              ))}
            </FormSelect>
          </div>
        </CardBody>
      </Card>

      <GraphComponent />

      <Stack direction='horizontal' gap={3}>
        <TotalsBlockComponent
          data-test-id={`total-color-${totals?.totalColor}`}
          value={`${totals?.totalColor}`}
          title='Color'
          unit='Clicks'
        ></TotalsBlockComponent>
        <TotalsBlockComponent
          data-test-id={`total-color-${totals?.totalBw}`}
          value={`${totals?.totalBw}`}
          title='Black & White'
          unit='Clicks'
        ></TotalsBlockComponent>
      </Stack>
      <Stack direction='horizontal' gap={3}>
        <TotalsBlockComponent
          value={`${totals?.totalJobs}`}
          title='Print Jobs'
          unit='Jobs'
        ></TotalsBlockComponent>
        <TotalsBlockComponent
          value={`${totals?.totalPaper}`}
          title='Print Volume'
          unit='Pages'
        ></TotalsBlockComponent>
      </Stack>
      <Table className='mt-3'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Printer</th>
            <th>Location</th>
            <th>Pages</th>
            <th>B&W</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs?.length > 0 ? (
            currentJobs?.map((job: Job, index) => {
              const printer_id = job?.printer_id;
              return (
                <tr key={index}>
                  <td>{job?.date}</td>
                  <td>{`${printersMap[printer_id]?.brand} - 
                ${printersMap[printer_id]?.model}`}</td>
                  <td>{`${printersMap[printer_id]?.location}`}</td>
                  <td>{`${job?.pages}`}</td>
                  <td>{`${job?.black_and_white_pages}`}</td>
                  <td>{`${job?.color_pages}`}</td>
                </tr>
              );
            })
          ) : (
            <></>
          )}
        </tbody>
      </Table>
    </Stack>
  );
};

const mapStateToProps = (state: AppState, props: any) => {
  return {
    printer: state.printer,
    user: state.account.user,
    admin: state.admin,
    tracking: state.tracking,
  };
};

const mapDispatchToProps = {
  getPriceProfile,
  getBillingPeriods,
  getCurrentBillingPeriod,
  getJobsByBillingPeriod,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
type TrackingProps = ConnectedProps<typeof connector> & Props;

export default connector(TrackingModule);
