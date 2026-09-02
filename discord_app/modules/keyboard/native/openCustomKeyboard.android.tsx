// === Module 11824: openCustomKeyboard ===

// Module 11824 (openCustomKeyboard)
import set from "set" /* 2 */;
import computeEntryState from "computeEntryState" /* 1496 */;
import runAfterInteractions from "runAfterInteractions" /* 6054 */;

const result = set.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
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
    closure_1_0(closure_1_2[2]).openPortalKeyboard(keyboardParams.type, closure_0, ref);
    const obj = closure_1_0(closure_1_2[2]);
    const tmp = ref;
    closure_1_1(closure_1_2[3]).openCustomKeyboard(ref2.current);
  });
};