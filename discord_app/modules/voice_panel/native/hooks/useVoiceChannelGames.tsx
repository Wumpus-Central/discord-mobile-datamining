// discord_app/modules/voice_panel/native/hooks/useVoiceChannelGames.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../stores/AuthenticationStore.tsx";
import closure_5 from "../../../../stores/PresenceStore.tsx";
import closure_6 from "../../../../stores/SelfPresenceStore.tsx";
import closure_7 from "../../../../stores/UserStore.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useGetGameForAppId } from "../../../games/hooks/useGetGameForAppId.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default function useVoiceChannelGames(arg0, arg1, arg2) {
  const _require = arg0;
  closure_1 = arg1;
  dependencyMap = arg2;
  let items = [stateFromStores, closure_6, closure_5];
  const items1 = [arg0, arg1, arg2];
  const stateFromStoresArray = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresArray(items, () => {
    if (closure_2) {
      const _Set = Set;
      const id = stateFromStores.getId();
      const set = new Set();
      const tmp10 = dependencyMap[Symbol.iterator]();
      while (true) {
        let tmp12 = tmp8;
        let tmp14 = tmp10;
        if (tmp10 === undefined) {
          let _Array = Array;
          return Array.from(set);
        } else {
          let user = tmp13.user;
          if (user.id === id) {
            let tmp20 = closure_1_6;
            let activities = closure_1_6.getActivities();
          } else {
            let tmp16 = closure_1_5;
            let tmp17 = user;
            let tmp18 = closure_1;
            activities = closure_1_5.getActivities(tmp15.id, closure_1);
          }
          let tmp21 = activities;
          let tmp22 = activities[Symbol.iterator]();
        }
      }
      tmp8 = dependencyMap;
    } else {
      return [];
    }
  }, items1);
  const obj = initialize;
  const getGamesForAppIds = require("../../../games/hooks/useGetGameForAppId.tsx").useGetGamesForAppIds(stateFromStoresArray);
  let obj2 = useGetGameForAppId;
  const items2 = [closure_7];
  stateFromStores = require("../../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items3 = [getGamesForAppIds, stateFromStores];
  return getGamesForAppIds.useMemo(() => {
    const items = [];
    const set = new Set();
    for (const item10013 of getGamesForAppIds) {
      let tmp = item10013;
      let tmp2 = dependencyMap;
      let tmp3 = table;
      let obj2 = dependencyMap(table[8]);
      let tmp4 = stateFromStores;
      let result = obj2.isGameProfileObscured(item10013, stateFromStores);
      if (!result) {
        let tmp6 = item10013;
        result = set.has(tmp.id);
      }
      if (!result) {
        let tmp7 = item10013;
        let addResult = set.add(tmp.id);
        let arr = items.push(tmp.id);
      }
      continue;
    }
    return items;
  }, items3);
};