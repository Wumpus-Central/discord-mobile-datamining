// discord_app/modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let closure_4;
let hasOwnProperty;
let react = react_mod;
({ NativeModules: closure_4, findNodeHandle: hasOwnProperty } = react_native);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let channelId;
        let closure_2;
        let closure_3;
        let first;
        let messagesRef;
        let obj = messagesRef(576);
        const cResult = obj.c(21);
        ({ channelId, messagesRef } = arg0);
        let obj2 = react;
        const id = react.useId();
        const tmp6 = id(4753)();
        dependencyMap = tmp6;
        id(1884)();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let obj3 = { includeCustomKeyboard: false };
          cResult[0] = obj3;
          first = obj3;
        } else {
          first = cResult[0];
        }
        const tmp9 = id(6117)(first);
        react = tmp9;
        let tmpResult = messagesRef(4753);
        const keyboardContextForType = tmpResult.useKeyboardContextForType(messagesRef(1616).KeyboardTypes.SYSTEM);
        if (cResult[1] !== id) {
          class K {
            constructor() {
              return () => {
                const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
                field = PortalKeyboardUIStore.getField("keyboard");
                const tmp4 = null != field && field.handlerId === id;
                if (tmp4) {
                  const tmpResult = messagesRef(closure_2[10]);
                  tmpResult.dismissKeyboard();
                  const tmpResult2 = messagesRef(closure_2[9]);
                  tmpResult2.closePortalKeyboard();
                }
              };
            }
          }
          cResult[1] = id;
          cResult[2] = K;
        } else {
          class K {
            constructor() {
              return () => {
                const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
                field = PortalKeyboardUIStore.getField("keyboard");
                const tmp4 = null != field && field.handlerId === id;
                if (tmp4) {
                  const tmpResult = messagesRef(closure_2[10]);
                  tmpResult.dismissKeyboard();
                  const tmpResult2 = messagesRef(closure_2[9]);
                  tmpResult2.closePortalKeyboard();
                }
              };
            }
          }
        }
        id(5597)(K);
        let PortalKeyboardUIStore = messagesRef(4754).PortalKeyboardUIStore;
        let field = PortalKeyboardUIStore.useField("keyboard");
        const PortalKeyboardUIStore2 = messagesRef(4754).PortalKeyboardUIStore;
        const field1 = PortalKeyboardUIStore2.useField("state");
        const ref = obj2.useRef(false);
        if (cResult[3] === id) {
          class K {
            constructor() {
              return () => {
                const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
                field = PortalKeyboardUIStore.getField("keyboard");
                const tmp4 = null != field && field.handlerId === id;
                if (tmp4) {
                  const tmpResult = messagesRef(closure_2[10]);
                  tmpResult.dismissKeyboard();
                  const tmpResult2 = messagesRef(closure_2[9]);
                  tmpResult2.closePortalKeyboard();
                }
              };
            }
          }
        }
        const fn = function v() {
          let closure_0;
          const current = ref.current;
          if (null != field) {
            if (null == field.handlerId) {
              if (null != field) {
                if (field1 === messagesRef(closure_2[12]).PortalKeyboardState.REQUEST_OPEN) {
                  const current4 = messagesRef.current;
                  let chatRef;
                  if (current4 != null) {
                    chatRef = current4.getChatRef();
                  }
                  if (null != chatRef) {
                    const tmp38 = field(chatRef.current);
                    if (null != tmp38) {
                      const obj2 = messagesRef(closure_2[9]);
                      const result = obj2.handlePortalKeyboardOpen(id);
                      ref.current = true;
                      const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                      const obj3 = messagesRef(closure_2[13]);
                      const result1 = DCDChatManager3.customKeyboardWillShow(
                        tmp38,
                        obj3.getKeyboardActionSheetHeight().minimum,
                        0.25,
                        7,
                      );
                    }
                  }
                }
              }
              if (closure_2 === messagesRef(closure_2[8]).KeyboardTypes.SYSTEM) {
                if (keyboardContextForType.keyboardWillOpen) {
                  if (field1 !== messagesRef(closure_2[12]).PortalKeyboardState.REQUEST_CLOSE) {
                    const _setTimeout = setTimeout;
                    messagesRef = setTimeout(messagesRef(closure_2[9]).closePortalKeyboardRequest, 250);
                    return () => clearTimeout(closure_0);
                  }
                }
                const obj = messagesRef(closure_2[9]);
                obj.closePortalKeyboard();
                const current3 = messagesRef.current;
                let chatRef1;
                if (current3 != null) {
                  chatRef1 = current3.getChatRef();
                }
                if (null != chatRef1) {
                  const tmp21 = field(chatRef1.current);
                  if (null != tmp21) {
                    ref.current = false;
                    const DCDChatManager = keyboardContextForType.DCDChatManager;
                    const result2 = DCDChatManager.customKeyboardWillHide(tmp21, 0.25, 7);
                  }
                }
              }
            }
          } else {
            let tmp4 = closure_3;
            if (!tmp4) {
              tmp4 = !current && !tmp28;
            }
            if (!tmp4) {
              const current2 = messagesRef.current;
              let chatRef2;
              if (current2 != null) {
                chatRef2 = current2.getChatRef();
              }
              if (null != chatRef2) {
                const tmp30 = field(chatRef2.current);
                if (null != tmp30) {
                  ref.current = false;
                  const DCDChatManager2 = keyboardContextForType.DCDChatManager;
                  const result3 = DCDChatManager2.customKeyboardWillHide(tmp30, 0.25, 7);
                }
              }
            }
          }
        };
        cResult[3] = id;
        cResult[4] = field1;
        cResult[5] = tmp6;
        cResult[6] = field;
        cResult[7] = messagesRef;
        cResult[8] = keyboardContextForType;
        cResult[9] = tmp9;
        cResult[10] = fn;
      }
    : (messagesRef) => {
        let closure_2;
        let closure_3;
        messagesRef = messagesRef.messagesRef;
        react = undefined;
        const channelId = messagesRef.channelId;
        const id = react.useId();
        const tmp2 = id(4753)();
        dependencyMap = tmp2;
        const tmp3 = id(1884)();
        let tmp4 = id(6117)({ includeCustomKeyboard: false });
        react = tmp4;
        let obj = messagesRef(4753);
        const keyboardContextForType = obj.useKeyboardContextForType(messagesRef(1616).KeyboardTypes.SYSTEM);
        id(5597)(() => () => {
          const PortalKeyboardUIStore = messagesRef(closure_2[9]).PortalKeyboardUIStore;
          field = PortalKeyboardUIStore.getField("keyboard");
          const tmp4 = null != field && field.handlerId === id;
          if (tmp4) {
            const tmpResult = messagesRef(closure_2[10]);
            tmpResult.dismissKeyboard();
            const tmpResult2 = messagesRef(closure_2[9]);
            tmpResult2.closePortalKeyboard();
          }
        });
        let PortalKeyboardUIStore = messagesRef(4754).PortalKeyboardUIStore;
        let field = PortalKeyboardUIStore.useField("keyboard");
        const PortalKeyboardUIStore2 = messagesRef(4754).PortalKeyboardUIStore;
        const field1 = PortalKeyboardUIStore2.useField("state");
        const ref = react.useRef(false);
        const items = [channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
        const layoutEffect = react.useLayoutEffect(() => {
          let closure_0;
          const current = ref.current;
          if (null != field) {
            if (null == field.handlerId) {
              if (null != field) {
                if (field1 === messagesRef(closure_2[12]).PortalKeyboardState.REQUEST_OPEN) {
                  const current4 = messagesRef.current;
                  let chatRef;
                  if (current4 != null) {
                    chatRef = current4.getChatRef();
                  }
                  if (null != chatRef) {
                    const tmp38 = field(chatRef.current);
                    if (null != tmp38) {
                      const obj2 = messagesRef(closure_2[9]);
                      const result = obj2.handlePortalKeyboardOpen(id);
                      ref.current = true;
                      const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                      const obj3 = messagesRef(closure_2[13]);
                      const result1 = DCDChatManager3.customKeyboardWillShow(
                        tmp38,
                        obj3.getKeyboardActionSheetHeight().minimum,
                        0.25,
                        7,
                      );
                    }
                  }
                }
              }
              if (closure_2 === messagesRef(closure_2[8]).KeyboardTypes.SYSTEM) {
                if (keyboardContextForType.keyboardWillOpen) {
                  if (field1 !== messagesRef(closure_2[12]).PortalKeyboardState.REQUEST_CLOSE) {
                    const _setTimeout = setTimeout;
                    messagesRef = setTimeout(messagesRef(closure_2[9]).closePortalKeyboardRequest, 250);
                    return () => clearTimeout(closure_0);
                  }
                }
                const obj = messagesRef(closure_2[9]);
                obj.closePortalKeyboard();
                const current3 = messagesRef.current;
                let chatRef1;
                if (current3 != null) {
                  chatRef1 = current3.getChatRef();
                }
                if (null != chatRef1) {
                  const tmp21 = field(chatRef1.current);
                  if (null != tmp21) {
                    ref.current = false;
                    const DCDChatManager = keyboardContextForType.DCDChatManager;
                    const result2 = DCDChatManager.customKeyboardWillHide(tmp21, 0.25, 7);
                  }
                }
              }
            }
          } else {
            let tmp4 = closure_3;
            if (!tmp4) {
              tmp4 = !current && !tmp28;
            }
            if (!tmp4) {
              const current2 = messagesRef.current;
              let chatRef2;
              if (current2 != null) {
                chatRef2 = current2.getChatRef();
              }
              if (null != chatRef2) {
                const tmp30 = field(chatRef2.current);
                if (null != tmp30) {
                  ref.current = false;
                  const DCDChatManager2 = keyboardContextForType.DCDChatManager;
                  const result3 = DCDChatManager2.customKeyboardWillHide(tmp30, 0.25, 7);
                }
              }
            }
          }
        }, items);
        return null;
      },
);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default memoResult;
