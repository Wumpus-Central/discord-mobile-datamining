// === Module 7202: handleChange ===

// Module 7202 (handleChange)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_0 from "ensureGuildLoaded" /* 1391 */;
import closure_1 from "handleConnectionOpen" /* 1981 */;
import closure_2 from "updateUserGuildSettingsInternal" /* 4653 */;

function handleChange() {
  channelId = channelId.getChannelId();
  if (null != channelId) {
    channel = channel.getChannel(channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const guild_id = channel.guild_id;
        if (null == dependencyMap3[channelId]) {
          dependencyMap3[channelId] = 0;
        }
        if (!channel.isThread()) {
          dependencyMap3[channelId] = dependencyMap3[channelId] + 1;
          if (null == dependencyMap[guild_id]) {
            const _Set = Set;
            const set = new Set();
            tmp6[guild_id] = set;
          }
          if (optInEnabled.isFavorite(guild_id, channelId)) {
            tmp6[guild_id].delete(channelId);
            const obj4 = tmp6[guild_id];
          } else {
            if (null == dependencyMap2[guild_id]) {
              if (dependencyMap3[channelId] > 50) {
                tmp6[guild_id].add(channelId);
                const obj3 = tmp6[guild_id];
              }
            } else {
              const obj2 = tmp12[guild_id];
            }
            return flag;
          }
        }
        delete tmp[tmp2];
        if (null != dependencyMap[guild_id]) {
          dependencyMap[guild_id].delete(channelId);
          const obj5 = dependencyMap[guild_id];
        }
      }
    }
  }
}
let closure_3 = {};
let closure_4 = {};
let closure_5 = {};
const PersistedStore = initializeDefault.PersistedStore;
class FavoritesSuggestionStore extends PersistedStore {
}
const prototype = FavoritesSuggestionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(closure_0, closure_1, closure_2);
  const items = [closure_1];
  this.syncWith(items, handleChange);
  if (null != arg0) {
    ({ suggestedChannels, dismissedSuggestions, channelOpensByChannelId } = arg0);
    if (null != suggestedChannels) {
      for (const key10015 in suggestedChannels) {
        let tmp7 = key10015;
        let tmp8 = closure_3;
        let _Set = Set;
        let tmp9 = new.target;
        let tmp10 = new.target;
        let set = new Set(suggestedChannels[key10015]);
        let tmp12 = set;
        closure_3[key10015] = set;
        continue;
      }
    }
    if (null != dismissedSuggestions) {
      for (const key10019 in dismissedSuggestions) {
        let tmp13 = key10019;
        let tmp14 = closure_4;
        let _Set2 = Set;
        let tmp15 = new.target;
        let tmp16 = new.target;
        let set1 = new Set(dismissedSuggestions[key10019]);
        let tmp18 = set1;
        closure_4[key10019] = set1;
        continue;
      }
    }
    if (channelOpensByChannelId == null) {
      channelOpensByChannelId = {};
    }
  }
};
prototype["getSuggestedChannelId"] = function getSuggestedChannelId(id) {
  return null;
};
prototype["getState"] = function getState() {
  return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
};
FavoritesSuggestionStore.displayName = "FavoritesSuggestionStore";
FavoritesSuggestionStore.persistKey = "FavoritesSuggestionStore";
const favoritesSuggestionStore = new FavoritesSuggestionStore(dispatcherDefault, {
  DISMISS_FAVORITE_SUGGESTION: function handleFavoriteSuggestionDimissed(arg0) {
    ({ guildId, channelId } = arg0);
    if (null == dependencyMap2[guildId]) {
      const _Set = Set;
      const set = new Set();
      tmp[guildId] = set;
    }
    dependencyMap2[guildId].add(channelId);
    dependencyMap[guildId].delete(channelId);
    return true;
  }
});
const result = require("set").fileFinishedImporting("modules/opt_in_channels/FavoritesSuggestionStore.tsx");

export default favoritesSuggestionStore;