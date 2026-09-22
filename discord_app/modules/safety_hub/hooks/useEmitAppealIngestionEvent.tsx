// discord_app/modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import SafetyHubStore from "../SafetyHubStore.tsx";

const require = fn;
let closure_5 = fn(8695).SafetyHubAnalyticsActionSource;
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: metroRequire, AnalyticEvents: closure_7 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = function useEmitAppealIngestionEvent() {
  let items = [SafetyHubStore];
  stateFromStores = stateFromStores(safetyHubAccountStanding[4]).useStateFromStores(items, () =>
    SafetyHubStore.getAppealClassificationId(),
  );
  const obj = stateFromStores(safetyHubAccountStanding[4]);
  let tmp5 = stateFromStores;
  if (stateFromStores == null) {
    tmp5 = closure_6;
  }
  const safetyHubClassification = stateFromStores(safetyHubAccountStanding[5]).useSafetyHubClassification(tmp5);
  let obj2 = stateFromStores(safetyHubAccountStanding[5]);
  safetyHubAccountStanding = stateFromStores(safetyHubAccountStanding[6]).useSafetyHubAccountStanding();
  const tmpResult = stateFromStores(safetyHubAccountStanding[6]);
  const items1 = [SafetyHubStore];
  const stateFromStores1 = stateFromStores(safetyHubAccountStanding[4]).useStateFromStores(items1, () =>
    SafetyHubStore.getIsDsaEligible(),
  );
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    const obj2 = {
      action,
      account_standing: safetyHubAccountStanding.state,
      classification_ids: null,
      source: null,
      is_dsa_eligible: null,
      violation_type: null,
    };
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
};
