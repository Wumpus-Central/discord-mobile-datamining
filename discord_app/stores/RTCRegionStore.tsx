// === Module 4940: RTCRegionStore ===

// Module 4940 (RTCRegionStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import size from "module_2" /* 2 */;

let closure_3;

const obj = { preferredRegions: null, lastTestTimestamp: null, lastGeoRankedOrder: null };
const _false = obj;
const HOUR = DurationsDefault.Millis.HOUR;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class RTCRegionStore extends DeviceSettingsStore {
  initialize(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = obj;
    }
    closure_3 = tmp;
  }
  shouldIncludePreferredRegion() {
    return null != closure_3.preferredRegions;
  }
  getPreferredRegion() {
    const preferredRegions = closure_3.preferredRegions;
    let first;
    if (preferredRegions != null) {
      first = preferredRegions[0];
    }
    if (first == null) {
      first = null;
    }
    return first;
  }
  getPreferredRegions() {
    return closure_3.preferredRegions;
  }
  getRegion(str) {
    if (null != str) {
      return str.substr(0, str.search(/\d/));
    }
  }
  getUserAgnosticState() {
    return closure_3;
  }
  shouldPerformLatencyTest(mapped) {
    let tmp = null === closure_3.preferredRegions;
    if (!tmp) {
      let lastGeoRankedOrder = closure_3.lastGeoRankedOrder;
      const isEqual = _modDef12.isEqual;
      _modDef12;
      if (lastGeoRankedOrder == null) {
        lastGeoRankedOrder = [];
      }
      tmp = !isEqual(mapped, lastGeoRankedOrder);
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
  }
}
const prototype = RTCRegionStore.prototype;
RTCRegionStore.displayName = "RTCRegionStore";
RTCRegionStore.persistKey = "RTCRegionStore";
let items = [
  (preferredRegion) => {
    const tmp = preferredRegion;
    if (preferredRegion.preferredRegion) {
      const items = [preferredRegion.preferredRegion];
      preferredRegion.preferredRegions = items;
    } else {
      preferredRegion.preferredRegions = null;
    }
    delete tmp["preferredRegion"];
    return preferredRegion;
  }
];
RTCRegionStore.migrations = items;
const obj2 = {
  RTC_LATENCY_TEST_COMPLETE: function handleCompletedRTCLatencyTest(latencyRankedRegions) {
    if (latencyRankedRegions.latencyRankedRegions.length > 0) {
      closure_3.lastGeoRankedOrder = latencyRankedRegions.geoRankedRegions;
      closure_3.preferredRegions = latencyRankedRegions.latencyRankedRegions;
    }
    closure_3.lastTestTimestamp = Date.now();
  }
};
const rTCRegionStore = new RTCRegionStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/RTCRegionStore.tsx");

export default rTCRegionStore;