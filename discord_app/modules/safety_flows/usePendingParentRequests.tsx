// === Module 18407: usePendingParentRequests ===

// Module 18407 (usePendingParentRequests)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import useUserLinks from "useUserLinks" /* 7711 */;
import useFamilyCenterActions from "useFamilyCenterActions" /* 11555 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;
import UserStore from "UserStore" /* 1389 */;

const require = globalThis.__r;

require = fn;
const UserLinkStatus = fn(7248).UserLinkStatus;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useDerivedPendingRequests(arr, arg1) {
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
      const fn3 = function h(parent_id) {
        const items = [parent_id.parent_id, parent_id];
        return items;
      };
      cResult[6] = fn3;
      let tmp12 = fn3;
    } else {
      tmp12 = cResult[6];
    }
    const _Map = Map;
    const map = new Map(arr.map(tmp12));
    cResult[4] = arr;
    cResult[5] = map;
  } else {
    if (cResult[7] === stateFromStores1) {
      if (cResult[8] === stateFromStores) {
      }
    }
    const items2 = [];
    const _Object = num.Object;
    const values = _Object.values(stateFromStores);
    const iter = values[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp25 = nextResult;
      if (null != nextResult) {
        if (tmp25.link_status === UserLinkStatus.PENDING) {
          if (tmp25.requestor_id !== stateFromStores1) {
            let user = UserStore.getUser(tmp25.user_id);
            let tmp43 = user;
            value = obj4.get(tmp25.user_id);
            let obj2 = { parent_id: tmp25.user_id, parent_username: null, parent_avatar: null, created_at: null };
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
              username = tmp25.user_id;
            }
            obj2.parent_username = username;
            let avatar;
            if (tmp43 != null) {
              avatar = tmp43.avatar;
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
            obj2.parent_avatar = avatar;
            obj2.created_at = tmp25.created_at;
            arr = items2.push(obj2);
          }
        }
      }
      continue;
    }
    cResult[7] = stateFromStores1;
    cResult[8] = stateFromStores;
    cResult[9] = cResult[5];
    num = 10;
    cResult[10] = items2;
  }
  const tmpResult2 = initialize;
}) : (function useDerivedPendingRequests(arg0, arg1) {
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
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingRequestListController(pendingRequests) {
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
    const fn2 = function h() {
      return new Set();
    };
    cResult[3] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
  }
  const tmpResult = useFamilyCenterActions;
  [UserLinkStatus, closure_7] = noop.useState(tmp12);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function b(arg0) {
      closure_0 = arg0;
      closure_1_7((has) => {
        if (has.has(closure_0)) {
          return has;
        } else {
          const _Set = Set;
          set = new Set(has);
          set.add(closure_0);
          return set;
        }
      });
    };
    cResult[4] = fn3;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[4];
  }
  closure_8 = tmp14;
  if (cResult[5] === acceptLinkRequest) {
    if (cResult[6] === tmp11) {
      let tmp15 = cResult[7];
    }
    if (cResult[8] === declineLinkRequest) {
      if (cResult[9] === tmp11) {
        let tmp16 = cResult[10];
      }
      [tmp18, tmp19] = noop.useState(pendingRequests);
      const tmp5Result4 = _slicedToArray(noop.useState(pendingRequests), 2);
      [tmp21, tmp22] = noop.useState(pendingRequests);
      const tmp5Result5 = _slicedToArray(noop.useState(pendingRequests), 2);
      if (linkedUsersProcessed) {
        if (!tmp5Result6[0]) {
          tmp24(true);
          tmp22(pendingRequests);
          tmp19((arg0) => {
            const map = new Map();
            const iter = arg0[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp2 = nextResult;
              if (set.has(nextResult.parent_id)) {
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
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp15) {
            if (cResult[13] === tmp16) {
              if (cResult[14] === hasMaxConnections) {
                if (cResult[15] === isAcceptLoading) {
                  if (cResult[16] === isDeclineLoading) {
                    if (cResult[17] === tmp11) {
                      if (cResult[18] === tmp18) {
                        let tmp30 = cResult[19];
                      }
                      return tmp30;
                    }
                  }
                }
              }
            }
          }
        }
        const obj5 = { seenRequests: tmp18, hasMaxConnections, actioningUserId: tmp7, isAcceptLoading, isDeclineLoading, actionsDisabled: tmp11, handleAccept: tmp15, handleDecline: tmp16 };
        cResult[11] = tmp7;
        cResult[12] = tmp15;
        cResult[13] = tmp16;
        cResult[14] = hasMaxConnections;
        cResult[15] = isAcceptLoading;
        cResult[16] = isDeclineLoading;
        cResult[17] = tmp11;
        cResult[18] = tmp18;
        cResult[19] = obj5;
        tmp30 = obj5;
      }
      if (pendingRequests !== tmp21) {
        tmp22(pendingRequests);
        tmp19((arr) => {
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
      tmp5Result6 = _slicedToArray(noop.useState(linkedUsersProcessed), 2);
    }
    const fn4 = function w(arg0) {
      if (!isDeclineLoading) {
        closure_8(arg0);
        _slicedToArray(arg0);
        declineLinkRequest(arg0);
      }
    };
    cResult[8] = declineLinkRequest;
    cResult[9] = tmp11;
    cResult[10] = fn4;
    tmp16 = fn4;
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
  tmp15 = M;
  const tmp5Result = _slicedToArray(noop.useState(tmp12), 2);
}) : (function usePendingRequestListController(pendingRequests) {
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
export const usePendingRequestResolution = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingRequestResolution(arg0) {
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
}) : (function usePendingRequestResolution(arg0) {
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