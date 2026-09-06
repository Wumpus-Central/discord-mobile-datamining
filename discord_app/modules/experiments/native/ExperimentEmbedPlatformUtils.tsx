// discord_app/modules/experiments/native/ExperimentEmbedPlatformUtils.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useLegacyExperiments from "../client_override_hooks/useLegacyExperiments.tsx";
import useApexExperiments from "../client_override_hooks/useApexExperiments.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = size.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(
  experimentFromEmbedURL,
  experimentTreatmentFromEmbedURL,
) {
  closure_0 = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      let obj = useLegacyExperiments;
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = useApexExperiments.getApexExperiments();
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
        let tmpResult = tmp(7890);
        const experimentBuckets = tmpResult.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              tmpResult = tmp(4481);
              tmpResult.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
            }
          }
          tmp(4481).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult1 = tmp(4481);
        }
      }
    }
  }
  obj = { id: experimentFromEmbedURL };
  ActionSheetActionCreatorsDefault.openLazy(
    asyncRequireImpl(11807, dependencyMap.paths),
    "ExperimentOverrideSheet",
    obj,
  );
};
