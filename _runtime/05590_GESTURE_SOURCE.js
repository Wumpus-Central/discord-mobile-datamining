// === Module 5590: GESTURE_SOURCE ===

// Module 5590 (GESTURE_SOURCE)
import cancelAnimation from "cancelAnimation" /* 1654 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ Dimensions, Platform } = get_ActivityIndicator);
let value = Dimensions.get("window");
({ height, width } = value);
value = Dimensions.get("screen");
const obj = { LOCKED: 0, [0]: "LOCKED", UNLOCKED: 1, [1]: "UNLOCKED", UNDETERMINED: 2, [2]: "UNDETERMINED" };
({ height: height2, width: width2 } = value);
const Easing = cancelAnimation.Easing;
const outResult = Easing.out(cancelAnimation.Easing.exp);

export const GESTURE_SOURCE = { UNDETERMINED: 0, [0]: "UNDETERMINED", SCROLLABLE: 1, [1]: "SCROLLABLE", HANDLE: 2, [2]: "HANDLE", CONTENT: 3, [3]: "CONTENT" };
export const SHEET_STATE = { CLOSED: 0, [0]: "CLOSED", OPENED: 1, [1]: "OPENED", EXTENDED: 2, [2]: "EXTENDED", OVER_EXTENDED: 3, [3]: "OVER_EXTENDED", FILL_PARENT: 4, [4]: "FILL_PARENT" };
export const ANIMATION_STATE = { UNDETERMINED: 0, [0]: "UNDETERMINED", RUNNING: 1, [1]: "RUNNING", STOPPED: 2, [2]: "STOPPED", INTERRUPTED: 3, [3]: "INTERRUPTED" };
export const ANIMATION_METHOD = { TIMING: 0, [0]: "TIMING", SPRING: 1, [1]: "SPRING" };
export const ANIMATION_SOURCE = { NONE: 0, [0]: "NONE", MOUNT: 1, [1]: "MOUNT", GESTURE: 2, [2]: "GESTURE", USER: 3, [3]: "USER", CONTAINER_RESIZE: 4, [4]: "CONTAINER_RESIZE", SNAP_POINT_CHANGE: 5, [5]: "SNAP_POINT_CHANGE", KEYBOARD: 6, [6]: "KEYBOARD" };
export const SCROLLABLE_TYPE = { UNDETERMINED: 0, [0]: "UNDETERMINED", VIEW: 1, [1]: "VIEW", FLATLIST: 2, [2]: "FLATLIST", SCROLLVIEW: 3, [3]: "SCROLLVIEW", SECTIONLIST: 4, [4]: "SECTIONLIST", VIRTUALIZEDLIST: 5, [5]: "VIRTUALIZEDLIST" };
export const SCROLLABLE_STATE = obj;
export const KEYBOARD_STATE = { UNDETERMINED: 0, [0]: "UNDETERMINED", SHOWN: 1, [1]: "SHOWN", HIDDEN: 2, [2]: "HIDDEN" };
export const SNAP_POINT_TYPE = { PROVIDED: 0, [0]: "PROVIDED", DYNAMIC: 1, [1]: "DYNAMIC" };
export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;
export const SCREEN_HEIGHT = height2;
export const SCREEN_WIDTH = width2;
export const SCROLLABLE_DECELERATION_RATE_MAPPER = { [obj.UNDETERMINED]: 0, [obj.LOCKED]: 0, [obj.UNLOCKED]: 0.985 };
export const MODAL_STACK_BEHAVIOR = { replace: "replace", push: "push", switch: "switch" };
export const KEYBOARD_BEHAVIOR = { interactive: "interactive", extend: "extend", fillParent: "fillParent" };
export const KEYBOARD_BLUR_BEHAVIOR = { none: "none", restore: "restore" };
export const KEYBOARD_INPUT_MODE = { adjustPan: "adjustPan", adjustResize: "adjustResize" };
export const KEYBOARD_DISMISS_THRESHOLD = 12.5;
export const ANIMATION_CONFIGS = { duration: 250, easing: outResult };
export const ANIMATION_EASING = outResult;
export const ANIMATION_DURATION = 250;