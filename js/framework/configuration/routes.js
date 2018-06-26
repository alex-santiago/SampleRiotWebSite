var routes = {};

routes.init = function () {

  route('/', function () {
    //riot.mount('splash-screen');
    riot.mount('#wrapper', 'wrapper');
  });

  route('/site-error', function () {
    riot.mount('#mainContentBody', 'site-error');
  }, 'Error Message');

  route('/clients-manage', function () {
  	riot.mount('#mainContentBody', 'clients-manage');
  }, language.client.title.clientsManage);

  route('/clients-detail', function () {
    riot.mount('#mainContentBody', 'clients-detail');
  }, language.client.title.clientsDetail);

  route('/clients-system', function () {
    riot.mount('#mainContentBody', 'clients-system');
  }, language.client.title.clientsSystem);

  route('/eulas-manage', function () {
    riot.mount('#mainContentBody', 'eulas-manage');
  }, language.eula.title.eulasManage);

  route('/eulas-edit', function () {
    riot.mount('#mainContentBody', 'eulas-edit');
  }, language.eula.title.eulasEdit);

  route('/accounts-manage', function () {
  	riot.mount('#mainContentBody', 'accounts-manage');
  }, language.client.title.clientsAccountManage);

  route('/accounts-detail', function () {
    riot.mount('#mainContentBody', 'accounts-detail');
  }, language.client.title.clientsAccountDetails);

  route('/page-test', function () {
  	riot.mount('#mainContentBody', 'page-test');
  }, 'Page Test');
}
