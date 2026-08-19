// === Module 11122: toggleMemberListContentFeedHidden ===

// Module 11122 (toggleMemberListContentFeedHidden)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7159 */;
import showUserProfileAll from "showUserProfile" /* 11124 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import handleConnectionOpen2 from "handleConnectionOpen" /* 4197 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import updateImpressionCaches from "updateImpressionCaches" /* 11123 */;
import { AnalyticEvents } from "ME" /* 676 */;

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