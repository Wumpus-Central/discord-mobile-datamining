// === Module 9790: useInappropriateConversationWarningsForChannel ===

// Module 9790 (useInappropriateConversationWarningsForChannel)
import ChannelSafetyWarningsStore2 from "ChannelSafetyWarningsStore" /* 9786 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ChannelSafetyWarningsStore = ChannelSafetyWarningsStore2;
let _require;

const SafetyWarningTypes = ChannelSafetyWarningsStore2.SafetyWarningTypes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  let tmp8;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelSafetyWarningsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function _() {
      return ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] !== stateFromStores) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class R {
        constructor(type) {
          return type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        }
      }
      cResult[6] = R;
    } else {
      class R {
        constructor(type) {
          return type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
        }
      }
    }
    const found = stateFromStores.filter(R);
    cResult[4] = stateFromStores;
    cResult[5] = found;
    tmp8 = found;
  } else {
    class R {
      constructor(type) {
        return type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2;
      }
    }
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelSafetyWarningsStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ChannelSafetyWarningsStore.getChannelSafetyWarnings(closure_0), items1);
  return stateFromStores.filter((type) => type.type === SafetyWarningTypes.INAPPROPRIATE_CONVERSATION_TIER_1 || type.type === tmp.INAPPROPRIATE_CONVERSATION_TIER_2);
});
const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/hooks/useInappropriateConversationWarningsForChannel.tsx");

export const useInappropriateConversationWarningsForChannel = tmp2;