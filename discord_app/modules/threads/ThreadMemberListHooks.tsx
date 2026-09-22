// === Module 17174: ThreadMemberListHooks ===

// Module 17174 (ThreadMemberListHooks)
import util from "util" /* 1115 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 7530 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 7556 */;
import noop from "module_19" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import ThreadMemberListStore from "ThreadMemberListStore" /* 10099 */;

const require = globalThis.__r;

require = fn;
const StatusTypes = fn(1085).StatusTypes;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = function useThreadMemberListSections(channelId, stateFromStores) {
  _require = channelId;
  importDefault = stateFromStores;
  require("useMountEffect")(() => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (null != id) {
      GuildSubscriptionsActionCreators.subscribeChannel(stateFromStores.id, closure_0, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  });
  const items = [closure_4];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != closure_1) {
      let sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  let obj = require("initialize");
  const items1 = [ThreadMemberListStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items1, () => ({ version: ThreadMemberListStore.getMemberListVersion(closure_0), members: ThreadMemberListStore.getMemberListSections(closure_0) }));
  const members = stateFromStoresObject.members;
  closure_4 = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, null == stateFromStores];
  let memo = members.useMemo(() => {
    if (closure_4) {
      return closure_7;
    } else {
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: StatusTypes.ONLINE, label: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.WbGtnH);
      const obj2 = { id: StatusTypes.OFFLINE, label: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.Vv0abJ);
      mapped.push(obj, obj2);
      return mapped.map((id) => {
        id = id.id;
        const obj = { label: id.label, userIds: null, id: null, roleId: null };
        let userIds;
        if (members != null) {
          if (members[id] != null) {
            userIds = tmp.userIds;
          }
        }
        if (userIds == null) {
          userIds = [];
        }
        obj.userIds = userIds;
        obj.id = id;
        obj.roleId = id;
        return obj;
      });
    }
  }, items2);
  if (null == members) {
    memo = closure_7;
  }
  return memo;
};