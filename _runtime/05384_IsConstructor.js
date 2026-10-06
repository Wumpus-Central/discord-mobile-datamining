// _runtime/05384_IsConstructor.js
import GetIntrinsic from "05385_GetIntrinsic.js";
import DefinePropertyOrThrow from "05386_DefinePropertyOrThrow.js";

let tmp4;
const tmp = GetIntrinsic("%Reflect.construct%", true);
let closure_0 = tmp;
try {
  const obj = {
    "[[Get]]": () => {},
  };
  DefinePropertyOrThrow({}, "", obj);
  tmp4 = DefinePropertyOrThrow;
} catch (err) {
  tmp4 = null;
}
if (tmp4) {
  if (tmp) {
    let closure_1 = {};
    const obj2 = {};
    const obj3 = {
      "[[Get]]": () => {
        throw closure_1;
      },
      "[[Enumerable]]": true,
    };
    tmp4(obj2, "length", obj3);
    module.exports = function IsConstructor(arg0) {
      try {
        closure_0(arg0, obj2);
      } catch (tmp5) {
        return tmp5 === closure_1;
      }
    };
  }
}

export default function IsConstructor(fn) {
  let prototype = typeof fn === "function";
  if (typeof fn === "function") {
    prototype = fn.prototype;
  }
  return prototype;
}
