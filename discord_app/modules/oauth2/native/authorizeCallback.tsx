// === Module 11011: authorizeCallback ===

// Module 11011 (authorizeCallback)
import OAUTH2_AUTHORIZE_MODAL_KEY from "OAUTH2_AUTHORIZE_MODAL_KEY";

let c3;
let c4;
({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: c3, OAUTH2_ERROR_RESULT_MODAL_KEY: c4 } = OAUTH2_AUTHORIZE_MODAL_KEY);
const re5 = /oauth2\/authorized/;
const re6 = /oauth2\/error/;
const result = require("error").fileFinishedImporting("modules/oauth2/native/authorizeCallback.tsx");

export default function authorizeCallback(arg0) {
  let _location;
  let canceled;
  let host;
  let pathname;
  let searchParams;
  let wasDeepLink;
  ({ location: _location, canceled, wasDeepLink } = arg0);
  if (null != _location) {
    let toURLSafeResult = importDefault(1467).toURLSafe(_location);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      let tmp8Result = tmp8(1467);
      if (tmp8Result.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(closure_5)) {
            tmp8Result = tmp8(4461);
            let obj = { application: null, guild: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            tmp8Result.pushLazy(require(1959) /* asyncRequireImpl */(11012, tmp9.paths), obj, closure_3);
          } else if (null != pathname.match(closure_6)) {
            if (!canceled) {
              let str;
              const tmp8Result1 = tmp8(4461);
              if (searchParams != null) {
                str = "error_description";
                const str2 = searchParams.get("error_description");
                if (str2 != null) {
                  str = str2.toString();
                }
              }
              if (str == null) {
                let str1;
                if (searchParams != null) {
                  const str4 = searchParams.get("error");
                  if (str4 != null) {
                    str1 = str4.toString();
                  }
                }
                str = str1;
              }
              obj = { error: null };
              obj[0] = str;
              tmp8Result1.pushLazy(require(1959) /* asyncRequireImpl */(9146, tmp9.paths), obj, closure_4);
              const tmp17 = require(1959) /* asyncRequireImpl */(9146, tmp9.paths);
            }
          }
        }
      }
    }
    if (wasDeepLink) {
      const browserManagerSelectedBrowser = require(4221) /* NativeModules */.getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === require(691) /* keys */.WebBrowserType.IN_APP;
      const obj5 = require(4221) /* NativeModules */;
    }
    const obj2 = importDefault(1467);
    let SAFARI;
    if (wasDeepLink) {
      SAFARI = require(691) /* keys */.WebBrowserType.SAFARI;
    }
    importDefault(3952).openURL(_location, SAFARI);
    const tmp8Result2 = importDefault(3952);
  } else if (!canceled) {
    obj = importDefault(4461);
    obj.pushLazy(require(1959) /* asyncRequireImpl */(9146, dependencyMap.paths), undefined, closure_4);
  }
};