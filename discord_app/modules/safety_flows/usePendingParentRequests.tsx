// discord_app/modules/safety_flows/usePendingParentRequests.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import FamilyCenterConstants from "../parent_tools/FamilyCenterConstants.tsx";
import useUserLinks from "../parent_tools/hooks/useUserLinks.tsx";
import useFamilyCenterActions from "../parent_tools/hooks/useFamilyCenterActions.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import FamilyCenterStore from "../parent_tools/FamilyCenterStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, currentUser, dependencyMap, map, pendingRequests, set;

const UserLinkStatus = FamilyCenterConstants.UserLinkStatus;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arr, arg1) {
      let linkedUsers;
      let tmp27;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      let user_id;
      const obj = react2;
      const cResult = obj.c(11);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
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
        tmp9 = fn2;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult2 = get_initialized;
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
      const tmp12 = arr;
      if (arg1) {
        if (cResult[4] !== arr) {
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            class A {
              constructor(parent_id) {
                const items = [parent_id.parent_id, parent_id];
                return items;
              }
            }
            cResult[6] = A;
          } else {
            class A {
              constructor(parent_id) {
                const items = [parent_id.parent_id, parent_id];
                return items;
              }
            }
          }
          const _Map = Map;
          const self = this;
          const self2 = this;
          cResult[4] = arr;
          cResult[5] = new Map(arr.map(A));
          map = new Map(arr.map(A));
        } else {
          class A {
            constructor(parent_id) {
              const items = [parent_id.parent_id, parent_id];
              return items;
            }
          }
        }
        if (cResult[7] === stateFromStores1) {
          class A {
            constructor(parent_id) {
              const items = [parent_id.parent_id, parent_id];
              return items;
            }
          }
        }
        const items2 = [];
        const _Object = Object;
        const values = Object.values(stateFromStores);
        const iter = values[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          class A {
            constructor(parent_id) {
              const items = [parent_id.parent_id, parent_id];
              return items;
            }
          }
          if (null != nextResult) {
            class A {
              constructor(parent_id) {
                const items = [parent_id.parent_id, parent_id];
                return items;
              }
            }
            if (tmp23.link_status === UserLinkStatus.PENDING) {
              class A {
                constructor(parent_id) {
                  const items = [parent_id.parent_id, parent_id];
                  return items;
                }
              }
              if (tmp23.requestor_id !== stateFromStores1) {
                class A {
                  constructor(parent_id) {
                    const items = [parent_id.parent_id, parent_id];
                    return items;
                  }
                }
                let user = UserStore.getUser(tmp23.user_id);
                let tmp34 = user;
                let value = obj4.get(tmp23.user_id);
                let obj2 = {
                  parent_id: tmp23.user_id,
                  parent_username: user_id,
                  parent_avatar: tmp27,
                  created_at: tmp23.created_at,
                };
                user_id = undefined;
                let push = items2.push;
                if (user != null) {
                  class A {
                    constructor(parent_id) {
                      const items = [parent_id.parent_id, parent_id];
                      return items;
                    }
                  }
                }
                if (user_id == null) {
                  class A {
                    constructor(parent_id) {
                      const items = [parent_id.parent_id, parent_id];
                      return items;
                    }
                  }
                  let tmp25;
                  if (value != null) {
                    class A {
                      constructor(parent_id) {
                        const items = [parent_id.parent_id, parent_id];
                        return items;
                      }
                    }
                  }
                  user_id = tmp25;
                }
                if (user_id == null) {
                  class A {
                    constructor(parent_id) {
                      const items = [parent_id.parent_id, parent_id];
                      return items;
                    }
                  }
                  user_id = tmp23.user_id;
                }
                tmp27 = undefined;
                if (tmp34 != null) {
                  class A {
                    constructor(parent_id) {
                      const items = [parent_id.parent_id, parent_id];
                      return items;
                    }
                  }
                }
                if (tmp27 == null) {
                  class A {
                    constructor(parent_id) {
                      const items = [parent_id.parent_id, parent_id];
                      return items;
                    }
                  }
                  let tmp28;
                  if (value != null) {
                    class A {
                      constructor(parent_id) {
                        const items = [parent_id.parent_id, parent_id];
                        return items;
                      }
                    }
                  }
                  tmp27 = tmp28;
                }
                if (tmp27 == null) {
                  class A {
                    constructor(parent_id) {
                      const items = [parent_id.parent_id, parent_id];
                      return items;
                    }
                  }
                }
                arr = push(obj2);
              }
            }
          }
          continue;
        }
        cResult[7] = stateFromStores1;
        cResult[8] = stateFromStores;
        cResult[9] = obj4;
        cResult[10] = items2;
      }
      return tmp12;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let linkedUsers;
      _require = arg0;
      dependencyMap = arg1;
      let obj = require("get initialized");
      let items = [FamilyCenterStore];
      const stateFromStores = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
      const items1 = [UserStore];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        currentUser = currentUser.getCurrentUser();
        let id;
        if (currentUser != null) {
          id = currentUser.id;
        }
        return id;
      });
      const items2 = [arg1, stateFromStores, stateFromStores1, arg0];
      return stateFromStores1.useMemo(function () {
        let avatar;
        let username;
        if (closure_1) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          let items = [];
          const _Object = Object;
          map = new Map(
            closure_0.map((parent_id) => {
              const items = [parent_id.parent_id, parent_id];
              return items;
            }),
          );
          const values = Object.values(stateFromStores);
          const iter = values[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp13 = nextResult;
            if (null != nextResult) {
              if (tmp13.link_status === UserLinkStatus.PENDING) {
                if (tmp13.requestor_id !== stateFromStores1) {
                  let user = UserStore.getUser(tmp13.user_id);
                  let tmp31 = user;
                  let value = map.get(tmp13.user_id);
                  let obj = {
                    parent_id: tmp13.user_id,
                    parent_username: username,
                    parent_avatar: avatar,
                    created_at: tmp13.created_at,
                  };
                  username = undefined;
                  let push = items.push;
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
                    username = tmp13.user_id;
                  }
                  avatar = undefined;
                  if (tmp31 != null) {
                    avatar = tmp31.avatar;
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
                  let arr = push(obj);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (pendingRequests) => {
      let closure_129_2;
      let closure_129_6;
      let closure_129_7;
      let first;
      let isAcceptLoading;
      let isDeclineLoading;
      let linkedUsersProcessed;
      let onActionError;
      let tmp19;
      let tmp20;
      let tmp22;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(20);
      pendingRequests = pendingRequests.pendingRequests;
      ({ linkedUsersProcessed, onActionError } = pendingRequests);
      const obj2 = useUserLinks;
      const hasMaxConnections = obj2.useHasMaxConnections();
      [tmp7, closure_129_2] = _slicedToArray(react.useState(null), 2);
      const tmp6 = _slicedToArray(react.useState(null), 2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
          return closure_1_2(null);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== onActionError) {
        const obj4 = {
          onSuccess: first,
          onError() {
            closure_1_2(null);
            onActionError();
          },
        };
        cResult[1] = onActionError;
        cResult[2] = obj4;
        tmp9 = obj4;
      } else {
        tmp9 = cResult[2];
      }
      const tmpResult = useFamilyCenterActions;
      const familyCenterActions = tmpResult.useFamilyCenterActions(tmp9);
      const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
      const declineLinkRequest = familyCenterActions.declineLinkRequest;
      ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
      let closure_5 = tmp11;
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
      [closure_129_6, closure_129_7] = react.useState(A);
      _slicedToArray(react.useState(A), 2);
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
      let closure_8 = tmp15;
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
          [tmp19, tmp20] = react.useState(pendingRequests);
          _slicedToArray(react.useState(pendingRequests), 2);
          [tmp22, r10090] = react.useState(pendingRequests);
          _slicedToArray(react.useState(pendingRequests), 2);
          _slicedToArray(react.useState(linkedUsersProcessed), 2);
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
            const obj5 = {
              seenRequests: tmp19,
              hasMaxConnections,
              actioningUserId: tmp7,
              isAcceptLoading,
              isDeclineLoading,
              actionsDisabled: isAcceptLoading || isDeclineLoading,
              handleAccept: M,
              handleDecline: tmp17,
            };
            cResult[11] = tmp7;
            cResult[12] = M;
            cResult[13] = tmp17;
            cResult[14] = hasMaxConnections;
            cResult[15] = isAcceptLoading;
            cResult[16] = isDeclineLoading;
            cResult[17] = isAcceptLoading || isDeclineLoading;
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
              map = new Map(
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
        }
        const fn2 = function w(arg0) {
          if (!closure_5) {
            tmp15(arg0);
            closure_1_2(arg0);
            declineLinkRequest(arg0);
          }
        };
        cResult[8] = declineLinkRequest;
        cResult[9] = isAcceptLoading || isDeclineLoading;
        cResult[10] = fn2;
      }
      class M {
        constructor(arg0) {
          if (!closure_5) {
            tmp15(arg0);
            closure_1_2(arg0);
            acceptLinkRequest(arg0);
          }
        }
      }
      cResult[5] = acceptLinkRequest;
      cResult[6] = isAcceptLoading || isDeclineLoading;
      cResult[7] = M;
    }
  : (pendingRequests) => {
      let c2;
      let c6;
      let c7;
      let closure_129_1;
      let isAcceptLoading;
      let isDeclineLoading;
      let linkedUsersProcessed;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp16;
      let tmp4;
      const f133091 = () => {
        set = new Set();
        return set;
      };
      pendingRequests = pendingRequests.pendingRequests;
      ({ linkedUsersProcessed, onActionError: closure_129_1 } = pendingRequests);
      c2 = undefined;
      c6 = undefined;
      c7 = undefined;
      const obj = useUserLinks;
      const hasMaxConnections = obj.useHasMaxConnections();
      [tmp4, c2] = _slicedToArray(react.useState(null), 2);
      const tmp3 = _slicedToArray(react.useState(null), 2);
      const obj3 = useFamilyCenterActions;
      const obj4 = {
        onSuccess() {
          return _undefined(null);
        },
        onError() {
          _undefined(null);
          closure_1_1();
        },
      };
      const familyCenterActions = obj3.useFamilyCenterActions(obj4);
      const acceptLinkRequest = familyCenterActions.acceptLinkRequest;
      const declineLinkRequest = familyCenterActions.declineLinkRequest;
      ({ isAcceptLoading, isDeclineLoading } = familyCenterActions);
      let closure_5 = tmp6;
      [c6, c7] = react.useState(f133091);
      _slicedToArray(react.useState(f133091), 2);
      const callback = react.useCallback((arg0) => {
        let closure_0 = arg0;
        _undefined3(function (has) {
          if (has.has(closure_0)) {
            return has;
          } else {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set(has);
            set.add(closure_0);
            return set;
          }
        });
      }, []);
      let items = [tmp6, callback, acceptLinkRequest];
      const items1 = [tmp6, callback, declineLinkRequest];
      const callback1 = react.useCallback((arg0) => {
        if (!closure_5) {
          callback(arg0);
          _undefined(arg0);
          acceptLinkRequest(arg0);
        }
      }, items);
      const callback2 = react.useCallback((arg0) => {
        if (!closure_5) {
          callback(arg0);
          _undefined(arg0);
          declineLinkRequest(arg0);
        }
      }, items1);
      [tmp12, tmp13] = react.useState(pendingRequests);
      _slicedToArray(react.useState(pendingRequests), 2);
      [tmp15, tmp16] = react.useState(pendingRequests);
      _slicedToArray(react.useState(pendingRequests), 2);
      const tmp2Result6 = _slicedToArray(react.useState(linkedUsersProcessed), 2);
      if (linkedUsersProcessed) {
        if (!tmp2Result6[0]) {
          tmp18(true);
          tmp16(pendingRequests);
          tmp13((arg0) => {
            map = new Map();
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
        return {
          seenRequests: tmp12,
          hasMaxConnections,
          actioningUserId: tmp4,
          isAcceptLoading,
          isDeclineLoading,
          actionsDisabled: isAcceptLoading || isDeclineLoading,
          handleAccept: callback1,
          handleDecline: callback2,
        };
      }
      if (pendingRequests !== tmp15) {
        tmp16(pendingRequests);
        tmp13((arr) => {
          map = new Map(
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
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let stateFromStores;
      let tmp10;
      let tmp11;
      let tmp6;
      let tmp8;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(9);
      const tmp2 = stateFromStores;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        cResult[0] = items;
        first = items;
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
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(tmp2[7]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        const fn2 = function v() {
          let str = "connected";
          if (stateFromStores !== UserLinkStatus.ACTIVE) {
            let str2;
            if (null == stateFromStores) {
              str2 = null;
            } else {
              str2 = "declined";
            }
            str = str2;
          }
          return str;
        };
        cResult[3] = stateFromStores;
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      [tmp10, tmp11] = react.useState(tmp8);
      _slicedToArray(react.useState(tmp8), 2);
      const tmp12 = _slicedToArray(react.useState(stateFromStores), 2);
      const first1 = tmp12[0];
      if (stateFromStores !== first1) {
        tmp12[1](stateFromStores);
        if (stateFromStores === UserLinkStatus.ACTIVE) {
          let str2 = "connected";
          tmp11("connected");
        } else if (stateFromStores === UserLinkStatus.PENDING) {
          tmp11(null);
        } else {
          let tmp17 = null != stateFromStores;
          if (!tmp17) {
            tmp17 = null != first1 && first1 !== UserLinkStatus.ACTIVE;
          }
          if (tmp17) {
            let str = "declined";
            tmp11("declined");
          }
        }
      }
      if ((cResult[5] === "connected") === tmp10) {
        if ((cResult[6] === "declined") === tmp10) {
          let tmp26;
          if (cResult[7] === ("connected" === tmp10 || "declined" === tmp10)) {
            tmp26 = cResult[8];
          }
          return tmp26;
        }
      }
      const obj2 = {
        isConnected: "connected" === tmp10,
        isDeclined: "declined" === tmp10,
        isResolved: "connected" === tmp10 || "declined" === tmp10,
      };
      cResult[5] = "connected" === tmp10;
      cResult[6] = "declined" === tmp10;
      cResult[7] = "connected" === tmp10 || "declined" === tmp10;
      cResult[8] = obj2;
      tmp26 = obj2;
    }
  : (arg0) => {
      let closure_0;
      let stateFromStores;
      let tmp3;
      let tmp4;
      const f133100 = () => {
        let str = "connected";
        if (stateFromStores !== UserLinkStatus.ACTIVE) {
          let str2;
          if (null == stateFromStores) {
            str2 = null;
          } else {
            str2 = "declined";
          }
          str = str2;
        }
        return str;
      };
      _require = arg0;
      const items = [FamilyCenterStore];
      const obj = require("get initialized");
      stateFromStores = obj.useStateFromStores(items, () => {
        const tmp = FamilyCenterStore.getLinkedUsers()[closure_0];
        let link_status;
        if (tmp != null) {
          link_status = tmp.link_status;
        }
        return link_status;
      });
      [tmp3, tmp4] = react.useState(f133100);
      _slicedToArray(react.useState(f133100), 2);
      const tmp5 = _slicedToArray(react.useState(stateFromStores), 2);
      const first = tmp5[0];
      if (stateFromStores !== first) {
        tmp5[1](stateFromStores);
        if (stateFromStores === UserLinkStatus.ACTIVE) {
          let str2 = "connected";
          tmp4("connected");
        } else if (stateFromStores === UserLinkStatus.PENDING) {
          tmp4(null);
        } else {
          let tmp10 = null != stateFromStores;
          if (!tmp10) {
            tmp10 = null != first && first !== UserLinkStatus.ACTIVE;
          }
          if (tmp10) {
            let str = "declined";
            tmp4("declined");
          }
        }
      }
      let tmp16 = "connected" === tmp3;
      const obj2 = { isConnected: tmp16, isDeclined: "declined" === tmp3, isResolved: tmp16 };
      if (!tmp16) {
        tmp16 = tmp17;
      }
      return obj2;
    };
let result = size.fileFinishedImporting("modules/safety_flows/usePendingParentRequests.tsx");

export const useDerivedPendingRequests = tmp2;
export const usePendingRequestListController = tmp3;
export const usePendingRequestResolution = tmp4;
