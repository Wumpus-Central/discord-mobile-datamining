// === Module 8120: MIN_REREQUEST_TIME ===

// Module 8120 (MIN_REREQUEST_TIME)
import NOOPDefault from "NOOP" /* 5442 */;
import closure_3 from "ensureGuildLoaded" /* 1957 */;
import closure_4 from "trackCommunicationDisabled" /* 2021 */;
import closure_5 from "createGuildRoleRecordFromRust" /* 2015 */;
import closure_6 from "createGuildRecordFromRust" /* 1979 */;
import closure_7 from "markAllUserIdListsStale" /* 4209 */;
import closure_8 from "mergeGuildAvatar" /* 1371 */;
import closure_9 from "getInteractionComponentStates" /* 8113 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/interaction_components/SearchableSelectActionComponentUtils.tsx");

export const MIN_REREQUEST_TIME = 1000;
export const queryMentionables = function queryMentionables(type, arg1, channelId) {
  const _require = channelId;
  const channel = store.getChannel(channelId);
  if (null == channel) {
    return [];
  } else {
    const tmp2 = type === _require(1894).ComponentType.USER_SELECT || type === _require(1894).ComponentType.MENTIONABLE_SELECT;
    let obj = channel(5442);
    obj = { query: null, channel: null, canMentionEveryone: false, canMentionHere: false, canMentionUsers: null, canMentionRoles: null, includeAllGuildUsers: true, includeNonMentionableRoles: true, checkRecentlyTalkedOnEmptyQuery: false, limit: 15 };
    obj[0] = arg1;
    obj[1] = channel;
    obj[4] = tmp2;
    obj[5] = type === _require(1894).ComponentType.ROLE_SELECT || type === _require(1894).ComponentType.MENTIONABLE_SELECT;
    const tmp3 = type === _require(1894).ComponentType.ROLE_SELECT || type === _require(1894).ComponentType.MENTIONABLE_SELECT;
    ({ users, roles } = obj.queryMentionResults(obj));
    const items = [];
    let arraySpreadResult = HermesBuiltin.arraySpread(users.map((user) => {
      let obj = channel(closure_1_2[9]);
      let username = obj.getNickname(channel.getGuildId(), channelId, user.user);
      obj = { type: channelId(closure_1_2[10]).SelectOptionType.USER, value: user.user.id, label: null };
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
    let obj = NOOPDefault;
    obj = { query: null, channel: null, channelTypes: null, limit: 15 };
    obj[0] = arg0;
    obj[1] = channel;
    obj[2] = arg2;
    const channels = obj.queryApplicationCommandChannelResults(obj).channels;
    items = channels.map((id) => {
      const obj = { type: callback(4792).SelectOptionType.CHANNEL, value: id.id, label: callback(4713).computeChannelName(id, closure_8, closure_7) };
      return obj;
    });
  }
  return items;
};
export const getInitialSnowflakeSelectOptions = function getInitialSnowflakeSelectOptions(selectActionComponent, containerId, guildId) {
  interactionComponentState = interactionComponentState.getInteractionComponentState(containerId, selectActionComponent.id);
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
    guild = store2.getGuild(guildId);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (channelTypes(closure_1_2[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = closure_1_8.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = closure_1_4.getNick(tmp16.id, user.id);
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
          const role = closure_1_5.getRole(tmp8.id, type.id);
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
          const channel = closure_1_3.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                obj1 = { type: null, value: null, label: null };
                obj1[0] = tmp(tmp2[10]).SelectOptionType.CHANNEL;
                obj1[1] = channel.id;
                obj1[2] = tmp(tmp2[11]).computeChannelName(channel, closure_1_8, closure_1_7);
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
    guild = store2.getGuild(guild_id);
    const mapped = defaultValues.map((type) => {
      type = type.type;
      if (channelTypes(closure_1_2[12]).SnowflakeSelectDefaultValueTypes.USER === type) {
        const user = closure_1_8.getUser(type.id);
        if (null == user) {
          return null;
        } else {
          let nick;
          if (null != closure_1) {
            nick = closure_1_4.getNick(tmp16.id, user.id);
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
          const role = closure_1_5.getRole(tmp8.id, type.id);
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
          const channel = closure_1_3.getChannel(type.id);
          let tmp5 = null;
          if (null != channel) {
            tmp5 = null;
            if (channel.guild_id === tmp3.id) {
              obj = channelTypes;
              if (channelTypes.length <= 0) {
                obj1 = { type: null, value: null, label: null };
                obj1[0] = tmp(tmp2[10]).SelectOptionType.CHANNEL;
                obj1[1] = channel.id;
                obj1[2] = tmp(tmp2[11]).computeChannelName(channel, closure_1_8, closure_1_7);
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
    return mapped.filter(items(1369).isNotNullish);
  }
};