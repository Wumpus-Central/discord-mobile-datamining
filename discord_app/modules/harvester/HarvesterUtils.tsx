// discord_app/modules/harvester/HarvesterUtils.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../_runtime/00576_react.js";
import HarvesterConstants from "HarvesterConstants.tsx";
import _slicedToArray_mod from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import UserStore from "../../stores/UserStore.tsx";
import DataHarvestStore from "DataHarvestStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let clearTimeoutResult, dependencyMap;

let _slicedToArray = _slicedToArray_mod;
const REQUEST_DATA_LIMIT_MS = HarvesterConstants.REQUEST_DATA_LIMIT_MS;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function () {
      let closure_1;
      let currentUser;
      let harvestType;
      let ref;
      let tmp14;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(17);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DataHarvestStore];
        const fn2 = function v() {
          return harvestType.harvestType;
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
      [tmp14, require] = react.useState(S);
      _slicedToArray(react.useState(S), 2);
      if (cResult[5] === stateFromStores1) {
        let tmp21;
        let tmp24;
        class S {
          constructor() {
            return Date.now();
          }
        }
        dependencyMap = tmp15;
        _slicedToArray = react.useRef(null);
        if (cResult[8] !== tmp15) {
          class E {
            constructor() {
              diff = closure_1 - Date.now();
              if (diff > 0) {
                _setTimeout = setTimeout;
                _clearTimeout = clearTimeout;
                tmp3 = closure_2;
                timerId = setTimeout(() => closure_1_0(Date.now()), diff);
                clearTimeoutResult = clearTimeout(closure_2.current);
                closure_2.current = timerId;
              }
              return () => clearTimeout(ref.current);
            }
          }
          const items2 = [tmp15];
          cResult[8] = tmp15;
          cResult[9] = E;
          cResult[10] = items2;
          tmp21 = items2;
        } else {
          class E {
            constructor() {
              diff = closure_1 - Date.now();
              if (diff > 0) {
                _setTimeout = setTimeout;
                _clearTimeout = clearTimeout;
                tmp3 = closure_2;
                timerId = setTimeout(() => closure_1_0(Date.now()), diff);
                clearTimeoutResult = clearTimeout(closure_2.current);
                closure_2.current = timerId;
              }
              return () => clearTimeout(ref.current);
            }
          }
          tmp21 = cResult[10];
        }
        const effect = react.useEffect(E, tmp21);
        if (stateFromStores != null) {
          class E {
            constructor() {
              diff = closure_1 - Date.now();
              if (diff > 0) {
                _setTimeout = setTimeout;
                _clearTimeout = clearTimeout;
                tmp3 = closure_2;
                timerId = setTimeout(() => closure_1_0(Date.now()), diff);
                clearTimeoutResult = clearTimeout(closure_2.current);
                closure_2.current = timerId;
              }
              return () => clearTimeout(ref.current);
            }
          }
        }
        if (undefined) {
          class E {
            constructor() {
              diff = closure_1 - Date.now();
              if (diff > 0) {
                _setTimeout = setTimeout;
                _clearTimeout = clearTimeout;
                tmp3 = closure_2;
                timerId = setTimeout(() => closure_1_0(Date.now()), diff);
                clearTimeoutResult = clearTimeout(closure_2.current);
                closure_2.current = timerId;
              }
              return () => clearTimeout(ref.current);
            }
          }
          tmp24 = tmp26;
        } else {
          class E {
            constructor() {
              diff = closure_1 - Date.now();
              if (diff > 0) {
                _setTimeout = setTimeout;
                _clearTimeout = clearTimeout;
                tmp3 = closure_2;
                timerId = setTimeout(() => closure_1_0(Date.now()), diff);
                clearTimeoutResult = clearTimeout(closure_2.current);
                closure_2.current = timerId;
              }
              return () => clearTimeout(ref.current);
            }
          }
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class E {
              constructor() {
                diff = closure_1 - Date.now();
                if (diff > 0) {
                  _setTimeout = setTimeout;
                  _clearTimeout = clearTimeout;
                  tmp3 = closure_2;
                  timerId = setTimeout(() => closure_1_0(Date.now()), diff);
                  clearTimeoutResult = clearTimeout(closure_2.current);
                  closure_2.current = timerId;
                }
                return () => clearTimeout(ref.current);
              }
            }
            cResult[11] = tmp25;
            tmp24 = tmp25;
          } else {
            class E {
              constructor() {
                diff = closure_1 - Date.now();
                if (diff > 0) {
                  _setTimeout = setTimeout;
                  _clearTimeout = clearTimeout;
                  tmp3 = closure_2;
                  timerId = setTimeout(() => closure_1_0(Date.now()), diff);
                  clearTimeoutResult = clearTimeout(closure_2.current);
                  closure_2.current = timerId;
                }
                return () => clearTimeout(ref.current);
              }
            }
          }
        }
        return tmp24;
      }
      let sum = tmp14;
      if (null != stateFromStores1) {
        class E {
          constructor() {
            diff = closure_1 - Date.now();
            if (diff > 0) {
              _setTimeout = setTimeout;
              _clearTimeout = clearTimeout;
              tmp3 = closure_2;
              timerId = setTimeout(() => closure_1_0(Date.now()), diff);
              clearTimeoutResult = clearTimeout(closure_2.current);
              closure_2.current = timerId;
            }
            return () => clearTimeout(ref.current);
          }
        }
        const self = this;
        const self2 = this;
        const date = new Date(stateFromStores1.created_at);
        sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
      }
      cResult[5] = stateFromStores1;
      cResult[6] = tmp14;
      cResult[7] = sum;
    }
  : function () {
      let currentUser;
      let date1;
      let harvestType;
      let obj6;
      let ref;
      let tmp3;
      const f117599 = () => Date.now();
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [DataHarvestStore];
      const obj3 = get_initialized;
      const stateFromStores1 = obj3.useStateFromStores(items1, () => harvestType.harvestType);
      [tmp3, require] = react.useState(f117599);
      let sum = tmp3;
      _slicedToArray(react.useState(f117599), 2);
      if (null != stateFromStores1) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date = new Date(stateFromStores1.created_at);
        sum = date.getTime() + REQUEST_DATA_LIMIT_MS;
      }
      dependencyMap = sum;
      _slicedToArray = react.useRef(null);
      const items2 = [sum];
      const effect = react.useEffect(() => {
        const diff = dependencyMap - Date.now();
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
        let obj2;
        if (stateFromStores.isStaff()) {
          obj2 = { allowed: false, reason: "staff" };
        } else if (null == stateFromStores1) {
          obj2 = { allowed: true };
        } else if (sum > tmp3) {
          const _Date2 = Date;
          const self3 = this;
          const self4 = this;
          const obj5 = { allowed: false, reason: "rate_limited", nextAllowed: date1 };
          obj2 = obj5;
          date1 = new Date(sum);
        } else {
          obj2 = { allowed: true };
        }
        obj6 = obj2;
      } else {
        obj6 = { allowed: false, reason: "not_verified" };
      }
      return obj6;
    };
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
        const self = this;
        const self2 = this;
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
export const useRequestHarvestStatus = tmp2;
