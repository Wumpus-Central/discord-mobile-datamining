// === Module 16873: NavigationTTIRegionDebugState ===

// Module 16873 (NavigationTTIRegionDebugState)
import size from "module_2" /* 2 */;

const set = new Set();
const map = new Map();
let global = null;
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionDebugState.tsx");

export const recordNavigationTTIRegionDebugMeasurement = function recordNavigationTTIRegionDebugMeasurement(traceId, spanComponent, activeTraceElapsedMs) {
  if (traceId !== global) {
    global = traceId;
    map.clear();
  }
  const result = map.set(spanComponent, activeTraceElapsedMs);
  for (const item10015 of set) {
    let item10015Result = item10015();
    continue;
  }
};
export const getNavigationTTIRegionDebugMeasurement = function getNavigationTTIRegionDebugMeasurement(activeTraceId, navTTISurface) {
  let tmp = null;
  if (activeTraceId === global) {
    value = map.get(navTTISurface);
    if (value == null) {
      value = null;
    }
    tmp = value;
  }
  return tmp;
};
export const subscribeNavigationTTIRegionDebugMeasurements = function subscribeNavigationTTIRegionDebugMeasurements(arg0) {
  arg0.add(arg0);
  return () => set.delete(closure_0);
};