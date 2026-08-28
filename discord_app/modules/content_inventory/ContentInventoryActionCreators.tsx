// === Module 11446: toggleMemberListContentFeedHidden ===

// Module 11446 (toggleMemberListContentFeedHidden)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5938 */;
import showUserProfileAll from "showUserProfile" /* 11448 */;
import closure_3 from "ensureGuildLoaded" /* 1391 */;
import closure_4 from "handleConnectionOpen" /* 1982 */;
import closure_5 from "handleConnectionOpen" /* 4268 */;
import closure_6 from "mergeGuildAvatar" /* 1923 */;
import closure_7 from "updateImpressionCaches" /* 11447 */;
import { AnalyticEvents } from "ME" /* 676 */;

const result = require("set").fileFinishedImporting("modules/content_inventory/ContentInventoryActionCreators.tsx");

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
      const obj2 = showUserProfileAll;
    }
  }
};
export const clearDeleteHistoryError = function clearDeleteHistoryError() {
  dispatcherDefault.dispatch({ type: "CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR" });
};