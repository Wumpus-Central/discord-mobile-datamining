// === Module 7803: SearchableSelectActionComponentUtils ===

// Module 7803 (SearchableSelectActionComponentUtils)
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import useChannelName from "useChannelName" /* 5043 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5122 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5621 */;
import SnowflakeSelectDefaultValueTypes from "SnowflakeSelectDefaultValueTypes" /* 7804 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;
import LocalInteractionComponentStateStore from "LocalInteractionComponentStateStore" /* 7796 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, query, channelId) {
  let roles;
  let users;
  _require = channelId;
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const tmp3 = type === require("Server").ComponentType.USER_SELECT || type === require("Server").ComponentType.MENTIONABLE_SELECT;
    const tmp4 = type === require("Server").ComponentType.ROLE_SELECT || type === require("Server").ComponentType.MENTIONABLE_SELECT;
    let obj = channel(5621);
    let obj2 = { query, channel, canMentionEveryone: false, canMentionHere: false, canMentionUsers: tmp3, canMentionRoles: tmp4, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    ({ users, roles } = obj.queryMentionResults(obj2));
    const items = [];
    obj.queryMentionResults(obj2);
    const arraySpreadResult = HermesBuiltin.arraySpread(items, users.map((user) => {
      const obj = NicknameUtilsDefault;
      let username = obj.getNickname(channel.getGuildId(), channelId, user.user);
      const obj2 = { type: InteractionComponentTypes.SelectOptionType.USER, value: user.user.id, label: username };
      if (username == null) {
        username = user.user.globalName;
      }
      if (username == null) {
        username = user.user.username;
      }
      return obj2;
    }), 0);
    HermesBuiltin.arraySpread(items, roles.map((id) => {
      const obj = { type: channelId(dependencyMap[10]).SelectOptionType.ROLE, value: id.id, label: id.name };
      return obj;
    }), arraySpreadResult);
    return items;
  }
};
export const queryChannels = function queryChannels(query, channelId, channelTypes) {
  let items;
  const channel = ChannelStore.getChannel(channelId);
  if (null == channel) {
    items = [];
  } else {
    let obj = AutocompleteUtilsDefault;
    let obj2 = { query, channel, channelTypes, limit: 15 };
    const channels = obj.queryApplicationCommandChannelResults(obj2).channels;
    items = channels.map((id) => {
      let obj2;
      const obj = { type: require("InteractionComponentTypes").SelectOptionType.CHANNEL, value: id.id, label: obj2.computeChannelName(id, UserStore, RelationshipStore) };
      obj2 = require("useChannelName");
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  let closure_1;
  let found;
  const interactionComponentState = LocalInteractionComponentStateStore.getInteractionComponentState(containerId, selectActionComponent.id);
  const defaultValues = selectActionComponent.defaultValues;
  let channelTypes;
  if (selectActionComponent.type === channelTypes(1985).ComponentType.CHANNEL_SELECT) {
    channelTypes = selectActionComponent.channelTypes;
  }
  if (channelTypes === undefined) {
    channelTypes = [];
  }
  let guild;
  if (null != defaultValues) {
    guild = GuildStore.getGuild(guildId);
    const mapped = defaultValues.map((type) => {
      let tmpResult;
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
          const obj2 = { type: InteractionComponentTypes.SelectOptionType.USER, value: user.id, label: nick };
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          return obj2;
        }
      } else if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = GuildRoleStore.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            ({ id: obj4.value, name: obj4.label } = role);
            tmp12 = { type: InteractionComponentTypes.SelectOptionType.ROLE, value: null, label: null };
            const obj3 = { type: InteractionComponentTypes.SelectOptionType.ROLE, value: null, label: null };
          }
          return tmp12;
        }
      } else if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = ChannelStore.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              if (channelTypes.length <= 0) {
                const obj5 = { type: InteractionComponentTypes.SelectOptionType.CHANNEL, value: channel.id, label: tmpResult.computeChannelName(channel, UserStore, RelationshipStore) };
                tmp5 = obj5;
                tmpResult = useChannelName;
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    found = mapped.filter(tmp2(1375).isNotNullish);
  }
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type !== channelTypes(1985).ComponentType.USER_SELECT) {
    let type1;
    if (interactionComponentState != null) {
      type1 = interactionComponentState.type;
    }
    if (type1 !== channelTypes(1985).ComponentType.ROLE_SELECT) {
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      if (type2 !== channelTypes(1985).ComponentType.MENTIONABLE_SELECT) {
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
  let closure_1;
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  let guild;
  if (null != defaultValues) {
    guild = GuildStore.getGuild(guild_id);
    const mapped = defaultValues.map((type) => {
      let tmpResult;
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
          const obj2 = { type: InteractionComponentTypes.SelectOptionType.USER, value: user.id, label: nick };
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          return obj2;
        }
      } else if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = GuildRoleStore.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            ({ id: obj4.value, name: obj4.label } = role);
            tmp12 = { type: InteractionComponentTypes.SelectOptionType.ROLE, value: null, label: null };
            const obj3 = { type: InteractionComponentTypes.SelectOptionType.ROLE, value: null, label: null };
          }
          return tmp12;
        }
      } else if (SnowflakeSelectDefaultValueTypes.SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = ChannelStore.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              if (channelTypes.length <= 0) {
                const obj5 = { type: InteractionComponentTypes.SelectOptionType.CHANNEL, value: channel.id, label: tmpResult.computeChannelName(channel, UserStore, RelationshipStore) };
                tmp5 = obj5;
                tmpResult = useChannelName;
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    return mapped.filter(items(1375).isNotNullish);
  }
};