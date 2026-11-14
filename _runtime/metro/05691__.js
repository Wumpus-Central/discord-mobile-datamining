// === Module 5691: ? ===

// Module 5691
import reanimatedWrapper from "reanimatedWrapper" /* 5642 */;

require = arg1;
const dependencyMap = arg6;

export function createLastUpdateEventMap() {
  const Worklets = reanimatedWrapper.Worklets;
  let createShareable;
  if (Worklets != null) {
    createShareable = Worklets.createShareable;
  }
  if (undefined !== createShareable) {
    if (undefined !== reanimatedWrapper.Worklets.UIRuntimeId) {
      if (undefined !== reanimatedWrapper.Reanimated) {
        const Worklets2 = reanimatedWrapper.Worklets;
        const _Map = Map;
        const map = new Map();
        return Worklets2.createShareable(reanimatedWrapper.Worklets.UIRuntimeId, map);
      }
    }
  }
}