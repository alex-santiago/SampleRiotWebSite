const newClient = () => {
  let client = new Object();
  client.new = true;

  client.id = '';
  client.name = '';
  client.tradeName = '';
  client.registerNumber = '';
  client.site = '';
  client.phone = '';
  client.email = '';
  client.isBlocked = false;

  client.address = new Object();
  client.address.streetAddress = '';
  client.address.city = '';
  client.address.state = '';
  client.address.zip = '';

  client.settings = new Object();
  client.settings.workOrderReportSettings = new Object();
  client.settings.workOrderReportSettings.logoUrl = '';
  client.settings.workOrderReportSettings.pageType = '';

  client.settings.workOrderReportSettings.margins = new Object();
  client.settings.workOrderReportSettings.margins.top = '';
  client.settings.workOrderReportSettings.margins.bottom = '';
  client.settings.workOrderReportSettings.margins.left = '';
  client.settings.workOrderReportSettings.margins.right = '';

  return client;
};

const getTestClients = () => {
  let clients = [];

  let client = newClient();
  client.id = '1';
  client.name = 'Client test1';
  client.tradeName = 'Client test 1';
  client.registerNumber = 'cli001';
  client.site = 'url\\test\\1';
  client.phone = '1115558191';
  client.email = 'test1@test.com';

  client.address = new Object();
  client.address.streetAddress = '101 ST Test';
  client.address.city = 'New Test City';
  client.address.state = 'TS';
  client.address.zip = '101 TST';
  clients.push(client);

  client = newClient();
  client.id = '2';
  client.name = 'Client test2';
  client.tradeName = 'Client test 2';
  client.registerNumber = 'cli002';
  client.site = 'url\\test\\2';
  client.phone = '2225558191';
  client.email = 'test2@test.com';

  client.address = new Object();
  client.address.streetAddress = '202 ST Test';
  client.address.city = 'New Test City';
  client.address.state = 'TS';
  client.address.zip = '202 TST';
  clients.push(client);

  return clients;
}
