// discord_app/modules/content_inventory/ContentInventoryActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AnalyticsLocationDefault from "../app_analytics/AnalyticsLocation.tsx";
import ContentInventoryPlatformActionCreatorsAll from "ContentInventoryPlatformActionCreators.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import SelectedGuildStore from "../../stores/SelectedGuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ContentInventoryPersistedStore from "ContentInventoryPersistedStore.tsx";

const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  obj = {
    channel_id: SelectedChannelStore.getChannelId(),
    guild_id: SelectedGuildStore.getGuildId(),
    hidden: ContentInventoryPersistedStore.hidden,
  };
  AnalyticsUtilsDefault.track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj);
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
