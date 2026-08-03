// === Module 9484: CONTEXT_MENU_LONG_PRESS_DURATION_MS ===

// Module 9484 (CONTEXT_MENU_LONG_PRESS_DURATION_MS)
import set from "set";
import { HapticFeedbackTypes } from "HapticFeedbackTypes";
import set from "set";

set = set.isIOS();
const result = set.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuConstants.native.tsx");

export const CONTEXT_MENU_LONG_PRESS_DURATION_MS = 300;
export const CONTEXT_MENU_OPEN_HAPTIC = set ? HapticFeedbackTypes.IMPACT_HEAVY : HapticFeedbackTypes.IMPACT_MEDIUM;
export const CONTEXT_MENU_ITEM_PADDING = 12;
export const CONTEXT_MENU_ITEM_BASE_HEIGHT = 42;
export const CONTEXT_MENU_DIVIDER_HEIGHT = 4;
export const CONTEXT_MENU_EDGE_OFFSET = 12;
export const CONTEXT_MENU_MIN_WIDTH = 220;
export const CONTEXT_MENU_OFFSET = 10;
export const CONTEXT_MENU_MIN_SCALE = 0.5;
export const CONTEXT_MENU_SPRING = { mass: 0.3, damping: 20, stiffness: 200, overshootClamping: true, restDisplacementThreshold: 0.001 };