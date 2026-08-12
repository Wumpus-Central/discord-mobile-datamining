// discord_app/modules/chat_input/native/ApplicationCommandOptionValueParser.tsx
import noop from "noop";
import rebuild from "rebuild";
import { isGuildSelectableChannelType as closure_5 } from "createChannelRecord";
import comparator from "comparator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import markAllUserIdListsStale from "markAllUserIdListsStale";
import mergeGuildAvatar from "mergeGuildAvatar";
import regExp from "regExp";
import { apply } from "../../../../_runtime/00012_apply.js";
import { PermissionOverwriteType } from "../../../flow/Server.tsx";
import { NOOP } from "../../../utils/AutocompleteUtils.tsx";
import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";
import { rebuild } from "../../messages/MessageParser.tsx";

let closure_12;
let unpackModuleId;
const require = arg1;
function getUsers(getGuildId) {
  const guildId = getGuildId.getGuildId();
  if (getGuildId.isPrivate()) {
    let mapped = apply(getGuildId.recipients).map((userId) => ({ userId }));
    const arr3 = apply(getGuildId.recipients);
  } else if (null != guildId) {
    const tmp7 = apply;
    mapped = apply(members.getMembers(guildId)).map((userId) => ({ userId: userId.userId }));
    const tmp7Result = apply(members.getMembers(guildId));
  } else {
    mapped = apply([]);
  }
  const mapped1 = mapped.map((userId) => user.getUser(userId.userId));
  const found = mapped1.filter(isDiscordFrontendDevelopment.isNotNullish);
  return found.map((id) => ({ id: id.id, text: id.tag }));
}
function getChannels(getGuildId, arr) {
  const _require = arr;
  const guildId = getGuildId.getGuildId();
  if (null == guildId) {
    const items = [];
    if (tmp2) {
      items.push(getGuildId);
    }
    tmp2 = null == arr || arr.includes(getGuildId.type);
    return guildId(12)(items).map((id) => {
      const obj = { id: id.id, text: null };
      obj[1] = arr(4534).computeChannelName(id, mergeGuildAvatar, markAllUserIdListsStale);
      return obj;
    });
  } else {
    const dependencyMap = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId);
    const tmp9 = guildId(12);
    const tmp9Result = guildId(12)(_NOOP.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const combined = guildId(12)(_NOOP.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).flatMap((arg0) => outer1_6.getChannels(guildId)[arg0].map((channel) => channel.channel)).concat(rebuild.computeAllActiveJoinedThreads(guildId));
    const found = combined.filter((type) => {
      let hasItem = null == closure_0;
      if (!hasItem) {
        hasItem = closure_0.includes(type.type);
      }
      return hasItem;
    });
    return found.map((id) => {
      const obj = { id: id.id, text: null };
      if (outer1_5(id.type)) {
        let name;
        if (dependencyMap[id.id] != null) {
          name = tmp7.name;
        }
        if (name == null) {
          name = arr(4534).computeChannelName(id, outer1_10, outer1_9);
          const obj3 = arr(4534);
        }
        let channelName = name;
      } else {
        channelName = arr(4534).computeChannelName(id, outer1_10, outer1_9);
        const obj2 = arr(4534);
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
    let arr = outer1_15(arr6.channel);
    let closure_1 = arr;
    const guild_id = arr6.channel.guild_id;
    if (null != guild_id) {
      let sortedRoles = outer1_8.getSortedRoles(guild_id);
    } else {
      sortedRoles = [];
    }
    let closure_2 = outer1_1(outer1_2[9])(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
    let noop = arr.map((text) => {
      const obj = {};
      const merged = Object.assign(text);
      obj.text = text.text.split("#")[0];
      return obj;
    });
    function matchUser() {
      const arr = outer1_11;
      let obj = closure_1;
      if (typeof outer1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let firstResult = null;
      if (arr[0] === arr) {
        closure_1 = str.substr(arr.length);
        const found = obj.sortBy((text) => -text.text.length).filter((text) => {
          const formatted = closure_1.toLowerCase();
          return formatted === text.text.toLowerCase();
        });
        const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
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
        if (typeof outer1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult1 = null;
        if (str[0] === arr) {
          closure_1 = str.substr(arr.length);
          const found1 = obj6.sortBy((text) => -text.text.length).filter((text) => {
            const formatted = closure_1.toLowerCase();
            return formatted === text.text.toLowerCase();
          });
          const mapped1 = found1.map((id) => ({ text: arr + id.text, id: id.id }));
          firstResult1 = mapped1.first();
          const sortByResult1 = obj6.sortBy((text) => -text.text.length);
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
        obj6 = noop;
      }
      return tmp6;
    }
    if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.USER) {
      const matchUserResult = matchUser();
      if (null != matchUserResult) {
        return matchUserResult;
      } else {
        outer1_13.lastIndex = 0;
        const match = outer1_13.exec(str);
        if (null != match) {
          const findByTagResult = outer1_10.findByTag(match[2], match[3]);
          if (null != findByTagResult) {
            obj = { type: "userMention", userId: null };
            obj[1] = findByTagResult.id;
            return obj;
          }
        }
      }
    }
    function matchRole() {
      const arr = outer1_11;
      let obj = closure_2;
      if (typeof outer1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let firstResult = null;
      if (arr[0] === arr) {
        let closure_1 = str.substr(arr.length);
        const found = obj.sortBy((text) => -text.text.length).filter((text) => {
          const formatted = closure_1.toLowerCase();
          return formatted === text.text.toLowerCase();
        });
        const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
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
    if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.ROLE) {
      const matchRoleResult = matchRole();
      if (null != matchRoleResult) {
        return matchRoleResult;
      }
    }
    if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.CHANNEL) {
      arr6 = outer1_12;
      if (typeof outer1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let firstResult = null;
      if (str[0] === arr6) {
        closure_1 = str.substr(arr6.length);
        let found = obj6.sortBy((text) => -text.text.length).filter((text) => {
          const formatted = closure_1.toLowerCase();
          return formatted === text.text.toLowerCase();
        });
        let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
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
      obj6 = outer1_16(arr6.channel, type.channelTypes);
    }
    if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.MENTIONABLE) {
      const matchRoleResult1 = matchRole();
      if (null != matchRoleResult1) {
        return matchRoleResult1;
      } else {
        const matchUserResult1 = matchUser();
        if (null != matchUserResult1) {
          return matchUserResult1;
        } else {
          outer1_13.lastIndex = 0;
          const match1 = outer1_13.exec(str);
          if (null != match1) {
            const findByTagResult1 = outer1_10.findByTag(match1[2], match1[3]);
            if (null != findByTagResult1) {
              const obj1 = { type: "userMention", userId: null };
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
const result = require("createChannelRecord").fileFinishedImporting("modules/chat_input/native/ApplicationCommandOptionValueParser.tsx");

export { getUsers };
export const getRoles = function getRoles(guild_id) {
  guild_id = guild_id.guild_id;
  if (null != guild_id) {
    sortedRoles = sortedRoles.getSortedRoles(guild_id);
  } else {
    sortedRoles = [];
  }
  return apply(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
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
        let tmp21 = tmp5;
        if ("text" === tmp6[0].type) {
          let tmp22 = nextResult;
          let tmp23 = require;
          let tmp24 = dependencyMap;
          let tmp25 = dependencyMap;
          if (tmp4.type === PermissionOverwriteType.ApplicationCommandOptionType.STRING) {
            let tmp7 = nextResult;
            if (null == tmp4.choices) {
              let tmp8 = nextResult;
              if (!tmp4.autocomplete) {
                let tmp9 = nextResult;
                obj = { type: "text", text: null };
                let tmp10 = importDefault;
                let tmp11 = tmp24;
                let obj2 = rebuild;
                let tmp12 = tmp5;
                obj[1] = obj2.parse(channel, tmp6[0].text, parserState).content;
                let items = [obj];
                obj[tmp4.name] = items;
              }
            }
          }
        }
        let tmp13 = nextResult;
        let tmp14 = tmp5;
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
    if (typeof outer1_17 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(outer1_17.prototype);
    obj.parse = function parse(text, type) {
      const str = text.trim();
      let arr6 = str;
      let arr = outer1_15(arr6.channel);
      let closure_1 = arr;
      const guild_id = arr6.channel.guild_id;
      if (null != guild_id) {
        let sortedRoles = outer1_8.getSortedRoles(guild_id);
      } else {
        sortedRoles = [];
      }
      let closure_2 = outer1_1(outer1_2[9])(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
      let noop = arr.map((text) => {
        const obj = {};
        const merged = Object.assign(text);
        obj.text = text.text.split("#")[0];
        return obj;
      });
      function matchUser() {
        const arr = outer1_11;
        let obj = closure_1;
        if (typeof outer1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult = null;
        if (arr[0] === arr) {
          closure_1 = str.substr(arr.length);
          const found = obj.sortBy((text) => -text.text.length).filter((text) => {
            const formatted = closure_1.toLowerCase();
            return formatted === text.text.toLowerCase();
          });
          const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
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
          if (typeof outer1_14 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let firstResult1 = null;
          if (str[0] === arr) {
            closure_1 = str.substr(arr.length);
            const found1 = obj6.sortBy((text) => -text.text.length).filter((text) => {
              const formatted = closure_1.toLowerCase();
              return formatted === text.text.toLowerCase();
            });
            const mapped1 = found1.map((id) => ({ text: arr + id.text, id: id.id }));
            firstResult1 = mapped1.first();
            const sortByResult1 = obj6.sortBy((text) => -text.text.length);
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
          obj6 = noop;
        }
        return tmp6;
      }
      if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.USER) {
        const matchUserResult = matchUser();
        if (null != matchUserResult) {
          return matchUserResult;
        } else {
          outer1_13.lastIndex = 0;
          const match = outer1_13.exec(str);
          if (null != match) {
            const findByTagResult = outer1_10.findByTag(match[2], match[3]);
            if (null != findByTagResult) {
              obj = { type: "userMention", userId: null };
              obj[1] = findByTagResult.id;
              return obj;
            }
          }
        }
      }
      function matchRole() {
        const arr = outer1_11;
        let obj = closure_2;
        if (typeof outer1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult = null;
        if (arr[0] === arr) {
          let closure_1 = str.substr(arr.length);
          const found = obj.sortBy((text) => -text.text.length).filter((text) => {
            const formatted = closure_1.toLowerCase();
            return formatted === text.text.toLowerCase();
          });
          const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
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
      if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.ROLE) {
        const matchRoleResult = matchRole();
        if (null != matchRoleResult) {
          return matchRoleResult;
        }
      }
      if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.CHANNEL) {
        arr6 = outer1_12;
        if (typeof outer1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult = null;
        if (str[0] === arr6) {
          closure_1 = str.substr(arr6.length);
          let found = obj6.sortBy((text) => -text.text.length).filter((text) => {
            const formatted = closure_1.toLowerCase();
            return formatted === text.text.toLowerCase();
          });
          let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
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
        obj6 = outer1_16(arr6.channel, type.channelTypes);
      }
      if (type.type === obj(outer1_2[13]).ApplicationCommandOptionType.MENTIONABLE) {
        const matchRoleResult1 = matchRole();
        if (null != matchRoleResult1) {
          return matchRoleResult1;
        } else {
          const matchUserResult1 = matchUser();
          if (null != matchUserResult1) {
            return matchUserResult1;
          } else {
            outer1_13.lastIndex = 0;
            const match1 = outer1_13.exec(str);
            if (null != match1) {
              const findByTagResult1 = outer1_10.findByTag(match1[2], match1[3]);
              if (null != findByTagResult1) {
                const obj1 = { type: "userMention", userId: null };
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