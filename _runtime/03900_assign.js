// _runtime/03900_assign.js

export default function assign(arg0, obj) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const typeError = new TypeError("assign requires that input parameter not be null or undefined");
    throw typeError;
  } else {
    for (const key10006 in arg1) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10006);
      } else {
        hasOwnPropertyResult = call(arg1, key10006);
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        arg0[key10006] = arg1[key10006];
        continue;
      }
      continue;
    }
    return arg0;
  }
};
export default exports.default;