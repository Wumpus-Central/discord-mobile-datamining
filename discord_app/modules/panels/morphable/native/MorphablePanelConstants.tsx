// === Module 12274: MorphablePanelConstants ===

// Module 12274 (MorphablePanelConstants)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import size from "module_2" /* 2 */;

PlatformUtils = PlatformUtils.isIOS();
const result = size.fileFinishedImporting("modules/panels/morphable/native/MorphablePanelConstants.tsx");

export const MIN_PAN_GESTURE_MOVE = 10;
export const PANEL_TAP_GESTURE_MAX_DISTANCE = 30;
export const IS_IOS = PlatformUtils;
export const PIP_POP_HEIGHT = 140;
export const PIP_WINDOW_OFFSET = 16;
export const MIN_PIP_TOSS_VELOCITY = 500;
export const MorphablePanelModes = { PANEL: "panel", PIP: "pip", CHANGING_ORIENTATION: "changing_orientation", UNDEFINED: "undefined" };
export const PanelControlsModes = { FLOATING_DEFAULT: "floating-default", DRAWER: "drawer", UNDEFINED: "undefined" };
export const SCALE_PHYSICS = { mass: 0.4, damping: 30, stiffness: 400 };
export const POP_RESISTANCE = 0.55;