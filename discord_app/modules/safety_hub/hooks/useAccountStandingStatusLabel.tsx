// discord_app/modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding.tsx";
import useSafetyHubInitialized from "useSafetyHubInitialized.tsx";
import useSafetyHubFetchError from "useSafetyHubFetchError.tsx";

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
    let formatToPlainStringResult = intl.formatToPlainString(
      tmp(14766).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state],
      obj,
    );
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
