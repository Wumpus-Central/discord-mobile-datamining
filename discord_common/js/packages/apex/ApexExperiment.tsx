// === Module 1442: discord_common/apex/ApexExperiment ===

// Module 1442 (discord_common/apex/ApexExperiment)
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

const require = fn;
const useEffect = fn(19).useEffect;
const logger = new fn(4).Logger("ApexExperiment");
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/apex/ApexExperiment.tsx");

export default function createApexExperimentCommon(definition, registerExperiment, arg2, arg3) {
  _require = registerExperiment;
  dependencyMap = arg2;
  closure_2 = arg3;
  ({ name: logger, kind: closure_5, variations: closure_6, defaultConfig: closure_7 } = definition);
  registerExperiment.registerExperiment(definition);
  closure_8 = null;
  closure_9 = require("ReactCompilerGating").isReactCompilerEnabled();
  return {
    definition,
    useConfig(cResult) {
      if (closure_9) {
        closure_129_0 = cResult;
        cResult = evaluationAndAssignment(576).c(18);
        const tmp29 = closure_2(revision1, cResult);
        closure_129_1 = tmp29;
        const tmp30 = closure_2("user", cResult);
        closure_129_2 = tmp30;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [evaluationAndAssignment];
          cResult[0] = items;
          let first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp29) {
          if (cResult[2] === tmp30) {
            let tmp34 = cResult[3];
            let tmp35 = cResult[4];
          }
          const tmp39 = closure_2(evaluationAndAssignment(504).useStateFromStoresArray(first, tmp34, tmp35), 2);
          const first1 = tmp39[0];
          closure_129_3 = first1;
          if (tmp39[1] != null) {
            const variantId = tmp41.variantId;
          }
          let trackedVariantId;
          if (tmp39[1] != null) {
            trackedVariantId = tmp41.trackedVariantId;
          }
          if (trackedVariantId == null) {
            trackedVariantId = variantId;
          }
          closure_129_4 = trackedVariantId;
          let revision;
          if (tmp39[1] != null) {
            revision = tmp41.revision;
          }
          closure_129_5 = revision;
          let isOverride;
          if (tmp39[1] != null) {
            isOverride = tmp41.isOverride;
          }
          closure_129_6 = isOverride;
          let prop;
          if (tmp39[1] != null) {
            prop = tmp41.exposureTrackingEnabled;
          }
          closure_129_7 = prop;
          let useAsEligibility;
          if (tmp39[1] != null) {
            useAsEligibility = tmp41.useAsEligibility;
          }
          closure_129_8 = useAsEligibility;
          if (cResult[5] !== tmp39[1]) {
            let tmp49 = null;
            if (null != tmp41) {
              if (tmp41 !== tmp8) {
                tmp8 = tmp41;
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
                })(tmp41);
              }
              tmp49 = closure_8;
            }
            cResult[5] = tmp41;
            cResult[6] = tmp49;
            let tmp48 = tmp49;
          } else {
            tmp48 = cResult[6];
          }
          closure_129_9 = tmp51;
          if (cResult[7] === first1) {
            if (cResult[8] === prop) {
              if (cResult[9] === isOverride) {
                if (cResult[10] === cResult.location) {
                  if (cResult[11] === tmp51) {
                    if (cResult[12] === revision) {
                      if (cResult[13] === trackedVariantId) {
                        if (cResult[14] === tmp29) {
                          if (cResult[15] === useAsEligibility) {
                            let tmp52 = cResult[16];
                            let tmp53 = cResult[17];
                          }
                          tmp8(tmp52, tmp53);
                          if (null != variantId) {
                            let tmp19 = tmp48;
                          }
                          tmp48 = prop1;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const fn2 = function j() {
            let tmp2 = null == closure_3;
            if (!tmp2) {
              tmp2 = null == trackedVariantId1;
            }
            if (!tmp2) {
              tmp2 = null == revision1;
            }
            if (!tmp2) {
              tmp2 = false !== isOverride1;
            }
            if (!tmp2) {
              tmp2 = true !== prop1;
            }
            if (!tmp2) {
              tmp2 = true === closure_8;
            }
            if (!tmp2) {
              tmp2 = closure_9;
            }
            if (!tmp2) {
              const result = closure_0.trackExperimentExposure(closure_3, logger, closure_0.location, closure_2_5, revision1, trackedVariantId1, closure_1);
            }
          };
          const items1 = [tmp29, first1, trackedVariantId, revision, cResult.location, isOverride, prop, useAsEligibility, null == tmp48];
          cResult[7] = first1;
          cResult[8] = prop;
          cResult[9] = isOverride;
          cResult[10] = cResult.location;
          cResult[11] = null == tmp48;
          cResult[12] = revision;
          cResult[13] = trackedVariantId;
          cResult[14] = tmp29;
          cResult[15] = useAsEligibility;
          cResult[16] = fn2;
          cResult[17] = items1;
          tmp53 = items1;
          tmp52 = fn2;
          const obj3 = evaluationAndAssignment(504);
        }
        const fn = function s() {
          return closure_0.getEvaluationAndAssignment(closure_2_5, closure_1, logger, closure_2);
        };
        const items2 = [tmp29, tmp30];
        cResult[1] = tmp29;
        cResult[2] = tmp30;
        cResult[3] = fn;
        cResult[4] = items2;
        tmp35 = items2;
        tmp34 = fn;
        const obj2 = evaluationAndAssignment(576);
      } else {
        evaluationAndAssignment = cResult;
        const tmp3 = closure_2(revision1, cResult);
        dependencyMap = tmp3;
        const tmp4 = closure_2("user", cResult);
        closure_2 = tmp4;
        const items3 = [evaluationAndAssignment];
        const items4 = [tmp3, tmp4];
        const tmp9 = closure_2(evaluationAndAssignment(504).useStateFromStoresArray(items3, () => closure_0.getEvaluationAndAssignment(closure_2_5, closure_1, logger, closure_2), items4), 2);
        const first2 = tmp9[0];
        tmp8 = first2;
        let variantId1;
        if (tmp9[1] != null) {
          variantId1 = tmp11.variantId;
        }
        let trackedVariantId1;
        if (tmp9[1] != null) {
          trackedVariantId1 = tmp11.trackedVariantId;
        }
        if (trackedVariantId1 == null) {
          trackedVariantId1 = variantId1;
        }
        revision1 = undefined;
        if (tmp9[1] != null) {
          revision1 = tmp11.revision;
        }
        let isOverride1;
        if (tmp9[1] != null) {
          isOverride1 = tmp11.isOverride;
        }
        prop1 = undefined;
        if (tmp9[1] != null) {
          prop1 = tmp11.exposureTrackingEnabled;
        }
        let useAsEligibility1;
        if (tmp9[1] != null) {
          useAsEligibility1 = tmp11.useAsEligibility;
        }
        closure_8 = useAsEligibility1;
        tmp19 = null;
        if (null != tmp9[1]) {
          if (tmp11 !== tmp8) {
            tmp8 = tmp11;
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
            })(tmp11);
          }
          tmp19 = closure_8;
        }
        closure_9 = tmp21;
        const items5 = [tmp3, first2, trackedVariantId1, revision1, cResult.location, isOverride1, prop1, useAsEligibility1, null == tmp19];
        tmp8(() => {
          let tmp2 = null == closure_3;
          if (!tmp2) {
            tmp2 = null == trackedVariantId1;
          }
          if (!tmp2) {
            tmp2 = null == revision1;
          }
          if (!tmp2) {
            tmp2 = false !== isOverride1;
          }
          if (!tmp2) {
            tmp2 = true !== prop1;
          }
          if (!tmp2) {
            tmp2 = true === closure_8;
          }
          if (!tmp2) {
            tmp2 = closure_9;
          }
          if (!tmp2) {
            const result = closure_0.trackExperimentExposure(closure_3, logger, closure_0.location, closure_2_5, revision1, trackedVariantId1, closure_1);
          }
        }, items5);
        tmp19 = prop1;
        const obj = evaluationAndAssignment(504);
      }
      return tmp19;
    },
    getConfig(location, autoTrackExposure) {
      const tmp3 = dependencyMap(closure_1_5, location);
      let tmpResult;
      if ("guild" === closure_1_5) {
        const obj = { location: location.location };
        tmpResult = dependencyMap("user", obj);
      }
      [tmp7, tmp8] = evaluationAndAssignment.getEvaluationAndAssignment(closure_1_5, tmp3, logger, tmpResult);
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
      let isOverride;
      if (tmp8 != null) {
        isOverride = tmp8.isOverride;
      }
      if (tmp8 != null) {
        const exposureTrackingEnabled = tmp8.exposureTrackingEnabled;
      }
      if (tmp8 != null) {
        const useAsEligibility = tmp8.useAsEligibility;
      }
      let tmp13 = null;
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
        tmp13 = closure_8;
      }
      autoTrackExposure = undefined;
      if (autoTrackExposure != null) {
        autoTrackExposure = autoTrackExposure.autoTrackExposure;
      }
      let tmp16 = false !== autoTrackExposure && null != tmp7 && null != trackedVariantId && null != revision && false === isOverride;
      if (tmp16) {
        tmp16 = true === exposureTrackingEnabled;
      }
      if (tmp16) {
        tmp16 = true !== useAsEligibility;
      }
      if (tmp16) {
        tmp16 = null != tmp13;
      }
      if (tmp16) {
        const result = evaluationAndAssignment.trackExperimentExposure(tmp7, logger, location.location, closure_1_5, revision, trackedVariantId, tmp3);
      }
      if (null != variantId) {
        return tmp13;
      }
      tmp13 = closure_1_7;
      const tmp6 = _slicedToArray(evaluationAndAssignment.getEvaluationAndAssignment(closure_1_5, tmp3, logger, tmpResult), 2);
    }
  };
};