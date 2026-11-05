// === Module 19902: AppStoreConsentReinstatement ===

// Module 19902 (AppStoreConsentReinstatement)
import LoggerDefault from "Logger" /* 3 */;
import AppStoreAgeSignalReport from "AppStoreAgeSignalReport" /* 8300 */;
import AppStoreConsentReinstateEndpointExperiment from "AppStoreConsentReinstateEndpointExperiment" /* 19903 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import RegionalFeatureConfigStore from "RegionalFeatureConfigStore" /* 5830 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function isStillCurrentUser(userId) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  return id === userId;
}
function getConsentSession() {
  const currentUser = UserStore.getCurrentUser();
  let tmp2 = null != _null;
  if (tmp2) {
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp2 = _null.userId !== id;
  }
  if (tmp2) {
    _null.decide({ reinstatement: null });
    _null = null;
  }
  if (null == currentUser) {
    return null;
  } else {
    if (null == _null) {
      const promise = new Promise((arg0) => {
        closure_0 = arg0;
      });
      const promise2 = new Promise((arg0) => {
        closure_1 = arg0;
      });
      const obj = {
        userId: currentUser.id,
        enabled: AppStoreConsentReinstateEndpointExperiment.getIsAppStoreConsentReinstateEndpointEnabled("parentalConsentManager"),
        decision: promise,
        decide(reinstatement) {
              let tmp = null == reinstatement.reinstatement;
              if (tmp) {
                tmp = null == obj.reinstatement;
              }
              if (tmp) {
                obj.settled = true;
              }
              closure_0(reinstatement);
            },
        reinstatement: null,
        settled: false,
        cancelled: false,
        cancellation: promise2,
        cancel: dependencyMap
      };
      _null = obj;
      let enabled = obj.enabled;
      if (enabled) {
        let result = AppStoreAgeSignalReport.isAppStoreAgeSignalLaunchPending();
        if (!result) {
          result = AppStoreAgeSignalReport.isAppStoreAgeSignalColdLaunch();
          const tmp19Result2 = AppStoreAgeSignalReport;
        }
        enabled = result;
        const tmp19Result = AppStoreAgeSignalReport;
      }
      if (!enabled) {
        _null.decide({ reinstatement: null });
      }
    }
    return _null;
  }
}
let closure_9 = async function _settleAppStoreConsentReinstatement() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          const tmp61 = getConsentSession();
          closure_128_1 = tmp61;
          if (null != tmp61) {
            if (!tmp61.settled) {
              if (tmp61.enabled) {
                if (tmp62Result.isAppStoreAgeSignalLaunchPending()) {
                  const promise = new Promise((arg0) => {
                    function l() {
                      currentUser = currentUser.getCurrentUser();
                      let id;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      if (id !== closure_2_1.userId) {
                        closure_2_1.decide({ reinstatement: null });
                        if (c6 === closure_2_1) {
                          c6 = null;
                        }
                        l();
                      }
                    }
                    closure_1_4.addChangeListener(l);
                    if (typeof l === "function") {
                      let currentUser = c4.getCurrentUser();
                      let id;
                      if (currentUser != null) {
                        id = currentUser.id;
                      }
                      if (id !== closure_1_1.userId) {
                        closure_1_1.decide({ reinstatement: null });
                        if (c6 === closure_1_1) {
                          c6 = null;
                        }
                        closure_128_0();
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  const promise2 = new Promise((arg0) => {
                    const timeout = setTimeout(arg0, 15000);
                  });
                  c3 = 1;
                  items = [
                    (() => {
                                      closure_0 = closure_2(function*() {
                                        if (c3 === 2) {
                                          c3 = 3;
                                          throw new TypeError("Generator functions may not be called on executing generators");
                                        } else if (tmp3 === 3) {
                                          if (arg0 === 1) {
                                            throw value;
                                          } else if (arg0 === 2) {
                                            const obj2 = { value, done: true };
                                            return obj2;
                                          } else {
                                            return { value: "HermesInternal", done: null };
                                          }
                                        } else {
                                          try {
                                            c3 = 2;
                                            if (0 === c2) {
                                              if (arg0 === 1) {
                                                c3 = 3;
                                                throw value;
                                              } else if (arg0 === 2) {
                                                c3 = 3;
                                                const obj3 = { value, done: true };
                                                return obj3;
                                              } else {
                                                closure_1 = tmp4;
                                                c0 = 0;
                                                let reinstatement;
                                                c2 = 1;
                                                c3 = 1;
                                                const obj4 = { value: closure_1.decision, done: false };
                                                return obj4;
                                              }
                                            } else {
                                              if (1 === tmp4) {
                                                if (arg0 === 1) {
                                                  c3 = 3;
                                                  throw value;
                                                } else if (arg0 === 2) {
                                                  c3 = 3;
                                                  const obj5 = { value, done: true };
                                                  return obj5;
                                                } else {
                                                  reinstatement = value.reinstatement;
                                                  let tmp9 = closure_2_7(closure_1.userId);
                                                  if (tmp9) {
                                                    tmp9 = null != reinstatement;
                                                  }
                                                  if (tmp9) {
                                                    c2 = 2;
                                                    c3 = 1;
                                                    const obj6 = { value: reinstatement, done: false };
                                                    return obj6;
                                                  }
                                                }
                                              } else if (arg0 === 1) {
                                                c3 = 3;
                                                throw value;
                                              } else if (arg0 === 2) {
                                                c3 = 3;
                                                const obj = { value, done: true };
                                                return obj;
                                              }
                                              c3 = 3;
                                              return { value: "HermesInternal", done: null };
                                            }
                                          } catch (tmp15) {
                                            c3 = tmp;
                                            throw tmp15;
                                          }
                                        }
                                      });
                                      return function waitForReinstatement() {
                                        const self = this;
                                        const apply = closure_0.apply;
                                        if (typeof apply === "unknown") {
                                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                                        } else {
                                          applyArgumentsResult = apply(self, arguments);
                                        }
                                        return applyArgumentsResult;
                                      };
                                    })()(),
                    tmp61.cancellation,
                    promise,
                    promise2
                  ];
                  c4 = 2;
                  c5 = 1;
                  let obj4 = { value: Promise.race(items), done: false };
                  return obj4;
                } else {
                  AppStoreAgeSignalReport;
                }
                tmp62Result = AppStoreAgeSignalReport;
              }
            }
          }
          let tmp49 = null != tmp61;
          if (tmp49) {
            tmp49 = !tmp61.cancelled;
          }
          if (tmp49) {
            tmp49 = isStillCurrentUser(tmp61.userId);
          }
          c5 = 3;
          let obj5 = { value: tmp49, done: true };
          return obj5;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        const _clearTimeout3 = clearTimeout;
        clearTimeout(closure_128_2);
        closure_129_4.removeChangeListener(closure_128_0);
        throw closure_2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        const _clearTimeout2 = clearTimeout;
        clearTimeout(closure_128_2);
        closure_129_4.removeChangeListener(closure_128_0);
        c5 = 3;
        let obj6 = { value, done: true };
        return obj6;
      } else {
        const cancelled = closure_128_1.cancelled;
        let tmp11 = !cancelled;
        if (!cancelled) {
          tmp11 = closure_129_7(closure_128_1.userId);
        }
        c3 = 0;
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_128_2);
        closure_129_4.removeChangeListener(closure_128_0);
        c5 = 3;
        let obj = { value: tmp11, done: true };
        return obj;
      }
    } catch (tmp51) {
      closure_2 = tmp51;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp51;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_5 = new LoggerDefault("AppStoreConsentReinstatement");
let c6 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreConsentReinstatement.tsx");

export function isAppStoreConsentReinstatementEnabledForSession() {
  const tmp = getConsentSession();
  let flag;
  if (tmp != null) {
    flag = tmp.enabled;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function cancelAppStoreConsentReinstatement() {
  if (null != c6) {
    obj.decide({ reinstatement: null });
    obj.cancelled = true;
    obj.settled = true;
    obj.cancel();
    c6 = null;
  }
}
export function beginAppStoreConsentReinstatement() {
  let obj = getConsentSession();
  if (null != obj) {
    let str = "android";
    if (obj4.isIOS()) {
      str = "ios";
    }
    if (obj.enabled) {
      if (tmp6Result.isAppStoreAgeSignalColdLaunch()) {
        if (RegionalFeatureConfigStore.isAppStoreConsentRevoked(str)) {
          if (null == obj.reinstatement) {
            const userId = obj.userId;
            const tmp4 = userId(function*() {
              if (logger === 2) {
                logger = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp7 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  let obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  logger = 2;
                  if (0 === c4) {
                    if (arg0 === 1) {
                      logger = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      logger = 3;
                      let obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_0 = tmp8;
                      closure_128_0 = undefined;
                      c3 = 2;
                      c4 = 3;
                      logger = 1;
                      let obj5 = {
                        value: closure_0(tmp4[5]).queueAppStoreAgeSignalSubmit(tmp32(function*() {
                                  if (c3 === 2) {
                                    c3 = 3;
                                    throw new TypeError("Generator functions may not be called on executing generators");
                                  } else if (tmp4 === 3) {
                                    if (arg0 === 1) {
                                      throw value;
                                    } else if (arg0 === 2) {
                                      const obj2 = { value, done: true };
                                      return obj2;
                                    } else {
                                      return { value: "HermesInternal", done: null };
                                    }
                                  } else {
                                    try {
                                      c3 = 2;
                                      if (0 === c2) {
                                        if (arg0 === 1) {
                                          c3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          c3 = 3;
                                          const obj3 = { value, done: true };
                                          return obj3;
                                        } else {
                                          const platform = tmp2;
                                          closure_0 = tmp5;
                                          closure_128_0 = undefined;
                                          closure_128_1 = undefined;
                                          if (closure_2_7(c2)) {
                                            if (obj9.isAppStoreAgeSignalColdLaunch()) {
                                              c2 = 1;
                                              c3 = 1;
                                              const obj4 = { value: closure_2_0(8292).getAppStoreConsentReinstatementProof(), done: false };
                                              return obj4;
                                            }
                                            obj9 = closure_2_0(8300);
                                          }
                                        }
                                      } else if (1 === tmp5) {
                                        if (arg0 === 1) {
                                          c3 = 3;
                                          throw value;
                                        } else if (arg0 === 2) {
                                          c3 = 3;
                                          const obj5 = { value, done: true };
                                          return obj5;
                                        } else {
                                          closure_128_0 = value;
                                          if (null != closure_128_0) {
                                            if (closure_2_7(c2)) {
                                              c2 = 2;
                                              c3 = 1;
                                              const obj7 = { value: closure_2_0(8293).reinstateAppStoreConsent(closure_128_0), done: false };
                                              return obj7;
                                            }
                                          } else {
                                            const obj8 = { platform, outcome: "proof_failed" };
                                            logger.warn("Consent reinstatement proof unavailable", obj8);
                                          }
                                        }
                                      } else if (arg0 === 1) {
                                        c3 = 3;
                                        throw value;
                                      } else if (arg0 === 2) {
                                        c3 = 3;
                                        const obj11 = { value, done: true };
                                        return obj11;
                                      } else {
                                        closure_128_1 = value;
                                        if ("reinstated" !== closure_128_1) {
                                          if ("no_revocation" !== tmp43) {
                                            if ("outside_mandate" !== tmp43) {
                                              if ("verification_failed" !== tmp43) {
                                                obj = { platform, outcome: closure_128_1 };
                                                logger.warn("Consent reinstatement returned an unknown outcome", obj);
                                              }
                                            }
                                          }
                                          const obj12 = { platform, outcome: closure_128_1 };
                                          logger.warn("Consent reinstatement declined", obj12);
                                        }
                                        const obj13 = { platform, outcome: closure_128_1 };
                                        logger.info("Consent reinstatement completed", obj13);
                                      }
                                      c3 = 3;
                                    } catch (tmp37) {
                                      c3 = tmp;
                                      throw tmp37;
                                    }
                                  }
                                })),
                        done: false
                      };
                      return obj5;
                    }
                  } else if (1 === tmp8) {
                    c3 = 0;
                    closure_129_0.settled = true;
                    throw tmp32;
                  } else {
                    if (2 === tmp8) {
                      c3 = 1;
                      closure_128_1 = tmp32;
                      let status;
                      if (closure_128_1 != null) {
                        status = closure_128_1.status;
                      }
                      closure_128_0 = status;
                      const obj6 = { platform: closure_129_1, outcome: null, error: null };
                      str = "request_failed";
                      if (429 === closure_128_0) {
                        str = "rate_limited";
                      }
                      obj6.outcome = str;
                      obj6.error = closure_128_1;
                      logger.warn("Consent reinstatement request failed", obj6);
                      c3 = 0;
                      closure_129_0.settled = true;
                      logger = 3;
                    } else if (arg0 === 1) {
                      logger = 3;
                      throw value;
                    } else if (arg0 !== 2) {
                      c3 = 1;
                    }
                    c3 = 0;
                    closure_129_0.settled = true;
                    logger = 3;
                    obj = { value, done: true };
                    return obj;
                  }
                } catch (tmp32) {
                  if (tmp5 === c3) {
                    logger = tmp3;
                    throw tmp32;
                  } else if (tmp2 === tmp34) {
                    c4 = tmp2;
                  } else {
                    c4 = tmp;
                  }
                }
              }
            })();
            obj.reinstatement = tmp4;
            let obj2 = { reinstatement: tmp4 };
            obj.decide(obj2);
          }
        }
      }
      tmp6Result = tmp6(tmp7[5]);
    }
    obj.decide({ reinstatement: null });
    obj4 = obj(str[6]);
    tmp6 = obj;
    tmp7 = str;
  }
}
export function settleAppStoreConsentReinstatement() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}