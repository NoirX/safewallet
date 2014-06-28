// TODO: encrypt this file
module['exports'] = {
  "frontend": {
    port: 8888
  },
  "coldstorage": {
    "bitcoin": [{ public_key: "148dBGs99rnFHSu3euZYziABse6Prs5L7J" }],
    "dogecoin": [{ public_key: "DS6p3PRcPrECMRzX37H92PFoifnrj717ZB" }],
    "litecoin": [{ public_key: "148dBGs99rnFHSu3euZYziABse6Prs5L7J" }],
    "noirshares": [{ public_key: "DS6p3PRcPrECMRzX37H92PFoifnrj717ZB" }],
    "noirbits": [{ public_key: "148dBGs99rnFHSu3euZYziABse6Prs5L7J" }],
    "noirtokens": [{ public_key: "DS6p3PRcPrECMRzX37H92PFoifnrj717ZB" }],
    "peercoin": [{ public_key: "PRsyinCxhkJ5ib7cWXzqTTYXN7mwJybtA4" }]
  },
  "deposits": {
    "bitcoin": {
      host: 'localhost',
      port: 8333,
      user: 'username',
      pass: 'password',
    },
    "litecoin": {
      host: 'localhost',
      port: 8334,
      user: 'username',
      pass: 'password',
    },
    "noirbits": {
      host: 'localhost',
      port: 8335,
      user: 'username',
      pass: 'password',
    },
    "noirshares": {
      host: 'localhost',
      port: 8336,
      user: 'username',
      pass: 'password',
    },
    "noirtokens": {
      host: 'localhost',
      port: 8337,
      user: 'username',
      pass: 'password',
    },
    "peercoin": {
      host: 'localhost',
      port: 9902,
      user: 'username',
      pass: 'password'
    },
    "dogecoin": {
      host: 'localhost',
      port: 9903,
      user: 'username',
      pass: 'password'
    }
  },
  "withdrawals": {
    "bitcoin": {
      host: 'localhost',
      port: 9801,
      user: 'username',
      pass: 'password',
    },
    "litecoin": {
      host: 'localhost',
      port: 9804,
      user: 'username',
      pass: 'password',
    },
    "noirbits": {
      host: 'localhost',
      port: 9805,
      user: 'username',
      pass: 'password',
    },
    "noirtokens": {
      host: 'localhost',
      port: 9806,
      user: 'username',
      pass: 'password',
    },
    "noirshares": {
      host: 'localhost',
      port: 9807,
      user: 'username',
      pass: 'password',
    },
    "peercoin": {
      host: 'localhost',
      port: 9802,
      user: 'username',
      pass: 'password'
    },
    "dogecoin": {
      host: 'localhost',
      port: 9803,
      user: 'username',
      pass: 'password'
    }
  },
  "datasource": {
    type: "couchdb",
    port: 5984,
    host: "localhost"
  },
  "sendgrid": {
    api_user: "username",
    api_key: "password"
  }
};
