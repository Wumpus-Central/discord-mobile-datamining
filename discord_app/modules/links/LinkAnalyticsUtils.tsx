// === Module 8375: LinkAnalyticsUtils ===

// Module 8375 (LinkAnalyticsUtils)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import LinkUtils from "LinkUtils" /* 4714 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const constants = { MESSAGE: "Discord Message Link", CHANNEL: "Discord Channel Link", SERVER_INVITE: "Discord Server Invite", GIFT: "Discord Gift Link", UNKNOWN: "Unknown", DISCOVERY: "Discord Discovery Link" };
const items = [
  (substr) => {
    let SERVER_INVITE = null;
    if (obj.isInvite(substr)) {
      SERVER_INVITE = constants.SERVER_INVITE;
    }
    return SERVER_INVITE;
  },
  (target) => {
    const safeParseWithQueryResult = URLUtilsDefault.safeParseWithQuery(target);
    if (null == safeParseWithQueryResult) {
      return null;
    } else {
      const tryParseChannelPathResult = LinkUtils.tryParseChannelPath(safeParseWithQueryResult.path);
      if (null == tryParseChannelPathResult) {
        return null;
      } else {
        ({ guildId, channelId } = tryParseChannelPathResult);
        if (null != guildId) {
          if (null != channelId) {
            const MESSAGE = constants.MESSAGE;
          }
        }
        if (null != guildId) {
          if (null != channelId) {
            let UNKNOWN = constants.CHANNEL;
          }
        }
        UNKNOWN = constants.UNKNOWN;
      }
    }
  },
  (arg0) => {
    let DISCOVERY = null;
    if (obj.isDiscoveryLink(arg0)) {
      DISCOVERY = constants.DISCOVERY;
    }
    return DISCOVERY;
  }
];
const result = size.fileFinishedImporting("modules/links/LinkAnalyticsUtils.tsx");

export default {
  trackDiscordLinkClicked(guildId) {
    AnalyticsUtilsDefault;
    if (null != guildId.guildId) {
      if (null != guildId.channelId) {
        if (null != guildId.messageId) {
          let UNKNOWN = constants.MESSAGE;
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
  trackLinkClicked(ctaLink, arg1) {
    if (null != ctaLink) {
      let obj = URLUtilsDefault;
      let tmp3 = obj.isDiscordUrl(ctaLink, true) || null != arg1;
      AnalyticsUtilsDefault;
      obj = { is_discord_link: tmp3, discord_link_type: null };
      if (!tmp3) {
        obj.discord_link_type = null;
        tmp5(tmp7, obj);
      } else {
        if (null != arg1) {
          if (null == arg1) {
            let UNKNOWN = (function getDiscordLinkTypeFromUrl(ctaLink) {
              const iter = dependencyMap[Symbol.iterator]();
              while (iter !== undefined) {
                let tmp2 = iter.next()(ctaLink);
                if (null != tmp2) {
                  iter.return();
                  return tmp2;
                }
              }
              return constants.UNKNOWN;
            })(ctaLink);
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
        UNKNOWN = constants.UNKNOWN;
      }
    }
  },
  trackAnnouncementMessageLinkClicked(arg0) {
    ({ messageId, channelId, guildId, sourceChannelId, sourceGuildId } = arg0);
    AnalyticsUtilsDefault.track(AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, { message_id: messageId, channel_id: channelId, guild_id: guildId, source_channel_id: sourceChannelId, source_guild_id: sourceGuildId });
  }
};