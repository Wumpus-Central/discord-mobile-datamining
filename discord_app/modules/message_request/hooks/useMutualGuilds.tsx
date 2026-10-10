// === Module 17587: useMutualGuilds ===

// Module 17587 (useMutualGuilds)
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7320 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = ReactCompilerGating.isReactCompilerEnabled() ? (function useMutualGuildsForMessageRequests(arg0) {
  _require = arg0;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return UserStore.getUser(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function f() {
      const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
      let mapped;
      if (mutualGuilds != null) {
        mapped = mutualGuilds.map((guild) => guild.guild);
      }
      if (mapped == null) {
        mapped = [];
      }
      return mapped;
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp8, tmp10);
  if (cResult[6] === stateFromStoresArray) {
    if (cResult[7] === stateFromStores) {
      if (cResult[8] === arg0) {
        let tmp12 = cResult[9];
        let tmp13 = cResult[10];
      }
      const effect = noop.useEffect(tmp12, tmp13);
      return stateFromStoresArray;
    }
  }
  class S {
    constructor() {
      tmp = 0 === closure_2.length;
      if (tmp) {
        tmp2 = closure_1;
        tmp3 = null;
        tmp = null != closure_1;
      }
      if (tmp) {
        tmp4 = closure_4;
        tmp5 = closure_0;
        tmp6 = null;
        tmp = null == closure_4.getMutualGuilds(closure_0);
      }
      if (tmp) {
        tmp7 = closure_1;
        tmp8 = closure_2;
        tmp9 = closure_0;
        tmp10 = closure_1(closure_2[6])(closure_0, undefined, { withMutualGuilds: true });
      }
      return;
    }
  }
  const items2 = [stateFromStoresArray, stateFromStores, arg0];
  cResult[6] = stateFromStoresArray;
  cResult[7] = stateFromStores;
  cResult[8] = arg0;
  cResult[9] = S;
  cResult[10] = items2;
  tmp13 = items2;
  tmp12 = S;
  const tmpResult2 = require("initialize");
}) : (function useMutualGuildsForMessageRequests(arg0) {
  _require = arg0;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0));
  const obj = require("initialize");
  const items1 = [UserProfileStore];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const mutualGuilds = UserProfileStore.getMutualGuilds(closure_0);
    let mapped;
    if (mutualGuilds != null) {
      mapped = mutualGuilds.map((guild) => guild.guild);
    }
    if (mapped == null) {
      mapped = [];
    }
    return mapped;
  });
  const items2 = [stateFromStoresArray, stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    let tmp = 0 === stateFromStoresArray.length;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null == UserProfileStore.getMutualGuilds(closure_0);
    }
    if (tmp) {
      maybeFetchUserProfileDefault(closure_0, undefined, { withMutualGuilds: true });
    }
  }, items2);
  return stateFromStoresArray;
});