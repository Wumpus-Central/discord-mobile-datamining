// === Module 15392: _extends ===

// Module 15392 (_extends)
let hasOwnProperty;

function _extends() {
  if (Object.assign) {
    const _Object = Object;
    exports = assign.bind();
  } else {
    exports = function(arg0) {
      let num;
      for (let num = 1; num < arguments.length; num = num + 1) {
        let tmp = arguments[num];
        for (const key10011 in tmp) {
          hasOwnProperty = {}.hasOwnProperty;
          if (!hasOwnProperty.call(tmp, key10011)) {
            continue;
          } else {
            arg0[key10011] = tmp[key10011];
            continue;
          }
          continue;
        }
      }
      return arg0;
    };
  }
  module.exports = exports;
  return exports(...arguments);
}
exports = _extends;

export default _extends;