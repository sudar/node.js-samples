var spawn = require('child_process').spawn,// require child process module
    grep  = spawn('grep', ['ssh']); // sprawn a child process

console.log('Spawned child pid: ' + grep.pid); // get the id of the child process
grep.stdin.end(); // end the child process