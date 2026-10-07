// discord_app/modules/opt_in_channels/FavoritesSuggestionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";

function handleChange() {
  const channelId = SelectedChannelStore.getChannelId();
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const guild_id = channel.guild_id;
        if (null == channelOpensByChannelId[channelId]) {
          channelOpensByChannelId[channelId] = 0;
        }
        if (!channel.isThread()) {
          channelOpensByChannelId[channelId] = channelOpensByChannelId[channelId] + 1;
          if (null == dependencyMap[guild_id]) {
            const _Set = Set;
            const set = new Set();
            dependencyMap[guild_id] = set;
          }
          if (UserGuildSettingsStore.isFavorite(guild_id, channelId)) {
            dependencyMap[guild_id].delete(channelId);
          } else {
            if (null == dependencyMap2[guild_id]) {
              if (channelOpensByChannelId[channelId] > 50) {
                dependencyMap[guild_id].add(channelId);
              }
            }
            return flag;
          }
        }
        delete tmp[tmp2];
        if (null != dependencyMap[guild_id]) {
          dependencyMap[guild_id].delete(channelId);
        }
      }
    }
  }
}
const dependencyMap = {};
const dependencyMap2 = {};
const channelOpensByChannelId = {};
const PersistedStore = initializeDefault.PersistedStore;
class FavoritesSuggestionStore extends PersistedStore {}
const prototype = FavoritesSuggestionStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  this.waitFor(ChannelStore, SelectedChannelStore, UserGuildSettingsStore);
  const items = [SelectedChannelStore];
  this.syncWith(items, handleChange);
  if (null != arg0) {
    ({ suggestedChannels, dismissedSuggestions, channelOpensByChannelId } = arg0);
    if (null != suggestedChannels) {
      for (const key10015 in suggestedChannels) {
        let _Set = Set;
        let tmp9 = new.target;
        let tmp10 = new.target;
        let set = new Set(suggestedChannels[key10015]);
        closure_3[key10015] = set;
        continue;
      }
    }
    if (null != dismissedSuggestions) {
      for (const key10019 in dismissedSuggestions) {
        let _Set2 = Set;
        let tmp15 = new.target;
        let tmp16 = new.target;
        let set1 = new Set(dismissedSuggestions[key10019]);
        closure_4[key10019] = set1;
        continue;
      }
    }
    if (channelOpensByChannelId == null) {
      channelOpensByChannelId = {};
    }
  }
};
prototype["getSuggestedChannelId"] = function getSuggestedChannelId() {
  return null;
};
prototype["getState"] = function getState() {
  return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
};
FavoritesSuggestionStore.displayName = "FavoritesSuggestionStore";
FavoritesSuggestionStore.persistKey = "FavoritesSuggestionStore";
const favoritesSuggestionStore = new FavoritesSuggestionStore(DispatcherDefault, {
  DISMISS_FAVORITE_SUGGESTION: function handleFavoriteSuggestionDimissed(arg0) {
    ({ guildId, channelId } = arg0);
    if (null == dependencyMap2[guildId]) {
      const _Set = Set;
      const set = new Set();
      dependencyMap2[guildId] = set;
    }
    dependencyMap2[guildId].add(channelId);
    dependencyMap[guildId].delete(channelId);
    return true;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/opt_in_channels/FavoritesSuggestionStore.tsx");

export default favoritesSuggestionStore;
