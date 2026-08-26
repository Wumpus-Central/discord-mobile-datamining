// _runtime/03661_formatRelative.js
import isSameUTCWeek from "03542_isSameUTCWeek.js";

if (!isSameUTCWeek) {
  const obj = { default: null };
  obj[0] = isSameUTCWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
isSameUTCWeek = tmp3;
let closure_1 = ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0443", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0443", "\u0441\u0443\u0431\u0431\u043E\u0442\u0443"];
let closure_2 = {
  lastWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    let text = dependencyMap[uTCDay];
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      if (2 === uTCDay) {
        text = `'во ${tmp2}`;
        let text1 = `'во ${tmp2} в' p`;
      } else {
        text1 = `${"'\u0432 " + `'во ${tmp2}`} в' p`;
      }
    } else {
      if (0 === uTCDay) {
        let text2 = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 " + tmp2} в' p`;
      } else {
        if (1 !== uTCDay) {
          if (2 !== uTCDay) {
            if (4 !== uTCDay) {
              text2 = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u0443\u044E " + tmp2} в' p`;
            }
          }
        }
        text2 = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 " + tmp2} в' p`;
      }
      return text2;
    }
  },
  yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
  today: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p",
  tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",
  nextWeek(getUTCDay) {
    const uTCDay = getUTCDay.getUTCDay();
    let text = dependencyMap[uTCDay];
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      if (2 === uTCDay) {
        text = `'во ${tmp2}`;
        let text1 = `'во ${tmp2} в' p`;
      } else {
        text1 = `${"'\u0432 " + `'во ${tmp2}`} в' p`;
      }
    } else {
      if (0 === uTCDay) {
        let text2 = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 " + tmp2} в' p`;
      } else {
        if (1 !== uTCDay) {
          if (2 !== uTCDay) {
            if (4 !== uTCDay) {
              text2 = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E " + tmp2} в' p`;
            }
          }
        }
        text2 = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 " + tmp2} в' p`;
      }
      return text2;
    }
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof table[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;