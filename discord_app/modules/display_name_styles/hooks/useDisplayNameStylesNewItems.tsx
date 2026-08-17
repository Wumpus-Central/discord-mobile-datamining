// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx
import closure_2 from "noop" /* 19 */;
import closure_3 from "set" /* 14687 */;
import items3 from "items3" /* 1934 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
({ FLYWHEEL_EFFECTS: c4, FLYWHEEL_FONTS: c5 } = items3);
let result = require("set").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = function useDisplayNameStylesNewFonts(visibleFontOrder) {
  const _require = visibleFontOrder;
  let obj = _require(stateFromStores[3]);
  const items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => seenFonts.getSeenFonts());
  obj = {
    dotFontIds: React.useMemo(() => new Set(visibleFontOrder.filter((arg0) => {
      let hasItem = closure_1_5.includes(arg0);
      if (hasItem) {
        hasItem = !set.has(arg0);
      }
      return hasItem;
    })), items1),
    dismissFontDot: React.useCallback((fontId) => {
      const result = visibleFontOrder(stateFromStores[4]).markDisplayNameStyleFontSeen(fontId);
    }, [])
  };
  items1 = [visibleFontOrder, stateFromStores];
  return obj;
};
export const useDisplayNameStylesNewEffects = function useDisplayNameStylesNewEffects(visibleEffectOrder) {
  const _require = visibleEffectOrder;
  let obj = _require(stateFromStores[3]);
  const items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => seenEffects.getSeenEffects());
  obj = {
    dotEffectIds: React.useMemo(() => new Set(visibleEffectOrder.filter((arg0) => {
      let hasItem = closure_1_4.includes(arg0);
      if (hasItem) {
        hasItem = !set.has(arg0);
      }
      return hasItem;
    })), items1),
    dismissEffectDot: React.useCallback((effectId) => {
      const result = visibleEffectOrder(stateFromStores[4]).markDisplayNameStyleEffectSeen(effectId);
    }, [])
  };
  items1 = [visibleEffectOrder, stateFromStores];
  return obj;
};
export const useDisplayNameStylesNewFontsBadge = function useDisplayNameStylesNewFontsBadge(visibleFontOrder) {
  const _require = visibleFontOrder;
  let obj = _initialize;
  const items = [closure_3];
  const items1 = [visibleFontOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newFontsBadgeDismissed.getNewFontsBadgeDismissed());
  obj = {
    showFontsBadge: React.useMemo(() => visibleFontOrder.some((arg0) => closure_5.includes(arg0)), items1) && !stateFromStores,
    dismissFontsBadge: React.useCallback(() => {
      const result = visibleFontOrder(table[4]).markDisplayNameStyleNewFontsBadgeDismissed();
    }, [])
  };
  return obj;
};
export const useDisplayNameStylesNewEffectsBadge = function useDisplayNameStylesNewEffectsBadge(visibleEffectOrder) {
  const _require = visibleEffectOrder;
  let obj = _initialize;
  const items = [closure_3];
  const items1 = [visibleEffectOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newEffectsBadgeDismissed.getNewEffectsBadgeDismissed());
  obj = {
    showEffectsBadge: React.useMemo(() => visibleEffectOrder.some((arg0) => closure_4.includes(arg0)), items1) && !stateFromStores,
    dismissEffectsBadge: React.useCallback(() => {
      const result = visibleEffectOrder(table[4]).markDisplayNameStyleNewEffectsBadgeDismissed();
    }, [])
  };
  return obj;
};