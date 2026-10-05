// === Module 11492: useSafetyHubClassifications ===

// Module 11492 (useSafetyHubClassifications)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8093 */;
import SafetyHubActionCreatorsAll from "SafetyHubActionCreators" /* 11493 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8106 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ViolationType = SafetyHubConstants.ViolationType;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let classifications;
  let tmp4;
  let tmp5;
  let tmp7;
  let obj = react2;
  const cResult = obj.c(5);
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
  const tmpResult = get_initialized;
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp4, tmp5);
  if (cResult[2] !== stateFromStoresArray) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function n(id, id2) {
        const obj = SnowflakeUtilsDefault;
        const extractTimestampResult = obj.extractTimestamp(id2.id);
        const obj2 = SnowflakeUtilsDefault;
        return extractTimestampResult - obj2.extractTimestamp(id.id);
      };
      cResult[4] = fn2;
      tmp8 = fn2;
    } else {
      tmp8 = cResult[4];
    }
    const sorted = stateFromStoresArray.sort(tmp8);
    cResult[2] = stateFromStoresArray;
    cResult[3] = sorted;
    tmp7 = sorted;
  } else {
    tmp7 = cResult[3];
  }
  return tmp7;
}) : (() => {
  let classifications;
  let obj = get_initialized;
  const items = [SafetyHubStore];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => classifications.getClassifications());
  return stateFromStoresArray.sort((id, id2) => {
    const obj = SnowflakeUtilsDefault;
    const extractTimestampResult = obj.extractTimestamp(id2.id);
    const obj2 = SnowflakeUtilsDefault;
    return extractTimestampResult - obj2.extractTimestamp(id.id);
  });
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let USER;
  let closure_0;
  let first;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp29;
  let tmp6;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SafetyHubStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return SafetyHubStore.getClassification(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SafetyHubStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arg0) {
    const fn2 = function f() {
      return SafetyHubStore.getClassificationRequestState(closure_0);
    };
    cResult[4] = arg0;
    cResult[5] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp8, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SafetyHubStore];
    const fn3 = function p() {
      return SafetyHubStore.getIsDsaEligible();
    };
    cResult[6] = items2;
    cResult[7] = fn3;
    tmp13 = fn3;
    tmp12 = items2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [SafetyHubStore];
    class E {
      constructor() {
        return SafetyHubStore.getIsAppealEligible();
      }
    }
    cResult[8] = items3;
    cResult[9] = E;
    tmp17 = E;
    tmp16 = items3;
  } else {
    tmp16 = cResult[8];
    tmp17 = cResult[9];
  }
  const tmpResult7 = tmp(504);
  const stateFromStores3 = tmpResult7.useStateFromStores(tmp16, tmp17);
  const tmpResult8 = tmp(8092);
  if (tmpResult8.isGuildClassification(stateFromStores)) {
    let GUILD_MEMBER;
    const guild_metadata = stateFromStores.guild_metadata;
    class E {
      constructor() {
        return SafetyHubStore.getIsAppealEligible();
      }
    }
    if (undefined === tmp(8094).MemberType.OWNER) {
      GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
    USER = GUILD_MEMBER;
  } else {
    USER = ViolationType.USER;
  }
  if (cResult[10] === stateFromStores) {
    if (cResult[11] === stateFromStores1) {
      let tmp25;
      let tmp26;
      if (cResult[12] === arg0) {
        tmp25 = cResult[13];
        tmp26 = cResult[14];
      }
      const effect = react.useEffect(tmp25, tmp26);
      class E {
        constructor() {
          return SafetyHubStore.getIsAppealEligible();
        }
      }
      if (tmp29) {
        tmp29 = null != stateFromStores;
      }
      if (tmp29) {
        tmp29 = null == stateFromStores.appeal_status;
      }
      if (cResult[15] === stateFromStores) {
        if (cResult[16] === stateFromStores1) {
          if (cResult[17] === stateFromStores2) {
            if (cResult[18] === tmp29) {
              let tmp32;
              if (cResult[19] === USER) {
                tmp32 = cResult[20];
              }
              return tmp32;
            }
          }
        }
      }
      const obj2 = { classification: stateFromStores, classificationRequestState: stateFromStores1, isDsaEligible: stateFromStores2, isAppealEligible: tmp29, violationType: USER };
      cResult[15] = stateFromStores;
      cResult[16] = stateFromStores1;
      cResult[17] = stateFromStores2;
      cResult[18] = tmp29;
      cResult[19] = USER;
      cResult[20] = obj2;
      tmp32 = obj2;
    }
  }
  class D {
    constructor() {
      const tmp = undefined === stateFromStores && null == stateFromStores1;
      if (tmp) {
        const obj = SafetyHubActionCreatorsAll;
        const safetyHubDataForClassification = obj.getSafetyHubDataForClassification(closure_0);
      }
    }
  }
  const items4 = [arg0, stateFromStores, stateFromStores1];
  cResult[10] = stateFromStores;
  cResult[11] = stateFromStores1;
  cResult[12] = arg0;
  cResult[13] = D;
  cResult[14] = items4;
  tmp26 = items4;
  tmp25 = D;
}) : ((arg0) => {
  let USER;
  let closure_0;
  _require = arg0;
  let tmp = _require;
  let obj = require("get initialized");
  const items = [SafetyHubStore];
  const stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getClassification(closure_0));
  const items1 = [SafetyHubStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SafetyHubStore.getClassificationRequestState(closure_0));
  const items2 = [SafetyHubStore];
  const obj3 = require("get initialized");
  const stateFromStores2 = obj3.useStateFromStores(items2, () => SafetyHubStore.getIsDsaEligible());
  const items3 = [SafetyHubStore];
  const obj4 = require("get initialized");
  let stateFromStores3 = obj4.useStateFromStores(items3, () => SafetyHubStore.getIsAppealEligible());
  const obj5 = require("SafetyHubUtils");
  if (obj5.isGuildClassification(stateFromStores)) {
    let GUILD_MEMBER;
    const guild_metadata = stateFromStores.guild_metadata;
    let member_type;
    if (guild_metadata != null) {
      member_type = guild_metadata.member_type;
    }
    if (member_type === tmp(8094).MemberType.OWNER) {
      GUILD_MEMBER = ViolationType.GUILD_OWNER;
    } else {
      GUILD_MEMBER = ViolationType.GUILD_MEMBER;
    }
    USER = GUILD_MEMBER;
  } else {
    USER = ViolationType.USER;
  }
  const items4 = [arg0, stateFromStores, stateFromStores1];
  const effect = react.useEffect(() => {
    const tmp = undefined === stateFromStores && null == stateFromStores1;
    if (tmp) {
      const obj = SafetyHubActionCreatorsAll;
      const safetyHubDataForClassification = obj.getSafetyHubDataForClassification(closure_0);
    }
  }, items4);
  const obj6 = { classification: stateFromStores, classificationRequestState: stateFromStores1, isDsaEligible: stateFromStores2, isAppealEligible: stateFromStores3, violationType: USER };
  if (stateFromStores3) {
    stateFromStores3 = null != stateFromStores;
  }
  if (stateFromStores3) {
    stateFromStores3 = null == stateFromStores.appeal_status;
  }
  return obj6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  const arr = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    let date = new Date();
    cResult[0] = date;
    let first = date;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arr) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(max_expiration_time) {
        const date = new Date(max_expiration_time.max_expiration_time);
        return date > first;
      };
      cResult[3] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[3];
    }
    const found = arr.filter(tmp6);
    cResult[1] = arr;
    cResult[2] = found;
    tmp5 = found;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (() => {
  const arr = closure_7();
  let date = new Date();
  return arr.filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date > date;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function() {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(4);
  const arr = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    let date = new Date();
    cResult[0] = date;
    let first = date;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arr) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function n(max_expiration_time) {
        const date = new Date(max_expiration_time.max_expiration_time);
        return date <= first;
      };
      cResult[3] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[3];
    }
    const found = arr.filter(tmp6);
    cResult[1] = arr;
    cResult[2] = found;
    tmp5 = found;
  } else {
    tmp5 = cResult[2];
  }
  return tmp5;
}) : (() => {
  const arr = closure_7();
  let date = new Date();
  return arr.filter((max_expiration_time) => {
    date = new Date(max_expiration_time.max_expiration_time);
    return date <= date;
  });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let appealSignal;
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let appealSignal;
  const items = [SafetyHubStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => appealSignal.getAppealSignal());
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useSafetyHubClassifications.tsx");

export const useSafetyHubClassifications = tmp2;
export const useSafetyHubClassification = tmp3;
export const useActiveSafetyHubClassifications = tmp4;
export const useExpiredSafetyHubClassifications = tmp5;
export const useSafetyHubAppealSignal = tmp6;