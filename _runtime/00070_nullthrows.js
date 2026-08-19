// === Module 70: nullthrows ===

// Module 70 (nullthrows)
function nullthrows(arg0, arg1) {
  if (null != arg0) {
    return arg0;
  } else {
    let text = arg1;
    if (undefined === arg1) {
      text = `Got unexpected ${arg0}`;
    }
    error = new Error(text);
    error.framesToPop = 1;
    throw error;
  }
}
module.exports.default = nullthrows;

export default nullthrows;