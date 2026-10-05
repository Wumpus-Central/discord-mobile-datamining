// discord_app/modules/experiments/apex/ApexExperiment.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../_runtime/00576_react.js";
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import discord_common_apex_ApexExperiment from "../../../../discord_common/js/packages/apex/ApexExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import ApexExperimentStore from "ApexExperimentStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const discord_common_apex_ApexExperimentDefault = discord_common_apex_ApexExperiment;

function getUnitId(type, guildId) {
  if ("guild" === type) {
    return guildId.guildId;
  } else if ("user" === type) {
    return AuthenticationStore.getId();
  } else if ("installation" === type) {
    const obj2 = FingerprintUtils;
    let str2 = obj2.maybeExtractId(AuthenticationStore.getInstallationForTracking());
    if (str2 == null) {
      str2 = "";
    }
    return str2;
  } else {
    const obj = GlobalUtils;
    obj.assertNever(type);
  }
}
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (type, guildId) => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(4);
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
      const tmpResult = get_initialized;
      const tmp9 = _slicedToArray(tmpResult.useStateFromStoresArray(tmp4, tmp5), 2)[1];
      if ("guild" === type) {
        return guildId.guildId;
      } else if ("user" === type) {
        return tmp8;
      } else if ("installation" === type) {
        let tmp11;
        if (cResult[2] !== tmp9) {
          const tmpResult3 = FingerprintUtils;
          let str3 = tmpResult3.maybeExtractId(tmp9);
          if (str3 == null) {
            str3 = "";
          }
          cResult[2] = tmp9;
          cResult[3] = str3;
          tmp11 = str3;
        } else {
          tmp11 = cResult[3];
        }
        return tmp11;
      } else {
        const tmpResult4 = GlobalUtils;
        tmpResult4.assertNever(type);
      }
    }
  : (type, guildId) => {
      let items = [AuthenticationStore];
      const obj = get_initialized;
      _slicedToArray(
        obj.useStateFromStoresArray(items, () => {
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
        const tmpResult = FingerprintUtils;
        let str3 = tmpResult.maybeExtractId(tmp5);
        if (str3 == null) {
          str3 = "";
        }
        return str3;
      } else {
        const tmpResult2 = GlobalUtils;
        tmpResult2.assertNever(type);
      }
    };
const result = size.fileFinishedImporting("modules/experiments/apex/ApexExperiment.tsx");

export default function createApexExperiment(arg0) {
  return discord_common_apex_ApexExperimentDefault(arg0, ApexExperimentStore, getUnitId, closure_7);
}
export const ApexExperiment = discord_common_apex_ApexExperiment.ApexExperiment;
export { getUnitId };
