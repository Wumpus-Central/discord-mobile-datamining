// === Module 9723: MarketingSurfaceTypeUtils ===

// Module 9723 (MarketingSurfaceTypeUtils)
import MarketingSurfaceType from "MarketingSurfaceType" /* 9724 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/promotions/MarketingSurfaceTypeUtils.tsx");

export function isMarketingSurfaceType(num) {
  let hasOwnResult = typeof num === "number";
  if (typeof num === "number") {
    const _Object = Object;
    hasOwnResult = Object.hasOwn(MarketingSurfaceType.MarketingSurfaceKindByType, num);
  }
  return hasOwnResult;
}
export function classifyMarketingSurfaceType(component_type) {
  if (typeof component_type === "number") {
    const _Object = Object;
    Object.hasOwn(MarketingSurfaceType.MarketingSurfaceKindByType, component_type);
  }
  return component_type;
}