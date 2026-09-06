// discord_app/modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx
import util from "../../../intl/index.native.tsx";
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding.tsx";
import useSafetyHubInitialized from "useSafetyHubInitialized.tsx";
import useSafetyHubFetchError from "useSafetyHubFetchError.tsx";
import SafetyHubAccountStandingLabels from "../SafetyHubAccountStandingLabels.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      },
    };
    let formatToPlainStringResult = intl.formatToPlainString(
      SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state],
      obj,
    );
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
