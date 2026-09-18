// discord_app/modules/safety_flows/usePendingParentRequests.tsx
import useUserLinks from "../parent_tools/hooks/useUserLinks.tsx";
import useFamilyCenterActions from "../parent_tools/hooks/useFamilyCenterActions.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../parent_tools/FamilyCenterStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const UserLinkStatus = fn(7734).UserLinkStatus;
const size = fn(2);
let result = size.fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = function useDerivedPendingRequests(arr, stateFromStores1) {
  _require = arr;
  dependencyMap = stateFromStores1;
  let items = [FamilyCenterStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  let obj = require("initialize");
  const items1 = [UserStore];
  stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
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
      const map = new Map(
        closure_0.map((parent_id) => {
          const items = [parent_id.parent_id, parent_id];
          return items;
        }),
      );
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
              arr = items.push(obj);
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
};
export const usePendingRequestListController = function usePendingRequestListController(pendingRequests) {
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
    },
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
    },
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
  const tmp2Result = _slicedToArray(
    noop.useState(() => new Set()),
    2,
  );
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
    const obj5 = {
      seenRequests: tmp12,
      hasMaxConnections,
      actioningUserId: tmp4,
      isAcceptLoading,
      isDeclineLoading,
      actionsDisabled: tmp6,
      handleAccept: callback1,
      handleDecline: callback2,
    };
    return obj5;
  }
  if (pendingRequests !== tmp15) {
    tmp16(pendingRequests);
    tmp13((arr) => {
      const map = new Map(
        arr.map((parent_id) => {
          const items = [parent_id.parent_id, parent_id];
          return items;
        }),
      );
      for (const item10015 of pendingRequests) {
        let result = map.set(item10015.parent_id, item10015);
        continue;
      }
      return Array.from(map.values());
    });
  }
  tmp2Result6 = _slicedToArray(noop.useState(linkedUsersProcessed), 2);
};
export const usePendingRequestResolution = function usePendingRequestResolution(parent_id) {
  _require = parent_id;
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
};
