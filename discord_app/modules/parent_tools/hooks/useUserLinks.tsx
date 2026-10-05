// === Module 8295: useUserLinks ===

// Module 8295 (useUserLinks)
import useStateFromStores from "useStateFromStores" /* 573 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import FamilyCenterStore from "FamilyCenterStore" /* 7048 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7049 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
({ ACCEPTED_LINK_REQUEST_TIMESTAMP_FORMATTER: metroRequire, FAMILY_CENTER_REQUEST_QR_CODE_URL: metroImportDefault, MAX_PARENT_TO_TEEN_ACTIVE_CONNECTIONS: metroImportAll, MAX_TEEN_TO_PARENT_ACTIVE_CONNECTIONS: c9, PENDING_LINK_REQUEST_TIMESTAMP_FORMATTER: c10, UserLinkStatus: unpackModuleId, UserLinkType: closure_12 } = FamilyCenterConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let linkedUsers;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp9;
  _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(8);
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
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === arg0) {
    let tmp8;
    if (cResult[3] === stateFromStores) {
      tmp8 = cResult[4];
    }
    return tmp8;
  }
  const values = Object.values(stateFromStores);
  const found = values.filter((link_status) => null != link_status && link_status.link_status === closure_0);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(updated_at, updated_at2) {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    };
    cResult[5] = fn2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function _(user_id) {
      return user_id.user_id;
    };
    cResult[6] = fn3;
    tmp10 = fn3;
  } else {
    tmp10 = cResult[6];
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
  const sorted = found.sort(tmp9);
  const mapped = sorted.map(tmp10);
  const found1 = mapped.filter(S);
  cResult[2] = arg0;
  cResult[3] = stateFromStores;
  cResult[4] = found1;
  tmp8 = found1;
}) : ((arg0) => {
  let closure_0;
  let linkedUsers;
  _require = arg0;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores, arg0];
  return react.useMemo(() => {
    const values = Object.values(stateFromStores);
    const found = values.filter((link_status) => null != link_status && link_status.link_status === closure_1_0);
    const sorted = found.sort((updated_at, updated_at2) => {
      const date = new Date(updated_at.updated_at);
      const time = date.getTime();
      const date1 = new Date(updated_at2.updated_at);
      return time - date1.getTime();
    });
    const mapped = sorted.map((user_id) => user_id.user_id);
    return mapped.filter((item) => null != item);
  }, items1);
});
let closure_13 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  const obj = require("react");
  const cResult = obj.c(6);
  const tmp4 = closure_13(arg0);
  const tmp = _require;
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function a() {
      let user;
      return closure_0.map((item) => user.getUser(item));
    };
    cResult[1] = tmp4;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7);
  if (cResult[3] !== stateFromStoresArray) {
    let tmp9;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function c(arg0) {
        return null != arg0;
      };
      cResult[5] = fn2;
      tmp9 = fn2;
    } else {
      tmp9 = cResult[5];
    }
    const found = stateFromStoresArray.filter(tmp9);
    cResult[3] = stateFromStoresArray;
    cResult[4] = found;
    tmp8 = found;
  } else {
    tmp8 = cResult[4];
  }
  return tmp8;
}) : ((arg0) => {
  let closure_0;
  _require = closure_13(arg0);
  const items = [UserStore];
  const obj = require("useStateFromStores");
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    let user;
    return closure_0.map((item) => user.getUser(item));
  });
  return stateFromStoresArray.filter((item) => null != item);
});
let closure_14 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const useActiveLinkUserIds = () => closure_13(unpackModuleId.ACTIVE);
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let constants2;
  let linkedUsers;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
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
  const tmpResult = useStateFromStores;
  const values = Object.values(tmpResult.useStateFromStores(tmp4, tmp5));
  return values.some((link_status) => null != link_status && link_status.link_status === constants.ACTIVE && link_status.link_type === constants2.PARENT);
}) : (() => {
  let linkedUsers;
  let stateFromStores;
  const items = [FamilyCenterStore];
  const obj = stateFromStores(573);
  stateFromStores = obj.useStateFromStores(items, () => linkedUsers.getLinkedUsers());
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    let constants2;
    const values = Object.values(stateFromStores);
    return values.some((link_status) => null != link_status && link_status.link_status === constants.ACTIVE && link_status.link_type === constants2.PARENT);
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let linkCode;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(7);
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
  const tmpResult = useStateFromStores;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    const fn2 = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = useStateFromStores;
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  let tmp12 = null;
  if (null != stateFromStores) {
    tmp12 = null;
    if (null != stateFromStores1) {
      if (cResult[4] === stateFromStores1.id) {
        let tmp13;
        if (cResult[5] === stateFromStores) {
          tmp13 = cResult[6];
        }
        tmp12 = tmp13;
      }
      const tmp15 = metroImportDefault(stateFromStores1.id, stateFromStores);
      cResult[4] = stateFromStores1.id;
      cResult[5] = stateFromStores;
      cResult[6] = tmp15;
      tmp13 = tmp15;
    }
  }
  return tmp12;
}) : (() => {
  let currentUser;
  let linkCode;
  const items = [FamilyCenterStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => linkCode.getLinkCode());
  const items1 = [UserStore];
  const obj2 = useStateFromStores;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = null;
    if (null != stateFromStores1) {
      tmp3 = metroImportDefault(stateFromStores1.id, stateFromStores);
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  if (typeof fn === "function") {
    return closure_13(unpackModuleId.ACTIVE).length >= (tmp ? metroImportAll : React4);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}) : (() => {
  if (typeof fn === "function") {
    return closure_13(unpackModuleId.ACTIVE).length >= (tmp ? metroImportAll : React4);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let currentUser;
  let linkedUsers;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = stateFromStores;
  const obj = stateFromStores(576);
  const cResult = obj.c(9);
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
  const tmpResult = tmp(573);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [FamilyCenterStore];
    const fn2 = function o() {
      return linkedUsers.getLinkedUsers();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    tmp9 = fn2;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(573);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  let num5 = 0;
  if (null != stateFromStores) {
    let arr3;
    if (cResult[4] !== stateFromStores1) {
      const _Object = Object;
      const values = Object.values(stateFromStores1);
      cResult[4] = stateFromStores1;
      cResult[5] = values;
      arr3 = values;
    } else {
      arr3 = cResult[5];
    }
    if (cResult[6] === stateFromStores) {
      let arr4;
      if (cResult[7] === arr3) {
        arr4 = cResult[8];
      }
      num5 = arr4.length;
    }
    const found = arr3.filter((link_status) => null != link_status && link_status.link_status === unpackModuleId.PENDING && stateFromStores.id !== link_status.requestor_id);
    cResult[6] = stateFromStores;
    cResult[7] = arr3;
    cResult[8] = found;
    arr4 = found;
  }
  return num5;
}) : (() => {
  let currentUser;
  let linkedUsers;
  let stateFromStores;
  const items = [UserStore];
  const obj = stateFromStores(573);
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  stateFromStores(573);
  [][0] = FamilyCenterStore;
  let num = 0;
  if (null != stateFromStores) {
    const _Object = Object;
    const values = Object.values(tmp3);
    num = values.filter((link_status) => null != link_status && link_status.link_status === unpackModuleId.PENDING && stateFromStores.id !== link_status.requestor_id).length;
  }
  return num;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let linkedUsers;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
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
  const tmpResult = useStateFromStores;
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
}) : ((arg0) => {
  let linkedUsers;
  const items = [FamilyCenterStore];
  let tmp = null != arg0;
  const obj = useStateFromStores;
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
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp14 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(8);
  const obj2 = require("useSelectedTeen");
  const selectedTeenId = obj2.useSelectedTeenId();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    first = items;
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
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp10;
    if (cResult[3] === arg0) {
      let tmp9;
      if (cResult[4] === stateFromStores) {
        tmp9 = cResult[5];
      }
      return tmp9;
    }
    if (cResult[6] !== arg0) {
      const fn2 = function c() {
        return closure_0;
      };
      cResult[6] = arg0;
      cResult[7] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[7];
    }
    const _Date = Date;
    const self = this;
    const self2 = this;
    const formatUserActivityTimestamp = require("FamilyCenterUtils").formatUserActivityTimestamp;
    require("FamilyCenterUtils");
    const date = new Date(stateFromStores);
    const result = formatUserActivityTimestamp(date.getTime(), tmp10, 7);
    cResult[3] = arg0;
    cResult[4] = stateFromStores;
    cResult[5] = result;
    tmp9 = result;
  }
}) : (function(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("useSelectedTeen");
  let closure_1 = obj.useSelectedTeenId();
  const items = [FamilyCenterStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let rangeStartTimestamp = null;
    if (null != closure_1) {
      rangeStartTimestamp = FamilyCenterStore.getRangeStartTimestamp();
    }
    return rangeStartTimestamp;
  });
  let result = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    const formatUserActivityTimestamp = tmp(8298).formatUserActivityTimestamp;
    require("FamilyCenterUtils");
    const date = new Date(stateFromStores);
    result = formatUserActivityTimestamp(date.getTime(), () => closure_0, 7);
  }
  return result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  let tmp6;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FamilyCenterStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return FamilyCenterStore.getLinkTimestamp(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === arg1) {
    let tmp8;
    if (cResult[4] === stateFromStores) {
      tmp8 = cResult[5];
    }
    return tmp8;
  }
  let formatLinkTimestampResult = null;
  if (null != stateFromStores) {
    const _Date = Date;
    const tmpResult2 = require("FamilyCenterUtils");
    formatLinkTimestampResult = tmpResult2.formatLinkTimestamp(Date.parse(stateFromStores), arg1 === constants.PENDING ? closure_10 : closure_6);
  }
  cResult[3] = arg1;
  cResult[4] = stateFromStores;
  cResult[5] = formatLinkTimestampResult;
  tmp8 = formatLinkTimestampResult;
}) : ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  const items = [FamilyCenterStore];
  const obj = require("useStateFromStores");
  const stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getLinkTimestamp(closure_0));
  let formatLinkTimestampResult = null;
  const tmp = _require;
  if (null != stateFromStores) {
    const _Date = Date;
    const tmpResult = tmp(8298);
    formatLinkTimestampResult = tmpResult.formatLinkTimestamp(Date.parse(stateFromStores), arg1 === constants.PENDING ? closure_10 : closure_6);
  }
  return formatLinkTimestampResult;
});
let fn2 = () => closure_14(unpackModuleId.ACTIVE);
let fn3 = () => {
  if (typeof fn === "function") {
    return closure_13(unpackModuleId.ACTIVE).length > 0;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const fn4 = () => {
  if (typeof fn === "function") {
    return closure_13(unpackModuleId.ACTIVE).length;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result4 = size.fileFinishedImporting("modules/parent_tools/hooks/useUserLinks.tsx");

export const useUserIdsForLinkStatus = tmp3;
export const useUsersForLinkStatus = tmp4;
export { useActiveLinkUserIds };
export const getActiveLinkUserIds = function getActiveLinkUserIds() {
  const values = Object.values(FamilyCenterStore.getLinkedUsers());
  const found = values.filter((link_status) => null != link_status && link_status.link_status === constants.ACTIVE);
  const sorted = found.sort((updated_at, updated_at2) => {
    const date = new Date(updated_at.updated_at);
    const time = date.getTime();
    const date1 = new Date(updated_at2.updated_at);
    return time - date1.getTime();
  });
  const mapped = sorted.map((user_id) => user_id.user_id);
  return mapped.filter((item) => null != item);
};
export const useActiveLinkUsers = fn2;
export const useHasActiveLinks = fn3;
export const useHasActiveParentLinks = tmp8;
export const useUserQRLinkUrl = tmp9;
export const useHasMaxConnections = tmp10;
export const usePendingRequestCount = tmp11;
export const useRequiresParentalConsent = tmp12;
export const useAcceptedRequestsCount = fn4;
export const useActivityWindowTimeStamp = tmp14;
export const useLinkTimestampText = tmp15;