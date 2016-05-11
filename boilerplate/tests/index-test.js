describe('global variables', function() {
  it('should all exist' , function() {
    expect(sinon).to.not.be.null;
    expect(expect).to.not.be.null;
    expect(should).to.not.be.null;
    expect(1).to.not.be.true;
    [1, 2].should.have.length(2);
  });
});
