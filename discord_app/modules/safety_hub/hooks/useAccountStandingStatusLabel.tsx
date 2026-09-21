// === Module 15039: useAccountStandingStatusLabel ===

// Module 15039 (useAccountStandingStatusLabel)
import util from "util" /* 1115 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12137 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12165 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 15040 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 15041 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = function useAccountStandingStatusLabel() {
  const safetyHubAccountStanding = useSafetyHubAccountStanding.useSafetyHubAccountStanding();
  const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
  const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
  const intl = util.intl;
  if (safetyHubInitialized) {
    const obj4 = {
      hook(arg0) {
          return arg0;
        }
    };
    let formatToPlainStringResult = intl.formatToPlainString(SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
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