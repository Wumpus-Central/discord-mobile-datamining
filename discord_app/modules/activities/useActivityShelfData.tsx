// === Module 12040: useActivityShelfData ===

// Module 12040 (useActivityShelfData)
import GlobalUtils from "GlobalUtils" /* 1369 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import TestModeStore from "TestModeStore" /* 8857 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 1956 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityShelfData.tsx");

export const useActivityShelfData = function useActivityShelfData(guildId) {
  _require = guildId;
  let items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, UserStore.getCurrentUser);
  let obj = require("initialize");
  let tmp = stateFromStoresArray;
  const items1 = [memo1];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => EmbeddedActivitiesStore.getShelfActivities(closure_0));
  const obj2 = require("initialize");
  const items2 = [memo];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => memo.testModeEmbeddedApplicationId);
  let mapped = stateFromStoresArray.map((application_id) => application_id.application_id);
  let tmp5 = mapped;
  if (null != stateFromStores1) {
    const items3 = [stateFromStores1];
    HermesBuiltin.arraySpread(mapped, 1);
    tmp5 = items3;
  }
  const tmp9 = stateFromStores(tmp[5])(tmp5);
  UserStore = tmp9;
  const items4 = [tmp9];
  memo = stateFromStores1.useMemo(() => closure_4.filter(GlobalUtils.isNotNullish), items4);
  const items5 = [memo, stateFromStores1];
  memo1 = stateFromStores1.useMemo(() => {
    if (null != stateFromStores1) {
      if (memo.length > 0) {
        if (tmp2[0].id === tmp) {
          if (null != tmp2[0].embeddedActivityConfig) {
            const obj = { activity: tmp2[0].embeddedActivityConfig, application: tmp2[0] };
            const items = [obj];
          }
          return [];
        }
      }
    }
  }, items5);
  const items6 = [stateFromStoresArray, memo];
  const memo2 = stateFromStores1.useMemo(() => {
    const mapped = stateFromStoresArray.map((activity) => {
      const found = memo.find((id) => id.id === activity.application_id);
      let tmp2 = null;
      if (null != found) {
        const obj = { activity, application: found };
        tmp2 = obj;
      }
      return tmp2;
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items6);
  let nsfwAllowed;
  if (stateFromStores != null) {
    nsfwAllowed = stateFromStores.nsfwAllowed;
  }
  const items7 = [nsfwAllowed, memo2, memo1];
  return stateFromStores1.useMemo(() => {
    const items = [...memo2];
    const found = items.filter((activity) => {
      let supported_platforms = activity.activity.supported_platforms;
      if (supported_platforms == null) {
        supported_platforms = [];
      }
      const tmp = stateFromStores(9410);
      return supported_platforms.includes(tmp(guildId(1115).getOS()));
    });
    const found1 = found.filter((activity) => {
      const requires_age_gate = activity.activity.requires_age_gate;
      let tmp = !requires_age_gate;
      if (requires_age_gate) {
        nsfwAllowed = undefined;
        if (stateFromStores != null) {
          nsfwAllowed = stateFromStores.nsfwAllowed;
        }
        tmp = true === nsfwAllowed;
      }
      if (!tmp) {
        let nsfwAllowed1;
        if (stateFromStores != null) {
          nsfwAllowed1 = stateFromStores.nsfwAllowed;
        }
        tmp = null == nsfwAllowed1;
      }
      return tmp;
    });
    return found1.filter((application) => {
      nsfwAllowed = undefined;
      if (nsfwAllowed != null) {
        nsfwAllowed = nsfwAllowed.nsfwAllowed;
      }
      let tmp2 = false === nsfwAllowed;
      if (tmp2) {
        tmp2 = stateFromStores(stateFromStoresArray[9])(application.application.id);
      }
      return !tmp2;
    });
  }, items7);
};