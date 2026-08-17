// discord_app/modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "handleSafetyHubRequestAgeVerificationResetModalAction" /* 11061 */;
import { SafetyHubAnalyticsActionSource as closure_5 } from "SafetyHubView" /* 5438 */;
import ME from "ME" /* 676 */;

const require = arg1;
({ EMPTY_STRING_SNOWFLAKE_ID: closure_6, AnalyticEvents: error } = ME);
const result = require("set").fileFinishedImporting("modules/safety_hub/hooks/useEmitAppealIngestionEvent.tsx");

export const useEmitAppealIngestionEvent = function useEmitAppealIngestionEvent() {
  let items = [closure_4];
  stateFromStores = stateFromStores(safetyHubAccountStanding[4]).useStateFromStores(items, () => store.getAppealClassificationId());
  let obj = stateFromStores(safetyHubAccountStanding[4]);
  const tmp3 = closure_4;
  let tmp5 = stateFromStores;
  if (stateFromStores == null) {
    tmp5 = closure_6;
  }
  const safetyHubClassification = stateFromStores(safetyHubAccountStanding[5]).useSafetyHubClassification(tmp5);
  let tmpResult = tmp(tmp2[6]);
  safetyHubAccountStanding = tmpResult.useSafetyHubAccountStanding();
  tmpResult = tmp(tmp2[4]);
  const items1 = [tmp3];
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => store.getIsDsaEligible());
  const items2 = [safetyHubAccountStanding.state, stateFromStores, safetyHubClassification, stateFromStores1];
  return stateFromStores1.useCallback((action) => {
    let obj = safetyHubClassification(safetyHubAccountStanding[7]);
    obj = { action, account_standing: safetyHubAccountStanding.state, classification_ids: null, source: null, is_dsa_eligible: null, violation_type: null };
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