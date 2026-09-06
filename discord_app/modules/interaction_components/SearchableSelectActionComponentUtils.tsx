// === Module 8120: SearchableSelectActionComponentUtils ===

// Module 8120 (SearchableSelectActionComponentUtils)
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 4792 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5442 */;
import SnowflakeSelectDefaultValueTypes from "SnowflakeSelectDefaultValueTypes" /* 8121 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 8113 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, query, channelId) {
  _require = channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const tmp2 = type === require("Server").ComponentType.USER_SELECT || type === require("Server").ComponentType.MENTIONABLE_SELECT;
    channel(5442);
    let obj = { query, channel, canMentionEveryone: false, canMentionHere: false, canMentionUsers: tmp2, canMentionRoles: type === require("Server").ComponentType.ROLE_SELECT || type === require("Server").ComponentType.MENTIONABLE_SELECT, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    const tmp3 = type === require("Server").ComponentType.ROLE_SELECT || type === require("Server").ComponentType.MENTIONABLE_SELECT;
    ({ users, roles } = obj.queryMentionResults(obj));
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(users.map((user) => {
      let obj = NicknameUtilsDefault;
      let username = obj.getNickname(channel.getGuildId(), closure_0, user.user);
      obj = { type: InteractionComponentTypes.SelectOptionType.USER, value: user.user.id, label: null };
      if (username == null) {
        username = user.user.globalName;
      }
      if (username == null) {
        username = user.user.username;
      }
      obj.label = username;
      return obj;
    }), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(roles.map((id) => ({ type: channelId(dependencyMap[10]).SelectOptionType.ROLE, value: id.id, label: id.name })), arraySpreadResult);
    return items;
  }
};
export const queryChannels = function queryChannels(query, arg1, channelTypes) {
  const channel = ChannelStore.getChannel(arg1);
  if (null == channel) {
    let items = [];
  } else {
    let obj = { query, channel, channelTypes, limit: 15 };
    const channels = obj.queryApplicationCommandChannelResults(obj).channels;
    items = channels.map((id) => {
      const obj = { type: require("InteractionComponentTypes").SelectOptionType.CHANNEL, value: id.id, label: require("useChannelName").computeChannelName(id, UserStore, RelationshipStore) };
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(containerId, selectActionComponent.id);
  const defaultValues = selectActionComponent.defaultValues;
  let channelTypes;
  if (selectActionComponent.type === channelTypes(1894).ComponentType.CHANNEL_SELECT) {
    channelTypes = selectActionComponent.channelTypes;
  }
  if (channelTypes === undefined) {
    channelTypes = [];
  }
  let guild;
  if (null != defaultValues) {
    guild = GuildStore.getGuild(guildId);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = UserStore.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = GuildMemberStore.getNick(tmp16.id, user.id);
          }
          let obj = { type: tmp(4792).SelectOptionType.USER, value: user.id, label: null };
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          obj.label = nick;
          return obj;
        }
      } else if (tmp(8121).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = GuildRoleStore.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            obj = { type: tmp(4792).SelectOptionType.ROLE, value: null, label: null };
            ({ id: obj4.value, name: obj4.label } = role);
            tmp12 = obj;
          }
          return tmp12;
        }
      } else if (tmp(8121).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = ChannelStore.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                const obj1 = { type: tmp(4792).SelectOptionType.CHANNEL, value: channel.id, label: tmp(4713).computeChannelName(channel, UserStore, RelationshipStore) };
                tmp5 = obj1;
                const tmpResult = tmp(4713);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    let found = mapped.filter(tmp2(1369).isNotNullish);
  }
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type !== channelTypes(1894).ComponentType.USER_SELECT) {
    let type1;
    if (interactionComponentState != null) {
      type1 = interactionComponentState.type;
    }
    if (type1 !== tmp2(1894).ComponentType.ROLE_SELECT) {
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      if (type2 !== tmp2(1894).ComponentType.MENTIONABLE_SELECT) {
        let type3;
        if (interactionComponentState != null) {
          type3 = interactionComponentState.type;
        }
      }
      if (found == null) {
        found = [];
      }
      return found;
    }
  }
  found = interactionComponentState.selectedOptions;
};
export const getSnowflakeSelectDefaultValues = function getSnowflakeSelectDefaultValues(defaultValues, guild_id) {
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let guild;
  if (null != defaultValues) {
    guild = GuildStore.getGuild(guild_id);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = UserStore.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = GuildMemberStore.getNick(tmp16.id, user.id);
          }
          let obj = { type: tmp(4792).SelectOptionType.USER, value: user.id, label: null };
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          obj.label = nick;
          return obj;
        }
      } else if (tmp(8121).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = GuildRoleStore.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            obj = { type: tmp(4792).SelectOptionType.ROLE, value: null, label: null };
            ({ id: obj4.value, name: obj4.label } = role);
            tmp12 = obj;
          }
          return tmp12;
        }
      } else if (tmp(8121).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = ChannelStore.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                const obj1 = { type: tmp(4792).SelectOptionType.CHANNEL, value: channel.id, label: tmp(4713).computeChannelName(channel, UserStore, RelationshipStore) };
                tmp5 = obj1;
                const tmpResult = tmp(4713);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    return mapped.filter(items(1369).isNotNullish);
  }
};