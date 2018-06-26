const system = new Object();

system.controllers = {};
let jsonReturn = {};
/* clients */
system.controllers.clients = {};
system.controllers.clients.listClients = function (onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.clients.saveClient = function (jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.clients.updateClient = function (jsonParam, jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.clients.unblockClient = function (jsonParam, jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

/* eulas */
system.controllers.eulas = {};
system.controllers.eulas.listEulas = function (onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.eulas.saveEULA = function (jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.eulas.updateEULA = function (jsonParam, jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

/* systems */
system.controllers.systems = {};
system.controllers.systems.listClientSystems = function (param, onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.clients.saveSystem = function (jsonParam, jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.clients.updateSystem = function (jsonParam, jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

/* countries */
system.controllers.countries = {};
system.controllers.countries.listCoutry = function (onSuccess) {
  let countries = [];
  countries = getTestCountries();
  onSuccess(countries);
}

/* languages */
system.controllers.languages = {};
system.controllers.languages.listLanguage = function (onSuccess) {
  let languages = [];
  languages = getTestLanguages();
  onSuccess(languages);
}

/* accounts */
system.controllers.accounts = {};
system.controllers.accounts.listAccounts = function (jsonParam, onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.accounts.saveAccount = function (jsonParam, jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

system.controllers.accounts.updateAccount = function (jsonParam, jsonData, onSuccess) {
    onSuccess(jsonReturn);
}

/* accounts Pages */
system.controllers.accounts.pageAccounts = function (jsonParam, onSuccess) {
  let currentPageDone = false;
  let nextPageDone = false;
  let currentPage = {};
  let nextPage = {};

  // get current page
  system.controllers.accounts.listAccounts(jsonParam, function(accounts) {
    currentPageDone = true;
    currentPage = accounts;
    pageAccountsReturn();
  });

  // get next page
  let newParam = new Object();
  newParam.page = jsonParam.page+1;
  newParam.name = jsonParam.name;
  newParam.clientId = jsonParam.clientId;
  system.controllers.accounts.listAccounts(newParam, function(accounts) {
    nextPageDone = true;
    nextPage = accounts;
    pageAccountsReturn();
  });

  const pageAccountsReturn = () => {
    if (currentPageDone && nextPageDone) {
      let pages = newPages();
      pages.length = currentPage.length;
      pages.current = jsonParam.page;
      pages.previous = (jsonParam.page > 1);
      pages.next = (nextPage.length>0);
      pages.page = currentPage;
      pages.params = jsonParam;
      onSuccess(pages);
    }
  };
}
