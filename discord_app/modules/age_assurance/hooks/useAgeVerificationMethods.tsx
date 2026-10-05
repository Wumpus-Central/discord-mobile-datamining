// === Module 8267: useAgeVerificationMethods ===

// Module 8267 (useAgeVerificationMethods)
import intl3 from "intl" /* 1126 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5409 */;
import MetricEvents from "MetricEvents" /* 5414 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import AgeVerificationURLActionCreators from "AgeVerificationURLActionCreators" /* 8091 */;
import GoogleWalletExperiment from "GoogleWalletExperiment" /* 8268 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AgeVerificationStore from "AgeVerificationStore" /* 8131 */;
import AgeVerificationConstants from "AgeVerificationConstants" /* 8085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, id;

let metroImportAll;
let metroImportDefault;
let _slicedToArray = _slicedToArray_mod;
({ VERIFICATION_METHOD_TITLE_MAP: metroImportDefault, VerificationMethod: metroImportAll } = AgeVerificationConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let classificationId;
  let initiateAgeVerification;
  let onClose;
  let onGoogleWalletSelect;
  let tmp12;
  let tmp5;
  let tmp6;
  let obj = onGoogleWalletSelect(initiateAgeVerification[6]);
  const cResult = obj.c(22);
  ({ onClose, classificationId, onGoogleWalletSelect } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AgeVerificationStore];
    const fn = function u() {
      return { methods: AgeVerificationStore.methods, loading: AgeVerificationStore.loading };
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmp2Result = onGoogleWalletSelect(initiateAgeVerification[7]);
  const stateFromStoresObject = tmp2Result.useStateFromStoresObject(tmp5, tmp6);
  const methods = stateFromStoresObject.methods;
  if (cResult[2] === classificationId) {
    let tmp9;
    let tmp14;
    let tmp17;
    if (cResult[3] === onClose) {
      tmp9 = cResult[4];
    }
    const tmp2Result2 = onGoogleWalletSelect(initiateAgeVerification[9]);
    initiateAgeVerification = tmp2Result2.useInitiateAgeVerification(tmp9).initiateAgeVerification;
    let tmp11 = _slicedToArray(react.useState(false), 2);
    [tmp12, _asyncToGenerator] = tmp11;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
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
      tmp14 = items1;
    } else {
      class S {
        constructor() {
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      tmp14 = cResult[6];
    }
    const effect = react.useEffect(S, tmp14);
    if (cResult[7] !== methods) {
      class S {
        constructor() {
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      const items2 = [methods];
      cResult[7] = methods;
      cResult[8] = tmp18;
      cResult[9] = items2;
      tmp17 = items2;
    } else {
      class S {
        constructor() {
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      tmp17 = cResult[9];
    }
    const effect1 = react.useEffect(tmp18, tmp17);
    if (cResult[10] === initiateAgeVerification) {
      class S {
        constructor() {
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
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
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
      const mapped = arr4.map((id) => {
        let description;
        let intl;
        let intl2;
        let title;
        if (null == closure_1_7[id]) {
          return null;
        } else {
          let obj = {
            id,
            title: intl.string(title),
            description: intl2.string(description),
            onClick: function() {
                return closure_1(...arguments);
              }
          };
          ({ title, description } = closure_1_7[id]);
          intl = onGoogleWalletSelect(initiateAgeVerification[15]).intl;
          intl2 = onGoogleWalletSelect(initiateAgeVerification[15]).intl;
          let closure_1 = _asyncToGenerator(async (arg0) => {
            let closure_0;
            let v1;
            id = arg0;
            if (c1 === 2) {
              c1 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp2 === 3) {
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
                    const tmp11 = id(initiateAgeVerification[8]);
                    const trackAgeVerificationModalClicked = tmp11.trackAgeVerificationModalClicked;
                    const result = trackAgeVerificationModalClicked(id, id(initiateAgeVerification[8]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, id(initiateAgeVerification[8]).AgeVerificationModalCta.METHOD_SELECT, id);
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
              } catch (tmp4) {
                c1 = 3;
                throw tmp4;
              }
            }
          });
          return obj;
        }
      });
      found = mapped.filter((item) => null != item);
    }
    if (found == null) {
      class S {
        constructor() {
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
            }
          });
          return () => {
            c0 = true;
          };
        }
      }
    }
    let tmp23 = found;
    if (tmp12) {
      class S {
        constructor() {
          let c0 = false;
          let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
          let result = obj.checkGoogleWalletAvailable();
          result.then((result) => {
            let items;
            if (!c0) {
              const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
              const increment = MonitoringAgentDefault.increment;
              MonitoringAgentDefault;
              const _HermesInternal = HermesInternal;
              items = ["available:" + result];
              increment(obj);
              if (result) {
                const tmp6Result = GoogleWalletExperiment;
                result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
              }
              _asyncToGenerator(result);
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
            let c0 = false;
            let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
            let result = obj.checkGoogleWalletAvailable();
            result.then((result) => {
              let items;
              if (!c0) {
                const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
                const increment = MonitoringAgentDefault.increment;
                MonitoringAgentDefault;
                const _HermesInternal = HermesInternal;
                items = ["available:" + result];
                increment(obj);
                if (result) {
                  const tmp6Result = GoogleWalletExperiment;
                  result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
                }
                _asyncToGenerator(result);
              }
            });
            return () => {
              c0 = true;
            };
          }
        }
        tmp23 = found;
        if (null != closure_7[constants.GOOGLE_WALLET]) {
          let tmp25;
          let tmp24;
          class S {
            constructor() {
              let c0 = false;
              let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
              let result = obj.checkGoogleWalletAvailable();
              result.then((result) => {
                let items;
                if (!c0) {
                  const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
                  const increment = MonitoringAgentDefault.increment;
                  MonitoringAgentDefault;
                  const _HermesInternal = HermesInternal;
                  items = ["available:" + result];
                  increment(obj);
                  if (result) {
                    const tmp6Result = GoogleWalletExperiment;
                    result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
                  }
                  _asyncToGenerator(result);
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
                let c0 = false;
                let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                let result = obj.checkGoogleWalletAvailable();
                result.then((result) => {
                  let items;
                  if (!c0) {
                    const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
                    const increment = MonitoringAgentDefault.increment;
                    MonitoringAgentDefault;
                    const _HermesInternal = HermesInternal;
                    items = ["available:" + result];
                    increment(obj);
                    if (result) {
                      const tmp6Result = GoogleWalletExperiment;
                      result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
                    }
                    _asyncToGenerator(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
            const stringResult = obj6.string(closure_7[constants.GOOGLE_WALLET].title);
            let intl = onGoogleWalletSelect(tmp3[15]).intl;
            const stringResult1 = intl.string(closure_7[constants.GOOGLE_WALLET].description);
            cResult[15] = stringResult1;
            cResult[16] = stringResult;
            tmp25 = stringResult;
            tmp24 = stringResult1;
          } else {
            class S {
              constructor() {
                let c0 = false;
                let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                let result = obj.checkGoogleWalletAvailable();
                result.then((result) => {
                  let items;
                  if (!c0) {
                    const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
                    const increment = MonitoringAgentDefault.increment;
                    MonitoringAgentDefault;
                    const _HermesInternal = HermesInternal;
                    items = ["available:" + result];
                    increment(obj);
                    if (result) {
                      const tmp6Result = GoogleWalletExperiment;
                      result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
                    }
                    _asyncToGenerator(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
            tmp25 = cResult[16];
          }
          if (cResult[17] !== onGoogleWalletSelect) {
            class S {
              constructor() {
                let c0 = false;
                let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                let result = obj.checkGoogleWalletAvailable();
                result.then((result) => {
                  let items;
                  if (!c0) {
                    const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
                    const increment = MonitoringAgentDefault.increment;
                    MonitoringAgentDefault;
                    const _HermesInternal = HermesInternal;
                    items = ["available:" + result];
                    increment(obj);
                    if (result) {
                      const tmp6Result = GoogleWalletExperiment;
                      result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
                    }
                    _asyncToGenerator(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
            tmp29[0] = tmp32.GOOGLE_WALLET;
            tmp29[1] = tmp25;
            tmp29[2] = tmp24;
            tmp29[3] = function onClick(modalSessionId) {
              const obj = MonitoringAgentDefault;
              const obj2 = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
              obj.increment(obj2);
              const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
              AgeVerificationAnalyticsUtils;
              const result = trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT, metroImportAll.GOOGLE_WALLET);
              onGoogleWalletSelect();
            };
            cResult[17] = onGoogleWalletSelect;
            cResult[18] = tmp29;
          } else {
            class S {
              constructor() {
                let c0 = false;
                let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
                let result = obj.checkGoogleWalletAvailable();
                result.then((result) => {
                  let items;
                  if (!c0) {
                    const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
                    const increment = MonitoringAgentDefault.increment;
                    MonitoringAgentDefault;
                    const _HermesInternal = HermesInternal;
                    items = ["available:" + result];
                    increment(obj);
                    if (result) {
                      const tmp6Result = GoogleWalletExperiment;
                      result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
                    }
                    _asyncToGenerator(result);
                  }
                });
                return () => {
                  c0 = true;
                };
              }
            }
          }
          const items3 = [];
          items3[HermesBuiltin.arraySpread(items3, found, 0)] = tmp29;
          tmp23 = items3;
        }
      }
    }
    cResult[10] = initiateAgeVerification;
    cResult[11] = methods;
    cResult[12] = onGoogleWalletSelect;
    cResult[13] = tmp12;
    cResult[14] = tmp23;
  }
  let obj2 = { onComplete: onClose, entryPoint: onGoogleWalletSelect(tmp3[8]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  cResult[2] = classificationId;
  cResult[3] = onClose;
  cResult[4] = obj2;
  tmp9 = obj2;
}) : ((onGoogleWalletSelect) => {
  let classificationId;
  let closure_4;
  let first;
  let onClose;
  onGoogleWalletSelect = onGoogleWalletSelect.onGoogleWalletSelect;
  let initiateAgeVerification;
  first = undefined;
  _slicedToArray = undefined;
  ({ onClose, classificationId } = onGoogleWalletSelect);
  let obj = onGoogleWalletSelect(initiateAgeVerification[7]);
  let items = [AgeVerificationStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ methods: AgeVerificationStore.methods, loading: AgeVerificationStore.loading }));
  const methods = stateFromStoresObject.methods;
  const loading = stateFromStoresObject.loading;
  let obj2 = onGoogleWalletSelect(initiateAgeVerification[9]);
  let obj3 = { onComplete: onClose, entryPoint: onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalEntryPoint.EXPRESSIVE_GET_STARTED, shouldShowExpressiveModal: true, classificationId };
  initiateAgeVerification = obj2.useInitiateAgeVerification(obj3).initiateAgeVerification;
  [first, _slicedToArray] = react.useState(false);
  const effect = react.useEffect(() => {
    let c0 = false;
    let obj = onGoogleWalletSelect(initiateAgeVerification[10]);
    let result = obj.checkGoogleWalletAvailable();
    result.then((result) => {
      let items;
      if (!c0) {
        const obj = { name: MetricEvents.MetricEvents.GOOGLE_WALLET_AVAILABILITY_CHECK, tags: items };
        const increment = MonitoringAgentDefault.increment;
        MonitoringAgentDefault;
        const _HermesInternal = HermesInternal;
        items = ["available:" + result];
        increment(obj);
        if (result) {
          const tmp6Result = GoogleWalletExperiment;
          result = tmp6Result.isGoogleWalletEnabled("age_verification_methods");
        }
        closure_4(result);
      }
    });
    return () => {
      c0 = true;
    };
  }, []);
  const items1 = [methods];
  const effect1 = react.useEffect(() => {
    if (null == methods) {
      const obj = AgeVerificationURLActionCreators;
      const ageVerificationMethods = obj.getAgeVerificationMethods();
    }
  }, items1);
  const items2 = [methods, first, onGoogleWalletSelect, initiateAgeVerification];
  let obj4 = {
    ageVerificationMethods: react.useMemo(() => {
      let intl;
      let intl2;
      let found1;
      if (methods != null) {
        const found = methods.filter((item) => item !== constants.GOOGLE_WALLET);
        const mapped = found.map((id) => {
          let description;
          let intl;
          let intl2;
          let title;
          if (null == closure_1_7[id]) {
            return null;
          } else {
            let obj = {
              id,
              title: intl.string(title),
              description: intl2.string(description),
              onClick: function() {
                  return closure_1(...arguments);
                }
            };
            ({ title, description } = closure_1_7[id]);
            intl = onGoogleWalletSelect(initiateAgeVerification[15]).intl;
            intl2 = onGoogleWalletSelect(initiateAgeVerification[15]).intl;
            let closure_1 = first(function*(arg0) {
              let closure_0;
              let v1;
              id = arg0;
              if (c1 === 2) {
                c1 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
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
                      const tmp11 = id(initiateAgeVerification[8]);
                      const trackAgeVerificationModalClicked = tmp11.trackAgeVerificationModalClicked;
                      const result = trackAgeVerificationModalClicked(id, id(initiateAgeVerification[8]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, id(initiateAgeVerification[8]).AgeVerificationModalCta.METHOD_SELECT, id);
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
                } catch (tmp4) {
                  c1 = 3;
                  throw tmp4;
                }
              }
            });
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
          if (null != metroImportDefault[metroImportAll.GOOGLE_WALLET]) {
            let obj = {
              id: tmp5.GOOGLE_WALLET,
              title: intl.string(tmp6.title),
              description: intl2.string(tmp6.description),
              onClick(modalSessionId) {
                      const obj = methods(initiateAgeVerification[11]);
                      const obj2 = { name: onGoogleWalletSelect(initiateAgeVerification[12]).MetricEvents.GOOGLE_WALLET_METHOD_SELECTED };
                      obj.increment(obj2);
                      const trackAgeVerificationModalClicked = onGoogleWalletSelect(initiateAgeVerification[8]).trackAgeVerificationModalClicked;
                      onGoogleWalletSelect(initiateAgeVerification[8]);
                      const result = trackAgeVerificationModalClicked(modalSessionId, onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, onGoogleWalletSelect(initiateAgeVerification[8]).AgeVerificationModalCta.METHOD_SELECT, constants.GOOGLE_WALLET);
                      closure_1_0();
                    }
            };
            intl = intl3.intl;
            intl2 = intl3.intl;
            const items = [];
            items[HermesBuiltin.arraySpread(items, found1, 0)] = obj;
            return items;
          }
        }
      }
      return found1;
    }, items2),
    loading
  };
  return obj4;
});
let result = size.fileFinishedImporting("modules/age_assurance/hooks/useAgeVerificationMethods.tsx");

export default tmp3;