// === Module 5694: FrecencyStore ===

// Module 5694 (FrecencyStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import FrecencyDefault from "Frecency" /* 4927 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;
import size from "module_2" /* 2 */;

let closure_13, recentUses;

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
    const isMatch = null != channelId && ID_REGEX.test(channelId);
    let flag2 = false;
    if (isMatch) {
      closure_9.track(channelId);
      const pendingUsages = closure_13.pendingUsages;
      const _Date = Date;
      const push = pendingUsages.push;
      const obj = { key: channelId, timestamp: Date.now() };
      push(obj);
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
    const isMatch1 = null != guildId && ID_REGEX.test(guildId);
    if (isMatch1) {
      closure_9.track(guildId);
      const pendingUsages1 = closure_13.pendingUsages;
      const _Date2 = Date;
      const push2 = pendingUsages1.push;
      const obj2 = { key: guildId, timestamp: Date.now() };
      push2(obj2);
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
    const overwriteHistory = closure_9.overwriteHistory;
    let obj = _modDef12;
    overwriteHistory(obj.mapValues(guildAndChannels, (recentUses) => {
      let mapped;
      const obj = { recentUses: mapped.filter((item) => item > 0) };
      const merged = Object.assign(recentUses);
      recentUses = recentUses.recentUses;
      mapped = recentUses.map(Number);
      return obj;
    }), closure_13.pendingUsages);
  }
}
const ID_REGEX = Constants.ID_REGEX;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
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
  afterCompute() {

  },
  numFrequentlyItems: 100,
  maxSamples: 10
};
let tmp2 = new FrecencyDefault(obj);
const React4 = tmp2;
let c10 = null;
let c11 = null;
const PersistedStore = get_initializedDefault.PersistedStore;
class FrecencyStore extends PersistedStore {
  initialize(pendingUsages) {
    let regex;
    const self = this;
    this.waitFor(ChannelStore, GuildStore, SelectedChannelStore, SelectedGuildStore, UserSettingsProtoStore);
    if (null != pendingUsages) {
      pendingUsages = pendingUsages.pendingUsages;
      pendingUsages.pendingUsages = pendingUsages.filter((key) => {
        const isMatch = null != key && regex.test(key.key);
        return isMatch;
      });
      closure_13 = pendingUsages;
    }
    const items = [UserSettingsProtoStore];
    self.syncWith(items, initFrecency);
  }
  getState() {
    return closure_13;
  }
  hasPendingUsage() {
    return closure_13.pendingUsages.length > 0;
  }
  getFrequentlyWithoutFetchingLatest() {
    return closure_9.frequently;
  }
  getScoreWithoutFetchingLatest(id) {
    let num = closure_9.getFrecency(id);
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getScoreForDMWithoutFetchingLatest(id) {
    const dMFromUserId = ChannelStore.getDMFromUserId(id);
    let num = 0;
    if (null != dMFromUserId) {
      const self = this;
      num = this.getScoreWithoutFetchingLatest(dMFromUserId);
    }
    return num;
  }
  getMaxScore() {
    return 1000;
  }
  getBonusScore() {
    return 100;
  }
  getVersion() {
    return closure_9.version;
  }
}
Object.defineProperty(FrecencyStore.prototype, "frecencyWithoutFetchingLatest", {
  get: function frecencyWithoutFetchingLatest() {
    return closure_9;
  },
  set: undefined
});
FrecencyStore.displayName = "FrecencyStore";
FrecencyStore.persistKey = "FrecencyStore";
let obj2 = {
  CHANNEL_SELECT: handleChannelSelect,
  VOICE_CHANNEL_SELECT: handleChannelSelect,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    let flag = !(settings.settings.type !== UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !settings.wasSaved);
    if (flag) {
      closure_13.pendingUsages = [];
      flag = true;
    }
    return flag;
  }
};
const frecencyStore = new FrecencyStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/FrecencyStore.tsx");

export default frecencyStore;
export const MAX_NUM_SELECTED_ITEMS = 100;