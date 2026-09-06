// discord_app/modules/applications/ApplicationFrecencyHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import ApplicationFrecencyStore from "ApplicationFrecencyStore.tsx";

const require = fn;
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/ApplicationFrecencyHooks.tsx");

export const useSortApplicationsViaFrecency = function useSortApplicationsViaFrecency(found, stateFromStoresArray) {
  _require = found;
  const effect = memo.useEffect(() => {
    const FrecencyUserSettingsActionCreators = closure_0(stateFromStores[3]).FrecencyUserSettingsActionCreators;
    const ifUncached = FrecencyUserSettingsActionCreators.loadIfUncached(memo2.FRECENCY_AND_FAVORITES_SETTINGS);
  }, []);
  let items = [memo1];
  stateFromStores = require("initialize").useStateFromStores(items, () =>
    memo1.getApplicationFrecencyWithoutLoadingLatest(),
  );
  let items1 = [found, stateFromStoresArray];
  memo = memo.useMemo(() => {
    if (null != stateFromStoresArray) {
      if (0 !== stateFromStoresArray.length) {
        let mapped = closure_0.map((item) => {
          const obj = {};
          const merged = Object.assign(item);
          let flag;
          if (stateFromStoresArray != null) {
            flag = stateFromStoresArray.some((application) => application.application.id === item.id);
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
    mapped = closure_0;
  }, items1);
  const items2 = [found, stateFromStoresArray];
  memo1 = memo.useMemo(() => {
    found = undefined;
    if (stateFromStoresArray != null) {
      found = stateFromStoresArray.filter((item) => !found.some((id) => id.id === item.application.id));
    }
    return found;
  }, items2);
  const items3 = [memo, stateFromStores, memo1];
  const memo2 = memo.useMemo(() => {
    if (memo1 != null) {
      const item = memo1.forEach((id) => {
        let obj = closure_1(stateFromStores[5]);
        if (null == closure_1_2.getEntry(id.application.id)) {
          obj = { timestamp: extractTimestampResult };
          closure_1_2.track(id.application.id, obj);
        }
        extractTimestampResult = obj.extractTimestamp(id.id);
      });
    }
    stateFromStores.compute();
    let mapped;
    if (memo1 != null) {
      mapped = memo1.map((application) =>
        found(stateFromStores[6]).getApplicationCommandSection(application.application, true),
      );
    }
    if (mapped == null) {
      mapped = [];
    }
    const items = [...memo];
    const items1 = [...mapped];
    items.push.apply(items1);
    const sorted = items.sort((id, id2) => {
      let num = stateFromStores.getScore(id2.id);
      if (num == null) {
        num = 0;
      }
      let num2 = stateFromStores.getScore(id.id);
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
      const item = stateFromStoresArray.forEach((id) => {
        const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id.id);
        let tmp2 = null == applyResult;
        if (!tmp2) {
          tmp2 = extractTimestampResult > applyResult;
        }
        if (tmp2) {
          closure_0 = id;
        }
      });
    }
    const item1 = memo.forEach((id) => {
      const entry = stateFromStores.getEntry(id.id);
      let recentUses;
      if (entry != null) {
        recentUses = entry.recentUses;
      }
      if (recentUses == null) {
        recentUses = [];
      }
      const items = [...recentUses];
      applyResult = Math.max.apply(items);
      let tmp3 = null == applyResult;
      if (!tmp3) {
        tmp3 = applyResult > applyResult;
      }
      if (tmp3) {
        closure_0 = id;
      }
    });
    let str;
    if (closure_0 != null) {
      const application = closure_0.application;
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
