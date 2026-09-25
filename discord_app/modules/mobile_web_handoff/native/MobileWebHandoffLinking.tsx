// === Module 6730: MobileWebHandoffLinking ===

// Module 6730 (MobileWebHandoffLinking)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FingerprintUtils from "FingerprintUtils" /* 1254 */;
import MobileWebHandoffUtilsDefault from "MobileWebHandoffUtils" /* 6733 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function createHandoffTokenWithLoadingModal(arg0) {
  ({ nonce: require, fingerprint: importDefault, handoffSource: dependencyMap } = arg0);
  return new Promise((onResolved) => {
    fingerprint(handoff_source[3]).popWithKey(closure_1_8);
    if (authenticated.isAuthenticated()) {
      let obj2 = {
        operation() {
            return fingerprint(handoff_source[5]).createHandoffToken(closure_0);
          },
        onResolved,
        onRejected() {
            const obj2 = { reason: "handoff_token_fetch_failure", fingerprint: null, handoff_source: null };
            const obj = AnalyticsUtilsDefault;
            obj2.fingerprint = FingerprintUtils.maybeExtractId(fingerprint);
            obj2.handoff_source = handoff_source;
            obj.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj2, { fingerprint });
            onResolved("null");
          }
      };
      const result = require("SimpleLoadingModal").showSimpleLoadingModal(closure_1_8, obj2);
      const obj6 = require("SimpleLoadingModal");
    } else {
      const obj3 = { reason: "user_not_authenticated_in_app", fingerprint: null, handoff_source: null };
      const tmpResult = fingerprint(handoff_source[6]);
      obj3.fingerprint = require("FingerprintUtils").maybeExtractId(fingerprint);
      obj3.handoff_source = handoff_source;
      const obj5 = { fingerprint };
      tmpResult.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj3, obj5);
      onResolved("null");
      const obj4 = require("FingerprintUtils");
    }
    let obj = fingerprint(handoff_source[3]);
  });
}
let closure_10 = async function _redirectWithHandoffToken(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let obj7 = closure_1;
          if (closure_1 === undefined) {
            obj7 = {};
          }
          let flag2 = obj7.forceExternalBrowser;
          if (flag2 === undefined) {
            flag2 = false;
          }
          closure_131_1 = flag2;
          closure_131_2 = Object.assign(obj7, Object.assign({ forceExternalBrowser: 0 }));
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          const obj10 = {};
          const merged = Object.assign(closure_131_2);
          let nonce = closure_131_2.nonce;
          if (nonce == null) {
            nonce = closure_132_1(closure_132_2[5]).generateNonce();
            const obj4 = closure_132_1(closure_132_2[5]);
          }
          obj10.nonce = nonce;
          obj10.handoffSource = closure_132_0(closure_132_2[8]).getLoginHandoffSourceFromRedirectTo(closure_131_0);
          closure_131_3 = obj10;
          c5 = 2;
          c6 = 1;
          const obj11 = { value: closure_132_9(closure_131_3), done: false };
          return obj11;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_131_4 = value;
        if (true === closure_131_2.skipLoginRedirect) {
          let uRL = (function sanitizeRedirectURL(arg0) {
            const uRL = new URL("" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
            const uRL1 = new URL(arg0, uRL);
            ({ pathname: tmp.pathname, search: tmp.search, hash: tmp.hash } = uRL1);
            return uRL;
          })(closure_131_0);
        } else {
          const _URL = URL;
          uRL = new URL(closure_132_1(closure_132_2[9]).makeUrl(closure_132_7.LOGIN_HANDOFF, false));
          const obj = closure_132_1(closure_132_2[9]);
        }
        closure_131_5 = uRL;
        const searchParams = closure_131_5.searchParams;
        searchParams.append("handoff_token", closure_131_4);
        if (true !== closure_131_2.skipLoginRedirect) {
          const searchParams2 = closure_131_5.searchParams;
          searchParams2.append("handoff_key", closure_131_3.nonce);
          const searchParams3 = closure_131_5.searchParams;
          searchParams3.append("redirect_to", closure_131_0);
        }
        const obj2 = closure_132_1(closure_132_2[10]);
        if (closure_131_1) {
          obj2.openURLExternally(closure_131_5.href);
        } else {
          obj2.performURLNavigation(closure_131_5.href);
        }
        c6 = 3;
      }
    } catch (tmp50) {
      c6 = tmp;
      throw tmp50;
    }
  }
};
let closure_11 = async function _redirectDeveloperPortalWithHandoffToken(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp2;
            closure_2 = tmp3;
            closure_130_0 = closure_0;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_3 = undefined;
            const nonce = MobileWebHandoffUtilsDefault.generateNonce();
            closure_130_1 = nonce;
            const obj4 = { nonce, handoffSource };
            c4 = 1;
            c5 = 1;
            const obj7 = { value: createHandoffTokenWithLoadingModal(obj4), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_2 = value;
          const _URL = URL;
          const _location = location;
          const _HermesInternal = HermesInternal;
          const uRL = new URL("" + location.protocol + closure_131_6.DEVELOPER_PORTAL_LOGIN_HANDOFF(closure_130_1, closure_130_2, closure_130_0));
          closure_130_3 = uRL;
          closure_131_1(closure_131_2[10]).performURLNavigation(closure_130_3.href);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c5 = tmp;
        throw tmp7;
      }
    }
  })();
};
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, MarketingURLs: metroRequire, Routes: closure_7 } = Constants);
let c8 = "mweb-handoff";
const size = fn(2);
let result = size.fileFinishedImporting("modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx");

export default {
  redirectWithHandoffToken() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  redirectDeveloperPortalWithHandoffToken() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
};