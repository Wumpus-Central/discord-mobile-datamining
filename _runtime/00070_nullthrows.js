// _runtime/00070_nullthrows.js
function nullthrows(arg0, arg1) {
  if (null != arg0) {
    return arg0;
  } else {
    let text = arg1;
    const _Error = Error;
    if (undefined === arg1) {
      text = `Got unexpected ${arg0}`;
    }
    const self = this;
    const self2 = this;
    const _Error1 = new _Error(text);
    _Error1.framesToPop = 1;
    throw _Error1;
  }
}
module.exports.default = nullthrows;

export default nullthrows;
