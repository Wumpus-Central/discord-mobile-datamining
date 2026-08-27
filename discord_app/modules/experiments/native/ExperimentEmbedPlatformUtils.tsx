// === Module 11293: regExp ===

// Module 11293 (regExp)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = set.fileFinishedImporting("modules/experiments/native/ExperimentEmbedPlatformUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const handleCodedLinkExperimentEmbedTap = function handleCodedLinkExperimentEmbedTap(experimentFromEmbedURL, experimentTreatmentFromEmbedURL) {
  const _require = experimentTreatmentFromEmbedURL;
  if (null != experimentTreatmentFromEmbedURL) {
    const _Number = Number;
    if (!Number.isNaN(experimentTreatmentFromEmbedURL)) {
      let obj = _require(11000);
      const legacyExperiments = obj.getLegacyExperiments();
      ({ experiments, overridesInfo } = legacyExperiments);
      const apexExperiments = _require(11001).getApexExperiments();
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
        let tmpResult = tmp(7566);
        const experimentBuckets = tmpResult.getExperimentBuckets(tmp5);
        const iter = experimentBuckets.find((value) => value.value === closure_0);
        if (null != iter) {
          if (null != tmp6) {
            if (tmp6.variantId === iter.value) {
              tmpResult = tmp(4366);
              tmpResult.overrideBucket(tmp5.system, experimentFromEmbedURL, null);
            }
          }
          tmp(4366).overrideBucket(tmp5.system, experimentFromEmbedURL, iter.value);
          const tmpResult1 = tmp(4366);
        }
      }
      const obj2 = _require(11001);
    }
  }
  obj = { id: experimentFromEmbedURL };
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(_require(2009)(11294, dependencyMap.paths), "ExperimentOverrideSheet", obj);
};