// === Module 4525: NativeModules ===

// Module 4525 (NativeModules)
import set from "set" /* 2 */;
import keys2 from "keys" /* 1093 */;
import set2 from "set" /* 1115 */;
import _modDef4255 from "module_4255" /* 4255 */;
import enforcingDefault from "enforcing" /* 4526 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import keys from "keys" /* 560 */;

({ AppState: c3, NativeEventEmitter: c4, NativeModules } = get_ActivityIndicator);
let BrowserManager = NativeModules.BrowserManager;
let closure_7 = keys.create(() => {
  let obj = set2;
  if (obj.isAndroid()) {
    let isChromeInstalled = enforcingDefault.getConstants().isChromeInstalled;
    const obj2 = enforcingDefault;
  } else {
    isChromeInstalled = BrowserManager.isChromeInstalled;
  }
  obj = { isChromeInstalled, selectedBrowser: null, supportsInAppBrowser: null, isInAppBrowserOpen: false };
  let tmpResult = tmp(1115);
  if (tmpResult.isAndroid()) {
    let selectedBrowser = enforcingDefault.getConstants().selectedBrowser;
    const obj5 = enforcingDefault;
  } else {
    selectedBrowser = BrowserManager.selectedBrowser;
  }
  obj[1] = selectedBrowser;
  tmpResult = tmp(1115);
  if (tmpResult.isAndroid()) {
    let supportsInAppBrowser = enforcingDefault.getConstants().supportsInAppBrowser;
    const obj7 = enforcingDefault;
  } else {
    supportsInAppBrowser = BrowserManager.supportsInAppBrowser;
  }
  obj[2] = supportsInAppBrowser;
  return obj;
});
let c8 = null;
let result = set.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

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
    if (selectedBrowser !== tmp2(1093).WebBrowserType.CHROME) {
      if (selectedBrowser === tmp2(1093).WebBrowserType.IN_APP) {
        let tmp2Result = tmp2(1115);
      }
      if (tmp2(1093).WebBrowserType.IN_APP === selectedBrowser) {
        tmp2Result = tmp2(1115);
        if (tmp2Result.isAndroid()) {
          let openInAppURLResult = enforcingDefault.openInAppURL(closure_0);
          const obj6 = enforcingDefault;
        } else {
          openInAppURLResult = BrowserManager.openInAppURL(closure_0);
        }
        return openInAppURLResult.then((arg0) => {
          if (false !== arg0) {
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
                closure_8 = closure_3.addEventListener("change", (arg0) => {
                  let isInAppBrowserOpen = "active" === arg0;
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
              tmp2Result = tmp2(tmp3[2]);
            }
            obj = callback(table[2]);
            obj4 = closure_8;
            tmp2 = callback;
            tmp3 = table;
          }
        });
      } else if (tmp2(1093).WebBrowserType.CHROME === selectedBrowser) {
        if (tmp2Result1.isAndroid()) {
          let openInChromeURLResult = enforcingDefault.openInChromeURL(closure_0);
          let obj4 = enforcingDefault;
        } else {
          openInChromeURLResult = BrowserManager.openInChromeURL(closure_0, true);
        }
        return openInChromeURLResult;
      } else {
        return tmp2(1369).assertNever(selectedBrowser);
      }
    }
  }
  _modDef4255.performURLNavigation(closure_0);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  let obj = set2;
  if (obj.isAndroid()) {
    if (tmp(1093).WebBrowserType.SAFARI === selectedBrowser) {
      const browser = enforcingDefault.selectBrowser(tmp(4526).BrowserType.SAFARI);
      const obj3 = enforcingDefault;
    } else if (tmp(1093).WebBrowserType.IN_APP === selectedBrowser) {
      const browser1 = enforcingDefault.selectBrowser(tmp(4526).BrowserType.IN_APP);
      const obj2 = enforcingDefault;
    } else if (tmp(1093).WebBrowserType.CHROME === selectedBrowser) {
      const browser2 = enforcingDefault.selectBrowser(tmp(4526).BrowserType.CHROME);
      const obj5 = enforcingDefault;
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
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, appId, arg2, impressionToken) {
  const _require = arg2;
  importDefault = Date.now();
  if (obj.isAndroid()) {
    let openPlayStoreInlineResult = enforcingDefault.openPlayStoreInline(url, appId, function callback() {
      if (closure_0 != null) {
        tmp2(tmp);
      }
    });
    const obj2 = enforcingDefault;
  } else if (null == appId) {
    openPlayStoreInlineResult = Promise.resolve(false);
  } else {
    if (null != arg2) {
      const result = BrowserManager.setOpenAppStoreDismissCallback(() => {
        callback(Date.now() - closure_1);
      });
    }
    impressionToken = undefined;
    if (impressionToken != null) {
      impressionToken = impressionToken.impressionToken;
    }
    if (impressionToken == null) {
      impressionToken = null;
    }
    openPlayStoreInlineResult = BrowserManager.openAppStoreInline(url, appId, impressionToken);
  }
  return openPlayStoreInlineResult;
};