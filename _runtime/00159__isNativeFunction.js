
export default function _isNativeFunction(arg0) {
  try {
    const _Function = Function;
    let str = Function.toString;
    const call = str.call;
    if (typeof call === "unknown") {
      let strResult = str();
    } else {
      strResult = call(arg0);
    }
    str = "[native code]";
    const index = strResult.indexOf("[native code]");
  } catch (err) {
    return typeof tmp === "function";
  }
};