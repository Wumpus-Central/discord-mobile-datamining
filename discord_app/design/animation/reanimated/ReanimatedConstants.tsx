// === Module 4672: CONFIG_NEVER_ANIMATE ===

// Module 4672 (CONFIG_NEVER_ANIMATE)
import set from "set" /* 2 */;
import _mod4119 from "module_4119" /* 4119 */;

let obj = { duration: 1, reduceMotion: _mod4119.ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = set.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;