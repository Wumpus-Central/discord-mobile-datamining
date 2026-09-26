// discord_app/modules/ads/ios_attribution/IosAttributionImpressionRegistry.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import IosAttributionNativeModule from "IosAttributionNativeModule.tsx";
import IosAttributionMetrics from "IosAttributionMetrics.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function isCurrentImpression(arg0, arg1) {
  return map.get(arg0) === arg1;
}
function discardIfCurrent(arg0, arg1) {
  if (map.get(arg0) === arg1) {
    map.delete(arg0);
  }
}
function endImpressionToken(token) {
  if (null != token) {
    IosAttributionNativeModule.endImpression(token).catch(() => {});
    const endImpressionResult = IosAttributionNativeModule.endImpression(token);
  }
}
let closure_9 = async function _startNativeImpression(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({
            impressionId: closure_129_0,
            metadataSealed: closure_129_1,
            framework: closure_129_2,
            impression: closure_129_3,
          } = closure_0);
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          let viewThroughSpec;
          if (closure_130_3[closure_129_2] != null) {
            viewThroughSpec = tmp104.viewThroughSpec;
          }
          closure_129_4 = viewThroughSpec;
          if (null == closure_129_4) {
            const _HermesInternal = HermesInternal;
            closure_130_4.warn(
              "No strategy for " + closure_129_2 + "; impression " + closure_129_0 + " is unattributed",
            );
            const result = closure_130_0(closure_130_1[4]).trackIosAttributionImpression(
              closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.NO_FRAMEWORK,
              closure_129_2,
            );
            closure_130_7(closure_129_0, closure_129_3);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const obj8 = { metadataSealed: closure_129_1, impressionId: closure_129_0, specs: null, signal: null };
            const items = [closure_129_4];
            obj8.specs = items;
            obj8.signal = closure_129_3.signAbort.signal;
            c3 = 2;
            c4 = 1;
            const obj9 = {
              value: closure_130_0(closure_130_1[5]).fetchIosAttributionSignedPayloads(obj8),
              done: false,
            };
            return obj9;
          }
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_129_5 = value;
            if (closure_130_6(closure_129_0, closure_129_3)) {
              let tmp38 = null;
              if (null != closure_129_5) {
                tmp38 = (function findPayload(arr) {
                  const atResult = arr.at(0);
                  let payload;
                  if (atResult != null) {
                    payload = atResult.payload;
                  }
                  if (payload == null) {
                    payload = null;
                  }
                  return payload;
                })(closure_129_5);
              }
              closure_129_6 = tmp38;
              if (null == closure_129_6) {
                const result1 = closure_130_0(closure_130_1[4]).trackIosAttributionImpression(
                  closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.SIGN_FAILED,
                  closure_129_2,
                  closure_129_0,
                );
                closure_130_5.delete(closure_129_0);
                c4 = 3;
                const obj12 = { value: undefined, done: true };
                return obj12;
              } else {
                const _JSON = JSON;
                c3 = 3;
                c4 = 1;
                const obj13 = {
                  value: closure_130_0(closure_130_1[3]).startImpression(
                    closure_129_0,
                    closure_129_2,
                    JSON.stringify(closure_129_6),
                  ),
                  done: false,
                };
                return obj13;
              }
            } else {
              c4 = 3;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_129_7 = value;
          if (!closure_130_6(closure_129_0, closure_129_3)) {
            closure_130_8(closure_129_7);
          }
        }
        if (null == closure_129_7) {
          const result2 = closure_130_0(closure_130_1[4]).trackIosAttributionImpression(
            closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.NO_TOKEN,
            closure_129_2,
            closure_129_0,
          );
          closure_130_5.delete(closure_129_0);
          c4 = 3;
          const obj16 = { value: undefined, done: true };
          return obj16;
        } else {
          const result3 = closure_130_0(closure_130_1[4]).trackIosAttributionImpression(
            closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.REGISTERED,
            closure_129_2,
            closure_129_0,
          );
          closure_129_3.token = closure_129_7;
          obj = closure_130_0(closure_130_1[4]);
        }
      }
    } catch (tmp84) {
      c4 = tmp;
      throw tmp84;
    }
  }
};
let closure_10 = async function _getImpressionToken(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === num6) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          value = map.get(closure_0);
          closure_129_1 = value;
          if (null == value) {
            const _HermesInternal2 = HermesInternal;
            logger.warn("No tracked impression for " + closure_0 + " at click time; store sheet will be unattributed");
            const obj5 = IosAttributionMetrics;
            const result = obj5.trackIosAttributionClick(
              IosAttributionMetrics.IosAttributionClickResult.NO_IMPRESSION,
              IosAttributionNativeModule.getActiveIosAttributionFramework(),
              closure_0,
            );
            c4 = 3;
          }
          c4 = num6;
          const obj8 = { value: value.registration, done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
      if (closure_130_6(closure_129_0, closure_129_1)) {
        if (null != closure_129_1.token) {
          const result1 = closure_130_0(closure_130_1[4]).trackIosAttributionClick(
            closure_130_0(closure_130_1[4]).IosAttributionClickResult.ATTRIBUTED,
            closure_129_1.framework,
            closure_129_0,
          );
          const token = closure_129_1.token;
          const obj3 = closure_130_0(closure_130_1[4]);
        }
      }
      const _HermesInternal = HermesInternal;
      closure_130_4.warn(
        "Impression " + closure_129_0 + " not registered natively in time; store sheet will be unattributed",
      );
      const result2 = closure_130_0(closure_130_1[4]).trackIosAttributionClick(
        closure_130_0(closure_130_1[4]).IosAttributionClickResult.NOT_READY,
        closure_129_1.framework,
        closure_129_0,
      );
      const obj2 = closure_130_0(closure_130_1[4]);
    } catch (tmp51) {
      c4 = tmp;
      throw tmp51;
    }
  }
};
let closure_11 = async function _getStoreKitCredential(arg0) {
  let impressionId = arg0;
  c3 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp5;
            closure_1 = tmp2;
            let impressionId2;
            impressionId2 = impressionId.impressionId;
            let activeIosAttributionFramework;
            closure_129_2 = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "flex", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            activeIosAttributionFramework = closure_130_0(closure_130_1[3]).getActiveIosAttributionFramework();
            if (null != activeIosAttributionFramework) {
              if (null != closure_130_3[activeIosAttributionFramework]) {
                c3 = 2;
                c4 = 1;
                const obj5 = {
                  value: (function getImpressionToken() {
                    const self = this;
                    const apply = closure_1_10.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(impressionId2),
                  done: false,
                };
                return obj5;
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_2 = value;
          let tmp9;
          if (null != closure_129_2) {
            obj = { impressionToken: closure_129_2 };
            tmp9 = obj;
          }
          c4 = 3;
          const obj7 = { value: tmp9, done: true };
          return obj7;
        }
      } catch (tmp19) {
        c4 = tmp;
        throw tmp19;
      }
    }
  })();
  iter.next();
  return iter;
};
let obj = {};
let obj2 = { viewThroughSpec: { kind: fn(10717).IosAttributionFramework.AD_ATTRIBUTION_KIT } };
obj[fn(10717).IosAttributionFramework.AD_ATTRIBUTION_KIT] = obj2;
let obj3 = { kind: fn(10717).IosAttributionFramework.AD_ATTRIBUTION_KIT };
let closure_4 = new LoggerDefault("IosAttribution");
const map = new Map();
const size = fn(2);
let result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionImpressionRegistry.tsx");

export const registerViewThroughImpression = function registerViewThroughImpression(metadataSealed) {
  const impressionId = metadataSealed.impressionId;
  const framework = metadataSealed.framework;
  const impression = { framework, token: null, signAbort: null, registration: null };
  const abortController = new AbortController();
  impression.signAbort = abortController;
  impression.registration = Promise.resolve();
  const result = map.set(impressionId, impression);
  impression.registration = (function startNativeImpression() {
    const self = this;
    const apply = closure_1_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })({ impressionId, metadataSealed: metadataSealed.metadataSealed, framework, impression }).catch(() => {
    if (map.get(impressionId) === map) {
      map.delete(impressionId);
    }
  });
};
export const getStoreKitCredential = function getStoreKitCredential() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const endImpression = function endImpression(id) {
  value = map.get(id);
  if (null != value) {
    map.delete(id);
    const signAbort = value.signAbort;
    signAbort.abort();
    const token = value.token;
    if (null != token) {
      IosAttributionNativeModule.endImpression(token).catch(() => {});
      const endImpressionResult = IosAttributionNativeModule.endImpression(token);
    }
  }
};
