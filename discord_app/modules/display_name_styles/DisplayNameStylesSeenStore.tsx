// === Module 14687: set ===

// Module 14687 (set)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let obj = { seenFontIds: new Set(), seenEffectIds: null, newFontsBadgeDismissed: false, newEffectsBadgeDismissed: false };
let set = new Set();
obj[1] = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class DisplayNameStylesSeenStore extends PersistedStore {
}
const prototype = DisplayNameStylesSeenStore.prototype;
prototype["initialize"] = function initialize(seenFontIds) {
  seenFontIds = undefined;
  if (seenFontIds != null) {
    seenFontIds = seenFontIds.seenFontIds;
  }
  if (seenFontIds == null) {
    seenFontIds = [];
  }
  obj = { seenFontIds: new Set(seenFontIds), seenEffectIds: null, newFontsBadgeDismissed: null, newEffectsBadgeDismissed: null };
  let seenEffectIds;
  if (seenFontIds != null) {
    seenEffectIds = seenFontIds.seenEffectIds;
  }
  if (seenEffectIds == null) {
    seenEffectIds = [];
  }
  const set = new Set(seenFontIds);
  obj[1] = new Set(seenEffectIds);
  let flag;
  if (seenFontIds != null) {
    flag = seenFontIds.newFontsBadgeDismissed;
  }
  if (flag == null) {
    flag = false;
  }
  obj[2] = flag;
  let flag2;
  if (seenFontIds != null) {
    flag2 = seenFontIds.newEffectsBadgeDismissed;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  obj[3] = flag2;
};
prototype["getState"] = function getState() {
  obj = { seenFontIds: Array.from(obj.seenFontIds), seenEffectIds: Array.from(obj.seenEffectIds), newFontsBadgeDismissed: obj.newFontsBadgeDismissed, newEffectsBadgeDismissed: obj.newEffectsBadgeDismissed };
  return obj;
};
prototype["getSeenFonts"] = function getSeenFonts() {
  return obj.seenFontIds;
};
prototype["getSeenEffects"] = function getSeenEffects() {
  return obj.seenEffectIds;
};
prototype["getNewFontsBadgeDismissed"] = function getNewFontsBadgeDismissed() {
  return obj.newFontsBadgeDismissed;
};
prototype["getNewEffectsBadgeDismissed"] = function getNewEffectsBadgeDismissed() {
  return obj.newEffectsBadgeDismissed;
};
DisplayNameStylesSeenStore.displayName = "DisplayNameStylesSeenStore";
DisplayNameStylesSeenStore.persistKey = "DisplayNameStylesSeenStore";
let items = [
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    obj.newFontsBadgeDismissed = false;
    obj.newEffectsBadgeDismissed = false;
    return obj;
  }
];
DisplayNameStylesSeenStore.migrations = items;
obj = {
  DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function handleMarkFontSeen(fontId) {
    fontId = fontId.fontId;
    const seenFontIds = obj.seenFontIds;
    if (seenFontIds.has(fontId)) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(obj.seenFontIds, 0)] = fontId;
      const set = new Set(items);
      obj.seenFontIds = set;
    }
  },
  DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function handleMarkEffectSeen(effectId) {
    effectId = effectId.effectId;
    const seenEffectIds = obj.seenEffectIds;
    if (seenEffectIds.has(effectId)) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(obj.seenEffectIds, 0)] = effectId;
      const set = new Set(items);
      obj.seenEffectIds = set;
    }
  },
  DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function handleMarkNewFontsBadgeDismissed() {
    if (obj.newFontsBadgeDismissed) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.newFontsBadgeDismissed = true;
    }
  },
  DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function handleMarkNewEffectsBadgeDismissed() {
    if (obj.newEffectsBadgeDismissed) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.newEffectsBadgeDismissed = true;
    }
  }
};
const displayNameStylesSeenStore = new DisplayNameStylesSeenStore(dispatcherDefault, obj);
const set1 = new Set();
const result = require("obj132").fileFinishedImporting("modules/display_name_styles/DisplayNameStylesSeenStore.tsx");

export default displayNameStylesSeenStore;