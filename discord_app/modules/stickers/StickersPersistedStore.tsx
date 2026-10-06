// === Module 5693: StickersPersistedStore ===

// Module 5693 (StickersPersistedStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import DurationsDefault from "Durations" /* 1102 */;
import FrecencyDefault from "Frecency" /* 4933 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import StickersStore from "StickersStore" /* 5694 */;
import size from "module_2" /* 2 */;

let closure_5, pendingUsages, recentUses;

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
    const overwriteHistory = closure_6.overwriteHistory;
    let obj = _modDef12;
    overwriteHistory(obj.mapValues(stickers, (recentUses) => {
      let mapped;
      const obj = { recentUses: mapped.filter((item) => item > 0) };
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      mapped = recentUses.map(Number);
      return obj;
    }), closure_5.pendingUsages);
  }
}
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const hasOwnProperty = { pendingUsages: [] };
const DAY = DurationsDefault.Millis.DAY;
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return StickersStore.getStickerById(arg0);
  },
  afterCompute() {

  },
  numFrequentlyItems: 20
};
let closure_6 = new FrecencyDefault(obj);
new FrecencyDefault(obj);
const PersistedStore = get_initializedDefault.PersistedStore;
class StickersPersistedStore extends PersistedStore {
  initialize(arg0) {
    const self = this;
    this.waitFor(StickersStore, UserSettingsProtoStore);
    if (null != arg0) {
      closure_5 = arg0;
    }
    const items = [StickersStore];
    self.syncWith(items, handleStickersStoreUpdate);
    const items1 = [UserSettingsProtoStore];
    self.syncWith(items1, handleUserSettingsProtoStoreChange);
  }
  getState() {
    return closure_5;
  }
  hasPendingUsage() {
    return closure_5.pendingUsages.length > 0;
  }
}
Object.defineProperty(StickersPersistedStore.prototype, "stickerFrecencyWithoutFetchingLatest", {
  get: function stickerFrecencyWithoutFetchingLatest() {
    return closure_6;
  },
  set: undefined
});
StickersPersistedStore.displayName = "StickersPersistedStore";
StickersPersistedStore.persistKey = "StickersPersistedStoreV2";
const obj2 = {
  STICKER_TRACK_USAGE: function handleStickersUsage(stickerIds) {
    stickerIds = stickerIds.stickerIds;
    if (stickerIds != null) {
      const item = stickerIds.forEach((key) => {
        closure_1_6.track(key);
        pendingUsages = pendingUsages.pendingUsages;
        const obj = { key, timestamp: Date.now() };
        pendingUsages.push(obj);
      });
    }
    if (StickersStore.isLoaded) {
      closure_6.compute();
    }
  },
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    if (settings.settings.type === UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
      if (settings.wasSaved) {
        closure_5.pendingUsages = [];
      }
    }
    return false;
  }
};
const stickersPersistedStore = new StickersPersistedStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/stickers/StickersPersistedStore.tsx");

export default stickersPersistedStore;
export const STICKER_PACK_NEW_TIMESTAMP_THRESHOLD = DAY;