// === Module 4446: CONFIG_NEVER_ANIMATE ===

// Module 4446 (CONFIG_NEVER_ANIMATE)
import set from "set" /* 2 */;
import _mod4184 from "module_4184" /* 4184 */;

let obj = { duration: 1, reduceMotion: _mod4184.ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = set.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;