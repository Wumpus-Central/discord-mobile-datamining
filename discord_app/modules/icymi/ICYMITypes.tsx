// === Module 8638: MessageEmbedTypes ===

// Module 8638 (MessageEmbedTypes)
import ME from "ME" /* 673 */;
import set from "set" /* 2 */;

({ ChannelTypes: c0, MessageEmbedTypes } = ME);
const obj = { MESSAGE: 0, [0]: "MESSAGE", ACTIVITY: 2, [2]: "ACTIVITY", CUSTOM_STATUS: 3, [3]: "CUSTOM_STATUS", GUILD_EVENT: 5, [5]: "GUILD_EVENT", RECOMMENDED_GUILDS: 6, [6]: "RECOMMENDED_GUILDS" };
const items = [, ];
({ MESSAGE: arr[0], CUSTOM_STATUS: arr[1] } = obj);
let set = new Set(items);
const items1 = [, ];
({ IMAGE: arr2[0], GIFV: arr2[1] } = MessageEmbedTypes);
const result = set.fileFinishedImporting("modules/icymi/ICYMITypes.tsx");

export const ICYMI_PAGE_SIZE = 15;
export const MIN_ITEMS_FOR_NEW_PILL = 3;
export const MIN_SCORE_FOR_NEW_PILL = 50;
export const GAME_CONTENT_GUILD_ID = "1312632705086787756";
export const ICYMIItemTypes = obj;
export const typeToString = function typeToString(type) {
  type = type.type;
  if (obj.MESSAGE === type) {
    let str5 = "announcement";
    if (type.data.channel_type !== constants.GUILD_ANNOUNCEMENT) {
      const message_context = type.data.message_context;
      let prop;
      if (message_context != null) {
        prop = message_context.external_content_application_id;
      }
      let str6 = "message";
      if (null != prop) {
        str6 = "game_message";
      }
      str5 = str6;
    }
    return str5;
  } else if (tmp.ACTIVITY === type) {
    return "hotwheels_gaming_activity";
  } else if (tmp.CUSTOM_STATUS === type) {
    return "hotwheels_custom_status";
  } else if (tmp.GUILD_EVENT === type) {
    return "guild_event";
  } else if (tmp.RECOMMENDED_GUILDS === type) {
    return "recommended_guilds";
  }
};
export const SUPPORTED_ITEM_TYPES = set;
export const GRAVITY_VALID_EMBED_TYPES = new Set(items1);
export const GravityICYMIDoubleTapBehavior = { DEFAULT: 0, [0]: "DEFAULT", BOOKMARKS: 2, [2]: "BOOKMARKS" };
export const ContentType = { POPULAR_MESSAGE: "POPULAR_MESSAGE", IMAGE: "IMAGE", VIDEO: "VIDEO", LINK: "LINK", THREAD: "THREAD", CHANGED_STATUS: "CHANGED_STATUS", INTERESTING: "INTERESTING", ANNOUNCEMENT: "ANNOUNCEMENT", FORUM_POST: "FORUM_POST", FILE: "FILE" };