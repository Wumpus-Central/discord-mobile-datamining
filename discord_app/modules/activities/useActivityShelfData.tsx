// discord_app/modules/activities/useActivityShelfData.tsx
import closure_3 from "../../../_runtime/00019_noop.js";
import closure_4 from "../../stores/UserStore.tsx";
import closure_5 from "../../stores/game_store/TestModeStore.tsx";
import closure_6 from "EmbeddedActivitiesStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useActivityShelfData.tsx");

export const useActivityShelfData = function useActivityShelfData(guildId) {
  const _require = guildId;
  let items = [getCurrentUser];
  const stateFromStores = _require(stateFromStoresArray[4]).useStateFromStores(items, getCurrentUser.getCurrentUser);
  let obj = _require(stateFromStoresArray[4]);
  let tmp = stateFromStoresArray;
  const items1 = [memo1];
  stateFromStoresArray = _require(stateFromStoresArray[4]).useStateFromStoresArray(items1, () =>
    memo1.getShelfActivities(closure_0),
  );
  const obj2 = _require(stateFromStoresArray[4]);
  const items2 = [memo];
  const stateFromStores1 = _require(stateFromStoresArray[4]).useStateFromStores(
    items2,
    () => memo.testModeEmbeddedApplicationId,
  );
  let mapped = stateFromStoresArray.map((application_id) => application_id.application_id);
  let tmp5 = mapped;
  if (null != stateFromStores1) {
    const items3 = [stateFromStores1];
    HermesBuiltin.arraySpread(mapped, 1);
    tmp5 = items3;
  }
  const tmp9 = stateFromStores(tmp[5])(tmp5);
  getCurrentUser = tmp9;
  const items4 = [tmp9];
  memo = stateFromStores1.useMemo(() => closure_4.filter(guildId(stateFromStoresArray[6]).isNotNullish), items4);
  const items5 = [memo, stateFromStores1];
  memo1 = stateFromStores1.useMemo(() => {
    if (null != stateFromStores1) {
      if (memo.length > 0) {
        if (tmp2[0].id === tmp) {
          if (null != tmp2[0].embeddedActivityConfig) {
            const obj = { activity: null, application: null };
            obj[0] = tmp2[0].embeddedActivityConfig;
            obj[1] = tmp2[0];
            const items = [obj];
          }
          return [];
        }
      }
    }
  }, items5);
  const items6 = [stateFromStoresArray, memo];
  const memo2 = stateFromStores1.useMemo(() => {
    const mapped = stateFromStoresArray.map((arg0) => {
      closure_0 = arg0;
      const found = closure_5.find((id) => id.id === application_id.application_id);
      let tmp2 = null;
      if (null != found) {
        const obj = { activity: null, application: null };
        obj[0] = arg0;
        obj[1] = found;
        tmp2 = obj;
      }
      return tmp2;
    });
    return mapped.filter(guildId(stateFromStoresArray[6]).isNotNullish);
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
      const tmp = lib(9410);
      return supported_platforms.includes(tmp(callback(1115).getOS()));
    });
    const found1 = found.filter((activity) => {
      const requires_age_gate = activity.activity.requires_age_gate;
      let tmp = !requires_age_gate;
      if (requires_age_gate) {
        let nsfwAllowed;
        if (lib != null) {
          nsfwAllowed = lib.nsfwAllowed;
        }
        tmp = true === nsfwAllowed;
      }
      if (!tmp) {
        let nsfwAllowed1;
        if (lib != null) {
          nsfwAllowed1 = lib.nsfwAllowed;
        }
        tmp = null == nsfwAllowed1;
      }
      return tmp;
    });
    return found1.filter((application) => {
      let nsfwAllowed;
      if (lib != null) {
        nsfwAllowed = lib.nsfwAllowed;
      }
      let tmp2 = false === nsfwAllowed;
      if (tmp2) {
        tmp2 = closure_1_1(closure_1_2[9])(application.application.id);
      }
      return !tmp2;
    });
  }, items7);
};
