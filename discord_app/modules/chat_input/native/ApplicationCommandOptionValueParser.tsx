// discord_app/modules/chat_input/native/ApplicationCommandOptionValueParser.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import PermissionOverwriteType from "../../../flow/Server.tsx";
import rebuild from "../../messages/MessageParser.tsx";
import rebuildDefault from "../../messages/MessageParser.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { isGuildSelectableChannelType as closure_5 } from "../../../records/ChannelRecord.tsx";
import comparator from "../../../stores/GuildChannelStore.tsx";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import createGuildRoleRecordFromRust from "../../../stores/GuildRoleStore.tsx";
import markAllUserIdListsStale from "../../../stores/RelationshipStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import regExp from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";

require = fn;
function getUsers(getGuildId) {
  const guildId = getGuildId.getGuildId();
  if (getGuildId.isPrivate()) {
    let mapped = applyDefault(getGuildId.recipients).map((item, index) => ({ userId: item }));
    const arr3 = applyDefault(getGuildId.recipients);
  } else if (null != guildId) {
    mapped = applyDefault(members.getMembers(guildId)).map((item, index) => ({ userId: item.userId }));
    const tmp7Result = applyDefault(members.getMembers(guildId));
  } else {
    mapped = applyDefault([]);
  }
  const mapped1 = mapped.map((item, index) => user.getUser(item.userId));
  const found = mapped1.filter(isDiscordFrontendDevelopment.isNotNullish);
  return found.map((item, index) => ({ id: item.id, text: item.tag }));
}
function getChannels(getGuildId, arr) {
  const _require = arr;
  const guildId = getGuildId.getGuildId();
  if (null == guildId) {
    const items = [];
    if (tmp2) {
      arr = items.push(getGuildId);
    }
    tmp2 = null == arr || arr.includes(getGuildId.type);
    return guildId(12)(items).map((item, index) => {
      const obj = { id: item.id, text: arr(4984).computeChannelName(item, closure_10, closure_9) };
      return obj;
    });
  } else {
    dependencyMap = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId);
    const tmp9 = guildId(12);
    const tmp9Result = guildId(12)(require("../../../utils/AutocompleteUtils.tsx").COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const combined = guildId(12)(require("../../../utils/AutocompleteUtils.tsx").COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).flatMap((item, index) => closure_1_6.getChannels(guildId)[item].map((item, index) => item.channel)).concat(closure_4.computeAllActiveJoinedThreads(guildId));
    const found = combined.filter((item, index) => {
      let hasItem = null == arr;
      if (!hasItem) {
        hasItem = arr.includes(item.type);
      }
      return hasItem;
    });
    return found.map((item, index) => {
      const obj = { id: item.id, text: null };
      if (closure_1_5(item.type)) {
        let name;
        if (dependencyMap[item.id] != null) {
          name = tmp7.name;
        }
        if (name == null) {
          name = arr(4984).computeChannelName(item, closure_1_10, closure_1_9);
          const obj3 = arr(4984);
        }
        let channelName = name;
      } else {
        channelName = arr(4984).computeChannelName(item, closure_1_10, closure_1_9);
        const obj2 = arr(4984);
      }
      obj[1] = channelName;
      return obj;
    });
  }
}
({ MENTION_SENTINEL: unpackModuleId, CHANNEL_SENTINEL: closure_12 } = regExp);
const re13 = /^@(([^@#:]+)#([0-9]{4}))$/i;
function matchPrefix(arg0, arg1, arg2) {

}
const prototype = function ApplicationCommandOptionValueParser(channel) {
  const obj = Object.create(new.target.prototype);
  obj.parse = function parse(text, type) {
    const str = text.trim();
    let arr6 = str;
    let arr = closure_1_15(arr6.channel);
    closure_1 = arr;
    const guild_id = arr6.channel.guild_id;
    if (null != guild_id) {
      let sortedRoles = closure_1_8.getSortedRoles(guild_id);
    } else {
      sortedRoles = [];
    }
    closure_2 = closure_1_1(closure_1_2[9])(sortedRoles).map((item, index) => ({ id: item.id, text: item.name }));
    closure_3 = arr.map((item, index) => {
      obj = {};
      const merged = Object.assign(item);
      obj.text = item.text.split("#")[0];
      return obj;
    });
    function matchUser() {
      obj = closure_1;
      if (typeof closure_1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let firstResult = null;
      if (closure_1_11[0] === closure_1_11) {
        closure_1 = closure_1_11.substr(closure_1_11.length);
        const found = obj.sortBy((text) => -text.text.length).filter((item, index) => {
          const formatted = closure_1.toLowerCase();
          return formatted === item.text.toLowerCase();
        });
        const mapped = found.map((item, index) => ({ text: arr + item.text, id: item.id }));
        firstResult = mapped.first();
        const sortByResult = obj.sortBy((text) => -text.text.length);
      }
      let id;
      if (firstResult != null) {
        id = firstResult.id;
      }
      if (null != id) {
        obj = { type: "userMention", userId: null };
        obj[1] = firstResult.id;
        let tmp6 = obj;
      } else {
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult1 = null;
        if (closure_1_11[0] === closure_1_11) {
          closure_1 = closure_1_11.substr(closure_1_11.length);
          const found1 = closure_3.sortBy((text) => -text.text.length).filter((item, index) => {
            const formatted = closure_1.toLowerCase();
            return formatted === item.text.toLowerCase();
          });
          const mapped1 = found1.map((item, index) => ({ text: arr + item.text, id: item.id }));
          firstResult1 = mapped1.first();
          const sortByResult1 = closure_3.sortBy((text) => -text.text.length);
        }
        let id1;
        if (firstResult1 != null) {
          id1 = firstResult1.id;
        }
        if (null != id1) {
          obj = { type: "userMention", userId: null };
          obj[1] = firstResult1.id;
          tmp6 = obj;
        }
      }
      return tmp6;
    }
    if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.USER) {
      const matchUserResult = matchUser();
      if (null != matchUserResult) {
        return matchUserResult;
      } else {
        closure_1_13.lastIndex = 0;
        const match = closure_1_13.exec(str);
        if (null != match) {
          const findByTagResult = closure_1_10.findByTag(match[2], match[3]);
          if (null != findByTagResult) {
            obj = { type: "userMention", userId: null };
            obj[1] = findByTagResult.id;
            return obj;
          }
        }
      }
    }
    function matchRole() {
      const arr = closure_1_11;
      obj = closure_2;
      if (typeof closure_1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let firstResult = null;
      if (arr[0] === arr) {
        closure_1 = str.substr(arr.length);
        const found = obj.sortBy((text) => -text.text.length).filter((item, index) => {
          const formatted = closure_1.toLowerCase();
          return formatted === item.text.toLowerCase();
        });
        const mapped = found.map((item, index) => ({ text: arr + item.text, id: item.id }));
        firstResult = mapped.first();
        const sortByResult = obj.sortBy((text) => -text.text.length);
      }
      let id;
      if (firstResult != null) {
        id = firstResult.id;
      }
      if (null != id) {
        obj = { type: "roleMention", roleId: null };
        obj[1] = firstResult.id;
      } else if ("@everyone" === str) {
        obj = { type: "textMention", text: "@everyone" };
      }
      return obj;
    }
    if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.ROLE) {
      const matchRoleResult = matchRole();
      if (null != matchRoleResult) {
        return matchRoleResult;
      }
    }
    if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.CHANNEL) {
      arr6 = closure_1_12;
      if (typeof closure_1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let firstResult = null;
      if (str[0] === arr6) {
        closure_1 = str.substr(arr6.length);
        let found = obj6.sortBy((text) => -text.text.length).filter((item, index) => {
          const formatted = closure_1.toLowerCase();
          return formatted === item.text.toLowerCase();
        });
        let mapped = found.map((item, index) => ({ text: arr + item.text, id: item.id }));
        firstResult = mapped.first();
        let sortByResult = obj6.sortBy((text) => -text.text.length);
      }
      if (null != firstResult) {
        if (null != firstResult.id) {
          obj = { type: "channelMention", channelId: null };
          obj[1] = firstResult.id;
          return obj;
        }
      }
      obj6 = closure_1_16(arr6.channel, type.channelTypes);
    }
    if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.MENTIONABLE) {
      const matchRoleResult1 = matchRole();
      if (null != matchRoleResult1) {
        return matchRoleResult1;
      } else {
        const matchUserResult1 = matchUser();
        if (null != matchUserResult1) {
          return matchUserResult1;
        } else {
          closure_1_13.lastIndex = 0;
          const match1 = closure_1_13.exec(str);
          if (null != match1) {
            const findByTagResult1 = closure_1_10.findByTag(match1[2], match1[3]);
            if (null != findByTagResult1) {
              obj1 = { type: "userMention", userId: null };
              obj1[1] = findByTagResult1.id;
              return obj1;
            }
          }
        }
      }
    }
    return { type: "text", text };
  };
  obj.channel = channel;
  return obj;
}.prototype;
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/ApplicationCommandOptionValueParser.tsx");

export { getUsers };
export const getRoles = function getRoles(guild_id) {
  guild_id = guild_id.guild_id;
  if (null != guild_id) {
    sortedRoles = sortedRoles.getSortedRoles(guild_id);
  } else {
    sortedRoles = [];
  }
  return applyDefault(sortedRoles).map((item, index) => ({ id: item.id, text: item.name }));
};
export { getChannels };
export const ApplicationCommandOptionValueParser = prototype;
export const parseOptionValuesForSend = function parseOptionValuesForSend(channel, activeCommand, current) {
  if (null == activeCommand.options) {
    return {};
  } else {
    let obj = {};
    const options = activeCommand.options;
    const parserState = rebuild.createParserState(channel);
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let tmp5 = current[nextResult.name];
      let tmp6 = tmp5;
      if (null != tmp5) {
        if ("text" === tmp6[0].type) {
          if (tmp4.type === PermissionOverwriteType.ApplicationCommandOptionType.STRING) {
            if (null == tmp4.choices) {
              if (!tmp4.autocomplete) {
                obj = { type: "text", text: null };
                let obj2 = rebuildDefault;
                obj[1] = obj2.parse(channel, tmp6[0].text, parserState).content;
                let items = [obj];
                obj[tmp4.name] = items;
              }
            }
          }
        }
        obj[tmp4.name] = tmp6;
      }
      continue;
    }
    return obj;
  }
};
export const useApplicationCommandOptionValueParser = function useApplicationCommandOptionValueParser(channel) {
  channel = channel.channel;
  const items = [channel];
  return React.useMemo(() => {
    if (typeof prototype !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(prototype.prototype);
    obj.parse = function parse(text, type) {
      const str = text.trim();
      let arr6 = str;
      let arr = closure_1_15(arr6.channel);
      closure_1 = arr;
      const guild_id = arr6.channel.guild_id;
      if (null != guild_id) {
        let sortedRoles = closure_1_8.getSortedRoles(guild_id);
      } else {
        sortedRoles = [];
      }
      closure_2 = closure_1_1(closure_1_2[9])(sortedRoles).map((item, index) => ({ id: item.id, text: item.name }));
      closure_3 = arr.map((item, index) => {
        obj = {};
        const merged = Object.assign(item);
        obj.text = item.text.split("#")[0];
        return obj;
      });
      function matchUser() {
        obj = closure_1;
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult = null;
        if (closure_1_11[0] === closure_1_11) {
          closure_1 = closure_1_11.substr(closure_1_11.length);
          const found = obj.sortBy((text) => -text.text.length).filter((item, index) => {
            const formatted = closure_1.toLowerCase();
            return formatted === item.text.toLowerCase();
          });
          const mapped = found.map((item, index) => ({ text: arr + item.text, id: item.id }));
          firstResult = mapped.first();
          const sortByResult = obj.sortBy((text) => -text.text.length);
        }
        let id;
        if (firstResult != null) {
          id = firstResult.id;
        }
        if (null != id) {
          obj = { type: "userMention", userId: null };
          obj[1] = firstResult.id;
          let tmp6 = obj;
        } else {
          if (typeof closure_1_14 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let firstResult1 = null;
          if (closure_1_11[0] === closure_1_11) {
            closure_1 = closure_1_11.substr(closure_1_11.length);
            const found1 = closure_3.sortBy((text) => -text.text.length).filter((item, index) => {
              const formatted = closure_1.toLowerCase();
              return formatted === item.text.toLowerCase();
            });
            const mapped1 = found1.map((item, index) => ({ text: arr + item.text, id: item.id }));
            firstResult1 = mapped1.first();
            const sortByResult1 = closure_3.sortBy((text) => -text.text.length);
          }
          let id1;
          if (firstResult1 != null) {
            id1 = firstResult1.id;
          }
          if (null != id1) {
            obj = { type: "userMention", userId: null };
            obj[1] = firstResult1.id;
            tmp6 = obj;
          }
        }
        return tmp6;
      }
      if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.USER) {
        const matchUserResult = matchUser();
        if (null != matchUserResult) {
          return matchUserResult;
        } else {
          closure_1_13.lastIndex = 0;
          const match = closure_1_13.exec(str);
          if (null != match) {
            const findByTagResult = closure_1_10.findByTag(match[2], match[3]);
            if (null != findByTagResult) {
              obj = { type: "userMention", userId: null };
              obj[1] = findByTagResult.id;
              return obj;
            }
          }
        }
      }
      function matchRole() {
        const arr = closure_1_11;
        obj = closure_2;
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult = null;
        if (arr[0] === arr) {
          closure_1 = str.substr(arr.length);
          const found = obj.sortBy((text) => -text.text.length).filter((item, index) => {
            const formatted = closure_1.toLowerCase();
            return formatted === item.text.toLowerCase();
          });
          const mapped = found.map((item, index) => ({ text: arr + item.text, id: item.id }));
          firstResult = mapped.first();
          const sortByResult = obj.sortBy((text) => -text.text.length);
        }
        let id;
        if (firstResult != null) {
          id = firstResult.id;
        }
        if (null != id) {
          obj = { type: "roleMention", roleId: null };
          obj[1] = firstResult.id;
        } else if ("@everyone" === str) {
          obj = { type: "textMention", text: "@everyone" };
        }
        return obj;
      }
      if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.ROLE) {
        const matchRoleResult = matchRole();
        if (null != matchRoleResult) {
          return matchRoleResult;
        }
      }
      if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.CHANNEL) {
        arr6 = closure_1_12;
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult = null;
        if (str[0] === arr6) {
          closure_1 = str.substr(arr6.length);
          let found = obj6.sortBy((text) => -text.text.length).filter((item, index) => {
            const formatted = closure_1.toLowerCase();
            return formatted === item.text.toLowerCase();
          });
          let mapped = found.map((item, index) => ({ text: arr + item.text, id: item.id }));
          firstResult = mapped.first();
          let sortByResult = obj6.sortBy((text) => -text.text.length);
        }
        if (null != firstResult) {
          if (null != firstResult.id) {
            obj = { type: "channelMention", channelId: null };
            obj[1] = firstResult.id;
            return obj;
          }
        }
        obj6 = closure_1_16(arr6.channel, type.channelTypes);
      }
      if (type.type === obj(closure_1_2[13]).ApplicationCommandOptionType.MENTIONABLE) {
        const matchRoleResult1 = matchRole();
        if (null != matchRoleResult1) {
          return matchRoleResult1;
        } else {
          const matchUserResult1 = matchUser();
          if (null != matchUserResult1) {
            return matchUserResult1;
          } else {
            closure_1_13.lastIndex = 0;
            const match1 = closure_1_13.exec(str);
            if (null != match1) {
              const findByTagResult1 = closure_1_10.findByTag(match1[2], match1[3]);
              if (null != findByTagResult1) {
                obj1 = { type: "userMention", userId: null };
                obj1[1] = findByTagResult1.id;
                return obj1;
              }
            }
          }
        }
      }
      return { type: "text", text };
    };
    obj.channel = obj;
    return obj;
  }, items);
};