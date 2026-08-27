// discord_app/modules/oauth2/native/authorizeCallback.tsx
import set from "../../../../_runtime/00002_set.js";
import keys from "../../../ConstantsIOS.tsx";
import isDiscordProxiedAssetUrlDefault from "../../../utils/URLUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4158 from "../../../lib/native/Linking.tsx";
import NativeModules from "../../links/native/BrowserManager.tsx";
import _modDef4676 from "../../../actions/ModalActionCreators.tsx";
import OAUTH2_AUTHORIZE_MODAL_KEY from "Constants.tsx";

({ OAUTH2_SUCCESS_RESULT_MODAL_KEY: c3, OAUTH2_ERROR_RESULT_MODAL_KEY: c4 } = OAUTH2_AUTHORIZE_MODAL_KEY);
const re5 = /oauth2\/authorized/;
const re6 = /oauth2\/error/;
const result = set.fileFinishedImporting("modules/oauth2/native/authorizeCallback.tsx");

export default function authorizeCallback(arg0) {
  ({ location: _location, canceled, wasDeepLink } = arg0);
  if (null != _location) {
    let toURLSafeResult = isDiscordProxiedAssetUrlDefault.toURLSafe(_location);
    if (toURLSafeResult == null) {
      toURLSafeResult = {};
    }
    ({ host, pathname, searchParams } = toURLSafeResult);
    if (null != host) {
      let tmp8Result = tmp8(1487);
      if (tmp8Result.isDiscordHostname(host)) {
        if (null != pathname) {
          if (null != pathname.match(closure_5)) {
            tmp8Result = tmp8(4676);
            let obj = { application: null, guild: null };
            obj[0] = tmp;
            obj[1] = tmp2;
            tmp8Result.pushLazy(asyncRequireImpl(9203, tmp9.paths), obj, closure_3);
          } else if (null != pathname.match(closure_6)) {
            if (!canceled) {
              let str;
              const tmp8Result1 = tmp8(4676);
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
              tmp8Result1.pushLazy(asyncRequireImpl(9201, tmp9.paths), obj, closure_4);
              const tmp17 = asyncRequireImpl(9201, tmp9.paths);
            }
          }
        }
      }
    }
    if (wasDeepLink) {
      const browserManagerSelectedBrowser = NativeModules.getBrowserManagerSelectedBrowser();
      wasDeepLink = browserManagerSelectedBrowser === keys.WebBrowserType.IN_APP;
      const obj5 = NativeModules;
    }
    const obj2 = isDiscordProxiedAssetUrlDefault;
    let SAFARI;
    if (wasDeepLink) {
      SAFARI = keys.WebBrowserType.SAFARI;
    }
    _modDef4158.openURL(_location, SAFARI);
    const tmp8Result2 = _modDef4158;
  } else if (!canceled) {
    obj = _modDef4676;
    obj.pushLazy(asyncRequireImpl(9201, dependencyMap.paths), undefined, closure_4);
  }
};