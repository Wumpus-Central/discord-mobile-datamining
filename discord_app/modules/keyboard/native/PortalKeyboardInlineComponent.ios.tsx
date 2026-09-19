// discord_app/modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ NativeModules: closure_4, findNodeHandle: hasOwnProperty } = get_ActivityIndicator);
const size = fn(2);
let result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardInlineComponent.ios.tsx");

export default noop.memo(function InlinePortalKeyboard(messagesRef) {
  messagesRef = messagesRef.messagesRef;
  noop = undefined;
  const id = noop.useId();
  const tmp2 = id(4624)();
  dependencyMap = tmp2;
  let tmp4 = id(6862)({ includeCustomKeyboard: false });
  noop = tmp4;
  let tmp3 = id(1878)();
  const keyboardContextForType = messagesRef(4624).useKeyboardContextForType(messagesRef(1610).KeyboardTypes.SYSTEM);
  id(5203)(() => () => {
    const PortalKeyboardUIStore = messagesRef(dependencyMap[8]).PortalKeyboardUIStore;
    field = PortalKeyboardUIStore.getField("keyboard");
    let tmp4 = null != field;
    if (tmp4) {
      tmp4 = field.handlerId === id;
    }
    if (tmp4) {
      messagesRef(dependencyMap[9]).dismissKeyboard();
      const tmpResult = messagesRef(dependencyMap[9]);
      messagesRef(dependencyMap[8]).closePortalKeyboard();
      const tmpResult2 = messagesRef(dependencyMap[8]);
    }
  });
  let PortalKeyboardUIStore = messagesRef(4625).PortalKeyboardUIStore;
  let field = PortalKeyboardUIStore.useField("keyboard");
  const PortalKeyboardUIStore2 = messagesRef(4625).PortalKeyboardUIStore;
  const field1 = PortalKeyboardUIStore2.useField("state");
  noop.useRef(false);
  const items = [messagesRef.channelId, id, field, field1, tmp2, messagesRef, keyboardContextForType, tmp3, tmp4];
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (null != field) {
      if (null == field.handlerId) {
        if (null != field) {
          if (field1 === messagesRef(4628).PortalKeyboardState.REQUEST_OPEN) {
            const current4 = messagesRef.current;
            let chatRef;
            if (current4 != null) {
              chatRef = current4.getChatRef();
            }
            if (null != chatRef) {
              const tmp38 = field(chatRef.current);
              if (null != tmp38) {
                const result = messagesRef(4625).handlePortalKeyboardOpen(id);
                ref.current = true;
                const obj2 = messagesRef(4625);
                const DCDChatManager3 = keyboardContextForType.DCDChatManager;
                const result1 = DCDChatManager3.customKeyboardWillShow(
                  tmp38,
                  messagesRef(11617).getKeyboardActionSheetHeight().minimum,
                  0.25,
                  7,
                );
                const obj3 = messagesRef(11617);
              }
            }
          }
        }
        if (dependencyMap === messagesRef(1610).KeyboardTypes.SYSTEM) {
          if (keyboardContextForType.keyboardWillOpen) {
            if (field1 !== messagesRef(4628).PortalKeyboardState.REQUEST_CLOSE) {
              const _setTimeout = setTimeout;
              messagesRef = setTimeout(messagesRef(4625).closePortalKeyboardRequest, 250);
              return () => clearTimeout(closure_0);
            }
          }
          messagesRef(4625).closePortalKeyboard();
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
          const obj = messagesRef(4625);
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
