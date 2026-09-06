// === Module 11888: useEmitAppealIngestionEvent ===

// Module 11888 (useEmitAppealIngestionEvent)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;
import SafetyHubStore from "SafetyHubStore" /* 8430 */;

const require = fn;
let closure_5 = fn(8419).SafetyHubAnalyticsActionSource;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: metroRequire, AnalyticEvents: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = function useEmitAppealIngestionEvent() {
  let items = [SafetyHubStore];
  stateFromStores = stateFromStores(safetyHubAccountStanding[4]).useStateFromStores(items, () => SafetyHubStore.getAppealClassificationId());
  let obj = stateFromStores(safetyHubAccountStanding[4]);
  let tmp5 = stateFromStores;
  if (stateFromStores == null) {
    tmp5 = closure_6;
  }
  const safetyHubClassification = stateFromStores(safetyHubAccountStanding[5]).useSafetyHubClassification(tmp5);
  let tmpResult = tmp(tmp2[6]);
  safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
  tmpResult = tmp(tmp2[4]);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => SafetyHubStore.getIsDsaEligible());
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    const obj = { action, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_dsa_eligible: null, violation_type: null };
    let tmp2 = null;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp)];
      tmp2 = items;
    }
    obj.classification_ids = tmp2;
    obj.source = AppealIngestion.AppealIngestion;
    obj.is_dsa_eligible = stateFromStores1;
    obj.violation_type = safetyHubClassification.violationType;
    obj.track(constants.SAFETY_HUB_ACTION, obj);
  }, items2);
};