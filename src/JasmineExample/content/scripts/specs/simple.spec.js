describe('Simple Module Tests', function () {
    var theModule;
    beforeEach(function () {
        theModule = new SimpleModule();
    });

    it('should return the sum of two values', function () {
        expect(theModule.add(1, 2)).toEqual(3);
    });

    it('should return the sub of two values', function () {
         expect(theModule.sub(10, 3)).toEqual(7);
    });
});