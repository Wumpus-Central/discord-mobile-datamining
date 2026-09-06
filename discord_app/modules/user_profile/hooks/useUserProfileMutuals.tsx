// discord_app/modules/user_profile/hooks/useUserProfileMutuals.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import usePrevValueDefault from "../../../../discord_common/js/shared/hooks/usePrevValue.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

require = fn;
const useMemo = fn(19).useMemo;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default function useUserProfileMutuals(arg0) {
  _require = arg0;
  let obj = require("initialize");
  let items = [UserProfileStore];
  const tmp = stateFromStores(
    obj.useStateFromStoresArray(items, () => {
      const items = [
        UserProfileStore.getMutualFriendsCount(closure_0.id),
        UserProfileStore.getMutualFriends(closure_0.id),
        UserProfileStore.getMutualGuilds(closure_0.id),
        UserProfileStore.isFetchingProfile(closure_0.id),
        UserProfileStore.isFetchingFriends(closure_0.id),
      ];
      return items;
    }),
    5,
  );
  [tmp2, tmp3] = tmp;
  importDefault = tmp3;
  dependencyMap = tmp4;
  const items1 = [UserAffinitiesV2Store];
  stateFromStores = require("initialize").useStateFromStores(items1, () => userAffinitiesMap.getUserAffinitiesMap());
  const obj2 = require("initialize");
  const items2 = [SortedGuildStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () =>
    flattenedGuildIds.getFlattenedGuildIds(),
  );
  const items3 = [tmp3, stateFromStores];
  let tmp7 = stateFromStores1(() => {
    let sortByResult = closure_1;
    if (null != closure_1) {
      sortByResult = arr;
      if (arr.length >= 2) {
        sortByResult = _mod12.sortBy(arr, (user) => {
          value = stateFromStores.get(user.user.id);
          let num;
          if (value != null) {
            num = value.communicationProbability;
          }
          if (num == null) {
            num = -1;
          }
          return -1 * num;
        });
      }
    }
    return sortByResult;
  }, items3);
  const items4 = [tmp[2], stateFromStores1];
  let tmp8 = stateFromStores1(() => {
    if (null != closure_2) {
      if (arr.length >= 2) {
        const _Object = Object;
        closure_0 = Object.fromEntries(
          stateFromStores1.map((item, index) => {
            const items = [item, index];
            return items;
          }),
        );
        return closure_0(closure_2[6]).sortBy(arr, (arg0) => {
          let length = closure_0[arg0.guild.id];
          if (length == null) {
            length = stateFromStores1.length;
          }
          return length;
        });
      }
    }
    return closure_2;
  }, items4);
  const obj3 = require("initialize");
  const tmp9 = usePrevValueDefault(tmp2);
  const tmp10 = usePrevValueDefault(tmp7);
  obj = {
    mutualFriendsCount: tmp2,
    mutualFriends: null,
    mutualGuilds: null,
    isFetching: null,
    isFetchingFriends: null,
  };
  if (tmp7 == null) {
    tmp7 = tmp10;
  }
  obj.mutualFriends = tmp7;
  if (tmp8 == null) {
    tmp8 = tmp11;
  }
  obj.mutualGuilds = tmp8;
  obj.isFetching = tmp[3];
  obj.isFetchingFriends = tmp[4];
  return obj;
}
