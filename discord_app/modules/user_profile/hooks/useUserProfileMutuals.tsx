// === Module 12160: useUserProfileMutuals ===

// Module 12160 (useUserProfileMutuals)
import usePrevValueDefault from "usePrevValue" /* 9196 */;
import closure_3 from "_slicedToArray" /* 32 */;
import { useMemo } from "noop" /* 19 */;
import closure_5 from "recomputeAffinities" /* 7265 */;
import closure_6 from "insertUnsortedGuilds" /* 5262 */;
import closure_7 from "createUserWidgetFromServer" /* 7227 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default function useUserProfileMutuals(arg0) {
  const _require = arg0;
  let obj = _require(589);
  let items = [closure_7];
  const tmp = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [closure_1_7.getMutualFriendsCount(lib.id), closure_1_7.getMutualFriends(lib.id), closure_1_7.getMutualGuilds(lib.id), closure_1_7.isFetchingProfile(lib.id), closure_1_7.isFetchingFriends(lib.id)];
    return items;
  }), 5);
  [tmp2, tmp3] = tmp;
  importDefault = tmp3;
  dependencyMap = tmp4;
  const items1 = [closure_5];
  stateFromStores = _require(589).useStateFromStores(items1, () => userAffinitiesMap.getUserAffinitiesMap());
  const obj2 = _require(589);
  const items2 = [closure_6];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  const items3 = [tmp3, stateFromStores];
  let tmp7 = stateFromStores1(() => {
    let sortByResult = closure_1;
    if (null != closure_1) {
      sortByResult = arr;
      if (arr.length >= 2) {
        sortByResult = lib(12).sortBy(arr, (user) => {
          const value = closure_3.get(user.user.id);
          let num;
          if (value != null) {
            num = value.communicationProbability;
          }
          if (num == null) {
            num = -1;
          }
          return -1 * num;
        });
        const obj = lib(12);
      }
    }
    return sortByResult;
  }, items3);
  const items4 = [tmp[2], stateFromStores1];
  let tmp8 = stateFromStores1(() => {
    if (null != dependencyMap) {
      if (arr.length >= 2) {
        const _Object = Object;
        const lib = Object.fromEntries(stateFromStores1.map((arg0, arg1) => {
          const items = [arg0, arg1];
          return items;
        }));
        return lib(12).sortBy(arr, (arg0) => {
          let length = table[arg0.guild.id];
          if (length == null) {
            length = closure_1_4.length;
          }
          return length;
        });
      }
    }
    return dependencyMap;
  }, items4);
  const obj3 = _require(589);
  const tmp9 = usePrevValueDefault(tmp2);
  const tmp10 = usePrevValueDefault(tmp7);
  obj = { mutualFriendsCount: tmp2, mutualFriends: null, mutualGuilds: null, isFetching: null, isFetchingFriends: null };
  if (tmp7 == null) {
    tmp7 = tmp10;
  }
  obj[1] = tmp7;
  if (tmp8 == null) {
    tmp8 = tmp11;
  }
  obj[2] = tmp8;
  obj[3] = tmp[3];
  obj[4] = tmp[4];
  return obj;
};