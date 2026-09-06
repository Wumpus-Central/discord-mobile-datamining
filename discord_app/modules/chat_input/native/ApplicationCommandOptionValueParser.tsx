// discord_app/modules/chat_input/native/ApplicationCommandOptionValueParser.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import Server from "../../../flow/Server.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import MessageParser from "../../messages/MessageParser.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ActiveJoinedThreadsStore from "../../threads/ActiveJoinedThreadsStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const MessageParserDefault = MessageParser;

require = fn;
function getUsers(getGuildId) {
  const guildId = getGuildId.getGuildId();
  if (getGuildId.isPrivate()) {
    let mapped = _modDef12(getGuildId.recipients).map((userId) => ({ userId }));
    const arr3 = _modDef12(getGuildId.recipients);
  } else if (null != guildId) {
    mapped = _modDef12(GuildMemberStore.getMembers(guildId)).map((userId) => ({ userId: userId.userId }));
    const tmp7Result = _modDef12(GuildMemberStore.getMembers(guildId));
  } else {
    mapped = _modDef12([]);
  }
  const mapped1 = mapped.map((userId) => user.getUser(userId.userId));
  const found = mapped1.filter(GlobalUtils.isNotNullish);
  return found.map((id) => ({ id: id.id, text: id.tag }));
}
function getChannels(getGuildId, arr) {
  _require = arr;
  const guildId = getGuildId.getGuildId();
  if (null == guildId) {
    const items = [];
    if (tmp2) {
      items.push(getGuildId);
    }
    tmp2 = null == arr || arr.includes(getGuildId.type);
    return guildId(12)(items).map((id) => {
      const obj = { id: id.id, text: closure_0(4713).computeChannelName(id, UserStore, RelationshipStore) };
      return obj;
    });
  } else {
    dependencyMap = GuildChannelStore.getTextChannelNameDisambiguations(guildId);
    const tmp9 = guildId(12);
    const tmp9Result = guildId(12)(require("AutocompleteUtils").COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const combined = guildId(12)(require("AutocompleteUtils").COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS)
      .flatMap((item) => GuildChannelStore.getChannels(guildId)[item].map((channel) => channel.channel))
      .concat(ActiveJoinedThreadsStore.computeAllActiveJoinedThreads(guildId));
    const found = combined.filter((type) => {
      let hasItem = null == closure_0;
      if (!hasItem) {
        hasItem = closure_0.includes(type.type);
      }
      return hasItem;
    });
    return found.map((id) => {
      const obj = { id: id.id, text: null };
      if (closure_6(id.type)) {
        let name;
        if (dependencyMap[id.id] != null) {
          name = tmp7.name;
        }
        if (name == null) {
          name = useChannelName.computeChannelName(id, UserStore, RelationshipStore);
        }
        let channelName = name;
      } else {
        channelName = useChannelName.computeChannelName(id, UserStore, RelationshipStore);
      }
      obj.text = channelName;
      return obj;
    });
  }
}
let closure_6 = fn(1961).isGuildSelectableChannelType;
const ChannelAutocompleteConstants = fn(5000);
({ MENTION_SENTINEL: closure_12, CHANNEL_SENTINEL: map1 } = ChannelAutocompleteConstants);
function matchPrefix(arg0, arg1, arg2) {}
const prototype = function ApplicationCommandOptionValueParser(channel) {
  const obj = Object.create(new.target.prototype);
  obj.parse = function parse(text, type) {
    const trimmed = text.trim();
    let arr7 = trimmed;
    const arr2 = getUsers(obj.channel);
    closure_1 = arr2;
    const guild_id = obj.channel.guild_id;
    if (null != guild_id) {
      sortedRoles = sortedRoles.getSortedRoles(guild_id);
    } else {
      sortedRoles = [];
    }
    closure_2 = _modDef12(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
    closure_3 = arr2.map((text) => {
      obj = {};
      const merged = Object.assign(text);
      obj.text = text.text.split("#")[0];
      return obj;
    });
    function matchUser() {
      const arr = closure_2_12;
      obj = closure_1;
      if (typeof closure_2_14 === "function") {
        let firstResult = null;
        if (str[0] === arr) {
          closure_1 = str.substr(arr.length);
          const found = obj
            .sortBy((text) => -text.text.length)
            .filter((text) => {
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
          obj = { type: "userMention", userId: firstResult.id };
          let tmp7 = obj;
        } else {
          if (typeof tmp === "function") {
            let firstResult1 = null;
            if (str[0] === arr) {
              closure_1 = str.substr(arr.length);
              const found1 = obj6
                .sortBy((text) => -text.text.length)
                .filter((text) => {
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
              obj = { type: "userMention", userId: firstResult1.id };
              tmp7 = obj;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          obj6 = closure_3;
        }
        return tmp7;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (type.type === channel(1894).ApplicationCommandOptionType.USER) {
      const matchUserResult = matchUser();
      if (null != matchUserResult) {
        return matchUserResult;
      } else {
        let str = trimmed;
        if (trimmed[0] === closure_2_12) {
          str = trimmed.slice(1);
        }
        [tmp7, tmp8] = _slicedToArray(str.split("#", 2), 2);
        if (null != tmp8) {
          if ("0000" !== tmp8) {
            obj = /^[0-9]{4}$/;
            if (obj.test(tmp8)) {
              let findByTagResult = UserStore.findByTag(tmp7, tmp8);
            }
          }
          if (null != findByTagResult) {
            obj = { type: "userMention", userId: findByTagResult.id };
            return obj;
          }
        }
        findByTagResult = UserStore.findByTag(tmp7);
        const tmp6 = _slicedToArray(str.split("#", 2), 2);
      }
    }
    function matchRole() {
      const arr = closure_2_12;
      obj = closure_2;
      if (typeof closure_2_14 === "function") {
        let firstResult = null;
        if (str[0] === arr) {
          closure_1 = str.substr(arr.length);
          const found = obj
            .sortBy((text) => -text.text.length)
            .filter((text) => {
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
          obj = { type: "roleMention", roleId: firstResult.id };
        } else if ("@everyone" === str) {
          obj = { type: "textMention", text: "@everyone" };
        }
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    if (type.type === channel(1894).ApplicationCommandOptionType.ROLE) {
      const matchRoleResult = matchRole();
      if (null != matchRoleResult) {
        return matchRoleResult;
      }
    }
    if (type.type === channel(1894).ApplicationCommandOptionType.CHANNEL) {
      arr7 = closure_2_13;
      if (typeof matchPrefix === "function") {
        let firstResult = null;
        if (trimmed[0] === arr7) {
          closure_1 = trimmed.substr(arr7.length);
          let found = obj8
            .sortBy((text) => -text.text.length)
            .filter((text) => {
              const formatted = closure_1.toLowerCase();
              return formatted === text.text.toLowerCase();
            });
          let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
          firstResult = mapped.first();
          let sortByResult = obj8.sortBy((text) => -text.text.length);
        }
        if (null != firstResult) {
          if (null != firstResult.id) {
            obj = { type: "channelMention", channelId: firstResult.id };
            return obj;
          }
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      obj8 = getChannels(obj.channel, type.channelTypes);
    }
    if (type.type === channel(1894).ApplicationCommandOptionType.MENTIONABLE) {
      const matchRoleResult1 = matchRole();
      if (null != matchRoleResult1) {
        return matchRoleResult1;
      } else {
        const matchUserResult1 = matchUser();
        if (null != matchUserResult1) {
          return matchUserResult1;
        } else {
          let str4 = trimmed;
          if (trimmed[0] === closure_2_12) {
            str4 = trimmed.slice(1);
          }
          [tmp16, tmp17] = _slicedToArray(str4.split("#", 2), 2);
          if (null != tmp17) {
            if ("0000" !== tmp17) {
              let obj2 = /^[0-9]{4}$/;
              if (obj2.test(tmp17)) {
                let findByTagResult1 = UserStore.findByTag(tmp16, tmp17);
              }
            }
            if (null != findByTagResult1) {
              const obj1 = { type: "userMention", userId: findByTagResult1.id };
              return obj1;
            }
          }
          findByTagResult1 = UserStore.findByTag(tmp16);
          const tmp15 = _slicedToArray(str4.split("#", 2), 2);
        }
      }
    }
    obj2 = { type: "text", text };
    return obj2;
  };
  obj.channel = channel;
  return obj;
}.prototype;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/ApplicationCommandOptionValueParser.tsx");

export { getUsers };
export const getRoles = function getRoles(guild_id) {
  guild_id = guild_id.guild_id;
  if (null != guild_id) {
    let sortedRoles = GuildRoleStore.getSortedRoles(guild_id);
  } else {
    sortedRoles = [];
  }
  return _modDef12(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
};
export { getChannels };
export const ApplicationCommandOptionValueParser = prototype;
export const parseOptionValuesForSend = function parseOptionValuesForSend(channel, command, current) {
  if (null == command.options) {
    return {};
  } else {
    let obj = {};
    const options = command.options;
    const parserState = MessageParser.createParserState(channel);
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let tmp5 = current[nextResult.name];
      let tmp6 = tmp5;
      if (null != tmp5) {
        if ("text" === tmp6[0].type) {
          if (tmp4.type === Server.ApplicationCommandOptionType.STRING) {
            if (null == tmp4.choices) {
              if (!tmp4.autocomplete) {
                obj = { type: "text", text: null };
                let obj2 = MessageParserDefault;
                obj.text = obj2.parse(channel, tmp6[0].text, parserState).content;
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
  return noop.useMemo(() => {
    if (typeof prototype === "function") {
      let obj = Object.create(prototype.prototype);
      obj.parse = function parse(text, type) {
        const trimmed = text.trim();
        let arr7 = trimmed;
        const arr2 = getUsers(obj.channel);
        closure_1 = arr2;
        const guild_id = obj.channel.guild_id;
        if (null != guild_id) {
          sortedRoles = sortedRoles.getSortedRoles(guild_id);
        } else {
          sortedRoles = [];
        }
        closure_2 = _modDef12(sortedRoles).map((id) => ({ id: id.id, text: id.name }));
        closure_3 = arr2.map((text) => {
          obj = {};
          const merged = Object.assign(text);
          obj.text = text.text.split("#")[0];
          return obj;
        });
        function matchUser() {
          const arr = closure_2_12;
          obj = closure_1;
          if (typeof closure_2_14 === "function") {
            let firstResult = null;
            if (str[0] === arr) {
              closure_1 = str.substr(arr.length);
              const found = obj
                .sortBy((text) => -text.text.length)
                .filter((text) => {
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
              obj = { type: "userMention", userId: firstResult.id };
              let tmp7 = obj;
            } else {
              if (typeof tmp === "function") {
                let firstResult1 = null;
                if (str[0] === arr) {
                  closure_1 = str.substr(arr.length);
                  const found1 = obj6
                    .sortBy((text) => -text.text.length)
                    .filter((text) => {
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
                  obj = { type: "userMention", userId: firstResult1.id };
                  tmp7 = obj;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
              obj6 = closure_3;
            }
            return tmp7;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (type.type === channel(1894).ApplicationCommandOptionType.USER) {
          const matchUserResult = matchUser();
          if (null != matchUserResult) {
            return matchUserResult;
          } else {
            let str = trimmed;
            if (trimmed[0] === closure_2_12) {
              str = trimmed.slice(1);
            }
            [tmp7, tmp8] = _slicedToArray(str.split("#", 2), 2);
            if (null != tmp8) {
              if ("0000" !== tmp8) {
                obj = /^[0-9]{4}$/;
                if (obj.test(tmp8)) {
                  let findByTagResult = UserStore.findByTag(tmp7, tmp8);
                }
              }
              if (null != findByTagResult) {
                obj = { type: "userMention", userId: findByTagResult.id };
                return obj;
              }
            }
            findByTagResult = UserStore.findByTag(tmp7);
            const tmp6 = _slicedToArray(str.split("#", 2), 2);
          }
        }
        function matchRole() {
          const arr = closure_2_12;
          obj = closure_2;
          if (typeof closure_2_14 === "function") {
            let firstResult = null;
            if (str[0] === arr) {
              closure_1 = str.substr(arr.length);
              const found = obj
                .sortBy((text) => -text.text.length)
                .filter((text) => {
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
              obj = { type: "roleMention", roleId: firstResult.id };
            } else if ("@everyone" === str) {
              obj = { type: "textMention", text: "@everyone" };
            }
            return obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        if (type.type === channel(1894).ApplicationCommandOptionType.ROLE) {
          const matchRoleResult = matchRole();
          if (null != matchRoleResult) {
            return matchRoleResult;
          }
        }
        if (type.type === channel(1894).ApplicationCommandOptionType.CHANNEL) {
          arr7 = closure_2_13;
          if (typeof matchPrefix === "function") {
            let firstResult = null;
            if (trimmed[0] === arr7) {
              closure_1 = trimmed.substr(arr7.length);
              let found = obj8
                .sortBy((text) => -text.text.length)
                .filter((text) => {
                  const formatted = closure_1.toLowerCase();
                  return formatted === text.text.toLowerCase();
                });
              let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
              firstResult = mapped.first();
              let sortByResult = obj8.sortBy((text) => -text.text.length);
            }
            if (null != firstResult) {
              if (null != firstResult.id) {
                obj = { type: "channelMention", channelId: firstResult.id };
                return obj;
              }
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          obj8 = getChannels(obj.channel, type.channelTypes);
        }
        if (type.type === channel(1894).ApplicationCommandOptionType.MENTIONABLE) {
          const matchRoleResult1 = matchRole();
          if (null != matchRoleResult1) {
            return matchRoleResult1;
          } else {
            const matchUserResult1 = matchUser();
            if (null != matchUserResult1) {
              return matchUserResult1;
            } else {
              let str4 = trimmed;
              if (trimmed[0] === closure_2_12) {
                str4 = trimmed.slice(1);
              }
              [tmp16, tmp17] = _slicedToArray(str4.split("#", 2), 2);
              if (null != tmp17) {
                if ("0000" !== tmp17) {
                  let obj2 = /^[0-9]{4}$/;
                  if (obj2.test(tmp17)) {
                    let findByTagResult1 = UserStore.findByTag(tmp16, tmp17);
                  }
                }
                if (null != findByTagResult1) {
                  const obj1 = { type: "userMention", userId: findByTagResult1.id };
                  return obj1;
                }
              }
              findByTagResult1 = UserStore.findByTag(tmp16);
              const tmp15 = _slicedToArray(str4.split("#", 2), 2);
            }
          }
        }
        obj2 = { type: "text", text };
        return obj2;
      };
      obj.channel = tmp;
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }, items);
};
