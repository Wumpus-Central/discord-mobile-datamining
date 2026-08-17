// discord_app/modules/hotspot/HotspotStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import CONFERENCE_MODE_ENABLED2 from "../conference_mode/ConferenceModeConstants.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import get from "../../utils/ProcessArgs.tsx";
import set from "../../../_runtime/00002_set.js";

const CONFERENCE_MODE_ENABLED = CONFERENCE_MODE_ENABLED2.CONFERENCE_MODE_ENABLED;
let set = new Set();
let closure_4 = {};
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
      const hotspotOverrides = hiddenHotspots.hotspotOverrides;
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
    tmp = dependencyMap[LIVE_STAGE_NOTIFICATION_BADGE];
  }
  let tmp3 = !CONFERENCE_MODE_ENABLED;
  if (!CONFERENCE_MODE_ENABLED) {
    const ProcessArgs = get.ProcessArgs;
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
  return dependencyMap[arg0];
};
prototype["getState"] = function getState() {
  return { hiddenHotspots: set, hotspotOverrides: closure_4 };
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
const hotspotStore = new HotspotStore(dispatcherDefault, {
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
    closure_4[location.location] = location.enabled;
  },
  HOTSPOT_OVERRIDE_CLEAR: function handleClearHotspotOverride(arg0) {
    if (null == dependencyMap[arg0.location]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
const result = set.fileFinishedImporting("modules/hotspot/HotspotStore.tsx");

export default hotspotStore;