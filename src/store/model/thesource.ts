import {Store} from './store';

export const TheSource: Store = {
  currency: '$',
  labels: {
    maxPrice: {
      container: '#content > section > section > div.productDescription > div.pdp-details-wrap.mobile-container > div',
      euroFormat: false,
    },
    inStock: {
      container: '.addToCartButton',
      text: ['Add to Cart'],
    },
    outOfStock: {
      container: '.addToCartButton[disabled="disabled"]',
      text: ['Coming Soon'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.thesource.ca/en-ca/smart-home-household/smart-home/voice-assistants-smart-speakers/amazon-echo-show-5-%282nd-gen%2c-2021-release%29-smart-display-with-alexa-and-2-mp-camera---glacier-white/p/108094923',
    },
    {
      brand: 'nintendo',
      model: 'special edition',
      series: 'metroid dread',
      url: 'https://www.thesource.ca/en-ca/gaming/nintendo/nintendo-switch-games/metroid%e2%84%a2-dread%3a-special-edition-for-nintendo-switch%09/p/108095418',
    },
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.thesource.ca/en-ca/gaming/playstation/all-ps5/playstation%c2%ae5-console/p/108090499',
    },
  ],
  name: 'thesource',
  successStatusCodes: [[0, 399], 404],
};
