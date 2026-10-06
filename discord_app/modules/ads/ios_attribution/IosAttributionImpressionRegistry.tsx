// === Module 10949: IosAttributionImpressionRegistry ===

// Module 10949 (IosAttributionImpressionRegistry)
import LoggerDefault from "Logger" /* 3 */;
import IosAttributionNativeModule from "IosAttributionNativeModule" /* 10948 */;
import IosAttributionFramework from "IosAttributionFramework" /* 10950 */;
import IosAttributionMetrics from "IosAttributionMetrics" /* 10951 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let impressionToken;

let obj3;
const f105967 = () => {

};
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
    obj = IosAttributionNativeModule;
    const endImpressionResult = obj.endImpression(token);
    endImpressionResult.catch(f105967);
  }
}
let obj = function _startNativeImpression() {
  obj = _asyncToGenerator(async (impressionId) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let items;
    let obj15;
    let obj5;
    let signAbort;
    function findPayload(arr) {
      const atResult = arr.at(0);
      let payload;
      if (atResult != null) {
        payload = atResult.payload;
      }
      if (payload == null) {
        payload = null;
      }
      return payload;
    }
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (impressionId === 1) {
        throw value;
      } else if (impressionId === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let metadataSealed;
        let viewThroughSpec;
        let closure_5;
        let closure_6;
        let token;
        c4 = 2;
        if (0 === signAbort) {
          if (impressionId === 1) {
            c4 = 3;
            throw value;
          } else if (impressionId === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            impressionId = undefined;
            metadataSealed = undefined;
            c2 = undefined;
            ({ impressionId: c0, metadataSealed: c1, framework: c2, impression: c3 } = closure_0);
            viewThroughSpec = undefined;
            closure_5 = undefined;
            closure_6 = undefined;
            token = undefined;
            signAbort = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === signAbort) {
          if (impressionId === 1) {
            c4 = 3;
            throw value;
          } else if (impressionId === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            viewThroughSpec = undefined;
            if (closure_130_3[c2] != null) {
              viewThroughSpec = tmp102.viewThroughSpec;
            }
            if (null == viewThroughSpec) {
              const _HermesInternal = HermesInternal;
              closure_130_4.warn("No strategy for " + c2 + "; impression " + impressionId + " is unattributed");
              const obj11 = closure_130_0(closure_130_1[4]);
              const result = obj11.trackIosAttributionImpression(closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.NO_FRAMEWORK, c2);
              closure_130_7(impressionId, signAbort);
              c4 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const obj8 = { metadataSealed, impressionId, specs: items, signal: signAbort.signAbort.signal };
              items = [viewThroughSpec];
              signAbort = 2;
              c4 = 1;
              const obj9 = { value: obj15.fetchIosAttributionSignedPayloads(obj8), done: false };
              obj15 = closure_130_0(closure_130_1[5]);
              return obj9;
            }
          }
        } else {
          if (2 === signAbort) {
            if (impressionId === 1) {
              c4 = 3;
              throw value;
            } else if (impressionId === 2) {
              c4 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_5 = value;
              if (closure_130_6(impressionId, signAbort)) {
                let tmp37 = null;
                if (null != closure_5) {
                  tmp37 = findPayload(closure_5);
                }
                closure_6 = tmp37;
                if (null == closure_6) {
                  const obj7 = closure_130_0(closure_130_1[4]);
                  const result1 = obj7.trackIosAttributionImpression(closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.SIGN_FAILED, c2, impressionId);
                  closure_130_5.delete(impressionId);
                  c4 = 3;
                  const obj12 = { value: undefined, done: true };
                  return obj12;
                } else {
                  const _JSON = JSON;
                  signAbort = 3;
                  c4 = 1;
                  const obj13 = { value: obj5.startImpression(impressionId, c2, JSON.stringify(closure_6)), done: false };
                  obj5 = closure_130_0(closure_130_1[3]);
                  return obj13;
                }
              }
            }
          } else if (impressionId === 1) {
            c4 = 3;
            throw value;
          } else if (impressionId === 2) {
            c4 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            token = value;
            if (closure_130_6(impressionId, signAbort)) {
              if (null == token) {
                const obj2 = closure_130_0(closure_130_1[4]);
                const result2 = obj2.trackIosAttributionImpression(closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.NO_TOKEN, c2, impressionId);
                closure_130_5.delete(impressionId);
                c4 = 3;
                const obj16 = { value: undefined, done: true };
                return obj16;
              } else {
                obj = closure_130_0(closure_130_1[4]);
                const result3 = obj.trackIosAttributionImpression(closure_130_0(closure_130_1[4]).IosAttributionImpressionResult.REGISTERED, c2, impressionId);
                signAbort.token = token;
              }
            } else {
              closure_130_8(token);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp83) {
        c4 = 3;
        throw tmp83;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getImpressionToken() {
  let logger;
  obj = _asyncToGenerator(async (arg0) => {
    let value;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let user;
        let token;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            value = map.get(closure_0);
            user = value;
            if (null == value) {
              const _HermesInternal2 = HermesInternal;
              logger.warn("No tracked impression for " + closure_0 + " at click time; store sheet will be unattributed");
              const trackIosAttributionClick = IosAttributionMetrics.trackIosAttributionClick;
              const NO_IMPRESSION = IosAttributionMetrics.IosAttributionClickResult.NO_IMPRESSION;
              const obj5 = IosAttributionNativeModule;
              const result = trackIosAttributionClick(NO_IMPRESSION, obj5.getActiveIosAttributionFramework(), closure_0);
              token = null;
            } else if (null == value.token) {
              c3 = 1;
              c4 = 1;
              const obj7 = { value: value.registration, done: false };
              return obj7;
            }
            c4 = 3;
            const obj8 = { value: token, done: true };
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
        if (closure_130_6(closure_0, user)) {
          if (null != user.token) {
            const obj3 = closure_130_0(closure_130_1[4]);
            const result1 = obj3.trackIosAttributionClick(closure_130_0(closure_130_1[4]).IosAttributionClickResult.ATTRIBUTED, user.framework, closure_0);
            token = user.token;
          }
        }
        const _HermesInternal = HermesInternal;
        closure_130_4.warn("Impression " + closure_0 + " not registered natively in time; store sheet will be unattributed");
        const obj2 = closure_130_0(closure_130_1[4]);
        const result2 = obj2.trackIosAttributionClick(closure_130_0(closure_130_1[4]).IosAttributionClickResult.NOT_READY, user.framework, closure_0);
        token = null;
      } catch (tmp48) {
        c4 = 3;
        throw tmp48;
      }
    }
  });
  return obj(...arguments);
};
obj = function _getStoreKitCredential() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let impressionId = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0) => {
      function getImpressionToken() {
        return closure_1_10(...arguments);
      }
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let activeIosAttributionFramework;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              impressionId = undefined;
              impressionId = impressionId.impressionId;
              activeIosAttributionFramework = undefined;
              impressionToken = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              const obj8 = closure_130_0(closure_130_1[3]);
              activeIosAttributionFramework = obj8.getActiveIosAttributionFramework();
              if (null != activeIosAttributionFramework) {
                if (null != closure_130_3[activeIosAttributionFramework]) {
                  c3 = 2;
                  c4 = 1;
                  const obj5 = { value: getImpressionToken(impressionId), done: false };
                  return obj5;
                }
              }
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            impressionToken = value;
            let tmp8;
            if (null != impressionToken) {
              tmp8 = { impressionToken };
              obj = { impressionToken };
            }
            c4 = 3;
            return { value: tmp8, done: true };
          }
        } catch (tmp18) {
          c4 = 3;
          throw tmp18;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = {};
let obj2 = { viewThroughSpec: obj3 };
obj3 = { kind: IosAttributionFramework.IosAttributionFramework.AD_ATTRIBUTION_KIT };
const AD_ATTRIBUTION_KIT = IosAttributionFramework.IosAttributionFramework.AD_ATTRIBUTION_KIT;
obj[AD_ATTRIBUTION_KIT] = obj2;
let closure_4 = new LoggerDefault("IosAttribution");
new LoggerDefault("IosAttribution");
const map = new Map();
let result = size.fileFinishedImporting("modules/ads/ios_attribution/IosAttributionImpressionRegistry.tsx");

export const registerViewThroughImpression = function registerViewThroughImpression(impressionId) {
  let abortController;
  let promise;
  function startNativeImpression() {
    return obj(...arguments);
  }
  impressionId = impressionId.impressionId;
  const framework = impressionId.framework;
  const impression = {
    framework,
    token: null,
    signAbort: abortController,
    registration: promise.catch(() => {
      if (map.get(impressionId) === map) {
        map.delete(impressionId);
      }
    })
  };
  const metadataSealed = impressionId.metadataSealed;
  abortController = new AbortController();
  const result = map.set(impressionId, impression);
  promise = startNativeImpression({ impressionId, metadataSealed, framework, impression });
};
export const getStoreKitCredential = function getStoreKitCredential() {
  return obj(...arguments);
};
export const endImpression = function endImpression(id) {
  const value = map.get(id);
  if (null != value) {
    map.delete(id);
    const signAbort = value.signAbort;
    signAbort.abort();
    const token = value.token;
    if (null != token) {
      const obj2 = IosAttributionNativeModule;
      const endImpressionResult = obj2.endImpression(token);
      endImpressionResult.catch(f105967);
    }
  }
};