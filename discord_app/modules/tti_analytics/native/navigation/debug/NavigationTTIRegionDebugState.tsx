// === Module 16486: NavigationTTIRegionDebugState ===

// Module 16486 (NavigationTTIRegionDebugState)
import size from "module_2" /* 2 */;

let set = new Set();
const map = new Map();
let c2 = null;
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugState.tsx");

export const recordNavigationTTIRegionDebugMeasurement = function recordNavigationTTIRegionDebugMeasurement(traceId, spanComponent, activeTraceElapsedMs) {
  if (traceId !== c2) {
    c2 = traceId;
    map.clear();
  }
  const result = map.set(spanComponent, activeTraceElapsedMs);
  for (const item10015 of set) {
    let item10015Result = item10015();
    continue;
  }
};
export const getNavigationTTIRegionDebugMeasurement = function getNavigationTTIRegionDebugMeasurement(activeTraceId, regionId) {
  let tmp = null;
  if (activeTraceId === c2) {
    let value = map.get(regionId);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
export const subscribeNavigationTTIRegionDebugMeasurements = function subscribeNavigationTTIRegionDebugMeasurements(arg0) {
  let closure_0;
  set = arg0;
  set.add(arg0);
  return () => set.delete(closure_0);
};