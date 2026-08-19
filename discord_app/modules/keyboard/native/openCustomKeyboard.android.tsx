// === Module 11205: openCustomKeyboard ===

// Module 11205 (openCustomKeyboard)
import obj132 from "obj132" /* 2 */;
import computeEntryState from "computeEntryState" /* 1498 */;
import zustandStore from "zustandStore" /* 4240 */;
import runAfterInteractions from "runAfterInteractions" /* 6548 */;
import _modDef11160 from "module_11160" /* 11160 */;

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