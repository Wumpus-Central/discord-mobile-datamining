// === Module 4085: formatRelative ===

// Module 4085 (formatRelative)
import isSameUTCWeek_mod from "isSameUTCWeek" /* 3966 */;

let tmp3;
let isSameUTCWeek = isSameUTCWeek_mod;
if (!isSameUTCWeek) {
  tmp3 = { default: isSameUTCWeek };
  const obj = { default: isSameUTCWeek };
} else {
  tmp3 = isSameUTCWeek;
}
isSameUTCWeek = tmp3;
let closure_1 = ["\u0432\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u043F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0432\u0442\u043E\u0440\u043D\u0438\u043A", "\u0441\u0440\u0435\u0434\u0443", "\u0447\u0435\u0442\u0432\u0435\u0440\u0433", "\u043F\u044F\u0442\u043D\u0438\u0446\u0443", "\u0441\u0443\u0431\u0431\u043E\u0442\u0443"];
let closure_2 = {
  lastWeek(getUTCDay, arg1, arg2) {
    let text1;
    const uTCDay = getUTCDay.getUTCDay();
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      let text;
      if (2 === uTCDay) {
        text = `${"'\u0432\u043E " + tmp2} в' p`;
      } else {
        text = `${"'\u0432 " + tmp2} в' p`;
      }
      text1 = text;
    } else if (0 === uTCDay) {
      text1 = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 " + tmp2} в' p`;
    } else {
      if (1 !== uTCDay) {
        if (2 !== uTCDay) {
          if (4 !== uTCDay) {
            text1 = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u0443\u044E " + tmp2} в' p`;
          }
        }
      }
      text1 = `${"'\u0432 \u043F\u0440\u043E\u0448\u043B\u044B\u0439 " + tmp2} в' p`;
    }
    return text1;
  },
  yesterday: "'\u0432\u0447\u0435\u0440\u0430 \u0432' p",
  today: "'\u0441\u0435\u0433\u043E\u0434\u043D\u044F \u0432' p",
  tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u0432' p",
  nextWeek(getUTCDay, arg1, arg2) {
    let text1;
    const uTCDay = getUTCDay.getUTCDay();
    if (isSameUTCWeek.default(getUTCDay, arg1, arg2)) {
      let text;
      if (2 === uTCDay) {
        text = `${"'\u0432\u043E " + tmp2} в' p`;
      } else {
        text = `${"'\u0432 " + tmp2} в' p`;
      }
      text1 = text;
    } else if (0 === uTCDay) {
      text1 = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0435 " + tmp2} в' p`;
    } else {
      if (1 !== uTCDay) {
        if (2 !== uTCDay) {
          if (4 !== uTCDay) {
            text1 = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E " + tmp2} в' p`;
          }
        }
      }
      text1 = `${"'\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 " + tmp2} в' p`;
    }
    return text1;
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof closure_2[arg0] === "function") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};