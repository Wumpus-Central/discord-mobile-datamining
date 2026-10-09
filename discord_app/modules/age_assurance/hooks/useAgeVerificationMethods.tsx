// === Module 7692: useAgeVerificationMethods ===

// Module 7692 (useAgeVerificationMethods)
import util from "util" /* 1126 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5726 */;
import MetricEvents from "MetricEvents" /* 5731 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 5916 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 7510 */;
import GoogleWalletExperiment from "GoogleWalletExperiment" /* 7693 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AgeVerificationStore from "AgeVerificationStore" /* 5914 */;

require = fn;
const AgeVerificationConstants = fn(5915);
({ VERIFICATION_METHOD_TITLE_MAP: closure_7, VerificationMethod: closure_8 } = AgeVerificationConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useAgeVerificationMethods(arg0) {
  const cResult = onGoogleWalletSelect(initiateAgeVerification[6]).c(22);
  ({ onClose, classificationId, onGoogleWalletSelect } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AgeVerificationStore];
    const fn = function u() {
      return { methods: AgeVerificationStore.methods, loading: AgeVerificationStore.loading };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = onGoogleWalletSelect(initiateAgeVerification[6]);
  const stateFromStoresObject = onGoogleWalletSelect(initiateAgeVerification[7]).useStateFromStoresObject(tmp4, tmp5);
  const methods = stateFromStoresObject.methods;
  if (cResult[2] === classificationId) {
    if (cResult[3] === onClose) {
      let tmp8 = cResult[4];
    }
    initiateAgeVerification = onGoogleWalletSelect(tmp2[9]).useInitiateAgeVerification(tmp8).initiateAgeVerification;
    const tmpResult2 = onGoogleWalletSelect(tmp2[9]);
    [tmp11, asyncGeneratorStep] = noop.useState(false);
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      const items1 = [];
      cResult[5] = S;
      cResult[6] = items1;
      let tmp13 = items1;
    } else {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      tmp13 = cResult[6];
    }
    const effect = noop.useEffect(S, tmp13);
    if (cResult[7] !== methods) {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      const items2 = [methods];
      cResult[7] = methods;
      cResult[8] = tmp17;
      cResult[9] = items2;
      let tmp16 = items2;
    } else {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      tmp16 = cResult[9];
    }
    const effect1 = noop.useEffect(tmp17, tmp16);
    if (cResult[10] === initiateAgeVerification) {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
    let found;
    if (methods != null) {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      const mapped = arr4.map((id) => {
        if (null == dependencyMap[id]) {
          return null;
        } else {
          let obj = { id, title: null, description: null, onClick: null };
          ({ title, description } = tmp);
          const intl = onGoogleWalletSelect(initiateAgeVerification[15]).intl;
          obj.title = intl.string(title);
          const intl2 = onGoogleWalletSelect(initiateAgeVerification[15]).intl;
          obj.description = intl2.string(description);
          closure_1 = asyncGeneratorStep(async (arg0) => {
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              try {
                c1 = 2;
                if (0 === v1) {
                  if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const obj5 = id(5916);
                    const result = obj5.trackAgeVerificationModalClicked(id, id(5916).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, id(5916).AgeVerificationModalCta.METHOD_SELECT, id);
                    v1 = 1;
                    c1 = 1;
                    const obj4 = { value: v1(id), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c1 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c1 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  c1 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp5) {
                c1 = tmp;
                throw tmp5;
              }
            }
          });
          obj.onClick = function onClick() {
            const self = this;
            const apply = closure_1.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          return obj;
        }
      });
      found = mapped.filter((item) => null != item);
    }
    if (found == null) {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
    let tmp22 = found;
    if (tmp11) {
      class S {
        constructor() {
          c0 = false;
          obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          result = obj.checkGoogleWalletAvailable();
          nextPromise = result.then((result) => {
            if (!c0) {
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
              const _HermesInternal = HermesInternal;
              const items = ["available:" + result];
              obj2.tags = items;
              MonitoringAgentDefault.increment(obj2);
              if (result) {
                result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                const tmp4Result = GoogleWalletExperiment;
              }
              asyncGeneratorStep(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      if (null != onGoogleWalletSelect) {
        class S {
          constructor() {
            c0 = false;
            obj = onGoogleWalletSelect(initiateAgeVerification[10]);
            result = obj.checkGoogleWalletAvailable();
            nextPromise = result.then((result) => {
              if (!c0) {
                const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
                const _HermesInternal = HermesInternal;
                const items = ["available:" + result];
                obj2.tags = items;
                MonitoringAgentDefault.increment(obj2);
                if (result) {
                  result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                  const tmp4Result = GoogleWalletExperiment;
                }
                asyncGeneratorStep(result);
              }
            });
            return () => {
              c0 = true;
            };
          }
        }
        let GOOGLE_WALLET = constants;
        tmp22 = found;
        if (null != dependencyMap[constants.GOOGLE_WALLET]) {
          class S {
            constructor() {
              c0 = false;
              obj = onGoogleWalletSelect(initiateAgeVerification[10]);
              result = obj.checkGoogleWalletAvailable();
              nextPromise = result.then((result) => {
                if (!c0) {
                  const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
                  const _HermesInternal = HermesInternal;
                  const items = ["available:" + result];
                  obj2.tags = items;
                  MonitoringAgentDefault.increment(obj2);
                  if (result) {
                    result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                    const tmp4Result = GoogleWalletExperiment;
                  }
                  asyncGeneratorStep(result);
                }
              });
              return () => {
                c0 = true;
              };
            }
          }
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                c0 = false;
                obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                result = obj.checkGoogleWalletAvailable();
                nextPromise = result.then((result) => {
                  if (!c0) {
                    const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
                    const _HermesInternal = HermesInternal;
                    const items = ["available:" + result];
                    obj2.tags = items;
                    MonitoringAgentDefault.increment(obj2);
                    if (result) {
                      result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                      const tmp4Result = GoogleWalletExperiment;
                    }
                    asyncGeneratorStep(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
            const stringResult = obj6.string(tmp32.title);
            let intl = onGoogleWalletSelect(tmp2[15]).intl;
            const stringResult1 = intl.string(tmp32.description);
            cResult[15] = stringResult1;
            cResult[16] = stringResult;
            let tmp24 = stringResult;
            const tmp23 = stringResult1;
          } else {
            class S {
              constructor() {
                c0 = false;
                obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                result = obj.checkGoogleWalletAvailable();
                nextPromise = result.then((result) => {
                  if (!c0) {
                    const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
                    const _HermesInternal = HermesInternal;
                    const items = ["available:" + result];
                    obj2.tags = items;
                    MonitoringAgentDefault.increment(obj2);
                    if (result) {
                      result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                      const tmp4Result = GoogleWalletExperiment;
                    }
                    asyncGeneratorStep(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
            tmp24 = cResult[16];
          }
          if (cResult[17] !== onGoogleWalletSelect) {
            class S {
              constructor() {
                c0 = false;
                obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                result = obj.checkGoogleWalletAvailable();
                nextPromise = result.then((result) => {
                  if (!c0) {
                    const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
                    const _HermesInternal = HermesInternal;
                    const items = ["available:" + result];
                    obj2.tags = items;
                    MonitoringAgentDefault.increment(obj2);
                    if (result) {
                      result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                      const tmp4Result = GoogleWalletExperiment;
                    }
                    asyncGeneratorStep(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
            GOOGLE_WALLET = GOOGLE_WALLET.GOOGLE_WALLET;
            tmp28[0] = GOOGLE_WALLET;
            tmp28[1] = tmp24;
            tmp28[2] = tmp23;
            tmp28[3] = function onClick(modalSessionId) {
              const obj = MonitoringAgentDefault;
              obj.increment({ name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_SELECTED });
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
              const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT, constants.GOOGLE_WALLET);
              onGoogleWalletSelect();
            };
            cResult[17] = onGoogleWalletSelect;
            cResult[18] = tmp28;
          } else {
            class S {
              constructor() {
                c0 = false;
                obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                result = obj.checkGoogleWalletAvailable();
                nextPromise = result.then((result) => {
                  if (!c0) {
                    const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
                    const _HermesInternal = HermesInternal;
                    const items = ["available:" + result];
                    obj2.tags = items;
                    MonitoringAgentDefault.increment(obj2);
                    if (result) {
                      result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
                      const tmp4Result = GoogleWalletExperiment;
                    }
                    asyncGeneratorStep(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
          }
          const items3 = [];
          items3[HermesBuiltin.arraySpread(found, 0)] = tmp28;
        }
      }
    }
    cResult[10] = initiateAgeVerification;
    cResult[11] = methods;
    cResult[12] = onGoogleWalletSelect;
    cResult[13] = tmp11;
    cResult[14] = tmp22;
    const tmp10 = _slicedToArray(noop.useState(false), 2);
  }
  let obj2 = { onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  cResult[2] = classificationId;
  cResult[3] = onClose;
  cResult[4] = obj2;
  tmp8 = obj2;
  const tmpResult = onGoogleWalletSelect(initiateAgeVerification[7]);
}) : (function useAgeVerificationMethods(onGoogleWalletSelect) {
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  let initiateAgeVerification;
  first = undefined;
  _slicedToArray = undefined;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let items = [AgeVerificationStore];
  const stateFromStoresObject = onGoogleWalletSelect(initiateAgeVerification[7]).useStateFromStoresObject(items, () => ({ methods: AgeVerificationStore.methods, loading: AgeVerificationStore.loading }));
  const methods = stateFromStoresObject.methods;
  let obj = onGoogleWalletSelect(initiateAgeVerification[7]);
  let obj2 = onGoogleWalletSelect(initiateAgeVerification[9]);
  initiateAgeVerification = obj2.useInitiateAgeVerification({ onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId }).initiateAgeVerification;
  [first, _slicedToArray] = noop.useState(false);
  const effect = noop.useEffect(() => {
    c0 = false;
    let result = onGoogleWalletSelect(initiateAgeVerification[10]).checkGoogleWalletAvailable();
    result.then((result) => {
      if (!c0) {
        const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: null };
        const _HermesInternal = HermesInternal;
        const items = ["available:" + result];
        obj2.tags = items;
        MonitoringAgentDefault.increment(obj2);
        if (result) {
          result = GoogleWalletExperiment.isGoogleWalletEnabled("age_verification_methods");
          const tmp4Result = GoogleWalletExperiment;
        }
        closure_4(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  const items1 = [methods];
  const effect1 = noop.useEffect(() => {
    if (null == methods) {
      const ageVerificationMethods = AgeVerificationURLActionCreators.getAgeVerificationMethods();
    }
  }, items1);
  const items2 = [methods, first, onGoogleWalletSelect, initiateAgeVerification];
  let obj3 = { onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  return {
    ageVerificationMethods: noop.useMemo(() => {
      let found1;
      if (methods != null) {
        const found = methods.filter((item) => item !== constants.GOOGLE_WALLET);
        const mapped = found.map((id) => {
          if (null == closure_1_7[id]) {
            return null;
          } else {
            let obj = { id, title: null, description: null, onClick: null };
            ({ title, description } = tmp);
            const intl = onGoogleWalletSelect(1126).intl;
            obj.title = intl.string(title);
            const intl2 = onGoogleWalletSelect(1126).intl;
            obj.description = intl2.string(description);
            closure_1 = first(function*(arg0) {
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                try {
                  c1 = 2;
                  if (0 === v1) {
                    if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      const obj5 = id(5916);
                      const result = obj5.trackAgeVerificationModalClicked(id, id(5916).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, id(5916).AgeVerificationModalCta.METHOD_SELECT, id);
                      v1 = 1;
                      c1 = 1;
                      const obj4 = { value: v1(id), done: false };
                      return obj4;
                    }
                  } else if (arg0 === 1) {
                    c1 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c1 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    c1 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp5) {
                  c1 = tmp;
                  throw tmp5;
                }
              }
            });
            obj.onClick = function onClick() {
              const self = this;
              const apply = closure_1.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            return obj;
          }
        });
        found1 = mapped.filter((item) => null != item);
      }
      if (found1 == null) {
        found1 = [];
      }
      if (first) {
        if (null != onGoogleWalletSelect) {
          if (null != dependencyMap[constants.GOOGLE_WALLET]) {
            let obj = { id: tmp3.GOOGLE_WALLET, title: null, description: null, onClick: null };
            let intl = util.intl;
            obj.title = intl.string(tmp4.title);
            let intl2 = util.intl;
            obj.description = intl2.string(tmp4.description);
            obj.onClick = function onClick(modalSessionId) {
              const obj = methods(initiateAgeVerification[11]);
              obj.increment({ name: onGoogleWalletSelect(initiateAgeVerification[12]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED });
              const obj2 = { name: onGoogleWalletSelect(initiateAgeVerification[12]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
              const result = onGoogleWalletSelect(initiateAgeVerification[8]).trackAgeVerificationModalClicked(modalSessionId, onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalCta.METHOD_SELECT, constants.GOOGLE_WALLET);
              closure_1_0();
            };
            const items = [];
            items[HermesBuiltin.arraySpread(found1, 0)] = obj;
            return items;
          }
        }
      }
      return found1;
    }, items2),
    loading: stateFromStoresObject.loading
  };
});