// _runtime/01411_isArguments.js
import callBoundIntrinsic from "callBoundIntrinsic" /* 574 */;
import hasToStringTagShams from "hasToStringTagShams" /* 1412 */;

let closure_0 = hasToStringTagShams();
let closure_1 = callBoundIntrinsic("Object.prototype.toString");
function isArguments(obj) {
  let tmp = closure_0;
  if (closure_0) {
    tmp = obj;
  }
  if (tmp) {
    tmp = typeof obj === "object";
  }
  if (tmp) {
    const _Symbol = Symbol;
    tmp = Symbol.toStringTag in obj;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = "[object Arguments]" === callback(obj);
  }
  return tmp3;
}
let isArguments2 = function isArguments(obj) {
  if (typeof isArguments !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = closure_0;
  if (closure_0) {
    tmp = obj;
  }
  if (tmp) {
    tmp = typeof obj === "object";
  }
  if (tmp) {
    const _Symbol = Symbol;
    tmp = Symbol.toStringTag in obj;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = "[object Arguments]" === callback(obj);
  }
  let tmp5 = tmp3;
  if (!tmp5) {
    let tmp7 = null !== obj && typeof obj === "object";
    if (tmp7) {
      tmp7 = "length" in obj;
    }
    if (tmp7) {
      tmp7 = typeof obj.length === "number";
    }
    if (tmp7) {
      tmp7 = obj.length >= 0;
    }
    if (tmp7) {
      tmp7 = "[object Array]" !== callback(obj);
    }
    if (tmp7) {
      tmp7 = "callee" in obj;
    }
    if (tmp7) {
      tmp7 = "[object Function]" === callback(obj.callee);
    }
    tmp5 = tmp7;
  }
  return tmp5;
};
isArguments.isLegacyArguments = isArguments2;
if ((() => {
  if (typeof isArguments !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = closure_0;
  if (closure_0) {
    tmp = arguments;
  }
  if (tmp) {
    tmp = typeof arguments === "object";
  }
  if (tmp) {
    const _Symbol = Symbol;
    tmp = Symbol.toStringTag in arguments;
  }
  let tmp9 = !tmp;
  if (!tmp) {
    tmp9 = "[object Arguments]" === callback(arguments);
  }
  return tmp9;
})()) {
  isArguments2 = isArguments;
}

export default isArguments2;