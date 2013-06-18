# interpolate-color

[view example](http://jsantell.github.io/interpolate-color)

A simple color interpolator component

## Installation

    $ component install jsantell/interpolate-color

## Example Usage

```javascript
var interpolate = require('interpolate-color');
var red = 'hsl(0, 100%, 50%)';
var green = 'hsl(120, 100%, 50%)';

interpolate(red, green, 0.5); // 'hsl(60, 100%, 50%)'
```

## API

### interpolate(from, to, step, [precision])

- `from` the starting position HSL string (`hsl(0, 100%, 50%)`)
- `to` the end position HSL string
- `step` the normalized value (between 0 and 1) of the interpolation. A step of `0.5` would be the middle of `from` and `to`
- `precision` an optional argument of how many points of precision the results should have (default: `0`)


## Tests

View `./test/index.html`

## License

MIT License
