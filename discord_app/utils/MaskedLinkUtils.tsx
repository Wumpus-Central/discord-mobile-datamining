// discord_app/utils/MaskedLinkUtils.tsx
import closure_3 from "../modules/blocked_domains/BlockedDomainStore.tsx";
import closure_4 from "../stores/ChannelStore.tsx";
import closure_5 from "../stores/GuildStore.tsx";
import closure_6 from "../stores/MaskedLinkStore.tsx";
import closure_7 from "../stores/MessageStore.tsx";
import closure_8 from "../stores/RelationshipStore.tsx";
import closure_9 from "../stores/SelectedChannelStore.tsx";
import ME from "../Constants.tsx";
import { getHostname } from "../stores/MaskedLinkStoreMethodsAdditional.native.tsx";

const require = arg1;
({ ChannelTypes: c10, AnalyticEvents: unpackModuleId, GuildFeatures: closure_12, MessageFlags: map1 } = ME);
let result = require("set").fileFinishedImporting("utils/MaskedLinkUtils.tsx");

export const isLinkTrusted = function isLinkTrusted(arg0, arg1) {
  const channel = store.getChannel(channelId.getChannelId());
  let tmp = null != channel;
  if (tmp) {
    tmp = channel.type === constants.DM;
  }
  if (tmp) {
    let str = channel.getRecipientId();
    if (str == null) {
      str = "";
    }
    tmp = !friend.isFriend(str);
  }
  let tmp4 = !tmp;
  if (!tmp) {
    tmp4 = arg0 === arg1;
  }
  return tmp4;
};
export const handleClick = function handleClick(href, preventDefault) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let _require;
  channelId = undefined;
  dependencyMap = undefined;
  let guild_id;
  let store;
  let message_id;
  let channel_id;
  guild_id = undefined;
  ({ trusted, onClick, onConfirm: c0, onCancel, shouldConfirm, messageId, channelId } = href);
  let obj = channelId(4162);
  const sanitizeUrlResult = obj.sanitizeUrl(href.href);
  if (null == sanitizeUrlResult) {
    if (null != preventDefault) {
      preventDefault.preventDefault();
    }
    let tmp3Result = tmp3(4825);
    obj = { title: null, body: null, isDismissable: true, contextKey: null };
    const intl = require("../intl/index.native.tsx").intl;
    obj[0] = intl.string(require("../intl/index.native.tsx").t.x87gan);
    const intl2 = require("../intl/index.native.tsx").intl;
    obj = { url: null };
    obj[0] = href.href;
    obj[1] = intl2.format(require("../intl/index.native.tsx").t["9rqRwl"], obj);
    obj[3] = arg3;
    tmp3Result.show(obj);
  } else {
    dependencyMap = sanitizeUrlResult;
    try {
      const _decodeURI = decodeURI;
      decodeURI(sanitizeUrlResult);
      let tmp8 = sanitizeUrlResult;
      guild_id = null;
      store = false;
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
          const basicChannel = store.getBasicChannel(channelId);
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
            store = tmp37;
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
        const channel = store.getChannel(channelId);
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
          tmp3Result = tmp3(698);
          obj1 = { url_domain: null, guild_id: null, channel_id: null };
          let obj4 = getHostname;
          obj1[0] = obj4.getHostname(tmp8);
          obj1[1] = guild1.id;
          obj1[2] = channel.id;
          tmp3Result.track(constants2.URL_CLICKED, obj1);
        }
        if (tmp3(8613)(channelId)) {
          const obj2 = { cta_type: "inline_link", target: null };
          obj2[1] = tmp8;
          tmp3(698).track(constants2.CHANGE_LOG_CTA_CLICKED, obj2);
          const tmp3Result1 = tmp3(698);
        }
      }
      tmp3(8614).trackLinkClicked(tmp8);
      if (null == onClick) {
        const obj3 = { skipExtensionCheck: "a", analyticsLocations: -7881303896031234, messageId: 0.00000000000000000000000000000000000007052980861263414, channelId: 57380714359466420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
        obj3[1] = items;
        obj3[2] = messageId;
        obj3[3] = channelId;
        const defaultResult = require("../lib/getOnClick.tsx").default(tmp8, obj3);
      }
      if (onCancel == null) {
        onCancel = () => {

        };
      }
      if (null !== guild_id.isBlockedDomain(tmp8)) {
        if (preventDefault != null) {
          preventDefault.preventDefault();
        }
        tmp3(12779).show(tmp8);
      } else {
        let trustedResult = trusted;
        if (typeof trusted === "function") {
          trustedResult = trusted();
        }
        if (!trustedResult) {
          const TRUSTED_URLS = require("../modules/masked_link/constants/TrustedURLs.tsx").TRUSTED_URLS;
          trustedResult = TRUSTED_URLS.has(tmp8);
        }
        const protocol = require("../stores/MaskedLinkStoreMethodsAdditional.native.tsx").getProtocol(tmp8);
        let tmp55 = "http:" === protocol;
        if (!tmp55) {
          tmp55 = "https:" === protocol;
        }
        function handleConfirm() {
          if (closure_4) {
            let obj = channelId(_undefined[14]);
            obj = { messageId: null, channelId: null, guildId: null, sourceChannelId: null, sourceGuildId: null };
            obj[0] = message_id;
            obj[1] = channelId;
            obj[2] = guild_id;
            obj[3] = channel_id;
            obj[4] = guild_id;
            const result = obj.trackAnnouncementMessageLinkClicked(obj);
          }
          if (null == c0) {
            channelId(_undefined[16])(_undefined);
          } else {
            tmp9();
          }
        }
        if (!tmp55) {
          if (null != preventDefault) {
            preventDefault.preventDefault();
          }
          if (tmp56) {
            obj4 = { url: null, trustUrl: null, onConfirm: null, onCancel: null, isProtocol: true, contextKey: null };
            obj4[0] = tmp8;
            obj4[1] = tmp53(12786).trustProtocol;
            obj4[2] = handleConfirm;
            obj4[3] = onCancel;
            obj4[5] = arg3;
            tmp3(12784).show(obj4);
            const tmp3Result4 = tmp3(12784);
          } else {
            const punycodeLinkResult = tmp53(4922).punycodeLink(tmp8);
            let displayTarget = tmp8;
            if (null != punycodeLinkResult) {
              displayTarget = punycodeLinkResult.displayTarget;
            }
            const tmp53Result = tmp53(4922);
            const obj5 = { url: null, trustUrl: null, onConfirm: null, onCancel: null, isProtocol: false, contextKey: null };
            obj5[0] = displayTarget;
            obj5[1] = tmp53(12786).trustDomain;
            obj5[2] = handleConfirm;
            obj5[3] = onCancel;
            obj5[5] = arg3;
            tmp3(12784).show(obj5);
            const tmp3Result5 = tmp3(12784);
          }
        }
        if (null == preventDefault) {
          handleConfirm();
        } else if (flag2) {
          const obj6 = { messageId: null, channelId: null, guildId: null, sourceChannelId: null, sourceGuildId: null };
          obj6[0] = tmp13;
          obj6[1] = channelId;
          obj6[2] = tmp14;
          obj6[3] = tmp12;
          obj6[4] = tmp11;
          let result = tmp3(8614).trackAnnouncementMessageLinkClicked(obj6);
          const tmp3Result6 = tmp3(8614);
        }
        const obj10 = getHostname;
      }
      const tmp3Result2 = tmp3(8614);
    } catch (err) {
      const _encodeURI = encodeURI;
      const encodeURIResult = encodeURI(tmp2);
      dependencyMap = encodeURIResult;
      tmp8 = encodeURIResult;
    }
  }
};