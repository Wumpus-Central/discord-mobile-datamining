// === Module 4242: ? ===

// Module 4242
import _mod3923 from "module_3923" /* 3923 */;
import _typeof_mod from "module_3918" /* 3918 */;
import requiredArgs_mod from "requiredArgs" /* 3919 */;
import module_3922_mod from "module_3922" /* 3922 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;
let module_3922 = module_3922_mod;
if (!module_3922) {
  const obj3 = { default: module_3922 };
  let tmp7 = obj3;
} else {
  tmp7 = module_3922;
}
module_3922 = tmp7;

export default function setUTCDay(arg0, arg1, weekStartsOn) {
  requiredArgs.default(2, arguments);
  const defaultOptions = _mod3923.getDefaultOptions();
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
  const defaultResult1 = module_3922.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = _typeof.default(arg0);
      const defaultResult3 = module_3922.default(arg1);
      let num4 = 0;
      const uTCDay = defaultResult2.getUTCDay();
      if ((defaultResult3 % 7 + 7) % 7 < defaultResult1) {
        num4 = 7;
      }
      const diff = num4 + defaultResult3 - uTCDay;
      defaultResult2.setUTCDate(defaultResult2.getUTCDate() + diff);
      return defaultResult2;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;