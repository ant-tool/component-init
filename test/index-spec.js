var coffee = require('coffee');
var join = require('path').join;
var mkdirSync = require('fs').mkdirSync;
var binPath = join(__dirname, '../bin/component-init');
var rimraf = require('rimraf');

describe('component-init', function() {
  var tmpPath = join(__dirname, 'tmp');
  var cwd = process.cwd();

  before(function() {
    mkdirSync(tmpPath);
    process.chdir(tmpPath);
  });

  after(function() {
    rimraf.sync(tmpPath);
    process.chdir(cwd);
  });

  it('init', function(done) {
    coffee
      .spawn(binPath)
      .expect('stdout', [/Write \.\/index\.js/, /npm|tnpm|cnpm install end/])
      //.expect('stderr', '')
      .debug()
      .end(done);
  });

  it('run transpiler', function(done) {
    coffee.spawn('npm', 'run transpiler'.split(' '))
      .expect('stdout', [/src\/component\.js -> lib\/component\.js/, /src\/index\.js -> lib\/index\.js/])
      .expect('stderr', '')
      .debug()
      .end(done);
  });

  it('run build', function(done) {
    coffee.spawn('npm', 'run build'.split(' '))
      .expect('stdout', [/atool-build/, /Time:/])
      .expect('stderr', '')
      .debug()
      .end(done);
  });

  it('run test', function(done) {
    coffee.spawn('npm', 'run test'.split(' '))
      .expect('stdout', [/dora: listened on 9876/, /webpack: bundle build is now finished\./, /1 passing/,
        /You can see more detail in coverage\/report-html\/index\.html/])
      .expect('stderr', '')
      .debug()
      .end(done);
  });

  it('run doc', function(done) {
    // 由于 npm run 不会透传 signal, 这里直接引 bin 文件
    var docPath = join(__dirname, './tmp/node_modules/.bin/atool-doc');
    var c = coffee.spawn(docPath)
      .expect('stdout', [/dora: listened on 8002/, /webpack: bundle build is now finished\./])
      .expect('stderr', '')
      .debug()
      .end(done);

    setTimeout(function() {
      c.proc.kill();
    }, 20000);
  });
});
