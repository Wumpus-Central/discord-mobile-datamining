// _runtime/04289_lastDayOfWeek.js
import _mod3920 from "metro/03920__.js";
import _typeof_mod from "metro/03915__.js";
import module_3919_mod from "metro/03919__.js";
import requiredArgs_mod from "03916_requiredArgs.js";

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3919 = module_3919_mod;
if (!module_3919) {
  const obj2 = { default: module_3919 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3919;
}
module_3919 = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function lastDayOfWeek(arg0, weekStartsOn) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod3920.getDefaultOptions();
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
  const defaultResult1 = module_3919.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = _typeof.default(arg0);
      const day = defaultResult2.getDay();
      let num3 = 0;
      if (day < defaultResult1) {
        num3 = -7;
      }
      const diff = 6 + num3 - (day - defaultResult1);
      defaultResult2.setHours(0, 0, 0, 0);
      defaultResult2.setDate(defaultResult2.getDate() + diff);
      return defaultResult2;
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6");
  throw rangeError;
};
export default exports.default;