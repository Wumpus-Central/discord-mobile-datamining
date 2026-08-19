// === Module 6925: usePromptHelpText ===

// Module 6925 (usePromptHelpText)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_onboarding/usePromptHelpText.tsx");

export default function usePromptHelpText(arg0) {
  ({ guild, prompt: _prompt, selectedRoleIds } = arg0);
  ({ selectedChannelIds: dependencyMap, itemHook } = arg0);
  let id;
  if (guild != null) {
    id = guild.id;
  }
  let obj = selectedRoleIds(589);
  const items = [closure_3];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = closure_1_3.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  obj1 = selectedRoleIds(589);
  const items2 = [id, closure_6, closure_5, closure_4];
  const stateFromStoresArray1 = obj1.useStateFromStoresArray(items2, () => {
    const mapped = Array.from(closure_1).map((item, index) => channel.getChannel(item));
    const found = mapped.filter((item, index) => {
      let canResult = null != item;
      if (canResult) {
        canResult = closure_4.can(constants.VIEW_CHANNEL, item);
      }
      return canResult;
    });
    return found.map((item, index) => callback(table[8]).computeChannelName(item, closure_6, closure_5, true));
  });
  let mapped = stateFromStoresArray.map((item, index) => "@" + item.name);
  let singleSelect;
  if (_prompt != null) {
    singleSelect = _prompt.singleSelect;
  }
  let str = "";
  if (!singleSelect) {
    const intl = selectedRoleIds(1236).intl;
    str = intl.string(selectedRoleIds(1236).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      let str6 = "";
      if (0 !== mapped.length) {
        const intl4 = selectedRoleIds(1236).intl;
        obj = { count: null, extraCount: null, role1: null, role2: null, itemHook: null };
        obj[0] = mapped.length;
        const _Math3 = Math;
        obj[1] = Math.max(mapped.length - 2, 0);
        [obj6[2], obj6[3]] = mapped;
        obj[4] = itemHook;
        str6 = intl4.format(selectedRoleIds(1236).t.Kj5GIT, obj);
      }
      str = str6;
      let str2 = "";
    }
    obj = { helpText: null, helpTextAdditional: null };
    obj[0] = str;
    obj[1] = str2;
    return obj;
  }
  str2 = "";
  if (stateFromStoresArray1.length > 0) {
    let str3 = "";
    if (0 !== stateFromStoresArray1.length) {
      const intl2 = selectedRoleIds(1236).intl;
      obj1 = { count: null, extraCount: null, channel1: null, channel2: null, itemHook: null };
      obj1[0] = stateFromStoresArray1.length;
      const _Math = Math;
      obj1[1] = Math.max(stateFromStoresArray1.length - 2, 0);
      [obj4[2], obj4[3]] = stateFromStoresArray1;
      obj1[4] = itemHook;
      str3 = intl2.format(selectedRoleIds(1236).t.Rj841R, obj1);
    }
    let str4 = "";
    if (mapped.length > 0) {
      let str5 = "";
      if (0 !== mapped.length) {
        const intl3 = selectedRoleIds(1236).intl;
        const obj2 = { count: null, extraCount: null, role1: null, role2: null, itemHook: null };
        obj2[0] = mapped.length;
        const _Math2 = Math;
        obj2[1] = Math.max(mapped.length - 2, 0);
        [obj5[2], obj5[3]] = mapped;
        obj2[4] = itemHook;
        str5 = intl3.format(selectedRoleIds(1236).t.cJZxWf, obj2);
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
  let obj = selectedRoleIds(589);
  const items = [closure_3];
  const items1 = [id, selectedRoleIds];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    if (null != id) {
      let manyRoles = closure_1_3.getManyRoles(tmp, selectedRoleIds);
    } else {
      manyRoles = [];
    }
    return manyRoles;
  }, items1);
  obj1 = selectedRoleIds(589);
  const items2 = [id, closure_6, closure_5, closure_4];
  const stateFromStoresArray1 = obj1.useStateFromStoresArray(items2, () => {
    const mapped = Array.from(closure_1).map((item, index) => channel.getChannel(item));
    const found = mapped.filter((item, index) => {
      let canResult = null != item;
      if (canResult) {
        canResult = closure_4.can(constants.VIEW_CHANNEL, item);
      }
      return canResult;
    });
    return found.map((item, index) => callback(table[8]).computeChannelName(item, closure_6, closure_5, true));
  });
  let mapped = stateFromStoresArray.map((item, index) => "@" + item.name);
  let singleSelect;
  if (_prompt != null) {
    singleSelect = _prompt.singleSelect;
  }
  let str = "";
  if (!singleSelect) {
    const intl = selectedRoleIds(1236).intl;
    str = intl.string(selectedRoleIds(1236).t.JshhEl);
  }
  if (0 === stateFromStoresArray1.length) {
    if (mapped.length > 0) {
      const intl4 = selectedRoleIds(1236).intl;
      obj = { count: null, extraCount: null, role1: null, role2: null, itemHook: null };
      obj[0] = mapped.length;
      const _Math4 = Math;
      obj[1] = Math.max(mapped.length - 2, 0);
      [obj5[2], obj5[3]] = mapped;
      obj[4] = itemHook;
      str = intl4.format(selectedRoleIds(1236).t.vdtNYa, obj);
    }
    obj = { helpText: null, helpTextAdditional: "" };
    obj[0] = str;
    return obj;
  }
  if (stateFromStoresArray1.length > 0) {
    if (0 === mapped.length) {
      const intl3 = selectedRoleIds(1236).intl;
      obj1 = { count: null, extraCount: null, channel1: null, channel2: null, itemHook: null };
      obj1[0] = stateFromStoresArray1.length;
      const _Math3 = Math;
      obj1[1] = Math.max(stateFromStoresArray1.length - 2, 0);
      [obj4[2], obj4[3]] = stateFromStoresArray1;
      obj1[4] = itemHook;
      str = intl3.format(selectedRoleIds(1236).t.ZKywGU, obj1);
    }
  }
  if (tmp5) {
    const intl2 = selectedRoleIds(1236).intl;
    const obj2 = { channelCount: null, extraChannelCount: null, channel1: null, channel2: null, itemHook: null, roleCount: null, extraRoleCount: null, role1: null, role2: null };
    obj2[0] = stateFromStoresArray1.length;
    const _Math = Math;
    obj2[1] = Math.max(stateFromStoresArray1.length - 2, 0);
    [obj3[2], obj3[3]] = stateFromStoresArray1;
    obj2[4] = itemHook;
    obj2[5] = mapped.length;
    const _Math2 = Math;
    obj2[6] = Math.max(mapped.length - 2, 0);
    [obj3[7], obj3[8]] = mapped;
    str = intl2.format(selectedRoleIds(1236).t.WewRHM, obj2);
  }
  tmp5 = stateFromStoresArray1.length > 0 && mapped.length > 0;
};