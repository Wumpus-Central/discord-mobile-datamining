// === Module 10649: useRecipientsLabel ===

// Module 10649 (useRecipientsLabel)
import intl5 from "intl" /* 1126 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getUserSummaryLabel(stateFromStoresArray) {
  if (0 === stateFromStoresArray.length) {
    return null;
  } else if (1 === stateFromStoresArray.length) {
    const intl4 = intl5.intl;
    const obj4 = { first: stateFromStoresArray[0] };
    return intl4.formatToPlainString(intl5.t["J+Wpst"], obj4);
  } else if (2 === stateFromStoresArray.length) {
    const intl3 = intl5.intl;
    const obj7 = { first: null, second: null };
    [obj3.first, obj3.second] = stateFromStoresArray;
    return intl3.formatToPlainString(intl5.t.gwRP0Y, obj7);
  } else if (3 === stateFromStoresArray.length) {
    const intl2 = intl5.intl;
    const obj8 = { first: null, second: null, third: null };
    [obj2.first, obj2.second, obj2.third] = stateFromStoresArray;
    return intl2.formatToPlainString(intl5.t.QDB5et, obj8);
  } else {
    const diff = stateFromStoresArray.length - 3;
    const intl = intl5.intl;
    const obj = { first: null, second: null, third: null, count: diff };
    [obj.first, obj.second, obj.third] = stateFromStoresArray;
    return intl.formatToPlainString(intl5.t.VYfueb, obj);
  }
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((recipients) => {
  let first;
  let tmp6;
  _require = recipients;
  let obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== recipients.recipients) {
    const fn = function l() {
      let user;
      recipients = recipients.recipients;
      const mapped = recipients.map((item) => user.getUser(item));
      const found = mapped.filter(GlobalUtils.isNotNullish);
      return found.map((item) => {
        const obj = closure_1_1(closure_1_2[6]);
        return obj.getName(item);
      });
    };
    cResult[1] = recipients.recipients;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp6);
  let tmp8 = null;
  if ("" !== recipients.name) {
    let tmp9;
    if (cResult[3] !== stateFromStoresArray) {
      const tmp11 = getUserSummaryLabel(stateFromStoresArray);
      cResult[3] = stateFromStoresArray;
      cResult[4] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    tmp8 = tmp9;
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let user;
    const recipients = closure_0.recipients;
    const mapped = recipients.map((item) => user.getUser(item));
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.map((item) => {
      const obj = stateFromStoresArray(closure_1_2[6]);
      return obj.getName(item);
    });
  });
  const items1 = [arg0, stateFromStoresArray];
  return react.useMemo(() => {
    let tmp = null;
    if ("" !== closure_0.name) {
      tmp = getUserSummaryLabel(stateFromStoresArray);
    }
    return tmp;
  }, items1);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/useRecipientsLabel.tsx");

export const useRecipientsLabel = tmp2;