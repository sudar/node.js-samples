var dns = require('dns'); // include the DNS module

dns.resolve4('sudarmuthu.com', function (err, addresses) {
    if (err) throw err; // if there was any error

    console.log('addresses: ' + JSON.stringify(addresses));// ip address

    // Do a reverse lookup
    addresses.forEach(function (a) {
        dns.reverse(a, function (err, domains) {
            if (err) {
                // on error
                console.log('reverse for ' + a + ' failed: ' +
                err.message);
            } else {
                // sucess
                console.log('reverse for ' + a + ': ' +
                JSON.stringify(domains));
            }
        });
    });
});