// === Module 6354: toPrimitive ===

// Module 6354 (toPrimitive)
import _typeof from "_typeof" /* 6355 */;


export default function toPrimitive(arg0, arg1) {
  const obj = _typeof;
  if ("object" == obj.default(arg0)) {
    if (arg0) {
      let str = arg1;
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const call = tmp4.call;
        if (!str) {
          str = "default";
        }
        const callResult = call(arg0, str);
        const tmpResult = _typeof;
        if ("object" != tmpResult.default(callResult)) {
          return callResult;
        } else {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        return "string" === str ? String : Number(arg0);
      }
    }
  }
  return arg0;
};