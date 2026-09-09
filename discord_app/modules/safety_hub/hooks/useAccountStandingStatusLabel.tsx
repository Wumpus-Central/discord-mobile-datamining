// === Module 14793: useAccountStandingStatusLabel ===

// Module 14793 (useAccountStandingStatusLabel)
import util from "util" /* 1114 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 11913 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 11941 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14794 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 14795 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = function useAccountStandingStatusLabel() {
  let obj = useSafetyHubAccountStanding;
  const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
  const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
  const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
  const intl = util.intl;
  if (safetyHubInitialized) {
    obj = {
      hook(arg0) {
          return arg0;
        }
    };
    let formatToPlainStringResult = intl.formatToPlainString(SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj);
  } else {
    if (null != safetyHubFetchError) {
      let ZTNur7 = util.t.TDRvqs;
    } else {
      ZTNur7 = util.t.ZTNur7;
    }
    formatToPlainStringResult = intl.string(ZTNur7);
  }
  return formatToPlainStringResult;
};