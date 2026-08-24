// discord_app/modules/stickers/StickersPersistedStore.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import setDefault from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import DEFAULT_FRECENCYDefault from "../../lib/Frecency.tsx";
import closure_2 from "../user_settings/UserSettingsProtoStore.tsx";
import closure_3 from "StickersStore.tsx";
import { UserSettingsTypes } from "../user_settings/UserSettingsConstants.tsx";

function handleStickersStoreUpdate() {
  if (stickerById.isLoaded) {
    closure_6.compute();
  }
}
function handleUserSettingsProtoStoreChange() {
  const stickerFrecency = obj.frecencyWithoutFetchingLatest.stickerFrecency;
  let stickers;
  if (stickerFrecency != null) {
    stickers = stickerFrecency.stickers;
  }
  if (null == stickers) {
    return false;
  } else {
    obj = applyDefault;
    closure_6.overwriteHistory(obj.mapValues(stickers, (recentUses) => {
      const obj = {};
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      const mapped = recentUses.map(Number);
      obj.recentUses = mapped.filter((arg0) => arg0 > 0);
      return obj;
    }), closure_5.pendingUsages);
  }
}
let closure_5 = { pendingUsages: [] };
let obj = {
  computeBonus() {
    return 100;
  },
  lookupKey(arg0) {
    return stickerById.getStickerById(arg0);
  },
  afterCompute() {

  },
  numFrequentlyItems: 20
};
let closure_6 = new DEFAULT_FRECENCYDefault(obj);
const PersistedStore = initializeDefault.PersistedStore;
class StickersPersistedStore extends PersistedStore {
}
const prototype = StickersPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const self = this;
  this.waitFor(closure_3, closure_2);
  if (null != arg0) {
    closure_5 = arg0;
  }
  const items = [closure_3];
  self.syncWith(items, handleStickersStoreUpdate);
  const items1 = [closure_2];
  self.syncWith(items1, handleUserSettingsProtoStoreChange);
};
prototype["getState"] = function getState() {
  return closure_5;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return closure_5.pendingUsages.length > 0;
};
Object.defineProperty(prototype, "stickerFrecencyWithoutFetchingLatest", {
  get: function stickerFrecencyWithoutFetchingLatest() {
    return closure_6;
  },
  set: undefined
});
StickersPersistedStore.displayName = "StickersPersistedStore";
StickersPersistedStore.persistKey = "StickersPersistedStoreV2";
obj = {
  STICKER_TRACK_USAGE: function handleStickersUsage(stickerIds) {
    stickerIds = stickerIds.stickerIds;
    if (stickerIds != null) {
      const item = stickerIds.forEach((key) => {
        closure_6.track(key);
        pendingUsages = pendingUsages.pendingUsages;
        pendingUsages.push({ key, timestamp: Date.now() });
      });
    }
    if (stickerById.isLoaded) {
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
const stickersPersistedStore = new StickersPersistedStore(dispatcherDefault, obj);
const tmp2 = new DEFAULT_FRECENCYDefault(obj);
const result = require("set").fileFinishedImporting("modules/stickers/StickersPersistedStore.tsx");

export default stickersPersistedStore;
export const STICKER_PACK_NEW_TIMESTAMP_THRESHOLD = setDefault.Millis.DAY;