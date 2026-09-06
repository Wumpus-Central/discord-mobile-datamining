// === Module 9575: authorizeCallback ===

// Module 9575 (authorizeCallback)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import URLUtilsDefault from "URLUtils" /* 1365 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import LinkingDefault from "Linking" /* 4255 */;
import BrowserManager from "BrowserManager" /* 4525 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import Constants from "Constants" /* 9574 */;
import size from "module_2" /* 2 */;

({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: c3, OAUTH2_ERROR_RESULT_MODAL_KEY: closure_4 } = Constants);
const re5 = /oauth2\/authorized/;
const re6 = /oauth2\/error/;
const result = size.fileFinishedImporting("modules/oauth2/native/authorizeCallback.tsx");

export default function authorizeCallback(arg0) {
  ({ location: _location, canceled, wasDeepLink } = arg0);
  if (null != _location) {
    let toURLSafeResult = URLUtilsDefault.toURLSafe(_location);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      let tmp8Result = tmp8(1365);
      if (tmp8Result.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(re5)) {
            tmp8Result = tmp8(4763);
            let obj = { application: tmp, guild: tmp2 };
            tmp8Result.pushLazy(asyncRequireImpl(9576, tmp9.paths), obj, React3);
          } else if (null != pathname.match(re6)) {
            if (!canceled) {
              let str;
              const tmp8Result1 = tmp8(4763);
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
              obj = { error: str };
              tmp8Result1.pushLazy(asyncRequireImpl(9249, tmp9.paths), obj, React4);
              const tmp17 = asyncRequireImpl(9249, tmp9.paths);
            }
          }
        }
      }
    }
    if (wasDeepLink) {
      const browserManagerSelectedBrowser = BrowserManager.getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === ConstantsIOS.WebBrowserType.IN_APP;
    }
    let SAFARI;
    if (wasDeepLink) {
      SAFARI = ConstantsIOS.WebBrowserType.SAFARI;
    }
    LinkingDefault.openURL(_location, SAFARI);
    const tmp8Result2 = LinkingDefault;
  } else if (!canceled) {
    obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequireImpl(9249, dependencyMap.paths), undefined, React4);
  }
};