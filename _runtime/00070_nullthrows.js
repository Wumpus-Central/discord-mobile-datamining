// _runtime/00070_nullthrows.js
function nullthrows(arg0, arg1) {
  if (null != arg0) {
    return arg0;
  } else {
    let text = arg1;
    if (undefined === arg1) {
      text = `Got unexpected ${arg0}`;
    }
    const error = new Error(text);
    error.framesToPop = 1;
    throw error;
  }
}
module.exports.default = nullthrows;

export default nullthrows;