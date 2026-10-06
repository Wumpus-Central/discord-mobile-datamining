// === Module 8046: trackFeedLoaded ===

// Module 8046 (trackFeedLoaded)
import ICYMITypes from "ICYMITypes" /* 8034 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ AnalyticEvents: c3, ChannelTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/icymi/trackFeedLoaded.tsx");

export const trackFeedLoaded = function trackFeedLoaded(unreadFeedItems) {
  const items = [];
  const items1 = [];
  const items2 = [];
  const items3 = [];
  unreadFeedItems = unreadFeedItems.unreadFeedItems;
  const item = unreadFeedItems.forEach((id) => {
    let str;
    items.push(id.id);
    const type = id.type;
    const push = items2.push;
    if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
      let str2 = "message";
      if (id.data.channel_type === constants.GUILD_ANNOUNCEMENT) {
        str2 = "announcement";
      }
      str = str2;
    } else {
      str = "hotwheels_gaming_activity";
      if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
        str = "hotwheels_custom_status";
        if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
          str = "guild_event";
          if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
            if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
              str = "recommended_guilds";
            }
          }
        }
      }
    }
    push(str);
  });
  const readFeedItems = unreadFeedItems.readFeedItems;
  const item1 = readFeedItems.forEach((id) => {
    let str;
    items1.push(id.id);
    const type = id.type;
    const push = items3.push;
    if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
      let str2 = "message";
      if (id.data.channel_type === constants.GUILD_ANNOUNCEMENT) {
        str2 = "announcement";
      }
      str = str2;
    } else {
      str = "hotwheels_gaming_activity";
      if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
        str = "hotwheels_custom_status";
        if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
          str = "guild_event";
          if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
            if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS === type) {
              str = "recommended_guilds";
            }
          }
        }
      }
    }
    push(str);
  });
  const obj = { unread_feed_item_ids: items, read_feed_item_ids: items1, unread_feed_item_types: items2, read_feed_item_types: items3 };
  const track = items1(items2[1]).track;
  const FEED_LOADED = items3.FEED_LOADED;
  items1(items2[1]);
  const merged = Object.assign(unreadFeedItems.newTrackingProps);
  ({ homeSessionId: obj.home_session_id, hasNewContent: obj.tab_badged } = unreadFeedItems);
  track(FEED_LOADED, obj);
};