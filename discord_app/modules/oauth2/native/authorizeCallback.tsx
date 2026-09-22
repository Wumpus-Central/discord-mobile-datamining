// discord_app/modules/oauth2/native/authorizeCallback.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import LinkingDefault from "../../../lib/native/Linking.tsx";
import BrowserManager from "../../links/native/BrowserManager.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import Constants from "Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      if (tmp8Result.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(re5)) {
            const obj3 = { application: tmp, guild: tmp2 };
            ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9330, dependencyMap.paths), obj3, React3);
            const tmp8Result4 = ModalActionCreatorsDefault;
          } else if (null != pathname.match(re6)) {
            if (!canceled) {
              let str1;
              const tmp8Result5 = ModalActionCreatorsDefault;
              if (searchParams != null) {
                const str2 = searchParams.get("error_description");
                if (str2 != null) {
                  str1 = str2.toString();
                }
              }
              if (str1 == null) {
                let str5;
                if (searchParams != null) {
                  const str4 = searchParams.get("error");
                  if (str4 != null) {
                    str5 = str4.toString();
                  }
                }
                str1 = str5;
              }
              const obj4 = { error: str1 };
              tmp8Result5.pushLazy(asyncRequireImpl(9328, dependencyMap.paths), obj4, React4);
              const tmp17 = asyncRequireImpl(9328, dependencyMap.paths);
            }
          }
        }
      }
      tmp8Result = URLUtilsDefault;
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
    const tmp8Result6 = LinkingDefault;
  } else if (!canceled) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9328, dependencyMap.paths), undefined, React4);
  }
}
