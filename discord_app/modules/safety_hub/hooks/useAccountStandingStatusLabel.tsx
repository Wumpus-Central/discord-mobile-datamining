// discord_app/modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx
import react from "../../../../_runtime/00576_react.js";
import intl3 from "../../../intl/index.native.tsx";
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding.tsx";
import useSafetyHubInitialized from "useSafetyHubInitialized.tsx";
import useSafetyHubFetchError from "useSafetyHubFetchError.tsx";
import SafetyHubAccountStandingLabels from "../SafetyHubAccountStandingLabels.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = react;
      const cResult = obj.c(5);
      const obj2 = useSafetyHubAccountStanding;
      const safetyHubAccountStanding = obj2.useSafetyHubAccountStanding();
      const obj3 = useSafetyHubInitialized;
      const safetyHubInitialized = obj3.useSafetyHubInitialized();
      const obj4 = useSafetyHubFetchError;
      const safetyHubFetchError = obj4.useSafetyHubFetchError();
      if (safetyHubInitialized) {
        let tmp10;
        if (cResult[2] !== safetyHubAccountStanding.state) {
          let tmp12;
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function u(arg0) {
              return arg0;
            };
            cResult[4] = fn;
            tmp12 = fn;
          } else {
            tmp12 = cResult[4];
          }
          const intl2 = intl3.intl;
          const obj5 = { hook: tmp12 };
          const formatToPlainStringResult = intl2.formatToPlainString(
            SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state],
            obj5,
          );
          cResult[2] = safetyHubAccountStanding.state;
          cResult[3] = formatToPlainStringResult;
          tmp10 = formatToPlainStringResult;
        } else {
          tmp10 = cResult[3];
        }
        return tmp10;
      } else {
        let tmp7;
        if (cResult[0] !== safetyHubFetchError) {
          let ZTNur7;
          const intl = intl3.intl;
          const string = intl.string;
          if (null != safetyHubFetchError) {
            ZTNur7 = intl3.t.TDRvqs;
          } else {
            ZTNur7 = intl3.t.ZTNur7;
          }
          const stringResult = string(ZTNur7);
          cResult[0] = safetyHubFetchError;
          cResult[1] = stringResult;
          tmp7 = stringResult;
        } else {
          tmp7 = cResult[1];
        }
        return tmp7;
      }
    }
  : () => {
      let formatToPlainStringResult;
      const obj = useSafetyHubAccountStanding;
      const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
      const obj2 = useSafetyHubInitialized;
      const safetyHubInitialized = obj2.useSafetyHubInitialized();
      const obj3 = useSafetyHubFetchError;
      const safetyHubFetchError = obj3.useSafetyHubFetchError();
      const intl = intl3.intl;
      if (safetyHubInitialized) {
        const obj4 = {
          hook(arg0) {
            return arg0;
          },
        };
        formatToPlainStringResult = intl.formatToPlainString(
          SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state],
          obj4,
        );
      } else {
        let ZTNur7;
        const string = intl.string;
        if (null != safetyHubFetchError) {
          ZTNur7 = intl3.t.TDRvqs;
        } else {
          ZTNur7 = intl3.t.ZTNur7;
        }
        formatToPlainStringResult = string(ZTNur7);
      }
      return formatToPlainStringResult;
    };
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = tmp2;
