// discord_app/modules/voice_panel/native/hooks/useVoiceChannelGames.tsx
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";
import sortActivity from "sortActivity";
import filterPlayingActivities from "filterPlayingActivities";
import mergeGuildAvatar from "mergeGuildAvatar";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { useGetGameForAppId } from "../../../games/hooks/useGetGameForAppId.tsx";

const require = arg1;
let result = require("sortActivity").fileFinishedImporting("modules/voice_panel/native/hooks/useVoiceChannelGames.tsx");

export default function useVoiceChannelGames(arg0, arg1, arg2) {
  const _require = arg0;
  let closure_1 = arg1;
  const dependencyMap = arg2;
  let items = [stateFromStores, filterPlayingActivities, sortActivity];
  const items1 = [arg0, arg1, arg2];
  const stateFromStoresArray = _initialize.useStateFromStoresArray(items, () => {
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
            let tmp20 = outer1_6;
            let activities = outer1_6.getActivities();
          } else {
            let tmp16 = outer1_5;
            let tmp17 = user;
            let tmp18 = closure_1;
            activities = outer1_5.getActivities(tmp15.id, closure_1);
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
  const obj = _initialize;
  const getGamesForAppIds = _useGetGameForAppId.useGetGamesForAppIds(stateFromStoresArray);
  let obj2 = _useGetGameForAppId;
  const items2 = [mergeGuildAvatar];
  stateFromStores = _initialize.useStateFromStores(items2, () => {
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