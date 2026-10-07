// discord_app/modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx
import c from "../../../../_runtime/00576_c.js";
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding.tsx";
import useSafetyHubInitialized from "useSafetyHubInitialized.tsx";
import useSafetyHubFetchError from "useSafetyHubFetchError.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const util = tmp(1126);
const SafetyHubAccountStandingLabels = tmp(14565);
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp = require;
      let formatToPlainStringResult = dependencyMap;
      const cResult = c.c(5);
      state = useSafetyHubAccountStanding.useSafetyHubAccountStanding();
      const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
      const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
      if (safetyHubInitialized) {
        if (cResult[2] !== state.state) {
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function u(arg0) {
              return arg0;
            };
            cResult[4] = fn;
            let tmp10 = fn;
          } else {
            tmp10 = cResult[4];
          }
          const intl2 = util.intl;
          tmp = SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[state.state];
          const obj5 = { hook: tmp10 };
          formatToPlainStringResult = intl2.formatToPlainString(tmp, obj5);
          state = state.state;
          cResult[2] = state;
          cResult[3] = formatToPlainStringResult;
        } else {
          return cResult[3];
        }
      } else if (cResult[0] !== safetyHubFetchError) {
        const intl = util.intl;
        if (null != safetyHubFetchError) {
          let ZTNur7 = util.t.TDRvqs;
        } else {
          ZTNur7 = util.t.ZTNur7;
        }
        const stringResult = intl.string(ZTNur7);
        cResult[0] = safetyHubFetchError;
        cResult[1] = stringResult;
      } else {
        return cResult[1];
      }
    }
  : () => {
      const safetyHubAccountStanding = useSafetyHubAccountStanding.useSafetyHubAccountStanding();
      const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
      const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
      const intl = util.intl;
      if (safetyHubInitialized) {
        const obj4 = {
          hook(arg0) {
            return arg0;
          },
        };
        let formatToPlainStringResult = intl.formatToPlainString(
          SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state],
          obj4,
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
