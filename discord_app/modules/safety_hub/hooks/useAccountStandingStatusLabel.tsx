// === Module 14764: useAccountStandingStatusLabel ===

// Module 14764 (useAccountStandingStatusLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 11882 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 11910 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14765 */;

const result = set.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = function useAccountStandingStatusLabel() {
  let obj = useSafetyHubAccountStanding;
  const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
  const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
  const obj2 = useSafetyHubInitialized;
  const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
  const intl = getSystemLocale.intl;
  if (safetyHubInitialized) {
    obj = { hook: null };
    obj[0] = function hook(arg0) {
      return arg0;
    };
    let formatToPlainStringResult = intl.formatToPlainString(tmp(14766).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj);
  } else {
    if (null != safetyHubFetchError) {
      let ZTNur7 = tmp(1114).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1114).t.ZTNur7;
    }
    formatToPlainStringResult = intl.string(ZTNur7);
  }
  return formatToPlainStringResult;
};