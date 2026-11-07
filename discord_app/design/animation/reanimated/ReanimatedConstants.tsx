// === Module 5371: ReanimatedConstants ===

// Module 5371 (ReanimatedConstants)
import _mod1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

const obj = { duration: 1, reduceMotion: _mod1652.ReduceMotion.Always };
const obj2 = {};
const merged = Object.assign(obj);
obj2.reduceMotion = undefined;
const result = size.fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj2;