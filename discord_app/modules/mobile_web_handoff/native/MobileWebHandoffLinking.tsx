// === Module 6169: createHandoffTokenWithLoadingModal ===

// Module 6169 (createHandoffTokenWithLoadingModal)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import ME from "ME" /* 673 */;

const require = arg1;
function createHandoffTokenWithLoadingModal(arg0) {
  ({ nonce: require, fingerprint: importDefault, handoffSource: dependencyMap } = arg0);
  return new Promise((arg0) => {
    closure_0 = arg0;
    let obj = closure_1_1(closure_1_2[3]);
    obj.popWithKey(closure_1_8);
    if (closure_1_4.isAuthenticated()) {
      obj = { operation: null, onResolved: null, onRejected: null };
      obj[0] = function operation(arg0) {
        return closure_1_1(closure_1_2[5]).createHandoffToken(closure_0);
      };
      obj[1] = arg0;
      obj[2] = function onRejected(arg0) {
        let obj = closure_2_1(closure_2_2[6]);
        obj = { reason: "handoff_token_fetch_failure", fingerprint: closure_2_0(closure_2_2[7]).maybeExtractId(closure_1_1), handoff_source: closure_1_2 };
        obj = { fingerprint: closure_1_1 };
        obj.track(closure_2_5.MOBILE_WEB_HANDOFF_FAILURE, obj, obj);
        callback("null");
      };
      const result = closure_1_0(tmp2[4]).showSimpleLoadingModal(closure_1_8, obj);
      const obj6 = closure_1_0(tmp2[4]);
    } else {
      obj = { reason: "user_not_authenticated_in_app", fingerprint: null, handoff_source: null };
      const tmpResult = closure_1_1(tmp2[6]);
      obj[1] = closure_1_0(tmp2[7]).maybeExtractId(closure_1);
      obj[2] = closure_2;
      obj1 = { fingerprint: null };
      obj1[0] = closure_1;
      tmpResult.track(closure_1_5.MOBILE_WEB_HANDOFF_FAILURE, obj, obj1);
      arg0("null");
      const obj4 = closure_1_0(tmp2[7]);
    }
  });
}
function _redirectWithHandoffToken() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === uRL) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp5;
              let obj4 = tmp2;
              let flag2;
              closure_2 = undefined;
              obj1 = flag2;
              if (flag2 === undefined) {
                obj1 = {};
              }
              flag2 = obj1.forceExternalBrowser;
              if (flag2 === undefined) {
                flag2 = false;
              }
              closure_2 = Object.assign(obj1, Object.create(null));
              obj4 = undefined;
              closure_4 = undefined;
              uRL = undefined;
              uRL = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              obj4 = {};
              const merged = Object.assign(closure_2);
              const nonce = closure_2.nonce;
              closure_2 = nonce;
              if (nonce == null) {
                obj3 = flag2(closure_2[5]);
                closure_2 = obj3.generateNonce();
              }
              obj4.nonce = closure_2;
              obj4 = callback(closure_2[8]);
              obj4.handoffSource = obj4.getLoginHandoffSourceFromRedirectTo(callback);
              uRL = 2;
              c6 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = callback2(obj4);
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            closure_4 = arg1;
            if (true === closure_2.skipLoginRedirect) {
              uRL = (function sanitizeRedirectURL(closure_0) {
                uRL = new URL("" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
                const uRL1 = new URL(closure_0, uRL);
                ({ pathname: tmp.pathname, search: tmp.search, hash: tmp.hash } = uRL1);
                return uRL;
              })(callback);
            } else {
              const _URL = URL;
              obj = flag2(closure_2[9]);
              uRL = new URL(obj.makeUrl(constants.LOGIN_HANDOFF, false));
            }
            const searchParams = uRL.searchParams;
            searchParams.append("handoff_token", closure_4);
            if (true !== closure_2.skipLoginRedirect) {
              const searchParams2 = uRL.searchParams;
              searchParams2.append("handoff_key", obj4.nonce);
              const searchParams3 = uRL.searchParams;
              searchParams3.append("redirect_to", callback);
            }
            obj1 = flag2(closure_2[10]);
            if (flag2) {
              obj1.openURLExternally(uRL.href);
            } else {
              obj1.performURLNavigation(uRL.href);
            }
            c6 = 3;
          }
        } catch (tmp50) {
          c6 = tmp;
          throw tmp50;
        }
      }
    })();
    iter.next();
    return iter;
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
function _redirectDeveloperPortalWithHandoffToken() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c5 = 0;
    c6 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let uRL = tmp5;
              closure_3 = tmp2;
              obj1 = undefined;
              if (obj1 === undefined) {
                obj1 = {};
              }
              let obj3;
              closure_3 = undefined;
              uRL = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              obj3 = {};
              const merged = Object.assign(obj1);
              const nonce = obj1.nonce;
              obj3 = nonce;
              if (nonce == null) {
                obj1 = obj1(obj3[5]);
                obj3 = obj1.generateNonce();
              }
              obj3.nonce = obj3;
              obj3.handoffSource = callback(obj3[8]).LoginHandoffSource.ROLE_SUBSCRIPTION_SETTING;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = callback2(obj3);
              return obj4;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_3 = arg1;
            const _URL = URL;
            const _location = location;
            const _HermesInternal = HermesInternal;
            uRL = new URL("" + location.protocol + c6.DEVELOPER_PORTAL_LOGIN_HANDOFF(obj3.nonce, closure_3, callback));
            obj1(obj3[10]).performURLNavigation(uRL.href);
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          c6 = tmp;
          throw tmp17;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c5, MarketingURLs: closure_6, Routes: error } = ME);
let c8 = "mweb-handoff";
let result = require("set").fileFinishedImporting("modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx");

export default {
  redirectWithHandoffToken(combined, arg1) {
    const self = this;
    const apply = _redirectWithHandoffToken.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  redirectDeveloperPortalWithHandoffToken(DEVELOPER_PORTAL_APPLICATIONS_GAME_IDENTITY) {
    const self = this;
    const apply = _redirectDeveloperPortalWithHandoffToken.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};