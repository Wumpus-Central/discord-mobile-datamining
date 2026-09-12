// discord_app/modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

require = fn;
function createHandoffTokenWithLoadingModal(arg0) {
  ({ nonce: require, fingerprint: importDefault, handoffSource: dependencyMap } = arg0);
  return new Promise((onResolved) => {
    let obj = fingerprint(handoff_source[3]);
    obj.popWithKey(closure_1_8);
    if (authenticated.isAuthenticated()) {
      obj = {
        operation() {
          return fingerprint(handoff_source[5]).createHandoffToken(closure_0);
        },
        onResolved,
        onRejected() {
          let obj = {
            reason: "handoff_token_fetch_failure",
            fingerprint: FingerprintUtils.maybeExtractId(fingerprint),
            handoff_source,
          };
          obj = { fingerprint };
          obj.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj, obj);
          onResolved("null");
        },
      };
      const result = require("SimpleLoadingModal").showSimpleLoadingModal(closure_1_8, obj);
      const obj6 = require("SimpleLoadingModal");
    } else {
      obj = { reason: "user_not_authenticated_in_app", fingerprint: null, handoff_source: null };
      const tmpResult = fingerprint(handoff_source[6]);
      obj.fingerprint = require("FingerprintUtils").maybeExtractId(fingerprint);
      obj.handoff_source = handoff_source;
      const obj1 = { fingerprint };
      tmpResult.track(constants.MOBILE_WEB_HANDOFF_FAILURE, obj, obj1);
      onResolved("null");
      const obj4 = require("FingerprintUtils");
    }
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
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          let flag2 = obj1.forceExternalBrowser;
          if (flag2 === undefined) {
            flag2 = false;
          }
          closure_131_1 = flag2;
          closure_131_2 = Object.assign(obj1, Object.assign({ forceExternalBrowser: 0 }));
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          let obj4 = {};
          const merged = Object.assign(closure_131_2);
          let nonce = closure_131_2.nonce;
          if (nonce == null) {
            obj3 = closure_132_1(closure_132_2[5]);
            nonce = obj3.generateNonce();
          }
          obj4.nonce = nonce;
          obj4 = closure_132_0(closure_132_2[8]);
          obj4.handoffSource = obj4.getLoginHandoffSourceFromRedirectTo(closure_131_0);
          closure_131_3 = obj4;
          c5 = 2;
          c6 = 1;
          const obj5 = { value: closure_132_9(closure_131_3), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
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
          obj = closure_132_1(closure_132_2[9]);
          uRL = new URL(obj.makeUrl(closure_132_7.LOGIN_HANDOFF, false));
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
        obj1 = closure_132_1(closure_132_2[10]);
        if (closure_131_1) {
          obj1.openURLExternally(closure_131_5.href);
        } else {
          obj1.performURLNavigation(closure_131_5.href);
        }
        c6 = 3;
      }
    } catch (tmp50) {
      c6 = tmp;
      throw tmp50;
    }
  }
};
let closure_11 = async function _redirectDeveloperPortalWithHandoffToken() {
  const obj3 = {};
  const merged = Object.assign(closure_131_1);
  let nonce = closure_131_1.nonce;
  if (nonce == null) {
    let obj1 = closure_132_1(closure_132_2[5]);
    nonce = obj1.generateNonce();
  }
  obj3.nonce = nonce;
  obj3.handoffSource = closure_132_0(closure_132_2[8]).LoginHandoffSource.ROLE_SUBSCRIPTION_SETTING;
  closure_131_2 = obj3;
  await closure_132_9(closure_131_2);
  closure_131_3 = value;
  const _URL = URL;
  const _location = location;
  const _HermesInternal = HermesInternal;
  const uRL = new URL(
    "" +
      location.protocol +
      closure_132_6.DEVELOPER_PORTAL_LOGIN_HANDOFF(closure_131_2.nonce, closure_131_3, closure_131_0),
  );
  closure_131_4 = uRL;
  closure_132_1(closure_132_2[10]).performURLNavigation(closure_131_4.href);
  await "HermesInternal";
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  obj1 = closure_1;
  if (closure_1 === undefined) {
    obj1 = {};
  }
  closure_131_1 = obj1;
  return "PX_16";
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
  },
};
