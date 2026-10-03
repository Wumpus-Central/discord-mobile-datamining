// discord_app/modules/experiments/apex/ApexExperiment.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import discord_common_apex_ApexExperimentDefault from "../../../../discord_common/js/packages/apex/ApexExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ApexExperimentStore from "ApexExperimentStore.tsx";

require = fn;
function getUnitId(type, guildId) {
  if ("guild" === type) {
    return guildId.guildId;
  } else if ("user" === type) {
    return AuthenticationStore.getId();
  } else if ("installation" === type) {
    let str2 = FingerprintUtils.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    GlobalUtils.assertNever(type);
  }
}
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type, guildId) => {
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [AuthenticationStore];
        const fn = function l() {
          const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
          return items;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = initialize;
      const tmp9 = _slicedToArray(initialize.useStateFromStoresArray(tmp4, tmp5), 2)[1];
      if ("guild" === type) {
        return guildId.guildId;
      } else if ("user" === type) {
        return tmp8;
      } else if ("installation" === type) {
        if (cResult[2] !== tmp9) {
          let str3 = FingerprintUtils.maybeExtractId(tmp9);
          if (str3 == null) {
            str3 = "";
          }
          cResult[2] = tmp9;
          cResult[3] = str3;
          let tmp11 = str3;
          const tmpResult3 = FingerprintUtils;
        } else {
          tmp11 = cResult[3];
        }
        return tmp11;
      } else {
        GlobalUtils.assertNever(type);
        const tmpResult4 = GlobalUtils;
      }
      const tmp7 = _slicedToArray(initialize.useStateFromStoresArray(tmp4, tmp5), 2);
    }
  : (type, guildId) => {
      let items = [AuthenticationStore];
      _slicedToArray(
        initialize.useStateFromStoresArray(items, () => {
          const items = [AuthenticationStore.getId(), AuthenticationStore.getInstallationForTracking()];
          return items;
        }),
        2,
      );
      if ("guild" === type) {
        return guildId.guildId;
      } else if ("user" === type) {
        return tmp4;
      } else if ("installation" === type) {
        let str3 = FingerprintUtils.maybeExtractId(tmp5);
        if (str3 == null) {
          str3 = "";
        }
        return str3;
      } else {
        GlobalUtils.assertNever(type);
        const tmpResult2 = GlobalUtils;
      }
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return discord_common_apex_ApexExperimentDefault(arg0, ApexExperimentStore, getUnitId, closure_7);
}
export const ApexExperiment = fn(1442).ApexExperiment;
export { getUnitId };
