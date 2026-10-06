// discord_app/modules/user_profile/hooks/useUserProfileMutuals.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import react from "../../../../_runtime/00019_react.js";
import reactDefault from "../../../../discord_common/js/shared/hooks/usePrevValue.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_0, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const useMemo = react.useMemo;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let arr2;
      let arr3;
      let closure_3;
      let first;
      let flattenedGuildIds;
      let stateFromStores1;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp15;
      let tmp16;
      let tmp6;
      let tmp8;
      let tmp9;
      let user;
      let userAffinitiesMap;
      const f111252 = (arg0) => {
        let length = closure_3[arg0.guild.id];
        if (length == null) {
          length = stateFromStores1.length;
        }
        return length;
      };
      _require = id;
      const obj = require("react");
      const cResult = obj.c(22);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserProfileStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function c() {
          const items = [
            UserProfileStore.getMutualFriendsCount(user.id),
            UserProfileStore.getMutualFriends(user.id),
            UserProfileStore.getMutualGuilds(user.id),
            UserProfileStore.isFetchingProfile(user.id),
            UserProfileStore.isFetchingFriends(user.id),
          ];
          return items;
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = require("get initialized");
      [tmp8, arr2, arr3, tmp9, tmp10] = tmpResult.useStateFromStoresArray(first, tmp6);
      _slicedToArray(tmpResult.useStateFromStoresArray(first, tmp6), 5);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserAffinitiesV2Store];
        const fn2 = function h() {
          return userAffinitiesMap.getUserAffinitiesMap();
        };
        cResult[3] = items1;
        cResult[4] = fn2;
        tmp12 = fn2;
        tmp11 = items1;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmpResult5 = require("get initialized");
      const stateFromStores = tmpResult5.useStateFromStores(tmp11, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [SortedGuildStore];
        class P {
          constructor() {
            return flattenedGuildIds.getFlattenedGuildIds();
          }
        }
        cResult[5] = items2;
        cResult[6] = P;
        tmp16 = P;
        tmp15 = items2;
      } else {
        tmp15 = cResult[5];
        tmp16 = cResult[6];
      }
      const tmpResult6 = require("get initialized");
      stateFromStores1 = tmpResult6.useStateFromStores(tmp15, tmp16);
      let tmp18 = arr2;
      if (null != arr2) {
        tmp18 = arr2;
        if (arr2.length >= 2) {
          if (cResult[7] !== stateFromStores) {
            class B {
              constructor(user) {
                const value = stateFromStores.get(user.user.id);
                let num;
                if (value != null) {
                  num = value.communicationProbability;
                }
                if (num == null) {
                  num = -1;
                }
                return -1 * num;
              }
            }
            cResult[7] = stateFromStores;
            class P {
              constructor() {
                return flattenedGuildIds.getFlattenedGuildIds();
              }
            }
            cResult[8] = B;
          } else {
            class B {
              constructor(user) {
                const value = stateFromStores.get(user.user.id);
                let num;
                if (value != null) {
                  num = value.communicationProbability;
                }
                if (num == null) {
                  num = -1;
                }
                return -1 * num;
              }
            }
          }
          if (cResult[9] === arr2) {
            class B {
              constructor(user) {
                const value = stateFromStores.get(user.user.id);
                let num;
                if (value != null) {
                  num = value.communicationProbability;
                }
                if (num == null) {
                  num = -1;
                }
                return -1 * num;
              }
            }
            tmp18 = tmp22;
          }
          require("../../../../_runtime/metro/00012__.js");
          class P {
            constructor() {
              return flattenedGuildIds.getFlattenedGuildIds();
            }
          }
          cResult[9] = arr2;
          cResult[10] = B;
          cResult[11] = tmp22;
        }
      }
      let tmp23 = arr3;
      if (null != arr3) {
        class B {
          constructor(user) {
            const value = stateFromStores.get(user.user.id);
            let num;
            if (value != null) {
              num = value.communicationProbability;
            }
            if (num == null) {
              num = -1;
            }
            return -1 * num;
          }
        }
        tmp23 = arr3;
        if (arr3.length >= 2) {
          class B {
            constructor(user) {
              const value = stateFromStores.get(user.user.id);
              let num;
              if (value != null) {
                num = value.communicationProbability;
              }
              if (num == null) {
                num = -1;
              }
              return -1 * num;
            }
          }
          const _Symbol = Symbol;
          class P {
            constructor() {
              return flattenedGuildIds.getFlattenedGuildIds();
            }
          }
          const _Object = Object;
          _slicedToArray = Object.fromEntries(stateFromStores1.map(tmp26));
          const tmpResult8 = require("../../../../_runtime/metro/00012__.js");
          cResult[12] = arr3;
          cResult[13] = stateFromStores1;
          cResult[14] = tmpResult8.sortBy(arr3, f111252);
          const sortByResult = tmpResult8.sortBy(arr3, f111252);
        }
      }
      stateFromStores(stateFromStores1[9])(tmp8);
      stateFromStores(stateFromStores1[9])(tmp18);
      stateFromStores(stateFromStores1[9])(tmp23);
      if (tmp8 == null) {
        class B {
          constructor(user) {
            const value = stateFromStores.get(user.user.id);
            let num;
            if (value != null) {
              num = value.communicationProbability;
            }
            if (num == null) {
              num = -1;
            }
            return -1 * num;
          }
        }
      }
      if (tmp18 == null) {
        class B {
          constructor(user) {
            const value = stateFromStores.get(user.user.id);
            let num;
            if (value != null) {
              num = value.communicationProbability;
            }
            if (num == null) {
              num = -1;
            }
            return -1 * num;
          }
        }
      }
      if (tmp23 == null) {
        class B {
          constructor(user) {
            const value = stateFromStores.get(user.user.id);
            let num;
            if (value != null) {
              num = value.communicationProbability;
            }
            if (num == null) {
              num = -1;
            }
            return -1 * num;
          }
        }
      }
      if (cResult[16] === tmp9) {
        class B {
          constructor(user) {
            const value = stateFromStores.get(user.user.id);
            let num;
            if (value != null) {
              num = value.communicationProbability;
            }
            if (num == null) {
              num = -1;
            }
            return -1 * num;
          }
        }
      }
      const obj2 = {
        mutualFriendsCount: tmp8,
        mutualFriends: tmp18,
        mutualGuilds: tmp23,
        isFetching: tmp9,
        isFetchingFriends: tmp10,
      };
      cResult[16] = tmp9;
      cResult[17] = tmp10;
      cResult[18] = tmp23;
      cResult[19] = tmp8;
      cResult[20] = tmp18;
      cResult[21] = obj2;
    }
  : (arg0) => {
      let closure_1;
      let flattenedGuildIds;
      let stateFromStores;
      let tmp2;
      let tmp3;
      let userAffinitiesMap;
      _require = arg0;
      let obj = require("get initialized");
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
      const tmp5 = tmp[3];
      const tmp6 = tmp[4];
      const obj2 = require("get initialized");
      stateFromStores = obj2.useStateFromStores(items1, () => userAffinitiesMap.getUserAffinitiesMap());
      const items2 = [SortedGuildStore];
      const obj3 = require("get initialized");
      const stateFromStores1 = obj3.useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
      const items3 = [tmp3, stateFromStores];
      let tmp9 = stateFromStores1(() => {
        let sortByResult = importDefault;
        if (null != importDefault) {
          let num = 2;
          sortByResult = importDefault;
          if (importDefault.length >= 2) {
            const obj = _mod12;
            sortByResult = obj.sortBy(importDefault, (user) => {
              const value = stateFromStores.get(user.user.id);
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
      let tmp10 = stateFromStores1(() => {
        if (null != length) {
          if (length.length >= 2) {
            const _Object = Object;
            closure_0 = Object.fromEntries(
              stateFromStores1.map((item, index) => {
                const items = [item, index];
                return items;
              }),
            );
            const obj = closure_0(length[8]);
            return obj.sortBy(length, (arg0) => {
              length = closure_0[arg0.guild.id];
              if (length == null) {
                length = stateFromStores1.length;
              }
              return length;
            });
          }
        }
        return length;
      }, items4);
      reactDefault(tmp2);
      const tmp12 = reactDefault(tmp9);
      const obj4 = {
        mutualFriendsCount: tmp2,
        mutualFriends: tmp9,
        mutualGuilds: tmp10,
        isFetching: tmp5,
        isFetchingFriends: tmp6,
      };
      const tmp13 = reactDefault(tmp10);
      if (tmp9 == null) {
        tmp9 = tmp12;
      }
      if (tmp10 == null) {
        tmp10 = tmp13;
      }
      return obj4;
    };
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default tmp2;
