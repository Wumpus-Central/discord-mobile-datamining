// _runtime/05861__objectWithoutPropertiesLoose.js

export default function _objectWithoutPropertiesLoose(obj, arr) {
  if (null == obj) {
    return {};
  } else {
    obj = {};
    for (const key10007 in arg0) {
      let tmp3 = key10007;
      let hasOwnProperty = {}.hasOwnProperty;
      let call = hasOwnProperty.call;
      if (typeof call === "unknown") {
        let hasOwnPropertyResult = hasOwnProperty(key10007);
      } else {
        hasOwnPropertyResult = call(arg0, key10007);
      }
      if (!hasOwnPropertyResult) {
        continue;
      } else {
        if (-1 !== arg1.indexOf(key10007)) {
          continue;
        } else {
          obj[key10007] = arg0[key10007];
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
};