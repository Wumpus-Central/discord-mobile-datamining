// discord_app/design/components/ContextMenu/native/ContextMenuConstants.native.tsx
import HapticFeedbackTypes2 from "../../../../modules/haptics/HapticUtils.native.tsx";
import obj132 from "../../../../utils/PlatformUtils.tsx";

obj132.isIOS();
const HapticFeedbackTypes = HapticFeedbackTypes2.HapticFeedbackTypes;
const result = obj132.fileFinishedImporting("design/components/ContextMenu/native/ContextMenuConstants.native.tsx");

export const CONTEXT_MENU_LONG_PRESS_DURATION_MS = 300;
export const CONTEXT_MENU_OPEN_HAPTIC = obj132 ? HapticFeedbackTypes.IMPACT_HEAVY : HapticFeedbackTypes.IMPACT_MEDIUM;
export const CONTEXT_MENU_ITEM_PADDING = 12;
export const CONTEXT_MENU_ITEM_BASE_HEIGHT = 42;
export const CONTEXT_MENU_DIVIDER_HEIGHT = 4;
export const CONTEXT_MENU_EDGE_OFFSET = 12;
export const CONTEXT_MENU_MIN_WIDTH = 220;
export const CONTEXT_MENU_OFFSET = 10;
export const CONTEXT_MENU_MIN_SCALE = 0.5;
export const CONTEXT_MENU_SPRING = { mass: 0.3, damping: 20, stiffness: 200, overshootClamping: true, restDisplacementThreshold: 0.001 };