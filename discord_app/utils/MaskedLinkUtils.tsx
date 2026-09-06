// === Module 8370: MaskedLinkUtils ===

// Module 8370 (MaskedLinkUtils)
import openURLDefault from "openURL" /* 4249 */;
import LinkAnalyticsUtilsDefault from "LinkAnalyticsUtils" /* 8375 */;
import BlockedDomainStore from "BlockedDomainStore" /* 8371 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import MaskedLinkStore from "MaskedLinkStore" /* 8372 */;
import MessageStore from "MessageStore" /* 4781 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const require = fn;
const Constants = fn(1074);
({ ChannelTypes: c10, AnalyticEvents: closure_11, GuildFeatures: closure_12, MessageFlags: map1 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("utils/MaskedLinkUtils.tsx");

export const isLinkTrusted = function isLinkTrusted(url, url2) {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.type === constants.DM;
  }
  if (tmp) {
    let str = channel.getRecipientId();
    if (str == null) {
      str = "";
    }
    tmp = !RelationshipStore.isFriend(str);
  }
  let tmp4 = !tmp;
  if (!tmp) {
    tmp4 = url === url2;
  }
  return tmp4;
};
export const handleClick = function handleClick(href, preventDefault, arg2) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  _require = undefined;
  channelId = undefined;
  dependencyMap = undefined;
  ChannelStore = undefined;
  let message_id;
  let channel_id;
  let guild_id;
  ({ trusted, onClick, onConfirm: c0, onCancel, shouldConfirm, messageId, channelId } = href);
  let obj = channelId(4257);
  const sanitizeUrlResult = obj.sanitizeUrl(href.href);
  if (null == sanitizeUrlResult) {
    if (null != preventDefault) {
      preventDefault.preventDefault();
    }
    let tmp3Result = tmp3(4904);
    obj = { title: null, body: null, isDismissable: true, contextKey: null };
    const intl = require("util").intl;
    obj.title = intl.string(require("util").t.x87gan);
    const intl2 = require("util").intl;
    obj = { url: href.href };
    obj.body = intl2.format(require("util").t["9rqRwl"], obj);
    obj.contextKey = contextKey;
    tmp3Result.show(obj);
  } else {
    dependencyMap = sanitizeUrlResult;
    try {
      const _decodeURI = decodeURI;
      decodeURI(sanitizeUrlResult);
      let tmp8 = sanitizeUrlResult;
      guild_id = null;
      ChannelStore = false;
      message_id = messageId;
      channel_id = channelId;
      guild_id = null;
      let tmp11 = null;
      let tmp12 = channelId;
      let tmp13 = messageId;
      let flag2 = false;
      let tmp14 = null;
      if (null != messageId) {
        tmp11 = null;
        tmp12 = channelId;
        tmp13 = messageId;
        flag2 = false;
        tmp14 = null;
        if (null != channelId) {
          const message = guild_id.getMessage(channelId, messageId);
          const basicChannel = ChannelStore.getBasicChannel(channelId);
          guild_id = undefined;
          if (basicChannel != null) {
            guild_id = basicChannel.guild_id;
          }
          if (guild_id == null) {
            guild_id = null;
          }
          const guild = message_id.getGuild(guild_id);
          let guild_id1;
          if (message != null) {
            const messageReference = message.messageReference;
            if (messageReference != null) {
              guild_id1 = messageReference.guild_id;
            }
          }
          let tmp22 = null != guild_id1;
          if (tmp22) {
            let webhookId;
            if (message != null) {
              webhookId = message.webhookId;
            }
            tmp22 = null != webhookId;
          }
          if (tmp22) {
            let hasFlagResult;
            if (message != null) {
              hasFlagResult = message.hasFlag(constants4.IS_CROSSPOST);
            }
            tmp22 = hasFlagResult;
          }
          if (tmp22) {
            tmp22 = null != guild_id;
          }
          if (tmp22) {
            let guild_id2;
            if (message != null) {
              const messageReference2 = message.messageReference;
              if (messageReference2 != null) {
                guild_id2 = messageReference2.guild_id;
              }
            }
            if (null != guild_id2) {
              message_id = message.messageReference.message_id;
              channel_id = message.messageReference.channel_id;
              guild_id = message.messageReference.guild_id;
              let tmp27 = guild_id;
              let tmp28 = channel_id;
              let tmp29 = message_id;
            }
            let type;
            if (basicChannel != null) {
              type = basicChannel.type;
            }
            let tmp32 = type === constants.GUILD_ANNOUNCEMENT;
            if (tmp32) {
              let hasItem;
              if (guild != null) {
                const features = guild.features;
                hasItem = features.has(constants3.COMMUNITY);
              }
              tmp32 = true === hasItem;
            }
            if (message != null) {
              const hasFlagResult1 = message.hasFlag(constants4.EPHEMERAL);
            }
            let tmp37 = null != message;
            if (tmp37) {
              tmp37 = true !== hasFlagResult1;
            }
            if (tmp37) {
              if (!tmp22) {
                tmp22 = tmp32;
              }
              tmp37 = tmp22;
            }
            ChannelStore = tmp37;
            flag2 = tmp37;
            tmp11 = tmp27;
            tmp12 = tmp28;
            tmp13 = tmp29;
            tmp14 = guild_id;
          }
          tmp27 = guild_id;
          tmp28 = channelId;
          tmp29 = messageId;
        }
      }
      if (null != channelId) {
        const channel = ChannelStore.getChannel(channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        const guild1 = message_id.getGuild(guildId);
        let hasItem1 = null != channel;
        if (hasItem1) {
          hasItem1 = null != guild1;
        }
        if (hasItem1) {
          const features2 = guild1.features;
          hasItem1 = features2.has(constants3.DISCOVERABLE);
        }
        if (hasItem1) {
          tmp3Result = tmp3(1242);
          const obj1 = { url_domain: null, guild_id: null, channel_id: null };
          let obj4 = require("MaskedLinkStoreMethodsAdditional");
          obj1.url_domain = obj4.getHostname(tmp8);
          obj1.guild_id = guild1.id;
          obj1.channel_id = channel.id;
          tmp3Result.track(constants2.URL_CLICKED, obj1);
        }
        if (tmp3(8374)(channelId)) {
          const obj2 = { cta_type: "inline_link", target: tmp8 };
          tmp3(1242).track(constants2.CHANGE_LOG_CTA_CLICKED, obj2);
          const tmp3Result1 = tmp3(1242);
        }
      }
      tmp3(8375).trackLinkClicked(tmp8);
      if (null == onClick) {
        const obj3 = { skipExtensionCheck: "a", analyticsLocations: items, messageId, channelId };
        require("getOnClick").default(tmp8, obj3);
      }
      if (onCancel == null) {
        onCancel = () => {

        };
      }
      if (null !== guild_id.isBlockedDomain(tmp8)) {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        tmp3(12948).show(tmp8);
        const tmp3Result3 = tmp3(12948);
      } else {
        let trustedResult = trusted;
        if (typeof trusted === "function") {
          trustedResult = trusted();
        }
        if (!trustedResult) {
          const TRUSTED_URLS = require("TrustedURLs").TRUSTED_URLS;
          trustedResult = TRUSTED_URLS.has(tmp8);
        }
        const protocol = require("MaskedLinkStoreMethodsAdditional").getProtocol(tmp8);
        let tmp55 = "http:" === protocol;
        if (!tmp55) {
          tmp55 = "https:" === protocol;
        }
        function handleConfirm() {
          if (closure_4) {
            const obj = { messageId: message_id, channelId, guildId: guild_id, sourceChannelId: channel_id, sourceGuildId: guild_id };
            const result = obj.trackAnnouncementMessageLinkClicked(obj);
          }
          if (null == c0) {
            openURLDefault(c2);
          } else {
            tmp9();
          }
        }
        if (!tmp55) {
          if (null != preventDefault) {
            preventDefault.preventDefault();
          }
          if (tmp56) {
            obj4 = { url: tmp8, trustUrl: tmp53(12955).trustProtocol, onConfirm: handleConfirm, onCancel, isProtocol: true, contextKey };
            tmp3(12953).show(obj4);
            const tmp3Result4 = tmp3(12953);
          } else {
            const punycodeLinkResult = tmp53(5001).punycodeLink(tmp8);
            let displayTarget = tmp8;
            if (null != punycodeLinkResult) {
              displayTarget = punycodeLinkResult.displayTarget;
            }
            const tmp53Result = tmp53(5001);
            const obj5 = { url: displayTarget, trustUrl: tmp53(12955).trustDomain, onConfirm: handleConfirm, onCancel, isProtocol: false, contextKey };
            tmp3(12953).show(obj5);
            const tmp3Result5 = tmp3(12953);
          }
        }
        if (null == preventDefault) {
          handleConfirm();
        } else if (flag2) {
          const obj6 = { messageId: tmp13, channelId, guildId: tmp14, sourceChannelId: tmp12, sourceGuildId: tmp11 };
          let result = tmp3(8375).trackAnnouncementMessageLinkClicked(obj6);
          const tmp3Result6 = tmp3(8375);
        }
        const obj10 = require("MaskedLinkStoreMethodsAdditional");
      }
      const tmp3Result2 = tmp3(8375);
    } catch (err) {
      const _encodeURI = encodeURI;
      const encodeURIResult = encodeURI(tmp2);
      dependencyMap = encodeURIResult;
      tmp8 = encodeURIResult;
    }
  }
};