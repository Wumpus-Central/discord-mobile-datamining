// _runtime/metro/04515__.js
import _mod4236 from "04236__.js";
import module_4493_mod from "04493__.js";
import module_4494_mod from "04494__.js";
import startOfMonth_mod from "../04447_startOfMonth.js";
import requiredArgs_mod from "../04232_requiredArgs.js";
import module_4235_mod from "04235__.js";

let module_4493 = module_4493_mod;
if (!module_4493) {
  const obj = { default: module_4493 };
  let tmp3 = obj;
} else {
  tmp3 = module_4493;
}
module_4493 = tmp3;
let module_4494 = module_4494_mod;
if (!module_4494) {
  const obj2 = { default: module_4494 };
  let tmp5 = obj2;
} else {
  tmp5 = module_4494;
}
module_4494 = tmp5;
let startOfMonth = startOfMonth_mod;
if (!startOfMonth) {
  const obj3 = { default: startOfMonth };
  let tmp7 = obj3;
} else {
  tmp7 = startOfMonth;
}
startOfMonth = tmp7;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj4 = { default: requiredArgs };
  let tmp9 = obj4;
} else {
  tmp9 = requiredArgs;
}
requiredArgs = tmp9;
let module_4235 = module_4235_mod;
if (!module_4235) {
  const obj5 = { default: module_4235 };
  let tmp11 = obj5;
} else {
  tmp11 = module_4235;
}
module_4235 = tmp11;

export default function getWeekOfMonth(arg0, weekStartsOn) {
  requiredArgs.default(1, arguments);
  const defaultOptions = _mod4236.getDefaultOptions();
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
  const defaultResult1 = module_4235.default(num);
  if (defaultResult1 >= 0) {
    if (defaultResult1 <= 6) {
      const defaultResult2 = module_4493.default(arg0);
      const _isNaN = isNaN;
      if (isNaN(defaultResult2)) {
        return NaN;
      } else {
        const diff = defaultResult1 - module_4494.default(startOfMonth.default(arg0));
        let sum = diff;
        if (diff <= 0) {
          sum = diff + 7;
        }
        const _Math = Math;
        return Math.ceil((defaultResult2 - sum) / 7) + 1;
      }
    }
  }
  const rangeError = new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  throw rangeError;
};
export default exports.default;