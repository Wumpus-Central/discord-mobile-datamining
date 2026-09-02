// discord_app/modules/markup/MarkupChannelMentionRule.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import getAvatarURLDefault from "../../utils/AvatarUtils.tsx";
import isNullOrEmpty from "../../utils/StringUtils.tsx";
import tDefault from "../../../_runtime/04192_t.js";
import ME2 from "../links/LinkUtils.tsx";
import textRegexpDefault from "MarkupTextRule.tsx";
import closure_3 from "../channel/GatedChannelStore.tsx";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/GuildStore.tsx";
import closure_6 from "../../stores/PermissionStore.tsx";
import closure_7 from "../../stores/RelationshipStore.tsx";
import closure_8 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";
import { getChannelRoleSubscriptionStatus } from "../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";

require = arg1;
function getChannel(id, arr) {
  const _require = id;
  const channel = store.getChannel(id);
  const isSubscriptionGated =
    require("../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx").getChannelRoleSubscriptionStatus(
      id,
      store,
      closure_3,
      closure_6,
    ).isSubscriptionGated;
  const obj2 = getChannelRoleSubscriptionStatus;
  let str = require("../../utils/ChannelUtils.tsx").getMentionIconType(channel);
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
      ({ type: obj8[0], id: obj8[1], guild_id: obj8[2], name: obj8[3] } = found);
      obj[4] = null != channel && channel.isPrivate();
      const tmp7 = null != channel && channel.isPrivate();
      obj[5] = null != channel && channel.isForumPost();
      obj[8] = isSubscriptionGated;
      obj[9] = str;
      let parent_id;
      if (channel != null) {
        parent_id = channel.parent_id;
      }
      obj[10] = parent_id;
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
    ({ type: obj4[0], id: obj4[1], guild_id: obj4[2] } = channel);
    let tmpResult = tmp(4674);
    obj[3] = tmpResult.computeChannelName(channel, closure_8, closure_7);
    obj[4] = channel.isPrivate();
    obj[5] = channel.isForumPost();
    tmpResult = tmp(4961);
    obj[6] = tmpResult.isChannelTypeMentionable(channel.type);
    obj[7] = tmp(4675).canViewChannel(channel);
    obj[8] = isSubscriptionGated;
    obj[9] = str;
    obj[10] = channel.parent_id;
    tmp4 = obj;
    const tmpResult1 = tmp(4675);
  }
  return tmp4;
}
function handleUnknownChannel(guildId, channelId, messageId, arg3, originalLink) {
  const guild = store2.getGuild(guildId);
  let obj = { type: "channelMention", guildId, channelId, messageId, originalLink, inContent: null, content: null };
  let tmp2 = null;
  if (null != guild) {
    let id;
    if (guild != null) {
      id = guild.id;
    }
    tmp2 = null;
    if (id !== arg3) {
      obj = { type: "guild", guildId: null, content: null, icon: null };
      obj[1] = guild.id;
      obj[2] = isNullOrEmpty.truncateText(guild.name, 32);
      const obj5 = isNullOrEmpty;
      obj = { id: null, icon: null, size: 40 };
      ({ id: obj7[0], icon: obj7[1] } = guild);
      obj[3] = getAvatarURLDefault.getGuildIconURL(obj);
      const items = [obj];
      tmp2 = items;
      const obj6 = getAvatarURLDefault;
    }
  }
  obj[5] = tmp2;
  const intl = getSystemLocale.intl;
  const formatted = intl.string(getSystemLocale.t.zLZPmk).toLowerCase();
  obj1 = isNullOrEmpty;
  obj1 = { type: "text", content: obj1.truncateText(formatted, 32) };
  const items1 = [obj1];
  const items2 = [{ type: "em", content: items1 }];
  const items3 = [{ type: "channel", content: items2, channelType: constants.UNKNOWN, iconType: "text" }];
  obj[6] = items3;
  return obj;
}
function parseChannel(canViewChannel) {
  if (canViewChannel.canViewChannel) {
    if (canViewChannel.isMentionable) {
      let obj = { type: "channelMention", channelId: null, guildId: null, messageId: null, originalLink: null };
      ({ id: obj5[1], guildId: obj5[2] } = canViewChannel);
      obj[3] = arg1;
      obj[4] = arg3;
      const guild = store2.getGuild(canViewChannel.guildId);
      if (null == guild) {
        if (canViewChannel.isDm) {
          obj = {};
          const merged = Object.assign(obj);
          obj.guildId = closure_10;
          let obj19 = isNullOrEmpty;
          obj1 = { type: "text", content: null };
          obj1[1] = obj19.truncateText(canViewChannel.name, 32);
          const obj2 = { type: "channel", content: null, channelType: null, iconType: null };
          const items = [obj1];
          obj2[1] = items;
          ({ type: obj22[2], iconType: obj22[3] } = canViewChannel);
          const items1 = [obj2];
          obj.inContent = items1;
          const obj3 = { type: "channel", content: null, iconType: null };
          const items2 = [{ type: "text", content: "" }];
          obj3[1] = items2;
          obj3[2] = "message";
          const items3 = [obj3];
          obj.content = items3;
          let obj6 = obj;
        } else if (null != arg3) {
          const obj4 = { type: "link", content: null, target: null, title: "call" };
          const obj5 = { type: "text", content: null };
          obj5[1] = arg3;
          const items4 = [obj5];
          obj4[1] = items4;
          obj4[2] = arg3;
          obj6 = obj4;
        } else {
          const intl2 = getSystemLocale.intl;
          const _HermesInternal2 = HermesInternal;
          obj6 = { type: "text", content: null };
          obj6[1] = "#" + intl2.string(getSystemLocale.t.J90oLW);
        }
        return obj6;
      } else {
        const obj7 = {};
        const merged1 = Object.assign(obj);
        const obj8 = { type: "guild", guildId: null, content: null, icon: null };
        obj8[1] = guild.id;
        obj8[2] = isNullOrEmpty.truncateText(guild.name, 32);
        const obj26 = isNullOrEmpty;
        ({ id: obj28[0], icon: obj28[1] } = guild);
        obj8[3] = getAvatarURLDefault.getGuildIconURL({ id: null, icon: null, size: 40 });
        const obj27 = getAvatarURLDefault;
        const obj9 = { id: null, icon: null, size: 40 };
        const obj10 = { type: "text", content: null };
        obj10[1] = isNullOrEmpty.truncateText(canViewChannel.name, 32);
        const obj11 = { type: "channel", content: null, channelType: null, iconType: null };
        const items5 = [obj10];
        obj11[1] = items5;
        ({ type: obj31[2], iconType: obj31[3] } = canViewChannel);
        const obj12 = { type: "channel", content: null, iconType: null };
        const items6 = [{ type: "text", content: "" }];
        obj12[1] = items6;
        let str2 = "message";
        if (canViewChannel.isForumPost) {
          str2 = "post";
        }
        obj12[2] = str2;
        if (canViewChannel.guildId === arg2) {
          if (tmp34) {
            if (canViewChannel.isForumPost) {
              const channel = store.getChannel(canViewChannel.parentId);
              if (null != channel) {
                let tmp35Result = tmp35(4674);
                const channelName = tmp35Result.computeChannelName(channel, closure_8, closure_7);
                tmp35Result = tmp35(4666);
                let str3 = tmp35Result.getMentionIconType(channel);
                if (str3 == null) {
                  str3 = "forum";
                }
                const obj13 = { inContent: null, content: null };
                const obj14 = { type: "text", content: null };
                obj14[1] = tmp35(1901).truncateText(channelName, 32);
                const obj15 = { type: "channel", content: null, channelType: null, iconType: null };
                const items7 = [obj14];
                obj15[1] = items7;
                obj15[2] = channel.type;
                obj15[3] = str3;
                const items8 = [obj15];
                obj13[0] = items8;
                const items9 = [obj11];
                obj13[1] = items9;
                let obj17 = obj13;
                const tmp35Result1 = tmp35(1901);
              }
            }
            const obj16 = { inContent: null, content: null };
            const items10 = [obj11];
            obj16[0] = items10;
            const items11 = [obj12];
            obj16[1] = items11;
            obj17 = obj16;
          }
          const merged2 = Object.assign(obj17);
          return obj7;
        }
        if (canViewChannel.guildId === arg2) {
          if (!tmp34) {
            obj17 = { inContent: null, content: null };
            const items12 = [obj11];
            obj17[1] = items12;
          }
        }
        if (canViewChannel.guildId !== arg2) {
          if (tmp34) {
            let obj18 = { inContent: null, content: null };
            const items13 = [obj8];
            obj18[0] = items13;
            let tmp11 = obj12;
            if (canViewChannel.isForumPost) {
              tmp11 = obj11;
            }
            const items14 = [tmp11];
            obj18[1] = items14;
          }
        }
        let tmp12;
        if (canViewChannel.guildId !== arg2) {
          if (!tmp34) {
            obj19 = { inContent: null, content: null };
            const items15 = [obj8];
            obj19[0] = items15;
            const items16 = [obj11];
            obj19[1] = items16;
            tmp12 = obj19;
          }
        }
        obj18 = tmp12;
        const obj29 = isNullOrEmpty;
      }
    } else {
      const _HermesInternal = HermesInternal;
      const obj20 = { type: "text", content: null };
      obj20[1] = "#" + canViewChannel.name;
      return obj20;
    }
  } else {
    if (canViewChannel.roleSubscriptionGated) {
      let name = canViewChannel.name;
    } else {
      const intl = getSystemLocale.intl;
      name = intl.string(getSystemLocale.t["/YzI63"]);
    }
    obj = { type: "channel", content: null, channelType: null, iconType: "locked" };
    const obj21 = { type: "text", content: null };
    obj21[1] = name;
    const items17 = [obj21];
    obj[1] = items17;
    if (canViewChannel.roleSubscriptionGated) {
      let UNKNOWN = canViewChannel.type;
    } else {
      UNKNOWN = constants.UNKNOWN;
    }
    obj[2] = UNKNOWN;
    const obj22 = {
      type: "channelMention",
      guildId: null,
      channelId: null,
      messageId: null,
      inContent: null,
      content: null,
    };
    ({ guildId: obj3[1], id: obj3[2] } = canViewChannel);
    obj22[3] = arg1;
    const items18 = [obj];
    obj22[5] = items18;
    return obj22;
  }
}
({ ChannelTypes: c9, ME: c10 } = ME);
let obj = { channelMention: null, channelOrMessageUrl: null, mediaPostLink: null };
obj = {
  order: textRegexpDefault.order,
  requiredFirstCharacters: ["<"],
  match(arg0) {
    return /^<#(\d+)>/.exec(arg0);
  },
  parse(arg0, arg1, returnMentionIds) {
    if (returnMentionIds.returnMentionIds) {
      const obj = { type: "channelMention", id: null };
      obj[1] = tmp;
      return obj;
    } else {
      const tmp3 = getChannel(tmp, returnMentionIds.mentionChannels);
      if (null == tmp3) {
        const channel = store.getChannel(returnMentionIds.channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        let tmp5Result = handleUnknownChannel(null, tmp, null, guildId);
        const tmp9 = handleUnknownChannel;
      } else {
        const channel1 = store.getChannel(returnMentionIds.channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        tmp5Result = parseChannel(tmp3, null, guildId1);
        const tmp5 = parseChannel;
      }
      return tmp5Result;
    }
  },
};
obj[0] = obj;
obj = {
  order: tDefault.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const CHANNEL_OR_MESSAGES_URL_RE = ME2.CHANNEL_OR_MESSAGES_URL_RE;
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
      obj = { type: "text", content: null };
      obj[1] = tmp;
      const items = [obj];
      obj[1] = items;
      obj[2] = tmp;
      return obj;
    } else {
      const tmp23 = getChannel(tmp3, null);
      if (null == tmp23) {
        const channel = store.getChannel(channelId.channelId);
        let guildId;
        if (channel != null) {
          guildId = channel.getGuildId();
        }
        let tmp5Result = handleUnknownChannel(tmp2, tmp3, tmp4, guildId, tmp);
        const tmp13 = handleUnknownChannel;
      } else {
        const channel1 = store.getChannel(channelId.channelId);
        let guildId1;
        if (channel1 != null) {
          guildId1 = channel1.getGuildId();
        }
        tmp5Result = parseChannel(tmp23, tmp4, guildId1, tmp);
        const tmp5 = parseChannel;
      }
      return tmp5Result;
    }
  },
};
obj[1] = obj;
obj[2] = {
  order: tDefault.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const MEDIA_POST_URL_RE = ME2.MEDIA_POST_URL_RE;
    return MEDIA_POST_URL_RE.exec(arg0);
  },
  parse(arg0, arg1, channelId) {
    [tmp, tmp2, tmp3, tmp4, tmp5] = arg0;
    if (null != tmp3) {
      if (null != tmp4) {
        const tmp31 = getChannel(tmp4, null);
        if (null != tmp31) {
          const channel = store.getChannel(channelId.channelId);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          return parseChannel(tmp31, tmp5, guildId, target);
        } else {
          const tmp30Result = tmp30(tmp3, null);
          if (null != tmp30Result) {
            const channel1 = store.getChannel(channelId.channelId);
            let guildId1;
            if (channel1 != null) {
              guildId1 = channel1.getGuildId();
            }
            let tmp6Result = parseChannel(tmp30Result, tmp5, guildId1, target);
            const tmp15 = parseChannel;
          } else {
            const channel2 = store.getChannel(channelId.channelId);
            let guildId2;
            if (channel2 != null) {
              guildId2 = channel2.getGuildId();
            }
            tmp6Result = handleUnknownChannel(tmp2, tmp3, tmp5, guildId2, target);
            const tmp6 = handleUnknownChannel;
          }
          return tmp6Result;
        }
        tmp30 = getChannel;
      }
    }
    const content = [{ type: "text", content: target }];
    return { type: "link", content, target, title: "call" };
  },
};
let obj1 = {
  order: tDefault.defaultRules.url.order - 0.5,
  requiredFirstCharacters: ["h"],
  match(arg0) {
    const MEDIA_POST_URL_RE = ME2.MEDIA_POST_URL_RE;
    return MEDIA_POST_URL_RE.exec(arg0);
  },
  parse(arg0, arg1, channelId) {
    [tmp, tmp2, tmp3, tmp4, tmp5] = arg0;
    if (null != tmp3) {
      if (null != tmp4) {
        const tmp31 = getChannel(tmp4, null);
        if (null != tmp31) {
          const channel = store.getChannel(channelId.channelId);
          let guildId;
          if (channel != null) {
            guildId = channel.getGuildId();
          }
          return parseChannel(tmp31, tmp5, guildId, target);
        } else {
          const tmp30Result = tmp30(tmp3, null);
          if (null != tmp30Result) {
            const channel1 = store.getChannel(channelId.channelId);
            let guildId1;
            if (channel1 != null) {
              guildId1 = channel1.getGuildId();
            }
            let tmp6Result = parseChannel(tmp30Result, tmp5, guildId1, target);
            const tmp15 = parseChannel;
          } else {
            const channel2 = store.getChannel(channelId.channelId);
            let guildId2;
            if (channel2 != null) {
              guildId2 = channel2.getGuildId();
            }
            tmp6Result = handleUnknownChannel(tmp2, tmp3, tmp5, guildId2, target);
            const tmp6 = handleUnknownChannel;
          }
          return tmp6Result;
        }
        tmp30 = getChannel;
      }
    }
    const content = [{ type: "text", content: target }];
    return { type: "link", content, target, title: "call" };
  },
};
const result = require("set").fileFinishedImporting("modules/markup/MarkupChannelMentionRule.tsx");

export default obj;
export const getGuildIdFromChannelId = function getGuildIdFromChannelId(arg0) {
  const channel = store.getChannel(arg0);
  let guildId;
  if (channel != null) {
    guildId = channel.getGuildId();
  }
  return guildId;
};
export { getChannel };
export { handleUnknownChannel };
export { parseChannel };
