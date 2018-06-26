item = new Object();
item.id = "item0";
item.ico = "fa-home fa-lg";
item.description = "Home";
item.route = "/";
item.children = [];
menuItens.push(item);

item = new Object();
item.id = "item1";
item.ico = "fa-user";
item.description = language.client.title.clientsManage;
item.route = "/clients-manage";
item.children = [];
menuItens.push(item);

item = new Object();
item.id = "item2";
item.ico = "fa-database";
item.description = language.eula.title.eulasManage;
item.route = "/eulas-manage";
item.children = [];
menuItens.push(item);
