// === Module 12493: useConjureSettingPickerOptions ===

// Module 12493 (useConjureSettingPickerOptions)
import ConjureUtils from "ConjureUtils" /* 7419 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import StreamerModeStore from "StreamerModeStore" /* 5069 */;
import UserStore from "UserStore" /* 1383 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/useConjureSettingPickerOptions.tsx");

export default function useConjureSettingPickerOptions(arg0, type) {
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
          const obj = { id: id.id, label: closure_1_0(5652).computeChannelName(id, closure_1_6, conjureGuildMemberUsers) };
          return obj;
        });
      }
      return mapped;
    } else if ("role" === type) {
      return conjureGuildRoles.map((id) => ({ id: id.id, label: id.name }));
    } else if ("user" === type) {
      return conjureGuildMemberUsers.map((id) => {
        const result = closure_0(12494).conjureMemberUsername(id, stateFromStores1);
        const obj2 = { id: id.id, label: null };
        const obj = closure_0(12494);
        obj2.label = closure_0(6041).getName(closure_1_0, null, id);
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
};
export const MAX_CONJURE_SETTING_PICKS = 25;
export function conjureSettingPickedIds(value) {
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
export function withSavedPicks(arr, value, arg2) {
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
}
export function withPickCap(arr, arg1) {
  closure_0 = arg1;
  if (arg1.length < 25) {
    const items = [];
    HermesBuiltin.arraySpread(arr, 0);
    let mapped = items;
  } else {
    mapped = arr.map((id) => {
      let tmp = id;
      if (!closure_0.includes(id.id)) {
        const obj = {};
        const merged = Object.assign(id);
        obj.disabled = true;
        tmp = obj;
      }
      return tmp;
    });
  }
  return mapped;
}
export function useConjureSettingsGuildId(projectId, isPreview) {
  _require = projectId;
  dependencyMap = isPreview;
  const items = [ConjureProjectStore];
  const items1 = [isPreview, projectId];
  return require("initialize").useStateFromStores(items, () => ConjureUtils.conjureSettingsGuildId(ConjureProjectStore.getProject(closure_0), closure_1), items1);
}