// const API_URL = '/example.json?domain=';
const API_URL = 'https://apis.is/isnic?domain=';

/**
 * Leit að lénum á Íslandi gegnum apis.is
 */
const program = (() => {
  function init() {

  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  program.init(domains);
});

const options = {
  domain: 'hi.is',
  registrantname: 'Háskóli Íslands',
  address: 'Sæmundargötu 2',
  city: 'Reykjavík',
  postalCode: '101',
  country: 'IS',
  phone: '',
  email: 'hostmaster@hi.is',
  registered: '11. December 1986',
  expires: '11. December 2018',
  lastChange: '29. November 2017',
};

fetch('API_URL', options)
  .then((result) => {
    if (!result.ok) {
      throw new Error('Villa við að sækja gögn');
    }
    return result.json();
  })

  .then(data => JSON.stringify(data))
  .catch(error => console.error(error));
