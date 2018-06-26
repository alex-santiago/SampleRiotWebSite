 const newAccount = () => {
  let account = new Object();
  account.new = true;

  account.id = '';
  account.name = '';
  account.email = '';
  account.password = '';
  account.clientId = '0';
  account.disabled = false;
  account.blocked = false;
  account.preference = new Object();
  account.preference.countryId = '0';
  account.preference.languageId = '0';
  account.preference.culture = '';
  account.systemsIds = [];

  return account;
};

const getTestAccounts = () => {
  let accounts = [];

  let account = newAccount();
  account.id = '1';
  account.name = 'Alexandre Santiago da Silva';
  account.email = 'assilva@gmail.com';
  // account.password = '123456';
  account.clientId = '1';
  account.disabled = false;
  account.blocked = false;
  account.preference = new Object();
  account.preference.countryId = '1';
  account.preference.languageId = '1';
  account.preference.culture = '';
  account.systemsIds = [];
  account.systemsIds.push(49);
  account.systemsIds.push(51);
  accounts.push(account);

  account = newAccount();
  account.id = '1';
  account.name = 'Cassio V Tavares';
  account.email = 'cvt@gmail.com';
  // account.password = '123456';
  account.clientId = '1';
  account.disabled = false;
  account.blocked = false;
  account.preference = new Object();
  account.preference.countryId = '1';
  account.preference.languageId = '1';
  account.preference.culture = '';
  account.systemsIds = [];
  account.systemsIds.push(49);
  accounts.push(account);

  return accounts;
}
