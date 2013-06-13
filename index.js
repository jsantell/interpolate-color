/**
 * A simple color interpolator.
 * Parses a `from` and `to` HSL string in the format
 * `hsl(200, 100%, 50%)` and a step value between 0 and 1
 * and returns a new HSL string.
 * An optional `precision` value may be provided for the
 * new HSL string
 *
 * @param {string} from
 * @param {string} to
 * @param {number} step
 * @param {precision} number
 */

var regex = /^hsl\(\s*([\d|\.]*)\s*,\s*([\d|\.]*)%\s*,\s*([\d|\.]*)%/;
function interpolate (start, end, step, precision) {
  precision = precision != null ? precision : 0;
  start = start.match(regex);
  end = end.match(regex);
  var
    startH = +start[1],
    startS = +start[2],
    startL = +start[3],
    endH   = +end[1],
    endS   = +end[2],
    endL   = +end[3];

  // Shortest path, taken from D3's interpolation
  if (endH > 180)
    endH -= 360;
  else if (endH < -180)
    endH += 360;

  var
    h = (startH - (startH - endH) * step).toFixed(precision),
    s = (startS - (startS - endS) * step).toFixed(precision),
    l = (startL - (startL - endL) * step).toFixed(precision);

  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}

module.exports = interpolate;
