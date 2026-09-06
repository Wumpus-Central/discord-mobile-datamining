// === Module 3649: ? ===

// Module 3649
import _typeof from "module_3650" /* 3650 */;
import module_3652 from "module_3652" /* 3652 */;

if (!_typeof) {
  let obj = { default: _typeof };
  let tmp3 = obj;
} else {
  tmp3 = _typeof;
}
_typeof = tmp3;
if (!module_3652) {
  obj = { default: module_3652 };
  let tmp5 = obj;
} else {
  tmp5 = module_3652;
}
module_3652 = tmp5;
const dependencyMap = ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"];
let closure_3 = {
  lastWeek: function lastWeekFormatToken(arg0, arg1, arg2) {
    const defaultResult = _typeof.default(arg0);
    const uTCDay = defaultResult.getUTCDay();
    let text = dependencyMap[uTCDay];
    if (module_3652.default(defaultResult, arg1, arg2)) {
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
    if (module_3652.default(defaultResult, arg1, arg2)) {
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