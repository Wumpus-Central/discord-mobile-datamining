// === Module 17002: useConjureSettingPickerOptions ===

// Module 17002 (useConjureSettingPickerOptions)
import NicknameUtils from "NicknameUtils" /* 5406 */;
import ConjureUtils from "ConjureUtils" /* 6939 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4707 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;

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
  const cResult = require("c").c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channel_filter.type) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
    const tmpResult = tmp(504);
    let tmp10 = null;
    if ("role" === channel_filter.type) {
      tmp10 = arg0;
    }
    const conjureGuildRoles = tmp(17003).useConjureGuildRoles(tmp10);
    const tmpResult4 = tmp(17003);
    let tmp11 = null;
    if ("user" === channel_filter.type) {
      tmp11 = arg0;
    }
    const conjureGuildMemberUsers = tmp(17003).useConjureGuildMemberUsers(tmp11);
    const type = channel_filter.type;
    if ("channel" === type) {
      if (null == stateFromStores) {
        let items1 = [];
      } else {
        const result = tmp(6939).conjureSettingChannels(stateFromStores, channel_filter.channel_filter);
        items1 = result.map((id) => {
          const obj = { id: id.id, label: closure_0(type[10]).computeChannelName(id, UserStore, RelationshipStore, true) };
          return obj;
        });
        const tmpResult6 = tmp(6939);
      }
      cResult[5] = stateFromStores;
      channel_filter = channel_filter.channel_filter;
      cResult[6] = channel_filter;
      cResult[7] = items1;
    } else {
      if ("role" === type) {
        if (cResult[8] !== conjureGuildRoles) {
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const fn3 = function _(id) {
              return { id: id.id, label: id.name };
            };
            cResult[10] = fn3;
            let tmp16 = fn3;
          } else {
            tmp16 = cResult[10];
          }
          const mapped = conjureGuildRoles.map(tmp16);
          cResult[8] = conjureGuildRoles;
          cResult[9] = mapped;
        } else {
          let tmp12 = cResult[9];
        }
      } else if ("user" === type) {
        if (cResult[11] === arg0) {
          if (cResult[12] === conjureGuildMemberUsers) {
            tmp12 = cResult[13];
          }
        }
        if (cResult[14] !== arg0) {
          const fn2 = function k(id) {
            const obj = { id: id.id, label: NicknameUtils.getName(closure_0, null, id) };
            return obj;
          };
          cResult[14] = arg0;
          cResult[15] = fn2;
          let tmp13 = fn2;
        } else {
          tmp13 = cResult[15];
        }
        const mapped1 = conjureGuildMemberUsers.map(tmp13);
        cResult[11] = arg0;
        cResult[12] = conjureGuildMemberUsers;
        cResult[13] = mapped1;
      } else {
        const _Symbol = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [];
          cResult[16] = items2;
          tmp12 = items2;
        } else {
          tmp12 = cResult[16];
        }
      }
      return tmp12;
    }
    const tmpResult5 = tmp(17003);
  }
  const fn = function c() {
    let channels = null;
    if (null != closure_0) {
      channels = null;
      if ("channel" === type.type) {
        channels = GuildChannelStore.getChannels(tmp);
      }
    }
    return channels;
  };
  const items3 = [arg0, channel_filter.type];
  cResult[1] = channel_filter.type;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp7 = items3;
  tmp6 = fn;
  let obj = require("c");
}) : (function useConjureSettingPickerOptions(arg0, type) {
  _require = arg0;
  dependencyMap = type;
  let items = [conjureGuildRoles];
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
  const tmp = _require;
  let tmp4 = null;
  if ("role" === type.type) {
    tmp4 = arg0;
  }
  conjureGuildRoles = require("conjureGuildPickerSources").useConjureGuildRoles(tmp4);
  const obj2 = require("conjureGuildPickerSources");
  let tmp6 = null;
  if ("user" === type.type) {
    tmp6 = arg0;
  }
  const conjureGuildMemberUsers = tmp(17003).useConjureGuildMemberUsers(tmp6);
  const items2 = [stateFromStores, , , , , ];
  ({ channel_filter: arr3[1], type: arr3[2] } = type);
  items2[3] = arg0;
  items2[4] = conjureGuildRoles;
  items2[5] = conjureGuildMemberUsers;
  return stateFromStores.useMemo(() => {
    type = type.type;
    if ("channel" === type) {
      if (null == stateFromStores) {
        let items = [];
      } else {
        const result = ConjureUtils.conjureSettingChannels(tmp4, tmp.channel_filter);
        items = result.map((id) => {
          const obj = { id: id.id, label: closure_1_0(5418).computeChannelName(id, closure_1_5, conjureGuildMemberUsers, true) };
          return obj;
        });
      }
      return items;
    } else if ("role" === type) {
      return conjureGuildRoles.map((id) => ({ id: id.id, label: id.name }));
    } else if ("user" === type) {
      return conjureGuildMemberUsers.map((id) => {
        const obj = { id: id.id, label: closure_0(5406).getName(closure_1_0, null, id) };
        return obj;
      });
    } else {
      return [];
    }
  }, items2);
});
export { conjureSettingPickedIds };
export const withSavedPicks = function withSavedPicks(arr, value, cResult) {
  closure_0 = arr;
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
          found = cResult(item);
        }
        return found;
      }), 0));
      const arraySpreadResult3 = HermesBuiltin.arraySpread(value.map((item) => {
        closure_0 = item;
        let found = closure_0.find((id) => id.id === closure_0);
        if (found == null) {
          found = cResult(item);
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