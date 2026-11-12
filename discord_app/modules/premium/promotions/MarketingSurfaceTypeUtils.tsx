// === Module 9559: MarketingSurfaceTypeUtils ===

// Module 9559 (MarketingSurfaceTypeUtils)
import MarketingSurfaceType from "MarketingSurfaceType" /* 9560 */;
import size from "module_2" /* 2 */;

function isMarketingSurfaceType(items) {
  let hasOwnResult = typeof items === "number";
  if (typeof items === "number") {
    const _Object = Object;
    hasOwnResult = Object.hasOwn(MarketingSurfaceType.MarketingSurfaceKindByType, items);
  }
  return hasOwnResult;
}
function isMarketingSurfaceProperties(properties, items) {
  if (typeof items === "number") {
    let tmp7 = isMarketingSurfaceType(items);
    if (tmp7) {
      tmp7 = properties.properties.oneofKind === MarketingSurfaceType.MarketingSurfaceKindByType[items];
    }
    return tmp7;
  } else {
    const obj = items[Symbol.iterator]();
    while (obj !== undefined) {
      if (isMarketingSurfaceProperties(properties, tmp2)) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
const result = size.fileFinishedImporting("modules/premium/promotions/MarketingSurfaceTypeUtils.tsx");

export { isMarketingSurfaceType };
export { isMarketingSurfaceProperties };
export function isMarketingSurface(properties, items) {
  return isMarketingSurfaceProperties(properties.properties, items);
}
export function classifyMarketingSurfaceType(component_type) {
  if (typeof component_type === "number") {
    const _Object = Object;
    Object.hasOwn(MarketingSurfaceType.MarketingSurfaceKindByType, component_type);
  }
  return component_type;
}