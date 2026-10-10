// === Module 11479: useEmitAppealIngestionEvent ===

// Module 11479 (useEmitAppealIngestionEvent)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 7536 */;

const require = fn;
let closure_5 = fn(7512).SafetyHubAnalyticsActionSource;
const Constants = fn(1085);
({ EMPTY_STRING_SNOWFLAKE_ID: metroRequire, AnalyticEvents: closure_7 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmitAppealIngestionEvent() {
  const cResult = stateFromStores(safetyHubAccountStanding[5]).c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SafetyHubStore];
    const fn = function o() {
      return SafetyHubStore.getAppealClassificationId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = stateFromStores(safetyHubAccountStanding[5]);
  stateFromStores = stateFromStores(safetyHubAccountStanding[6]).useStateFromStores(tmp4, tmp5);
  const tmpResult = stateFromStores(safetyHubAccountStanding[6]);
  let tmp8 = stateFromStores;
  if (stateFromStores == null) {
    tmp8 = closure_6;
  }
  const safetyHubClassification = stateFromStores(safetyHubAccountStanding[7]).useSafetyHubClassification(tmp8);
  const tmpResult4 = stateFromStores(safetyHubAccountStanding[7]);
  safetyHubAccountStanding = stateFromStores(safetyHubAccountStanding[8]).useSafetyHubAccountStanding();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SafetyHubStore];
    const fn2 = function p() {
      return SafetyHubStore.getIsDsaEligible();
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp12 = fn2;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
  }
  const tmpResult5 = stateFromStores(safetyHubAccountStanding[8]);
  const stateFromStores1 = stateFromStores(safetyHubAccountStanding[6]).useStateFromStores(tmp11, tmp12);
  if (cResult[4] === safetyHubAccountStanding.state) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === safetyHubClassification.violationType) {
        if (cResult[7] === stateFromStores1) {
          let tmp15 = cResult[8];
        }
        return tmp15;
      }
    }
  }
  const fn3 = function b(action) {
    const obj2 = { action, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_dsa_eligible: null, violation_type: null };
    let tmp2 = null;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp)];
      tmp2 = items;
    }
    obj2.classification_ids = tmp2;
    obj2.source = AppealIngestion.AppealIngestion;
    obj2.is_dsa_eligible = stateFromStores1;
    obj2.violation_type = safetyHubClassification.violationType;
    AnalyticsUtilsDefault.track(constants.SAFETY_HUB_ACTION, obj2);
  };
  cResult[4] = safetyHubAccountStanding.state;
  cResult[5] = stateFromStores;
  cResult[6] = safetyHubClassification.violationType;
  cResult[7] = stateFromStores1;
  cResult[8] = fn3;
  tmp15 = fn3;
  const tmpResult6 = stateFromStores(safetyHubAccountStanding[6]);
}) : (function useEmitAppealIngestionEvent() {
  let items = [SafetyHubStore];
  stateFromStores = stateFromStores(safetyHubAccountStanding[6]).useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  const obj = stateFromStores(safetyHubAccountStanding[6]);
  let tmp5 = stateFromStores;
  if (stateFromStores == null) {
    tmp5 = closure_6;
  }
  const safetyHubClassification = stateFromStores(safetyHubAccountStanding[7]).useSafetyHubClassification(tmp5);
  let obj2 = stateFromStores(safetyHubAccountStanding[7]);
  safetyHubAccountStanding = stateFromStores(safetyHubAccountStanding[8]).useSafetyHubAccountStanding();
  const tmpResult = stateFromStores(safetyHubAccountStanding[8]);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = stateFromStores(safetyHubAccountStanding[6]).useStateFromStores(items1, () => SafetyHubStore.getIsDsaEligible());
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    const obj2 = { action, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_dsa_eligible: null, violation_type: null };
    let tmp2 = null;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp)];
      tmp2 = items;
    }
    obj2.classification_ids = tmp2;
    obj2.source = AppealIngestion.AppealIngestion;
    obj2.is_dsa_eligible = stateFromStores1;
    obj2.violation_type = safetyHubClassification.violationType;
    AnalyticsUtilsDefault.track(constants.SAFETY_HUB_ACTION, obj2);
  }, items2);
});