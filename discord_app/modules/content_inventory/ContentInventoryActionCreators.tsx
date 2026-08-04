// discord_app/modules/content_inventory/ContentInventoryActionCreators.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import handleConnectionOpen from "handleConnectionOpen";
import closure_5 from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateImpressionCaches from "updateImpressionCaches";
import { AnalyticEvents } from "ME";

const result = require("handleConnectionOpen").fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

export const toggleMemberListContentFeedHidden = function toggleMemberListContentFeedHidden() {
  let obj = importDefault(709);
  obj.dispatch({ type: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN" });
  obj = { channel_id: channelId.getChannelId(), guild_id: guildId.getGuildId(), hidden: hidden.hidden };
  importDefault(698).track(AnalyticEvents.MEMBERLIST_CONTENT_FEED_HIDDEN, obj);
};
export const onGameProfileOpen = function onGameProfileOpen() {
  importDefault(709).dispatch({ type: "GAME_PROFILE_OPEN" });
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
      let items = importDefault(5539);
      if (tmp2) {
        items = [];
        items[0] = items.AVATAR;
        let items1 = items;
      } else {
        items1 = [items.USERNAME];
      }
      showUserProfileResult[3] = items1;
      showUserProfileResult = importAll(11145).showUserProfile(showUserProfileResult);
      const obj2 = importAll(11145);
    }
  }
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  importDefault(709).dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};