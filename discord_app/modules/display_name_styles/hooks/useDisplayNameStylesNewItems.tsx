// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import DisplayNameStylesSeenStore from "../DisplayNameStylesSeenStore.tsx";

const require = fn;
const DisplayNameStylesConstants = fn(1389);
({ FLYWHEEL_EFFECTS: closure_4, FLYWHEEL_FONTS: hasOwnProperty } = DisplayNameStylesConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesNewItems.tsx");

export const useDisplayNameStylesNewFonts = function useDisplayNameStylesNewFonts(visibleFontOrder) {
  _require = visibleFontOrder;
  let obj = require("initialize");
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = obj.useStateFromStores(items, () => seenFonts.getSeenFonts());
  obj = {
    dotFontIds: null,
    dismissFontDot: noop.useCallback((fontId) => {
      const result = visibleFontOrder(stateFromStores[4]).markDisplayNameStyleFontSeen(fontId);
    }, []),
  };
  const items1 = [visibleFontOrder, stateFromStores];
  obj.dotFontIds = noop.useMemo(
    () =>
      new Set(
        visibleFontOrder.filter((item) => {
          let hasItem = closure_2_5.includes(item);
          if (hasItem) {
            hasItem = !set.has(item);
          }
          return hasItem;
        }),
      ),
    items1,
  );
  return obj;
};
export const useDisplayNameStylesNewEffects = function useDisplayNameStylesNewEffects(visibleEffectOrder) {
  _require = visibleEffectOrder;
  let obj = require("initialize");
  const items = [DisplayNameStylesSeenStore];
  stateFromStores = obj.useStateFromStores(items, () => seenEffects.getSeenEffects());
  obj = {
    dotEffectIds: null,
    dismissEffectDot: noop.useCallback((effectId) => {
      const result = visibleEffectOrder(stateFromStores[4]).markDisplayNameStyleEffectSeen(effectId);
    }, []),
  };
  const items1 = [visibleEffectOrder, stateFromStores];
  obj.dotEffectIds = noop.useMemo(
    () =>
      new Set(
        visibleEffectOrder.filter((item) => {
          let hasItem = closure_2_4.includes(item);
          if (hasItem) {
            hasItem = !set.has(item);
          }
          return hasItem;
        }),
      ),
    items1,
  );
  return obj;
};
export const useDisplayNameStylesNewFontsBadge = function useDisplayNameStylesNewFontsBadge(visibleFontOrder) {
  _require = visibleFontOrder;
  let obj = require("initialize");
  const items = [DisplayNameStylesSeenStore];
  const items1 = [visibleFontOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newFontsBadgeDismissed.getNewFontsBadgeDismissed());
  obj = {
    showFontsBadge:
      noop.useMemo(() => visibleFontOrder.some((item) => closure_1_5.includes(item)), items1) && !stateFromStores,
    dismissFontsBadge: noop.useCallback(() => {
      const result = visibleFontOrder(dependencyMap[4]).markDisplayNameStyleNewFontsBadgeDismissed();
    }, []),
  };
  return obj;
};
export const useDisplayNameStylesNewEffectsBadge = function useDisplayNameStylesNewEffectsBadge(visibleEffectOrder) {
  _require = visibleEffectOrder;
  let obj = require("initialize");
  const items = [DisplayNameStylesSeenStore];
  const items1 = [visibleEffectOrder];
  const stateFromStores = obj.useStateFromStores(items, () => newEffectsBadgeDismissed.getNewEffectsBadgeDismissed());
  obj = {
    showEffectsBadge:
      noop.useMemo(() => visibleEffectOrder.some((item) => closure_1_4.includes(item)), items1) && !stateFromStores,
    dismissEffectsBadge: noop.useCallback(() => {
      const result = visibleEffectOrder(dependencyMap[4]).markDisplayNameStyleNewEffectsBadgeDismissed();
    }, []),
  };
  return obj;
};
