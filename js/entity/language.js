const newLanguage = () => {
  let language = new Object();
  language.new = true;

  language.id = '';
  language.name = '';
  language.code = '';

  return language;
};

const getTestLanguages = () => {
  let languages = [];

  let language = new Object();
  language.id = 1;
  language.name = 'Português';
  language.code = 'pt';
  languages.push(language);

  language = new Object();
  language.id = 2;
  language.name = 'English';
  language.code = 'en';
  languages.push(language);

  language = new Object();
  language.id = 8;
  language.name = 'Espagnol';
  language.code = 'es';
  languages.push(language);

  return languages;
}
