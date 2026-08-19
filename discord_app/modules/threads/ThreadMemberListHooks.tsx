// discord_app/modules/threads/ThreadMemberListHooks.tsx
import noop from "../../../_runtime/00019_noop.js";
import createGuildRoleRecordFromRust from "../../stores/GuildRoleStore.tsx";
import handleUserUpdate from "ThreadMemberListStore.tsx";
import { StatusTypes } from "../../../discord_common/js/shared/Constants.tsx";

const require = fn;
let closure_7 = [];
const result = require("obj132").fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = function useThreadMemberListSections(channelId, stateFromStores) {
  const _require = channelId;
  importDefault = stateFromStores;
  importDefault(stateFromStores[4])(() => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (null != id) {
      channelId(stateFromStores[5]).subscribeChannel(stateFromStores.id, channelId, channelId(stateFromStores[6]).DEFAULT_RANGES);
      const obj = channelId(stateFromStores[5]);
    }
  });
  const items = [closure_4];
  stateFromStores = _require(stateFromStores[7]).useStateFromStores(items, () => {
    if (null != closure_1) {
      sortedRoles = sortedRoles.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  let obj = _require(stateFromStores[7]);
  const items1 = [closure_5];
  const stateFromStoresObject = _require(stateFromStores[7]).useStateFromStoresObject(items1, () => ({ version: closure_1_5.getMemberListVersion(closure_0), members: closure_1_5.getMemberListSections(closure_0) }));
  const members = stateFromStoresObject.members;
  closure_4 = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, null == stateFromStores];
  let memo = members.useMemo(() => {
    if (closure_4) {
      return closure_1_7;
    } else {
      const found = stateFromStores.filter((item, index) => item.hoist);
      const mapped = found.map((item, index) => ({ id: item.id, label: item.name }));
      let obj = { id: null, label: null };
      obj[0] = StatusTypes.ONLINE;
      const intl = channelId(stateFromStores[8]).intl;
      obj[1] = intl.string(channelId(stateFromStores[8]).t.WbGtnH);
      obj = { id: null, label: null };
      obj[0] = StatusTypes.OFFLINE;
      const intl2 = channelId(stateFromStores[8]).intl;
      obj[1] = intl2.string(channelId(stateFromStores[8]).t.Vv0abJ);
      mapped.push(obj, obj);
      return mapped.map((item, index) => {
        const id = item.id;
        const obj = { label: item.label, userIds: null, id: null, roleId: null };
        let userIds;
        if (table != null) {
          if (table[id] != null) {
            userIds = tmp.userIds;
          }
        }
        if (userIds == null) {
          userIds = [];
        }
        obj[1] = userIds;
        obj[2] = id;
        obj[3] = id;
        return obj;
      });
    }
  }, items2);
  if (null == members) {
    memo = closure_7;
  }
  return memo;
};