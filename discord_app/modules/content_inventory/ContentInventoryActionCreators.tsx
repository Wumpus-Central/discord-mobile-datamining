// discord_app/modules/content_inventory/ContentInventoryActionCreators.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import closure_5 from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateImpressionCaches from "updateImpressionCaches";
import { AnalyticEvents } from "ME";
import { dispatcher } from "../../Dispatcher.tsx";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { QUICK_SWITCHER } from "../app_analytics/AnalyticsLocation.tsx";

const result = require("handleConnectionOpen").fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  let obj = dispatcher;
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  obj = { channel_id: channelId.getChannelId(), guild_id: guildId.getGuildId(), hidden: hidden.hidden };
  expandEventProperties.track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj);
};
export const onGameProfileOpen = function onGameProfileOpen() {
  dispatcher.dispatch({ type: "GAME_PROFILE_OPEN" });
};
export const onTapContentInventoryEntryEmbed = function onTapContentInventoryEntryEmbed(authorId) {
  let message;
  let tappedElement;
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
      let items = QUICK_SWITCHER;
      if (tmp2) {
        items = [];
        items[0] = items.AVATAR;
        let items1 = items;
      } else {
        items1 = [items.USERNAME];
      }
      showUserProfileResult[3] = items1;
      showUserProfileResult = importAll(11395).showUserProfile(showUserProfileResult);
      const obj2 = importAll(11395);
    }
  }
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  dispatcher.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};