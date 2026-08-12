// discord_app/modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";

let c4;
let c5;
const require = arg1;
let c3 = importAllResult;
({ NativeModules: c4, findNodeHandle: c5 } = get_ActivityIndicator);
const memoResult = importAllResult.memo(function InlinePortalKeyboard(messagesRef) {
  messagesRef = messagesRef.messagesRef;
  let id;
  let dependencyMap;
  let importAllResult;
  let keyboardContextForType;
  let field;
  let field1;
  let closure_7;
  id = importAllResult.useId();
  const tmp2 = id(4209)();
  dependencyMap = tmp2;
  let tmp4 = id(6045)({ includeCustomKeyboard: false });
  importAllResult = tmp4;
  let tmp3 = id(1894)();
  keyboardContextForType = messagesRef(4209).useKeyboardContextForType(messagesRef(1626).KeyboardTypes.SYSTEM);
  id(4770)(() => () => {
    const PortalKeyboardUIStore = outer1_0(outer1_2[8]).PortalKeyboardUIStore;
    const field = PortalKeyboardUIStore.getField("keyboard");
    let tmp4 = null != field;
    if (tmp4) {
      tmp4 = field.handlerId === closure_1;
    }
    if (tmp4) {
      let tmpResult = tmp(tmp2[9]);
      tmpResult.dismissKeyboard();
      tmpResult = tmp(tmp2[8]);
      tmpResult.closePortalKeyboard();
    }
  });
  let PortalKeyboardUIStore = messagesRef(4210).PortalKeyboardUIStore;
  field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = messagesRef(4210).PortalKeyboardUIStore;
  field1 = PortalKeyboardUIStore2.useField("state");
  closure_7 = importAllResult.useRef(false);
  const items = [messagesRef.channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
  const layoutEffect = importAllResult.useLayoutEffect(() => {
    const current = ref.current;
    if (null != field) {
      if (null == tmp2.handlerId) {
        if (null != tmp2) {
          if (field1 === messagesRef(_undefined[10]).PortalKeyboardState.REQUEST_OPEN) {
            const current4 = messagesRef.current;
            let chatRef;
            if (current4 != null) {
              chatRef = current4.getChatRef();
            }
            if (null != chatRef) {
              const tmp38 = field(chatRef.current);
              if (null != tmp38) {
                const result = messagesRef(_undefined[8]).handlePortalKeyboardOpen(id);
                tmp.current = true;
                const obj2 = messagesRef(_undefined[8]);
                const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                const result1 = DCDChatManager3.customKeyboardWillShow(tmp38, messagesRef(_undefined[11]).getKeyboardActionSheetHeight().minimum, 0.25, 7);
                const obj3 = messagesRef(_undefined[11]);
              }
            }
          }
        }
        if (_undefined === messagesRef(_undefined[6]).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(_undefined[10]).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              messagesRef = setTimeout(messagesRef(_undefined[8]).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          messagesRef(_undefined[8]).closePortalKeyboard();
          const current3 = messagesRef.current;
          let chatRef1;
          if (current3 != null) {
            chatRef1 = current3.getChatRef();
          }
          if (null != chatRef1) {
            const tmp21 = field(chatRef1.current);
            if (null != tmp21) {
              tmp.current = false;
              const DCDChatManager = keyboardContextForType.DCDChatManager;
              const result2 = DCDChatManager.customKeyboardWillHide(tmp21, 0.25, 7);
            }
          }
          const obj = messagesRef(_undefined[8]);
        }
      }
    } else {
      let tmp4 = c3;
      if (!c3) {
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
            tmp.current = false;
            const DCDChatManager2 = keyboardContextForType.DCDChatManager;
            const result3 = DCDChatManager2.customKeyboardWillHide(tmp30, 0.25, 7);
          }
        }
      }
    }
  }, items);
  return null;
});
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default memoResult;