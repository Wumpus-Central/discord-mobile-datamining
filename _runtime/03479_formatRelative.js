import isSameUTCWeek from "isSameUTCWeek";

if (!isSameUTCWeek) {
  const obj = { default: null };
  obj[0] = isSameUTCWeek;
  let tmp3 = obj;
} else {
  tmp3 = isSameUTCWeek;
}
let closure_3 = ["\u043D\u0435\u0434\u0456\u043B\u044E", "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A", "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A", "\u0441\u0435\u0440\u0435\u0434\u0443", "\u0447\u0435\u0442\u0432\u0435\u0440", "\u043F\u2019\u044F\u0442\u043D\u0438\u0446\u044E", "\u0441\u0443\u0431\u043E\u0442\u0443"];
let closure_4 = {
  lastWeek: function lastWeekFormat(arg0, arg1, arg2) {
    const toDateResult = require(3480).toDate(arg0);
    const uTCDay = toDateResult.getUTCDay();
    if (tmp3.default(toDateResult, arg1, arg2)) {
      let text = `${"'\u0443 " + tmp2} о' p`;
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (5 !== uTCDay) {
            if (6 !== uTCDay) {
              text = `${"'\u0443 \u043C\u0438\u043D\u0443\u043B\u0438\u0439 " + tmp2} о' p`;
            }
          }
        }
      }
      text = `${"'\u0443 \u043C\u0438\u043D\u0443\u043B\u0443 " + tmp2} о' p`;
    }
    return text;
  },
  yesterday: "'\u0432\u0447\u043E\u0440\u0430 \u043E' p",
  today: "'\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456 \u043E' p",
  tomorrow: "'\u0437\u0430\u0432\u0442\u0440\u0430 \u043E' p",
  nextWeek: function nextWeekFormat(arg0, arg1, arg2) {
    const toDateResult = require(3480).toDate(arg0);
    const uTCDay = toDateResult.getUTCDay();
    if (tmp3.default(toDateResult, arg1, arg2)) {
      let text = `${"'\u0443 " + tmp2} о' p`;
    } else {
      if (0 !== uTCDay) {
        if (3 !== uTCDay) {
          if (5 !== uTCDay) {
            if (6 !== uTCDay) {
              text = `${"'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u0439 " + tmp2} о' p`;
            }
          }
        }
      }
      text = `${"'\u0443 \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0443 " + tmp2} о' p`;
    }
    return text;
  },
  other: "P"
};

export default function formatRelative(arg0, arg1, arg2, arg3) {
  let tmpResult = tmp;
  if (typeof table[arg0] !== "HAS_APPLICATION") {
    tmpResult = tmp(arg1, arg2, arg3);
  }
  return tmpResult;
};
export default exports.default;