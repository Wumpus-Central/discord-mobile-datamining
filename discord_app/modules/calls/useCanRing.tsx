// === Module 9402: useCanRing ===

// Module 9402 (useCanRing)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5444 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;

const require = globalThis.__r;

const require = fn;
const ChannelTypesSets = fn(1085).ChannelTypesSets;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCanRing.tsx");

export const useCanRing = ReactCompilerGating.isReactCompilerEnabled() ? ((id, arg1) => {
  _require = id;
  dependencyMap = arg1;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
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
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, S);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    const items1 = [AuthenticationStore];
    cResult[3] = items1;
    const tmp8 = items1;
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
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_4.getChannel(closure_1);
      }
    }
    const items2 = [RelationshipStore];
    cResult[6] = items2;
    const tmp12 = items2;
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
  const tmpResult3 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp12, tmp14);
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
    cResult[9] = tmp16;
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
  _require = bot;
  dependencyMap = arg1;
  const items = [ChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_1));
  const obj = require("initialize");
  const items1 = [AuthenticationStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => AuthenticationStore.getId() === bot.id);
  const obj2 = require("initialize");
  const items2 = [RelationshipStore];
  let stateFromStores2 = require("initialize").useStateFromStores(items2, () => RelationshipStore.isFriend(bot.id));
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
export const canRingUsersInChannel = function canRingUsersInChannel(channel) {
  const CALLABLE = ChannelTypesSets.CALLABLE;
  if (CALLABLE.has(channel.type)) {
    const call = CallStore.getCall(channel.id);
    return null != call && null != call.messageId && !CallStore.isCallUnavailable(channel.id);
  } else {
    return false;
  }
};