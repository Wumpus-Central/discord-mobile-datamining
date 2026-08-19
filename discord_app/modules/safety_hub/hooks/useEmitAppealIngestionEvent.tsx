// discord_app/modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx
import noop from "../../../../_runtime/00019_noop.js";
import handleSafetyHubRequestAgeVerificationResetModalAction from "../SafetyHubStore.tsx";
import { SafetyHubAnalyticsActionSource as closure_5 } from "../SafetyHubConstants.tsx";
import ME from "../../../Constants.tsx";

const require = fn;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_6, AnalyticEvents: error } = ME);
const result = require("obj132").fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = function useEmitAppealIngestionEvent() {
  let items = [closure_4];
  stateFromStores = stateFromStores(safetyHubAccountStanding[4]).useStateFromStores(items, () => store.getAppealClassificationId());
  let obj = stateFromStores(safetyHubAccountStanding[4]);
  let tmp5 = stateFromStores;
  if (stateFromStores == null) {
    tmp5 = closure_6;
  }
  const safetyHubClassification = stateFromStores(safetyHubAccountStanding[5]).useSafetyHubClassification(tmp5);
  let tmpResult = tmp(tmp2[6]);
  safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
  tmpResult = tmp(tmp2[4]);
  const items1 = [closure_4];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => store.getIsDsaEligible());
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    safetyHubClassification(safetyHubAccountStanding[7]);
    const obj = { action, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_dsa_eligible: null, violation_type: null };
    let tmp2 = null;
    if (null != stateFromStores) {
      const _Number = Number;
      const items = [Number(tmp)];
      tmp2 = items;
    }
    obj[2] = tmp2;
    obj[3] = closure_1_5.AppealIngestion;
    obj[4] = stateFromStores1;
    obj[5] = safetyHubClassification.violationType;
    obj.track(closure_1_7.SAFETY_HUB_ACTION, obj);
  }, items2);
};