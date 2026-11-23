// === Module 16034: useAccountStandingStatusLabel ===

// Module 16034 (useAccountStandingStatusLabel)
import util from "util" /* 1112 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12427 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12460 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 16035 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 16036 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export function useAccountStandingStatusLabel() {
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
}