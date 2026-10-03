// === Module 17036: useMutualGuilds ===

// Module 17036 (useMutualGuilds)
import DispatcherDefault from "Dispatcher" /* 584 */;
import noop from "module_19" /* 19 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/hooks/useMutualGuilds.tsx");

export const useMutualGuildsForMessageRequests = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserProfileStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class M {
      constructor() {
        mutualGuilds = closure_4.getMutualGuilds(closure_0);
        mapped = undefined;
        if (mutualGuilds != null) {
          mapped = mutualGuilds.map((guild) => guild.guild);
        }
        if (mapped == null) {
          mapped = [];
        }
        return mapped;
      }
    }
    cResult[4] = arg0;
    cResult[5] = M;
  } else {
    class M {
      constructor() {
        mutualGuilds = closure_4.getMutualGuilds(closure_0);
        mapped = undefined;
        if (mutualGuilds != null) {
          mapped = mutualGuilds.map((guild) => guild.guild);
        }
        if (mapped == null) {
          mapped = [];
        }
        return mapped;
      }
    }
  }
  const tmpResult = require("initialize");
  stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp8, M);
  if (cResult[6] === stateFromStoresArray) {
    class M {
      constructor() {
        mutualGuilds = closure_4.getMutualGuilds(closure_0);
        mapped = undefined;
        if (mutualGuilds != null) {
          mapped = mutualGuilds.map((guild) => guild.guild);
        }
        if (mapped == null) {
          mapped = [];
        }
        return mapped;
      }
    }
  }
  const fn2 = function _() {
    let tmp = 0 === stateFromStoresArray.length;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      tmp = null == UserProfileStore.getMutualGuilds(closure_0);
    }
    if (tmp) {
      DispatcherDefault.wait(() => stateFromStores(stateFromStoresArray[7])(closure_1_0, undefined, { withMutualGuilds: true }));
    }
  };
  const items2 = [stateFromStoresArray, stateFromStores, arg0];
  cResult[6] = stateFromStoresArray;
  cResult[7] = stateFromStores;
  cResult[8] = arg0;
  cResult[9] = fn2;
  cResult[10] = items2;
  const tmpResult2 = require("initialize");
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => UserStore.getUser(closure_0));
  let obj = require("initialize");
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
      DispatcherDefault.wait(() => stateFromStores(stateFromStoresArray[7])(closure_1_0, undefined, { withMutualGuilds: true }));
    }
  }, items2);
  return stateFromStoresArray;
});