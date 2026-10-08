// === Module 14759: GuildSelectComponentActionSheet ===

// Module 14759 (GuildSelectComponentActionSheet)
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5405 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5441 */;
import SelectComponentActionSheetDefault from "SelectComponentActionSheet" /* 11428 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({ guildIdentity: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSelectComponentActionSheet(user) {
  const cResult = onSelectGuild(576).c(28);
  ({ selectedGuild, onSelectGuild } = user);
  user = user.user;
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  let num = 2;
  let obj = onSelectGuild(576);
  let obj2 = noop;
  const tmp5 = first;
  [tmp7, r10022] = first(noop.useState(""), 2);
  if (cResult[0] !== selectedGuild) {
    const obj4 = { type: onSelectGuild(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
    ({ id: obj3.value, name: obj3.label } = selectedGuild);
    obj4.guild = selectedGuild;
    cResult[0] = selectedGuild;
    cResult[1] = obj4;
    let tmp8 = obj4;
  } else {
    tmp8 = cResult[1];
  }
  const tmp5Result = tmp5(obj2.useState(tmp8), num);
  first = tmp5Result[0];
  noop = tmp5Result[1];
  if (cResult[2] !== first) {
    if (null != first) {
      let items = [first];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[num] = first;
    num = 3;
    cResult[3] = items1;
  } else {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { maxValues: 1, minValues: 1, placeholder: null };
      const intl = onSelectGuild(1126).intl;
      obj6.placeholder = intl.string(onSelectGuild(1126).t["ZImm/x"]);
      cResult[4] = obj6;
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
      cResult[5] = T;
    } else {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    if (cResult[6] !== tmp7) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
      cResult[6] = tmp7;
      cResult[7] = tmp18;
    } else {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
      cResult[8] = tmp20;
    } else {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    View = tmp20;
    if (cResult[9] !== onSelectGuild) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
      cResult[9] = onSelectGuild;
      cResult[10] = tmp22;
    } else {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    const _Symbol4 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
      cResult[11] = tmp24;
    } else {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    if (first != null) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    if (cResult[12] !== undefined) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
      if (first != null) {
        class T {
          constructor(arg0) {
            if (0 === user.length) {
              tmp4 = closure_1_7;
              flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
              tmp5 = globalThis;
              _Array = Array;
              tmp6 = new.target;
              tmp7 = new.target;
              array = new Array();
              tmp9 = array;
              reduced = flattenedGuildIds.reduce((arr, item) => {
                guild = guild.getGuild(item);
                if (null != guild) {
                  const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                  ({ id: obj.value, name: obj.label } = guild);
                  obj.guild = guild;
                  arr = arr.push(obj);
                }
                return arr;
              }, array);
            } else {
              tmp = user;
              tmp2 = closure_2;
              obj = user(closure_2[17]);
              obj1 = { query: null };
              obj1.query = user;
              queryGuildsResult = obj.queryGuilds(obj1);
              reduced = queryGuildsResult.map((record) => {
                record = record.record;
                return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
              });
            }
            return reduced;
          }
        }
      }
      function isSelected(value) {
        value = undefined;
        if (first != null) {
          value = first.value;
        }
        return value.value === value;
      }
      cResult[12] = tmp28;
      cResult[13] = isSelected;
    } else {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    const _Symbol5 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
      cResult[14] = tmp30;
    } else {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    if (cResult[15] === tmp4.avatar) {
      class T {
        constructor(arg0) {
          if (0 === user.length) {
            tmp4 = closure_1_7;
            flattenedGuildIds = closure_1_7.getFlattenedGuildIds();
            tmp5 = globalThis;
            _Array = Array;
            tmp6 = new.target;
            tmp7 = new.target;
            array = new Array();
            tmp9 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
              guild = guild.getGuild(item);
              if (null != guild) {
                const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
                ({ id: obj.value, name: obj.label } = guild);
                obj.guild = guild;
                arr = arr.push(obj);
              }
              return arr;
            }, array);
          } else {
            tmp = user;
            tmp2 = closure_2;
            obj = user(closure_2[17]);
            obj1 = { query: null };
            obj1.query = user;
            queryGuildsResult = obj.queryGuilds(obj1);
            reduced = queryGuildsResult.map((record) => {
              record = record.record;
              return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
            });
          }
          return reduced;
        }
      }
    }
    function renderDescription(guild) {
      const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.guild.id);
      let username = NicknameUtilsDefault.getNickname(guild.guild.id, undefined, user);
      const obj2 = { style: guildIdentity.guildIdentity, children: null };
      let tmp8 = hasAvatarForGuildResult;
      if (hasAvatarForGuildResult) {
        const obj3 = { size: native.AvatarSizes.SIZE_16, style: tmp7.avatar, user, guildId: guild.guild.id, animate: true };
        tmp8 = closure_2_8(native.Avatar, obj3);
      }
      const items = [tmp8, ];
      if (username == null) {
        username = user.username;
      }
      items[1] = closure_2_8(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: username });
      obj2.children = items;
      return options(View, obj2);
    }
    cResult[15] = tmp4.avatar;
    cResult[16] = tmp4.guildIdentity;
    cResult[17] = user;
    cResult[18] = renderDescription;
  }
  const tmp6 = first(noop.useState(""), 2);
}) : (function GuildSelectComponentActionSheet(arg0) {
  ({ selectedGuild, onSelectGuild: require, user: importDefault } = arg0);
  let first;
  let first1;
  let callback;
  const tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  const tmp6 = first(first1.useState({ type: InteractionComponentTypes.SelectOptionType.GUILD, value: selectedGuild.id, label: selectedGuild.name, guild: selectedGuild }), 2);
  first1 = tmp6[0];
  closure_5 = tmp6[1];
  if (null != first1) {
    let items = [first1];
    let items1 = items;
  } else {
    items1 = [];
  }
  let obj3 = { maxValues: 1, minValues: 1, placeholder: null };
  function submitSelection() {
    return require("ActionSheetActionCreators").hideActionSheet();
  }
  const intl = util.intl;
  obj3.placeholder = intl.string(util.t["ZImm/x"]);
  callback = obj.useCallback((query) => {
    if (0 === query.length) {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const _Array = Array;
      const array = new Array();
      let reduced = flattenedGuildIds.reduce((arr, item) => {
        guild = guild.getGuild(item);
        if (null != guild) {
          const obj = { type: closure_1_0(5441).SelectOptionType.GUILD, value: null, label: null, guild: null };
          ({ id: obj.value, name: obj.label } = guild);
          obj.guild = guild;
          arr = arr.push(obj);
        }
        return arr;
      }, array);
    } else {
      const obj2 = { query };
      let obj = require("AutocompleteUtils");
      reduced = require("AutocompleteUtils").queryGuilds(obj2).map((record) => {
        record = record.record;
        return { type: closure_1_0(5441).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
      });
      const queryGuildsResult = require("AutocompleteUtils").queryGuilds(obj2);
    }
    return reduced;
  }, []);
  const items2 = [first, callback];
  const memo = obj.useMemo(() => callback(first), items2);
  return closure_8(SelectComponentActionSheetDefault, {
    onPressOptionItem: function handlePressOptionItem(arg0, guild) {
      require(guild.guild);
      closure_5(guild);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    onRemoveOptionItem: function handleRemoveOptionItem() {
      closure_5(null);
    },
    renderIcon(guild) {
      return closure_1_8(require("GuildIcon"), { guild: guild.guild });
    },
    renderHeaderIcon(guild) {
      const obj = { size: require("GuildIcon").GuildIconSizes.XSMALL, guild: guild.guild };
      return closure_1_8(require("GuildIcon"), obj);
    },
    iconContainerStyle: tmp.iconContainer,
    renderDescription(guild) {
      const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.guild.id);
      let username = NicknameUtilsDefault.getNickname(guild.guild.id, undefined, user);
      const obj2 = { style: guildIdentity.guildIdentity, children: null };
      let tmp8 = hasAvatarForGuildResult;
      if (hasAvatarForGuildResult) {
        const obj3 = { size: native.AvatarSizes.SIZE_16, style: tmp7.avatar, user, guildId: guild.guild.id, animate: true };
        tmp8 = closure_2_8(native.Avatar, obj3);
      }
      const items = [tmp8, ];
      if (username == null) {
        username = user.username;
      }
      items[1] = closure_2_8(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: username });
      obj2.children = items;
      return options(View, obj2);
    },
    selectionActionComponent: obj3,
    options: memo,
    selectedCount: items1.length,
    selectedOptions: items1,
    isSelected(value) {
      value = undefined;
      if (first1 != null) {
        value = first1.value;
      }
      return value.value === value;
    },
    submitSelection,
    onQueryChange: tmp2[1],
    itemAccessibilityLabel: function accessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  });
});