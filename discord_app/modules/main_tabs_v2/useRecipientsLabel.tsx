// === Module 10911: useRecipientsLabel ===

// Module 10911 (useRecipientsLabel)
import util from "util" /* 1114 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = function useRecipientsLabel(channel) {
  _require = channel;
  const items = [UserStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((item) => user.getUser(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map((item) => stateFromStoresArray(closure_1_2[5]).getName(item));
  });
  const items1 = [channel, stateFromStoresArray];
  return noop.useMemo(() => {
    if ("" === channel.name) {
      return null;
    } else {
      let first = stateFromStoresArray;
      let formatToPlainStringResult = null;
      if (0 !== stateFromStoresArray.length) {
        if (1 === first.length) {
          const intl4 = util.intl;
          let obj = { first: null };
          first = first[0];
          obj.first = first;
          formatToPlainStringResult = intl4.formatToPlainString(util.t["J+Wpst"], obj);
        } else {
          if (2 === first.length) {
            const intl3 = util.intl;
            obj = { first: null, second: null };
            [obj3.first, obj3.second] = first;
            formatToPlainStringResult = intl3.formatToPlainString(util.t.gwRP0Y, obj);
          } else if (3 !== first.length) {
            const diff = first.length - 3;
            const intl = util.intl;
            obj = { first: null, second: null, third: null, count: null };
            [obj.first, obj.second, obj.third] = first;
            obj.count = diff;
            formatToPlainStringResult = intl.formatToPlainString(util.t.VYfueb, obj);
          }
          const intl2 = util.intl;
          [obj2.first, obj2.second, obj2.third] = first;
          formatToPlainStringResult = intl2.formatToPlainString(util.t.QDB5et, { first: null, second: null, third: null });
          const obj1 = { first: null, second: null, third: null };
        }
      }
    }
  }, items1);
};