// discord_app/modules/markup/MarkupChannelMentionRule.tsx
import util from "../../intl/index.native.tsx";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import StringUtils from "../../utils/StringUtils.tsx";
import _modDef4257 from "../../../_runtime/metro/04257__.js";
import ChannelUtils from "../../utils/ChannelUtils.tsx";
import useChannelName from "../channel/useChannelName.tsx";
import LinkUtils from "../links/LinkUtils.tsx";
import MarkupTextRuleDefault from "MarkupTextRule.tsx";
import useChannelRoleSubscriptionStatus from "../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";
import markup_ChannelUtils from "ChannelUtils.tsx";
import GatedChannelStore from "../channel/GatedChannelStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function getChannel(id, arr) {
  closure_0 = id;
  const channel = ChannelStore.getChannel(id);
  const isSubscriptionGated = useChannelRoleSubscriptionStatus.getChannelRoleSubscriptionStatus(
    id,
    ChannelStore,
    GatedChannelStore,
    PermissionStore,
  ).isSubscriptionGated;
  let str = ChannelUtils.getMentionIconType(channel);
  if (str == null) {
    str = "text";
  }
  if (null != arr) {
    const found = arr.find((id) => id.id === closure_0);
    if (null != found) {
      let obj = {
        type: null,
        id: null,
        guildId: null,
        name: null,
        isDm: null,
        isForumPost: null,
        isMentionable: true,
        canViewChannel: true,
        roleSubscriptionGated: null,
        iconType: null,
        parentId: null,
      };
      ({ type: obj8.type, id: obj8.id, guild_id: obj8.guildId, name: obj8.name } = found);
      obj.isDm = null != channel && channel.isPrivate();
      const tmp7 = null != channel && channel.isPrivate();
      obj.isForumPost = null != channel && channel.isForumPost();
      obj.roleSubscriptionGated = isSubscriptionGated;
      obj.iconType = str;
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      obj.parentId = parent_id;
      return obj;
    }
  }
  let tmp4 = null;
  if (null != channel) {
    obj = {
      type: null,
      id: null,
      guildId: null,
      name: null,
      isDm: null,
      isForumPost: null,
      isMentionable: null,
      canViewChannel: null,
      roleSubscriptionGated: null,
      iconType: null,
      parentId: null,
    };
    ({ type: obj4.type, id: obj4.id, guild_id: obj4.guildId } = channel);
    let tmpResult = useChannelName;
    obj.name = tmpResult.computeChannelName(channel, UserStore, RelationshipStore);
    obj.isDm = channel.isPrivate();
    obj.isForumPost = channel.isForumPost();
    tmpResult = markup_ChannelUtils;
    obj.isMentionable = tmpResult.isChannelTypeMentionable(channel.type);
    obj.canViewChannel = LinkUtils.canViewChannel(channel);
    obj.roleSubscriptionGated = isSubscriptionGated;
    obj.iconType = str;
    obj.parentId = channel.parent_id;
    tmp4 = obj;
    const tmpResult1 = LinkUtils;
  }
  return tmp4;
}
function handleUnknownChannel(guildId, channelId, messageId, guildId, originalLink) {
  const guild = GuildStore.getGuild(guildId);
  let obj = { type: "channelMention", guildId, channelId, messageId, originalLink, inContent: null, content: null };
  let tmp2 = null;
  if (null != guild) {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    tmp2 = null;
    if (id !== guildId) {
      obj = { type: "guild", guildId: guild.id, content: StringUtils.truncateText(guild.name, 32), icon: null };
      obj = { id: null, icon: null, size: 40 };
      ({ id: obj9.id, icon: obj9.icon } = guild);
      obj.icon = AvatarUtilsDefault.getGuildIconURL(obj);
      const items = [obj];
      tmp2 = items;
    }
  }
  obj.inContent = tmp2;
  const intl = util.intl;
  const formatted = intl.string(util.t.zLZPmk).toLowerCase();
  let obj1 = StringUtils;
  obj1 = { type: "text", content: obj1.truncateText(formatted, 32) };
  const obj2 = { type: "channel", content: null, channelType: constants.UNKNOWN, iconType: "text" };
  const obj3 = { type: "em", content: null };
  const items1 = [obj1];
  obj3.content = items1;
  const items2 = [obj3];
  obj2.content = items2;
  const items3 = [obj2];
  obj.content = items3;
  return obj;
}
function parseChannel(canViewChannel, messageId, guildId1, originalLink) {
  if (canViewChannel.canViewChannel) {
    if (canViewChannel.isMentionable) {
      let obj = { type: "channelMention", channelId: null, guildId: null, messageId: null, originalLink: null };
      ({ id: obj5.channelId, guildId: obj5.guildId } = canViewChannel);
      obj.messageId = messageId;
      obj.originalLink = originalLink;
      const guild = GuildStore.getGuild(canViewChannel.guildId);
      if (null == guild) {
        if (canViewChannel.isDm) {
          obj = {};
          const merged = Object.assign(obj);
          obj.guildId = guildId;
          let obj19 = StringUtils;
          const obj1 = { type: "text", content: obj19.truncateText(canViewChannel.name, 32) };
          const obj2 = { type: "channel", content: null, channelType: null, iconType: null };
          const items = [obj1];
          obj2.content = items;
          ({ type: obj22.channelType, iconType: obj22.iconType } = canViewChannel);
          const items1 = [obj2];
          obj.inContent = items1;
          const obj3 = { type: "channel", content: null, iconType: null };
          const items2 = [{ type: "text", content: "" }];
          obj3.content = items2;
          obj3.iconType = "message";
          const items3 = [obj3];
          obj.content = items3;
          let obj6 = obj;
        } else if (null != originalLink) {
          const obj4 = { type: "link", content: null, target: null, title: "call" };
          const obj5 = { type: "text", content: originalLink };
          const items4 = [obj5];
          obj4.content = items4;
          obj4.target = originalLink;
          obj6 = obj4;
        } else {
          const intl2 = util.intl;
          const _HermesInternal2 = HermesInternal;
          obj6 = { type: "text", content: "#" + intl2.string(util.t.J90oLW) };
        }
        return obj6;
      } else {
        const obj7 = {};
        const merged1 = Object.assign(obj);
        const obj8 = {
          type: "guild",
          guildId: guild.id,
          content: StringUtils.truncateText(guild.name, 32),
          icon: null,
        };
        ({ id: obj28.id, icon: obj28.icon } = guild);
        obj8.icon = AvatarUtilsDefault.getGuildIconURL({ id: null, icon: null, size: 40 });
        const obj9 = { id: null, icon: null, size: 40 };
        const obj10 = { type: "text", content: StringUtils.truncateText(canViewChannel.name, 32) };
        const obj11 = { type: "channel", content: null, channelType: null, iconType: null };
        const items5 = [obj10];
        obj11.content = items5;
        ({ type: obj31.channelType, iconType: obj31.iconType } = canViewChannel);
        const obj12 = { type: "channel", content: null, iconType: null };
        const items6 = [{ type: "text", content: "" }];
        obj12.content = items6;
        let str2 = "message";
        if (canViewChannel.isForumPost) {
          str2 = "post";
        }
        obj12.iconType = str2;
        if (canViewChannel.guildId === guildId1) {
          if (tmp34) {
            if (canViewChannel.isForumPost) {
              const channel = ChannelStore.getChannel(canViewChannel.parentId);
              if (null != channel) {
                let tmp35Result = useChannelName;
                const channelName = tmp35Result.computeChannelName(channel, UserStore, RelationshipStore);
                tmp35Result = ChannelUtils;
                let str3 = tmp35Result.getMentionIconType(channel);
                if (str3 == null) {
                  str3 = "forum";
                }
                const obj13 = { inContent: null, content: null };
                const obj14 = { type: "text", content: StringUtils.truncateText(channelName, 32) };
                const obj15 = { type: "channel", content: null, channelType: null, iconType: null };
                const items7 = [obj14];
                obj15.content = items7;
                obj15.channelType = channel.type;
                obj15.iconType = str3;
                const items8 = [obj15];
                obj13.inContent = items8;
                const items9 = [obj11];
                obj13.content = items9;
                let obj17 = obj13;
                const tmp35Result1 = StringUtils;
              }
            }
            const obj16 = { inContent: null, content: null };
            const items10 = [obj11];
            obj16.inContent = items10;
            const items11 = [obj12];
            obj16.content = items11;
            obj17 = obj16;
          }
          const merged2 = Object.assign(obj17);
          return obj7;
        }
        if (canViewChannel.guildId === guildId1) {
          if (!tmp34) {
            obj17 = { inContent: null, content: null };
            const items12 = [obj11];
            obj17.content = items12;
          }
        }
        if (canViewChannel.guildId !== guildId1) {
          if (tmp34) {
            let obj18 = { inContent: null, content: null };
            const items13 = [obj8];
            obj18.inContent = items13;
            let tmp11 = obj12;
            if (canViewChannel.isForumPost) {
              tmp11 = obj11;
            }
            const items14 = [tmp11];
            obj18.content = items14;
          }
        }
        let tmp12;
        if (canViewChannel.guildId !== guildId1) {
          if (!tmp34) {
            obj19 = { inContent: null, content: null };
            const items15 = [obj8];
            obj19.inContent = items15;
            const items16 = [obj11];
            obj19.content = items16;
            tmp12 = obj19;
          }
        }
        obj18 = tmp12;
      }
    } else {
      const _HermesInternal = HermesInternal;
      const obj20 = { type: "text", content: "#" + canViewChannel.name };
      return obj20;
    }
  } else {
    if (canViewChannel.roleSubscriptionGated) {
      let name = canViewChannel.name;
    } else {
      const intl = util.intl;
      name = intl.string(util.t["/YzI63"]);
    }
    obj = { type: "channel", content: null, channelType: null, iconType: "locked" };
    const obj21 = { type: "text", content: name };
    const items17 = [obj21];
    obj.content = items17;
    if (canViewChannel.roleSubscriptionGated) {
      let UNKNOWN = canViewChannel.type;
    } else {
      UNKNOWN = constants.UNKNOWN;
    }
    obj.channelType = UNKNOWN;
    const obj22 = {
      type: "channelMention",
      guildId: null,
      channelId: null,
      messageId: null,
      inContent: null,
      content: null,
    };
    ({ guildId: obj3.guildId, id: obj3.channelId } = canViewChannel);
    obj22.messageId = messageId;
    const items18 = [obj];
    obj22.content = items18;
    return obj22;
  }
}
const Constants = fn(1074);
({ ChannelTypes: closure_9, ME: c10 } = Constants);
let obj = { channelMention: null, channelOrMessageUrl: null, mediaPostLink: null };
obj = {
  order: MarkupTextRuleDefault.order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    return /^<#(\d+)>/.exec(arg0);
  },
  parse(channelId, arg1, returnMentionIds) {
    if (returnMentionIds.returnMentionIds) {
      const obj = { type: "channelMention", id: tmp };
      return obj;
    } else {
      const tmp3 = getChannel(tmp, returnMentionIds.mentionChannels);
      if (null == tmp3) {
        const channel = ChannelStore.getChannel(returnMentionIds.channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        let tmp5Result = handleUnknownChannel(null, tmp, null, guildId);
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
  },
};
obj.channelMention = obj;
obj = {
  order: _modDef4257.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const CHANNEL_OR_MESSAGES_URL_RE = LinkUtils.CHANNEL_OR_MESSAGES_URL_RE;
    const match = CHANNEL_OR_MESSAGES_URL_RE.exec(arg0);
    if (null != match) {
      if (null != match[2]) {
        if (obj.test(match[2])) {
          return null;
        }
        obj = /\D/;
      }
      if (null != match[3]) {
        if (obj2.test(match[3])) {
          return null;
        }
        obj2 = /\D/;
      }
    }
    return match;
  },
  parse(arg0, arg1, channelId) {
    [tmp, tmp2, tmp3, tmp4] = arg0;
    if (null == tmp3) {
      let obj = { type: "link", content: null, target: null, title: "call" };
      obj = { type: "text", content: tmp };
      const items = [obj];
      obj.content = items;
      obj.target = tmp;
      return obj;
    } else {
      const tmp23 = getChannel(tmp3, null);
      if (null == tmp23) {
        const channel = ChannelStore.getChannel(channelId.channelId);
        guildId = undefined;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        let tmp5Result = handleUnknownChannel(tmp2, tmp3, tmp4, guildId, tmp);
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
  },
};
obj.channelOrMessageUrl = obj;
obj.mediaPostLink = {
  order: _modDef4257.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const MEDIA_POST_URL_RE = LinkUtils.MEDIA_POST_URL_RE;
    return MEDIA_POST_URL_RE.exec(arg0);
  },
  parse(arg0, arg1, channelId) {
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
          const tmp30Result = getChannel(tmp3, null);
          if (null != tmp30Result) {
            const channel1 = ChannelStore.getChannel(channelId.channelId);
            let guildId1;
            if (channel1 != null) {
              guildId1 = channel1.getGuildId();
            }
            let tmp6Result = parseChannel(tmp30Result, tmp5, guildId1, tmp);
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
    const obj = { type: "link", content: null, target: tmp, title: "call" };
    const items = [{ type: "text", content: tmp }];
    obj.content = items;
    return obj;
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/markup/MarkupChannelMentionRule.tsx");

export default obj;
export const getGuildIdFromChannelId = function getGuildIdFromChannelId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  guildId = undefined;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  return guildId;
};
export { getChannel };
export { handleUnknownChannel };
export { parseChannel };
