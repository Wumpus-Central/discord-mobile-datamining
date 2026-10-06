// discord_app/modules/chat_input/native/ApplicationCommandOptionValueParser.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import Server from "../../../flow/Server.tsx";
import ChannelRecord from "../../../records/ChannelRecord.tsx";
import useChannelName from "../../channel/useChannelName.tsx";
import MessageParser from "../../messages/MessageParser.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ActiveJoinedThreadsStore from "../../threads/ActiveJoinedThreadsStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const MessageParserDefault = MessageParser;
let _require, dependencyMap;

let closure_12;
let map1;
const f108523 = (id) => ({ id: id.id, text: id.name });
function getUsers(getGuildId) {
  let mapped;
  let user;
  const guildId = getGuildId.getGuildId();
  if (getGuildId.isPrivate()) {
    const arr3 = _modDef12(getGuildId.recipients);
    mapped = arr3.map((userId) => ({ userId }));
  } else if (null != guildId) {
    const tmp7 = _modDef12;
    const tmp7Result = tmp7(GuildMemberStore.getMembers(guildId));
    mapped = tmp7Result.map((userId) => ({ userId: userId.userId }));
  } else {
    mapped = _modDef12([]);
  }
  const mapped1 = mapped.map((userId) => user.getUser(userId.userId));
  const found = mapped1.filter(GlobalUtils.isNotNullish);
  return found.map((id) => ({ id: id.id, text: id.tag }));
}
function getChannels(getGuildId, arr) {
  let closure_2;
  _require = arr;
  const guildId = getGuildId.getGuildId();
  if (null == guildId) {
    const items = [];
    const tmp2 = null == arr || arr.includes(getGuildId.type);
    if (tmp2) {
      arr = items.push(getGuildId);
    }
    const arr2 = guildId(12)(items);
    return arr2.map((id) => {
      let obj2;
      const obj = { id: id.id, text: obj2.computeChannelName(id, UserStore, RelationshipStore) };
      obj2 = arr(closure_2[12]);
      return obj;
    });
  } else {
    dependencyMap = GuildChannelStore.getTextChannelNameDisambiguations(guildId);
    const tmp7 = guildId;
    const tmp9 = guildId(12);
    const tmp9Result = tmp9(require("AutocompleteUtils").COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS);
    const flatMapResult = tmp9Result.flatMap((item) => {
      arr = GuildChannelStore.getChannels(guildId)[item];
      return arr.map((channel) => channel.channel);
    });
    const combined = flatMapResult.concat(ActiveJoinedThreadsStore.computeAllActiveJoinedThreads(guildId));
    const found = combined.filter((type) => {
      const hasItem = null == arr || arr.includes(type.type);
      return hasItem;
    });
    return found.map((id) => {
      let channelName;
      const obj = { id: id.id, text: channelName };
      if (closure_6(id.type)) {
        let name;
        if (closure_2[id.id] != null) {
          name = tmp7.name;
        }
        if (name == null) {
          const obj3 = useChannelName;
          name = obj3.computeChannelName(id, UserStore, RelationshipStore);
        }
        channelName = name;
      } else {
        const obj2 = useChannelName;
        channelName = obj2.computeChannelName(id, UserStore, RelationshipStore);
      }
      return obj;
    });
  }
}
let closure_6 = ChannelRecord.isGuildSelectableChannelType;
({ MENTION_SENTINEL: closure_12, CHANNEL_SENTINEL: map1 } = ChannelAutocompleteConstants);
function matchPrefix(arg0, arg1, arg2) {}
class ApplicationCommandOptionValueParser {
  constructor(channel) {
    const obj = Object.create(new.target.prototype);
    obj.parse = function parse(text, type) {
      let tmp16;
      let tmp17;
      let tmp7;
      let tmp8;
      const f108528 = (text) => -text.text.length;
      const trimmed = text.trim();
      const tmp = obj;
      const arr2 = closure_2_15(obj.channel);
      const guild_id = obj.channel.guild_id;
      if (null != guild_id) {
        sortedRoles = sortedRoles.getSortedRoles(guild_id);
      } else {
        sortedRoles = [];
      }
      const arr4 = closure_2_1(closure_2_2[10])(sortedRoles);
      let closure_2 = arr4.map(f108523);
      let closure_3 = arr2.map((text) => {
        obj = { text: str.split("#")[0] };
        const merged = Object.assign(text);
        return obj;
      });
      function matchUser() {
        if (typeof closure_2_14 === "function") {
          let tmp7;
          let firstResult = null;
          if (trimmed[0] === closure_2_12) {
            let closure_1 = trimmed.substr(closure_2_12.length);
            const sortByResult = arr2.sortBy(f108528);
            const found = sortByResult.filter((text) => {
              const str = text.text;
              const formatted = closure_1.toLowerCase();
              return formatted === str.toLowerCase();
            });
            const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
            firstResult = mapped.first();
          }
          let id;
          if (firstResult != null) {
            id = firstResult.id;
          }
          if (null != id) {
            tmp7 = { type: "userMention", userId: firstResult.id };
            const obj2 = { type: "userMention", userId: firstResult.id };
          } else if (typeof tmp === "function") {
            let firstResult1 = null;
            if (trimmed[0] === closure_2_12) {
              closure_1 = trimmed.substr(closure_2_12.length);
              const sortByResult1 = closure_3.sortBy(f108528);
              const found1 = sortByResult1.filter((text) => {
                const str = text.text;
                const formatted = closure_1.toLowerCase();
                return formatted === str.toLowerCase();
              });
              const mapped1 = found1.map((id) => ({ text: arr + id.text, id: id.id }));
              firstResult1 = mapped1.first();
            }
            let id1;
            if (firstResult1 != null) {
              id1 = firstResult1.id;
            }
            if (null != id1) {
              tmp7 = { type: "userMention", userId: firstResult1.id };
              const obj3 = { type: "userMention", userId: firstResult1.id };
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          return tmp7;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.USER) {
        const matchUserResult = matchUser();
        if (null != matchUserResult) {
          return matchUserResult;
        } else {
          let str = trimmed;
          if (trimmed[0] === closure_2_12) {
            str = trimmed.slice(1);
          }
          [tmp7, tmp8] = closure_2_3(str.split("#", 2), 2);
          closure_2_3(str.split("#", 2), 2);
          if (null != tmp8) {
            let findByTagResult;
            if ("0000" !== tmp8) {
              obj = /^[0-9]{4}$/;
              if (obj.test(tmp8)) {
                findByTagResult = closure_2_11.findByTag(tmp7, tmp8);
              }
            }
            if (null != findByTagResult) {
              let obj2 = { type: "userMention", userId: findByTagResult.id };
              return obj2;
            }
          }
          findByTagResult = closure_2_11.findByTag(tmp7);
        }
      }
      function matchRole() {
        if (typeof closure_2_14 === "function") {
          let obj3;
          let firstResult = null;
          if (trimmed[0] === closure_2_12) {
            let closure_1 = trimmed.substr(closure_2_12.length);
            const sortByResult = closure_2.sortBy(f108528);
            const found = sortByResult.filter((text) => {
              const str = text.text;
              const formatted = closure_1.toLowerCase();
              return formatted === str.toLowerCase();
            });
            const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
            firstResult = mapped.first();
          }
          let id;
          if (firstResult != null) {
            id = firstResult.id;
          }
          if (null != id) {
            obj3 = { type: "roleMention", roleId: firstResult.id };
            const obj2 = { type: "roleMention", roleId: firstResult.id };
          } else if ("@everyone" === trimmed) {
            obj3 = { type: "textMention", text: "@everyone" };
          }
          return obj3;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.ROLE) {
        const matchRoleResult = matchRole();
        if (null != matchRoleResult) {
          return matchRoleResult;
        }
      }
      if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.CHANNEL) {
        const obj8 = closure_2_16(tmp.channel, type.channelTypes);
        if (typeof closure_2_14 === "function") {
          let firstResult = null;
          if (trimmed[0] === length) {
            let closure_1 = trimmed.substr(length.length);
            let sortByResult = obj8.sortBy(f108528);
            let found = sortByResult.filter((text) => {
              const str = text.text;
              const formatted = closure_1.toLowerCase();
              return formatted === str.toLowerCase();
            });
            let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
            firstResult = mapped.first();
          }
          if (null != firstResult) {
            if (null != firstResult.id) {
              return { type: "channelMention", channelId: firstResult.id };
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.MENTIONABLE) {
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
            [tmp16, tmp17] = closure_2_3(str4.split("#", 2), 2);
            closure_2_3(str4.split("#", 2), 2);
            if (null != tmp17) {
              let findByTagResult1;
              if ("0000" !== tmp17) {
                let obj3 = /^[0-9]{4}$/;
                if (obj3.test(tmp17)) {
                  findByTagResult1 = closure_2_11.findByTag(tmp16, tmp17);
                }
              }
              if (null != findByTagResult1) {
                return { type: "userMention", userId: findByTagResult1.id };
              }
            }
            findByTagResult1 = closure_2_11.findByTag(tmp16);
          }
        }
      }
      return { type: "text", text };
    };
    obj.channel = channel;
    return obj;
  }
}
function getRoles(guild_id) {
  let sortedRoles;
  guild_id = guild_id.guild_id;
  if (null != guild_id) {
    sortedRoles = GuildRoleStore.getSortedRoles(guild_id);
  } else {
    sortedRoles = [];
  }
  const arr2 = _modDef12(sortedRoles);
  return arr2.map(f108523);
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (channel) {
      let obj2;
      let tmp2;
      const obj = obj2(576);
      const cResult = obj.c(2);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const self = this;
        if (typeof ApplicationCommandOptionValueParser === "function") {
          obj2 = Object.create(ApplicationCommandOptionValueParser.prototype);
          obj2.parse = function parse(text, type) {
            let tmp16;
            let tmp17;
            let tmp7;
            let tmp8;
            const f108528 = (text) => -text.text.length;
            const trimmed = text.trim();
            const tmp = obj;
            const arr2 = closure_2_15(obj.channel);
            const guild_id = obj.channel.guild_id;
            if (null != guild_id) {
              sortedRoles = sortedRoles.getSortedRoles(guild_id);
            } else {
              sortedRoles = [];
            }
            const arr4 = closure_2_1(closure_2_2[10])(sortedRoles);
            let closure_2 = arr4.map(f108523);
            let closure_3 = arr2.map((text) => {
              obj = { text: str.split("#")[0] };
              const merged = Object.assign(text);
              return obj;
            });
            function matchUser() {
              if (typeof closure_2_14 === "function") {
                let tmp7;
                let firstResult = null;
                if (trimmed[0] === closure_2_12) {
                  let closure_1 = trimmed.substr(closure_2_12.length);
                  const sortByResult = arr2.sortBy(f108528);
                  const found = sortByResult.filter((text) => {
                    const str = text.text;
                    const formatted = closure_1.toLowerCase();
                    return formatted === str.toLowerCase();
                  });
                  const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
                  firstResult = mapped.first();
                }
                let id;
                if (firstResult != null) {
                  id = firstResult.id;
                }
                if (null != id) {
                  tmp7 = { type: "userMention", userId: firstResult.id };
                  const obj2 = { type: "userMention", userId: firstResult.id };
                } else if (typeof tmp === "function") {
                  let firstResult1 = null;
                  if (trimmed[0] === closure_2_12) {
                    closure_1 = trimmed.substr(closure_2_12.length);
                    const sortByResult1 = closure_3.sortBy(f108528);
                    const found1 = sortByResult1.filter((text) => {
                      const str = text.text;
                      const formatted = closure_1.toLowerCase();
                      return formatted === str.toLowerCase();
                    });
                    const mapped1 = found1.map((id) => ({ text: arr + id.text, id: id.id }));
                    firstResult1 = mapped1.first();
                  }
                  let id1;
                  if (firstResult1 != null) {
                    id1 = firstResult1.id;
                  }
                  if (null != id1) {
                    tmp7 = { type: "userMention", userId: firstResult1.id };
                    const obj3 = { type: "userMention", userId: firstResult1.id };
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
                return tmp7;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.USER) {
              const matchUserResult = matchUser();
              if (null != matchUserResult) {
                return matchUserResult;
              } else {
                let str = trimmed;
                if (trimmed[0] === closure_2_12) {
                  str = trimmed.slice(1);
                }
                [tmp7, tmp8] = closure_2_3(str.split("#", 2), 2);
                closure_2_3(str.split("#", 2), 2);
                if (null != tmp8) {
                  let findByTagResult;
                  if ("0000" !== tmp8) {
                    obj = /^[0-9]{4}$/;
                    if (obj.test(tmp8)) {
                      findByTagResult = closure_2_11.findByTag(tmp7, tmp8);
                    }
                  }
                  if (null != findByTagResult) {
                    let obj2 = { type: "userMention", userId: findByTagResult.id };
                    return obj2;
                  }
                }
                findByTagResult = closure_2_11.findByTag(tmp7);
              }
            }
            function matchRole() {
              if (typeof closure_2_14 === "function") {
                let obj3;
                let firstResult = null;
                if (trimmed[0] === closure_2_12) {
                  let closure_1 = trimmed.substr(closure_2_12.length);
                  const sortByResult = closure_2.sortBy(f108528);
                  const found = sortByResult.filter((text) => {
                    const str = text.text;
                    const formatted = closure_1.toLowerCase();
                    return formatted === str.toLowerCase();
                  });
                  const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
                  firstResult = mapped.first();
                }
                let id;
                if (firstResult != null) {
                  id = firstResult.id;
                }
                if (null != id) {
                  obj3 = { type: "roleMention", roleId: firstResult.id };
                  const obj2 = { type: "roleMention", roleId: firstResult.id };
                } else if ("@everyone" === trimmed) {
                  obj3 = { type: "textMention", text: "@everyone" };
                }
                return obj3;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.ROLE) {
              const matchRoleResult = matchRole();
              if (null != matchRoleResult) {
                return matchRoleResult;
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.CHANNEL) {
              const obj8 = closure_2_16(tmp.channel, type.channelTypes);
              if (typeof closure_2_14 === "function") {
                let firstResult = null;
                if (trimmed[0] === length) {
                  let closure_1 = trimmed.substr(length.length);
                  let sortByResult = obj8.sortBy(f108528);
                  let found = sortByResult.filter((text) => {
                    const str = text.text;
                    const formatted = closure_1.toLowerCase();
                    return formatted === str.toLowerCase();
                  });
                  let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
                  firstResult = mapped.first();
                }
                if (null != firstResult) {
                  if (null != firstResult.id) {
                    return { type: "channelMention", channelId: firstResult.id };
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.MENTIONABLE) {
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
                  [tmp16, tmp17] = closure_2_3(str4.split("#", 2), 2);
                  closure_2_3(str4.split("#", 2), 2);
                  if (null != tmp17) {
                    let findByTagResult1;
                    if ("0000" !== tmp17) {
                      let obj3 = /^[0-9]{4}$/;
                      if (obj3.test(tmp17)) {
                        findByTagResult1 = closure_2_11.findByTag(tmp16, tmp17);
                      }
                    }
                    if (null != findByTagResult1) {
                      return { type: "userMention", userId: findByTagResult1.id };
                    }
                  }
                  findByTagResult1 = closure_2_11.findByTag(tmp16);
                }
              }
            }
            return { type: "text", text };
          };
          obj2.channel = channel;
          cResult[0] = channel;
          cResult[1] = obj2;
          tmp2 = obj2;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        tmp2 = cResult[1];
      }
      return tmp2;
    }
  : (channel) => {
      channel = channel.channel;
      const items = [channel];
      return react.useMemo(() => {
        let length;
        let tmp;
        if (typeof ApplicationCommandOptionValueParser === "function") {
          let obj = Object.create(ApplicationCommandOptionValueParser.prototype);
          obj.parse = function parse(text, type) {
            let tmp16;
            let tmp17;
            let tmp7;
            let tmp8;
            const f108528 = (text) => -text.text.length;
            const trimmed = text.trim();
            const tmp = obj;
            const arr2 = closure_2_15(obj.channel);
            const guild_id = obj.channel.guild_id;
            if (null != guild_id) {
              sortedRoles = sortedRoles.getSortedRoles(guild_id);
            } else {
              sortedRoles = [];
            }
            const arr4 = closure_2_1(closure_2_2[10])(sortedRoles);
            let closure_2 = arr4.map(f108523);
            let closure_3 = arr2.map((text) => {
              obj = { text: str.split("#")[0] };
              const merged = Object.assign(text);
              return obj;
            });
            function matchUser() {
              if (typeof closure_2_14 === "function") {
                let tmp7;
                let firstResult = null;
                if (trimmed[0] === closure_2_12) {
                  let closure_1 = trimmed.substr(closure_2_12.length);
                  const sortByResult = arr2.sortBy(f108528);
                  const found = sortByResult.filter((text) => {
                    const str = text.text;
                    const formatted = closure_1.toLowerCase();
                    return formatted === str.toLowerCase();
                  });
                  const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
                  firstResult = mapped.first();
                }
                let id;
                if (firstResult != null) {
                  id = firstResult.id;
                }
                if (null != id) {
                  tmp7 = { type: "userMention", userId: firstResult.id };
                  const obj2 = { type: "userMention", userId: firstResult.id };
                } else if (typeof tmp === "function") {
                  let firstResult1 = null;
                  if (trimmed[0] === closure_2_12) {
                    closure_1 = trimmed.substr(closure_2_12.length);
                    const sortByResult1 = closure_3.sortBy(f108528);
                    const found1 = sortByResult1.filter((text) => {
                      const str = text.text;
                      const formatted = closure_1.toLowerCase();
                      return formatted === str.toLowerCase();
                    });
                    const mapped1 = found1.map((id) => ({ text: arr + id.text, id: id.id }));
                    firstResult1 = mapped1.first();
                  }
                  let id1;
                  if (firstResult1 != null) {
                    id1 = firstResult1.id;
                  }
                  if (null != id1) {
                    tmp7 = { type: "userMention", userId: firstResult1.id };
                    const obj3 = { type: "userMention", userId: firstResult1.id };
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
                return tmp7;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.USER) {
              const matchUserResult = matchUser();
              if (null != matchUserResult) {
                return matchUserResult;
              } else {
                let str = trimmed;
                if (trimmed[0] === closure_2_12) {
                  str = trimmed.slice(1);
                }
                [tmp7, tmp8] = closure_2_3(str.split("#", 2), 2);
                closure_2_3(str.split("#", 2), 2);
                if (null != tmp8) {
                  let findByTagResult;
                  if ("0000" !== tmp8) {
                    obj = /^[0-9]{4}$/;
                    if (obj.test(tmp8)) {
                      findByTagResult = closure_2_11.findByTag(tmp7, tmp8);
                    }
                  }
                  if (null != findByTagResult) {
                    let obj2 = { type: "userMention", userId: findByTagResult.id };
                    return obj2;
                  }
                }
                findByTagResult = closure_2_11.findByTag(tmp7);
              }
            }
            function matchRole() {
              if (typeof closure_2_14 === "function") {
                let obj3;
                let firstResult = null;
                if (trimmed[0] === closure_2_12) {
                  let closure_1 = trimmed.substr(closure_2_12.length);
                  const sortByResult = closure_2.sortBy(f108528);
                  const found = sortByResult.filter((text) => {
                    const str = text.text;
                    const formatted = closure_1.toLowerCase();
                    return formatted === str.toLowerCase();
                  });
                  const mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
                  firstResult = mapped.first();
                }
                let id;
                if (firstResult != null) {
                  id = firstResult.id;
                }
                if (null != id) {
                  obj3 = { type: "roleMention", roleId: firstResult.id };
                  const obj2 = { type: "roleMention", roleId: firstResult.id };
                } else if ("@everyone" === trimmed) {
                  obj3 = { type: "textMention", text: "@everyone" };
                }
                return obj3;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.ROLE) {
              const matchRoleResult = matchRole();
              if (null != matchRoleResult) {
                return matchRoleResult;
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.CHANNEL) {
              const obj8 = closure_2_16(tmp.channel, type.channelTypes);
              if (typeof closure_2_14 === "function") {
                let firstResult = null;
                if (trimmed[0] === length) {
                  let closure_1 = trimmed.substr(length.length);
                  let sortByResult = obj8.sortBy(f108528);
                  let found = sortByResult.filter((text) => {
                    const str = text.text;
                    const formatted = closure_1.toLowerCase();
                    return formatted === str.toLowerCase();
                  });
                  let mapped = found.map((id) => ({ text: arr + id.text, id: id.id }));
                  firstResult = mapped.first();
                }
                if (null != firstResult) {
                  if (null != firstResult.id) {
                    return { type: "channelMention", channelId: firstResult.id };
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (type.type === channel(closure_2_2[14]).ApplicationCommandOptionType.MENTIONABLE) {
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
                  [tmp16, tmp17] = closure_2_3(str4.split("#", 2), 2);
                  closure_2_3(str4.split("#", 2), 2);
                  if (null != tmp17) {
                    let findByTagResult1;
                    if ("0000" !== tmp17) {
                      let obj3 = /^[0-9]{4}$/;
                      if (obj3.test(tmp17)) {
                        findByTagResult1 = closure_2_11.findByTag(tmp16, tmp17);
                      }
                    }
                    if (null != findByTagResult1) {
                      return { type: "userMention", userId: findByTagResult1.id };
                    }
                  }
                  findByTagResult1 = closure_2_11.findByTag(tmp16);
                }
              }
            }
            return { type: "text", text };
          };
          obj.channel = tmp;
          return obj;
        } else {
          let str = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      }, items);
    };
const result = size.fileFinishedImporting("modules/chat_input/native/ApplicationCommandOptionValueParser.tsx");

export { getUsers };
export { getRoles };
export { getChannels };
export { ApplicationCommandOptionValueParser };
export const parseOptionValuesForSend = function parseOptionValuesForSend(channel, command, current) {
  let obj2;
  if (null == command.options) {
    return {};
  } else {
    const obj3 = {};
    const options = command.options;
    const obj4 = MessageParser;
    const parserState = obj4.createParserState(channel);
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
                let obj = { type: "text", text: obj2.parse(channel, tmp6[0].text, parserState).content };
                let name = tmp4.name;
                obj2 = MessageParserDefault;
                let items = [obj];
                obj3[name] = items;
              }
            }
          }
        }
        obj3[tmp4.name] = tmp6;
      }
      continue;
    }
    return obj3;
  }
};
export const useApplicationCommandOptionValueParser = tmp3;
