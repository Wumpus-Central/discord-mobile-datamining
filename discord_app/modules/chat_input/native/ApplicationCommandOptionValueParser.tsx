// discord_app/modules/chat_input/native/ApplicationCommandOptionValueParser.tsx
import applyDefault from "../../../../_runtime/00012_apply.js";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import PermissionOverwriteType from "../../../flow/Server.tsx";
import rebuild from "../../messages/MessageParser.tsx";
import rebuildDefault from "../../messages/MessageParser.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../threads/ActiveJoinedThreadsStore.tsx";
import { isGuildSelectableChannelType as closure_6 } from "../../../records/ChannelRecord.tsx";
import closure_7 from "../../../stores/GuildChannelStore.tsx";
import closure_8 from "../../../stores/GuildMemberStore.tsx";
import closure_9 from "../../../stores/GuildRoleStore.tsx";
import closure_10 from "../../../stores/RelationshipStore.tsx";
import closure_11 from "../../../stores/UserStore.tsx";
import regExp from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";

require = arg1;
function getUsers(getGuildId) {
  const guildId = getGuildId.getGuildId();
  if (getGuildId.isPrivate()) {
    let mapped = applyDefault(getGuildId.recipients).map((userId) => ({ userId }));
    const arr3 = applyDefault(getGuildId.recipients);
  } else if (null != guildId) {
    const tmp7 = applyDefault;
    mapped = applyDefault(members.getMembers(guildId)).map((userId) => ({ userId: userId.userId }));
    const tmp7Result = applyDefault(members.getMembers(guildId));
  } else {
    mapped = applyDefault([]);
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
      const obj = { id: id.id, text: arr(4674).computeChannelName(id, closure_11, closure_10) };
      return obj;
    });
  } else {
    dependencyMap = textChannelNameDisambiguations.getTextChannelNameDisambiguations(guildId);
    const tmp9 = guildId(12);
    const tmp9Result = guildId(12)(require("../../../utils/AutocompleteUtils.tsx").COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const combined = guildId(12)(require("../../../utils/AutocompleteUtils.tsx").COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS).flatMap((arg0) => closure_1_7.getChannels(guildId)[arg0].map((channel) => channel.channel)).concat(closure_5.computeAllActiveJoinedThreads(guildId));
    const found = combined.filter((type) => {
      let hasItem = null == closure_0;
      if (!hasItem) {
        hasItem = closure_0.includes(type.type);
      }
      return hasItem;
    });
    return found.map((id) => {
      const obj = { id: id.id, text: null };
      if (closure_1_6(id.type)) {
        let name;
        if (dependencyMap[id.id] != null) {
          name = tmp7.name;
        }
        if (name == null) {
          name = arr(4674).computeChannelName(id, closure_1_11, closure_1_10);
          const obj3 = arr(4674);
        }
        let channelName = name;
      } else {
        channelName = arr(4674).computeChannelName(id, closure_1_11, closure_1_10);
        const obj2 = arr(4674);
      }
      obj[1] = channelName;
      return obj;
    });
  }
}
({ MENTION_SENTINEL: closure_12, CHANNEL_SENTINEL: map1 } = regExp);
function matchPrefix(arg0, arg1, arg2) {

}
const prototype = function ApplicationCommandOptionValueParser(channel) {
  const obj = Object.create(new.target.prototype);
  obj.parse = function parse(text, type) {
    const trimmed = text.trim();
    let arr7 = trimmed;
    const arr2 = closure_1_15(arr7.channel);
    closure_1 = arr2;
    const guild_id = arr7.channel.guild_id;
    if (null != guild_id) {
      let sortedRoles = closure_1_9.getSortedRoles(guild_id);
    } else {
      sortedRoles = [];
    }
    closure_2 = closure_1_1(closure_1_2[10])(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
    closure_3 = arr2.map((text) => {
      obj = {};
      const merged = Object.assign(text);
      obj.text = text.text.split("#")[0];
      return obj;
    });
    function matchUser() {
      const arr = closure_1_12;
      obj = closure_1;
      if (typeof closure_1_14 !== "function") {
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
        if (typeof closure_1_14 !== "function") {
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
        obj6 = closure_3;
      }
      return tmp6;
    }
    if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.USER) {
      const matchUserResult = matchUser();
      if (null != matchUserResult) {
        return matchUserResult;
      } else {
        let str = trimmed;
        if (trimmed[0] === closure_1_12) {
          str = trimmed.slice(1);
        }
        [tmp7, tmp8] = closure_1_3(str.split("#", 2), 2);
        if (null != tmp8) {
          if ("0000" !== tmp8) {
            obj = /^[0-9]{4}$/;
            if (obj.test(tmp8)) {
              let findByTagResult = closure_1_11.findByTag(tmp7, tmp8);
            }
          }
          if (null != findByTagResult) {
            obj = { type: "userMention", userId: null };
            obj[1] = findByTagResult.id;
            return obj;
          }
        }
        findByTagResult = closure_1_11.findByTag(tmp7);
        let tmp6 = closure_1_3(str.split("#", 2), 2);
      }
    }
    function matchRole() {
      const arr = closure_1_12;
      obj = closure_2;
      if (typeof closure_1_14 !== "function") {
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
        obj = { type: "roleMention", roleId: null };
        obj[1] = firstResult.id;
      } else if ("@everyone" === str) {
        obj = { type: "textMention", text: "@everyone" };
      }
      return obj;
    }
    if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.ROLE) {
      const matchRoleResult = matchRole();
      if (null != matchRoleResult) {
        return matchRoleResult;
      }
    }
    if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.CHANNEL) {
      arr7 = closure_1_13;
      if (typeof closure_1_14 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      let firstResult = null;
      if (trimmed[0] === arr7) {
        closure_1 = trimmed.substr(arr7.length);
        let found = obj8.sortBy((text) => -text.text.length).filter((text) => {
          const formatted = closure_1.toLowerCase();
          return formatted === text.text.toLowerCase();
        });
        let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
        firstResult = mapped.first();
        let sortByResult = obj8.sortBy((text) => -text.text.length);
      }
      if (null != firstResult) {
        if (null != firstResult.id) {
          obj = { type: "channelMention", channelId: null };
          obj[1] = firstResult.id;
          return obj;
        }
      }
      obj8 = closure_1_16(arr7.channel, type.channelTypes);
    }
    if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.MENTIONABLE) {
      const matchRoleResult1 = matchRole();
      if (null != matchRoleResult1) {
        return matchRoleResult1;
      } else {
        const matchUserResult1 = matchUser();
        if (null != matchUserResult1) {
          return matchUserResult1;
        } else {
          let str4 = trimmed;
          if (trimmed[0] === closure_1_12) {
            str4 = trimmed.slice(1);
          }
          [tmp16, tmp17] = closure_1_3(str4.split("#", 2), 2);
          if (null != tmp17) {
            if ("0000" !== tmp17) {
              let obj2 = /^[0-9]{4}$/;
              if (obj2.test(tmp17)) {
                let findByTagResult1 = closure_1_11.findByTag(tmp16, tmp17);
              }
            }
            if (null != findByTagResult1) {
              obj1 = { type: "userMention", userId: null };
              obj1[1] = findByTagResult1.id;
              return obj1;
            }
          }
          findByTagResult1 = closure_1_11.findByTag(tmp16);
          const tmp15 = closure_1_3(str4.split("#", 2), 2);
        }
      }
    }
    obj2 = { type: "text", text };
    return obj2;
  };
  obj.channel = channel;
  return obj;
}.prototype;
const result = require("set").fileFinishedImporting("modules/chat_input/native/ApplicationCommandOptionValueParser.tsx");

