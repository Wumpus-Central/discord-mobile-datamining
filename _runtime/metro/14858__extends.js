// _runtime/metro/14858__extends.js
function _extends() {
  if (Object.assign) {
    const _Object = Object;
    let fn = assign.bind();
  } else {
    fn = (arg0) => {
      for (let num = 1; num < arguments.length; num = num + 1) {
        let tmp = arguments[num];
        for (const key10011 in tmp) {
          let hasOwnProperty = {}.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10011);
          } else {
            hasOwnPropertyResult = call(tmp, key10011);
          }
          if (!hasOwnPropertyResult) {
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
  module.exports = fn;
  const apply = fn.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(null);
  } else {
    applyArgumentsResult = apply(null, arguments);
  }
  return applyArgumentsResult;
}

export default _extends;