// discord_app/modules/conjure/app_channel/useConjureChatToastMessages.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import MessageRecordUtils from "../../messages/MessageRecordUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import CallChatToastsStore from "../../../stores/CallChatToastsStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, message, str;

const result = 10 * DurationsDefault.Millis.SECOND;
const metroImportDefault = result;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let closure_3;
      let first1;
      let items4;
      let tmp16;
      let tmp17;
      _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(14);
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
            return CallChatToastsStore.getToastsEnabled(closure_0);
          }
        }
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = S;
        cResult[3] = items1;
      } else {
        class S {
          constructor() {
            return CallChatToastsStore.getToastsEnabled(closure_0);
          }
        }
      }
      tmp(first1[7]);
      if (arg1) {
        class S {
          constructor() {
            return CallChatToastsStore.getToastsEnabled(closure_0);
          }
        }
      }
      importDefault = tmp8;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return CallChatToastsStore.getToastsEnabled(closure_0);
          }
        }
        cResult[4] = tmp11;
      } else {
        class S {
          constructor() {
            return CallChatToastsStore.getToastsEnabled(closure_0);
          }
        }
      }
      [first1, _slicedToArray] = react.useState(tmp11);
      if (cResult[5] === arg1) {
        let tmp15;
        class S {
          constructor() {
            return CallChatToastsStore.getToastsEnabled(closure_0);
          }
        }
        const effect = react.useEffect(A, items4);
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class S {
            constructor() {
              return CallChatToastsStore.getToastsEnabled(closure_0);
            }
          }
          const items2 = [MessageStore];
          cResult[9] = items2;
          tmp15 = items2;
        } else {
          class S {
            constructor() {
              return CallChatToastsStore.getToastsEnabled(closure_0);
            }
          }
        }
        if (cResult[10] === arg0) {
          class S {
            constructor() {
              return CallChatToastsStore.getToastsEnabled(closure_0);
            }
          }
          const tmpResult2 = tmp(first1[7]);
          return tmpResult2.useStateFromStoresArray(tmp15, tmp16, tmp17);
        }
        const fn = function v() {
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
        cResult[12] = fn;
        cResult[13] = items3;
        tmp16 = fn;
        tmp17 = items3;
      }
      class A {
        constructor() {
          tmp = handleMessageCreate;
          if (tmp) {
            handleMessageCreate = function handleMessageCreate(channelId) {
              let timeout;
              if (channelId.channelId === timeout) {
                if (!channelId.optimistic) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(timeout);
                  const _setTimeout = setTimeout;
                  setTimeout(() => closure_1_3([]), metroImportDefault);
                  const obj = MessageRecordUtils;
                  timeout = obj.createMessageRecord(tmp);
                  closure_3((arg0) => {
                    const items = [];
                    items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
                    return items.slice(-3);
                  });
                }
              }
            };
            tmp2 = closure_1;
            tmp3 = closure_2;
            obj = closure_1(closure_2[9]);
            str = "MESSAGE_CREATE";
            subscription = obj.subscribe("MESSAGE_CREATE", handleMessageCreate);
            return () => {
              const obj = DispatcherDefault;
              obj.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
              clearTimeout(closure_0);
              closure_3([]);
            };
          } else {
            return;
          }
        }
      }
      items4 = [arg1, arg0];
      cResult[5] = arg1;
      cResult[6] = arg0;
      cResult[7] = A;
      cResult[8] = items4;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_3;
      let first;
      _require = arg0;
      let stateFromStores = arg1;
      let obj = require("get initialized");
      let items = [CallChatToastsStore];
      const items1 = [arg0];
      const tmp2 = _require;
      const tmp3 = first;
      if (arg1) {
        stateFromStores = obj.useStateFromStores(items, () => CallChatToastsStore.getToastsEnabled(closure_0), items1);
      }
      [first, _slicedToArray] = react.useState([]);
      const items2 = [stateFromStores, arg0];
      const effect = react.useEffect(() => {
        function handleMessageCreate(channelId) {
          let timeout;
          if (channelId.channelId === timeout) {
            if (!channelId.optimistic) {
              const _clearTimeout = clearTimeout;
              clearTimeout(timeout);
              const _setTimeout = setTimeout;
              setTimeout(() => closure_1_3([]), metroImportDefault);
              const obj = MessageRecordUtils;
              timeout = obj.createMessageRecord(tmp);
              closure_3((arg0) => {
                const items = [];
                items[HermesBuiltin.arraySpread(items, arg0, 0)] = closure_0;
                return items.slice(-3);
              });
            }
          }
        }
        if (handleMessageCreate) {
          let obj = stateFromStores(first[9]);
          const subscription = obj.subscribe("MESSAGE_CREATE", handleMessageCreate);
          return () => {
            const obj = DispatcherDefault;
            obj.unsubscribe("MESSAGE_CREATE", handleMessageCreate);
            clearTimeout(closure_0);
            closure_3([]);
          };
        }
      }, items2);
      const items3 = [MessageStore];
      const items4 = [arg0, first];
      const tmp2Result = tmp2(tmp3[7]);
      return tmp2Result.useStateFromStoresArray(
        items3,
        () =>
          first.map((id) => {
            message = message.getMessage(closure_1_0, id.id);
            if (message == null) {
              message = id;
            }
            return message;
          }),
        items4,
      );
    };
const result1 = size.fileFinishedImporting("modules/conjure/app_channel/useConjureChatToastMessages.tsx");

export default tmp3;
export const CONJURE_CHAT_TOAST_LINGER_MS = result;
export const CONJURE_CHAT_TOAST_MAX = 3;
