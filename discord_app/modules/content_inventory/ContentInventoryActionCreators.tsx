// === Module 12078: ContentInventoryActionCreators ===

// Module 12078 (ContentInventoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7292 */;
import ContentInventoryPlatformActionCreatorsAll from "ContentInventoryPlatformActionCreators" /* 12080 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2012 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4459 */;
import UserStore from "UserStore" /* 1372 */;
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore" /* 12079 */;

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  DispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  const obj2 = AnalyticsUtilsDefault;
  obj2.track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, { channel_id: SelectedChannelStore.getChannelId(), guild_id: SelectedGuildStore.getGuildId(), hidden: ContentInventoryPersistedStore.hidden });
};
export const onGameProfileOpen = function onGameProfileOpen() {
  DispatcherDefault.dispatch({ type: "GAME_PROFILE_OPEN" });
};
export const onTapContentInventoryEntryEmbed = function onTapContentInventoryEntryEmbed(authorId) {
  ({ message, tappedElement } = authorId);
  const channel = ChannelStore.getChannel(message.channel_id);
  if ("avatar" === tappedElement) {
    const user = UserStore.getUser(authorId.authorId);
    if (null != user) {
      let showUserProfileResult = { userId: user.id, channelId: null, messageId: null, sourceAnalyticsLocations: null };
      let id;
      if (channel != null) {
        id = channel.id;
      }
      showUserProfileResult.channelId = id;
      showUserProfileResult.messageId = message.id;
      let items = AnalyticsLocationDefault;
      if (tmp2) {
        items = [];
        items[0] = items.AVATAR;
        let items1 = items;
      } else {
        items1 = [items.USERNAME];
      }
      showUserProfileResult.sourceAnalyticsLocations = items1;
      showUserProfileResult = ContentInventoryPlatformActionCreatorsAll.showUserProfile(showUserProfileResult);
    }
  }
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  DispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};