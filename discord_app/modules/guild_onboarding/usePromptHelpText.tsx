// === Module 7125: usePromptHelpText ===

// Module 7125 (usePromptHelpText)
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default function usePromptHelpText(arg0) {
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  let obj = selectedRoleIds(504);
  const items = [GuildRoleStore];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  let obj1 = selectedRoleIds(504);
  const items2 = [id, UserStore, RelationshipStore, PermissionStore];
  const stateFromStoresArray1 = obj1.useStateFromStoresArray(items2, () => {
    const mapped = Array.from(dependencyMap).map((item) => channel.getChannel(item));
    const found = mapped.filter((item) => {
      let canResult = null != item;
      if (canResult) {
        canResult = closure_1_4.can(constants.VIEW_CHANNEL, item);
      }
      return canResult;
    });
    return found.map((item) => selectedRoleIds(closure_1_1[8]).computeChannelName(item, closure_1_6, closure_1_5, true));
  });
  let mapped = stateFromStoresArray.map((name) => "@" + name.name);
  let singleSelect;
  if (_prompt != null) {
    singleSelect = _prompt.singleSelect;
  }
  let str = "";
  if (!singleSelect) {
    const intl = selectedRoleIds(1114).intl;
    str = intl.string(selectedRoleIds(1114).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      let str6 = "";
      if (0 !== mapped.length) {
        const intl4 = selectedRoleIds(1114).intl;
        obj = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
        const _Math3 = Math;
        obj.extraCount = Math.max(mapped.length - 2, 0);
        [obj6.role1, obj6.role2] = mapped;
        obj.itemHook = itemHook;
        str6 = intl4.format(selectedRoleIds(1114).t.Kj5GIT, obj);
      }
      str = str6;
      let str2 = "";
    }
    obj = { helpText: str, helpTextAdditional: str2 };
    return obj;
  }
  str2 = "";
  if (stateFromStoresArray1.length > 0) {
    let str3 = "";
    if (0 !== stateFromStoresArray1.length) {
      const intl2 = selectedRoleIds(1114).intl;
      obj1 = { count: stateFromStoresArray1.length, extraCount: null, channel1: null, channel2: null, itemHook: null };
      const _Math = Math;
      obj1.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
      [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
      obj1.itemHook = itemHook;
      str3 = intl2.format(selectedRoleIds(1114).t.Rj841R, obj1);
    }
    let str4 = "";
    if (mapped.length > 0) {
      let str5 = "";
      if (0 !== mapped.length) {
        const intl3 = selectedRoleIds(1114).intl;
        const obj2 = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
        const _Math2 = Math;
        obj2.extraCount = Math.max(mapped.length - 2, 0);
        [obj5.role1, obj5.role2] = mapped;
        obj2.itemHook = itemHook;
        str5 = intl3.format(selectedRoleIds(1114).t.cJZxWf, obj2);
      }
      str4 = str5;
    }
    str2 = str4;
    str = str3;
  }
};
export const useCustomizeCommunityPromptHelpText = function useCustomizeCommunityPromptHelpText(arg0) {
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  let obj = selectedRoleIds(504);
  const items = [GuildRoleStore];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = GuildRoleStore.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  let obj1 = selectedRoleIds(504);
  const items2 = [id, UserStore, RelationshipStore, PermissionStore];
  const stateFromStoresArray1 = obj1.useStateFromStoresArray(items2, () => {
    const mapped = Array.from(dependencyMap).map((item) => channel.getChannel(item));
    const found = mapped.filter((item) => {
      let canResult = null != item;
      if (canResult) {
        canResult = closure_1_4.can(constants.VIEW_CHANNEL, item);
      }
      return canResult;
    });
    return found.map((item) => selectedRoleIds(closure_1_1[8]).computeChannelName(item, closure_1_6, closure_1_5, true));
  });
  let mapped = stateFromStoresArray.map((name) => "@" + name.name);
  let singleSelect;
  if (_prompt != null) {
    singleSelect = _prompt.singleSelect;
  }
  let str = "";
  if (!singleSelect) {
    const intl = selectedRoleIds(1114).intl;
    str = intl.string(selectedRoleIds(1114).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      const intl4 = selectedRoleIds(1114).intl;
      obj = { count: mapped.length, extraCount: null, role1: null, role2: null, itemHook: null };
      const _Math4 = Math;
      obj.extraCount = Math.max(mapped.length - 2, 0);
      [obj5.role1, obj5.role2] = mapped;
      obj.itemHook = itemHook;
      str = intl4.format(selectedRoleIds(1114).t.vdtNYa, obj);
    }
    obj = { helpText: str, helpTextAdditional: "" };
    return obj;
  }
  if (stateFromStoresArray1.length > 0) {
    if (0 === mapped.length) {
      const intl3 = selectedRoleIds(1114).intl;
      obj1 = { count: stateFromStoresArray1.length, extraCount: null, channel1: null, channel2: null, itemHook: null };
      const _Math3 = Math;
      obj1.extraCount = Math.max(stateFromStoresArray1.length - 2, 0);
      [obj4.channel1, obj4.channel2] = stateFromStoresArray1;
      obj1.itemHook = itemHook;
      str = intl3.format(selectedRoleIds(1114).t.ZKywGU, obj1);
    }
  }
  if (tmp5) {
    const intl2 = selectedRoleIds(1114).intl;
    const obj2 = { channelCount: stateFromStoresArray1.length, extraChannelCount: null, channel1: null, channel2: null, itemHook: null, roleCount: null, extraRoleCount: null, role1: null, role2: null };
    const _Math = Math;
    obj2.extraChannelCount = Math.max(stateFromStoresArray1.length - 2, 0);
    [obj3.channel1, obj3.channel2] = stateFromStoresArray1;
    obj2.itemHook = itemHook;
    obj2.roleCount = mapped.length;
    const _Math2 = Math;
    obj2.extraRoleCount = Math.max(mapped.length - 2, 0);
    [obj3.role1, obj3.role2] = mapped;
    str = intl2.format(selectedRoleIds(1114).t.WewRHM, obj2);
  }
  tmp5 = stateFromStoresArray1.length > 0 && mapped.length > 0;
};