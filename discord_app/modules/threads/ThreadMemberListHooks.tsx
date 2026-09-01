// === Module 16271: useThreadMemberListSections ===

// Module 16271 (useThreadMemberListSections)
import closure_3 from "noop" /* 19 */;
import closure_4 from "createGuildRoleRecordFromRust" /* 1985 */;
import closure_5 from "handleUserUpdate" /* 9926 */;
import { StatusTypes } from "sum" /* 505 */;

const require = arg1;
let closure_7 = [];
const result = require("set").fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = function useThreadMemberListSections(channelId, stateFromStores) {
  const _require = channelId;
  importDefault = stateFromStores;
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
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: null, label: null };
      obj[0] = closure_1_6.ONLINE;
      const intl = channelId(stateFromStores[8]).intl;
      obj[1] = intl.string(channelId(stateFromStores[8]).t.WbGtnH);
      obj = { id: null, label: null };
      obj[0] = closure_1_6.OFFLINE;
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