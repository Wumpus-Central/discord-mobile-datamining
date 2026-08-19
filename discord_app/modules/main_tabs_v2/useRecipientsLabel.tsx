// === Module 9917: useRecipientsLabel ===

// Module 9917 (useRecipientsLabel)
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = function useRecipientsLabel(channel) {
  const _require = channel;
  const items = [closure_4];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((item, index) => user.getUser(item));
    const found = mapped.filter(channel(dependencyMap[4]).isNotNullish);
    return found.map((item, index) => callback(table[5]).getName(item));
  });
  const items1 = [channel, stateFromStoresArray];
  return React.useMemo(() => {
    if ("" === channel.name) {
      return null;
    } else {
      let first = stateFromStoresArray;
      let formatToPlainStringResult = null;
      if (0 !== stateFromStoresArray.length) {
        if (1 === first.length) {
          const intl4 = channel(dependencyMap[2]).intl;
          let obj = { first: null };
          first = first[0];
          obj[0] = first;
          formatToPlainStringResult = intl4.formatToPlainString(channel(dependencyMap[2]).t["J+Wpst"], obj);
        } else {
          if (2 === first.length) {
            const intl3 = channel(dependencyMap[2]).intl;
            obj = { first: null, second: null };
            [obj3[0], obj3[1]] = first;
            formatToPlainStringResult = intl3.formatToPlainString(channel(dependencyMap[2]).t.gwRP0Y, obj);
          } else if (3 !== first.length) {
            const diff = first.length - 3;
            const intl = channel(dependencyMap[2]).intl;
            obj = { first: null, second: null, third: null, count: null };
            [obj[0], obj[1], obj[2]] = first;
            obj[3] = diff;
            formatToPlainStringResult = intl.formatToPlainString(channel(dependencyMap[2]).t.VYfueb, obj);
          }
          const intl2 = channel(dependencyMap[2]).intl;
          [obj2[0], obj2[1], obj2[2]] = first;
          formatToPlainStringResult = intl2.formatToPlainString(channel(dependencyMap[2]).t.QDB5et, { first: null, second: null, third: null });
        }
      }
    }
  }, items1);
};