// === Module 17100: useDerivedPendingRequests ===

// Module 17100 (useDerivedPendingRequests)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import freshTeenActivityWithMap from "freshTeenActivityWithMap" /* 5296 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { UserLinkStatus } from "items" /* 5297 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = function useDerivedPendingRequests(arr, stateFromStores1) {
  const _require = arr;
  dependencyMap = stateFromStores1;
  let items = [closure_4];
  const stateFromStores = _require(589).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  let obj = _require(589);
  const items1 = [closure_5];
  stateFromStores1 = _require(589).useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores1, stateFromStores, stateFromStores1, arr];
  return stateFromStores1.useMemo(() => {
    if (closure_1) {
      const _Map = Map;
      const map = new Map(arr.map((item, index) => {
        const items = [item.parent_id, item];
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
              let user = closure_1_5.getUser(tmp14.user_id);
              let tmp32 = user;
              let value = map.get(tmp14.user_id);
              let obj = { parent_id: null, parent_username: null, parent_avatar: null, created_at: null };
              obj[0] = tmp14.user_id;
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
              obj[1] = username;
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
              obj[2] = avatar;
              obj[3] = tmp14.created_at;
              arr = items.push(obj);
            }
          }
        }
        continue;
      }
      return items;
    } else {
      return arr;
    }
  }, items2);
};
export const usePendingRequestListController = function usePendingRequestListController(pendingRequests) {
  pendingRequests = pendingRequests.pendingRequests;
  ({ linkedUsersProcessed, onActionError: dependencyMap } = pendingRequests);
  let acceptLinkRequest;
  isDeclineLoading = undefined;
  c6 = undefined;
  c7 = undefined;
  let callback;
  let obj = pendingRequests(7621);
  const hasMaxConnections = obj.useHasMaxConnections();
  [tmp4, c2] = callback(acceptLinkRequest.useState(null), 2);
  const tmp3 = callback(acceptLinkRequest.useState(null), 2);
  obj = {
    onSuccess() {
      return _undefined(null);
    },
    onError() {
      _undefined(null);
      callback();
    }
  };
  const familyCenterActions = pendingRequests(11104).useFamilyCenterActions(obj);
  acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  const declineLinkRequest = familyCenterActions.declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let tmp6 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp6 = isDeclineLoading;
  }
  isDeclineLoading = tmp6;
  let tmp2Result = tmp2(obj2.useState(() => new Set()), 2);
  [c6, c7] = tmp2Result;
  callback = obj2.useCallback((arg0) => {
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
  const callback1 = obj2.useCallback((arg0) => {
    if (!isDeclineLoading) {
      callback(arg0);
      _undefined(arg0);
      acceptLinkRequest(arg0);
    }
  }, items);
  const callback2 = obj2.useCallback((arg0) => {
    if (!isDeclineLoading) {
      callback(arg0);
      _undefined(arg0);
      declineLinkRequest(arg0);
    }
  }, items1);
  tmp2Result = tmp2(obj2.useState(pendingRequests), 2);
  [tmp12, tmp13] = tmp2Result;
  const obj3 = pendingRequests(11104);
  [tmp15, tmp16] = callback(acceptLinkRequest.useState(pendingRequests), 2);
  const tmp2Result1 = callback(acceptLinkRequest.useState(pendingRequests), 2);
  if (linkedUsersProcessed) {
    if (!tmp2Result2[0]) {
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
    obj = { seenRequests: null, hasMaxConnections: null, actioningUserId: null, isAcceptLoading: null, isDeclineLoading: null, actionsDisabled: null, handleAccept: null, handleDecline: null };
    obj[0] = tmp12;
    obj[1] = hasMaxConnections;
    obj[2] = tmp4;
    obj[3] = isAcceptLoading;
    obj[4] = isDeclineLoading;
    obj[5] = tmp6;
    obj[6] = callback1;
    obj[7] = callback2;
    return obj;
  }
  if (pendingRequests !== tmp15) {
    tmp16(pendingRequests);
    tmp13((arr) => {
      const map = new Map(arr.map((item, index) => {
        const items = [item.parent_id, item];
        return items;
      }));
      for (const item10015 of pendingRequests) {
        let result = map.set(item10015.parent_id, item10015);
        continue;
      }
      return Array.from(map.values());
    });
  }
};
export const usePendingRequestResolution = function usePendingRequestResolution(parent_id) {
  const _require = parent_id;
  let obj = _require(stateFromStores[5]);
  const items = [closure_4];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = closure_1_4.getLinkedUsers()[closure_0];
    let link_status;
    if (tmp != null) {
      link_status = tmp.link_status;
    }
    return link_status;
  });
  [tmp3, tmp4] = callback(React.useState(() => {
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
  }), 2);
  const tmp5 = callback(React.useState(stateFromStores), 2);
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
      }
      if (tmp10) {
        tmp4("declined");
      }
    }
  }
  let tmp16 = "connected" === tmp3;
  obj = { isConnected: tmp16, isDeclined: tmp17, isResolved: null };
  if (!tmp16) {
    tmp16 = tmp17;
  }
  obj[2] = tmp16;
  return obj;
};