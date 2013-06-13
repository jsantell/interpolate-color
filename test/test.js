var i = require('interpolate-color');

var green = 'hsl(120, 100%, 50%)';
var red = 'hsl(0, 100%, 50%)';
var blue = 'hsl(240, 100%, 50%)';

describe('Color Interpolator', function () {
  it('has correct interpolation', function () {
    expect(i(green, red, 0.5)).to.equal('hsl(60, 100%, 50%)');
    expect(i(green, red, 0)).to.equal(green);
    expect(i(green, red, 1)).to.equal(red);
    expect(i(blue, red, 0.75)).to.equal('hsl(60, 100%, 50%)');

    expect(i('hsl(25, 0%, 100%)', 'hsl(125, 100%, 0%)', 0.5)).to.equal(
      'hsl(75, 50%, 50%)'
    );
  });

  it('ignores extra spaces', function () {
    expect(i('hsl(25,0%,100%)', 'hsl(  125,  100% , 0% )', 0.5)).to.equal(
      'hsl(75, 50%, 50%)'
    );
  });

  it('accepts precision values', function () {
    expect(i(green, red, 1, 2)).to.equal('hsl(0.00, 100.00%, 50.00%)');
  });

  it('accepts input with precision', function () {
    expect(i('hsl(120.00, 100.00%, 50.00%)', 'hsl(0.00, 100.00%, 50.00%)', 0.5)).to.equal(
      'hsl(60, 100%, 50%)'
    );
  });

  it('accepts negative hue values', function () {
    expect(i('hsl(-240, 100%, 50%)', red, 0.5)).to.equal('hsl(-120, 100%, 50%)');
  });
});
