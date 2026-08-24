// discord_app/modules/main_tabs_v2/useRecipientsLabel.tsx
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../../stores/UserStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = function useRecipientsLabel(channel) {
  const _require = channel;
  const items = [closure_4];
  const stateFromStoresArray = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    const recipients = channel.recipients;
    const mapped = recipients.map((arg0) => user.getUser(arg0));
    const found = mapped.filter(channel(closure_1_2[4]).isNotNullish);
    return found.map((arg0) => callback(table[5]).getName(arg0));
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
          const intl4 = channel(closure_1_2[2]).intl;
          let obj = { first: null };
          first = first[0];
          obj[0] = first;
          formatToPlainStringResult = intl4.formatToPlainString(channel(closure_1_2[2]).t["J+Wpst"], obj);
        } else {
          if (2 === first.length) {
            const intl3 = channel(closure_1_2[2]).intl;
            obj = { first: null, second: null };
            [obj3[0], obj3[1]] = first;
            formatToPlainStringResult = intl3.formatToPlainString(channel(closure_1_2[2]).t.gwRP0Y, obj);
          } else if (3 !== first.length) {
            const diff = first.length - 3;
            const intl = channel(closure_1_2[2]).intl;
            obj = { first: null, second: null, third: null, count: null };
            [obj[0], obj[1], obj[2]] = first;
            obj[3] = diff;
            formatToPlainStringResult = intl.formatToPlainString(channel(closure_1_2[2]).t.VYfueb, obj);
          }
          const intl2 = channel(closure_1_2[2]).intl;
          [obj2[0], obj2[1], obj2[2]] = first;
          formatToPlainStringResult = intl2.formatToPlainString(channel(closure_1_2[2]).t.QDB5et, { first: null, second: null, third: null });
          obj1 = { first: null, second: null, third: null };
        }
      }
    }
  }, items1);
};