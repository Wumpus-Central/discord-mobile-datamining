// === Module 7679: PoggermodeConstants ===

// Module 7679 (PoggermodeConstants)
import size from "module_2" /* 2 */;

let ShakeLevel = { LEVEL_1: 0, [0]: "LEVEL_1", LEVEL_2: 1, [1]: "LEVEL_2", LEVEL_3: 2, [2]: "LEVEL_3", LEVEL_4: 3, [3]: "LEVEL_4", LEVEL_5: 4, [4]: "LEVEL_5" };
ShakeLevel = { [ShakeLevel.LEVEL_1]: items, [ShakeLevel.LEVEL_2]: items1, [ShakeLevel.LEVEL_3]: items2, [ShakeLevel.LEVEL_4]: items3, [ShakeLevel.LEVEL_5]: items4 };
items = [[1, 0.0001], [25, 0.05], [50, 0.1], [100, 0.5], [250, 1], [500, 2], [1000, 3], [9001, 4]];
items1 = [[1, 0.0001], [25, 0.25], [50, 0.5], [100, 1], [250, 2.5], [500, 5], [1000, 7.5], [9001, 10]];
items2 = [[1, 0.001], [25, 0.5], [50, 1], [100, 2], [250, 4], [500, 8], [1000, 12], [9001, 16]];
items3 = [[1, 0.25], [25, 0.75], [50, 1], [100, 2], [250, 4], [500, 8], [1000, 20], [9001, 50]];
items4 = [[1, 0.001], [25, 0.5], [50, 1], [100, 2], [250, 5], [500, 10], [1000, 100], [9001, 10000]];
const keys = Object.keys(ShakeLevel);
const reduced = keys.reduce((acc, item) => {
  const obj = {};
  const merged = Object.assign(acc);
  obj[item] = obj[item].map((item) => {
    [tmp] = item;
    return tmp;
  });
  return obj;
}, { [ShakeLevel.LEVEL_1]: [], [ShakeLevel.LEVEL_2]: [], [ShakeLevel.LEVEL_3]: [], [ShakeLevel.LEVEL_4]: [], [ShakeLevel.LEVEL_5]: [] });
const keys1 = Object.keys(ShakeLevel);
const reduced1 = keys1.reduce((acc, item) => {
  const obj = {};
  const merged = Object.assign(acc);
  obj[item] = obj[item].map((item) => {
    [, tmp] = item;
    return tmp;
  });
  return obj;
}, { [ShakeLevel.LEVEL_1]: [], [ShakeLevel.LEVEL_2]: [], [ShakeLevel.LEVEL_3]: [], [ShakeLevel.LEVEL_4]: [], [ShakeLevel.LEVEL_5]: [] });
const result = size.fileFinishedImporting("modules/poggermode/PoggermodeConstants.tsx");

export const ConfettiLocation = { CHAT_INPUT: 0, [0]: "CHAT_INPUT", REACTION: 1, [1]: "REACTION", MEMBER_USER: 2, [2]: "MEMBER_USER", CALL_TILE: 3, [3]: "CALL_TILE" };
export const ShakeLocation = { CHAT_INPUT: 0, [0]: "CHAT_INPUT", VOICE_USER: 1, [1]: "VOICE_USER", MENTION: 2, [2]: "MENTION" };
export { ShakeLevel };
export const SHAKE_STEPS = reduced;
export const SHAKE_STEP_DIVIDER = reduced1;