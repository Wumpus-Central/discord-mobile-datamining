// discord_app/modules/keyboard/native/PortalKeyboardConstants.tsx
import set from "../../../../_runtime/00002_set.js";
import BottomSheetModal from "../../../../_runtime/05592_BottomSheetModal.js";

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;