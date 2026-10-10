// === Module 17070: useConjureSettingPickerOptions ===

// Module 17070 (useConjureSettingPickerOptions)
import NicknameUtils from "NicknameUtils" /* 5409 */;
import ConjureUtils from "ConjureUtils" /* 6945 */;
import conjureGuildPickerSources from "conjureGuildPickerSources" /* 17071 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import StreamerModeStore from "StreamerModeStore" /* 4963 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10651 */;

const require = globalThis.__r;

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSettingsGuildId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp6, tmp7);
  }
  const fn = function u() {
    return ConjureUtils.conjureSettingsGuildId(ConjureProjectStore.getProject(closure_0), closure_1);
  };
  const items1 = [arg1, arg0];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useConjureSettingsGuildId(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [ConjureProjectStore];
  const items1 = [arg1, arg0];
  return require("initialize").useStateFromStores(items, () => ConjureUtils.conjureSettingsGuildId(ConjureProjectStore.getProject(closure_0), closure_1), items1);
});
function conjureSettingPickedIds(value) {
  if (Array.isArray(value)) {
    return value;
  } else {
    if (typeof value !== "string") {
      let items = [];
    }
    const items1 = [value];
    items = items1;
  }
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureSettingPickerOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureSettingPickerOptions(arg0, arg1) {
  _require = arg0;
  let channel_filter = arg1;
  dependencyMap = arg1;
  let result = _require;
  let map = dependencyMap;
  const cResult = require("c").c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel_filter.type) {
    if (cResult[2] === arg0) {
      let tmp4 = cResult[3];
      let tmp5 = cResult[4];
    }
    const stateFromStores = result(504).useStateFromStores(first, tmp4, tmp5);
    const resultResult = result(504);
    let mapped = null;
    let tmp8 = null;
    if ("role" === channel_filter.type) {
      tmp8 = arg0;
    }
    const conjureGuildRoles = result(17071).useConjureGuildRoles(tmp8);
    const resultResult1 = result(17071);
    let tmp9 = null;
    if ("user" === channel_filter.type) {
      tmp9 = arg0;
    }
    const conjureGuildMemberUsers = result(17071).useConjureGuildMemberUsers(tmp9);
    class S {
      constructor() {
        channels = null;
        if (null != closure_0) {
          tmp3 = closure_1;
          str = "channel";
          channels = null;
          if ("channel" === closure_1.type) {
            tmp4 = closure_3;
            channels = closure_3.getChannels(tmp);
          }
        }
        return channels;
      }
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [StreamerModeStore];
      const fn = function j() {
        return StreamerModeStore.hidePersonalInformation;
      };
      cResult[5] = items1;
      cResult[6] = fn;
      let tmp12 = fn;
      let tmp11 = items1;
    } else {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const resultResult2 = result(17071);
    const stateFromStores1 = result(504).useStateFromStores(tmp11, tmp12);
    const type = channel_filter.type;
    if ("channel" === type) {
      if (cResult[7] === stateFromStores) {
      }
      mapped = null;
      if (!tmp20) {
        result = result(6945).conjureSettingChannels(stateFromStores, channel_filter.channel_filter);
        map = result.map;
        mapped = map((id) => {
          const obj = { id: id.id, label: closure_0(type[11]).computeChannelName(id, UserStore, RelationshipStore) };
          return obj;
        });
        const resultResult4 = result(6945);
      }
      cResult[7] = stateFromStores;
      channel_filter = channel_filter.channel_filter;
      cResult[8] = channel_filter;
      cResult[9] = mapped;
      tmp20 = mapped == stateFromStores;
    } else {
      if ("role" === type) {
        if (cResult[10] !== conjureGuildRoles) {
          const _Symbol = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0) {
                obj = { id: arg0.id, label: arg0.name };
                return obj;
              }
            }
            cResult[12] = I;
          } else {
            class I {
              constructor(arg0) {
                obj = { id: arg0.id, label: arg0.name };
                return obj;
              }
            }
          }
          const mapped1 = conjureGuildRoles.map(I);
          cResult[10] = conjureGuildRoles;
          cResult[11] = mapped1;
        } else {
          class I {
            constructor(arg0) {
              obj = { id: arg0.id, label: arg0.name };
              return obj;
            }
          }
        }
      } else {
        class I {
          constructor(arg0) {
            obj = { id: arg0.id, label: arg0.name };
            return obj;
          }
        }
      }
      return tmp15;
    }
    const resultResult3 = result(504);
  }
  class S {
    constructor() {
      channels = null;
      if (null != closure_0) {
        tmp3 = closure_1;
        str = "channel";
        channels = null;
        if ("channel" === closure_1.type) {
          tmp4 = closure_3;
          channels = closure_3.getChannels(tmp);
        }
      }
      return channels;
    }
  }
  const items2 = [arg0, channel_filter.type];
  cResult[1] = channel_filter.type;
  cResult[2] = arg0;
  cResult[3] = S;
  cResult[4] = items2;
  tmp5 = items2;
  tmp4 = S;
  let obj = require("c");
}) : (function useConjureSettingPickerOptions(arg0, type) {
  _require = arg0;
  dependencyMap = type;
  const items = [conjureGuildRoles];
  const items1 = [arg0, type.type];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let channels = null;
    if (null != closure_0) {
      channels = null;
      if ("channel" === type.type) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  }, items1);
  let obj = require("initialize");
  let tmp4 = null;
  if ("role" === type.type) {
    tmp4 = arg0;
  }
  conjureGuildRoles = require("conjureGuildPickerSources").useConjureGuildRoles(tmp4);
  let obj2 = require("conjureGuildPickerSources");
  let tmp6 = null;
  if ("user" === type.type) {
    tmp6 = arg0;
  }
  const conjureGuildMemberUsers = require("conjureGuildPickerSources").useConjureGuildMemberUsers(tmp6);
  const tmpResult = require("conjureGuildPickerSources");
  const items2 = [stateFromStores1];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => stateFromStores1.hidePersonalInformation);
  const items3 = [stateFromStores, , , , , , ];
  ({ channel_filter: arr4[1], type: arr4[2] } = type);
  items3[3] = arg0;
  items3[4] = stateFromStores1;
  items3[5] = conjureGuildRoles;
  items3[6] = conjureGuildMemberUsers;
  return stateFromStores.useMemo(() => {
    type = type.type;
    if ("channel" === type) {
      let mapped = null;
      if (null != stateFromStores) {
        let result = ConjureUtils.conjureSettingChannels(tmp4, tmp.channel_filter);
        mapped = result.map((id) => {
          const obj = { id: id.id, label: closure_1_0(5421).computeChannelName(id, closure_1_6, conjureGuildMemberUsers) };
          return obj;
        });
      }
      return mapped;
    } else if ("role" === type) {
      return conjureGuildRoles.map((id) => ({ id: id.id, label: id.name }));
    } else if ("user" === type) {
      return conjureGuildMemberUsers.map((id) => {
        const result = closure_0(17071).conjureMemberUsername(id, stateFromStores1);
        const obj2 = { id: id.id, label: null };
        const obj = closure_0(17071);
        obj2.label = closure_0(5409).getName(closure_1_0, null, id);
        if ("" === result) {
          let obj4 = {};
        } else {
          obj4 = { description: result };
        }
        const merged = Object.assign(obj4);
        return obj2;
      });
    } else {
      return [];
    }
  }, items3);
});
export { conjureSettingPickedIds };
export const withSavedPicks = function withSavedPicks(arr, value, arg2) {
  closure_0 = arr;
  closure_1 = arg2;
  if (Array.isArray(value)) {
    if (0 === value.length) {
      const items = [];
      HermesBuiltin.arraySpread(arr, 0);
      let items1 = items;
    } else {
      items1 = [];
      HermesBuiltin.arraySpread(arr.filter((id) => !value.includes(id.id)), HermesBuiltin.arraySpread(value.map((item) => {
        closure_0 = item;
        let found = closure_0.find((id) => id.id === closure_0);
        if (found == null) {
          found = closure_1(item);
        }
        return found;
      }), 0));
      const arraySpreadResult3 = HermesBuiltin.arraySpread(value.map((item) => {
        closure_0 = item;
        let found = closure_0.find((id) => id.id === closure_0);
        if (found == null) {
          found = closure_1(item);
        }
        return found;
      }), 0);
    }
    return items1;
  } else {
    if (typeof value !== "string") {
      let items2 = [];
    }
    const items3 = [value];
    items2 = items3;
  }
};
export const useConjureSettingsGuildId = tmp2;