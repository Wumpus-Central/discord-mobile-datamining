// === Module 12064: ExperimentEmbedPlatformUtils ===

// Module 12064 (ExperimentEmbedPlatformUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ExperimentManager from "ExperimentManager" /* 4677 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 8138 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11739 */;
import useApexExperiments from "useApexExperiments" /* 11740 */;
import size from "module_2" /* 2 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = size.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
  closure_0 = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      const legacyExperiments = useLegacyExperiments.getLegacyExperiments();
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
        const experimentBuckets = ExperimentEmbedUtils.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              ExperimentManager.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
              const tmpResult3 = ExperimentManager;
            }
          }
          ExperimentManager.overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult4 = ExperimentManager;
        }
        const tmpResult = ExperimentEmbedUtils;
      }
    }
  }
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12065, dependencyMap.paths), "ExperimentOverrideSheet", { id: experimentFromEmbedURL });
  const obj3 = { id: experimentFromEmbedURL };
};