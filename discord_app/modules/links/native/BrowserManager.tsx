// discord_app/modules/links/native/BrowserManager.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../utils/PlatformUtils.tsx";
import keys2 from "../../../ConstantsIOS.tsx";
import isDiscordFrontendDevelopment from "../../../utils/GlobalUtils.tsx";
import _modDef4090 from "../../../lib/native/Linking.tsx";
import enforcing from "../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx";
import enforcingDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import keys from "../../../../_runtime/00644_keys.js";

({ AppState: c3, NativeEventEmitter: c4, NativeModules } = get_ActivityIndicator);
let BrowserManager = NativeModules.BrowserManager;
let closure_7 = keys.create(() => {
  let obj = obj1322;
  if (obj.isAndroid()) {
    let isChromeInstalled = enforcingDefault.getConstants().isChromeInstalled;
  } else {
    isChromeInstalled = BrowserManager.isChromeInstalled;
  }
  obj = { isChromeInstalled, selectedBrowser: null, supportsInAppBrowser: null, isInAppBrowserOpen: false };
  let tmpResult = obj1322;
  if (tmpResult.isAndroid()) {
    let selectedBrowser = enforcingDefault.getConstants().selectedBrowser;
  } else {
    selectedBrowser = BrowserManager.selectedBrowser;
  }
  obj[1] = selectedBrowser;
  tmpResult = obj1322;
  if (tmpResult.isAndroid()) {
    let supportsInAppBrowser = enforcingDefault.getConstants().supportsInAppBrowser;
  } else {
    supportsInAppBrowser = BrowserManager.supportsInAppBrowser;
  }
  obj[2] = supportsInAppBrowser;
  return obj;
});
let c8 = null;
let result = obj132.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

export const useBrowserManagerIsChromeInstalled = function useBrowserManagerIsChromeInstalled() {
  return store((isChromeInstalled) => isChromeInstalled.isChromeInstalled);
};
export const getBrowserManagerIsChromeInstalled = function getBrowserManagerIsChromeInstalled() {
  return store.getState().isChromeInstalled;
};
export const useBrowserManagerSupportsInAppBrowser = function useBrowserManagerSupportsInAppBrowser() {
  return store((supportsInAppBrowser) => supportsInAppBrowser.supportsInAppBrowser);
};
export const useBrowserManagerSelectedBrowser = function useBrowserManagerSelectedBrowser() {
  return store((selectedBrowser) => selectedBrowser.selectedBrowser);
};
export const getBrowserManagerSelectedBrowser = function getBrowserManagerSelectedBrowser() {
  return store.getState().selectedBrowser;
};
export const useIsInAppBrowserOpen = function useIsInAppBrowserOpen() {
  return store((isInAppBrowserOpen) => isInAppBrowserOpen.isInAppBrowserOpen);
};
export const getIsInAppBrowserOpen = function getIsInAppBrowserOpen() {
  return store.getState().isInAppBrowserOpen;
};
export const subscribeToIsInAppBrowserOpen = function subscribeToIsInAppBrowserOpen(arg0) {
  closure_0 = arg0;
  return store.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      callback(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(closure_0, CHROME) {
  let selectedBrowser = CHROME;
  if (CHROME === undefined) {
    selectedBrowser = store.getState().selectedBrowser;
  }
  if (selectedBrowser !== keys2.WebBrowserType.SAFARI) {
    if (selectedBrowser !== keys2.WebBrowserType.CHROME) {
      if (selectedBrowser === keys2.WebBrowserType.IN_APP) {
        let tmp2Result = obj1322;
      }
      if (keys2.WebBrowserType.IN_APP === selectedBrowser) {
        tmp2Result = obj1322;
        if (tmp2Result.isAndroid()) {
          let openInAppURLResult = enforcingDefault.openInAppURL(closure_0);
        } else {
          openInAppURLResult = BrowserManager.openInAppURL(closure_0);
        }
        return openInAppURLResult.then((result) => {
          if (false !== result) {
            state.setState({ isInAppBrowserOpen: true });
            if (closure_8 != null) {
              obj4.remove();
            }
            closure_8 = null;
            if (obj.isIOS()) {
              const obj3 = new closure_4(closure_6);
              closure_8 = obj3.addListener("safariViewControllerDidFinish", () => {
                store.setState({ isInAppBrowserOpen: false });
                if (c8 != null) {
                  c8.remove();
                }
                c8 = null;
              });
            } else {
              if (tmp2Result.isAndroid()) {
                closure_8 = closure_3.addEventListener("change", (event) => {
                  let isInAppBrowserOpen = "active" === event;
                  if (isInAppBrowserOpen) {
                    isInAppBrowserOpen = store.getState().isInAppBrowserOpen;
                  }
                  if (isInAppBrowserOpen) {
                    store.setState({ isInAppBrowserOpen: false });
                    if (c8 != null) {
                      obj.remove();
                    }
                    c8 = null;
                    obj = c8;
                  }
                });
              }
              tmp2Result = callback(table[2]);
            }
            obj = callback(table[2]);
            obj4 = closure_8;
          }
        });
      } else if (keys2.WebBrowserType.CHROME === selectedBrowser) {
        if (tmp2Result1.isAndroid()) {
          let openInChromeURLResult = enforcingDefault.openInChromeURL(closure_0);
        } else {
          openInChromeURLResult = BrowserManager.openInChromeURL(closure_0, true);
        }
        return openInChromeURLResult;
      } else {
        return isDiscordFrontendDevelopment.assertNever(selectedBrowser);
      }
    }
  }
  _modDef4090.performURLNavigation(closure_0);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  let obj = obj1322;
  if (obj.isAndroid()) {
    if (keys2.WebBrowserType.SAFARI === selectedBrowser) {
      const browser = enforcingDefault.selectBrowser(enforcing.BrowserType.SAFARI);
    } else if (keys2.WebBrowserType.IN_APP === selectedBrowser) {
      const browser1 = enforcingDefault.selectBrowser(enforcing.BrowserType.IN_APP);
    } else if (keys2.WebBrowserType.CHROME === selectedBrowser) {
      const browser2 = enforcingDefault.selectBrowser(enforcing.BrowserType.CHROME);
    }
  } else {
    BrowserManager = NativeModules.BrowserManager;
    const browser3 = BrowserManager.selectBrowser(selectedBrowser);
  }
  obj = { selectedBrowser };
  store.setState(obj);
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  store.setState({ isInAppBrowserOpen: false });
  if (!obj.isAndroid()) {
    BrowserManager = NativeModules.BrowserManager;
    BrowserManager.closeBrowser();
  }
  obj = obj1322;
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, arg1, arg2) {
  const _require = arg2;
  importDefault = Date.now();
  if (obj.isAndroid()) {
    let openPlayStoreInlineResult = enforcingDefault.openPlayStoreInline(url, arg1, function callback() {
      if (closure_0 != null) {
        tmp2(tmp);
      }
    });
  } else if (null == arg1) {
    openPlayStoreInlineResult = Promise.resolve(false);
  } else {
    if (null != arg2) {
      const result = BrowserManager.setOpenAppStoreDismissCallback(() => {
        callback(Date.now() - closure_1);
      });
    }
    openPlayStoreInlineResult = BrowserManager.openAppStoreInline(url, arg1);
  }
  return openPlayStoreInlineResult;
};