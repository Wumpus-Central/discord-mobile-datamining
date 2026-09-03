// discord_app/modules/experiments/native/ExperimentEmbedPlatformUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import { asyncRequireImpl } from "../../../../_runtime/02008_asyncRequireImpl.js";
import { makeClientVariant } from "../client_override_hooks/useApexExperiments.tsx";
import { parseRegisteredExperiments } from "../client_override_hooks/useLegacyExperiments.tsx";

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = set.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(
  experimentFromEmbedURL,
  experimentTreatmentFromEmbedURL,
) {
  const _require = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      let obj = parseRegisteredExperiments;
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = require("../client_override_hooks/useApexExperiments.tsx").getApexExperiments();
      let tmp5 = experiments[experimentFromEmbedURL];
      if (tmp5 == null) {
        tmp5 = apexExperiments.experiments[experimentFromEmbedURL];
      }
      if (null != tmp5) {
        let tmp6 = overridesInfo[experimentFromEmbedURL];
        if (tmp6 == null) {
          tmp6 = apexExperiments.overridesInfo[experimentFromEmbedURL];
        }
        if (tmp6 == null) {
          tmp6 = null;
        }
        let tmpResult = tmp(7644);
        const experimentBuckets = tmpResult.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              tmpResult = tmp(4399);
              tmpResult.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
            }
          }
          tmp(4399).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult1 = tmp(4399);
        }
      }
      const obj2 = makeClientVariant;
    }
  }
  obj = { id: experimentFromEmbedURL };
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(
    asyncRequireImpl(11608, dependencyMap.paths),
    "ExperimentOverrideSheet",
    obj,
  );
};
