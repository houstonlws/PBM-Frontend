const printers = [
  {
    id: 1,
    serial_number: 'SN1234567',
    model: 'HP LaserJet Pro M404dw',
    brand: 'HP',
    location: 'Office 1, Floor 2',
    installation_date: '2022-1-15',
    warranty_expiry_date: '2024-1-15',
    ip_address: '192.168.1.101',
    mac_address: '00:1A:2B:3C:4D:5E',
    firmware_version: '2023.04.01',
    department_id: 1,
  },
  {
    id: 2,
    serial_number: 'SN789012',
    model: 'Brother HL-L2390DW',
    brand: 'Brother',
    location: 'Office 1, Floor 2',
    installation_date: '2022-2-10',
    warranty_expiry_date: '2024-2-10',
    ip_address: '192.168.1.102',
    mac_address: '00:1A:2B:3C:4D:5F',
    firmware_version: '2023.05.01',
    department_id: 1,
  },
  {
    id: 13,
    serial_number: 'SN123789',
    model: 'HP LaserJet Pro M402n',
    brand: 'HP',
    location: 'Office 1, Floor 2',
    installation_date: '2023-1-15',
    warranty_expiry_date: '2025-1-15',
    ip_address: '192.168.1.113',
    mac_address: '00:1A:2B:3C:4D:6O',
    firmware_version: '2024.04.01',
    department_id: 1,
  },
  {
    id: 14,
    serial_number: 'SN456890',
    model: 'Brother HL-L2370DW',
    brand: 'Brother',
    location: 'Office 1, Floor 2',
    installation_date: '2023-2-10',
    warranty_expiry_date: '2025-2-10',
    ip_address: '192.168.1.114',
    mac_address: '00:1A:2B:3C:4D:7P',
    firmware_version: '2024.05.01',
    department_id: 1,
  },
];

const metrics = [
  {
    id: 1,
    printer_id: 1,
    total_pages_printed: 5000,
    monthly_print_volume: 1000,
    total_print_jobs: 200,
    monthly_print_jobs: 50,
    toner_levels: '75% cyan, 50% magenta, 80% yellow, 20% black',
    toner_usage_monthly: '1200 pages',
    paper_levels: '200 sheets',
    paper_usage_monthly: 500,
    total_color_pages_printed: 1500,
    total_color_pages_last_billing: 200,
    total_bw_pages_printed: 350,
    total_bw_pages_last_billing: 100,
  },
  {
    id: 2,
    printer_id: 2,
    total_pages_printed: 3000,
    monthly_print_volume: 800,
    total_print_jobs: 150,
    monthly_print_jobs: 40,
    toner_levels: '60% cyan, 40% magenta, 70% yellow, 30% black',
    toner_usage_monthly: '1000 pages',
    paper_levels: '150 sheets',
    paper_usage_monthly: 400,
    total_color_pages_printed: 1000,
    total_color_pages_last_billing: 180,
    total_bw_pages_printed: 300,
    total_bw_pages_last_billing: 80,
  },
  {
    id: 13,
    printer_id: 13,
    total_pages_printed: 4200,
    monthly_print_volume: 850,
    total_print_jobs: 160,
    monthly_print_jobs: 40,
    toner_levels: '60% cyan, 50% magenta, 70% yellow, 30% black',
    toner_usage_monthly: '900 pages',
    paper_levels: '170 sheets',
    paper_usage_monthly: 380,
    total_color_pages_printed: 1200,
    total_color_pages_last_billing: 180,
    total_bw_pages_printed: 280,
    total_bw_pages_last_billing: 70,
  },
  {
    id: 14,
    printer_id: 14,
    total_pages_printed: 6300,
    monthly_print_volume: 1300,
    total_print_jobs: 270,
    monthly_print_jobs: 55,
    toner_levels: '85% cyan, 70% magenta, 95% yellow, 15% black',
    toner_usage_monthly: '1400 pages',
    paper_levels: '250 sheets',
    paper_usage_monthly: 600,
    total_color_pages_printed: 1700,
    total_color_pages_last_billing: 230,
    total_bw_pages_printed: 450,
    total_bw_pages_last_billing: 100,
  },
];

