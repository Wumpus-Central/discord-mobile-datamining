// === Module 16899: ThreadMemberListHooks ===

// Module 16899 (ThreadMemberListHooks)
import Constants from "Constants" /* 1096 */;
import intl3 from "intl" /* 1126 */;
import GuildChannelSubscriptions from "GuildChannelSubscriptions" /* 6799 */;
import GuildSubscriptionsActionCreators from "GuildSubscriptionsActionCreators" /* 6825 */;
import react from "react" /* 19 */;
import GuildRoleStore from "GuildRoleStore" /* 2106 */;
import ThreadMemberListStore from "ThreadMemberListStore" /* 9511 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_4, importDefault;

const StatusTypes = Constants.StatusTypes;
let closure_7 = [];
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let intl;
  let intl2;
  let members;
  let user;
  let version;
  _require = arg0;
  importDefault = arg1;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(16);
  if (cResult[0] === arg1) {
    let tmp4;
    let tmp8;
    let tmp11;
    if (cResult[1] === arg0) {
      tmp4 = cResult[2];
    }
    require("useMountEffect")(tmp4);
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [GuildRoleStore];
      cResult[3] = items;
      tmp8 = items;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== arg1) {
      class S {
        constructor() {
          let sortedRoles;
          if (null != user) {
            sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      cResult[4] = arg1;
      cResult[5] = S;
    } else {
      class S {
        constructor() {
          let sortedRoles;
          if (null != user) {
            sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
    }
    const tmpResult = tmp(members[9]);
    const stateFromStores = tmpResult.useStateFromStores(tmp8, S);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          let sortedRoles;
          if (null != user) {
            sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      const items1 = [ThreadMemberListStore];
      cResult[6] = items1;
      tmp11 = items1;
    } else {
      class S {
        constructor() {
          let sortedRoles;
          if (null != user) {
            sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
    }
    if (cResult[7] !== arg0) {
      class S {
        constructor() {
          let sortedRoles;
          if (null != user) {
            sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      cResult[7] = arg0;
      cResult[8] = tmp13;
    } else {
      class S {
        constructor() {
          let sortedRoles;
          if (null != user) {
            sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
    }
    const tmpResult2 = tmp(members[9]);
    const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp11, tmp13);
    ({ version, members } = stateFromStoresObject);
    if (null != arg1) {
      class S {
        constructor() {
          let sortedRoles;
          if (null != user) {
            sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
          } else {
            sortedRoles = [];
          }
          return sortedRoles;
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(hoist) {
            return hoist.hoist;
          }
        }
        cResult[12] = E;
      } else {
        class E {
          constructor(hoist) {
            return hoist.hoist;
          }
        }
      }
      const _Symbol4 = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor(id) {
            return { id: id.id, label: id.name };
          }
        }
        cResult[13] = M;
      } else {
        class M {
          constructor(id) {
            return { id: id.id, label: id.name };
          }
        }
      }
      const found = stateFromStores.filter(E);
      const mapped = found.map(M);
      const push = mapped.push;
      const obj2 = { id: StatusTypes.ONLINE, label: intl.string(tmp(members[10]).t.WbGtnH) };
      intl = tmp(members[10]).intl;
      const obj3 = { id: StatusTypes.OFFLINE, label: intl2.string(tmp(members[10]).t.Vv0abJ) };
      intl2 = tmp(members[10]).intl;
      push(obj2, obj3);
      if (cResult[14] !== members) {
        class N {
          constructor(id) {
            let userIds;
            id = id.id;
            const obj = { label: id.label, userIds, id, roleId: id };
            userIds = undefined;
            if (members != null) {
              if (members[id] != null) {
                userIds = tmp.userIds;
              }
            }
            if (userIds == null) {
              userIds = [];
            }
            return obj;
          }
        }
        cResult[14] = members;
        cResult[15] = N;
      } else {
        class N {
          constructor(id) {
            let userIds;
            id = id.id;
            const obj = { label: id.label, userIds, id, roleId: id };
            userIds = undefined;
            if (members != null) {
              if (members[id] != null) {
                userIds = tmp.userIds;
              }
            }
            if (userIds == null) {
              userIds = [];
            }
            return obj;
          }
        }
      }
      const mapped1 = mapped.map(N);
      cResult[9] = members;
      cResult[10] = stateFromStores;
      cResult[11] = mapped1;
    } else {
      class N {
        constructor(id) {
          let userIds;
          id = id.id;
          const obj = { label: id.label, userIds, id, roleId: id };
          userIds = undefined;
          if (members != null) {
            if (members[id] != null) {
              userIds = tmp.userIds;
            }
          }
          if (userIds == null) {
            userIds = [];
          }
          return obj;
        }
      }
    }
    if (null == members) {
      class N {
        constructor(id) {
          let userIds;
          id = id.id;
          const obj = { label: id.label, userIds, id, roleId: id };
          userIds = undefined;
          if (members != null) {
            if (members[id] != null) {
              userIds = tmp.userIds;
            }
          }
          if (userIds == null) {
            userIds = [];
          }
          return obj;
        }
      }
    }
    return tmp16;
  }
  const fn = function u() {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null != id) {
      const obj = GuildSubscriptionsActionCreators;
      obj.subscribeChannel(user.id, closure_0, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  };
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let stateFromStores;
  let user;
  _require = arg0;
  importDefault = arg1;
  const tmp = require("useMountEffect")(() => {
    let id;
    if (user != null) {
      id = user.id;
    }
    if (null != id) {
      const obj = GuildSubscriptionsActionCreators;
      obj.subscribeChannel(user.id, closure_0, GuildChannelSubscriptions.DEFAULT_RANGES);
    }
  });
  let obj = require("get initialized");
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    let sortedRoles;
    if (null != user) {
      sortedRoles = GuildRoleStore.getSortedRoles(tmp.id);
    } else {
      sortedRoles = [];
    }
    return sortedRoles;
  });
  let obj2 = require("get initialized");
  const items1 = [ThreadMemberListStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const obj = { version: ThreadMemberListStore.getMemberListVersion(closure_0), members: ThreadMemberListStore.getMemberListSections(closure_0) };
    return obj;
  });
  const members = stateFromStoresObject.members;
  closure_4 = tmp4;
  const items2 = [stateFromStores, members, stateFromStoresObject.version, null == arg1];
  let memo = members.useMemo(() => {
    let intl;
    let intl2;
    if (closure_4) {
      return closure_7;
    } else {
      const found = stateFromStores.filter((hoist) => hoist.hoist);
      const mapped = found.map((id) => ({ id: id.id, label: id.name }));
      let obj = { id: StatusTypes.ONLINE, label: intl.string(intl3.t.WbGtnH) };
      const push = mapped.push;
      intl = intl3.intl;
      const obj2 = { id: StatusTypes.OFFLINE, label: intl2.string(intl3.t.Vv0abJ) };
      intl2 = intl3.intl;
      push(obj, obj2);
      return mapped.map((id) => {
        let userIds;
        id = id.id;
        const obj = { label: id.label, userIds, id, roleId: id };
        userIds = undefined;
        if (members != null) {
          if (members[id] != null) {
            userIds = tmp.userIds;
          }
        }
        if (userIds == null) {
          userIds = [];
        }
        return obj;
      });
    }
  }, items2);
  if (null == members) {
    memo = closure_7;
  }
  return memo;
});
const result = size.fileFinishedImporting("modules/threads/ThreadMemberListHooks.tsx");

export const useThreadMemberListSections = tmp2;