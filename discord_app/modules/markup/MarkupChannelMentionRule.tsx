// === Module 5796: MarkupChannelMentionRule ===

// Module 5796 (MarkupChannelMentionRule)
import intl3 from "intl" /* 1126 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import _modDef1936 from "module_1936" /* 1936 */;
import StringUtils from "StringUtils" /* 2018 */;
import ChannelUtils from "ChannelUtils" /* 5035 */;
import useChannelName from "useChannelName" /* 5043 */;
import LinkUtils from "LinkUtils" /* 5044 */;
import MarkupTextRuleDefault from "MarkupTextRule" /* 5795 */;
import useChannelRoleSubscriptionStatus from "useChannelRoleSubscriptionStatus" /* 5797 */;
import markup_ChannelUtils from "markup/ChannelUtils" /* 5798 */;
import GatedChannelStore from "GatedChannelStore" /* 2104 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
function getChannel(id, arr) {
  let parent_id;
  let tmpResult;
  let tmpResult3;
  let tmpResult4;
  let closure_0 = id;
  const channel = ChannelStore.getChannel(id);
  const obj2 = useChannelRoleSubscriptionStatus;
  const isSubscriptionGated = obj2.getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore).isSubscriptionGated;
  const obj3 = ChannelUtils;
  let str = obj3.getMentionIconType(channel);
  if (str == null) {
    str = "text";
  }
  if (null != arr) {
    const found = arr.find((id) => id.id === closure_0);
    if (null != found) {
      ({ type: obj8.type, id: obj8.id, guild_id: obj8.guildId, name: obj8.name } = found);
      const obj = { type: null, id: null, guildId: null, name: null, isDm: null != channel && channel.isPrivate(), isForumPost: null != channel && channel.isForumPost(), isMentionable: true, canViewChannel: true, roleSubscriptionGated: isSubscriptionGated, iconType: str, parentId: parent_id };
      null != channel && channel.isPrivate();
      parent_id = undefined;
      null != channel && channel.isForumPost();
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      return obj;
    }
  }
  let tmp4 = null;
  if (null != channel) {
    ({ type: obj4.type, id: obj4.id, guild_id: obj4.guildId } = channel);
    const obj5 = { type: null, id: null, guildId: null, name: tmpResult.computeChannelName(channel, UserStore, RelationshipStore), isDm: channel.isPrivate(), isForumPost: channel.isForumPost(), isMentionable: tmpResult3.isChannelTypeMentionable(channel.type), canViewChannel: tmpResult4.canViewChannel(channel), roleSubscriptionGated: isSubscriptionGated, iconType: str, parentId: channel.parent_id };
    tmpResult = useChannelName;
    tmpResult3 = markup_ChannelUtils;
    tmp4 = obj5;
    tmpResult4 = LinkUtils;
  }
  return tmp4;
}
function handleUnknownChannel(guildId, channelId, messageId, guildIdFromChannelId, url) {
  let items1;
  let items2;
  let items3;
  let obj4;
  let obj7;
  let obj8;
  let tmp2;
  const guild = GuildStore.getGuild(guildId);
  const obj = { type: "channelMention", guildId, channelId, messageId, originalLink: url, inContent: tmp2, content: items3 };
  tmp2 = null;
  if (null != guild) {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    tmp2 = null;
    if (id !== guildIdFromChannelId) {
      const obj3 = { type: "guild", guildId: guild.id, content: obj7.truncateText(guild.name, 32), icon: obj8.getGuildIconURL(obj4) };
      obj4 = { id: null, icon: null, size: 40 };
      ({ id: obj9.id, icon: obj9.icon } = guild);
      obj7 = StringUtils;
      const items = [obj3];
      tmp2 = items;
      obj8 = AvatarUtilsDefault;
    }
  }
  const intl = intl3.intl;
  const str = intl.string(intl3.t.zLZPmk);
  const formatted = str.toLowerCase();
  const UNKNOWN = constants.UNKNOWN;
  const obj2 = StringUtils;
  const obj14 = { type: "em", content: items1 };
  const obj6 = { type: "channel", content: items2, channelType: UNKNOWN, iconType: "text" };
  items1 = [{ type: "text", content: obj2.truncateText(formatted, 32) }];
  items2 = [obj14];
  items3 = [obj6];
  ({ type: "text", content: obj2.truncateText(formatted, 32) });
  return obj;
}
function parseChannel(channel, messageId, guildIdFromChannelId, url) {
  let UNKNOWN;
  let items;
  let items1;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj14;
  let obj20;
  let obj26;
  let obj27;
  let obj29;
  let str2;
  let tmp34Result4;
  if (channel.canViewChannel) {
    if (channel.isMentionable) {
      const obj2 = { type: "channelMention", channelId: null, guildId: null, messageId, originalLink: url };
      ({ id: obj5.channelId, guildId: obj5.guildId } = channel);
      const guild = GuildStore.getGuild(channel.guildId);
      if (null == guild) {
        let obj11;
        if (channel.isDm) {
          const obj4 = { guildId, inContent: items1, content: items3 };
          const merged = Object.assign(obj2);
          const obj6 = { type: "text", content: obj20.truncateText(channel.name, 32) };
          const obj7 = { type: "channel", content: items, channelType: null, iconType: null };
          items = [obj6];
          ({ type: obj22.channelType, iconType: obj22.iconType } = channel);
          items1 = [obj7];
          const obj8 = { type: "channel", content: items2, iconType: "message" };
          items2 = [{ type: "text", content: "" }];
          items3 = [obj8];
          obj11 = obj4;
          obj20 = StringUtils;
        } else if (null != url) {
          const obj9 = { type: "link", content: items4, target: url, title: "unicodeVersion" };
          items4 = [{ type: "text", content: url }];
          obj11 = obj9;
          const obj10 = { type: "text", content: url };
        } else {
          const intl2 = intl3.intl;
          const _HermesInternal2 = HermesInternal;
          obj11 = { type: "text", content: "#" + intl2.string(intl3.t.J90oLW) };
        }
        return obj11;
      } else {
        let obj24;
        guildId = channel.guildId;
        const obj12 = {};
        const merged1 = Object.assign(obj2);
        const obj13 = { type: "guild", guildId: guild.id, content: obj26.truncateText(guild.name, 32), icon: obj27.getGuildIconURL(obj14) };
        obj14 = { id: null, icon: null, size: 40 };
        ({ id: obj28.id, icon: obj28.icon } = guild);
        obj26 = StringUtils;
        obj27 = AvatarUtilsDefault;
        const obj15 = { type: "text", content: obj29.truncateText(channel.name, 32) };
        const obj16 = { type: "channel", content: items5, channelType: null, iconType: null };
        items5 = [obj15];
        ({ type: obj31.channelType, iconType: obj31.iconType } = channel);
        const obj17 = { type: "channel", content: items6, iconType: str2 };
        items6 = [{ type: "text", content: "" }];
        str2 = "message";
        obj29 = StringUtils;
        if (channel.isForumPost) {
          str2 = "post";
        }
        if (guildId === guildIdFromChannelId) {
          if (null != messageId) {
            if (channel.isForumPost) {
              channel = ChannelStore.getChannel(channel.parentId);
              if (null != channel) {
                const tmp34Result = useChannelName;
                const channelName = tmp34Result.computeChannelName(channel, UserStore, RelationshipStore);
                const type = channel.type;
                const tmp34Result3 = ChannelUtils;
                let str3 = tmp34Result3.getMentionIconType(channel);
                if (str3 == null) {
                  str3 = "forum";
                }
                const obj18 = { inContent: items8, content: items9 };
                const obj19 = { type: "text", content: tmp34Result4.truncateText(channelName, 32) };
                const obj21 = { type: "channel", content: items7, channelType: type, iconType: str3 };
                items7 = [obj19];
                items8 = [obj21];
                items9 = [obj16];
                obj24 = obj18;
                tmp34Result4 = StringUtils;
              }
            }
            const obj23 = { inContent: items10, content: items11 };
            items10 = [obj16];
            items11 = [obj17];
            obj24 = obj23;
          }
          const merged2 = Object.assign(obj24);
          return obj12;
        }
        if (guildId === guildIdFromChannelId) {
          if (null == messageId) {
            obj24 = { inContent: null, content: items12 };
            items12 = [obj16];
          }
        }
        if (guildId !== guildIdFromChannelId) {
          let obj25;
          if (null != messageId) {
            obj25 = { inContent: items13, content: items14 };
            items13 = [obj13];
            let tmp11 = obj17;
            if (channel.isForumPost) {
              tmp11 = obj16;
            }
            items14 = [tmp11];
          }
          obj24 = obj25;
        }
        let tmp12;
        if (guildId !== guildIdFromChannelId) {
          if (null == messageId) {
            const obj30 = { inContent: items15, content: items16 };
            items15 = [obj13];
            items16 = [obj16];
            tmp12 = obj30;
          }
        }
        obj25 = tmp12;
      }
    } else {
      const _HermesInternal = HermesInternal;
      const obj32 = { type: "text", content: "#" + channel.name };
      return obj32;
    }
  } else {
    let name;
    if (channel.roleSubscriptionGated) {
      name = channel.name;
    } else {
      const intl = intl3.intl;
      name = intl.string(intl3.t["/YzI63"]);
    }
    const obj = { type: "channel", content: items17, channelType: UNKNOWN, iconType: "locked" };
    items17 = [{ type: "text", content: name }];
    const obj56 = { type: "text", content: name };
    if (channel.roleSubscriptionGated) {
      UNKNOWN = channel.type;
    } else {
      UNKNOWN = constants.UNKNOWN;
    }
    const obj57 = { type: "channelMention", guildId: null, channelId: null, messageId, inContent: null, content: items18 };
    ({ guildId: obj3.guildId, id: obj3.channelId } = channel);
    items18 = [obj];
    return obj57;
  }
}
({ ChannelTypes: c9, ME: c10 } = Constants);
let obj = { channelMention: obj2, channelOrMessageUrl: obj3, mediaPostLink: obj4 };
obj2 = {
  order: MarkupTextRuleDefault.order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    const obj = /^<#(\d+)>/;
    return obj.exec(arg0);
  },
  parse(channelId, arg1, returnMentionIds) {
    if (returnMentionIds.returnMentionIds) {
      return { type: "channelMention", id: channelId[1] };
    } else {
      let tmp5Result;
      const tmp3 = getChannel(channelId[1], returnMentionIds.mentionChannels);
      if (null == tmp3) {
        const channel = ChannelStore.getChannel(returnMentionIds.channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp5Result = handleUnknownChannel(null, tmp, null, guildId);
      } else {
        const channel1 = ChannelStore.getChannel(returnMentionIds.channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        tmp5Result = parseChannel(tmp3, null, guildId1);
      }
      return tmp5Result;
    }
  }
};
obj3 = {
  order: _modDef1936.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const CHANNEL_OR_MESSAGES_URL_RE = LinkUtils.CHANNEL_OR_MESSAGES_URL_RE;
    const match = CHANNEL_OR_MESSAGES_URL_RE.exec(arg0);
    if (null != match) {
      if (null != match[2]) {
        const obj = /\D/;
        if (obj.test(match[2])) {
          return null;
        }
      }
      if (null != match[3]) {
        const obj2 = /\D/;
        if (obj2.test(match[3])) {
          return null;
        }
      }
    }
    return match;
  },
  parse(arg0, arg1, channelId) {
    let items;
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    [tmp, tmp2, tmp3, tmp4] = arg0;
    if (null == tmp3) {
      const obj = { type: "link", content: items, target: tmp, title: "unicodeVersion" };
      items = [{ type: "text", content: tmp }];
      return obj;
    } else {
      let tmp5Result;
      const tmp23 = getChannel(tmp3, null);
      if (null == tmp23) {
        const channel = ChannelStore.getChannel(channelId.channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        tmp5Result = handleUnknownChannel(tmp2, tmp3, tmp4, guildId, tmp);
      } else {
        const channel1 = ChannelStore.getChannel(channelId.channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        tmp5Result = parseChannel(tmp23, tmp4, guildId1, tmp);
      }
      return tmp5Result;
    }
  }
};
obj4 = {
  order: _modDef1936.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const MEDIA_POST_URL_RE = LinkUtils.MEDIA_POST_URL_RE;
    return MEDIA_POST_URL_RE.exec(arg0);
  },
  parse(arg0, arg1, channelId) {
    let items;
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    [tmp, tmp2, tmp3, tmp4, tmp5] = arg0;
    if (null != tmp3) {
      if (null != tmp4) {
        const tmp31 = getChannel(tmp4, null);
        if (null != tmp31) {
          const channel = ChannelStore.getChannel(channelId.channelId);
          guildId = undefined;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          return parseChannel(tmp31, tmp5, guildId, tmp);
        } else {
          let tmp6Result;
          const tmp30Result = getChannel(tmp3, null);
          if (null != tmp30Result) {
            const channel1 = ChannelStore.getChannel(channelId.channelId);
            let guildId1;
            if (channel1 != null) {
              guildId1 = channel1.getGuildId();
            }
            tmp6Result = parseChannel(tmp30Result, tmp5, guildId1, tmp);
          } else {
            const channel2 = ChannelStore.getChannel(channelId.channelId);
            let guildId2;
            if (channel2 != null) {
              guildId2 = channel2.getGuildId();
            }
            tmp6Result = handleUnknownChannel(tmp2, tmp3, tmp5, guildId2, tmp);
          }
          return tmp6Result;
        }
      }
    }
    const obj = { type: "link", content: items, target: tmp, title: "unicodeVersion" };
    items = [{ type: "text", content: tmp }];
    return obj;
  }
};
const result = size.fileFinishedImporting("modules/markup/MarkupChannelMentionRule.tsx");

export default obj;
export const getGuildIdFromChannelId = function getGuildIdFromChannelId(channelId) {
  const channel = ChannelStore.getChannel(channelId);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  return guildId;
};
export { getChannel };
export { handleUnknownChannel };
export { parseChannel };