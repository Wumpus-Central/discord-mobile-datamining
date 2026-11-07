// discord_app/modules/premium/promotions/MarketingSurfaceTypeUtils.tsx
import MarketingSurfaceType from "../../../../discord_common/js/shared/shared-constants/MarketingSurfaceType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
