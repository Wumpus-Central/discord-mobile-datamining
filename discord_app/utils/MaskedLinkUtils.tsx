// discord_app/utils/MaskedLinkUtils.tsx
import openURLDefault from "../lib/openURL.tsx";
import LinkAnalyticsUtilsDefault from "../modules/links/LinkAnalyticsUtils.tsx";
import BlockedDomainStore from "../modules/blocked_domains/BlockedDomainStore.tsx";
import ChannelStore_mod from "../stores/ChannelStore.tsx";
import GuildStore from "../stores/GuildStore.tsx";
import MaskedLinkStore from "../stores/MaskedLinkStore.tsx";
import MessageStore from "../stores/MessageStore.tsx";
import RelationshipStore from "../stores/RelationshipStore.tsx";
import SelectedChannelStore from "../stores/SelectedChannelStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c10;
let closure_12;
let map1;
let unpackModuleId;
let ChannelStore = ChannelStore_mod;
({ ChannelTypes: c10, AnalyticEvents: unpackModuleId, GuildFeatures: closure_12, MessageFlags: map1 } = Constants);
let result = size.fileFinishedImporting("utils/MaskedLinkUtils.tsx");

export const isLinkTrusted = function isLinkTrusted(url, url2) {
  const channel = ChannelStore.getChannel(SelectedChannelStore.getChannelId());
  let tmp = null != channel && channel.type === constants.DM;
  if (tmp) {
    const isFriend = RelationshipStore.isFriend;
    let str = channel.getRecipientId();
    if (str == null) {
      str = "";
    }
    tmp = !isFriend(str);
  }
  return !tmp && url === url2;
};
export const handleClick = function handleClick(href, preventDefault, arg2) {
  let c0;
  let c2;
  let channelId;
  let closure_4;
  let intl;
  let intl2;
  let messageId;
  let obj3;
  let obj4;
  let onCancel;
  let onClick;
  let shouldConfirm;
  let trusted;
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
  let obj = channelId(1936);
  const sanitizeUrlResult = obj.sanitizeUrl(href.href);
  if (null == sanitizeUrlResult) {
    if (null != preventDefault) {
      preventDefault.preventDefault();
    }
    let obj2 = {
      title: intl.string(require("intl").t.x87gan),
      body: intl2.format(require("intl").t["9rqRwl"], obj3),
      isDismissable: true,
      contextKey,
    };
    const show3 = channelId(5707).show;
    channelId(5707);
    intl = require("intl").intl;
    intl2 = require("intl").intl;
    obj3 = { url: href.href };
    show3(obj2);
    onCancel();
  } else {
    let tmp6;
    dependencyMap = sanitizeUrlResult;
    try {
      const _decodeURI = decodeURI;
      decodeURI(sanitizeUrlResult);
      tmp6 = sanitizeUrlResult;
    } catch (err) {
      const _encodeURI = encodeURI;
      const encodeURIResult = encodeURI(sanitizeUrlResult);
      dependencyMap = encodeURIResult;
      tmp6 = encodeURIResult;
    }
    ChannelStore = false;
    message_id = messageId;
    channel_id = channelId;
    guild_id1 = null;
    let tmp9 = null;
    let tmp10 = channelId;
    let tmp11 = messageId;
    let flag2 = false;
    let tmp12 = null;
    if (null != messageId) {
      tmp9 = null;
      tmp10 = channelId;
      tmp11 = messageId;
      flag2 = false;
      tmp12 = null;
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
        let tmp20 = null != guild_id2;
        if (tmp20) {
          let webhookId;
          if (message != null) {
            webhookId = message.webhookId;
          }
          tmp20 = null != webhookId;
        }
        if (tmp20) {
          let hasFlagResult;
          if (message != null) {
            hasFlagResult = message.hasFlag(constants4.IS_CROSSPOST);
          }
          tmp20 = hasFlagResult;
        }
        if (tmp20) {
          tmp20 = null != guild_id1;
        }
        if (tmp20) {
          let tmp25;
          let tmp26;
          let tmp27;
          let hasFlagResult1;
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
            tmp25 = guild_id;
            tmp26 = channel_id;
            tmp27 = message_id;
          }
          let type;
          if (basicChannel != null) {
            type = basicChannel.type;
          }
          let tmp30 = type === constants.GUILD_ANNOUNCEMENT;
          if (tmp30) {
            let hasItem;
            if (guild != null) {
              const features = guild.features;
              hasItem = features.has(constants3.COMMUNITY);
            }
            tmp30 = true === hasItem;
          }
          if (message != null) {
            hasFlagResult1 = message.hasFlag(constants4.EPHEMERAL);
          }
          let tmp35 = null != message && true !== hasFlagResult1;
          if (tmp35) {
            if (!tmp20) {
              tmp20 = tmp30;
            }
            tmp35 = tmp20;
          }
          ChannelStore = tmp35;
          flag2 = tmp35;
          tmp9 = tmp25;
          tmp10 = tmp26;
          tmp11 = tmp27;
          tmp12 = guild_id1;
        }
        tmp25 = guild_id1;
        tmp26 = channelId;
        tmp27 = messageId;
      }
    }
    if (null != channelId) {
      const channel = ChannelStore.getChannel(channelId);
      let guildId;
      const getGuild = message_id.getGuild;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const guild1 = getGuild(guildId);
      let hasItem1 = null != channel && null != guild1;
      if (hasItem1) {
        const features2 = guild1.features;
        hasItem1 = features2.has(constants3.DISCOVERABLE);
      }
      if (hasItem1) {
        const obj5 = { url_domain: obj4.getHostname(tmp6), guild_id: guild1.id, channel_id: channel.id };
        const track = channelId(1252).track;
        const URL_CLICKED = constants2.URL_CLICKED;
        channelId(1252);
        obj4 = require("MaskedLinkStoreMethodsAdditional");
        track(URL_CLICKED, obj5);
      }
      if (channelId(7519)(channelId)) {
        const obj6 = { cta_type: "inline_link", target: tmp6 };
        const tmpResult9 = channelId(1252);
        tmpResult9.track(constants2.CHANGE_LOG_CTA_CLICKED, obj6);
      }
    }
    const tmpResult10 = channelId(8051);
    tmpResult10.trackLinkClicked(tmp6);
    if (null == onClick) {
      const obj7 = { skipExtensionCheck: "a", analyticsLocations: items, messageId, channelId };
      require("getOnClick").default(tmp6, obj7);
    }
    if (null !== guild_id1.isBlockedDomain(tmp6)) {
      if (preventDefault != null) {
        preventDefault.preventDefault();
      }
      const tmpResult11 = channelId(12749);
      tmpResult11.show(tmp6);
      onCancel();
    } else {
      let trustedResult = trusted;
      if (typeof trusted === "function") {
        trustedResult = trusted();
      }
      if (!trustedResult) {
        const TRUSTED_URLS = require("TrustedURLs").TRUSTED_URLS;
        trustedResult = TRUSTED_URLS.has(tmp6);
      }
      const obj9 = require("MaskedLinkStoreMethodsAdditional");
      const protocol = obj9.getProtocol(tmp6);
      function handleConfirm() {
        if (closure_4) {
          const obj2 = {
            messageId: message_id,
            channelId,
            guildId: guild_id1,
            sourceChannelId: channel_id,
            sourceGuildId: guild_id1,
          };
          const obj = LinkAnalyticsUtilsDefault;
          const result = obj.trackAnnouncementMessageLinkClicked(obj2);
        }
        if (null == c0) {
          openURLDefault(c2);
        } else {
          tmp10();
        }
      }
      if (!("http:" === protocol || "https:" === protocol)) {
        if (null != preventDefault) {
          preventDefault.preventDefault();
        }
        if (!("http:" === protocol || "https:" === protocol)) {
          const obj8 = {
            url: tmp6,
            trustUrl: require("MaskedLinkActionCreators").trustProtocol,
            onConfirm: handleConfirm,
            onCancel,
            isProtocol: true,
            contextKey,
          };
          const show2 = channelId(12754).show;
          channelId(12754);
          show2(obj8);
        } else {
          const tmp52Result = require("MarkupLinkRule");
          const punycodeLinkResult = tmp52Result.punycodeLink(tmp6);
          let displayTarget = tmp6;
          if (null != punycodeLinkResult) {
            displayTarget = punycodeLinkResult.displayTarget;
          }
          const obj10 = {
            url: displayTarget,
            trustUrl: require("MaskedLinkActionCreators").trustDomain,
            onConfirm: handleConfirm,
            onCancel,
            isProtocol: false,
            contextKey,
          };
          const show = channelId(12754).show;
          channelId(12754);
          show(obj10);
        }
      }
      if (null == preventDefault) {
        handleConfirm();
      } else if (flag2) {
        const obj11 = { messageId: tmp11, channelId, guildId: tmp12, sourceChannelId: tmp10, sourceGuildId: tmp9 };
        const tmpResult14 = channelId(8051);
        let result = tmpResult14.trackAnnouncementMessageLinkClicked(obj11);
      }
    }
  }
};
