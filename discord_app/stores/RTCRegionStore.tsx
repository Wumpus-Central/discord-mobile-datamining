// === Module 4610: RTCRegionStore ===

// Module 4610 (RTCRegionStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;

let obj = { preferredRegions: null, lastTestTimestamp: null, lastGeoRankedOrder: null };
let closure_3 = obj;
const HOUR = DurationsDefault.Millis.HOUR;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class RTCRegionStore extends DeviceSettingsStore {
}
const prototype = RTCRegionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_3 = tmp;
};
prototype["shouldIncludePreferredRegion"] = function shouldIncludePreferredRegion() {
  return null != closure_3.preferredRegions;
};
prototype["getPreferredRegion"] = function getPreferredRegion() {
  const preferredRegions = closure_3.preferredRegions;
  let first;
  if (preferredRegions != null) {
    first = preferredRegions[0];
  }
  if (first == null) {
    first = null;
  }
  return first;
};
prototype["getPreferredRegions"] = function getPreferredRegions() {
  return closure_3.preferredRegions;
};
prototype["getRegion"] = function getRegion(str) {
  if (null != str) {
    return str.substr(0, str.search(/\d/));
  }
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return closure_3;
};
prototype["shouldPerformLatencyTest"] = function shouldPerformLatencyTest(mapped) {
  let tmp = null === closure_3.preferredRegions;
  if (!tmp) {
    let lastGeoRankedOrder = closure_3.lastGeoRankedOrder;
    if (lastGeoRankedOrder == null) {
      lastGeoRankedOrder = [];
    }
    tmp = !_modDef12.isEqual(mapped, lastGeoRankedOrder);
  }
  if (!tmp) {
    const _Date = Date;
    let num = closure_3.lastTestTimestamp;
    const timestamp = Date.now();
    if (num == null) {
      num = 0;
    }
    tmp = timestamp - num >= HOUR;
  }
  return tmp;
};
RTCRegionStore.displayName = "RTCRegionStore";
RTCRegionStore.persistKey = "RTCRegionStore";
let items = [
  (preferredRegion) => {
    if (preferredRegion.preferredRegion) {
      const items = [preferredRegion.preferredRegion];
      preferredRegion.preferredRegions = items;
    } else {
      preferredRegion.preferredRegions = null;
    }
    delete tmp[tmp2];
    return preferredRegion;
  }
];
RTCRegionStore.migrations = items;
obj = {
  RTC_LATENCY_TEST_COMPLETE: function handleCompletedRTCLatencyTest(latencyRankedRegions) {
    if (latencyRankedRegions.latencyRankedRegions.length > 0) {
      closure_3.lastGeoRankedOrder = latencyRankedRegions.geoRankedRegions;
      closure_3.preferredRegions = latencyRankedRegions.latencyRankedRegions;
    }
    closure_3.lastTestTimestamp = Date.now();
  }
};
const rTCRegionStore = new RTCRegionStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/RTCRegionStore.tsx");

export default rTCRegionStore;