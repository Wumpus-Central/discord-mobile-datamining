// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx
import noop from "../../../../_runtime/00019_noop.js";
import set from "../DisplayNameStylesSeenStore.tsx";
import items3 from "../DisplayNameStylesConstants.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = fn;
({ FLYWHEEL_EFFECTS: c4, FLYWHEEL_FONTS: c5 } = items3);
let result = require("obj132").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = function useDisplayNameStylesNewFonts(visibleFontOrder) {
  const _require = visibleFontOrder;
  let obj = _require(stateFromStores[3]);
  const items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => seenFonts.getSeenFonts());
  obj = {
    dotFontIds: React.useMemo(() => new Set(visibleFontOrder.filter((item, index) => {
      let hasItem = closure_1_5.includes(item);
      if (hasItem) {
        hasItem = !set.has(item);
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
    dotEffectIds: React.useMemo(() => new Set(visibleEffectOrder.filter((item, index) => {
      let hasItem = closure_1_4.includes(item);
      if (hasItem) {
        hasItem = !set.has(item);
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
  let obj = initialize;
  const items = [closure_3];
  const items1 = [visibleFontOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newFontsBadgeDismissed.getNewFontsBadgeDismissed());
  obj = {
    showFontsBadge: React.useMemo(() => visibleFontOrder.some((item, index) => closure_5.includes(item)), items1) && !stateFromStores,
    dismissFontsBadge: React.useCallback(() => {
      const result = visibleFontOrder(table[4]).markDisplayNameStyleNewFontsBadgeDismissed();
    }, [])
  };
  return obj;
};
export const useDisplayNameStylesNewEffectsBadge = function useDisplayNameStylesNewEffectsBadge(visibleEffectOrder) {
  const _require = visibleEffectOrder;
  let obj = initialize;
  const items = [closure_3];
  const items1 = [visibleEffectOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newEffectsBadgeDismissed.getNewEffectsBadgeDismissed());
  obj = {
    showEffectsBadge: React.useMemo(() => visibleEffectOrder.some((item, index) => closure_4.includes(item)), items1) && !stateFromStores,
    dismissEffectsBadge: React.useCallback(() => {
      const result = visibleEffectOrder(table[4]).markDisplayNameStyleNewEffectsBadgeDismissed();
    }, [])
  };
  return obj;
};