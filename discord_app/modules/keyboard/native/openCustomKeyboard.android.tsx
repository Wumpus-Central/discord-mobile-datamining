// === Module 12282: openCustomKeyboard ===

// Module 12282 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1482 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4625 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7283 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12241 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  ({ channelId: require, chatInputRef: importDefault, chatInputNativeRef: dependencyMap, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  KeyboardUIStore.setKeyboardType(keyboardParams);
  RunAfterInteractionsUtils.runAfterInteractions(() => {
    const current = ref.current;
    current.blur();
    if (secondaryTextFieldRef != null) {
      const current2 = secondaryTextFieldRef.current;
      if (current2 != null) {
        current2.blur();
      }
    }
    PortalKeyboardUIStore.openPortalKeyboard(keyboardParams.type, closure_1_0, ref);
    ChatInputNativeCommandsDefault.openCustomKeyboard(ref2.current);
  });
};