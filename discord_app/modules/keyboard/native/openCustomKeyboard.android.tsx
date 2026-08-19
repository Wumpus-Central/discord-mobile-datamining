// discord_app/modules/keyboard/native/openCustomKeyboard.android.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import computeEntryState from "KeyboardUIStore.native.tsx";
import zustandStore from "PortalKeyboardUIStore.native.tsx";
import runAfterInteractions from "../../../utils/native/RunAfterInteractionsUtils.tsx";
import _modDef11160 from "../../chat_input/native/ChatInputNativeCommands.tsx";

const result = obj132.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  ({ channelId: require, chatInputRef: importDefault, chatInputNativeRef: dependencyMap, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  computeEntryState.setKeyboardType(keyboardParams);
  runAfterInteractions.runAfterInteractions(() => {
    const current = ref.current;
    current.blur();
    if (secondaryTextFieldRef != null) {
      const current2 = secondaryTextFieldRef.current;
      if (current2 != null) {
        current2.blur();
      }
    }
    zustandStore.openPortalKeyboard(keyboardParams.type, closure_0, ref);
    _modDef11160.openCustomKeyboard(ref2.current);
  });
};