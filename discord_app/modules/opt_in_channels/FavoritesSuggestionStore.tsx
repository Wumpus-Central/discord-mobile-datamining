// === Module 7041: FavoritesSuggestionStore ===

// Module 7041 (FavoritesSuggestionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5071 */;
import size from "module_2" /* 2 */;

let set;

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
          if (null == closure_3[guild_id]) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            closure_3[guild_id] = new Set();
            set = new Set();
          }
          if (UserGuildSettingsStore.isFavorite(guild_id, channelId)) {
            const obj4 = closure_3[guild_id];
            obj4.delete(channelId);
          } else {
            if (null == closure_4[guild_id]) {
              if (channelOpensByChannelId[channelId] > 50) {
                const obj3 = closure_3[guild_id];
                obj3.add(channelId);
              }
            }
            return flag;
          }
        }
        delete channelOpensByChannelId[tmp];
        if (null != closure_3[guild_id]) {
          const obj5 = closure_3[guild_id];
          obj5.delete(channelId);
        }
      }
    }
  }
}
let closure_3 = {};
let closure_4 = {};
let channelOpensByChannelId = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class FavoritesSuggestionStore extends PersistedStore {
  initialize(arg0) {
    let dismissedSuggestions;
    let suggestedChannels;
    this.waitFor(ChannelStore, SelectedChannelStore, UserGuildSettingsStore);
    const items = [SelectedChannelStore];
    this.syncWith(items, handleChange);
    if (null != arg0) {
      ({ suggestedChannels, dismissedSuggestions, channelOpensByChannelId } = arg0);
      if (null != suggestedChannels) {
        for (const key10015 in suggestedChannels) {
          let _Set = Set;
          let self = this;
          let self2 = this;
          set = new Set(suggestedChannels[key10015]);
          closure_3[key10015] = set;
          continue;
        }
      }
      if (null != dismissedSuggestions) {
        for (const key10019 in dismissedSuggestions) {
          let _Set2 = Set;
          let self3 = this;
          let self4 = this;
          let set1 = new Set(dismissedSuggestions[key10019]);
          closure_4[key10019] = set1;
          continue;
        }
      }
      if (channelOpensByChannelId == null) {
        channelOpensByChannelId = {};
      }
    }
  }
  getSuggestedChannelId() {
    return null;
  }
  getState() {
    return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
  }
}
const prototype = FavoritesSuggestionStore.prototype;
FavoritesSuggestionStore.displayName = "FavoritesSuggestionStore";
FavoritesSuggestionStore.persistKey = "FavoritesSuggestionStore";
let obj = {
  DISMISS_FAVORITE_SUGGESTION: function handleFavoriteSuggestionDimissed(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (null == closure_4[guildId]) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      closure_4[guildId] = new Set();
      set = new Set();
    }
    const obj = closure_4[guildId];
    obj.add(channelId);
    const obj2 = closure_3[guildId];
    obj2.delete(channelId);
    return true;
  }
};
const favoritesSuggestionStore = new FavoritesSuggestionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/opt_in_channels/FavoritesSuggestionStore.tsx");

export default favoritesSuggestionStore;