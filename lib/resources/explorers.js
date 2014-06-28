var resource = require('resource'),
    explorers = resource.define('explorers');

explorers.method('getLink', function getLink(options) {
  var link;
  switch (options.currency) {
    case 'bitcoin':
     link = 'https://blockchain.info/address/' + options.address;
    break;
    case 'litecoin':
      link = 'http://block-explorer.com/address/' + options.address;
    break;
    case 'noirbits':
      link = 'http://block-explorer.com/address/' + options.address;
    break;
    case 'noirshares':
      link = 'http://nrs.agarkiig.us/address/' + options.address;
    break;
    case 'noirtokens':
      link = 'http://block-explorer.com/address/' + options.address;
    break;
    case 'peercoin':
      link = 'http://ppc.blockr.io/address/info/' + options.address;
    break;
    case 'dogecoin':
      link = 'https://dogechain.info/address/' + options.address;
    break;
  }
  return link;
});

exports.explorers = explorers;
