// === Module 15115: HarvesterUtils ===

// Module 15115 (HarvesterUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import DataHarvestStore from "DataHarvestStore" /* 13982 */;

require = fn;
const REQUEST_DATA_LIMIT_MS = fn(15116).REQUEST_DATA_LIMIT_MS;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/harvester/HarvesterUtils.tsx");

export const harvestDisabled = function harvestDisabled(created_at, stateFromStores) {
  const verified = stateFromStores.verified;
  let tmp = !verified;
  if (verified) {
    let isStaffResult = stateFromStores.isStaff();
    if (!isStaffResult) {
      let tmp5 = null != created_at;
      if (tmp5) {
        const _Date = Date;
        const _Date2 = Date;
        const timestamp = Date.now();
        const date = new Date(created_at.created_at);
        tmp5 = REQUEST_DATA_LIMIT_MS > timestamp - date.getTime();
      }
      isStaffResult = tmp5;
    }
    tmp = isStaffResult;
  }
  return tmp;
};
export const useRequestHarvestStatus = ReactCompilerGating.isReactCompilerEnabled() ? (function useRequestHarvestStatus() {
  const cResult = c.c(17);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
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
    const items1 = [DataHarvestStore];
    const fn2 = function _() {
      return harvestType.harvestType;
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
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        return Date.now();
      }
    }
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return Date.now();
      }
    }
  }
  const tmpResult2 = initialize;
  [tmp14, require] = noop.useState(S);
  if (cResult[5] === stateFromStores1) {
    class S {
      constructor() {
        return Date.now();
      }
    }
    dependencyMap = tmp15;
    _slicedToArray = noop.useRef(null);
    if (cResult[8] !== tmp15) {
      class S {
        constructor() {
          return Date.now();
        }
      }
      const items2 = [tmp15];
      cResult[8] = tmp15;
      cResult[9] = tmp24;
      cResult[10] = items2;
      let tmp23 = items2;
    } else {
      class S {
        constructor() {
          return Date.now();
        }
      }
      tmp23 = cResult[10];
    }
    const effect = noop.useEffect(tmp24, tmp23);
    if (stateFromStores != null) {
      class S {
        constructor() {
          return Date.now();
        }
      }
    }
    if (undefined) {
      class S {
        constructor() {
          return Date.now();
        }
      }
      const _Symbol = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return Date.now();
          }
        }
        cResult[12] = tmp30;
      } else {
        class S {
          constructor() {
            return Date.now();
          }
        }
      }
    } else {
      class S {
        constructor() {
          return Date.now();
        }
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return Date.now();
          }
        }
        cResult[11] = tmp28;
      } else {
        class S {
          constructor() {
            return Date.now();
          }
        }
      }
      return tmp28;
    }
  }
  let sum = tmp14;
  if (null != stateFromStores1) {
    class S {
      constructor() {
        return Date.now();
      }
    }
    const date = new Date(stateFromStores1.created_at);
    sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
  }
  cResult[5] = stateFromStores1;
  cResult[6] = tmp14;
  cResult[7] = sum;
  const tmp13 = _slicedToArray(noop.useState(S), 2);
}) : (function useRequestHarvestStatus() {
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [DataHarvestStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => harvestType.harvestType);
  [tmp3, require] = noop.useState(() => Date.now());
  let sum = tmp3;
  if (null != stateFromStores1) {
    const _Date = Date;
    const date = new Date(stateFromStores1.created_at);
    sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
  }
  dependencyMap = sum;
  _slicedToArray = noop.useRef(null);
  const items2 = [sum];
  const effect = noop.useEffect(() => {
    const diff = sum - Date.now();
    if (diff > 0) {
      const _setTimeout = setTimeout;
      const _clearTimeout = clearTimeout;
      const timerId = setTimeout(() => closure_1_0(Date.now()), diff);
      clearTimeout(ref.current);
      ref.current = timerId;
    }
    return () => clearTimeout(ref.current);
  }, items2);
  let verified;
  if (stateFromStores != null) {
    verified = stateFromStores.verified;
  }
  if (verified) {
    if (stateFromStores.isStaff()) {
      let obj2 = { allowed: false, reason: "staff" };
    } else if (null == stateFromStores1) {
      obj2 = { allowed: true };
    } else if (sum > tmp3) {
      const obj5 = { allowed: false, reason: "rate_limited", nextAllowed: null };
      const _Date2 = Date;
      const date1 = new Date(sum);
      obj5.nextAllowed = date1;
    } else {
      obj2 = { allowed: true };
    }
  } else {
    return { allowed: false, reason: "not_verified" };
  }
  const tmp2 = _slicedToArray(noop.useState(() => Date.now()), 2);
});