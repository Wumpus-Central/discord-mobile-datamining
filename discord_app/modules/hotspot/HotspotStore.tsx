// === Module 7214: hotspot/HotspotStore ===

// Module 7214 (hotspot/HotspotStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import ConferenceModeConstants from "ConferenceModeConstants" /* 1081 */;
import ProcessArgs2 from "ProcessArgs" /* 5141 */;
import size from "module_2" /* 2 */;

const CONFERENCE_MODE_ENABLED = ConferenceModeConstants.CONFERENCE_MODE_ENABLED;
let set = new Set();
let hotspotOverrides = {};
const PersistedStore = initializeDefault.PersistedStore;
class HotspotStore extends PersistedStore {
}
const prototype = HotspotStore.prototype;
prototype["initialize"] = function initialize(hiddenHotspots) {
  if (null != hiddenHotspots) {
    const _Array = Array;
    if (Array.isArray(hiddenHotspots.hiddenHotspots)) {
      const _Set = Set;
      set = new Set(hiddenHotspots.hiddenHotspots);
    }
    if (null != hiddenHotspots.hotspotOverrides) {
      hotspotOverrides = hiddenHotspots.hotspotOverrides;
    }
  }
};
prototype["hasHotspot"] = function hasHotspot(LIVE_STAGE_NOTIFICATION_BADGE) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let tmp = !flag;
  if (!flag) {
    tmp = hotspotOverrides[LIVE_STAGE_NOTIFICATION_BADGE];
  }
  let tmp3 = !CONFERENCE_MODE_ENABLED;
  if (!CONFERENCE_MODE_ENABLED) {
    const ProcessArgs = ProcessArgs2.ProcessArgs;
    const isDisallowPopupsSetResult = ProcessArgs.isDisallowPopupsSet();
    let tmp7 = !isDisallowPopupsSetResult;
    if (!isDisallowPopupsSetResult) {
      if (!tmp) {
        tmp = !set.has(LIVE_STAGE_NOTIFICATION_BADGE);
      }
      tmp7 = tmp;
    }
    tmp3 = tmp7;
  }
  return tmp3;
};
prototype["hasHiddenHotspot"] = function hasHiddenHotspot(HUB_SECOND_EMAIL_CONNECTION_UPSELL) {
  return set.has(HUB_SECOND_EMAIL_CONNECTION_UPSELL);
};
prototype["getHotspotOverride"] = function getHotspotOverride(arg0) {
  return hotspotOverrides[arg0];
};
prototype["getState"] = function getState() {
  return { hiddenHotspots: set, hotspotOverrides };
};
HotspotStore.displayName = "HotspotStore";
HotspotStore.persistKey = "hotspots";
const items = [
  (arg0) => {
    let hiddenHotspots = arg0;
    if (arg0 == null) {
      hiddenHotspots = [];
    }
    return { hiddenHotspots, hotspotOverrides: {} };
  }
];
HotspotStore.migrations = items;
const hotspotStore = new HotspotStore(DispatcherDefault, {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(hiddenHotspots) {
    set = new Set(hiddenHotspots.hiddenHotspots);
  },
  HOTSPOT_HIDE: function handleHotspotHide(location) {
    const _location = location.location;
    if (set.has(_location)) {
      return false;
    } else {
      set.add(_location);
    }
  },
  HOTSPOT_OVERRIDE_SET: function handleSetHotspotOverride(location) {
    hotspotOverrides[location.location] = location.enabled;
  },
  HOTSPOT_OVERRIDE_CLEAR: function handleClearHotspotOverride(arg0) {
    if (null == hotspotOverrides[arg0.location]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
const result = size.fileFinishedImporting("modules/hotspot/HotspotStore.tsx");

export default hotspotStore;