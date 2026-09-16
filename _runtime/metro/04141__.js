// _runtime/metro/04141__.js
import _mod3731 from "03731__.js";
import module_3874_mod from "03874__.js";
import _typeof_mod from "03726__.js";
import module_3730_mod from "03730__.js";
import requiredArgs_mod from "../03727_requiredArgs.js";

let module_3874 = module_3874_mod;
if (!module_3874) {
  const obj = { default: module_3874 };
  let tmp3 = obj;
} else {
  tmp3 = module_3874;
}
module_3874 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let module_3730 = module_3730_mod;
if (!module_3730) {
  const obj3 = { default: module_3730 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3730;
}
module_3730 = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;

export default function setDay(arg0, arg1, weekStartsOn) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3731.getDefaultOptions();
  weekStartsOn = undefined;
  if (null != weekStartsOn) {
    weekStartsOn = weekStartsOn.weekStartsOn;
  }
  if (null === weekStartsOn) {
    let weekStartsOn1;
    if (null != weekStartsOn) {
      locale = weekStartsOn.locale;
      if (null !== locale) {
        if (undefined !== locale) {
          const options = locale.options;
          if (null !== options) {
            if (undefined !== options) {
              weekStartsOn1 = options.weekStartsOn;
            }
          }
        }
      }
    }
    weekStartsOn = weekStartsOn1;
  }
  if (null === weekStartsOn) {
    weekStartsOn = defaultOptions.weekStartsOn;
  }
  if (null === weekStartsOn) {
    const locale2 = defaultOptions.locale;
    let weekStartsOn2;
    if (null !== locale2) {
      if (undefined !== locale2) {
        const options2 = locale2.options;
        if (null !== options2) {
          if (undefined !== options2) {
            weekStartsOn2 = options2.weekStartsOn;
          }
        }
      }
    }
    weekStartsOn = weekStartsOn2;
  }
  let num = 0;
  if (null !== weekStartsOn) {
    num = 0;
    if (undefined !== weekStartsOn) {
      num = weekStartsOn;
    }
  }
  const defaultResult1 = module_3730.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = _typeof.default(arg0);
      const defaultResult3 = module_3730.default(arg1);
      const day = defaultResult2.getDay();
      const diff = 7 - defaultResult1;
      if (defaultResult3 >= 0) {
        if (defaultResult3 <= 6) {
          let diff1 = ((defaultResult3 % 7 + 7) % 7 + diff) % 7 - (day + diff) % 7;
        }
        return module_3874.default(defaultResult2, diff1);
      }
      diff1 = defaultResult3 - (day + diff) % 7;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;