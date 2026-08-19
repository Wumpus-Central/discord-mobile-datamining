// discord_app/modules/applications/ApplicationFrecencyHooks.tsx
import noop from "../../../_runtime/00019_noop.js";
import handleUserSettingsProtoStoreChange from "ApplicationFrecencyStore.tsx";
import { UserSettingsTypes } from "../user_settings/UserSettingsConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = function useSortApplicationsViaFrecency(found, stateFromStoresArray) {
  const _require = found;
  closure_1 = stateFromStoresArray;
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
        let mapped = lib.map((item, index) => {
          closure_0 = item;
          const obj = {};
          const merged = Object.assign(item);
          let flag;
          if (closure_1 != null) {
            flag = closure_1.some((item, index) => item.application.id === item.id);
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
    found = undefined;
    if (stateFromStoresArray != null) {
      found = stateFromStoresArray.filter((item, index) => {
        closure_0 = item;
        return !closure_0.some((item, index) => item.id === item.application.id);
      });
    }
    return found;
  }, items2);
  const items3 = [memo, stateFromStores, memo1];
  const memo2 = memo.useMemo(() => {
    if (memo1 != null) {
      const item = memo1.forEach((item, index) => {
        let obj = stateFromStoresArray(stateFromStores[5]);
        if (null == store.getEntry(item.application.id)) {
          obj = { timestamp: null };
          obj[0] = extractTimestampResult;
          store.track(item.application.id, obj);
        }
        extractTimestampResult = obj.extractTimestamp(item.id);
      });
    }
    stateFromStores.compute();
    let mapped;
    if (memo1 != null) {
      mapped = memo1.map((item, index) => callback(store[6]).getApplicationCommandSection(item.application, true));
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
    if (stateFromStoresArray != null) {
      const item = stateFromStoresArray.forEach((item, index) => {
        const extractTimestampResult = callback(stateFromStores[5]).extractTimestamp(item.id);
        let tmp2 = null == callback;
        if (!tmp2) {
          tmp2 = extractTimestampResult > callback;
        }
        if (tmp2) {
          closure_0 = item;
          callback = extractTimestampResult;
        }
      });
    }
    const item1 = memo.forEach((item, index) => {
      const entry = str.getEntry(item.id);
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
        closure_0 = item;
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
    let items = [...memo2.filter((item, index) => item.id === str), ...memo2.filter((item, index) => item.id !== str)];
    return items;
  }, items4);
};