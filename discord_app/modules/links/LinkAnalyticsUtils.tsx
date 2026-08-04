import { AnalyticEvents } from "ME";

let closure_4 = { MESSAGE: "Discord Message Link", CHANNEL: "Discord Channel Link", SERVER_INVITE: "Discord Server Invite", GIFT: "Discord Gift Link", UNKNOWN: "Unknown", DISCOVERY: "Discord Discovery Link" };
const items = [
  (arr) => {
    let SERVER_INVITE = null;
    if (obj.isInvite(arr)) {
      SERVER_INVITE = constants.SERVER_INVITE;
    }
    return SERVER_INVITE;
  },
  (target) => {
    let channelId;
    let guildId;
    const safeParseWithQueryResult = importDefault(1467).safeParseWithQuery(target);
    if (null == safeParseWithQueryResult) {
      return null;
    } else {
      const tryParseChannelPathResult = require(4476) /* ME */.tryParseChannelPath(safeParseWithQueryResult.path);
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
      const obj2 = require(4476) /* ME */;
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
const result = require("isDiscordProxiedAssetUrl").fileFinishedImporting("modules/links/LinkAnalyticsUtils.tsx");

export default {
  trackDiscordLinkClicked(guildId) {
    importDefault(698);
    if (null != guildId.guildId) {
      if (null != guildId.channelId) {
        if (null != guildId.messageId) {
          let UNKNOWN = constants.MESSAGE;
        }
        const obj = { is_discord_link: true, discord_link_type: null };
        obj[1] = UNKNOWN;
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
  trackLinkClicked(closure_1) {
    if (null != closure_1) {
      let obj = importDefault(1467);
      let tmp3 = obj.isDiscordUrl(closure_1, true) || null != arg1;
      importDefault(698);
      obj = { is_discord_link: null, discord_link_type: null };
      obj[0] = tmp3;
      if (!tmp3) {
        obj[1] = null;
        tmp5(tmp7, obj);
      } else {
        if (null != arg1) {
          if (null == arg1) {
            let UNKNOWN = (function getDiscordLinkTypeFromUrl(closure_1) {
              const iter = dependencyMap[Symbol.iterator]();
              while (iter !== undefined) {
                let tmp2 = iter.next()(closure_1);
                let tmp3 = tmp2;
                if (null != tmp2) {
                  let tmp4 = iter;
                  iter.return();
                  return tmp2;
                }
              }
              return constants.UNKNOWN;
            })(closure_1);
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
      const tmp = importDefault;
    }
  },
  trackAnnouncementMessageLinkClicked(arg0) {
    let channelId;
    let guildId;
    let messageId;
    let sourceChannelId;
    let sourceGuildId;
    ({ messageId, channelId, guildId, sourceChannelId, sourceGuildId } = arg0);
    importDefault(698).track(AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, { message_id: messageId, channel_id: channelId, guild_id: guildId, source_channel_id: sourceChannelId, source_guild_id: sourceGuildId });
  }
};