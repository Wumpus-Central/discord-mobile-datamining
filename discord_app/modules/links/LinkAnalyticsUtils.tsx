// === Module 8061: LinkAnalyticsUtils ===

// Module 8061 (LinkAnalyticsUtils)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import LinkUtils from "LinkUtils" /* 5050 */;
import ValidationUtilsDefault from "ValidationUtils" /* 8062 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const constants = { MESSAGE: "Discord Message Link", CHANNEL: "Discord Channel Link", SERVER_INVITE: "Discord Server Invite", GIFT: "Discord Gift Link", UNKNOWN: "Unknown", DISCOVERY: "Discord Discovery Link", USER_PROFILE: "Discord User Profile Link" };
const items = [
  (substr) => {
    let SERVER_INVITE = null;
    const obj = ValidationUtilsDefault;
    if (obj.isInvite(substr)) {
      SERVER_INVITE = constants.SERVER_INVITE;
    }
    return SERVER_INVITE;
  },
  (target) => {
    let channelId;
    let guildId;
    const obj = URLUtilsDefault;
    const safeParseWithQueryResult = obj.safeParseWithQuery(target);
    if (null == safeParseWithQueryResult) {
      return null;
    } else {
      const obj2 = LinkUtils;
      const tryParseChannelPathResult = obj2.tryParseChannelPath(safeParseWithQueryResult.path);
      let tmp5 = null;
      if (null != tryParseChannelPathResult) {
        let UNKNOWN;
        ({ guildId, channelId } = tryParseChannelPathResult);
        if (null != guildId) {
          if (null != channelId) {
            if (null != tryParseChannelPathResult.messageId) {
              UNKNOWN = constants.MESSAGE;
            }
            tmp5 = UNKNOWN;
          }
        }
        if (null != guildId) {
          if (null != channelId) {
            UNKNOWN = constants.CHANNEL;
          }
        }
        UNKNOWN = constants.UNKNOWN;
      }
      return tmp5;
    }
  },
  (arg0) => {
    let DISCOVERY = null;
    const obj = ValidationUtilsDefault;
    if (obj.isDiscoveryLink(arg0)) {
      DISCOVERY = constants.DISCOVERY;
    }
    return DISCOVERY;
  },
  (target) => {
    const obj = URLUtilsDefault;
    const safeParseWithQueryResult = obj.safeParseWithQuery(target);
    let USER_PROFILE = null;
    if (null != safeParseWithQueryResult) {
      USER_PROFILE = null;
      const obj2 = LinkUtils;
      if (null != obj2.tryParseUserProfilePath(safeParseWithQueryResult.pathname)) {
        USER_PROFILE = constants.USER_PROFILE;
      }
    }
    return USER_PROFILE;
  }
];
let obj = {
  trackDiscordLinkClicked(guildId) {
    let UNKNOWN;
    AnalyticsUtilsDefault;
    if (null != guildId.guildId) {
      if (null != guildId.channelId) {
        if (null != guildId.messageId) {
          UNKNOWN = constants.MESSAGE;
        }
        const obj = { is_discord_link: true, discord_link_type: UNKNOWN };
        tmp2(tmp3, obj);
      }
    }
    if (null != guildId.guildId) {
      if (null != guildId.channelId) {
        UNKNOWN = constants.CHANNEL;
      }
    }
    UNKNOWN = constants.UNKNOWN;
  },
  trackLinkClicked(value, arg1) {
    let tmp6;
    function getDiscordLinkTypeFromUrl(value) {
      const iter = items[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp2 = iter.next()(value);
        if (null != tmp2) {
          iter.return();
          return tmp2;
        }
      }
      return constants.UNKNOWN;
    }
    if (null != value) {
      const obj = URLUtilsDefault;
      let tmp3 = obj.isDiscordUrl(value, true) || null != arg1;
      const obj2 = { is_discord_link: tmp3, discord_link_type: tmp6 };
      tmp6 = null;
      const track = AnalyticsUtilsDefault.track;
      const LINK_CLICKED = AnalyticEvents.LINK_CLICKED;
      AnalyticsUtilsDefault;
      if (tmp3) {
        let UNKNOWN;
        if (null == arg1) {
          if (null == value) {
            UNKNOWN = constants.UNKNOWN;
          }
          tmp6 = UNKNOWN;
        }
        if (null == arg1) {
          UNKNOWN = getDiscordLinkTypeFromUrl(value);
        } else {
          if (null != arg1.guildId) {
            if (null != arg1.channelId) {
              if (null != arg1.messageId) {
                UNKNOWN = constants.MESSAGE;
              }
            }
          }
          if (null != arg1.guildId) {
            if (null != arg1.channelId) {
              UNKNOWN = constants.CHANNEL;
            }
          }
          UNKNOWN = constants.UNKNOWN;
        }
      }
      track(LINK_CLICKED, obj2);
    }
  },
  trackAnnouncementMessageLinkClicked(arg0) {
    let channelId;
    let guildId;
    let messageId;
    let sourceChannelId;
    let sourceGuildId;
    ({ messageId, channelId, guildId, sourceChannelId, sourceGuildId } = arg0);
    const obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, { message_id: messageId, channel_id: channelId, guild_id: guildId, source_channel_id: sourceChannelId, source_guild_id: sourceGuildId });
  }
};
const result = size.fileFinishedImporting("modules/links/LinkAnalyticsUtils.tsx");

export default obj;