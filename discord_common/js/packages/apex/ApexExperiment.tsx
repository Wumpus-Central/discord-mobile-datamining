// discord_common/js/packages/apex/ApexExperiment.tsx
import logger_Logger from "../logger/Logger.tsx";
import react from "../../../../_runtime/00019_react.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_1, closure_3, dependencyMap;

const useEffect = react.useEffect;
const logger = new logger_Logger.Logger("ApexExperiment");
let result = size.fileFinishedImporting("../discord_common/js/packages/apex/ApexExperiment.tsx");

export default function createApexExperimentCommon(definition, registerExperiment, arg2, arg3) {
  let closure_5;
  let closure_6;
  let closure_7;
  function computeVariantConfig(config) {
    let tmp = closure_1_6[config.variantId];
    if (tmp == null) {
      tmp = closure_1_7;
    }
    if (typeof tmp !== "function") {
      return tmp;
    } else if (null == config.config) {
      return closure_1_7;
    } else {
      try {
        return tmp(config.config);
      } catch (tmp2) {
        const _HermesInternal = HermesInternal;
        logger.error("Failed to parse dynamic config for experiment " + closure_1_4, tmp2);
        return null;
      }
    }
  }
  _require = registerExperiment;
  dependencyMap = arg2;
  let closure_2 = arg3;
  ({ name: logger, kind: closure_5, variations: closure_6, defaultConfig: closure_7 } = definition);
  registerExperiment.registerExperiment(definition);
  let closure_8 = null;
  let obj = require("ReactCompilerGating");
  let closure_9 = obj.isReactCompilerEnabled();
  let obj2 = {
    definition,
    useConfig(cResult) {
      let prop1;
      let revision1;
      let tmp20;
      let tmp8;
      const tmp = closure_9;
      if (tmp) {
        let first;
        registerExperiment = cResult;
        const obj2 = registerExperiment(closure_1[4]);
        cResult = obj2.c(18);
        const tmp30 = closure_2(revision1, cResult);
        closure_1 = tmp30;
        const tmp31 = closure_2("user", cResult);
        closure_2 = tmp31;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [registerExperiment];
          cResult[0] = items;
          first = items;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp30) {
          let tmp35;
          let tmp36;
          let variantId;
          let tmp49;
          if (cResult[2] === tmp31) {
            tmp35 = cResult[3];
            tmp36 = cResult[4];
          }
          const obj3 = registerExperiment(closure_1[5]);
          const tmp40 = closure_2(obj3.useStateFromStoresArray(first, tmp35, tmp36), 2);
          const first1 = tmp40[0];
          if (tmp40[1] != null) {
            variantId = tmp42.variantId;
          }
          let trackedVariantId;
          if (tmp40[1] != null) {
            trackedVariantId = tmp42.trackedVariantId;
          }
          if (trackedVariantId == null) {
            trackedVariantId = variantId;
          }
          let revision;
          if (tmp40[1] != null) {
            revision = tmp42.revision;
          }
          let isOverride;
          if (tmp40[1] != null) {
            isOverride = tmp42.isOverride;
          }
          let prop;
          if (tmp40[1] != null) {
            prop = tmp42.exposureTrackingEnabled;
          }
          let useAsEligibility;
          if (tmp40[1] != null) {
            useAsEligibility = tmp42.useAsEligibility;
          }
          if (cResult[5] !== tmp40[1]) {
            let tmp50 = null;
            if (null != tmp40[1]) {
              if (tmp40[1] !== tmp8) {
                tmp8 = tmp42;
                closure_8 = computeVariantConfig(tmp42);
              }
              tmp50 = closure_8;
            }
            cResult[5] = tmp40[1];
            cResult[6] = tmp50;
            tmp49 = tmp50;
          } else {
            tmp49 = cResult[6];
          }
          closure_9 = tmp52;
          if (cResult[7] === first1) {
            if (cResult[8] === prop) {
              if (cResult[9] === isOverride) {
                if (cResult[10] === cResult.location) {
                  if ((cResult[11] === null) == tmp49) {
                    if (cResult[12] === revision) {
                      if (cResult[13] === trackedVariantId) {
                        if (cResult[14] === tmp30) {
                          let tmp53;
                          let tmp54;
                          if (cResult[15] === useAsEligibility) {
                            tmp53 = cResult[16];
                            tmp54 = cResult[17];
                          }
                          tmp8(tmp53, tmp54);
                          if (null != variantId) {
                            tmp20 = tmp49;
                          }
                          tmp49 = prop1;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const fn2 = function j() {
            const tmp2 =
              null == first1 ||
              null == trackedVariantId ||
              null == revision ||
              false !== isOverride ||
              true !== prop ||
              true === useAsEligibility ||
              closure_9;
            if (!tmp2) {
              const result = registerExperiment.trackExperimentExposure(
                first1,
                trackedVariantId1,
                registerExperiment.location,
                revision1,
                revision,
                trackedVariantId,
                closure_1,
              );
            }
          };
          const items1 = [
            tmp30,
            first1,
            trackedVariantId,
            revision,
            cResult.location,
            isOverride,
            prop,
            useAsEligibility,
            null == tmp49,
          ];
          cResult[7] = first1;
          cResult[8] = prop;
          cResult[9] = isOverride;
          cResult[10] = cResult.location;
          cResult[11] = null == tmp49;
          cResult[12] = revision;
          cResult[13] = trackedVariantId;
          cResult[14] = tmp30;
          cResult[15] = useAsEligibility;
          cResult[16] = fn2;
          cResult[17] = items1;
          tmp54 = items1;
          tmp53 = fn2;
        }
        const fn = function s() {
          return registerExperiment.getEvaluationAndAssignment(revision1, closure_1, trackedVariantId1, closure_2);
        };
        const items2 = [tmp30, tmp31];
        cResult[1] = tmp30;
        cResult[2] = tmp31;
        cResult[3] = fn;
        cResult[4] = items2;
        tmp36 = items2;
        tmp35 = fn;
      } else {
        registerExperiment = cResult;
        let tmp2 = closure_2;
        const tmp4 = closure_2(revision1, cResult);
        closure_1 = tmp4;
        const tmp5 = closure_2("user", cResult);
        closure_2 = tmp5;
        const items3 = [registerExperiment];
        const items4 = [tmp4, tmp5];
        const obj = registerExperiment(closure_1[5]);
        const tmp10 = closure_2(
          obj.useStateFromStoresArray(
            items3,
            () => cResult.getEvaluationAndAssignment(closure_5, closure_1, logger, closure_2),
            items4,
          ),
          2,
        );
        const first2 = tmp10[0];
        tmp8 = first2;
        let variantId1;
        if (tmp10[1] != null) {
          variantId1 = tmp12.variantId;
        }
        let trackedVariantId1;
        if (tmp10[1] != null) {
          trackedVariantId1 = tmp12.trackedVariantId;
        }
        if (trackedVariantId1 == null) {
          trackedVariantId1 = variantId1;
        }
        revision1 = undefined;
        if (tmp10[1] != null) {
          revision1 = tmp12.revision;
        }
        let isOverride1;
        if (tmp10[1] != null) {
          isOverride1 = tmp12.isOverride;
        }
        prop1 = undefined;
        if (tmp10[1] != null) {
          prop1 = tmp12.exposureTrackingEnabled;
        }
        let useAsEligibility1;
        if (tmp10[1] != null) {
          useAsEligibility1 = tmp12.useAsEligibility;
        }
        closure_8 = useAsEligibility1;
        tmp20 = null;
        if (null != tmp10[1]) {
          if (tmp10[1] !== tmp8) {
            tmp8 = tmp12;
            closure_8 = computeVariantConfig(tmp12);
          }
          tmp20 = closure_8;
        }
        closure_9 = tmp22;
        const items5 = [
          tmp4,
          first2,
          trackedVariantId1,
          revision1,
          cResult.location,
          isOverride1,
          prop1,
          useAsEligibility1,
          null == tmp20,
        ];
        tmp8(() => {
          const tmp2 =
            null == closure_3 ||
            null == trackedVariantId1 ||
            null == revision1 ||
            false !== isOverride1 ||
            true !== prop1 ||
            true === closure_8 ||
            closure_9;
          if (!tmp2) {
            const result = cResult.trackExperimentExposure(
              closure_3,
              logger,
              cResult.location,
              closure_5,
              revision1,
              trackedVariantId1,
              closure_1,
            );
          }
        }, items5);
        tmp20 = prop1;
      }
      return tmp20;
    },
    getConfig(location, autoTrackExposure) {
      let exposureTrackingEnabled;
      let tmp7;
      let tmp8;
      let useAsEligibility;
      const tmp3 = closure_1(closure_5, location);
      let tmpResult;
      if ("guild" === closure_5) {
        const obj = { location: location.location };
        tmpResult = closure_1("user", obj);
      }
      [tmp7, tmp8] = registerExperiment.getEvaluationAndAssignment(closure_5, tmp3, logger, tmpResult);
      let variantId;
      _slicedToArray(registerExperiment.getEvaluationAndAssignment(closure_5, tmp3, logger, tmpResult), 2);
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
        exposureTrackingEnabled = tmp8.exposureTrackingEnabled;
      }
      if (tmp8 != null) {
        useAsEligibility = tmp8.useAsEligibility;
      }
      let tmp13 = null;
      if (null != tmp8) {
        if (tmp8 !== closure_3) {
          closure_3 = tmp8;
          closure_8 = computeVariantConfig(tmp8);
        }
        tmp13 = closure_8;
      }
      autoTrackExposure = undefined;
      if (autoTrackExposure != null) {
        autoTrackExposure = autoTrackExposure.autoTrackExposure;
      }
      const tmp16 =
        false !== autoTrackExposure &&
        null != tmp7 &&
        null != trackedVariantId &&
        null != revision &&
        false === isOverride &&
        true === exposureTrackingEnabled &&
        true !== useAsEligibility &&
        null != tmp13;
      if (tmp16) {
        const result = registerExperiment.trackExperimentExposure(
          tmp7,
          logger,
          location.location,
          closure_5,
          revision,
          trackedVariantId,
          tmp3,
        );
      }
      if (null != variantId) {
        return tmp13;
      }
      tmp13 = closure_7;
    },
  };
  return obj2;
}
