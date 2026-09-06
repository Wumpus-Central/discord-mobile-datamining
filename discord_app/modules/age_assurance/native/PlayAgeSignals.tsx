// discord_app/modules/age_assurance/native/PlayAgeSignals.tsx
import NativePlayAgeSignalsModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativePlayAgeSignalsModule.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _getAgeSignals() {
  if (null == NativePlayAgeSignalsModuleDefault) {
    const _Error = Error;
    const error = new Error("NativePlayAgeSignalsModule is not available on this platform");
    throw error;
  }
  (function applyFakeAgeSignalsScenarioFromExperiment() {
    if (null != closure_1_1(dependencyMap[1])) {
      const fakePlayAgeSignalsConfig = closure_1_0(dependencyMap[2]).getFakePlayAgeSignalsConfig(
        "PlayAgeSignals.getAgeSignals",
      );
      ({ enabled, scenario } = fakePlayAgeSignalsConfig);
      const obj = closure_1_0(dependencyMap[2]);
      let str2 = "";
      if (enabled) {
        str2 = scenario;
      }
      const result = closure_1_1(dependencyMap[1]).setFakeAgeSignalsScenario(str2);
      const tmpResult = closure_1_1(dependencyMap[1]);
    }
  })();
  await NativePlayAgeSignalsModuleDefault.getAgeSignals();
  return value;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/PlayAgeSignals.tsx");

export const AgeSignalsStatus = { UNSPECIFIED: 0, SHARED: 1, NOT_SHARED: 2, VERIFICATION_REQUIRED: 3 };
export const AgeRangeSource = { UNSPECIFIED: 0, TIER_A: 1, TIER_B: 2, TIER_C: 3, TIER_D: 4 };
export const SignificantChangeStatus = { UNSPECIFIED: 0, APPROVED: 1, PENDING: 2, DECLINED: 3 };
export const getAgeSignals = function getAgeSignals() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
