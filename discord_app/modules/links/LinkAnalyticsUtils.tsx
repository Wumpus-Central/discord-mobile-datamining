// discord_app/modules/links/LinkAnalyticsUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import isDiscordProxiedAssetUrlDefault from "../../utils/URLUtils.tsx";
import ME2 from "LinkUtils.tsx";

const AnalyticEvents = ME.AnalyticEvents;
let closure_4 = { MESSAGE: "Discord Message Link", CHANNEL: "Discord Channel Link", SERVER_INVITE: "Discord Server Invite", GIFT: "Discord Gift Link", UNKNOWN: "Unknown", DISCOVERY: "Discord Discovery Link" };
const items = [
  (substr) => {
    let SERVER_INVITE = null;
    if (obj.isInvite(substr)) {
      SERVER_INVITE = constants.SERVER_INVITE;
    }
    return SERVER_INVITE;
  },
  (target) => {
    const safeParseWithQueryResult = isDiscordProxiedAssetUrlDefault.safeParseWithQuery(target);
    if (null == safeParseWithQueryResult) {
      return null;
    } else {
      const tryParseChannelPathResult = ME2.tryParseChannelPath(safeParseWithQueryResult.path);
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
const result = obj132.fileFinishedImporting("modules/links/LinkAnalyticsUtils.tsx");

export default {
  trackDiscordLinkClicked(guildId) {
    expandEventPropertiesDefault;
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
      let obj = isDiscordProxiedAssetUrlDefault;
      let tmp3 = obj.isDiscordUrl(closure_1, true) || null != arg1;
      expandEventPropertiesDefault;
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
                if (null != tmp2) {
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
    }
  },
  trackAnnouncementMessageLinkClicked(arg0) {
    ({ messageId, channelId, guildId, sourceChannelId, sourceGuildId } = arg0);
    expandEventPropertiesDefault.track(AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, { message_id: messageId, channel_id: channelId, guild_id: guildId, source_channel_id: sourceChannelId, source_guild_id: sourceGuildId });
  }
};