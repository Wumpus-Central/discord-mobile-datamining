// discord_app/modules/applications/ApplicationFrecencyHooks.tsx
import noop from "noop";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import { UserSettingsTypes } from "MAX_FAVORITES";

const require = arg1;
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = function useSortApplicationsViaFrecency(found, stateFromStoresArray) {
  const _require = found;
  let closure_1 = stateFromStoresArray;
  const effect = memo.useEffect(() => {
    const FrecencyUserSettingsActionCreators = lib(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(memo2.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  let items = [memo1];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => memo1.getApplicationFrecencyWithoutLoadingLatest());
  let items1 = [found, stateFromStoresArray];
  memo = memo.useMemo(() => {
    if (null != stateFromStoresArray) {
      if (0 !== stateFromStoresArray.length) {
        let mapped = lib.map((arg0) => {
          let closure_0 = arg0;
          const obj = {};
          const merged = Object.assign(arg0);
          let flag;
          if (closure_1 != null) {
            flag = closure_1.some((application) => application.application.id === id.id);
          }
          if (flag == null) {
            flag = false;
          }
          obj.isUserApp = flag;
          return obj;
        });
      }
      return mapped;
    }
    mapped = lib;
  }, items1);
  const items2 = [found, stateFromStoresArray];
  memo1 = memo.useMemo(() => {
    let found;
    if (closure_1 != null) {
      found = closure_1.filter((arg0) => {
        let closure_0 = arg0;
        return !closure_0.some((id) => id.id === application.application.id);
      });
    }
    return found;
  }, items2);
  const items3 = [memo, stateFromStores, memo1];
  const memo2 = memo.useMemo(() => {
    if (memo1 != null) {
      const item = arr.forEach((id) => {
        let obj = outer1_1(outer1_2[5]);
        if (null == store.getEntry(id.application.id)) {
          obj = { timestamp: null };
          obj[0] = extractTimestampResult;
          store.track(id.application.id, obj);
        }
      });
    }
    stateFromStores.compute();
    let mapped;
    if (memo1 != null) {
      mapped = arr.map((application) => callback(store[6]).getApplicationCommandSection(application.application, true));
    }
    if (mapped == null) {
      mapped = [];
    }
    const items = [...memo];
    const items1 = [...mapped];
    items.push.apply(items1);
    const sorted = items.sort((id, id2) => {
      let num = store.getScore(id2.id);
      if (num == null) {
        num = 0;
      }
      let num2 = store.getScore(id.id);
      if (num2 == null) {
        num2 = 0;
      }
      let diff = num - num2;
      if (0 === diff) {
        const name = id.name;
        diff = name.localeCompare(id2.name);
      }
      return diff;
    });
    return items;
  }, items3);
  const items4 = [memo2, memo, stateFromStores, stateFromStoresArray];
  return memo.useMemo(() => {
    if (closure_1 != null) {
      const item = closure_1.forEach((id) => {
        const extractTimestampResult = callback(stateFromStores[5]).extractTimestamp(id.id);
        let tmp2 = null == callback;
        if (!tmp2) {
          tmp2 = extractTimestampResult > callback;
        }
        if (tmp2) {
          let closure_0 = id;
          callback = extractTimestampResult;
        }
      });
    }
    const item1 = memo.forEach((id) => {
      const entry = str.getEntry(id.id);
      let recentUses;
      if (entry != null) {
        recentUses = entry.recentUses;
      }
      if (recentUses == null) {
        recentUses = [];
      }
      const items = [...recentUses];
      const applyResult = Math.max.apply(items);
      let tmp3 = null == closure_1;
      if (!tmp3) {
        tmp3 = applyResult > closure_1;
      }
      if (tmp3) {
        let closure_0 = id;
        closure_1 = applyResult;
      }
    });
    let str;
    if (lib != null) {
      const application = lib.application;
      if (application != null) {
        str = application.id;
      }
    }
    if (str == null) {
      str = "";
    }
    let items = [...memo2.filter((id) => id.id === str), ...memo2.filter((id) => id.id !== str)];
    return items;
  }, items4);
};