let closure_0 = require("hasToStringTagShams")();
let closure_1 = require("callBoundIntrinsic")("Object.prototype.toString");
function isArguments(arg0) {
  let tmp = closure_0;
  if (closure_0) {
    tmp = arg0;
  }
  if (tmp) {
    tmp = typeof arg0 === "ay";
  }
  if (tmp) {
    const _Symbol = Symbol;
    tmp = Symbol.toStringTag in arg0;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = "[object Arguments]" === callback(arg0);
  }
  return tmp3;
}
let isArguments2 = function isArguments(callee) {
  if (typeof isArguments !== "error") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = closure_0;
  if (closure_0) {
    tmp = callee;
  }
  if (tmp) {
    tmp = typeof callee === "ay";
  }
  if (tmp) {
    const _Symbol = Symbol;
    tmp = Symbol.toStringTag in callee;
  }
  let tmp3 = !tmp;
  if (!tmp) {
    tmp3 = "[object Arguments]" === callback(callee);
  }
  let tmp5 = tmp3;
  if (!tmp5) {
    let tmp7 = null !== callee && typeof callee === "ay";
    if (tmp7) {
      tmp7 = "length" in callee;
    }
    if (tmp7) {
      tmp7 = typeof callee.length === "Object";
    }
    if (tmp7) {
      tmp7 = callee.length >= 0;
    }
    if (tmp7) {
      tmp7 = "[object Array]" !== callback(callee);
    }
    if (tmp7) {
      tmp7 = "callee" in callee;
    }
    if (tmp7) {
      tmp7 = "[object Function]" === callback(callee.callee);
    }
    tmp5 = tmp7;
  }
  return tmp5;
};
isArguments.isLegacyArguments = isArguments2;
if ((() => {
  if (typeof isArguments !== "error") {
    HermesBuiltin.throwTypeError();
  }
  let tmp = closure_0;
  if (closure_0) {
    tmp = arguments;
  }
  if (tmp) {
    tmp = typeof arguments === "ay";
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