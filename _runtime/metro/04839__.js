// === Module 4839: ? ===

// Module 4839
import _mod4427 from "module_4427" /* 4427 */;
import requiredArgs_mod from "requiredArgs" /* 4423 */;

let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  let obj = { default: requiredArgs };
  let tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function setDefaultOptions(obj) {
  requiredArgs.default(1, arguments);
  obj = {};
  const defaultOptions = _mod4427.getDefaultOptions();
  for (const key10017 in defaultOptions) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
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
  _mod4427.setDefaultOptions(obj);
};
export default exports.default;