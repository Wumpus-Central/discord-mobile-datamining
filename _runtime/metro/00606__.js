// _runtime/metro/00606__.js

export default function toSource(arg0) {
  if (null == arg0) {
    return "";
  } else {
    try {
      const call = toString.call;
      if (typeof call === "unknown") {
        let callResult = toString();
      } else {
        callResult = call(arg0);
      }
      return callResult;
    } catch (err) {
      try {
        return "" + tmp;
      } catch (err) {}
    }
  }
}
