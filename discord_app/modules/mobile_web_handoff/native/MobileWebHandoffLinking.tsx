// discord_app/modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import FingerprintUtils from "../../../../discord_common/js/packages/fingerprint-utils/FingerprintUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import SimpleLoadingModal from "SimpleLoadingModal.tsx";
import MobileWebHandoffUtilsDefault from "../MobileWebHandoffUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_2;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function createHandoffTokenWithLoadingModal(arg0) {
  let authenticated;
  let fingerprint;
  let handoff_source;
  ({ nonce: require, fingerprint: importDefault, handoffSource: dependencyMap } = arg0);
  const promise = new Promise((onResolved) => {
    let obj3;
    obj = ModalActionCreatorsDefault;
    obj.popWithKey(closure_1_8);
    if (authenticated.isAuthenticated()) {
      let obj2 = {
        operation() {
          obj = MobileWebHandoffUtilsDefault;
          return obj.createHandoffToken(onResolved);
        },
        onResolved,
        onRejected() {
          let obj2;
          obj = {
            reason: "handoff_token_fetch_failure",
            fingerprint: obj2.maybeExtractId(importDefault),
            handoff_source: dependencyMap,
          };
          const track = AnalyticsUtilsDefault.track;
          const MOBILE_WEB_HANDOFF_FAILURE = hasOwnProperty.MOBILE_WEB_HANDOFF_FAILURE;
          AnalyticsUtilsDefault;
          obj2 = FingerprintUtils;
          const obj3 = { fingerprint: importDefault };
          track(MOBILE_WEB_HANDOFF_FAILURE, obj, obj3);
          onResolved("null");
        },
      };
      const obj5 = SimpleLoadingModal;
      const result = obj5.showSimpleLoadingModal(closure_1_8, obj2);
    } else {
      const obj4 = {
        reason: "user_not_authenticated_in_app",
        fingerprint: obj3.maybeExtractId(importDefault),
        handoff_source: dependencyMap,
      };
      let track = AnalyticsUtilsDefault.track;
      let MOBILE_WEB_HANDOFF_FAILURE = constants.MOBILE_WEB_HANDOFF_FAILURE;
      AnalyticsUtilsDefault;
      obj3 = FingerprintUtils;
      const obj6 = { fingerprint: importDefault };
      track(MOBILE_WEB_HANDOFF_FAILURE, obj4, obj6);
      onResolved("null");
    }
  });
  return promise;
}
let obj = function _redirectWithHandoffToken() {
  obj = _asyncToGenerator(async function (arg0) {
    let c5;
    let c6;
    let closure_3;
    let flag2;
    let nonce;
    let obj5;
    let uRL;
    function sanitizeRedirectURL(arg0) {
      const uRL = new URL("" + location.protocol + window.GLOBAL_ENV.WEBAPP_ENDPOINT);
      const uRL1 = new URL(arg0, uRL);
      ({ pathname: tmp.pathname, search: tmp.search, hash: tmp.hash } = uRL1);
      return uRL;
    }
    let closure_0 = arg0;
    let closure_1 = arg1;
    const obj10 = { nonce, handoffSource: obj5.getLoginHandoffSourceFromRedirectTo(closure_0) };
    const merged = Object.assign(nonce);
    nonce = nonce.nonce;
    if (nonce == null) {
      const obj4 = closure_132_1(closure_132_2[5]);
      nonce = obj4.generateNonce();
    }
    obj5 = closure_132_0(closure_132_2[8]);
    await closure_132_9(obj10);
    let closure_4 = value;
    if (true === nonce.skipLoginRedirect) {
      uRL = sanitizeRedirectURL(closure_0);
    } else {
      const _URL = URL;
      const self = this;
      const self2 = this;
      obj = closure_132_1(closure_132_2[9]);
      uRL = new URL(obj.makeUrl(closure_132_7.LOGIN_HANDOFF, false));
    }
    const searchParams = uRL.searchParams;
    searchParams.append("handoff_token", closure_4);
    if (true !== nonce.skipLoginRedirect) {
      const searchParams2 = uRL.searchParams;
      searchParams2.append("handoff_key", obj10.nonce);
      const searchParams3 = uRL.searchParams;
      searchParams3.append("redirect_to", closure_0);
    }
    const obj2 = closure_132_1(closure_132_2[10]);
    if (flag2) {
      obj2.openURLExternally(uRL.href);
    } else {
      obj2.performURLNavigation(uRL.href);
    }
    await "IconComponent";
    closure_4 = tmp4;
    let obj7 = closure_1;
    if (closure_1 === undefined) {
      obj7 = {};
    }
    flag2 = obj7.forceExternalBrowser ?? false;
    nonce = Object.assign(obj7, Object.assign({ forceExternalBrowser: 0 }));
    return "Set";
  });
  return obj(...arguments);
};
obj = function _redirectDeveloperPortalWithHandoffToken() {
  obj = _asyncToGenerator(async (arg0, handoffSource) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function (arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let uRL;
          let nonce;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = undefined;
              uRL = undefined;
              const obj6 = MobileWebHandoffUtilsDefault;
              nonce = obj6.generateNonce();
              c4 = 1;
              c5 = 1;
              const obj4 = { nonce, handoffSource };
              const obj7 = { value: createHandoffTokenWithLoadingModal(obj4), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_2 = value;
            const _URL = URL;
            const _location = location;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            uRL = new URL(
              "" + location.protocol + closure_131_6.DEVELOPER_PORTAL_LOGIN_HANDOFF(nonce, closure_2, closure_0),
            );
            const obj5 = closure_131_1(closure_131_2[10]);
            obj5.performURLNavigation(uRL.href);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp6) {
          c5 = 3;
          throw tmp6;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, MarketingURLs: metroRequire, Routes: metroImportDefault } = Constants);
let c8 = "mweb-handoff";
obj = {
  redirectWithHandoffToken() {
    return obj(...arguments);
  },
  redirectDeveloperPortalWithHandoffToken() {
    return obj(...arguments);
  },
};
let result = size.fileFinishedImporting("modules/mobile_web_handoff/native/MobileWebHandoffLinking.tsx");

export default obj;
