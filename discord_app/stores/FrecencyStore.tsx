// discord_app/stores/FrecencyStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import FrecencyDefault from "../lib/Frecency.tsx";
import UserSettingsProtoStore from "../modules/user_settings/UserSettingsProtoStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildStore from "GuildStore.tsx";
import SelectedChannelStore from "SelectedChannelStore.tsx";
import SelectedGuildStore from "SelectedGuildStore.tsx";

function handleChannelSelect(arg0) {
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
      closure_9.track(channelId);
      const pendingUsages = global.pendingUsages;
      let obj = { key: channelId, timestamp: null };
      const _Date = Date;
      obj.timestamp = Date.now();
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
      closure_9.track(guildId);
      const pendingUsages1 = global.pendingUsages;
      obj = { key: guildId, timestamp: null };
      const _Date2 = Date;
      obj.timestamp = Date.now();
      pendingUsages1.push(obj);
      flag = true;
    }
    tmp10 = flag;
  }
  return tmp10;
}
function initFrecency() {
  const guildAndChannelFrecency = UserSettingsProtoStore.frecencyWithoutFetchingLatest.guildAndChannelFrecency;
  let guildAndChannels;
  if (guildAndChannelFrecency != null) {
    guildAndChannels = guildAndChannelFrecency.guildAndChannels;
  }
  if (null == guildAndChannels) {
    return false;
  } else {
    closure_9.overwriteHistory(
      _modDef12.mapValues(guildAndChannels, (recentUses) => {
        const obj = {};
        const merged = Object.assign(recentUses);
        recentUses = recentUses.recentUses;
        const mapped = recentUses.map(Number);
        obj.recentUses = mapped.filter((item) => item > 0);
        return obj;
      }),
      global.pendingUsages,
    );
  }
}
const ID_REGEX = fn(1074).ID_REGEX;
const UserSettingsTypes = fn(1084).UserSettingsTypes;
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
    let guild = GuildStore.getGuild(id);
    if (guild == null) {
      guild = ChannelStore.getChannel(id);
    }
    if (guild == null) {
      guild = ChannelStore.getChannel(ChannelStore.getDMFromUserId(id));
    }
    return guild;
  },
  afterCompute() {},
  numFrequentlyItems: 100,
  maxSamples: 10,
};
let closure_9 = new FrecencyDefault(obj);
let c10 = null;
let c11 = null;
let global = { pendingUsages: [] };
const PersistedStore = initializeDefault.PersistedStore;
class FrecencyStore extends PersistedStore {}
const prototype = FrecencyStore.prototype;
prototype["initialize"] = function initialize(pendingUsages) {
  const self = this;
  this.waitFor(ChannelStore, GuildStore, SelectedChannelStore, SelectedGuildStore, UserSettingsProtoStore);
  if (null != pendingUsages) {
    pendingUsages = pendingUsages.pendingUsages;
    pendingUsages.pendingUsages = pendingUsages.filter((key) => {
      let isMatch = null != key;
      if (isMatch) {
        isMatch = regex.test(key.key);
      }
      return isMatch;
    });
    global = pendingUsages;
  }
  const items = [UserSettingsProtoStore];
  self.syncWith(items, initFrecency);
};
prototype["getState"] = function getState() {
  return global;
};
prototype["hasPendingUsage"] = function hasPendingUsage() {
  return global.pendingUsages.length > 0;
};
Object.defineProperty(prototype, "frecencyWithoutFetchingLatest", {
  get: function frecencyWithoutFetchingLatest() {
    return closure_9;
  },
  set: undefined,
});
prototype["getFrequentlyWithoutFetchingLatest"] = function getFrequentlyWithoutFetchingLatest() {
  return closure_9.frequently;
};
prototype["getScoreWithoutFetchingLatest"] = function getScoreWithoutFetchingLatest(id) {
  let num = closure_9.getFrecency(id);
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype["getScoreForDMWithoutFetchingLatest"] = function getScoreForDMWithoutFetchingLatest(id) {
  const dMFromUserId = ChannelStore.getDMFromUserId(id);
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
  return closure_9.version;
};
FrecencyStore.displayName = "FrecencyStore";
FrecencyStore.persistKey = "FrecencyStore";
obj = {
  CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let flag = !tmp;
    if (!(settings.settings.type !== UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !settings.wasSaved)) {
      global.pendingUsages = [];
      flag = true;
    }
    return flag;
  },
};
const frecencyStore = new FrecencyStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("stores/FrecencyStore.tsx");

export default frecencyStore;
export const MAX_NUM_SELECTED_ITEMS = 100;
