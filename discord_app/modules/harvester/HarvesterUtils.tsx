// === Module 14859: HarvesterUtils ===

// Module 14859 (HarvesterUtils)
import initialize from "initialize" /* 504 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import DataHarvestStore from "DataHarvestStore" /* 13710 */;

require = fn;
const REQUEST_DATA_LIMIT_MS = fn(14860).REQUEST_DATA_LIMIT_MS;
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
export const useRequestHarvestStatus = function useRequestHarvestStatus() {
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [DataHarvestStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => harvestType.harvestType);
  [tmp3, require] = _slicedToArray(noop.useState(() => Date.now()), 2);
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
      obj = { allowed: false, reason: "staff" };
    } else if (null == stateFromStores1) {
      obj = { allowed: true };
    } else if (sum > tmp3) {
      obj = { allowed: false, reason: "rate_limited", nextAllowed: null };
      const _Date2 = Date;
      const date1 = new Date(sum);
      obj.nextAllowed = date1;
    } else {
      obj = { allowed: true };
    }
  } else {
    return { allowed: false, reason: "not_verified" };
  }
  const tmp2 = _slicedToArray(noop.useState(() => Date.now()), 2);
};