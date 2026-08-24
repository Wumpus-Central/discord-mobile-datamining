// === Module 11208: KEYBOARD_ANIMATION_DURATION ===

// Module 11208 (KEYBOARD_ANIMATION_DURATION)
import set from "set" /* 2 */;
import BottomSheetModal from "BottomSheetModal" /* 6952 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;