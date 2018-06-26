const newCountry = () => {
  let country = new Object();
  country.new = true;

  country.id = '';
  country.name = '';
  country.code = '';

  return country;
};

const getTestCountries = () => {
  let countries = [];

  let country = new Object();
  country.id = 1;
  country.name = 'Brazil';
  country.code = 'BR';
  countries.push(country);

  country = new Object();
  country.id = 5;
  country.name = 'Canada';
  country.code = 'CA';
  countries.push(country);

  country = new Object();
  country.id = 6;
  country.name = 'USA';
  country.code = 'US';
  countries.push(country);

  country = new Object();
  country.id = 11;
  country.name = 'Chile';
  country.code = 'CL';
  countries.push(country);

  return countries;
}
