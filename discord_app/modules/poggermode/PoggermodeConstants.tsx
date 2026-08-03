// === Module 7047: ConfettiLocation ===

// Module 7047 (ConfettiLocation)
let obj = { LEVEL_1: 0, [0]: "LEVEL_1", LEVEL_2: 1, [1]: "LEVEL_2", LEVEL_3: 2, [2]: "LEVEL_3", LEVEL_4: 3, [3]: "LEVEL_4", LEVEL_5: 4, [4]: "LEVEL_5" };
obj = { [obj.LEVEL_1]: items, [obj.LEVEL_2]: items1, [obj.LEVEL_3]: items2, [obj.LEVEL_4]: items3, [obj.LEVEL_5]: items4 };
items = [[1, 0.0001], [25, 0.05], [50, 0.1], [100, 0.5], [250, 1], [500, 2], [1000, 3], [9001, 4]];
items1 = [[1, 0.0001], [25, 0.25], [50, 0.5], [100, 1], [250, 2.5], [500, 5], [1000, 7.5], [9001, 10]];
items2 = [[1, 0.001], [25, 0.5], [50, 1], [100, 2], [250, 4], [500, 8], [1000, 12], [9001, 16]];
items3 = [[1, 0.25], [25, 0.75], [50, 1], [100, 2], [250, 4], [500, 8], [1000, 20], [9001, 50]];
items4 = [[1, 0.001], [25, 0.5], [50, 1], [100, 2], [250, 5], [500, 10], [1000, 100], [9001, 10000]];
const keys = Object.keys(obj);
const reduced = keys.reduce((arg0, arg1) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj[arg1] = obj[arg1].map((arg0) => {
    let tmp;
    [tmp] = arg0;
    return tmp;
  });
  return obj;
}, { [obj.LEVEL_1]: [], [obj.LEVEL_2]: [], [obj.LEVEL_3]: [], [obj.LEVEL_4]: [], [obj.LEVEL_5]: [] });
const keys1 = Object.keys(obj);
const reduced1 = keys1.reduce((arg0, arg1) => {
  const obj = {};
  const merged = Object.assign(arg0);
  obj[arg1] = obj[arg1].map((arg0) => {
    let tmp;
    [, tmp] = arg0;
    return tmp;
  });
  return obj;
}, { [obj.LEVEL_1]: [], [obj.LEVEL_2]: [], [obj.LEVEL_3]: [], [obj.LEVEL_4]: [], [obj.LEVEL_5]: [] });
const result = require("set").fileFinishedImporting("modules/poggermode/PoggermodeConstants.tsx");

export const ConfettiLocation = { CHAT_INPUT: 0, [0]: "CHAT_INPUT", REACTION: 1, [1]: "REACTION", MEMBER_USER: 2, [2]: "MEMBER_USER", CALL_TILE: 3, [3]: "CALL_TILE" };
export const ShakeLocation = { CHAT_INPUT: 0, [0]: "CHAT_INPUT", VOICE_USER: 1, [1]: "VOICE_USER", MENTION: 2, [2]: "MENTION" };
export const ShakeLevel = obj;
export const SHAKE_STEPS = reduced;
export const SHAKE_STEP_DIVIDER = reduced1;