// === Module 10386: useInappropriateConversationWarningsForChannel ===

// Module 10386 (useInappropriateConversationWarningsForChannel)
import ChannelSafetyWarningsStore from "ChannelSafetyWarningsStore" /* 10284 */;

const require = globalThis.__r;

const require = fn;
const SafetyWarningTypes = fn(10284).SafetyWarningTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = ReactCompilerGating.isReactCompilerEnabled() ? (function useInappropriateConversationWarningsForChannel(arg0) {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function p() {
      return ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(arg0) {
          tmp2 = arg0.type === closure_1_3.INAPPROPRIATE_CONVERSATION_TIER_1 || arg0.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
          return tmp2;
        }
      }
      cResult[6] = R;
    } else {
      class R {
        constructor(arg0) {
          tmp2 = arg0.type === closure_1_3.INAPPROPRIATE_CONVERSATION_TIER_1 || arg0.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
          return tmp2;
        }
      }
    }
    const found = stateFromStores.filter(R);
    cResult[4] = stateFromStores;
    cResult[5] = found;
  } else {
    class R {
      constructor(arg0) {
        tmp2 = arg0.type === closure_1_3.INAPPROPRIATE_CONVERSATION_TIER_1 || arg0.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        return tmp2;
      }
    }
  }
  const tmpResult = require("initialize");
}) : (function useInappropriateConversationWarningsForChannel(arg0) {
  _require = arg0;
  const items = [ChannelSafetyWarningsStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
});