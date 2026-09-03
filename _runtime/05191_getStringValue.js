// _runtime/05191_getStringValue.js
arg5.getStringValue = function getStringValue(value) {
  const mapped = value.map((arg0) => String.fromCharCode(arg0));
  return mapped.join("");
};
arg5.getEncodedString = function getEncodedString(arr) {
  if (arr.length >= 8) {
    const substr = arr.slice(0, 8);
    const mapped = substr.map((arg0) => String.fromCharCode(arg0));
    const joined = mapped.join("");
    if ("ASCII\0\0\0" === joined) {
      const substr1 = arr.slice(8);
      const mapped1 = substr1.map((arg0) => String.fromCharCode(arg0));
      return mapped1.join("");
    } else if ("JIS\0\0\0\0\0" === joined) {
      return "[JIS encoded text]";
    } else if ("UNICODE\0" === joined) {
      return "[Unicode encoded text]";
    } else if ("\0\0\0\0\0\0\0\0" === joined) {
      return "[Undefined encoding]";
    }
  }
  return "Undefined";
};
arg5.getCalculatedGpsValue = function getCalculatedGpsValue(value) {
  return value[0][0] / value[0][1] + value[1][0] / value[1][1] / 60 + value[2][0] / value[2][1] / 3600;
};
