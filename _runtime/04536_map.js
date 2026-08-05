// _runtime/04536_map.js
const ObjectResult = Object("a");
let tmp2 = "a" !== ObjectResult[0];
if (!tmp2) {
  tmp2 = !(0 in ObjectResult);
}
let closure_3 = require("callBoundIntrinsic")("String.prototype.split");

export default function map(arg0) {
  const tmp3 = require(4537) /* ToObject */(this);
  let arr = tmp3;
  if (closure_2) {
    arr = tmp3;
    if (tmp(4539)(tmp3)) {
      arr = callback(tmp3, "");
    }
  }
  const tmp5 = require(4540) /* ToUint32 */(arr.length);
  if (require(4564) /* apply */(arg0)) {
    if (arguments.length > 1) {
      const tmp11 = arguments[1];
    }
    const tmp12 = tmp(4565)(tmp3, tmp5);
    for (let num2 = 0; num2 < tmp5; num2 = num2 + 1) {
      let tmp13 = require;
      let tmp14 = dependencyMap;
      let tmp15 = require(4552) /* ToString */(num2);
      let tmp16 = num2;
      if (require(4588) /* HasProperty */(tmp3, tmp15)) {
        let tmp17 = tmp13(4575)(tmp3, tmp15);
        let items = [tmp17, num2, tmp3];
        let tmp18 = tmp13(4589)(arg0, tmp11, items);
        let tmp19 = tmp13(4590)(tmp12, tmp15, tmp18);
      }
    }
    return tmp12;
  } else {
    const _TypeError = TypeError;
    const typeError = new TypeError("Array.prototype.map callback must be a function");
    throw typeError;
  }
};