// === Module 18053: usePendingParentRequests ===

// Module 18053 (usePendingParentRequests)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useUserLinks from "useUserLinks" /* 8295 */;
import useFamilyCenterActions from "useFamilyCenterActions" /* 11528 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const UserLinkStatus = fn(7049).UserLinkStatus;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr, arg1) => {
  const cResult = c.c(11);
  let num = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [FamilyCenterStore];
    const fn = function c() {
      return linkedUsers.getLinkedUsers();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function p() {
      currentUser = currentUser.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      return id;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp8, tmp9);
  if (!arg1) {
    return arr;
  } else if (cResult[4] !== arr) {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class A {
        constructor(arg0) {
          items = [, ];
          items[0] = arr.parent_id;
          items[1] = arr;
          return items;
        }
      }
      cResult[6] = A;
    } else {
      class A {
        constructor(arg0) {
          items = [, ];
          items[0] = arr.parent_id;
          items[1] = arr;
          return items;
        }
      }
    }
    const _Map = Map;
    const map = new Map(arr.map(A));
    cResult[4] = arr;
    cResult[5] = map;
  } else {
    class A {
      constructor(arg0) {
        items = [, ];
        items[0] = arr.parent_id;
        items[1] = arr;
        return items;
      }
    }
    if (cResult[7] === stateFromStores1) {
      class A {
        constructor(arg0) {
          items = [, ];
          items[0] = arr.parent_id;
          items[1] = arr;
          return items;
        }
      }
    }
    const items2 = [];
    const _Object = num.Object;
    const values = _Object.values(stateFromStores);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      class A {
        constructor(arg0) {
          items = [, ];
          items[0] = arr.parent_id;
          items[1] = arr;
          return items;
        }
      }
      if (null != nextResult) {
        class A {
          constructor(arg0) {
            items = [, ];
            items[0] = arr.parent_id;
            items[1] = arr;
            return items;
          }
        }
        if (tmp25.link_status === UserLinkStatus.PENDING) {
          class A {
            constructor(arg0) {
              items = [, ];
              items[0] = arr.parent_id;
              items[1] = arr;
              return items;
            }
          }
          if (tmp25.requestor_id !== stateFromStores1) {
            class A {
              constructor(arg0) {
                items = [, ];
                items[0] = arr.parent_id;
                items[1] = arr;
                return items;
              }
            }
            let user = UserStore.getUser(tmp25.user_id);
            let tmp36 = user;
            value = obj4.get(tmp25.user_id);
            let obj2 = { parent_id: tmp25.user_id, parent_username: null, parent_avatar: null, created_at: null };
            let user_id;
            if (user != null) {
              class A {
                constructor(arg0) {
                  items = [, ];
                  items[0] = arr.parent_id;
                  items[1] = arr;
                  return items;
                }
              }
            }
            if (user_id == null) {
              class A {
                constructor(arg0) {
                  items = [, ];
                  items[0] = arr.parent_id;
                  items[1] = arr;
                  return items;
                }
              }
              let tmp27;
              if (value != null) {
                class A {
                  constructor(arg0) {
                    items = [, ];
                    items[0] = arr.parent_id;
                    items[1] = arr;
                    return items;
                  }
                }
              }
              user_id = tmp27;
            }
            if (user_id == null) {
              class A {
                constructor(arg0) {
                  items = [, ];
                  items[0] = arr.parent_id;
                  items[1] = arr;
                  return items;
                }
              }
              user_id = tmp25.user_id;
            }
            obj2.parent_username = user_id;
            let tmp29;
            if (tmp36 != null) {
              class A {
                constructor(arg0) {
                  items = [, ];
                  items[0] = arr.parent_id;
                  items[1] = arr;
                  return items;
                }
              }
            }
            if (tmp29 == null) {
              class A {
                constructor(arg0) {
                  items = [, ];
                  items[0] = arr.parent_id;
                  items[1] = arr;
                  return items;
                }
              }
              let tmp30;
              if (value != null) {
                class A {
                  constructor(arg0) {
                    items = [, ];
                    items[0] = arr.parent_id;
                    items[1] = arr;
                    return items;
                  }
                }
              }
              tmp29 = tmp30;
            }
            if (tmp29 == null) {
              class A {
                constructor(arg0) {
                  items = [, ];
                  items[0] = arr.parent_id;
                  items[1] = arr;
                  return items;
                }
              }
            }
            obj2.parent_avatar = tmp29;
            obj2.created_at = tmp25.created_at;
            arr = items2.push(obj2);
          }
        }
      }
      continue;
    }
    cResult[7] = stateFromStores1;
    cResult[8] = stateFromStores;
    cResult[9] = obj4;
    num = 10;
    cResult[10] = items2;
  }
  const tmpResult2 = initialize;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  let items = [FamilyCenterStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  let obj = require("initialize");
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [arg1, stateFromStores, stateFromStores1, arg0];
  return stateFromStores1.useMemo(() => {
    if (closure_1) {
      const _Map = Map;
      const map = new Map(closure_0.map((parent_id) => {
        const items = [parent_id.parent_id, parent_id];
        return items;
      }));
      let items = [];
      const _Object = Object;
      const values = Object.values(stateFromStores);
      const iter = values[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp14 = nextResult;
        if (null != nextResult) {
          if (tmp14.link_status === UserLinkStatus.PENDING) {
            if (tmp14.requestor_id !== stateFromStores1) {
              let user = UserStore.getUser(tmp14.user_id);
              let tmp32 = user;
              value = map.get(tmp14.user_id);
              let obj = { parent_id: tmp14.user_id, parent_username: null, parent_avatar: null, created_at: null };
              let username;
              if (user != null) {
                username = user.username;
              }
              if (username == null) {
                let parent_username;
                if (value != null) {
                  parent_username = value.parent_username;
                }
                username = parent_username;
              }
              if (username == null) {
                username = tmp14.user_id;
              }
              obj.parent_username = username;
              let avatar;
              if (tmp32 != null) {
                avatar = tmp32.avatar;
              }
              if (avatar == null) {
                let parent_avatar;
                if (value != null) {
                  parent_avatar = value.parent_avatar;
                }
                avatar = parent_avatar;
              }
              if (avatar == null) {
                avatar = null;
              }
              obj.parent_avatar = avatar;
              obj.created_at = tmp14.created_at;
              let arr = items.push(obj);
            }
          }
        }
        continue;
      }
      return items;
    } else {
      return closure_0;
    }
  }, items2);
});
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((pendingRequests) => {
  const cResult = c.c(20);
  pendingRequests = pendingRequests.pendingRequests;
  ({ linkedUsersProcessed, onActionError } = pendingRequests);
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  [tmp7, _slicedToArray] = noop.useState(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u() {
      return _slicedToArray(null);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== onActionError) {
    const obj4 = {
      onSuccess: first,
      onError() {
          _slicedToArray(null);
          onActionError();
        }
    };
    cResult[1] = onActionError;
    cResult[2] = obj4;
    let tmp9 = obj4;
  } else {
    tmp9 = cResult[2];
  }
  const tmp6 = _slicedToArray(noop.useState(null), 2);
  const familyCenterActions = useFamilyCenterActions.useFamilyCenterActions(tmp9);
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let tmp11 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp11 = isDeclineLoading;
  }
  isDeclineLoading = tmp11;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        set = new Set();
        return set;
      }
    }
    cResult[3] = A;
  } else {
    class A {
      constructor() {
        set = new Set();
        return set;
      }
    }
  }
  const tmpResult = useFamilyCenterActions;
  [UserLinkStatus, closure_7] = noop.useState(A);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        set = new Set();
        return set;
      }
    }
    cResult[4] = tmp15;
  } else {
    class A {
      constructor() {
        set = new Set();
        return set;
      }
    }
  }
  if (cResult[5] === acceptLinkRequest) {
    class A {
      constructor() {
        set = new Set();
        return set;
      }
    }
    if (cResult[8] === declineLinkRequest) {
      class A {
        constructor() {
          set = new Set();
          return set;
        }
      }
      [tmp19, tmp20] = noop.useState(pendingRequests);
      const tmp5Result4 = _slicedToArray(noop.useState(pendingRequests), 2);
      [tmp22, r10090] = noop.useState(pendingRequests);
      _slicedToArray(noop.useState(linkedUsersProcessed), 2);
      if (linkedUsersProcessed) {
        class A {
          constructor() {
            set = new Set();
            return set;
          }
        }
        if (cResult[11] === tmp7) {
          class A {
            constructor() {
              set = new Set();
              return set;
            }
          }
        }
        const obj5 = { seenRequests: tmp19, hasMaxConnections, actioningUserId: tmp7, isAcceptLoading, isDeclineLoading, actionsDisabled: tmp11, handleAccept: M, handleDecline: tmp17 };
        cResult[11] = tmp7;
        cResult[12] = M;
        cResult[13] = tmp17;
        cResult[14] = hasMaxConnections;
        cResult[15] = isAcceptLoading;
        cResult[16] = isDeclineLoading;
        cResult[17] = tmp11;
        cResult[18] = tmp19;
        cResult[19] = obj5;
      }
      if (pendingRequests !== tmp22) {
        class A {
          constructor() {
            set = new Set();
            return set;
          }
        }
        tmp20((arr) => {
          const map = new Map(arr.map((parent_id) => {
            const items = [parent_id.parent_id, parent_id];
            return items;
          }));
          for (const item10015 of pendingRequests) {
            let result = map.set(item10015.parent_id, item10015);
            continue;
          }
          return Array.from(map.values());
        });
      }
      const tmp5Result5 = _slicedToArray(noop.useState(pendingRequests), 2);
    }
    const fn2 = function w(arg0) {
      if (!isDeclineLoading) {
        tmp15(arg0);
        _slicedToArray(arg0);
        declineLinkRequest(arg0);
      }
    };
    cResult[8] = declineLinkRequest;
    cResult[9] = tmp11;
    cResult[10] = fn2;
  }
  class M {
    constructor(arg0) {
      if (!isDeclineLoading) {
        tmp = pendingRequests;
        tmp2 = closure_8;
        tmp3 = closure_8(pendingRequests);
        tmp4 = closure_2;
        tmp5 = closure_2(pendingRequests);
        tmp6 = acceptLinkRequest;
        tmp7 = acceptLinkRequest(pendingRequests);
      }
      return;
    }
  }
  cResult[5] = acceptLinkRequest;
  cResult[6] = tmp11;
  cResult[7] = M;
  const tmp5Result = _slicedToArray(noop.useState(A), 2);
}) : ((pendingRequests) => {
  pendingRequests = pendingRequests.pendingRequests;
  ({ linkedUsersProcessed, onActionError: dependencyMap } = pendingRequests);
  c2 = undefined;
  isDeclineLoading = undefined;
  c6 = undefined;
  c7 = undefined;
  let callback;
  const hasMaxConnections = useUserLinks.useHasMaxConnections();
  [tmp4, c2] = noop.useState(null);
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const familyCenterActions = useFamilyCenterActions.useFamilyCenterActions({
    onSuccess() {
      return _undefined(null);
    },
    onError() {
      _undefined(null);
      dependencyMap();
    }
  });
  const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let tmp6 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp6 = isDeclineLoading;
  }
  isDeclineLoading = tmp6;
  const obj4 = {
    onSuccess() {
      return _undefined(null);
    },
    onError() {
      _undefined(null);
      dependencyMap();
    }
  };
  [c6, c7] = noop.useState(() => new Set());
  callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    _undefined3((has) => {
      if (has.has(closure_0)) {
        return has;
      } else {
        const _Set = Set;
        const set = new Set(has);
        set.add(closure_0);
        return set;
      }
    });
  }, []);
  let items = [tmp6, callback, acceptLinkRequest];
  const items1 = [tmp6, callback, declineLinkRequest];
  const callback1 = noop.useCallback((arg0) => {
    if (!isDeclineLoading) {
      callback(arg0);
      _undefined(arg0);
      acceptLinkRequest(arg0);
    }
  }, items);
  const callback2 = noop.useCallback((arg0) => {
    if (!isDeclineLoading) {
      callback(arg0);
      _undefined(arg0);
      declineLinkRequest(arg0);
    }
  }, items1);
  const tmp2Result = _slicedToArray(noop.useState(() => new Set()), 2);
  [tmp12, tmp13] = noop.useState(pendingRequests);
  const tmp2Result4 = _slicedToArray(noop.useState(pendingRequests), 2);
  [tmp15, tmp16] = noop.useState(pendingRequests);
  const tmp2Result5 = _slicedToArray(noop.useState(pendingRequests), 2);
  if (linkedUsersProcessed) {
    if (!tmp2Result6[0]) {
      tmp18(true);
      tmp16(pendingRequests);
      tmp13((arg0) => {
        const map = new Map();
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          if (_undefined2.has(nextResult.parent_id)) {
            let result = map.set(tmp2.parent_id, tmp2);
          }
          continue;
        }
        for (const item10027 of pendingRequests) {
          let result1 = map.set(item10027.parent_id, item10027);
          continue;
        }
        return Array.from(map.values());
      });
    }
    const obj5 = { seenRequests: tmp12, hasMaxConnections, actioningUserId: tmp4, isAcceptLoading, isDeclineLoading, actionsDisabled: tmp6, handleAccept: callback1, handleDecline: callback2 };
    return obj5;
  }
  if (pendingRequests !== tmp15) {
    tmp16(pendingRequests);
    tmp13((arr) => {
      const map = new Map(arr.map((parent_id) => {
        const items = [parent_id.parent_id, parent_id];
        return items;
      }));
      for (const item10015 of pendingRequests) {
        let result = map.set(item10015.parent_id, item10015);
        continue;
      }
      return Array.from(map.values());
    });
  }
  tmp2Result6 = _slicedToArray(noop.useState(linkedUsersProcessed), 2);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = tmp2;
export const usePendingRequestListController = tmp3;
export const usePendingRequestResolution = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const tmp = FamilyCenterStore.getLinkedUsers()[closure_0];
      let link_status;
      if (tmp != null) {
        link_status = tmp.link_status;
      }
      return link_status;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] !== stateFromStores) {
    const fn2 = function v() {
      let str = "connected";
      if (stateFromStores !== UserLinkStatus.ACTIVE) {
        if (null == stateFromStores) {
          let str2 = null;
        } else {
          str2 = "declined";
        }
        str = str2;
      }
      return str;
    };
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  const tmpResult = require("initialize");
  [tmp10, tmp11] = noop.useState(tmp8);
  const tmp12 = _slicedToArray(noop.useState(stateFromStores), 2);
  const first1 = tmp12[0];
  if (stateFromStores !== first1) {
    tmp12[1](stateFromStores);
    if (stateFromStores === UserLinkStatus.ACTIVE) {
      tmp11("connected");
    } else if (stateFromStores === UserLinkStatus.PENDING) {
      tmp11(null);
    } else {
      let tmp17 = null != stateFromStores;
      if (!tmp17) {
        tmp17 = null != first1 && first1 !== UserLinkStatus.ACTIVE;
        const tmp18 = null != first1 && first1 !== UserLinkStatus.ACTIVE;
      }
      if (tmp17) {
        tmp11("declined");
      }
    }
  }
  let tmp25 = tmp23;
  if ("connected" !== tmp10) {
    tmp25 = tmp24;
  }
  if (cResult[5] === "connected" === tmp10) {
    if (cResult[6] === tmp24) {
      if (cResult[7] === tmp25) {
        let tmp26 = cResult[8];
      }
      return tmp26;
    }
  }
  const obj2 = { isConnected: "connected" === tmp10, isDeclined: "declined" === tmp10, isResolved: tmp25 };
  cResult[5] = "connected" === tmp10;
  cResult[6] = "declined" === tmp10;
  cResult[7] = tmp25;
  cResult[8] = obj2;
  tmp26 = obj2;
  const tmp9 = _slicedToArray(noop.useState(tmp8), 2);
}) : ((arg0) => {
  _require = arg0;
  const items = [FamilyCenterStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const tmp = FamilyCenterStore.getLinkedUsers()[closure_0];
    let link_status;
    if (tmp != null) {
      link_status = tmp.link_status;
    }
    return link_status;
  });
  const obj = require("initialize");
  [tmp3, tmp4] = noop.useState(() => {
    let str = "connected";
    if (stateFromStores !== UserLinkStatus.ACTIVE) {
      if (null == stateFromStores) {
        let str2 = null;
      } else {
        str2 = "declined";
      }
      str = str2;
    }
    return str;
  });
  const tmp5 = _slicedToArray(noop.useState(stateFromStores), 2);
  const first = tmp5[0];
  if (stateFromStores !== first) {
    tmp5[1](stateFromStores);
    if (stateFromStores === UserLinkStatus.ACTIVE) {
      tmp4("connected");
    } else if (stateFromStores === UserLinkStatus.PENDING) {
      tmp4(null);
    } else {
      let tmp10 = null != stateFromStores;
      if (!tmp10) {
        tmp10 = null != first && first !== UserLinkStatus.ACTIVE;
        const tmp11 = null != first && first !== UserLinkStatus.ACTIVE;
      }
      if (tmp10) {
        tmp4("declined");
      }
    }
  }
  let tmp16 = "connected" === tmp3;
  const obj2 = { isConnected: tmp16, isDeclined: "declined" === tmp3, isResolved: null };
  if (!tmp16) {
    tmp16 = tmp17;
  }
  obj2.isResolved = tmp16;
  return obj2;
});