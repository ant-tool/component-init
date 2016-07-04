import ComponentName from '../src/component';

describe('global variables', function() {
  it('should all exist' , function() {
    expect(sinon).to.not.be.null;
    expect(expect).to.not.be.null;
    expect(should).to.not.be.null;
    expect(1).to.not.be.true;
    [1, 2].should.have.length(2);
  });
});

describe('ComponentName func', function() {
  let consoleSpy;
  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });
  afterEach(function() {
    console.log.restore();
  });
  it('should console A', function() {
    ComponentName.pigcanA();
    expect(consoleSpy).to.be.calledWith('A');
  });
  it('should console B', function() {
    ComponentName.pigcanB();
    expect(consoleSpy).to.be.calledWith('B');
  });
});
