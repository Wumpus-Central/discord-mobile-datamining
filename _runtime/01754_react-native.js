// === Module 1754: react-native ===

// Module 1754 (react-native)
import react_native from "react-native" /* 17 */;

const Platform = react_native.Platform;
let flag = JEST_WORKER_ID;
const _window = window;
if (!JEST_WORKER_ID) {
  flag = false;
}

export const IS_ANDROID = true;
export const IS_IOS = false;
export const IS_WEB = false;
export const IS_JEST = JEST_WORKER_ID;
export const IS_WINDOWS = false;
export const IS_WINDOW_AVAILABLE = typeof _window !== "undefined";
export const SHOULD_BE_USE_WEB = flag;