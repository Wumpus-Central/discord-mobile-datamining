// === Module 14877: useAccountStandingStatusLabel ===

// Module 14877 (useAccountStandingStatusLabel)
import util from "util" /* 1115 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12025 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12053 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14878 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 14879 */;
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