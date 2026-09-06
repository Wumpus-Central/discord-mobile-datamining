// _runtime/01747_JEST_WORKER_ID.js
import _mod17 from "metro/00017__.js";

const Platform = _mod17.Platform;
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
