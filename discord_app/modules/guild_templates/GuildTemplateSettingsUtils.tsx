// === Module 17867: GuildTemplateSettingsUtils ===

// Module 17867 (GuildTemplateSettingsUtils)
import Constants from "Constants" /* 1085 */;
import GuildTemplateActionCreatorsDefault from "GuildTemplateActionCreators" /* 6837 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import GuildTemplateStore from "GuildTemplateStore" /* 6979 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, c6, closure_3;

const Permissions = Constants.Permissions;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(closure_0));
      return values.every((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp7, tmp8);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const values = Object.values(ChannelStore.getMutableGuildChannelsForGuild(closure_0));
    return values.every((item) => closure_1_7.can(constants.VIEW_CHANNEL, item));
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp12;
  let tmp15;
  let tmp5;
  let tmp7;
  let tmp8;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, importDefault] = tmp4;
  [tmp7, dependencyMap] = react.useState(null);
  _slicedToArray(react.useState(null), 2);
  if (cResult[0] !== arg0) {
    const fn = function n() {
      function fetchGuildTemplate() {
        return closure_0(...arguments);
      }
      if (null != closure_0) {
        closure_0 = _asyncToGenerator(async function(arg0) {
          let closure_2;
          let obj2;
          closure_0 = arg0;
          if (c6 === 2) {
            c6 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c4;
            try {
              let closure_1;
              c6 = 2;
              if (0 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_1 = undefined;
                  tmp(null);
                  c4 = 1;
                  c5 = 2;
                  c6 = 1;
                  const obj5 = { value: obj2.loadTemplatesForGuild(closure_0), done: false };
                  obj2 = GuildTemplateActionCreatorsDefault;
                  return obj5;
                }
              } else {
                if (1 === c5) {
                  c4 = 0;
                  closure_1 = closure_3;
                  const self = this;
                  const self2 = this;
                  const aPIError = new closure_0(dependencyMap[11]).APIError(closure_1);
                  tmp(aPIError);
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  c6 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c4 = 0;
                }
                closure_1(closure_0);
                c6 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp26) {
              closure_3 = tmp26;
              if (0 === c4) {
                c6 = 3;
                throw tmp26;
              } else {
                c5 = 1;
              }
            }
          }
        });
        const tmp3 = fetchGuildTemplate(tmp);
      }
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const effect = react.useEffect(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildTemplateStore];
    cResult[3] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    class E {
      constructor() {
        let forGuild;
        if (null != closure_0) {
          forGuild = GuildTemplateStore.getForGuild(tmp);
        }
        return forGuild;
      }
    }
    const items2 = [arg0];
    cResult[4] = arg0;
    cResult[5] = E;
    cResult[6] = items2;
    tmp15 = items2;
  } else {
    class E {
      constructor() {
        let forGuild;
        if (null != closure_0) {
          forGuild = GuildTemplateStore.getForGuild(tmp);
        }
        return forGuild;
      }
    }
    tmp15 = cResult[6];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, E, tmp15);
  if (cResult[7] === tmp7) {
    class E {
      constructor() {
        let forGuild;
        if (null != closure_0) {
          forGuild = GuildTemplateStore.getForGuild(tmp);
        }
        return forGuild;
      }
    }
  }
  let obj3 = { loading: tmp11, guildTemplate: stateFromStores, loadError: tmp7 };
  cResult[7] = tmp7;
  cResult[8] = stateFromStores;
  cResult[9] = null != arg0 && tmp5 !== arg0;
  cResult[10] = obj3;
}) : ((arg0) => {
  let closure_2;
  let loadError;
  let tmp2;
  _require = arg0;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, importDefault] = tmp;
  [loadError, dependencyMap] = react.useState(null);
  const items = [arg0];
  const effect = react.useEffect(() => {
    function fetchGuildTemplate(arg0) {
      return obj(...arguments);
    }
    let obj = function _fetchGuildTemplate2() {
      obj = _asyncToGenerator(async function(arg0) {
        let obj2;
        closure_0 = arg0;
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c4;
          try {
            let closure_1;
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_1 = tmp4;
                tmp(null);
                c4 = 1;
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj2.loadTemplatesForGuild(closure_0), done: false };
                obj2 = closure_2_1(closure_2_2[10]);
                return obj5;
              }
            } else {
              if (1 === c5) {
                c4 = 0;
                closure_1 = closure_3;
                const self = this;
                const self2 = this;
                const aPIError = new closure_2_0(closure_2_2[11]).APIError(closure_1);
                tmp(aPIError);
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c4 = 0;
              }
              closure_1(closure_0);
              c6 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp26) {
            closure_3 = tmp26;
            if (0 === c4) {
              c6 = 3;
              throw tmp26;
            } else {
              c5 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    if (null != obj) {
      fetchGuildTemplate(tmp);
    }
  }, items);
  let obj = require("get initialized");
  const items1 = [GuildTemplateStore];
  const items2 = [arg0];
  let loading = null != arg0;
  const guildTemplate = obj.useStateFromStores(items1, () => {
    let forGuild;
    if (null != closure_0) {
      forGuild = GuildTemplateStore.getForGuild(tmp);
    }
    return forGuild;
  }, items2);
  if (loading) {
    loading = tmp2 !== arg0;
  }
  return { loading, guildTemplate, loadError };
});
const result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateSettingsUtils.tsx");

export const isGuildTemplateNameValid = function isGuildTemplateNameValid(str) {
  const tmp = null != str && str.trim().length >= 2;
  return tmp;
};
export const useCanViewAllChannels = tmp2;
export const useGuildTemplate = tmp3;