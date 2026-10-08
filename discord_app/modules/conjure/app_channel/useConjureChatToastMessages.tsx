// === Module 17078: useConjureChatToastMessages ===

// Module 17078 (useConjureChatToastMessages)
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5430 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CallChatToastsStore from "CallChatToastsStore" /* 17079 */;
import MessageStore from "MessageStore" /* 5428 */;

const require = globalThis.__r;

require = fn;
const result = 10 * DurationsDefault.Millis.SECOND;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChatToastMessages.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureChatToastMessages(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [CallChatToastsStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        return closure_5.getToastsEnabled(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = S;
    cResult[3] = items1;
  } else {
    class S {
      constructor() {
        return closure_5.getToastsEnabled(closure_0);
      }
    }
  }
  require("initialize");
  if (arg1) {
    class S {
      constructor() {
        return closure_5.getToastsEnabled(closure_0);
      }
    }
  }
  closure_1 = tmp8;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return closure_5.getToastsEnabled(closure_0);
      }
    }
    cResult[4] = tmp11;
  } else {
    class S {
      constructor() {
        return closure_5.getToastsEnabled(closure_0);
      }
    }
  }
  [first1, _slicedToArray] = noop.useState(tmp11);
  if (cResult[5] === arg1) {
    class S {
      constructor() {
        return closure_5.getToastsEnabled(closure_0);
      }
    }
    const effect = noop.useEffect(fn, items4);
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          return closure_5.getToastsEnabled(closure_0);
        }
      }
      const items2 = [MessageStore];
      cResult[9] = items2;
      const tmp15 = items2;
    } else {
      class S {
        constructor() {
          return closure_5.getToastsEnabled(closure_0);
        }
      }
    }
    if (cResult[10] === arg0) {
      class S {
        constructor() {
          return closure_5.getToastsEnabled(closure_0);
        }
      }
      return tmp(tmp2[7]).useStateFromStoresArray(tmp15, tmp16, tmp17);
    }
    const fn2 = function v() {
      return first1.map((id) => {
        message = message.getMessage(closure_1_0, id.id);
        if (message == null) {
          message = id;
        }
        return message;
      });
    };
    const items3 = [arg0, first1];
    cResult[10] = arg0;
    cResult[11] = first1;
    cResult[12] = fn2;
    cResult[13] = items3;
    tmp16 = fn2;
    tmp17 = items3;
  }
  fn = function b() {
    if (handleMessageCreate) {
      handleMessageCreate = function handleMessageCreate(channelId) {
        if (channelId.channelId === timeout) {
          if (!channelId.optimistic) {
            const _clearTimeout = clearTimeout;
            clearTimeout(timeout);
            const _setTimeout = setTimeout;
            setTimeout(() => closure_1_3([]), result);
            timeout = MessageRecordUtils.createMessageRecord(tmp);
            closure_3((arg0) => {
              const items = [];
              items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
              return items.slice(-3);
            });
          }
        }
      };
      const subscription = closure_1(first1[9]).subscribe("MESSAGE_CREATE", handleMessageCreate);
      return () => {
        DispatcherDefault.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
        clearTimeout(closure_0);
        closure_3([]);
      };
    }
  };
  items4 = [arg1, arg0];
  cResult[5] = arg1;
  cResult[6] = arg0;
  cResult[7] = fn;
  cResult[8] = items4;
  let obj = require("c");
}) : (function useConjureChatToastMessages(arg0, arg1) {
  _require = arg0;
  let stateFromStores = arg1;
  let items = [CallChatToastsStore];
  const items1 = [arg0];
  if (arg1) {
    stateFromStores = obj.useStateFromStores(items, () => CallChatToastsStore.getToastsEnabled(closure_0), items1);
  }
  [first, _slicedToArray] = noop.useState([]);
  const items2 = [stateFromStores, arg0];
  const effect = noop.useEffect(() => {
    function handleMessageCreate(channelId) {
      let timeout;
      if (channelId.channelId === timeout) {
        if (!channelId.optimistic) {
          const _clearTimeout = clearTimeout;
          clearTimeout(timeout);
          const _setTimeout = setTimeout;
          setTimeout(() => closure_1_3([]), result);
          timeout = MessageRecordUtils.createMessageRecord(tmp);
          closure_3((arg0) => {
            const items = [];
            items[HermesBuiltin.arraySpread(arg0, 0)] = closure_0;
            return items.slice(-3);
          });
        }
      }
    }
    if (handleMessageCreate) {
      const subscription = stateFromStores(first[9]).subscribe("MESSAGE_CREATE", handleMessageCreate);
      return () => {
        DispatcherDefault.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
        clearTimeout(closure_0);
        closure_3([]);
      };
    }
  }, items2);
  obj = require("initialize");
  const items3 = [MessageStore];
  const items4 = [arg0, first];
  return require("initialize").useStateFromStoresArray(items3, () => first.map((id) => {
    message = message.getMessage(closure_1_0, id.id);
    if (message == null) {
      message = id;
    }
    return message;
  }), items4);
});
export const CONJURE_CHAT_TOAST_LINGER_MS = result;
export const CONJURE_CHAT_TOAST_MAX = 3;