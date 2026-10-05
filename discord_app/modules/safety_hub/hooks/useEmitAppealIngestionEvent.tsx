// === Module 11500: useEmitAppealIngestionEvent ===

// Module 11500 (useEmitAppealIngestionEvent)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import SafetyHubConstants from "SafetyHubConstants" /* 8093 */;
import react from "react" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8106 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let closure_5 = SafetyHubConstants.SafetyHubAnalyticsActionSource;
({ EMPTY_STRING_SNOWFLAKE_ID: metroRequire, AnalyticEvents: metroImportDefault } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let AppealIngestion;
  let safetyHubAccountStanding;
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  const tmp = stateFromStores;
  const tmp2 = safetyHubAccountStanding;
  let obj = stateFromStores(safetyHubAccountStanding[5]);
  const cResult = obj.c(9);
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
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let tmp9 = stateFromStores;
  const useSafetyHubClassification = tmp(tmp2[7]).useSafetyHubClassification;
  tmp(tmp2[7]);
  if (stateFromStores == null) {
    tmp9 = closure_6;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp9);
  const tmpResult5 = tmp(tmp2[8]);
  safetyHubAccountStanding = tmpResult5.useSafetyHubAccountStanding();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SafetyHubStore];
    class S {
      constructor() {
        return SafetyHubStore.getIsDsaEligible();
      }
    }
    cResult[2] = items1;
    cResult[3] = S;
    tmp13 = S;
    tmp12 = items1;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult6 = tmp(tmp2[6]);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp12, tmp13);
  if (cResult[4] === safetyHubAccountStanding.state) {
    if (cResult[5] === stateFromStores) {
      if (cResult[6] === safetyHubClassification.violationType) {
        let tmp16;
        if (cResult[7] === stateFromStores1) {
          tmp16 = cResult[8];
        }
        return tmp16;
      }
    }
  }
  const fn2 = function y(action) {
    let tmp3;
    const obj = { action, account_standing: safetyHubAccountStanding.state, classification_ids: tmp3, source: AppealIngestion.AppealIngestion, is_dsa_eligible: stateFromStores1, violation_type: safetyHubClassification.violationType };
    tmp3 = null;
    const track = AnalyticsUtilsDefault.track;
    const SAFETY_HUB_ACTION = metroImportDefault.SAFETY_HUB_ACTION;
    AnalyticsUtilsDefault;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp2)];
      tmp3 = items;
    }
    track(SAFETY_HUB_ACTION, obj);
  };
  cResult[4] = safetyHubAccountStanding.state;
  cResult[5] = stateFromStores;
  cResult[6] = safetyHubClassification.violationType;
  cResult[7] = stateFromStores1;
  cResult[8] = fn2;
  tmp16 = fn2;
}) : (() => {
  let AppealIngestion;
  let safetyHubAccountStanding;
  let stateFromStores;
  const tmp = stateFromStores;
  const tmp2 = safetyHubAccountStanding;
  let obj = stateFromStores(safetyHubAccountStanding[6]);
  let items = [SafetyHubStore];
  stateFromStores = obj.useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  let tmp6 = stateFromStores;
  const useSafetyHubClassification = stateFromStores(safetyHubAccountStanding[7]).useSafetyHubClassification;
  stateFromStores(safetyHubAccountStanding[7]);
  if (stateFromStores == null) {
    tmp6 = closure_6;
  }
  const safetyHubClassification = useSafetyHubClassification(tmp6);
  const tmpResult = tmp(tmp2[8]);
  safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
  const items1 = [SafetyHubStore];
  const tmpResult2 = tmp(tmp2[6]);
  const stateFromStores1 = tmpResult2.useStateFromStores(items1, () => SafetyHubStore.getIsDsaEligible());
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    let tmp3;
    const obj = { action, account_standing: safetyHubAccountStanding.state, classification_ids: tmp3, source: AppealIngestion.AppealIngestion, is_dsa_eligible: stateFromStores1, violation_type: safetyHubClassification.violationType };
    tmp3 = null;
    const track = AnalyticsUtilsDefault.track;
    const SAFETY_HUB_ACTION = metroImportDefault.SAFETY_HUB_ACTION;
    AnalyticsUtilsDefault;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp2)];
      tmp3 = items;
    }
    track(SAFETY_HUB_ACTION, obj);
  }, items2);
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = tmp3;