// discord_app/modules/user_profile/hooks/useUserProfileMutuals.tsx
import _slicedToArray from "_slicedToArray";
import { useMemo } from "noop";
import recomputeAffinities from "recomputeAffinities";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import createUserWidgetFromServer from "createUserWidgetFromServer";

const require = arg1;
const result = require("recomputeAffinities").fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default function useUserProfileMutuals(arg0) {
  let tmp2;
  let tmp3;
  const _require = arg0;
  let obj = _require(589);
  let items = [createUserWidgetFromServer];
  const tmp = stateFromStores(obj.useStateFromStoresArray(items, () => {
    const items = [outer1_7.getMutualFriendsCount(lib.id), outer1_7.getMutualFriends(lib.id), outer1_7.getMutualGuilds(lib.id), outer1_7.isFetchingProfile(lib.id), outer1_7.isFetchingFriends(lib.id)];
    return items;
  }), 5);
  [tmp2, tmp3] = tmp;
  const importDefault = tmp3;
  const dependencyMap = tmp4;
  const items1 = [recomputeAffinities];
  stateFromStores = _require(589).useStateFromStores(items1, () => userAffinitiesMap.getUserAffinitiesMap());
  const obj2 = _require(589);
  const items2 = [insertUnsortedGuilds];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  const items3 = [tmp3, stateFromStores];
  let tmp7 = stateFromStores1(() => {
    let sortByResult = closure_1;
    if (null != closure_1) {
      sortByResult = arr;
      if (arr.length >= 2) {
        sortByResult = lib(tmp4[6]).sortBy(arr, (user) => {
          const value = _slicedToArray.get(user.user.id);
          let num;
          if (value != null) {
            num = value.communicationProbability;
          }
          if (num == null) {
            num = -1;
          }
          return -1 * num;
        });
        const obj = lib(tmp4[6]);
      }
    }
    return sortByResult;
  }, items3);
  const items4 = [tmp[2], stateFromStores1];
  let tmp8 = stateFromStores1(() => {
    if (null != tmp4) {
      if (arr.length >= 2) {
        const _Object = Object;
        const lib = Object.fromEntries(stateFromStores1.map((arg0, arg1) => {
          const items = [arg0, arg1];
          return items;
        }));
        return lib(tmp4[6]).sortBy(arr, (arg0) => {
          let length = table[arg0.guild.id];
          if (length == null) {
            length = outer1_4.length;
          }
          return length;
        });
      }
    }
    return tmp4;
  }, items4);
  const obj3 = _require(589);
  const tmp9 = importDefault(8971)(tmp2);
  const tmp10 = importDefault(8971)(tmp7);
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