// === Module 12270: useUserProfileMutuals ===

// Module 12270 (useUserProfileMutuals)
import _mod12 from "module_12" /* 12 */;
import usePrevValueDefault from "usePrevValue" /* 9288 */;
import _slicedToArray from "module_32" /* 32 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7143 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;

const require = globalThis.__r;

require = fn;
const useMemo = fn(19).useMemo;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/hooks/useUserProfileMutuals.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  let tmp = _require;
  const cResult = require("c").c(22);
  let sortBy = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserProfileStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function c() {
      const items = [UserProfileStore.getMutualFriendsCount(user.id), UserProfileStore.getMutualFriends(user.id), UserProfileStore.getMutualGuilds(user.id), UserProfileStore.isFetchingProfile(user.id), UserProfileStore.isFetchingFriends(user.id)];
      return items;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const tmpResult = tmp(stateFromStores1[7]);
  [tmp8, arr2, arr3, tmp9, tmp10] = tmp(stateFromStores1[7]).useStateFromStoresArray(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserAffinitiesV2Store];
    const fn2 = function h() {
      return userAffinitiesMap.getUserAffinitiesMap();
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp12 = fn2;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const tmp7 = _slicedToArray(tmp(stateFromStores1[7]).useStateFromStoresArray(first, tmp6), 5);
  const stateFromStores = tmp(stateFromStores1[7]).useStateFromStores(tmp11, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SortedGuildStore];
    class P {
      constructor() {
        return closure_1_6.getFlattenedGuildIds();
      }
    }
    cResult[5] = items2;
    cResult[6] = P;
    let tmp16 = P;
    let tmp15 = items2;
  } else {
    tmp15 = cResult[5];
    tmp16 = cResult[6];
  }
  const tmpResult4 = tmp(stateFromStores1[7]);
  stateFromStores1 = tmp(stateFromStores1[7]).useStateFromStores(tmp15, tmp16);
  let tmp18 = arr2;
  if (null != arr2) {
    tmp18 = arr2;
    if (arr2.length >= 2) {
      if (cResult[7] !== stateFromStores) {
        class B {
          constructor(arg0) {
            value = closure_1.get(id.user.id);
            num = undefined;
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
            return closure_1_6.getFlattenedGuildIds();
          }
        }
        cResult[8] = B;
      } else {
        class B {
          constructor(arg0) {
            value = closure_1.get(id.user.id);
            num = undefined;
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
          constructor(arg0) {
            value = closure_1.get(id.user.id);
            num = undefined;
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
      tmp(tmp2[8]);
      class P {
        constructor() {
          return closure_1_6.getFlattenedGuildIds();
        }
      }
      cResult[9] = arr2;
      cResult[10] = B;
      cResult[11] = tmp22;
    }
  }
  let tmp24 = arr3;
  if (null != arr3) {
    class B {
      constructor(arg0) {
        value = closure_1.get(id.user.id);
        num = undefined;
        if (value != null) {
          num = value.communicationProbability;
        }
        if (num == null) {
          num = -1;
        }
        return -1 * num;
      }
    }
    tmp24 = arr3;
    if (arr3.length >= 2) {
      class B {
        constructor(arg0) {
          value = closure_1.get(id.user.id);
          num = undefined;
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
          return closure_1_6.getFlattenedGuildIds();
        }
      }
      const _Object = sortBy.Object;
      _slicedToArray = _Object.fromEntries(stateFromStores1.map(tmp26));
      tmp = tmp(tmp2[8]);
      sortBy = tmp.sortBy;
      const sortByResult = sortBy(arr3, (arg0) => {
        let length = closure_3[arg0.guild.id];
        if (length == null) {
          length = stateFromStores1.length;
        }
        return length;
      });
      cResult[12] = arr3;
      cResult[13] = stateFromStores1;
      cResult[14] = sortByResult;
    }
  }
  stateFromStores(stateFromStores1[9])(tmp8);
  stateFromStores(stateFromStores1[9])(tmp18);
  stateFromStores(stateFromStores1[9])(tmp24);
  if (tmp8 == null) {
    class B {
      constructor(arg0) {
        value = closure_1.get(id.user.id);
        num = undefined;
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
      constructor(arg0) {
        value = closure_1.get(id.user.id);
        num = undefined;
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
  if (tmp24 == null) {
    class B {
      constructor(arg0) {
        value = closure_1.get(id.user.id);
        num = undefined;
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
      constructor(arg0) {
        value = closure_1.get(id.user.id);
        num = undefined;
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
  cResult[16] = tmp9;
  cResult[17] = tmp10;
  cResult[18] = tmp24;
  cResult[19] = tmp8;
  cResult[20] = tmp18;
  cResult[21] = { mutualFriendsCount: tmp8, mutualFriends: tmp18, mutualGuilds: tmp24, isFetching: tmp9, isFetchingFriends: tmp10 };
  const obj2 = { mutualFriendsCount: tmp8, mutualFriends: tmp18, mutualGuilds: tmp24, isFetching: tmp9, isFetchingFriends: tmp10 };
  const tmpResult5 = tmp(stateFromStores1[7]);
}) : ((arg0) => {
  _require = arg0;
  let items = [UserProfileStore];
  const tmp = stateFromStores(require("initialize").useStateFromStoresArray(items, () => {
    const items = [UserProfileStore.getMutualFriendsCount(closure_0.id), UserProfileStore.getMutualFriends(closure_0.id), UserProfileStore.getMutualGuilds(closure_0.id), UserProfileStore.isFetchingProfile(closure_0.id), UserProfileStore.isFetchingFriends(closure_0.id)];
    return items;
  }), 5);
  [tmp2, tmp3] = tmp;
  importDefault = tmp3;
  dependencyMap = tmp4;
  let obj = require("initialize");
  const items1 = [UserAffinitiesV2Store];
  stateFromStores = require("initialize").useStateFromStores(items1, () => userAffinitiesMap.getUserAffinitiesMap());
  const obj2 = require("initialize");
  const items2 = [SortedGuildStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => flattenedGuildIds.getFlattenedGuildIds());
  const items3 = [tmp3, stateFromStores];
  let tmp7 = stateFromStores1(() => {
    let sortByResult = tmp3;
    if (null != tmp3) {
      sortByResult = tmp3;
      if (tmp3.length >= 2) {
        sortByResult = _mod12.sortBy(tmp3, (user) => {
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
    if (null != length) {
      if (length.length >= 2) {
        const _Object = Object;
        closure_0 = Object.fromEntries(stateFromStores1.map((item, index) => {
          const items = [item, index];
          return items;
        }));
        return closure_0(length[8]).sortBy(length, (arg0) => {
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
  const obj3 = require("initialize");
  const tmp9 = usePrevValueDefault(tmp2);
  const tmp10 = usePrevValueDefault(tmp7);
  const obj4 = { mutualFriendsCount: tmp2, mutualFriends: null, mutualGuilds: null, isFetching: null, isFetchingFriends: null };
  if (tmp7 == null) {
    tmp7 = tmp10;
  }
  obj4.mutualFriends = tmp7;
  if (tmp8 == null) {
    tmp8 = tmp11;
  }
  obj4.mutualGuilds = tmp8;
  obj4.isFetching = tmp[3];
  obj4.isFetchingFriends = tmp[4];
  return obj4;
});