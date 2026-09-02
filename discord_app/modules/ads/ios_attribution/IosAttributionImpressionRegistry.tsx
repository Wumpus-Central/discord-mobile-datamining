// === Module 11313: isCurrentImpression ===

// Module 11313 (isCurrentImpression)
import timestampDefault from "timestamp" /* 3 */;
import getActiveIosAttributionFramework from "getActiveIosAttributionFramework" /* 11311 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

require = arg1;
function isCurrentImpression(arg0, arg1) {
  return map.get(arg0) === arg1;
}
function discardIfCurrent(arg0, arg1) {
  if (map.get(arg0) === arg1) {
    map.delete(arg0);
  }
}
function endImpressionToken(arg0) {
  if (null != arg0) {
    obj = getActiveIosAttributionFramework;
    getActiveIosAttributionFramework.endImpression(arg0).catch(() => {

    });
    const endImpressionResult = getActiveIosAttributionFramework.endImpression(arg0);
  }
}
function _startNativeImpression() {
  const self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          logger = 2;
          if (0 === signAbort) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp5;
              dependencyMap = tmp2;
              let callback;
              dependencyMap = undefined;
              c2 = undefined;
              signAbort = undefined;
              ({ impressionId: c0, metadataSealed: c1, framework: c2, impression: c3 } = callback);
              logger = undefined;
              let set;
              let callback2;
              let callback3;
              signAbort = 1;
              logger = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let tmp = dependencyMap;
              tmp = c2;
              tmp = signAbort;
              tmp = c2;
              tmp = signAbort[c2];
              tmp = null;
              let viewThroughSpec;
              if (tmp != null) {
                viewThroughSpec = tmp.viewThroughSpec;
              }
              logger = viewThroughSpec;
              if (null == logger) {
                const _HermesInternal = HermesInternal;
                logger.warn("No strategy for " + c2 + "; impression " + callback + " is unattributed");
                const result = callback(11312).trackIosAttributionImpression(callback(11312).IosAttributionImpressionResult.NO_FRAMEWORK, c2);
                callback3(callback, signAbort);
                logger = 3;
                return { value: "HermesInternal", done: null };
              } else {
                tmp = dependencyMap;
                tmp = c2;
                tmp = callback;
                tmp = dependencyMap;
                const obj2 = { metadataSealed: null, impressionId: null, specs: null, signal: null };
                tmp = dependencyMap;
                obj2[0] = dependencyMap;
                tmp = callback;
                obj2[1] = callback;
                tmp = logger;
                const items = [logger];
                obj2[2] = items;
                tmp = signAbort;
                obj2[3] = signAbort.signAbort.signal;
                signAbort = 2;
                logger = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = callback(11315).fetchIosAttributionSignedPayloads(obj2);
                return obj3;
              }
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                logger = 3;
                let obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                set = arg1;
                tmp = signAbort;
                if (callback2(callback, signAbort)) {
                  let tmp38 = null;
                  if (null != set) {
                    tmp38 = (function findPayload(closure_5) {
                      const atResult = closure_5.at(0);
                      let payload;
                      if (atResult != null) {
                        payload = atResult.payload;
                      }
                      if (payload == null) {
                        payload = null;
                      }
                      return payload;
                    })(set);
                  }
                  callback2 = tmp38;
                  if (null == callback2) {
                    let obj6 = callback(11312);
                    const result1 = obj6.trackIosAttributionImpression(callback(11312).IosAttributionImpressionResult.SIGN_FAILED, c2, callback);
                    set.delete(callback);
                    logger = 3;
                    const obj5 = { value: null, done: true };
                    obj5[0] = undefined;
                    return obj5;
                  } else {
                    obj4 = callback(11311);
                    const _JSON = JSON;
                    signAbort = 3;
                    logger = 1;
                    obj6 = { value: null, done: false };
                    obj6[0] = obj4.startImpression(callback, c2, JSON.stringify(callback2));
                    return obj6;
                  }
                } else {
                  logger = 3;
                }
              }
            } else if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              callback3 = arg1;
              if (!callback2(callback, signAbort)) {
                callback4(callback3);
              }
            }
            if (null == callback3) {
              obj1 = callback(11312);
              const result2 = obj1.trackIosAttributionImpression(callback(11312).IosAttributionImpressionResult.NO_TOKEN, c2, callback);
              set.delete(callback);
              logger = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = undefined;
              return obj8;
            } else {
              obj = callback(11312);
              const result3 = obj.trackIosAttributionImpression(callback(11312).IosAttributionImpressionResult.REGISTERED, c2, callback);
              signAbort.token = callback3;
            }
          }
        } catch (tmp84) {
          logger = tmp;
          throw tmp84;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getImpressionToken() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (logger === 2) {
        logger = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          logger = 2;
          if (0 === num6) {
            num6 = 1;
            if (arg0 === 1) {
              logger = 3;
              throw arg1;
            } else if (arg0 === 2) {
              logger = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              let user = tmp5;
              user = undefined;
              const value = closure_1_5.get(callback);
              user = value;
              if (null == value) {
                const _HermesInternal2 = HermesInternal;
                logger.warn("No tracked impression for " + tmp57 + " at click time; store sheet will be unattributed");
                const obj5 = callback(closure_1_1[4]);
                const result = obj5.trackIosAttributionClick(callback(closure_1_1[4]).IosAttributionClickResult.NO_IMPRESSION, callback(closure_1_1[3]).getActiveIosAttributionFramework(), tmp57);
                logger = 3;
                const obj6 = callback(closure_1_1[3]);
              }
              logger = num6;
              obj1 = { value: null, done: false };
              obj1[0] = value.registration;
              return obj1;
            }
          } else if (arg0 === 1) {
            logger = 3;
            throw arg1;
          } else if (arg0 === 2) {
            logger = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          if (callback2(callback, user)) {
            if (null != user.token) {
              const result1 = callback(user[4]).trackIosAttributionClick(callback(user[4]).IosAttributionClickResult.ATTRIBUTED, user.framework, callback);
              const token = user.token;
              const obj3 = callback(user[4]);
            }
          }
          const _HermesInternal = HermesInternal;
          logger.warn("Impression " + callback + " not registered natively in time; store sheet will be unattributed");
          obj1 = callback(user[4]);
          const result2 = obj1.trackIosAttributionClick(callback(user[4]).IosAttributionClickResult.NOT_READY, user.framework, callback);
        } catch (tmp51) {
          logger = tmp;
          throw tmp51;
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getStoreKitCredential() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === table2) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp5;
              let table = tmp2;
              let impressionId;
              impressionId = impressionId.impressionId;
              table = undefined;
              closure_2 = undefined;
              table2 = 1;
              c4 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              table = impressionId(table[3]).getActiveIosAttributionFramework();
              if (null != table) {
                if (null != table2[table]) {
                  table2 = 2;
                  c4 = 1;
                  const obj2 = { value: null, done: false };
                  obj2[0] = (function getImpressionToken(impressionId) {
                    const self = this;
                    const apply = closure_10.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(impressionId);
                  return obj2;
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_2 = arg1;
            let tmp9;
            if (null != closure_2) {
              obj = { impressionToken: null };
              obj[0] = closure_2;
              tmp9 = obj;
            }
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = tmp9;
            return obj4;
          }
        } catch (tmp19) {
          c4 = tmp;
          throw tmp19;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_11 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = {};
obj = { viewThroughSpec: null };
obj = { kind: require("IosAttributionFramework").IosAttributionFramework.AD_ATTRIBUTION_KIT };
obj[0] = obj;
obj[require("IosAttributionFramework").IosAttributionFramework.AD_ATTRIBUTION_KIT] = obj;
let closure_4 = new timestampDefault("IosAttribution");
const map = new Map();
const tmp2 = new timestampDefault("IosAttribution");
let result = require("set").fileFinishedImporting("modules/ads/ios_attribution/IosAttributionImpressionRegistry.tsx");

export const registerViewThroughImpression = function registerViewThroughImpression(metadataSealed) {
  const impressionId = metadataSealed.impressionId;
  const framework = metadataSealed.framework;
  obj = undefined;
  obj = { framework, token: null, signAbort: null, registration: null };
  const abortController = new AbortController();
  obj[2] = abortController;
  obj[3] = Promise.resolve();
  const result = map.set(impressionId, obj);
  obj.registration = (function startNativeImpression(arg0) {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })({ impressionId, metadataSealed: metadataSealed.metadataSealed, framework, impression: obj }).catch(() => {
    if (closure_1_5.get(impressionId) === closure_1_5) {
      obj.delete(impressionId);
    }
  });
};
export const getStoreKitCredential = function getStoreKitCredential(arg0) {
  const self = this;
  const apply = _getStoreKitCredential.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endImpression = function endImpression(arg0) {
  const value = map.get(arg0);
  if (null != value) {
    map.delete(arg0);
    const signAbort = value.signAbort;
    signAbort.abort();
    const token = value.token;
    if (null != token) {
      const obj2 = getActiveIosAttributionFramework;
      getActiveIosAttributionFramework.endImpression(token).catch(() => {

      });
      const endImpressionResult = getActiveIosAttributionFramework.endImpression(token);
    }
  }
};