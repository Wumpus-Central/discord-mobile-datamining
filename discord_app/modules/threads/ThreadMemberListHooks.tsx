// discord_app/modules/threads/ThreadMemberListHooks.tsx
import noop from "noop";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import handleUserUpdate from "handleUserUpdate";
import { StatusTypes } from "sum";

const require = arg1;
let closure_7 = [];
const result = require("handleUserUpdate").fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = function useThreadMemberListSections(channelId, stateFromStores) {
  const _require = channelId;
  const importDefault = stateFromStores;
  importDefault(stateFromStores[4])(() => {
    let id;
    if (closure_1 != null) {
      id = tmp.id;
    }
    if (null != id) {
      channelId(stateFromStores[5]).subscribeChannel(tmp.id, channelId, channelId(stateFromStores[6]).DEFAULT_RANGES);
      const obj = channelId(stateFromStores[5]);
    }
  });
  const items = [createGuildRoleRecordFromRust];
  stateFromStores = _require(stateFromStores[7]).useStateFromStores(items, () => {
    if (null != closure_1) {
      let sortedRoles = tmp4.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  let obj = _require(stateFromStores[7]);
  const items1 = [handleUserUpdate];
  const stateFromStoresObject = _require(stateFromStores[7]).useStateFromStoresObject(items1, () => ({ version: outer1_5.getMemberListVersion(closure_0), members: outer1_5.getMemberListSections(closure_0) }));
  const members = stateFromStoresObject.members;
  createGuildRoleRecordFromRust = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, null == stateFromStores];
  let memo = members.useMemo(() => {
    if (createGuildRoleRecordFromRust) {
      return outer1_7;
    } else {
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: null, label: null };
      obj[0] = outer1_6.ONLINE;
      const intl = channelId(stateFromStores[8]).intl;
      obj[1] = intl.string(channelId(stateFromStores[8]).t.WbGtnH);
      obj = { id: null, label: null };
      obj[0] = outer1_6.OFFLINE;
      const intl2 = channelId(stateFromStores[8]).intl;
      obj[1] = intl2.string(channelId(stateFromStores[8]).t.Vv0abJ);
      mapped.push(obj, obj);
      return mapped.map((id) => {
        id = id.id;
        const obj = { label: id.label, userIds: null, id: null, roleId: null };
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