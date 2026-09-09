// === Module 4576: ReanimatedConstants ===

// Module 4576 (ReanimatedConstants)
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import size from "module_2" /* 2 */;

let obj = { duration: 1, reduceMotion: ReanimatedRexport.ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;