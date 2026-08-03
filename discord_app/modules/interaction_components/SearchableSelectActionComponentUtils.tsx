import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import upsertRelationship from "upsertRelationship";
import mergeGuildAvatar from "mergeGuildAvatar";
import getInteractionComponentStates from "getInteractionComponentStates";

const require = arg1;
const result = require("createGuildRoleRecordFromRust").fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, arg1, channelId) {
  let roles;
  let users;
  const _require = channelId;
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const tmp2 = type === _require(1906).ComponentType.USER_SELECT || type === _require(1906).ComponentType.MENTIONABLE_SELECT;
    let obj = channel(5097);
    obj = { query: null, channel: null, canMentionEveryone: false, canMentionHere: false, canMentionUsers: null, canMentionRoles: null, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    obj[0] = arg1;
    obj[1] = channel;
    obj[4] = tmp2;
    obj[5] = type === _require(1906).ComponentType.ROLE_SELECT || type === _require(1906).ComponentType.MENTIONABLE_SELECT;
    const tmp3 = type === _require(1906).ComponentType.ROLE_SELECT || type === _require(1906).ComponentType.MENTIONABLE_SELECT;
    ({ users, roles } = obj.queryMentionResults(obj));
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(users.map((user) => {
      let obj = channel(outer1_2[9]);
      let username = obj.getNickname(channel.getGuildId(), channelId, user.user);
      obj = { type: channelId(outer1_2[10]).SelectOptionType.USER, value: user.user.id, label: null };
      if (username == null) {
        username = user.user.globalName;
      }
      if (username == null) {
        username = user.user.username;
      }
      obj[2] = username;
      return obj;
    }), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(roles.map((id) => ({ type: channelId(table[10]).SelectOptionType.ROLE, value: id.id, label: id.name })), arraySpreadResult);
    return items;
  }
};
export const queryChannels = function queryChannels(arg0, arg1, arg2) {
  const channel = store.getChannel(arg1);
  if (null == channel) {
    let items = [];
  } else {
    let obj = importDefault(5097);
    obj = { query: null, channel: null, channelTypes: null, limit: 15 };
    obj[0] = arg0;
    obj[1] = channel;
    obj[2] = arg2;
    const channels = obj.queryApplicationCommandChannelResults(obj).channels;
    items = channels.map((id) => {
      const obj = { type: callback(4483).SelectOptionType.CHANNEL, value: id.id, label: null };
      obj[2] = callback(4446).computeChannelName(id, mergeGuildAvatar, upsertRelationship);
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectActionComponent.id);
  const defaultValues = selectActionComponent.defaultValues;
  let channelTypes;
  if (selectActionComponent.type === channelTypes(1906).ComponentType.CHANNEL_SELECT) {
    channelTypes = selectActionComponent.channelTypes;
  }
  if (channelTypes === undefined) {
    channelTypes = [];
  }
  let guild;
  if (null != defaultValues) {
    guild = store2.getGuild(guildId);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (channelTypes(outer1_2[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = outer1_8.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = outer1_4.getNick(tmp16.id, user.id);
          }
          let obj = { type: null, value: null, label: null };
          obj[0] = tmp(tmp2[10]).SelectOptionType.USER;
          obj[1] = user.id;
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          obj[2] = nick;
          return obj;
        }
      } else if (tmp(tmp2[12]).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = outer1_5.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            obj = { type: null, value: null, label: null };
            obj[0] = tmp(tmp2[10]).SelectOptionType.ROLE;
            ({ id: obj4[1], name: obj4[2] } = role);
            tmp12 = obj;
          }
          return tmp12;
        }
      } else if (tmp(tmp2[12]).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = outer1_3.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                const obj1 = { type: null, value: null, label: null };
                obj1[0] = tmp(tmp2[10]).SelectOptionType.CHANNEL;
                obj1[1] = channel.id;
                obj1[2] = tmp(tmp2[11]).computeChannelName(channel, outer1_8, outer1_7);
                tmp5 = obj1;
                const tmpResult = tmp(tmp2[11]);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    let found = mapped.filter(tmp2(1351).isNotNullish);
  }
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type !== channelTypes(1906).ComponentType.USER_SELECT) {
    let type1;
    if (interactionComponentState != null) {
      type1 = interactionComponentState.type;
    }
    if (type1 !== tmp2(1906).ComponentType.ROLE_SELECT) {
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      if (type2 !== tmp2(1906).ComponentType.MENTIONABLE_SELECT) {
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
    guild = store2.getGuild(guild_id);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (channelTypes(outer1_2[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = outer1_8.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = outer1_4.getNick(tmp16.id, user.id);
          }
          let obj = { type: null, value: null, label: null };
          obj[0] = tmp(tmp2[10]).SelectOptionType.USER;
          obj[1] = user.id;
          if (nick == null) {
            nick = user.globalName;
          }
          if (nick == null) {
            nick = user.username;
          }
          obj[2] = nick;
          return obj;
        }
      } else if (tmp(tmp2[12]).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = outer1_5.getRole(tmp8.id, type.id);
          let tmp12 = null;
          if (null != role) {
            obj = { type: null, value: null, label: null };
            obj[0] = tmp(tmp2[10]).SelectOptionType.ROLE;
            ({ id: obj4[1], name: obj4[2] } = role);
            tmp12 = obj;
          }
          return tmp12;
        }
      } else if (tmp(tmp2[12]).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = outer1_3.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                const obj1 = { type: null, value: null, label: null };
                obj1[0] = tmp(tmp2[10]).SelectOptionType.CHANNEL;
                obj1[1] = channel.id;
                obj1[2] = tmp(tmp2[11]).computeChannelName(channel, outer1_8, outer1_7);
                tmp5 = obj1;
                const tmpResult = tmp(tmp2[11]);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    return mapped.filter(items(1351).isNotNullish);
  }
};