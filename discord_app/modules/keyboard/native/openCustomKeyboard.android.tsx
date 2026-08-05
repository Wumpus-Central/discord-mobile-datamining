// discord_app/modules/keyboard/native/openCustomKeyboard.android.tsx
import { runAfterInteractions } from "../../../utils/native/RunAfterInteractionsUtils.tsx";
import { computeEntryState } from "KeyboardUIStore.native.tsx";
const result = require("zustandStore").fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  let dependencyMap;
  let importDefault;
  let keyboardParams;
  let require;
  ({ channelId: require, chatInputRef: importDefault, chatInputNativeRef: dependencyMap, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  computeEntryState.setKeyboardType(keyboardParams);
  let obj = computeEntryState;
  runAfterInteractions.runAfterInteractions(() => {
    const current = ref.current;
    current.blur();
    if (secondaryTextFieldRef != null) {
      const current2 = secondaryTextFieldRef.current;
      if (current2 != null) {
        current2.blur();
      }
    }
    outer1_0(outer1_2[2]).openPortalKeyboard(keyboardParams.type, closure_0, ref);
    const obj = outer1_0(outer1_2[2]);
    const tmp = ref;
    outer1_1(outer1_2[3]).openCustomKeyboard(ref2.current);
  });
};