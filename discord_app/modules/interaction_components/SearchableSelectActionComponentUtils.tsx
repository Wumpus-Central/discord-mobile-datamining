// === Module 8334: MIN_REREQUEST_TIME ===

// Module 8334 (MIN_REREQUEST_TIME)
import NOOPDefault from "NOOP" /* 6714 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import getInteractionComponentStates from "getInteractionComponentStates" /* 8327 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, arg1, channelId) {
  const _require = channelId;
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const tmp2 = type === _require(1954).ComponentType.USER_SELECT || type === _require(1954).ComponentType.MENTIONABLE_SELECT;
    channel(6714);
    let obj = { query: null, channel: null, canMentionEveryone: false, canMentionHere: false, canMentionUsers: null, canMentionRoles: null, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    obj[0] = arg1;
    obj[1] = channel;
    obj[4] = tmp2;
    obj[5] = type === _require(1954).ComponentType.ROLE_SELECT || type === _require(1954).ComponentType.MENTIONABLE_SELECT;
    const tmp3 = type === _require(1954).ComponentType.ROLE_SELECT || type === _require(1954).ComponentType.MENTIONABLE_SELECT;
    ({ users, roles } = obj.queryMentionResults(obj));
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(users.map((item, index) => {
      let obj = channel(dependencyMap[9]);
      let username = obj.getNickname(channel.getGuildId(), channelId, item.user);
      obj = { type: channelId(dependencyMap[10]).SelectOptionType.USER, value: item.user.id, label: null };
      if (username == null) {
        username = item.user.globalName;
      }
      if (username == null) {
        username = item.user.username;
      }
      obj[2] = username;
      return obj;
    }), 0);
    arraySpreadResult = HermesBuiltin.arraySpread(roles.map((item, index) => ({ type: channelId(table[10]).SelectOptionType.ROLE, value: item.id, label: item.name })), arraySpreadResult);
    return items;
  }
};
export const queryChannels = function queryChannels(arg0, arg1, arg2) {
  const channel = store.getChannel(arg1);
  if (null == channel) {
    let items = [];
  } else {
    let obj = { query: null, channel: null, channelTypes: null, limit: 15 };
    obj[0] = arg0;
    obj[1] = channel;
    obj[2] = arg2;
    const channels = obj.queryApplicationCommandChannelResults(obj).channels;
    items = channels.map((item, index) => {
      const obj = { type: callback(4813).SelectOptionType.CHANNEL, value: item.id, label: callback(4984).computeChannelName(item, closure_8, closure_7) };
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectActionComponent.id);
  const defaultValues = selectActionComponent.defaultValues;
  let channelTypes;
  if (selectActionComponent.type === channelTypes(1954).ComponentType.CHANNEL_SELECT) {
    channelTypes = selectActionComponent.channelTypes;
  }
  if (channelTypes === undefined) {
    channelTypes = [];
  }
  let guild;
  if (null != defaultValues) {
    guild = store2.getGuild(guildId);
    const mapped = defaultValues.map((item, index) => {
      const type = item.type;
      if (channelTypes(dependencyMap[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = closure_1_8.getUser(item.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = closure_1_4.getNick(tmp16.id, user.id);
          }
          let obj = { type: null, value: null, label: null };
          obj[0] = channelTypes(dependencyMap[10]).SelectOptionType.USER;
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
      } else if (channelTypes(dependencyMap[12]).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = closure_1_5.getRole(tmp8.id, item.id);
          let tmp12 = null;
          if (null != role) {
            obj = { type: null, value: null, label: null };
            obj[0] = channelTypes(dependencyMap[10]).SelectOptionType.ROLE;
            ({ id: obj4[1], name: obj4[2] } = role);
            tmp12 = obj;
          }
          return tmp12;
        }
      } else if (channelTypes(dependencyMap[12]).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = closure_1_3.getChannel(item.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                obj1 = { type: null, value: null, label: null };
                obj1[0] = channelTypes(dependencyMap[10]).SelectOptionType.CHANNEL;
                obj1[1] = channel.id;
                obj1[2] = channelTypes(dependencyMap[11]).computeChannelName(channel, closure_1_8, closure_1_7);
                tmp5 = obj1;
                const tmpResult = channelTypes(dependencyMap[11]);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    let found = mapped.filter(tmp2(1370).isNotNullish);
  }
  let type;
  if (interactionComponentState != null) {
    type = interactionComponentState.type;
  }
  if (type !== channelTypes(1954).ComponentType.USER_SELECT) {
    let type1;
    if (interactionComponentState != null) {
      type1 = interactionComponentState.type;
    }
    if (type1 !== tmp2(1954).ComponentType.ROLE_SELECT) {
      let type2;
      if (interactionComponentState != null) {
        type2 = interactionComponentState.type;
      }
      if (type2 !== tmp2(1954).ComponentType.MENTIONABLE_SELECT) {
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
    const mapped = defaultValues.map((item, index) => {
      const type = item.type;
      if (channelTypes(dependencyMap[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = closure_1_8.getUser(item.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = closure_1_4.getNick(tmp16.id, user.id);
          }
          let obj = { type: null, value: null, label: null };
          obj[0] = channelTypes(dependencyMap[10]).SelectOptionType.USER;
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
      } else if (channelTypes(dependencyMap[12]).SnowflakeSelectDefaultValueTypes.ROLE === type) {
        if (null == closure_1) {
          return null;
        } else {
          const role = closure_1_5.getRole(tmp8.id, item.id);
          let tmp12 = null;
          if (null != role) {
            obj = { type: null, value: null, label: null };
            obj[0] = channelTypes(dependencyMap[10]).SelectOptionType.ROLE;
            ({ id: obj4[1], name: obj4[2] } = role);
            tmp12 = obj;
          }
          return tmp12;
        }
      } else if (channelTypes(dependencyMap[12]).SnowflakeSelectDefaultValueTypes.CHANNEL === type) {
        if (null == closure_1) {
          return null;
        } else {
          const channel = closure_1_3.getChannel(item.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                obj1 = { type: null, value: null, label: null };
                obj1[0] = channelTypes(dependencyMap[10]).SelectOptionType.CHANNEL;
                obj1[1] = channel.id;
                obj1[2] = channelTypes(dependencyMap[11]).computeChannelName(channel, closure_1_8, closure_1_7);
                tmp5 = obj1;
                const tmpResult = channelTypes(dependencyMap[11]);
              } else {
                tmp5 = null;
              }
            }
          }
          return tmp5;
        }
      }
    });
    return mapped.filter(items(1370).isNotNullish);
  }
};