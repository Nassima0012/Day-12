const prompt = require('prompt');

let contacts = [];

function addContact() {
  prompt.start();
  prompt.get(['name', 'phoneNumber'], function (err, result) {
    switch(true) {
      case err:
        return onErr(err);
      default:
        contacts.push({ name: result.name, phoneNumber: result.phoneNumber });
        console.log('Contact added successfully!');
        showMainMenu();
    }
  });
}
