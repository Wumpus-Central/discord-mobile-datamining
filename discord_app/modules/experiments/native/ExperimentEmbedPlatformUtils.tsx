// === Module 11806: ExperimentEmbedPlatformUtils ===

// Module 11806 (ExperimentEmbedPlatformUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ExperimentManager from "ExperimentManager" /* 4481 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ExperimentEmbedUtils from "ExperimentEmbedUtils" /* 7890 */;
import useLegacyExperiments from "useLegacyExperiments" /* 11480 */;
import useApexExperiments from "useApexExperiments" /* 11481 */;
import size from "module_2" /* 2 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = size.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
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
        let tmpResult = ExperimentEmbedUtils;
        const experimentBuckets = tmpResult.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              tmpResult = ExperimentManager;
              tmpResult.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
            }
          }
          ExperimentManager.overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult1 = ExperimentManager;
        }
      }
    }
  }
  obj = { id: experimentFromEmbedURL };
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11807, dependencyMap.paths), "ExperimentOverrideSheet", obj);
};