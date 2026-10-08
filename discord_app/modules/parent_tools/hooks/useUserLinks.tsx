// === Module 7711: useUserLinks ===

// Module 7711 (useUserLinks)
import useStateFromStores from "useStateFromStores" /* 573 */;
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7247 */;

const require = globalThis.__r;

require = fn;
const FamilyCenterConstants = fn(7248);
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: metroRequire, FAMILY_CENTER_REQUEST_QR_CODE_URL: closure_7, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: closure_8, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: closure_9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: c10, UserLinkStatus: closure_11, UserLinkType: closure_12 } = FamilyCenterConstants);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserIdsForLinkStatus(arg0) {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function a() {
      return linkedUsers.getLinkedUsers();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arg0) {
    if (cResult[3] === stateFromStores) {
      return cResult[4];
    }
  }
  const values = Object.values(stateFromStores);
  const found = values.filter((link_status) => {
    let tmp = null != link_status;
    if (tmp) {
      tmp = link_status.link_status === closure_0;
    }
    return tmp;
  });
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(updated_at, updated_at2) {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    };
    cResult[5] = fn2;
    let mapped = fn2;
  } else {
    mapped = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function _(user_id) {
      return user_id.user_id;
    };
    cResult[6] = fn3;
    let tmp8 = fn3;
  } else {
    tmp8 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0) {
        return null != arg0;
      }
    }
    cResult[7] = S;
  } else {
    class S {
      constructor(arg0) {
        return null != arg0;
      }
    }
  }
  const sorted = found.sort(mapped);
  mapped = sorted.map(tmp8);
  const found1 = mapped.filter(S);
  cResult[2] = arg0;
  cResult[3] = stateFromStores;
  cResult[4] = found1;
  const tmpResult = require("useStateFromStores");
}) : (function useUserIdsForLinkStatus(arg0) {
  _require = arg0;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, arg0];
  return noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === closure_1_0;
      }
      return tmp;
    });
    const sorted = found.sort((updated_at, updated_at2) => {
      const time = new Date(updated_at.updated_at).getTime();
      const date = new Date(updated_at.updated_at);
      return time - new Date(updated_at2.updated_at).getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
});
let closure_13 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUsersForLinkStatus(arg0) {
  const cResult = require("c").c(6);
  const tmp4 = closure_13(arg0);
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function a() {
      return closure_0.map((item) => user.getUser(item));
    };
    cResult[1] = tmp4;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(first, tmp7);
  if (cResult[3] !== stateFromStoresArray) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function c(arg0) {
        return null != arg0;
      };
      cResult[5] = fn2;
      let tmp8 = fn2;
    } else {
      tmp8 = cResult[5];
    }
    const found = stateFromStoresArray.filter(tmp8);
    cResult[3] = stateFromStoresArray;
    cResult[4] = found;
  } else {
    return cResult[4];
  }
  const tmpResult = require("useStateFromStores");
}) : (function useUsersForLinkStatus(arg0) {
  _require = closure_13(arg0);
  const items = [UserStore];
  const stateFromStoresArray = require("useStateFromStores").useStateFromStoresArray(items, () => closure_0.map((item) => user.getUser(item)));
  return stateFromStoresArray.filter((item) => null != item);
});
let closure_14 = tmp4;
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function useActiveLinkUserIds() {
  return closure_13(constants.ACTIVE);
}
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
fn(558);
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasActiveParentLinks() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function n() {
      return linkedUsers.getLinkedUsers();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const values = Object.values(useStateFromStores.useStateFromStores(tmp4, tmp5));
  return values.some((link_status) => {
    let tmp = null != link_status;
    if (tmp) {
      tmp = link_status.link_status === constants.ACTIVE;
    }
    if (tmp) {
      tmp = link_status.link_type === constants2.PARENT;
    }
    return tmp;
  });
}) : (function useHasActiveParentLinks() {
  const items = [FamilyCenterStore];
  stateFromStores = stateFromStores(573).useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores];
  return noop.useMemo(() => {
    const values = Object.values(stateFromStores);
    return values.some((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === constants.ACTIVE;
      }
      if (tmp) {
        tmp = link_status.link_type === constants2.PARENT;
      }
      return tmp;
    });
  }, items1);
});
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserQRLinkUrl() {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function a() {
      return linkCode.getLinkCode();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = useStateFromStores;
  let id = useStateFromStores.useStateFromStores(tmp8, tmp9);
  let tmp11 = null;
  if (null != stateFromStores) {
    tmp11 = null;
    if (null != id) {
      if (cResult[4] === id.id) {
      }
      const tmp14 = React5(id.id, stateFromStores);
      id = id.id;
      cResult[4] = id;
      cResult[5] = stateFromStores;
      cResult[6] = tmp14;
    }
  }
  return tmp11;
}) : (function useUserQRLinkUrl() {
  const items = [FamilyCenterStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => linkCode.getLinkCode());
  const items1 = [UserStore];
  const stateFromStores1 = useStateFromStores.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      tmp3 = React5(stateFromStores1.id, stateFromStores);
    }
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
const tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (function useHasMaxConnections() {
  if (typeof useActiveLinkUserIds === "function") {
    return closure_13(constants.ACTIVE).length >= (tmp ? closure_1_8 : options);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (function useHasMaxConnections() {
  if (typeof useActiveLinkUserIds === "function") {
    return closure_13(constants.ACTIVE).length >= (tmp ? closure_1_8 : options);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = fn(558);
let tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePendingRequestCount() {
  const cResult = stateFromStores(576).c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function a() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(576);
  stateFromStores = stateFromStores(573).useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FamilyCenterStore];
    const fn2 = function o() {
      return linkedUsers.getLinkedUsers();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp9 = fn2;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = stateFromStores(573);
  const stateFromStores1 = stateFromStores(573).useStateFromStores(tmp8, tmp9);
  if (null == stateFromStores) {
    return 0;
  } else {
    if (cResult[4] !== stateFromStores1) {
      const _Object = Object;
      const values = Object.values(stateFromStores1);
      cResult[4] = stateFromStores1;
      cResult[5] = values;
      let arr3 = values;
    } else {
      arr3 = cResult[5];
    }
    if (cResult[6] === stateFromStores) {
    }
    const found = arr3.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === constants.PENDING;
      }
      if (tmp) {
        tmp = stateFromStores.id !== link_status.requestor_id;
      }
      return tmp;
    });
    cResult[6] = stateFromStores;
    cResult[7] = arr3;
    cResult[8] = found;
  }
  const tmpResult2 = stateFromStores(573);
}) : (function usePendingRequestCount() {
  const items = [UserStore];
  stateFromStores = stateFromStores(573).useStateFromStores(items, () => currentUser.getCurrentUser());
  stateFromStores(573);
  [][0] = FamilyCenterStore;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => {
      let tmp = null != link_status;
      if (tmp) {
        tmp = link_status.link_status === constants.PENDING;
      }
      if (tmp) {
        tmp = stateFromStores.id !== link_status.requestor_id;
      }
      return tmp;
    }).length;
  }
  return num;
});
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequiresParentalConsent(arg0) {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    const fn = function a() {
      return linkedUsers.getLinkedUsers();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmp7 = null != arg0;
  if (tmp7) {
    const tmp8 = tmpResult.useStateFromStores(tmp4, tmp5)[arg0];
    let flag;
    if (tmp8 != null) {
      flag = tmp8.teen_requires_parental_consent;
    }
    if (flag == null) {
      flag = false;
    }
    tmp7 = flag;
  }
  return tmp7;
}) : (function useRequiresParentalConsent(arg0) {
  const items = [FamilyCenterStore];
  let tmp = null != arg0;
  if (tmp) {
    const tmp2 = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers())[arg0];
    let flag;
    if (tmp2 != null) {
      flag = tmp2.teen_requires_parental_consent;
    }
    if (flag == null) {
      flag = false;
    }
    tmp = flag;
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActivityWindowTimeStamp(arg0) {
  _require = arg0;
  let tmp = _require;
  let formatUserActivityTimestamp = dependencyMap;
  const cResult = require("c").c(8);
  const obj = require("c");
  const selectedTeenId = require("useSelectedTeen").useSelectedTeenId();
  let result = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== selectedTeenId) {
    const fn = function a() {
      let rangeStartTimestamp = null;
      if (null != selectedTeenId) {
        rangeStartTimestamp = FamilyCenterStore.getRangeStartTimestamp();
      }
      return rangeStartTimestamp;
    };
    cResult[1] = selectedTeenId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj2 = require("useSelectedTeen");
  const stateFromStores = tmp(573).useStateFromStores(first, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === arg0) {
      if (cResult[4] === stateFromStores) {
        return cResult[5];
      }
    }
    if (cResult[6] !== arg0) {
      const fn2 = function c() {
        return closure_0;
      };
      cResult[6] = arg0;
      cResult[7] = fn2;
      let tmp9 = fn2;
    } else {
      tmp9 = cResult[7];
    }
    tmp = tmp(7714);
    formatUserActivityTimestamp = tmp.formatUserActivityTimestamp;
    const date = new result.Date(stateFromStores);
    result = formatUserActivityTimestamp(date.getTime(), tmp9, 7);
    cResult[3] = arg0;
    cResult[4] = stateFromStores;
    cResult[5] = result;
  }
  const tmpResult = tmp(573);
}) : (function useActivityWindowTimeStamp(arg0) {
  _require = arg0;
  closure_1 = require("useSelectedTeen").useSelectedTeenId();
  const obj = require("useSelectedTeen");
  const tmp = _require;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = FamilyCenterStore.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const date = new Date(stateFromStores);
    result = tmp(7714).formatUserActivityTimestamp(date.getTime(), () => closure_0, 7);
    const tmpResult = tmp(7714);
  }
  return result;
});
function useActiveLinkUsers() {
  return closure_14(constants.ACTIVE);
}
function useHasActiveLinks() {
  if (typeof useActiveLinkUserIds === "function") {
    return closure_13(constants.ACTIVE).length > 0;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function useAcceptedRequestsCount() {
  if (typeof useActiveLinkUserIds === "function") {
    return closure_13(constants.ACTIVE).length;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const size = fn(2);
const result4 = size.fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export const useUserIdsForLinkStatus = tmp3;
export const useUsersForLinkStatus = tmp4;
export { useActiveLinkUserIds };
export const getActiveLinkUserIds = function getActiveLinkUserIds() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
  const found = values.filter((link_status) => {
    let tmp = null != link_status;
    if (tmp) {
      tmp = link_status.link_status === constants.ACTIVE;
    }
    return tmp;
  });
  const sorted = found.sort((updated_at, updated_at2) => {
    const time = new Date(updated_at.updated_at).getTime();
    const date = new Date(updated_at.updated_at);
    return time - new Date(updated_at2.updated_at).getTime();
  });
  const mapped = sorted.map((user_id) => user_id.user_id);
  return mapped.filter((item) => null != item);
};
export { useActiveLinkUsers };
export { useHasActiveLinks };
export const useHasActiveParentLinks = tmp8;
export const useUserQRLinkUrl = tmp9;
export const useHasMaxConnections = tmp10;
export const usePendingRequestCount = tmp11;
export const useRequiresParentalConsent = tmp12;
export { useAcceptedRequestsCount };
export const useActivityWindowTimeStamp = tmp14;
export const useLinkTimestampText = ReactCompilerGating.isReactCompilerEnabled() ? (function useLinkTimestampText(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return FamilyCenterStore.getLinkTimestamp(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
  if (cResult[3] === arg1) {
    if (cResult[4] === stateFromStores) {
      let tmp8 = cResult[5];
    }
    return tmp8;
  }
  if (null == stateFromStores) {
    cResult[3] = arg1;
    cResult[4] = stateFromStores;
    cResult[5] = null;
    tmp8 = null;
  } else {
    const _Date = Date;
    tmp(7714).formatLinkTimestamp(Date.parse(stateFromStores), arg1 === constants.PENDING ? closure_10 : closure_6);
    const tmpResult2 = tmp(7714);
  }
  const tmpResult = require("useStateFromStores");
}) : (function useLinkTimestampText(arg0, arg1) {
  _require = arg0;
  const items = [FamilyCenterStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => FamilyCenterStore.getLinkTimestamp(closure_0));
  if (null == stateFromStores) {
    return null;
  } else {
    const _Date = Date;
    tmp(7714).formatLinkTimestamp(Date.parse(stateFromStores), arg1 === constants.PENDING ? closure_10 : closure_6);
    const tmpResult = tmp(7714);
  }
  const obj = require("useStateFromStores");
  tmp = _require;
});