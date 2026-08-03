// === Module 13976: harvestDisabled ===

// Module 13976 (harvestDisabled)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import harvestType from "harvestType";
import { REQUEST_DATA_LIMIT_MS } from "REQUEST_DATA_LIMIT_DAYS";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/harvester/HarvesterUtils.tsx");

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
  let require;
  let tmp3;
  let obj = require(589) /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [harvestType];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => harvestType.harvestType);
  const obj3 = require(589) /* initialize */;
  [tmp3, require] = callback(React.useState(() => Date.now()), 2);
  let sum = tmp3;
  if (null != stateFromStores1) {
    const _Date = Date;
    const date = new Date(stateFromStores1.created_at);
    sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
  }
  const dependencyMap = sum;
  callback = obj4.useRef(null);
  const items2 = [sum];
  const effect = obj4.useEffect(() => {
    const diff = closure_1 - Date.now();
    if (diff > 0) {
      const _setTimeout = setTimeout;
      const _clearTimeout = clearTimeout;
      const timerId = setTimeout(() => callback(Date.now()), diff);
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
      obj[2] = date1;
    } else {
      obj = { allowed: true };
    }
  } else {
    return { allowed: false, reason: "not_verified" };
  }
};