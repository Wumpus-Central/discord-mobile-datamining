// === Module 3724: ? ===

// Module 3724
import _typeof_mod from "module_3725" /* 3725 */;
import module_3727_mod from "module_3727" /* 3727 */;

let _typeof = _typeof_mod;
if (!_typeof) {
  const obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
let module_3727 = module_3727_mod;
if (!module_3727) {
  const obj2 = { default: module_3727 };
  let tmp5 = obj2;
} else {
  tmp5 = module_3727;
}
module_3727 = tmp5;
const dependencyMap = ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"];
let closure_3 = {
  lastWeek: function lastWeekFormatToken(arg0, arg1, arg2) {
    const defaultResult = _typeof.default(arg0);
    const uTCDay = defaultResult.getUTCDay();
    let text = dependencyMap[uTCDay];
    if (module_3727.default(defaultResult, arg1, arg2)) {
      if (2 === uTCDay) {
        text = `'във ${tmp2}`;
        let text1 = `'във ${tmp2} в' p`;
      } else {
        text1 = `${"'\u0432 " + `'във ${tmp2}`} в' p`;
      }
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (6 !== uTCDay) {
            let text2 = `${"'\u043C\u0438\u043D\u0430\u043B\u0438\u044F " + tmp2} в' p`;
          }
          return text2;
        }
      }
      text2 = `${"'\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430 " + tmp2} в' p`;
    }
  },
  yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
  today: "'\u0434\u043D\u0435\u0441 \u0432' p",
  tomorrow: "'\u0443\u0442\u0440\u0435 \u0432' p",
  nextWeek: function nextWeekFormatToken(arg0, arg1, arg2) {
    const defaultResult = _typeof.default(arg0);
    const uTCDay = defaultResult.getUTCDay();
    let text = dependencyMap[uTCDay];
    if (module_3727.default(defaultResult, arg1, arg2)) {
      if (2 === uTCDay) {
        text = `'във ${tmp2}`;
        let text1 = `'във ${tmp2} в' p`;
      } else {
        text1 = `${"'\u0432 " + `'във ${tmp2}`} в' p`;
      }
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (6 !== uTCDay) {
            let text2 = `${"'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0438\u044F " + tmp2} в' p`;
          }
          return text2;
        }
      }
      text2 = `${"'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 " + tmp2} в' p`;
    }
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_3[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;