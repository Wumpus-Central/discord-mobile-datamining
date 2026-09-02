// _runtime/00657_supported.js
function supported(arg0) {
  const call = toString.call;
  return "[object Arguments]" == (typeof call === "unknown" ? toString() : call(arg0));
}
function unsupported(obj) {
  let flag = obj;
  if (obj) {
    flag = typeof obj === "object";
  }
  if (flag) {
    flag = typeof obj.length === "number";
  }
  if (!flag) {
    if (!flag) {
      if (!flag) {
        flag = false;
      }
      return flag;
    } else {
      const _Object2 = Object;
      const call2 = propertyIsEnumerable.call;
      if (typeof call2 === "unknown") {
        let propertyIsEnumerableResult = propertyIsEnumerable("callee");
      } else {
        propertyIsEnumerableResult = call2(obj, "callee");
      }
    }
  } else {
    const _Object = Object;
    const call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty("callee");
    } else {
      hasOwnPropertyResult = call(obj, "callee");
    }
  }
}
let tmp = unsupported;
if (
  "[object Arguments]" ==
  (() => {
    const call = toString.call;
    if (typeof call === "unknown") {
      let str = toString();
    } else {
      str = call(arguments);
    }
    return str;
  })()
) {
  tmp = supported;
}
tmp.supported = supported;
tmp.unsupported = unsupported;

export default tmp;
