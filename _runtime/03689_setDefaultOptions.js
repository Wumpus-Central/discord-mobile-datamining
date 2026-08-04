// _runtime/03689_setDefaultOptions.js
import requiredArgs from "requiredArgs";

if (!requiredArgs) {
  let obj = { default: null };
  obj[0] = requiredArgs;
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}

export default function setDefaultOptions(obj) {
  tmp3.default(1, arguments);
  obj = {};
  const defaultOptions = require(3277) /* getDefaultOptions */.getDefaultOptions();
  for (const key10017 in defaultOptions) {
    let tmp8 = key10017;
    let _Object = Object;
    let call = hasOwnProperty.call;
    if (typeof call === "unknown") {
      let hasOwnPropertyResult = hasOwnProperty(key10017);
    } else {
      hasOwnPropertyResult = call(defaultOptions, key10017);
    }
    if (!hasOwnPropertyResult) {
      continue;
    } else {
      obj[key10017] = defaultOptions[key10017];
      continue;
    }
    continue;
  }
  for (const key10023 in arg0) {
    let tmp9 = key10023;
    let _Object2 = Object;
    let call2 = hasOwnProperty2.call;
    if (typeof call2 === "unknown") {
      let hasOwnProperty2Result = hasOwnProperty2(key10023);
    } else {
      hasOwnProperty2Result = call2(arg0, key10023);
    }
    if (!hasOwnProperty2Result) {
      continue;
    } else {
      if (undefined === arg0[key10023]) {
        delete tmp[tmp2];
        continue;
      } else {
        obj[key10023] = arg0[key10023];
        continue;
      }
      continue;
    }
    continue;
  }
  require(3277) /* getDefaultOptions */.setDefaultOptions(obj);
};
export default exports.default;