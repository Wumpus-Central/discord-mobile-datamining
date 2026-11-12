// === Module 10158: trackFeedLoaded ===

// Module 10158 (trackFeedLoaded)
import ICYMITypes from "ICYMITypes" /* 10141 */;
import ICYMIAnalyticsItemId from "ICYMIAnalyticsItemId" /* 10157 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

({ AnalyticEvents: c3, ChannelTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/icymi/trackFeedLoaded.tsx");

export function trackFeedLoaded(unreadFeedItems) {
  items = [];
  const items1 = [];
  const items2 = [];
  const items3 = [];
  unreadFeedItems = unreadFeedItems.unreadFeedItems;
  const item = unreadFeedItems.forEach((item) => {
    let GUILD_ANNOUNCEMENT = item;
    const dehydratedAnalyticsItemId = ICYMIAnalyticsItemId.getDehydratedAnalyticsItemId(item);
    if (null != dehydratedAnalyticsItemId) {
      items.push(dehydratedAnalyticsItemId);
      const type = GUILD_ANNOUNCEMENT.type;
      if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
        GUILD_ANNOUNCEMENT = constants.GUILD_ANNOUNCEMENT;
        let str2 = "message";
        if (GUILD_ANNOUNCEMENT.data.channel_type === GUILD_ANNOUNCEMENT) {
          str2 = "announcement";
        }
        let str = str2;
      } else {
        str = "hotwheels_gaming_activity";
        if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
              str = "recommended_guilds";
              if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS !== type) {
                if (ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM === type) {
                  str = "discover_item";
                }
              }
            }
          }
        }
      }
      items2.push(str);
    }
  });
  const readFeedItems = unreadFeedItems.readFeedItems;
  const item1 = readFeedItems.forEach((item) => {
    let GUILD_ANNOUNCEMENT = item;
    const dehydratedAnalyticsItemId = ICYMIAnalyticsItemId.getDehydratedAnalyticsItemId(item);
    if (null != dehydratedAnalyticsItemId) {
      items1.push(dehydratedAnalyticsItemId);
      const type = GUILD_ANNOUNCEMENT.type;
      if (ICYMITypes.ICYMIItemTypes.MESSAGE === type) {
        GUILD_ANNOUNCEMENT = constants.GUILD_ANNOUNCEMENT;
        let str2 = "message";
        if (GUILD_ANNOUNCEMENT.data.channel_type === GUILD_ANNOUNCEMENT) {
          str2 = "announcement";
        }
        let str = str2;
      } else {
        str = "hotwheels_gaming_activity";
        if (ICYMITypes.ICYMIItemTypes.ACTIVITY !== type) {
          str = "hotwheels_custom_status";
          if (ICYMITypes.ICYMIItemTypes.CUSTOM_STATUS !== type) {
            str = "guild_event";
            if (ICYMITypes.ICYMIItemTypes.GUILD_EVENT !== type) {
              str = "recommended_guilds";
              if (ICYMITypes.ICYMIItemTypes.RECOMMENDED_GUILDS !== type) {
                if (ICYMITypes.ICYMIItemTypes.DISCOVER_ITEM === type) {
                  str = "discover_item";
                }
              }
            }
          }
        }
      }
      items3.push(str);
    }
  });
  const obj3 = {};
  const merged = Object.assign(unreadFeedItems.newTrackingProps);
  ({ homeSessionId: obj2.home_session_id, hasNewContent: obj2.tab_badged } = unreadFeedItems);
  obj3.unread_feed_item_ids = items;
  obj3.read_feed_item_ids = items1;
  obj3.unread_feed_item_types = items2;
  obj3.read_feed_item_types = items3;
  items1(items2[2]).track(items3.FEED_LOADED, obj3);
}