// === Module 14477: useApplicationWidgetAffinityData ===

// Module 14477 (useApplicationWidgetAffinityData)
import LibraryApplicationStatisticsActionCreators from "LibraryApplicationStatisticsActionCreators" /* 14479 */;
import noop from "module_19" /* 19 */;
import ApplicationWidgetConfigStore from "ApplicationWidgetConfigStore" /* 10272 */;
import LibraryApplicationStatisticsStore from "LibraryApplicationStatisticsStore" /* 14478 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useApplicationWidgetAffinityData.tsx");

export default function useApplicationWidgetAffinityData(arg0) {
  _require = arg0;
  items = [memo1];
  const stateFromStores = require("initialize").useStateFromStores(items, () => memo1.getFeaturedApplicationIds());
  const items1 = [stateFromStores, arg0];
  memo = noop.useMemo(() => {
    const set = new Set(stateFromStores);
    const found = closure_0.filter((item) => item instanceof set(memo[4]).ApplicationWidget);
    const mapped = found.map((applicationId) => applicationId.applicationId);
    return mapped.filter((item) => set.has(item));
  }, items1);
  const tmp2 = stateFromStores(memo[5])(memo);
  noop = tmp2;
  const items2 = [memo, tmp2];
  memo1 = noop.useMemo(() => memo.map((item, index) => {
    let parentId;
    if (closure_1_3[index] != null) {
      parentId = tmp.parentId;
    }
    if (parentId == null) {
      parentId = item;
    }
    return parentId;
  }), items2);
  let obj = require("initialize");
  const tokens = require("useAuthorizedAppsToken").useAuthorizedAppsTokens(memo1).tokens;
  closure_6 = tmp4;
  const items3 = [memo.length > 0];
  const effect = noop.useEffect(() => {
    if (closure_6) {
      const activityStatistics = LibraryApplicationStatisticsActionCreators.fetchActivityStatistics();
    }
  }, items3);
  const items4 = [tmp2];
  closure_7 = noop.useMemo(() => closure_3.map((getCanonicalGameId) => {
    let canonicalGameId;
    if (getCanonicalGameId != null) {
      canonicalGameId = getCanonicalGameId.getCanonicalGameId();
    }
    if (canonicalGameId == null) {
      canonicalGameId = null;
    }
    return canonicalGameId;
  }), items4);
  const obj2 = require("useAuthorizedAppsToken");
  const items5 = [tokens];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items5, () => closure_7.map((item) => {
    let num = 0;
    if (null != item) {
      num = gameDuration.getGameDuration(item);
    }
    return num;
  }));
  const obj3 = require("initialize");
  const items6 = [tokens];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items6, () => closure_7.map((item) => {
    lastPlayedDateTime = null;
    if (null != item) {
      lastPlayedDateTime = lastPlayedDateTime.getLastPlayedDateTime(item);
    }
    return lastPlayedDateTime;
  }));
  const items7 = [memo, memo1, stateFromStoresArray1, tokens, stateFromStoresArray];
  return noop.useMemo(() => {
    items = [];
    for (let num = 0; num < memo.length; num = num + 1) {
      let obj = { applicationId: memo[num], isConnected: set.has(memo1[num]), totalPlayDuration: null, lastPlayedAt: null };
      let num2 = stateFromStoresArray[num];
      if (num2 == null) {
        num2 = 0;
      }
      obj.totalPlayDuration = num2;
      let tmp5 = stateFromStoresArray1[num];
      if (tmp5 == null) {
        tmp5 = null;
      }
      obj.lastPlayedAt = tmp5;
      let arr = items.push(obj);
    }
    return items;
  }, items7);
};