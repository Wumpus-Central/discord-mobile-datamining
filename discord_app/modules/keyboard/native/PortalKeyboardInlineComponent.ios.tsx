// === Module 11808: ? ===

// Module 11808
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

const require = fn;
let c3 = importAllResult;
({ NativeModules: c4, findNodeHandle: c5 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(function InlinePortalKeyboard(messagesRef) {
  messagesRef = messagesRef.messagesRef;
  importAllResult = undefined;
  const id = importAllResult.useId();
  const tmp2 = id(4239)();
  dependencyMap = tmp2;
  let tmp4 = id(7349)({ includeCustomKeyboard: false });
  importAllResult = tmp4;
  let tmp3 = id(1895)();
  const keyboardContextForType = messagesRef(4239).useKeyboardContextForType(messagesRef(1627).KeyboardTypes.SYSTEM);
  id(4761)(() => () => {
    const PortalKeyboardUIStore = messagesRef(closure_1_2[8]).PortalKeyboardUIStore;
    field = PortalKeyboardUIStore.getField("keyboard");
    let tmp4 = null != field;
    if (tmp4) {
      tmp4 = field.handlerId === closure_1;
    }
    if (tmp4) {
      let tmpResult = messagesRef(closure_1_2[9]);
      tmpResult.dismissKeyboard();
      tmpResult = messagesRef(closure_1_2[8]);
      tmpResult.closePortalKeyboard();
    }
  });
  let PortalKeyboardUIStore = messagesRef(4240).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = messagesRef(4240).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("state");
  closure_7 = importAllResult.useRef(false);
  const items = [messagesRef.channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const current = ref.current;
    if (null != field) {
      if (null == field.handlerId) {
        if (null != field) {
          if (field1 === messagesRef(4243).PortalKeyboardState.REQUEST_OPEN) {
            const current4 = messagesRef.current;
            let chatRef;
            if (current4 != null) {
              chatRef = current4.getChatRef();
            }
            if (null != chatRef) {
              const tmp38 = field(chatRef.current);
              if (null != tmp38) {
                const result = messagesRef(4240).handlePortalKeyboardOpen(id);
                ref.current = true;
                const obj2 = messagesRef(4240);
                const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                const result1 = DCDChatManager3.customKeyboardWillShow(tmp38, messagesRef(11209).getKeyboardActionSheetHeight().minimum, 0.25, 7);
                const obj3 = messagesRef(11209);
              }
            }
          }
        }
        if (dependencyMap === messagesRef(1627).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(4243).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              messagesRef = setTimeout(messagesRef(4240).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          messagesRef(4240).closePortalKeyboard();
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
          const obj = messagesRef(4240);
        }
      }
    } else {
      let tmp4 = closure_3;
      if (!closure_3) {
        let tmp3 = !current;
        if (!current) {
          tmp3 = !tmp28;
        }
        tmp4 = tmp3;
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
});
let result = require("obj132").fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default memoResult;