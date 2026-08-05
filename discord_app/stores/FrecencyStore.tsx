// discord_app/stores/FrecencyStore.tsx
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import closure_6 from "handleConnectionOpen";
import { ID_REGEX } from "ME";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { PersistedStore } from "initialize";

function handleChannelSelect(arg0) {
  let channelId;
  let guildId;
  ({ guildId, channelId } = arg0);
  let flag = false;
  if (channelId !== c10) {
    let tmp2 = channelId;
    if (channelId == null) {
      tmp2 = null;
    }
    c10 = tmp2;
    let isMatch = null != channelId;
    if (isMatch) {
      isMatch = ID_REGEX.test(channelId);
    }
    let flag2 = false;
    if (isMatch) {
      tmp2.track(channelId);
      const pendingUsages = closure_13.pendingUsages;
      let obj = { key: null, timestamp: null };
      obj[0] = channelId;
      const _Date = Date;
      obj[1] = Date.now();
      pendingUsages.push(obj);
      flag2 = true;
    }
    flag = flag2;
  }
  let tmp10 = flag;
  if (guildId !== c11) {
    let tmp12 = guildId;
    if (guildId == null) {
      tmp12 = null;
    }
    c11 = tmp12;
    let isMatch1 = null != guildId;
    if (isMatch1) {
      isMatch1 = ID_REGEX.test(guildId);
    }
    if (isMatch1) {
      tmp2.track(guildId);
      const pendingUsages1 = closure_13.pendingUsages;
      obj = { key: null, timestamp: null };
      obj[0] = guildId;
      const _Date2 = Date;
      obj[1] = Date.now();
      pendingUsages1.push(obj);
      flag = true;
    }
    tmp10 = flag;
  }
  return tmp10;
}
function initFrecency() {
  const guildAndChannelFrecency = obj.frecencyWithoutFetchingLatest.guildAndChannelFrecency;
  let guildAndChannels;
  if (guildAndChannelFrecency != null) {
    guildAndChannels = guildAndChannelFrecency.guildAndChannels;
  }
  if (null == guildAndChannels) {
    return false;
  } else {
    obj = require("../../_runtime/00012_apply.js");
    tmp2.overwriteHistory(obj.mapValues(guildAndChannels, (recentUses) => {
      const obj = {};
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      const mapped = recentUses.map(Number);
      obj.recentUses = mapped.filter((arg0) => arg0 > 0);
      return obj;
    }), closure_13.pendingUsages);
  }
}
let obj = {
  computeBonus() {
    return 100;
  },
  computeWeight(arg0) {
    let num = 100;
    if (0 !== arg0) {
      if (arg0 < 1) {
        if (arg0 < 2) {
          if (arg0 < 4) {
            num = 1;
            if (arg0 >= 7) {
              num = 10;
            }
          } else {
            num = 30;
          }
        } else {
          num = 50;
        }
      } else {
        num = 70;
      }
    }
    return num;
  },
  lookupKey(id) {
    guild = guild.getGuild(id);
    if (guild == null) {
      guild = authStore.getChannel(id);
    }
    if (guild == null) {
      guild = authStore.getChannel(authStore.getDMFromUserId(id));
    }
    return guild;
  },
  afterCompute() {

  },
  numFrequentlyItems: 100,
  maxSamples: 10
};
let c9 = new require("DEFAULT_FRECENCY")(obj);
let c10 = null;
let c11 = null;
let closure_13 = { pendingUsages: [] };
class FrecencyStore extends PersistedStore {
}
const prototype = FrecencyStore.prototype;
prototype["initialize"] = function initialize(pendingUsages) {
  const self = this;
  this.waitFor(ensureGuildLoaded, createGuildRecordFromRust, handleConnectionOpen, closure_6, handleConnectionClosedOrResumed);
  if (null != pendingUsages) {
    pendingUsages = pendingUsages.pendingUsages;
    pendingUsages.pendingUsages = pendingUsages.filter((key) => {
      let isMatch = null != key;
      if (isMatch) {
        isMatch = regex.test(key.key);
      }
      return isMatch;
    });
    let closure_13 = pendingUsages;
  }
  const items = [handleConnectionClosedOrResumed];
  self.syncWith(items, initFrecency);
};
prototype["getState"] = function getState() {
  return closure_13;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return closure_13.pendingUsages.length > 0;
};
Object.defineProperty(prototype, "frecencyWithoutFetchingLatest", {
  get: function frecencyWithoutFetchingLatest() {
    return closure_9;
  },
  set: undefined
});
prototype["getFrequentlyWithoutFetchingLatest"] = function getFrequentlyWithoutFetchingLatest() {
  return tmp2.frequently;
};
prototype["getScoreWithoutFetchingLatest"] = function getScoreWithoutFetchingLatest(id) {
  let num = tmp2.getFrecency(id);
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getScoreForDMWithoutFetchingLatest"] = function getScoreForDMWithoutFetchingLatest(id) {
  const dMFromUserId = authStore.getDMFromUserId(id);
  let num = 0;
  if (null != dMFromUserId) {
    const self = this;
    num = this.getScoreWithoutFetchingLatest(dMFromUserId);
  }
  return num;
};
prototype["getMaxScore"] = function getMaxScore() {
  return 1000;
};
prototype["getBonusScore"] = function getBonusScore() {
  return 100;
};
prototype["getVersion"] = function getVersion() {
  return tmp2.version;
};
FrecencyStore.displayName = "FrecencyStore";
FrecencyStore.persistKey = "FrecencyStore";
obj = {
  CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let flag = !tmp;
    if (!(settings.settings.type !== UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !settings.wasSaved)) {
      closure_13.pendingUsages = [];
      flag = true;
    }
    return flag;
  }
};
const frecencyStore = new FrecencyStore(require("dispatcher"), obj);
let tmp2 = new require("DEFAULT_FRECENCY")(obj);
const result = require("createGuildRecordFromRust").fileFinishedImporting("stores/FrecencyStore.tsx");

export default frecencyStore;
export const MAX_NUM_SELECTED_ITEMS = 100;