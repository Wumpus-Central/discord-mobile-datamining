// === Module 4364: regExp ===

// Module 4364 (regExp)
import obj132 from "obj132" /* 2 */;
import trackExposureToExperiment from "trackExposureToExperiment" /* 4296 */;
import getFirstEligibleUserExperimentDefault from "getFirstEligibleUserExperiment" /* 4365 */;
import getExperimentVariantsForDevTools from "getExperimentVariantsForDevTools" /* 4366 */;

const regExp = new RegExp("^dev://experiment/([-\\w._0-9]+)(?:/([0-9]+))?$", "i");
const result = obj132.fileFinishedImporting("modules/experiments/ExperimentEmbedUtils.tsx");

export const EXPERIMENT_EMBED_URL_REGEX = regExp;
export const isExperimentEmbedURL = function isExperimentEmbedURL(target) {
  return regExp.test(target);
};
export const getExperimentFromEmbedURL = function getExperimentFromEmbedURL(code) {
  const match = code.match(regExp);
  let tmp = null;
  if (null != match) {
    tmp = null;
    if (match.length >= 2) {
      tmp = match[1];
    }
  }
  return tmp;
};
export const getExperimentTreatmentFromEmbedURL = function getExperimentTreatmentFromEmbedURL(code) {
  const match = code.match(regExp);
  let parsed = null;
  if (null != match) {
    parsed = null;
    if (match.length >= 3) {
      const _parseInt = parseInt;
      parsed = parseInt(match[2], 10);
    }
  }
  return parsed;
};
export const getURLForExperiment = function getURLForExperiment(id) {
  if (null != arg1) {
    const _HermesInternal2 = HermesInternal;
    let combined = "dev://experiment/" + id + "/" + arg1;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "dev://experiment/" + id;
  }
  return combined;
};
export const getExperimentServerAssignmentLabel = function getExperimentServerAssignmentLabel(system, experimentServerAssignment) {
  if (null != experimentServerAssignment) {
    if (null != system) {
      const system2 = system.system;
      if (trackExposureToExperiment.ExperimentSystem.LEGACY === system2) {
        return getFirstEligibleUserExperimentDefault.getExperimentBucketName(experimentServerAssignment.bucket);
      } else if (trackExposureToExperiment.ExperimentSystem.APEX === system2) {
        const _HermesInternal = HermesInternal;
        return "Variant " + experimentServerAssignment.variantId;
      } else {
        system = system.system;
        return null;
      }
    }
  }
  return null;
};
export const getExperimentBuckets = function getExperimentBuckets(experiment) {
  const experimentVariantsForDevTools = getExperimentVariantsForDevTools.getExperimentVariantsForDevTools(experiment);
  return experimentVariantsForDevTools.map((item, index) => ({ id: item.id, label: item.label, value: item.id }));
};