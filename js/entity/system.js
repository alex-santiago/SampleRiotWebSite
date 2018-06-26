const newSystem = () => {
  let system = new Object();
  system.new = true;

  system.id = '';
  system.name = '';
  system.url = '';

  system.systemConfiguration = new Object();
  system.systemConfiguration.countryId = '';
  system.systemConfiguration.legacyConfigurationId = '';
  system.systemConfiguration.returnImperialUnitData = false;
  system.systemConfiguration.returnProductStandards = false;
  system.systemConfiguration.returnImages = false;
  system.systemConfiguration.remoteHostIP = '';
  system.systemConfiguration.useAlternativeViscosity = false;

  system.style = new Object();
  system.style.image = '';
  system.style.icon = '';
  system.style.custom = '';

  system.systemEulas = new Object();

  return system;
};

const getTestSystems = (index) => {
  let systems = [];

  let system = newSystem();
  system.id = '49';
  system.name = 'Test Web USA';
  system.url = 'alexandre.com\\testweb\\ui\\';

  system.systemConfiguration = new Object();
  system.systemConfiguration.countryId = '6';
  system.systemConfiguration.legacyConfigurationId = 'info049';
  system.systemConfiguration.returnImperialUnitData = true;
  system.systemConfiguration.returnProductStandards = true;
  system.systemConfiguration.returnImages = false;
  system.systemConfiguration.remoteHostIP = '192.168.254.20';
  system.systemConfiguration.useAlternativeViscosity = true;

  system.style = new Object();
  system.style.image = 'img.jpg';
  system.style.icon = 'icon.ico';
  system.style.custom = 'custom.jpg';

  system.systemEulas = new Object();
  systems.push(system);

  system = newSystem();
  system.id = '51';
  system.name = 'Test Web Chile';
  system.url = 'testweb\\test1\\ws\\';

  system.systemConfiguration = new Object();
  system.systemConfiguration.countryId = '11';
  system.systemConfiguration.legacyConfigurationId = 'info051';
  system.systemConfiguration.returnImperialUnitData = true;
  system.systemConfiguration.returnProductStandards = true;
  system.systemConfiguration.returnImages = false;
  system.systemConfiguration.remoteHostIP = '192.168.204.10';
  system.systemConfiguration.useAlternativeViscosity = true;

  system.style = new Object();
  system.style.image = 'img.jpg';
  system.style.icon = 'icon.ico';
  system.style.custom = 'custom.jpg';

  system.systemEulas = new Object();
  systems.push(system);

  return systems;
}
