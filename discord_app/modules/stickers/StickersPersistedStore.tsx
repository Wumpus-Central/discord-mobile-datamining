// === Module 5671: StickersPersistedStore ===

// Module 5671 (StickersPersistedStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import FrecencyDefault from "Frecency" /* 4759 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1220 */;
import StickersStore from "StickersStore" /* 5672 */;

function handleStickersStoreUpdate() {
  if (StickersStore.isLoaded) {
    closure_6.compute();
  }
}
function handleUserSettingsProtoStoreChange() {
  const stickerFrecency = UserSettingsProtoStore.frecencyWithoutFetchingLatest.stickerFrecency;
  let stickers;
  if (stickerFrecency != null) {
    stickers = stickerFrecency.stickers;
  }
  if (null == stickers) {
    return false;
  } else {
    closure_6.overwriteHistory(_modDef12.mapValues(stickers, (recentUses) => {
      const obj = {};
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      const mapped = recentUses.map(Number);
      obj.recentUses = mapped.filter((item) => item > 0);
      return obj;
    }), global.pendingUsages);
  }
}
const UserSettingsTypes = fn(1084).UserSettingsTypes;
let global = { pendingUsages: [] };
let closure_6 = new FrecencyDefault({
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return StickersStore.getStickerById(arg0);
  },
  afterCompute() {

  },
  numFrequentlyItems: 20
});
const PersistedStore = initializeDefault.PersistedStore;
class StickersPersistedStore extends PersistedStore {
}
const prototype = StickersPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const self = this;
  this.waitFor(StickersStore, UserSettingsProtoStore);
  if (null != arg0) {
    global = arg0;
  }
  const items = [StickersStore];
  self.syncWith(items, handleStickersStoreUpdate);
  const items1 = [UserSettingsProtoStore];
  self.syncWith(items1, handleUserSettingsProtoStoreChange);
};
prototype["getState"] = function getState() {
  return global;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return global.pendingUsages.length > 0;
};
Object.defineProperty(prototype, "stickerFrecencyWithoutFetchingLatest", {
  get: function stickerFrecencyWithoutFetchingLatest() {
    return closure_6;
  },
  set: undefined
});
StickersPersistedStore.displayName = "StickersPersistedStore";
StickersPersistedStore.persistKey = "StickersPersistedStoreV2";
const stickersPersistedStore = new StickersPersistedStore(DispatcherDefault, {
  STICKER_TRACK_USAGE: function handleStickersUsage(stickerIds) {
    stickerIds = stickerIds.stickerIds;
    if (stickerIds != null) {
      const item = stickerIds.forEach((key) => {
        closure_1_6.track(key);
        pendingUsages = pendingUsages.pendingUsages;
        pendingUsages.push({ key, timestamp: Date.now() });
      });
    }
    if (StickersStore.isLoaded) {
      closure_6.compute();
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        global.pendingUsages = [];
      }
    }
    return false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/stickers/StickersPersistedStore.tsx");

export default stickersPersistedStore;
export const STICKER_PACK_NEW_TIMESTAMP_THRESHOLD = DurationsDefault.Millis.DAY;