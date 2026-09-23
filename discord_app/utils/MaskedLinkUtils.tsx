// discord_app/utils/MaskedLinkUtils.tsx
import openURLDefault from "../lib/openURL.tsx";
import LinkAnalyticsUtilsDefault from "../modules/links/LinkAnalyticsUtils.tsx";
import BlockedDomainStore from "../modules/blocked_domains/BlockedDomainStore.tsx";
import ChannelStore from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import MaskedLinkStore from "../stores/MaskedLinkStore.tsx";
import MessageStore from "../stores/MessageStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";

const require = globalThis.__r;

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
  let guild_id1;
  ({ trusted, onClick, onConfirm: c0, onCancel, shouldConfirm, messageId, channelId } = href);
  if (onCancel == null) {
    onCancel = () => {};
  }
  const sanitizeUrlResult = channelId(1929).sanitizeUrl(href.href);
  if (null == sanitizeUrlResult) {
    if (null != preventDefault) {
      preventDefault.preventDefault();
    }
    let obj2 = { title: null, body: null, isDismissable: true, contextKey: null };
    const intl = require("util").intl;
    obj2.title = intl.string(require("util").t.x87gan);
    const intl2 = require("util").intl;
    const obj3 = { url: href.href };
    obj2.body = intl2.format(require("util").t["9rqRwl"], obj3);
    obj2.contextKey = contextKey;
    tmp3(5193).show(obj2);
    onCancel();
    const tmp3Result = tmp3(5193);
  } else {
    dependencyMap = sanitizeUrlResult;
    try {
      const _decodeURI = decodeURI;
      decodeURI(sanitizeUrlResult);
      let tmp8 = sanitizeUrlResult;
      guild_id1 = null;
      ChannelStore = false;
      message_id = messageId;
      channel_id = channelId;
      guild_id1 = null;
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
          const message = guild_id1.getMessage(channelId, messageId);
          const basicChannel = ChannelStore.getBasicChannel(channelId);
          guild_id1 = undefined;
          if (basicChannel != null) {
            guild_id1 = basicChannel.guild_id;
          }
          if (guild_id1 == null) {
            guild_id1 = null;
          }
          const guild = message_id.getGuild(guild_id1);
          let guild_id2;
          if (message != null) {
            const messageReference = message.messageReference;
            if (messageReference != null) {
              guild_id2 = messageReference.guild_id;
            }
          }
          let tmp22 = null != guild_id2;
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
            tmp22 = null != guild_id1;
          }
          if (tmp22) {
            let guild_id3;
            if (message != null) {
              const messageReference2 = message.messageReference;
              if (messageReference2 != null) {
                guild_id3 = messageReference2.guild_id;
              }
            }
            if (null != guild_id3) {
              message_id = message.messageReference.message_id;
              channel_id = message.messageReference.channel_id;
              const guild_id = message.messageReference.guild_id;
              guild_id1 = guild_id;
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
            tmp14 = guild_id1;
          }
          tmp27 = guild_id1;
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
          const obj4 = { url_domain: null, guild_id: null, channel_id: null };
          const tmp3Result8 = tmp3(1241);
          obj4.url_domain = require("MaskedLinkStoreMethodsAdditional").getHostname(tmp8);
          obj4.guild_id = guild1.id;
          obj4.channel_id = channel.id;
          tmp3Result8.track(constants2.URL_CLICKED, obj4);
          const obj5 = require("MaskedLinkStoreMethodsAdditional");
        }
        if (tmp3(8720)(channelId)) {
          const obj6 = { cta_type: "inline_link", target: tmp8 };
          tmp3(1241).track(constants2.CHANGE_LOG_CTA_CLICKED, obj6);
          const tmp3Result9 = tmp3(1241);
        }
      }
      tmp3(8721).trackLinkClicked(tmp8);
      if (null == onClick) {
        const obj7 = { skipExtensionCheck: "a", analyticsLocations: items, messageId, channelId };
        require("getOnClick").default(tmp8, obj7);
      }
      if (null !== guild_id1.isBlockedDomain(tmp8)) {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        tmp3(13328).show(tmp8);
        onCancel();
        const tmp3Result11 = tmp3(13328);
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
            const obj2 = {
              messageId: message_id,
              channelId,
              guildId: guild_id1,
              sourceChannelId: channel_id,
              sourceGuildId: guild_id1,
            };
            const result = LinkAnalyticsUtilsDefault.trackAnnouncementMessageLinkClicked(obj2);
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
            const obj8 = {
              url: tmp8,
              trustUrl: tmp53(13335).trustProtocol,
              onConfirm: handleConfirm,
              onCancel,
              isProtocol: true,
              contextKey,
            };
            tmp3(13333).show(obj8);
            const tmp3Result12 = tmp3(13333);
          } else {
            const punycodeLinkResult = tmp53(5297).punycodeLink(tmp8);
            let displayTarget = tmp8;
            if (null != punycodeLinkResult) {
              displayTarget = punycodeLinkResult.displayTarget;
            }
            const tmp53Result = tmp53(5297);
            const obj9 = {
              url: displayTarget,
              trustUrl: tmp53(13335).trustDomain,
              onConfirm: handleConfirm,
              onCancel,
              isProtocol: false,
              contextKey,
            };
            tmp3(13333).show(obj9);
            const tmp3Result13 = tmp3(13333);
          }
        }
        if (null == preventDefault) {
          handleConfirm();
        } else if (flag2) {
          const obj11 = { messageId: tmp13, channelId, guildId: tmp14, sourceChannelId: tmp12, sourceGuildId: tmp11 };
          let result = tmp3(8721).trackAnnouncementMessageLinkClicked(obj11);
          const tmp3Result14 = tmp3(8721);
        }
        const obj10 = require("MaskedLinkStoreMethodsAdditional");
      }
      const tmp3Result10 = tmp3(8721);
    } catch (err) {
      const _encodeURI = encodeURI;
      const encodeURIResult = encodeURI(tmp2);
      dependencyMap = encodeURIResult;
      tmp8 = encodeURIResult;
    }
  }
  let obj = channelId(1929);
};