export const requests = [
  {
    id: 1,
    printer_id: 1,
    request_date: '2022-6-01',
    maintenance_type: 'Routine Check',
    description: 'Routine maintenance check and toner replacement',
    status: 'Resolved',
    resolved_date: '2022-6-02',
  },
  {
    id: 2,
    printer_id: 2,
    request_date: '2022-6-15',
    maintenance_type: 'Repair',
    description: 'Printer jam and paper feed issue',
    status: 'Pending',
    resolved_date: null,
  },
  {
    id: 13,
    printer_id: 13,
    request_date: '2022-10-10',
    maintenance_type: 'Firmware Update',
    description: 'Update printer firmware to version 1.5.0',
    status: 'Resolved',
    resolved_date: '2022-10-11',
  },
  {
    id: 14,
    printer_id: 14,
    request_date: '2022-10-20',
    maintenance_type: 'Toner Replacement',
    description: 'Replace toner cartridges',
    status: 'Pending',
    resolved_date: null,
  },
  {
    id: 16,
    printer_id: 1,
    request_date: '2024-7-02',
    maintenance_type: 'test',
    description: 'trest',
    status: 'Pending',
    resolved_date: null,
  },
  {
    id: 17,
    printer_id: 1,
    request_date: '2024-7-27',
    maintenance_type: '',
    description: '',
    status: 'Pending',
    resolved_date: null,
  },
  {
    id: 18,
    printer_id: 1,
    request_date: '2024-7-28',
    maintenance_type: '',
    description: '',
    status: 'Pending',
    resolved_date: null,
  },
];

