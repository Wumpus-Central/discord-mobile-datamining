// === Module 11704: openCustomKeyboard ===

// Module 11704 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1501 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4988 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6725 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11662 */;
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