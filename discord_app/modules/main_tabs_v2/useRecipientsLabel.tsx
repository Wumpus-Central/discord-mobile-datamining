// discord_app/modules/main_tabs_v2/useRecipientsLabel.tsx
import util from "../../intl/index.native.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
function getUserSummaryLabel(stateFromStoresArray) {
  if (0 === stateFromStoresArray.length) {
    return null;
  } else if (1 === stateFromStoresArray.length) {
    const intl4 = util.intl;
    const obj4 = { first: stateFromStoresArray[0] };
    return intl4.formatToPlainString(util.t["J+Wpst"], obj4);
  } else if (2 === stateFromStoresArray.length) {
    const intl3 = util.intl;
    [obj3.first, obj3.second] = stateFromStoresArray;
    return intl3.formatToPlainString(util.t.gwRP0Y, { first: null, second: null });
  } else if (3 === stateFromStoresArray.length) {
    const intl2 = util.intl;
    [obj2.first, obj2.second, obj2.third] = stateFromStoresArray;
    return intl2.formatToPlainString(util.t.QDB5et, { first: null, second: null, third: null });
  } else {
    const diff = stateFromStoresArray.length - 3;
    const intl = util.intl;
    const obj = { first: null, second: null, third: null, count: null };
    [obj.first, obj.second, obj.third] = stateFromStoresArray;
    obj.count = diff;
    return intl.formatToPlainString(util.t.VYfueb, obj);
  }
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = ReactCompilerGating.isReactCompilerEnabled()
  ? (recipients) => {
      _require = recipients;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== recipients.recipients) {
        const fn = function l() {
          recipients = recipients.recipients;
          const mapped = recipients.map((item) => user.getUser(item));
          const found = mapped.filter(GlobalUtils.isNotNullish);
          return found.map((item) => closure_1_1(closure_1_2[6]).getName(item));
        };
        cResult[1] = recipients.recipients;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp6);
      if ("" === recipients.name) {
        return null;
      } else if (cResult[3] !== stateFromStoresArray) {
        const tmp10 = getUserSummaryLabel(stateFromStoresArray);
        cResult[3] = stateFromStoresArray;
        cResult[4] = tmp10;
      }
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const items = [UserStore];
      const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
        const recipients = closure_0.recipients;
        const mapped = recipients.map((item) => user.getUser(item));
        const found = mapped.filter(GlobalUtils.isNotNullish);
        return found.map((item) => stateFromStoresArray(closure_1_2[6]).getName(item));
      });
      const items1 = [arg0, stateFromStoresArray];
      return noop.useMemo(() => {
        let tmp = null;
        if ("" !== closure_0.name) {
          tmp = getUserSummaryLabel(stateFromStoresArray);
        }
        return tmp;
      }, items1);
    };
