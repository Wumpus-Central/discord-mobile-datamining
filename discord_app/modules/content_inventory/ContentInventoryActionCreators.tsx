// === Module 13650: ContentInventoryActionCreators ===

// Module 13650 (ContentInventoryActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7487 */;
import ContentInventoryPlatformActionCreatorsAll from "ContentInventoryPlatformActionCreators" /* 13652 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5172 */;
import UserStore from "UserStore" /* 1385 */;
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore" /* 13651 */;

const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export function toggleMemberListContentFeedHidden() {
  DispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  const obj2 = AnalyticsUtilsDefault;
  obj2.track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, { channel_id: SelectedChannelStore.getChannelId(), guild_id: SelectedGuildStore.getGuildId(), hidden: ContentInventoryPersistedStore.hidden });
}
export function onGameProfileOpen() {
  DispatcherDefault.dispatch({ type: "GAME_PROFILE_OPEN" });
}
export function onTapContentInventoryEntryEmbed(authorId) {
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
      items = AnalyticsLocationDefault;
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
}
export function clearDeleteHistoryError() {
  DispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
}