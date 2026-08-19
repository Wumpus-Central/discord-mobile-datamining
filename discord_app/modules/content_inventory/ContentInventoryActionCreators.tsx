// discord_app/modules/content_inventory/ContentInventoryActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import QUICK_SWITCHERDefault from "../app_analytics/AnalyticsLocation.tsx";
import showUserProfileAll from "ContentInventoryPlatformActionCreators.native.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";
import handleConnectionOpen2 from "../../stores/SelectedGuildStore.tsx";
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import updateImpressionCaches from "ContentInventoryPersistedStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

const result = require("obj132").fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  obj = { channel_id: channelId.getChannelId(), guild_id: guildId.getGuildId(), hidden: hidden.hidden };
  expandEventPropertiesDefault.track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj);
};
export const onGameProfileOpen = function onGameProfileOpen() {
  dispatcherDefault.dispatch({ type: "GAME_PROFILE_OPEN" });
};
export const onTapContentInventoryEntryEmbed = function onTapContentInventoryEntryEmbed(authorId) {
  ({ message, tappedElement } = authorId);
  channel = channel.getChannel(message.channel_id);
  if ("avatar" === tappedElement) {
    user = user.getUser(authorId.authorId);
    if (null != user) {
      let showUserProfileResult = { userId: null, channelId: null, messageId: null, sourceAnalyticsLocations: null };
      showUserProfileResult[0] = user.id;
      let id;
      if (channel != null) {
        id = channel.id;
      }
      showUserProfileResult[1] = id;
      showUserProfileResult[2] = message.id;
      let items = QUICK_SWITCHERDefault;
      if (tmp2) {
        items = [];
        items[0] = items.AVATAR;
        let items1 = items;
      } else {
        items1 = [items.USERNAME];
      }
      showUserProfileResult[3] = items1;
      showUserProfileResult = showUserProfileAll.showUserProfile(showUserProfileResult);
    }
  }
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  dispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};