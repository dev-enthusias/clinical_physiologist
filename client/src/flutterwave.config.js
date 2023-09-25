import logo from './assets/logo.png';

export default function flutterwaveConfig({ price, description }) {
  return (config = {
    public_key: 'FLWPUBK-**************************-X',
    tx_ref: Date.now(),
    amount: price,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'PAPCPN',
      description: description,
      logo: <img src={logo} />,
    },
  });
}
