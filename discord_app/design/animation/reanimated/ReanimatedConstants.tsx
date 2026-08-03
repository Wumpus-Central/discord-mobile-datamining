// === Module 4195: CONFIG_NEVER_ANIMATE ===

// Module 4195 (CONFIG_NEVER_ANIMATE)
let obj = { duration: 1, reduceMotion: require("module_4054").ReduceMotion.Always };
obj = {};
const merged = Object.assign(obj);
obj.reduceMotion = undefined;
const result = require("set").fileFinishedImporting("design/animation/reanimated/ReanimatedConstants.tsx");

export const CONFIG_NEVER_ANIMATE = obj;
export const CONFIG_NEVER_ANIMATE_TIMING = obj;