// === Module 15690: useDisplayNameStylesNewItems ===

// Module 15690 (useDisplayNameStylesNewItems)
import noop from "module_19" /* 19 */;
import DisplayNameStylesSeenStore from "DisplayNameStylesSeenStore" /* 15691 */;

const require = globalThis.__r;

const require = fn;
const DisplayNameStylesConstants = fn(1390);
({ FLYWHEEL_EFFECTS: closure_4, FLYWHEEL_FONTS: hasOwnProperty } = DisplayNameStylesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = function useDisplayNameStylesNewFonts(visibleFontOrder) {
  _require = visibleFontOrder;
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => seenFonts.getSeenFonts());
  const obj2 = {
    dotFontIds: null,
    dismissFontDot: noop.useCallback((fontId) => {
      const result = visibleFontOrder(stateFromStores[4]).markDisplayNameStyleFontSeen(fontId);
    }, [])
  };
  const items1 = [visibleFontOrder, stateFromStores];
  obj2.dotFontIds = noop.useMemo(() => new Set(visibleFontOrder.filter((item) => {
    let hasItem = closure_2_5.includes(item);
    if (hasItem) {
      hasItem = !set.has(item);
    }
    return hasItem;
  })), items1);
  return obj2;
};
export const useDisplayNameStylesNewEffects = function useDisplayNameStylesNewEffects(visibleEffectOrder) {
  _require = visibleEffectOrder;
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => seenEffects.getSeenEffects());
  const obj2 = {
    dotEffectIds: null,
    dismissEffectDot: noop.useCallback((effectId) => {
      const result = visibleEffectOrder(stateFromStores[4]).markDisplayNameStyleEffectSeen(effectId);
    }, [])
  };
  const items1 = [visibleEffectOrder, stateFromStores];
  obj2.dotEffectIds = noop.useMemo(() => new Set(visibleEffectOrder.filter((item) => {
    let hasItem = closure_2_4.includes(item);
    if (hasItem) {
      hasItem = !set.has(item);
    }
    return hasItem;
  })), items1);
  return obj2;
};
export const useDisplayNameStylesNewFontsBadge = function useDisplayNameStylesNewFontsBadge(visibleFontOrder) {
  _require = visibleFontOrder;
  const items = [DisplayNameStylesSeenStore];
  const items1 = [visibleFontOrder];
  const stateFromStores = require("initialize").useStateFromStores(items, () => newFontsBadgeDismissed.getNewFontsBadgeDismissed());
  const obj = require("initialize");
  const tmp2 = noop.useMemo(() => visibleFontOrder.some((item) => closure_1_5.includes(item)), items1) && !stateFromStores;
  return {
    showFontsBadge: noop.useMemo(() => visibleFontOrder.some((item) => closure_1_5.includes(item)), items1) && !stateFromStores,
    dismissFontsBadge: noop.useCallback(() => {
      const result = visibleFontOrder(dependencyMap[4]).markDisplayNameStyleNewFontsBadgeDismissed();
    }, [])
  };
};
export const useDisplayNameStylesNewEffectsBadge = function useDisplayNameStylesNewEffectsBadge(visibleEffectOrder) {
  _require = visibleEffectOrder;
  const items = [DisplayNameStylesSeenStore];
  const items1 = [visibleEffectOrder];
  const stateFromStores = require("initialize").useStateFromStores(items, () => newEffectsBadgeDismissed.getNewEffectsBadgeDismissed());
  const obj = require("initialize");
  const tmp2 = noop.useMemo(() => visibleEffectOrder.some((item) => closure_1_4.includes(item)), items1) && !stateFromStores;
  return {
    showEffectsBadge: noop.useMemo(() => visibleEffectOrder.some((item) => closure_1_4.includes(item)), items1) && !stateFromStores,
    dismissEffectsBadge: noop.useCallback(() => {
      const result = visibleEffectOrder(dependencyMap[4]).markDisplayNameStyleNewEffectsBadgeDismissed();
    }, [])
  };
};