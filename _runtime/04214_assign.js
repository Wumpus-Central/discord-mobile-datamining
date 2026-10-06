// _runtime/04214_assign.js
let hasOwnProperty;

export default function assign(arg0, obj) {
  if (null == arg0) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("assign requires that input parameter not be null or undefined");
    throw typeError;
  } else {
    for (const key10006 in obj) {
      let _Object = Object;
      hasOwnProperty = Object.prototype.hasOwnProperty;
      if (!hasOwnProperty.call(obj, key10006)) {
        continue;
      } else {
        arg0[key10006] = obj[key10006];
        continue;
      }
      continue;
    }
    return arg0;
  }
}