export const printersMap = {
  '1': {
    id: 1,
    brand: 'HP',
    model: 'HP LaserJet Pro M404dw',
    location: 'Office 1, Floor 2',
    ip_address: '192.168.1.101',
    mac_address: '00:1A:2B:3C:4D:5E',
    department_id: 1,
    serial_number: 'SN123456',
    firmware_version: '2023.04.01',
    installation_date: '2022-01-15',
    warranty_expiry_date: '2024-01-15',
  },
  '2': {
    id: 2,
    brand: 'Brother',
    model: 'Brother HL-L2390DW',
    location: 'Office 1, Floor 2',
    ip_address: '192.168.1.102',
    mac_address: '00:1A:2B:3C:4D:5F',
    department_id: 1,
    serial_number: 'SN789012',
    firmware_version: '2023.05.01',
    installation_date: '2022-02-10',
    warranty_expiry_date: '2024-02-10',
  },
  '3': {
    id: 3,
    brand: 'Canon',
    model: 'Canon imageCLASS MF267dw',
    location: 'Lab 1, Floor 3',
    ip_address: '192.168.1.103',
    mac_address: '00:1A:2B:3C:4D:6E',
    department_id: 2,
    serial_number: 'SN345678',
    firmware_version: '2023.06.01',
    installation_date: '2022-03-20',
    warranty_expiry_date: '2024-03-20',
  },
  '4': {
    id: 4,
    brand: 'Epson',
    model: 'Epson EcoTank ET-4760',
    location: 'Lab 1, Floor 3',
    ip_address: '192.168.1.104',
    mac_address: '00:1A:2B:3C:4D:7F',
    department_id: 2,
    serial_number: 'SN901234',
    firmware_version: '2023.07.01',
    installation_date: '2022-04-25',
    warranty_expiry_date: '2024-04-25',
  },
  '5': {
    id: 5,
    brand: 'Samsung',
    model: 'Samsung Xpress M2020W',
    location: 'Office 2, Floor 1',
    ip_address: '192.168.1.105',
    mac_address: '00:1A:2B:3C:4D:8G',
    department_id: 3,
    serial_number: 'SN567890',
    firmware_version: '2023.08.01',
    installation_date: '2022-05-15',
    warranty_expiry_date: '2024-05-15',
  },
  '6': {
    id: 6,
    brand: 'Lexmark',
    model: 'Lexmark MB2236adw',
    location: 'Office 2, Floor 1',
    ip_address: '192.168.1.106',
    mac_address: '00:1A:2B:3C:4D:9H',
    department_id: 3,
    serial_number: 'SN234567',
    firmware_version: '2023.09.01',
    installation_date: '2022-06-30',
    warranty_expiry_date: '2024-06-30',
  },
  '7': {
    id: 7,
    brand: 'Dell',
    model: 'Dell Color Laser Printer 1320c',
    location: 'Office 3, Floor 2',
    ip_address: '192.168.1.107',
    mac_address: '00:1A:2B:3C:4D:0I',
    department_id: 4,
    serial_number: 'SN890123',
    firmware_version: '2023.10.01',
    installation_date: '2022-07-10',
    warranty_expiry_date: '2024-07-10',
  },
  '8': {
    id: 8,
    brand: 'Ricoh',
    model: 'Ricoh SP C261SFNw',
    location: 'Office 3, Floor 2',
    ip_address: '192.168.1.108',
    mac_address: '00:1A:2B:3C:4D:1J',
    department_id: 4,
    serial_number: 'SN456789',
    firmware_version: '2023.11.01',
    installation_date: '2022-08-20',
    warranty_expiry_date: '2024-08-20',
  },
  '9': {
    id: 9,
    brand: 'Brother',
    model: 'Brother MFC-L2750DW',
    location: 'Lab 2, Floor 4',
    ip_address: '192.168.1.109',
    mac_address: '00:1A:2B:3C:4D:2K',
    department_id: 5,
    serial_number: 'SN012345',
    firmware_version: '2023.12.01',
    installation_date: '2022-09-05',
    warranty_expiry_date: '2024-09-05',
  },
  '10': {
    id: 10,
    brand: 'HP',
    model: 'HP OfficeJet Pro 8025',
    location: 'Lab 2, Floor 4',
    ip_address: '192.168.1.110',
    mac_address: '00:1A:2B:3C:4D:3L',
    department_id: 5,
    serial_number: 'SN678901',
    firmware_version: '2024.01.01',
    installation_date: '2022-10-15',
    warranty_expiry_date: '2024-10-15',
  },
  '11': {
    id: 11,
    brand: 'Canon',
    model: 'Canon PIXMA TR8520',
    location: 'Clinic 1, Floor 5',
    ip_address: '192.168.1.111',
    mac_address: '00:1A:2B:3C:4D:4M',
    department_id: 6,
    serial_number: 'SN234567',
    firmware_version: '2024.02.01',
    installation_date: '2022-11-20',
    warranty_expiry_date: '2024-11-20',
  },
  '12': {
    id: 12,
    brand: 'Xerox',
    model: 'Xerox Phaser 6510',
    location: 'Clinic 1, Floor 5',
    ip_address: '192.168.1.112',
    mac_address: '00:1A:2B:3C:4D:5N',
    department_id: 6,
    serial_number: 'SN890123',
    firmware_version: '2024.03.01',
    installation_date: '2022-12-30',
    warranty_expiry_date: '2024-12-30',
  },
  '13': {
    id: 13,
    brand: 'HP',
    model: 'HP LaserJet Pro M402n',
    location: 'Office 1, Floor 2',
    ip_address: '192.168.1.113',
    mac_address: '00:1A:2B:3C:4D:6O',
    department_id: 1,
    serial_number: 'SN123789',
    firmware_version: '2024.04.01',
    installation_date: '2023-01-15',
    warranty_expiry_date: '2025-01-15',
  },
  '14': {
    id: 14,
    brand: 'Brother',
    model: 'Brother HL-L2370DW',
    location: 'Office 1, Floor 2',
    ip_address: '192.168.1.114',
    mac_address: '00:1A:2B:3C:4D:7P',
    department_id: 1,
    serial_number: 'SN456890',
    firmware_version: '2024.05.01',
    installation_date: '2023-02-10',
    warranty_expiry_date: '2025-02-10',
  },
  '15': {
    id: 15,
    brand: 'Canon',
    model: 'Canon imageCLASS D1620',
    location: 'Lab 1, Floor 3',
    ip_address: '192.168.1.115',
    mac_address: '00:1A:2B:3C:4D:8Q',
    department_id: 2,
    serial_number: 'SN678901',
    firmware_version: '2024.06.01',
    installation_date: '2023-03-20',
    warranty_expiry_date: '2025-03-20',
  },
  '16': {
    id: 16,
    brand: 'Epson',
    model: 'Epson WorkForce Pro WF-3720',
    location: 'Lab 1, Floor 3',
    ip_address: '192.168.1.116',
    mac_address: '00:1A:2B:3C:4D:9R',
    department_id: 2,
    serial_number: 'SN234567',
    firmware_version: '2024.07.01',
    installation_date: '2023-04-25',
    warranty_expiry_date: '2025-04-25',
  },
  '17': {
    id: 17,
    brand: 'Samsung',
    model: 'Samsung ProXpress M4583FX',
    location: 'Office 2, Floor 1',
    ip_address: '192.168.1.117',
    mac_address: '00:1A:2B:3C:4D:0S',
    department_id: 3,
    serial_number: 'SN789012',
    firmware_version: '2024.08.01',
    installation_date: '2023-05-15',
    warranty_expiry_date: '2025-05-15',
  },
  '18': {
    id: 18,
    brand: 'Lexmark',
    model: 'Lexmark MC2535adwe',
    location: 'Office 2, Floor 1',
    ip_address: '192.168.1.118',
    mac_address: '00:1A:2B:3C:4D:1T',
    department_id: 3,
    serial_number: 'SN345678',
    firmware_version: '2024.09.01',
    installation_date: '2023-06-30',
    warranty_expiry_date: '2025-06-30',
  },
  '19': {
    id: 19,
    brand: 'Brand A',
    model: 'Model X',
    location: 'Building A, Room 101',
    ip_address: '192.168.1.10',
    mac_address: '00:14:22:01:23:45',
    department_id: 1,
    serial_number: 'SN12345',
    firmware_version: '1.0.0',
    installation_date: '2022-01-15',
    warranty_expiry_date: '2023-01-15',
  },
  '20': {
    id: 20,
    brand: 'Brand B',
    model: 'Model Y',
    location: 'Building B, Room 202',
    ip_address: '192.168.1.20',
    mac_address: '00:14:22:02:34:56',
    department_id: 2,
    serial_number: 'SN67890',
    firmware_version: '1.1.0',
    installation_date: '2022-02-20',
    warranty_expiry_date: '2023-02-20',
  },
  '21': {
    id: 21,
    brand: 'Brand C',
    model: 'Model Z',
    location: 'Building C, Room 303',
    ip_address: '192.168.1.30',
    mac_address: '00:14:22:03:45:67',
    department_id: 3,
    serial_number: 'SN54321',
    firmware_version: '1.2.0',
    installation_date: '2022-03-25',
    warranty_expiry_date: '2023-03-25',
  },
  '22': {
    id: 22,
    brand: 'Brand D',
    model: 'Model W',
    location: 'Building D, Room 404',
    ip_address: '192.168.1.40',
    mac_address: '00:14:22:04:56:78',
    department_id: 4,
    serial_number: 'SN23456',
    firmware_version: '1.3.0',
    installation_date: '2022-04-10',
    warranty_expiry_date: '2023-04-10',
  },
  '23': {
    id: 23,
    brand: 'Brand E',
    model: 'Model V',
    location: 'Building E, Room 505',
    ip_address: '192.168.1.50',
    mac_address: '00:14:22:05:67:89',
    department_id: 5,
    serial_number: 'SN78901',
    firmware_version: '1.4.0',
    installation_date: '2022-05-15',
    warranty_expiry_date: '2023-05-15',
  },
  '24': {
    id: 24,
    brand: 'Brand F',
    model: 'Model U',
    location: 'Building F, Room 606',
    ip_address: '192.168.1.60',
    mac_address: '00:14:22:06:78:90',
    department_id: 6,
    serial_number: 'SN65432',
    firmware_version: '1.5.0',
    installation_date: '2022-06-20',
    warranty_expiry_date: '2023-06-20',
  },
  '25': {
    id: 25,
    brand: 'Brand G',
    model: 'Model T',
    location: 'Building G, Room 707',
    ip_address: '192.168.1.70',
    mac_address: '00:14:22:07:89:01',
    department_id: 7,
    serial_number: 'SN34567',
    firmware_version: '1.6.0',
    installation_date: '2022-07-25',
    warranty_expiry_date: '2023-07-25',
  },
  '26': {
    id: 26,
    brand: 'Brand H',
    model: 'Model S',
    location: 'Building H, Room 808',
    ip_address: '192.168.1.80',
    mac_address: '00:14:22:08:90:12',
    department_id: 8,
    serial_number: 'SN89012',
    firmware_version: '1.7.0',
    installation_date: '2022-08-30',
    warranty_expiry_date: '2023-08-30',
  },
  '27': {
    id: 27,
    brand: 'Brand I',
    model: 'Model R',
    location: 'Building I, Room 909',
    ip_address: '192.168.1.90',
    mac_address: '00:14:22:09:01:23',
    department_id: 9,
    serial_number: 'SN32109',
    firmware_version: '1.8.0',
    installation_date: '2022-09-05',
    warranty_expiry_date: '2023-09-05',
  },
  '28': {
    id: 28,
    brand: 'Brand J',
    model: 'Model Q',
    location: 'Building J, Room 1010',
    ip_address: '192.168.1.100',
    mac_address: '00:14:22:10:12:34',
    department_id: 10,
    serial_number: 'SN87654',
    firmware_version: '1.9.0',
    installation_date: '2022-10-10',
    warranty_expiry_date: '2023-10-10',
  },
  '29': {
    id: 29,
    brand: 'Brand K',
    model: 'Model P',
    location: 'Building K, Room 1111',
    ip_address: '192.168.1.110',
    mac_address: '00:14:22:11:23:45',
    department_id: 11,
    serial_number: 'SN56789',
    firmware_version: '2.0.0',
    installation_date: '2022-11-15',
    warranty_expiry_date: '2023-11-15',
  },
  '30': {
    id: 30,
    brand: 'Brand L',
    model: 'Model O',
    location: 'Building L, Room 1212',
    ip_address: '192.168.1.120',
    mac_address: '00:14:22:12:34:56',
    department_id: 12,
    serial_number: 'SN43210',
    firmware_version: '2.1.0',
    installation_date: '2022-12-20',
    warranty_expiry_date: '2023-12-20',
  },
  '31': {
    id: 31,
    brand: 'Brand M',
    model: 'Model N',
    location: 'Building M, Room 1313',
    ip_address: '192.168.1.130',
    mac_address: '00:14:22:13:45:67',
    department_id: 13,
    serial_number: 'SN21098',
    firmware_version: '2.2.0',
    installation_date: '2023-01-25',
    warranty_expiry_date: '2024-01-25',
  },
  '32': {
    id: 32,
    brand: 'Brand N',
    model: 'Model M',
    location: 'Building N, Room 1414',
    ip_address: '192.168.1.140',
    mac_address: '00:14:22:14:56:78',
    department_id: 14,
    serial_number: 'SN87632',
    firmware_version: '2.3.0',
    installation_date: '2023-02-01',
    warranty_expiry_date: '2024-02-01',
  },
  '33': {
    id: 33,
    brand: 'Brand O',
    model: 'Model L',
    location: 'Building O, Room 1515',
    ip_address: '192.168.1.150',
    mac_address: '00:14:22:15:67:89',
    department_id: 15,
    serial_number: 'SN67854',
    firmware_version: '2.4.0',
    installation_date: '2023-03-10',
    warranty_expiry_date: '2024-03-10',
  },
};

export { printers, metrics };