export { getUsers };
export const getRoles = function getRoles(guild_id) {
  guild_id = guild_id.guild_id;
  if (null != guild_id) {
    sortedRoles = sortedRoles.getSortedRoles(guild_id);
  } else {
    sortedRoles = [];
  }
  return applyDefault(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
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
                let obj2 = rebuildDefault;
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
    if (typeof closure_1_17 !== "function") {
      HermesBuiltin.throwTypeError();
    }
    let obj = Object.create(closure_1_17.prototype);
    obj.parse = function parse(text, type) {
      const trimmed = text.trim();
      let arr7 = trimmed;
      const arr2 = closure_1_15(arr7.channel);
      closure_1 = arr2;
      const guild_id = arr7.channel.guild_id;
      if (null != guild_id) {
        let sortedRoles = closure_1_9.getSortedRoles(guild_id);
      } else {
        sortedRoles = [];
      }
      closure_2 = closure_1_1(closure_1_2[10])(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
      closure_3 = arr2.map((text) => {
        obj = {};
        const merged = Object.assign(text);
        obj.text = text.text.split("#")[0];
        return obj;
      });
      function matchUser() {
        const arr = closure_1_12;
        obj = closure_1;
        if (typeof closure_1_14 !== "function") {
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
          if (typeof closure_1_14 !== "function") {
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
          obj6 = closure_3;
        }
        return tmp6;
      }
      if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.USER) {
        const matchUserResult = matchUser();
        if (null != matchUserResult) {
          return matchUserResult;
        } else {
          let str = trimmed;
          if (trimmed[0] === closure_1_12) {
            str = trimmed.slice(1);
          }
          [tmp7, tmp8] = closure_1_3(str.split("#", 2), 2);
          if (null != tmp8) {
            if ("0000" !== tmp8) {
              obj = /^[0-9]{4}$/;
              if (obj.test(tmp8)) {
                let findByTagResult = closure_1_11.findByTag(tmp7, tmp8);
              }
            }
            if (null != findByTagResult) {
              obj = { type: "userMention", userId: null };
              obj[1] = findByTagResult.id;
              return obj;
            }
          }
          findByTagResult = closure_1_11.findByTag(tmp7);
          let tmp6 = closure_1_3(str.split("#", 2), 2);
        }
      }
      function matchRole() {
        const arr = closure_1_12;
        obj = closure_2;
        if (typeof closure_1_14 !== "function") {
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
          obj = { type: "roleMention", roleId: null };
          obj[1] = firstResult.id;
        } else if ("@everyone" === str) {
          obj = { type: "textMention", text: "@everyone" };
        }
        return obj;
      }
      if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.ROLE) {
        const matchRoleResult = matchRole();
        if (null != matchRoleResult) {
          return matchRoleResult;
        }
      }
      if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.CHANNEL) {
        arr7 = closure_1_13;
        if (typeof closure_1_14 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        let firstResult = null;
        if (trimmed[0] === arr7) {
          closure_1 = trimmed.substr(arr7.length);
          let found = obj8.sortBy((text) => -text.text.length).filter((text) => {
            const formatted = closure_1.toLowerCase();
            return formatted === text.text.toLowerCase();
          });
          let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
          firstResult = mapped.first();
          let sortByResult = obj8.sortBy((text) => -text.text.length);
        }
        if (null != firstResult) {
          if (null != firstResult.id) {
            obj = { type: "channelMention", channelId: null };
            obj[1] = firstResult.id;
            return obj;
          }
        }
        obj8 = closure_1_16(arr7.channel, type.channelTypes);
      }
      if (type.type === obj(closure_1_2[14]).ApplicationCommandOptionType.MENTIONABLE) {
        const matchRoleResult1 = matchRole();
        if (null != matchRoleResult1) {
          return matchRoleResult1;
        } else {
          const matchUserResult1 = matchUser();
          if (null != matchUserResult1) {
            return matchUserResult1;
          } else {
            let str4 = trimmed;
            if (trimmed[0] === closure_1_12) {
              str4 = trimmed.slice(1);
            }
            [tmp16, tmp17] = closure_1_3(str4.split("#", 2), 2);
            if (null != tmp17) {
              if ("0000" !== tmp17) {
                let obj2 = /^[0-9]{4}$/;
                if (obj2.test(tmp17)) {
                  let findByTagResult1 = closure_1_11.findByTag(tmp16, tmp17);
                }
              }
              if (null != findByTagResult1) {
                obj1 = { type: "userMention", userId: null };
                obj1[1] = findByTagResult1.id;
                return obj1;
              }
            }
            findByTagResult1 = closure_1_11.findByTag(tmp16);
            const tmp15 = closure_1_3(str4.split("#", 2), 2);
          }
        }
      }
      obj2 = { type: "text", text };
      return obj2;
    };
    obj.channel = obj;
    return obj;
  }, items);
};