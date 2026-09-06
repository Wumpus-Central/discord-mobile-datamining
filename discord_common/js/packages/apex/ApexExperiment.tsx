// === Module 1435: discord_common/apex/ApexExperiment ===

// Module 1435 (discord_common/apex/ApexExperiment)
import _slicedToArray from "module_32" /* 32 */;

const require = fn;
const useEffect = fn(19).useEffect;
const logger = new fn(4).Logger("ApexExperiment");
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/apex/ApexExperiment.tsx");

export default function createApexExperimentCommon(definition, registerExperiment, arg2, arg3) {
  let evaluationAndAssignment = registerExperiment;
  dependencyMap = arg2;
  closure_2 = arg3;
  ({ name: logger, kind: closure_5, variations: closure_6, defaultConfig: closure_7 } = definition);
  registerExperiment.registerExperiment(definition);
  closure_8 = null;
  return {
    definition,
    useConfig(location) {
      evaluationAndAssignment = location;
      const tmp = closure_2(revision, location);
      dependencyMap = tmp;
      let tmp2 = closure_2("user", location);
      closure_2 = tmp2;
      const items = [evaluationAndAssignment];
      const items1 = [tmp, tmp2];
      const tmp3 = closure_2(evaluationAndAssignment(504).useStateFromStoresArray(items, () => _location.getEvaluationAndAssignment(closure_2_5, closure_1, logger, closure_2), items1), 2);
      const first = tmp3[0];
      let tmp8 = first;
      let variantId;
      if (tmp3[1] != null) {
        variantId = tmp5.variantId;
      }
      let trackedVariantId;
      if (tmp3[1] != null) {
        trackedVariantId = tmp5.trackedVariantId;
      }
      if (trackedVariantId == null) {
        trackedVariantId = variantId;
      }
      revision = undefined;
      if (tmp3[1] != null) {
        revision = tmp5.revision;
      }
      let isOverride;
      if (tmp3[1] != null) {
        isOverride = tmp5.isOverride;
      }
      let prop;
      if (tmp3[1] != null) {
        prop = tmp5.exposureTrackingEnabled;
      }
      let useAsEligibility;
      if (tmp3[1] != null) {
        useAsEligibility = tmp5.useAsEligibility;
      }
      closure_8 = useAsEligibility;
      let tmp12 = null;
      if (null != tmp3[1]) {
        if (tmp5 !== tmp8) {
          tmp8 = tmp5;
          closure_8 = (function computeVariantConfig(config) {
            let tmp2 = closure_1_6[config.variantId];
            if (tmp2 == null) {
              tmp2 = closure_1_7;
            }
            if (typeof tmp2 !== "function") {
              return tmp2;
            } else if (null == config.config) {
              return closure_1_7;
            } else {
              try {
                return tmp2(config.config);
              } catch (tmp3) {
                const _HermesInternal = HermesInternal;
                logger.error("Failed to parse dynamic config for experiment " + closure_1_4, tmp3);
                return tmp;
              }
            }
          })(tmp5);
        }
        tmp12 = closure_8;
      }
      closure_9 = tmp14;
      const items2 = [tmp, first, trackedVariantId, revision, location.location, isOverride, prop, useAsEligibility, null == tmp12];
      tmp8(() => {
        let tmp2 = null == closure_3;
        if (!tmp2) {
          tmp2 = null == trackedVariantId;
        }
        if (!tmp2) {
          tmp2 = null == revision;
        }
        if (!tmp2) {
          tmp2 = false !== isOverride;
        }
        if (!tmp2) {
          tmp2 = true !== prop;
        }
        if (!tmp2) {
          tmp2 = true === closure_8;
        }
        if (!tmp2) {
          tmp2 = closure_9;
        }
        if (!tmp2) {
          const result = _location.trackExperimentExposure(tmp, logger, _location.location, closure_2_5, revision, trackedVariantId, closure_1);
        }
      }, items2);
      if (null != variantId) {
        return tmp12;
      }
      tmp12 = prop;
    },
    getConfig(location) {
      const tmp3 = dependencyMap(closure_1_5, location);
      let tmpResult;
      if ("guild" === closure_1_5) {
        const obj = { location: location.location };
        tmpResult = dependencyMap("user", obj);
      }
      [tmp7, tmp8] = _slicedToArray(evaluationAndAssignment.getEvaluationAndAssignment(closure_1_5, tmp3, logger, tmpResult), 2);
      let variantId;
      if (tmp8 != null) {
        variantId = tmp8.variantId;
      }
      let trackedVariantId;
      if (tmp8 != null) {
        trackedVariantId = tmp8.trackedVariantId;
      }
      if (trackedVariantId == null) {
        trackedVariantId = variantId;
      }
      let revision;
      if (tmp8 != null) {
        revision = tmp8.revision;
      }
      if (tmp8 != null) {
        const isOverride = tmp8.isOverride;
      }
      if (tmp8 != null) {
        const exposureTrackingEnabled = tmp8.exposureTrackingEnabled;
      }
      if (tmp8 != null) {
        const useAsEligibility = tmp8.useAsEligibility;
      }
      let tmp12 = null;
      if (null != tmp8) {
        if (tmp8 !== closure_3) {
          closure_3 = tmp8;
          closure_8 = (function computeVariantConfig(config) {
            let tmp2 = closure_1_6[config.variantId];
            if (tmp2 == null) {
              tmp2 = closure_1_7;
            }
            if (typeof tmp2 !== "function") {
              return tmp2;
            } else if (null == config.config) {
              return closure_1_7;
            } else {
              try {
                return tmp2(config.config);
              } catch (tmp3) {
                const _HermesInternal = HermesInternal;
                logger.error("Failed to parse dynamic config for experiment " + closure_1_4, tmp3);
                return tmp;
              }
            }
          })(tmp8);
        }
        tmp12 = closure_8;
      }
      let tmp14 = null != tmp7 && null != trackedVariantId && null != revision;
      if (tmp14) {
        tmp14 = false === isOverride;
      }
      if (tmp14) {
        tmp14 = true === exposureTrackingEnabled;
      }
      if (tmp14) {
        tmp14 = true !== useAsEligibility;
      }
      if (tmp14) {
        tmp14 = null != tmp12;
      }
      if (tmp14) {
        const result = obj2.trackExperimentExposure(tmp7, tmp5, location.location, tmp2, revision, trackedVariantId, tmp3);
      }
      if (null != variantId) {
        return tmp12;
      }
      tmp12 = closure_1_7;
    }
  };
};