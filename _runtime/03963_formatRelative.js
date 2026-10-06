// === Module 3963: formatRelative ===

// Module 3963 (formatRelative)
import toDate_mod from "toDate" /* 3964 */;
import isSameUTCWeek_mod from "isSameUTCWeek" /* 3966 */;

let tmp3;
let tmp5;
let toDate = toDate_mod;
if (!toDate) {
  tmp3 = { default: toDate };
  const obj = { default: toDate };
} else {
  tmp3 = toDate;
}
toDate = tmp3;
let isSameUTCWeek = isSameUTCWeek_mod;
if (!isSameUTCWeek) {
  tmp5 = { default: isSameUTCWeek };
  const obj2 = { default: isSameUTCWeek };
} else {
  tmp5 = isSameUTCWeek;
}
isSameUTCWeek = tmp5;
let closure_2 = ["\u043D\u0435\u0434\u0435\u043B\u044F", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u044F\u0434\u0430", "\u0447\u0435\u0442\u0432\u044A\u0440\u0442\u044A\u043A", "\u043F\u0435\u0442\u044A\u043A", "\u0441\u044A\u0431\u043E\u0442\u0430"];
let closure_3 = {
  lastWeek: function lastWeekFormatToken(arg0, arg1, arg2) {
    let text1;
    const defaultResult = toDate.default(arg0);
    const uTCDay = defaultResult.getUTCDay();
    if (isSameUTCWeek.default(defaultResult, arg1, arg2)) {
      let text;
      if (2 === uTCDay) {
        text = `${"'\u0432\u044A\u0432 " + tmp2} в' p`;
      } else {
        text = `${"'\u0432 " + tmp2} в' p`;
      }
      text1 = text;
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (6 !== uTCDay) {
            text1 = `${"'\u043C\u0438\u043D\u0430\u043B\u0438\u044F " + tmp2} в' p`;
          }
        }
      }
      text1 = `${"'\u043C\u0438\u043D\u0430\u043B\u0430\u0442\u0430 " + tmp2} в' p`;
    }
    return text1;
  },
  yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
  today: "'\u0434\u043D\u0435\u0441 \u0432' p",
  tomorrow: "'\u0443\u0442\u0440\u0435 \u0432' p",
  nextWeek: function nextWeekFormatToken(arg0, arg1, arg2) {
    let text1;
    const defaultResult = toDate.default(arg0);
    const uTCDay = defaultResult.getUTCDay();
    if (isSameUTCWeek.default(defaultResult, arg1, arg2)) {
      let text;
      if (2 === uTCDay) {
        text = `${"'\u0432\u044A\u0432 " + tmp2} в' p`;
      } else {
        text = `${"'\u0432 " + tmp2} в' p`;
      }
      text1 = text;
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (6 !== uTCDay) {
            text1 = `${"'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0438\u044F " + tmp2} в' p`;
          }
        }
      }
      text1 = `${"'\u0441\u043B\u0435\u0434\u0432\u0430\u0449\u0430\u0442\u0430 " + tmp2} в' p`;
    }
    return text1;
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