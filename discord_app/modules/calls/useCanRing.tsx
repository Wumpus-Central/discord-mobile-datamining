// === Module 9402: useCanRing ===

// Module 9402 (useCanRing)
import Constants from "Constants" /* 1085 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5444 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ChannelTypesSets = Constants.ChannelTypesSets;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  let closure_1;
  let first;
  let hasItem;
  let tmp12;
  let tmp8;
  let user;
  _require = id;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg1) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    cResult[1] = arg1;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    const items1 = [AuthenticationStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (cResult[4] !== id.id) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    cResult[4] = id.id;
    cResult[5] = tmp10;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    const items2 = [RelationshipStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (cResult[7] !== id.id) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    cResult[7] = id.id;
    cResult[8] = tmp14;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  const tmpResult4 = require("get initialized");
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp12, tmp14);
  if (stateFromStores != null) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (cResult[9] !== undefined) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    if (hasItem) {
      class S {
        constructor() {
          return closure_4.getChannel(closure_1);
        }
      }
      const CALLABLE = ChannelTypesSets.CALLABLE;
      hasItem = CALLABLE.has(tmp16);
    }
    cResult[9] = undefined;
    cResult[10] = hasItem;
  } else {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (stateFromStores2) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (stateFromStores2) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (stateFromStores2) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (stateFromStores2) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  if (stateFromStores2) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
  }
  return stateFromStores2;
}) : ((bot, arg1) => {
  let closure_1;
  _require = bot;
  dependencyMap = arg1;
  const items = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
  const items1 = [AuthenticationStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => AuthenticationStore.getId() === bot.id);
  const items2 = [RelationshipStore];
  const obj3 = require("get initialized");
  let stateFromStores2 = obj3.useStateFromStores(items2, () => RelationshipStore.isFriend(bot.id));
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let hasItem = null != type;
  if (hasItem) {
    const CALLABLE = ChannelTypesSets.CALLABLE;
    hasItem = CALLABLE.has(type);
  }
  if (stateFromStores2) {
    stateFromStores2 = !stateFromStores1;
  }
  if (stateFromStores2) {
    stateFromStores2 = !bot.bot;
  }
  if (stateFromStores2) {
    stateFromStores2 = !bot.system;
  }
  if (stateFromStores2) {
    stateFromStores2 = !bot.isProvisional;
  }
  if (stateFromStores2) {
    stateFromStores2 = hasItem;
  }
  return stateFromStores2;
});
const result = size.fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = tmp2;
export const canRingUsersInChannel = function canRingUsersInChannel(channel) {
  const CALLABLE = ChannelTypesSets.CALLABLE;
  if (CALLABLE.has(channel.type)) {
    const call = CallStore.getCall(channel.id);
    const tmp3 = null != call && null != call.messageId && !CallStore.isCallUnavailable(channel.id);
    return tmp3;
  } else {
    return false;
  }
};