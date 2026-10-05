// === Module 4375: setDefaultOptions ===

// Module 4375 (setDefaultOptions)
import _mod3963 from "module_3963" /* 3963 */;
import requiredArgs_mod from "requiredArgs" /* 3959 */;

let hasOwnProperty;

let tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  let obj = { default: requiredArgs };
  tmp3 = obj;
} else {
  tmp3 = requiredArgs;
}
requiredArgs = tmp3;

export default function setDefaultOptions(obj) {
  requiredArgs.default(1, arguments);
  obj = {};
  const defaultOptions = _mod3963.getDefaultOptions();
  for (const key10017 in defaultOptions) {
    let _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    if (!hasOwnProperty.call(defaultOptions, key10017)) {
      continue;
    } else {
      obj[key10017] = defaultOptions[key10017];
      continue;
    }
    continue;
  }
  for (const key10023 in obj) {
    let _Object2 = Object;
    let hasOwnProperty2 = Object.prototype.hasOwnProperty;
    if (!hasOwnProperty2.call(obj, key10023)) {
      continue;
    } else {
      if (undefined === obj[key10023]) {
        delete obj[key10023];
        continue;
      } else {
        obj[key10023] = obj[key10023];
        continue;
      }
      continue;
    }
    continue;
  }
  _mod3963.setDefaultOptions(obj);
};