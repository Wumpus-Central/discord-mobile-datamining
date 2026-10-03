// === Module 11643: openCustomKeyboard ===

// Module 11643 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1488 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4748 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6534 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11602 */;
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