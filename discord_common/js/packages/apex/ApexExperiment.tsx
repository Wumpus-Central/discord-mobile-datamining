// === Module 1350: logger ===

// Module 1350 (logger)
import _slicedToArray from "_slicedToArray";
import { useEffect } from "noop";

const require = arg1;
const logger = new require("set").Logger("ApexExperiment");
let result = require("log").fileFinishedImporting("../discord_common/js/packages/apex/ApexExperiment.tsx");

export default function createApexExperimentCommon(definition, registerExperiment) {
  let closure_5;
  let closure_6;
  let closure_7;
  let logger;
  let closure_0 = registerExperiment;
  let closure_1 = arg2;
  let _slicedToArray = arg3;
  ({ name: logger, kind: closure_5, variations: closure_6, defaultConfig: closure_7 } = definition);
  registerExperiment.registerExperiment(definition);
  let c8 = null;
  return {
    definition,
    useConfig(location) {
      const evaluationAndAssignment = location;
      const tmp = callback(revision, location);
      const dependencyMap = tmp;
      let tmp2 = callback("user", location);
      callback = tmp2;
      const items = [evaluationAndAssignment];
      const items1 = [tmp, tmp2];
      const tmp3 = callback(evaluationAndAssignment(589).useStateFromStoresArray(items, () => _location.getEvaluationAndAssignment(revision, closure_1, trackedVariantId, _slicedToArray), items1), 2);
      let first = tmp3[0];
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
      let closure_8 = useAsEligibility;
      let tmp12 = null;
      if (null != tmp3[1]) {
        if (tmp5 !== first) {
          first = tmp5;
          closure_8 = (function computeVariantConfig(config) {
            let tmp2 = table[config.variantId];
            if (tmp2 == null) {
              tmp2 = closure_7;
            }
            if (typeof tmp2 === "HAS_APPLICATION") {
              return tmp2;
            } else if (null == config.config) {
              return closure_7;
            } else {
              try {
                return tmp2(config.config);
              } catch (tmp3) {
                const _HermesInternal = HermesInternal;
                outer1_4.error("Failed to parse dynamic config for experiment " + closure_4, tmp3);
                return tmp;
              }
            }
          })(tmp5);
        }
        tmp12 = closure_8;
      }
      let closure_9 = tmp14;
      const items2 = [tmp, first, trackedVariantId, revision, location.location, isOverride, prop, useAsEligibility, null == tmp12];
      outer1_3(() => {
        let tmp2 = null == first;
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
          const result = _location.trackExperimentExposure(tmp, trackedVariantId, _location.location, revision, revision, trackedVariantId, closure_1);
        }
      }, items2);
      if (null != variantId) {
        return tmp12;
      }
      tmp12 = prop;
    },
    getConfig(location) {
      let tmp7;
      let tmp8;
      const tmp3 = dependencyMap(closure_5, location);
      let tmpResult;
      if ("guild" === closure_5) {
        const obj = { location: null };
        obj[0] = location.location;
        tmpResult = dependencyMap("user", obj);
      }
      [tmp7, tmp8] = callback(evaluationAndAssignment.getEvaluationAndAssignment(closure_5, tmp3, closure_4, tmpResult), 2);
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
          let closure_8 = (function computeVariantConfig(config) {
            let tmp2 = table[config.variantId];
            if (tmp2 == null) {
              tmp2 = closure_7;
            }
            if (typeof tmp2 === "HAS_APPLICATION") {
              return tmp2;
            } else if (null == config.config) {
              return closure_7;
            } else {
              try {
                return tmp2(config.config);
              } catch (tmp3) {
                const _HermesInternal = HermesInternal;
                outer1_4.error("Failed to parse dynamic config for experiment " + closure_4, tmp3);
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
      tmp12 = closure_7;
    }
  };
};