// === Module 11426: useSafetyHubClassifications ===

// Module 11426 (useSafetyHubClassifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11427 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 5921 */;

require = fn;
const ViolationType = fn(5922).ViolationType;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubClassifications() {
  const cResult = c.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function s() {
      return classifications.getClassifications();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function n(id, id2) {
        const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id2.id);
        return extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(id.id);
      };
      cResult[4] = fn2;
      let tmp7 = fn2;
    } else {
      tmp7 = cResult[4];
    }
    const sorted = stateFromStoresArray.sort(tmp7);
    cResult[2] = stateFromStoresArray;
    cResult[3] = sorted;
  } else {
    return cResult[3];
  }
  const tmpResult = initialize;
}) : (function useSafetyHubClassifications() {
  const items = [SafetyHubStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => classifications.getClassifications());
  return stateFromStoresArray.sort((id, id2) => {
    const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(id2.id);
    return extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(id.id);
  });
});
let closure_7 = tmp2;
fn(558);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubClassification(arg0) {
  _require = arg0;
  const cResult = require("c").c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return SafetyHubStore.getClassification(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SafetyHubStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function f() {
      return SafetyHubStore.getClassificationRequestState(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SafetyHubStore];
    const fn3 = function p() {
      return SafetyHubStore.getIsDsaEligible();
    };
    cResult[6] = items2;
    cResult[7] = fn3;
    let tmp13 = fn3;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult5 = require("initialize");
  const stateFromStores2 = require("initialize").useStateFromStores(tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [SafetyHubStore];
    class C {
      constructor() {
        return closure_1_5.getIsAppealEligible();
      }
    }
    cResult[8] = items3;
    cResult[9] = C;
    let tmp17 = C;
    let tmp16 = items3;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult6 = require("initialize");
  const stateFromStores3 = require("initialize").useStateFromStores(tmp16, tmp17);
  const tmpResult7 = require("initialize");
  if (tmpResult8.isGuildClassification(stateFromStores)) {
    const guild_metadata = stateFromStores.guild_metadata;
    class C {
      constructor() {
        return closure_1_5.getIsAppealEligible();
      }
    }
    if (undefined === tmp(5923).MemberType.OWNER) {
      let GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
  } else {
    const USER = ViolationType.USER;
    if (cResult[10] === stateFromStores) {
      if (cResult[11] === stateFromStores1) {
        if (cResult[12] === arg0) {
          let tmp26 = cResult[13];
          let tmp27 = cResult[14];
        }
        const effect = noop.useEffect(tmp26, tmp27);
        class D {
          constructor() {
            tmp = undefined === closure_1;
            if (tmp) {
              tmp2 = closure_2;
              tmp3 = null;
              tmp = null == closure_2;
            }
            if (tmp) {
              tmp4 = closure_2;
              tmp5 = closure_3;
              obj = closure_2(closure_3[9]);
              tmp6 = closure_0;
              safetyHubDataForClassification = obj.getSafetyHubDataForClassification(closure_0);
            }
            return;
          }
        }
        if (stateFromStores3) {
          let tmp30 = null != stateFromStores;
        }
        if (tmp30) {
          tmp30 = null == stateFromStores.appeal_status;
        }
        if (cResult[15] === stateFromStores) {
          if (cResult[16] === stateFromStores1) {
            if (cResult[17] === stateFromStores2) {
              if (cResult[18] === tmp30) {
                if (cResult[19] === USER) {
                  let tmp33 = cResult[20];
                }
                return tmp33;
              }
            }
          }
        }
        const obj2 = { classification: stateFromStores, classificationRequestState: stateFromStores1, isDsaEligible: stateFromStores2, isAppealEligible: tmp30, violationType: USER };
        cResult[15] = stateFromStores;
        cResult[16] = stateFromStores1;
        cResult[17] = stateFromStores2;
        cResult[18] = tmp30;
        cResult[19] = USER;
        cResult[20] = obj2;
        tmp33 = obj2;
      }
    }
    class D {
      constructor() {
        tmp = undefined === closure_1;
        if (tmp) {
          tmp2 = closure_2;
          tmp3 = null;
          tmp = null == closure_2;
        }
        if (tmp) {
          tmp4 = closure_2;
          tmp5 = closure_3;
          obj = closure_2(closure_3[9]);
          tmp6 = closure_0;
          safetyHubDataForClassification = obj.getSafetyHubDataForClassification(closure_0);
        }
        return;
      }
    }
    const items4 = [arg0, stateFromStores, stateFromStores1];
    cResult[10] = stateFromStores;
    cResult[11] = stateFromStores1;
    cResult[12] = arg0;
    cResult[13] = D;
    cResult[14] = items4;
    tmp27 = items4;
    tmp26 = D;
  }
  tmpResult8 = require("SafetyHubUtils");
}) : (function useSafetyHubClassification(arg0) {
  _require = arg0;
  const items = [SafetyHubStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SafetyHubStore.getClassification(closure_0));
  let obj = require("initialize");
  let tmp = _require;
  const items1 = [SafetyHubStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => SafetyHubStore.getClassificationRequestState(closure_0));
  const obj2 = require("initialize");
  const items2 = [SafetyHubStore];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => SafetyHubStore.getIsDsaEligible());
  const obj3 = require("initialize");
  const items3 = [SafetyHubStore];
  let stateFromStores3 = require("initialize").useStateFromStores(items3, () => SafetyHubStore.getIsAppealEligible());
  const obj4 = require("initialize");
  if (obj5.isGuildClassification(stateFromStores)) {
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (guild_metadata != null) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === tmp(5923).MemberType.OWNER) {
      let GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
  } else {
    const items4 = [arg0, stateFromStores, stateFromStores1];
    const effect = noop.useEffect(() => {
      let tmp = undefined === stateFromStores;
      if (tmp) {
        tmp = null == stateFromStores1;
      }
      if (tmp) {
        const safetyHubDataForClassification = SafetyHubActionCreatorsAll.getSafetyHubDataForClassification(closure_0);
      }
    }, items4);
    const obj6 = { classification: stateFromStores, classificationRequestState: stateFromStores1, isDsaEligible: stateFromStores2, isAppealEligible: null, violationType: null };
    if (stateFromStores3) {
      stateFromStores3 = null != stateFromStores;
    }
    if (stateFromStores3) {
      stateFromStores3 = null == stateFromStores.appeal_status;
    }
    obj6.isAppealEligible = stateFromStores3;
    obj6.violationType = ViolationType.USER;
    return obj6;
  }
  obj5 = require("SafetyHubUtils");
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useActiveSafetyHubClassifications() {
  const cResult = c.c(4);
  const arr = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Date = Date;
    const date = new Date();
    cResult[0] = date;
    let first = date;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arr) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(max_expiration_time) {
        return new Date(max_expiration_time.max_expiration_time) > first;
      };
      cResult[3] = fn;
      let tmp7 = fn;
    } else {
      tmp7 = cResult[3];
    }
    const found = arr.filter(tmp7);
    cResult[1] = arr;
    cResult[2] = found;
  } else {
    return cResult[2];
  }
}) : (function useActiveSafetyHubClassifications() {
  let date = new Date();
  return closure_7().filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date > date;
  });
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExpiredSafetyHubClassifications() {
  const cResult = c.c(4);
  const arr = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Date = Date;
    const date = new Date();
    cResult[0] = date;
    let first = date;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arr) {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(max_expiration_time) {
        return new Date(max_expiration_time.max_expiration_time) <= first;
      };
      cResult[3] = fn;
      let tmp7 = fn;
    } else {
      tmp7 = cResult[3];
    }
    const found = arr.filter(tmp7);
    cResult[1] = arr;
    cResult[2] = found;
  } else {
    return cResult[2];
  }
}) : (function useExpiredSafetyHubClassifications() {
  let date = new Date();
  return closure_7().filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date <= date;
  });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export const useSafetyHubClassifications = tmp2;
export const useSafetyHubClassification = tmp3;
export const useActiveSafetyHubClassifications = tmp4;
export const useExpiredSafetyHubClassifications = tmp5;
export const useSafetyHubAppealSignal = ReactCompilerGating.isReactCompilerEnabled() ? (function useSafetyHubAppealSignal() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    const fn = function s() {
      return appealSignal.getAppealSignal();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useSafetyHubAppealSignal() {
  const items = [SafetyHubStore];
  return initialize.useStateFromStores(items, () => appealSignal.getAppealSignal());
});