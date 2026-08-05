// discord_app/modules/safety_flows/usePendingParentRequests.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserLinkStatus } from "items";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
let result = require("freshTeenActivityWithMap").fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = function useDerivedPendingRequests(arr, stateFromStores1) {
  const _require = arr;
  const dependencyMap = stateFromStores1;
  let items = [freshTeenActivityWithMap];
  const stateFromStores = _initialize.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  let obj = _initialize;
  const items1 = [mergeGuildAvatar];
  stateFromStores1 = _initialize.useStateFromStores(items1, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  const items2 = [stateFromStores1, stateFromStores, stateFromStores1, arr];
  return stateFromStores1.useMemo(() => {
    let arr;
    if (closure_1) {
      const _Map = Map;
      const map = new Map(arr.map((parent_id) => {
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
          let tmp25 = nextResult;
          let tmp26 = outer1_6;
          if (tmp14.link_status === outer1_6.PENDING) {
            let tmp27 = nextResult;
            let tmp28 = stateFromStores1;
            if (tmp14.requestor_id !== stateFromStores1) {
              let tmp29 = outer1_5;
              let tmp30 = nextResult;
              let user = outer1_5.getUser(tmp14.user_id);
              let tmp32 = user;
              let value = map.get(tmp14.user_id);
              let obj = { parent_id: null, parent_username: null, parent_avatar: null, created_at: null };
              obj[0] = tmp14.user_id;
              let username;
              if (user != null) {
                username = user.username;
              }
              if (username == null) {
                let tmp16 = value;
                let parent_username;
                if (value != null) {
                  parent_username = value.parent_username;
                }
                username = parent_username;
              }
              if (username == null) {
                let tmp18 = nextResult;
                username = tmp14.user_id;
              }
              obj[1] = username;
              let tmp19 = user;
              let avatar;
              if (tmp32 != null) {
                avatar = tmp32.avatar;
              }
              if (avatar == null) {
                let tmp21 = value;
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
              let tmp23 = nextResult;
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
  let c2;
  let c6;
  let c7;
  let dependencyMap;
  let isAcceptLoading;
  let isDeclineLoading;
  let linkedUsersProcessed;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp4;
  pendingRequests = pendingRequests.pendingRequests;
  ({ linkedUsersProcessed, onActionError: dependencyMap } = pendingRequests);
  let callback;
  let acceptLinkRequest;
  let declineLinkRequest;
  let c5;
  c6 = undefined;
  c7 = undefined;
  callback = undefined;
  let obj = pendingRequests(7231);
  const hasMaxConnections = obj.useHasMaxConnections();
  [tmp4, c2] = callback(acceptLinkRequest.useState(null), 2);
  let tmp3 = callback(acceptLinkRequest.useState(null), 2);
  obj = {
    onSuccess() {
      return _undefined(null);
    },
    onError() {
      _undefined(null);
      callback();
    }
  };
  const familyCenterActions = pendingRequests(11208).useFamilyCenterActions(obj);
  acceptLinkRequest = familyCenterActions.acceptLinkRequest;
  declineLinkRequest = familyCenterActions.declineLinkRequest;
  ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
  let tmp6 = isAcceptLoading;
  if (!isAcceptLoading) {
    tmp6 = isDeclineLoading;
  }
  c5 = tmp6;
  let tmp2Result = tmp2(obj2.useState(() => new Set()), 2);
  [c6, c7] = tmp2Result;
  callback = obj2.useCallback((arg0) => {
    let closure_0 = arg0;
    _undefined3((has) => {
      if (has.has(closure_0)) {
        return has;
      } else {
        const _Set = Set;
        const set = new Set(has);
        set.add(tmp);
        return set;
      }
      tmp = closure_0;
    });
  }, []);
  let items = [tmp6, callback, acceptLinkRequest];
  const items1 = [tmp6, callback, declineLinkRequest];
  const callback1 = obj2.useCallback((arg0) => {
    if (!c5) {
      callback(arg0);
      _undefined(arg0);
      acceptLinkRequest(arg0);
    }
  }, items);
  const callback2 = obj2.useCallback((arg0) => {
    if (!c5) {
      callback(arg0);
      _undefined(arg0);
      declineLinkRequest(arg0);
    }
  }, items1);
  tmp2Result = tmp2(obj2.useState(pendingRequests), 2);
  [tmp12, tmp13] = tmp2Result;
  const obj3 = pendingRequests(11208);
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
          let tmp3 = _undefined2;
          if (_undefined2.has(nextResult.parent_id)) {
            let tmp4 = nextResult;
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
};
export const usePendingRequestResolution = function usePendingRequestResolution(parent_id) {
  let tmp3;
  let tmp4;
  const _require = parent_id;
  let obj = _require(stateFromStores[5]);
  const items = [freshTeenActivityWithMap];
  stateFromStores = obj.useStateFromStores(items, () => {
    const tmp = outer1_4.getLinkedUsers()[closure_0];
    let link_status;
    if (tmp != null) {
      link_status = tmp.link_status;
    }
    return link_status;
  });
  [tmp3, tmp4] = callback(React.useState(() => {
    let str = "connected";
    if (stateFromStores !== outer1_6.ACTIVE) {
      if (null == tmp) {
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
    } else if (stateFromStores === tmp8.PENDING) {
      tmp4(null);
    } else {
      let tmp10 = null != stateFromStores;
      if (!tmp10) {
        tmp10 = null != first && first !== tmp8.ACTIVE;
        const tmp11 = null != first && first !== tmp8.ACTIVE;
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