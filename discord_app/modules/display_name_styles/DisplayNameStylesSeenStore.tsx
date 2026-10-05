// === Module 15160: DisplayNameStylesSeenStore ===

// Module 15160 (DisplayNameStylesSeenStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let set;
let obj = { seenFontIds: set, seenEffectIds: new Set(), newFontsBadgeDismissed: false, newEffectsBadgeDismissed: false };
set = new Set();
new Set();
const PersistedStore = get_initializedDefault.PersistedStore;
class DisplayNameStylesSeenStore extends PersistedStore {
  initialize(seenFontIds) {
    let _Set1;
    let _Set21;
    let flag;
    let flag2;
    seenFontIds = undefined;
    const _Set = Set;
    if (seenFontIds != null) {
      seenFontIds = seenFontIds.seenFontIds;
    }
    if (seenFontIds == null) {
      seenFontIds = [];
    }
    obj = { seenFontIds: _Set1, seenEffectIds: _Set21, newFontsBadgeDismissed: flag, newEffectsBadgeDismissed: flag2 };
    _Set1 = new _Set(seenFontIds);
    let seenEffectIds;
    const _Set2 = Set;
    if (seenFontIds != null) {
      seenEffectIds = seenFontIds.seenEffectIds;
    }
    if (seenEffectIds == null) {
      seenEffectIds = [];
    }
    _Set21 = new _Set2(seenEffectIds);
    flag = undefined;
    if (seenFontIds != null) {
      flag = seenFontIds.newFontsBadgeDismissed;
    }
    if (flag == null) {
      flag = false;
    }
    flag2 = undefined;
    if (seenFontIds != null) {
      flag2 = seenFontIds.newEffectsBadgeDismissed;
    }
    if (flag2 == null) {
      flag2 = false;
    }
  }
  getState() {
    obj = { seenFontIds: Array.from(obj.seenFontIds), seenEffectIds: Array.from(obj.seenEffectIds), newFontsBadgeDismissed: obj.newFontsBadgeDismissed, newEffectsBadgeDismissed: obj.newEffectsBadgeDismissed };
    return obj;
  }
  getSeenFonts() {
    return obj.seenFontIds;
  }
  getSeenEffects() {
    return obj.seenEffectIds;
  }
  getNewFontsBadgeDismissed() {
    return obj.newFontsBadgeDismissed;
  }
  getNewEffectsBadgeDismissed() {
    return obj.newEffectsBadgeDismissed;
  }
}
const prototype = DisplayNameStylesSeenStore.prototype;
DisplayNameStylesSeenStore.displayName = "DisplayNameStylesSeenStore";
DisplayNameStylesSeenStore.persistKey = "DisplayNameStylesSeenStore";
let items = [
  (arg0) => {
    obj = { newFontsBadgeDismissed: false, newEffectsBadgeDismissed: false };
    const merged = Object.assign(arg0);
    return obj;
  }
];
DisplayNameStylesSeenStore.migrations = items;
const obj2 = {
  DISPLAY_NAME_STYLES_MARK_FONT_SEEN: function handleMarkFontSeen(fontId) {
    fontId = fontId.fontId;
    const seenFontIds = obj.seenFontIds;
    if (seenFontIds.has(fontId)) {
      return false;
    } else {
      obj = { seenFontIds: set };
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, obj.seenFontIds, 0)] = fontId;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
  },
  DISPLAY_NAME_STYLES_MARK_EFFECT_SEEN: function handleMarkEffectSeen(effectId) {
    effectId = effectId.effectId;
    const seenEffectIds = obj.seenEffectIds;
    if (seenEffectIds.has(effectId)) {
      return false;
    } else {
      obj = { seenEffectIds: set };
      const merged = Object.assign(obj);
      const _Set = Set;
      const items = [];
      items[HermesBuiltin.arraySpread(items, obj.seenEffectIds, 0)] = effectId;
      const self = this;
      const self2 = this;
      set = new Set(items);
    }
  },
  DISPLAY_NAME_STYLES_MARK_NEW_FONTS_BADGE_DISMISSED: function handleMarkNewFontsBadgeDismissed() {
    if (obj.newFontsBadgeDismissed) {
      return false;
    } else {
      obj = { newFontsBadgeDismissed: true };
      const merged = Object.assign(obj);
    }
  },
  DISPLAY_NAME_STYLES_MARK_NEW_EFFECTS_BADGE_DISMISSED: function handleMarkNewEffectsBadgeDismissed() {
    if (obj.newEffectsBadgeDismissed) {
      return false;
    } else {
      obj = { newEffectsBadgeDismissed: true };
      const merged = Object.assign(obj);
    }
  }
};
const displayNameStylesSeenStore = new DisplayNameStylesSeenStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/display_name_styles/DisplayNameStylesSeenStore.tsx");

export default displayNameStylesSeenStore;