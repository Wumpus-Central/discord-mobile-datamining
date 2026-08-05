// discord_app/modules/stickers/StickersPersistedStore.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { PersistedStore } from "initialize";
import { apply } from "../../../_runtime/00012_apply.js";

function handleStickersStoreUpdate() {
  if (stickerById.isLoaded) {
    tmp2.compute();
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
    obj = apply;
    tmp2.overwriteHistory(obj.mapValues(stickers, (recentUses) => {
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
let closure_6 = new require("DEFAULT_FRECENCY")(obj);
class StickersPersistedStore extends PersistedStore {
}
const prototype = StickersPersistedStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  const self = this;
  this.waitFor(loadSavedGuildStickers, handleConnectionClosedOrResumed);
  if (null != arg0) {
    let closure_5 = arg0;
  }
  const items = [loadSavedGuildStickers];
  self.syncWith(items, handleStickersStoreUpdate);
  const items1 = [handleConnectionClosedOrResumed];
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
      tmp2.compute();
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
const stickersPersistedStore = new StickersPersistedStore(require("dispatcher"), obj);
const tmp2 = new require("DEFAULT_FRECENCY")(obj);
const result = require("MAX_FAVORITES").fileFinishedImporting("modules/stickers/StickersPersistedStore.tsx");

export default stickersPersistedStore;
export const STICKER_PACK_NEW_TIMESTAMP_THRESHOLD = require("set").Millis.DAY;