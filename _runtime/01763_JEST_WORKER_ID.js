// _runtime/01763_JEST_WORKER_ID.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";

const Platform = get_ActivityIndicator.Platform;
let flag = JEST_WORKER_ID;
if (!JEST_WORKER_ID) {
  flag = false;
}

export const IS_ANDROID = true;
export const IS_IOS = false;
export const IS_WEB = false;
export const IS_JEST = JEST_WORKER_ID;
export const IS_WINDOWS = false;
export const IS_WINDOW_AVAILABLE = typeof window !== "undefined";
export const SHOULD_BE_USE_WEB = flag;
