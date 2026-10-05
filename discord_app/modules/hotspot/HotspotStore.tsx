// discord_app/modules/hotspot/HotspotStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ConferenceModeConstants from "../conference_mode/ConferenceModeConstants.tsx";
import ProcessArgs2 from "../../utils/ProcessArgs.tsx";
import size from "../../../_runtime/metro/00002__.js";

const CONFERENCE_MODE_ENABLED = ConferenceModeConstants.CONFERENCE_MODE_ENABLED;
let set = new Set();
let hotspotOverrides = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class HotspotStore extends PersistedStore {
  initialize(hiddenHotspots) {
    if (null != hiddenHotspots) {
      const _Array = Array;
      if (Array.isArray(hiddenHotspots.hiddenHotspots)) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        new Set(hiddenHotspots.hiddenHotspots);
      }
      if (null != hiddenHotspots.hotspotOverrides) {
        hotspotOverrides = hiddenHotspots.hotspotOverrides;
      }
    }
  }
  hasHotspot(LIVE_STAGE_NOTIFICATION_BADGE) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    let tmp = !flag && hotspotOverrides[LIVE_STAGE_NOTIFICATION_BADGE];
    let tmp3 = !CONFERENCE_MODE_ENABLED;
    if (tmp3) {
      const ProcessArgs = ProcessArgs2.ProcessArgs;
      let tmp7 = !ProcessArgs.isDisallowPopupsSet();
      ProcessArgs.isDisallowPopupsSet();
      if (tmp7) {
        if (!tmp) {
          tmp = !set.has(LIVE_STAGE_NOTIFICATION_BADGE);
        }
        tmp7 = tmp;
      }
      tmp3 = tmp7;
    }
    return tmp3;
  }
  hasHiddenHotspot(HUB_LINK_CHANNEL_NOTICE) {
    return set.has(HUB_LINK_CHANNEL_NOTICE);
  }
  getHotspotOverride(arg0) {
    return hotspotOverrides[arg0];
  }
  getState() {
    return { hiddenHotspots: set, hotspotOverrides };
  }
}
const prototype = HotspotStore.prototype;
HotspotStore.displayName = "HotspotStore";
HotspotStore.persistKey = "hotspots";
const items = [
  (arg0) => {
    let hiddenHotspots = arg0;
    if (arg0 == null) {
      hiddenHotspots = [];
    }
    return { hiddenHotspots, hotspotOverrides: {} };
  },
];
HotspotStore.migrations = items;
const obj = {
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
  HOTSPOT_OVERRIDE_CLEAR: function handleClearHotspotOverride(location) {
    const _location = location.location;
    if (null == hotspotOverrides[_location]) {
      return false;
    } else {
      delete hotspotOverrides[_location];
    }
  },
};
const hotspotStore = new HotspotStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/hotspot/HotspotStore.tsx");

export default hotspotStore;
