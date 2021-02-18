(function() {
  'use strict';

  mocha.setup({ui: 'bdd'});
  window.expect = chai.expect;

  window.onload = function() {
    window.mochaPhantomJS ? mochaPhantomJS.run() : mocha.run();
  };


  // Disabling native methods is dangerous, we should spy on them instead
  before(function() {
    sinon.spy(Array.prototype,'map');
    sinon.spy(Array.prototype,'sort');
    sinon.spy(Array.prototype,'reverse');
    sinon.spy(Array.prototype,'flat');
    sinon.spy(Object,'assign');
    sinon.spy(JSON,'stringify');
    sinon.spy(JSON,'parse');
    window.analyze = o => {
      let c = 0;
      for (let k in o) {
        typeof o[k] === 'object' && (c += analyze(o[k]));
        c++;
      }
      return c;
    };
  });

  afterEach(function() {
    Array.prototype.map.reset();
    Array.prototype.sort.reset();
    Array.prototype.reverse.reset();
    Array.prototype.flat.reset();
    Object.assign.reset();
    JSON.stringify.reset();
    JSON.parse.reset();
  });

  after(function() {
    Array.prototype.map.restore();
    Array.prototype.sort.restore();
    Array.prototype.reverse.restore();
    Array.prototype.flat.restore();
    Object.assign.restore();
    JSON.stringify.restore();
    JSON.parse.restore();
    delete window.analyze;
  });

}());
