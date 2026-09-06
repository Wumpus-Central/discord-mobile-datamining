// discord_app/modules/keyboard/native/openCustomKeyboard.android.tsx
import KeyboardUIStore from "KeyboardUIStore.native.tsx";
import PortalKeyboardUIStore from "PortalKeyboardUIStore.native.tsx";
import RunAfterInteractionsUtils from "../../../utils/native/RunAfterInteractionsUtils.tsx";
import ChatInputNativeCommandsDefault from "../../chat_input/native/ChatInputNativeCommands.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  ({
    channelId: require,
    chatInputRef: importDefault,
    chatInputNativeRef: dependencyMap,
    keyboardParams,
  } = secondaryTextFieldRef);
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
}
