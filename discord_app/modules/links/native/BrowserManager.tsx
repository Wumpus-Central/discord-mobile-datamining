// === Module 4525: BrowserManager ===

// Module 4525 (BrowserManager)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import LinkingDefault from "Linking" /* 4255 */;
import NativeBrowserManagerModuleDefault from "NativeBrowserManagerModule" /* 4526 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

({ AppState: c3, NativeEventEmitter: closure_4, NativeModules } = get_ActivityIndicator);
let BrowserManager = NativeModules.BrowserManager;
let closure_7 = module_560.create(() => {
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    let isChromeInstalled = NativeBrowserManagerModuleDefault.getConstants().isChromeInstalled;
  } else {
    isChromeInstalled = BrowserManager.isChromeInstalled;
  }
  obj = { isChromeInstalled, selectedBrowser: null, supportsInAppBrowser: null, isInAppBrowserOpen: false };
  let tmpResult = tmp(1115);
  if (tmpResult.isAndroid()) {
    let selectedBrowser = NativeBrowserManagerModuleDefault.getConstants().selectedBrowser;
  } else {
    selectedBrowser = BrowserManager.selectedBrowser;
  }
  obj.selectedBrowser = selectedBrowser;
  tmpResult = tmp(1115);
  if (tmpResult.isAndroid()) {
    let supportsInAppBrowser = NativeBrowserManagerModuleDefault.getConstants().supportsInAppBrowser;
  } else {
    supportsInAppBrowser = BrowserManager.supportsInAppBrowser;
  }
  obj.supportsInAppBrowser = supportsInAppBrowser;
  return obj;
});
let c8 = null;
let result = size.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

export const useBrowserManagerIsChromeInstalled = function useBrowserManagerIsChromeInstalled() {
  return closure_7((isChromeInstalled) => isChromeInstalled.isChromeInstalled);
};
export const getBrowserManagerIsChromeInstalled = function getBrowserManagerIsChromeInstalled() {
  return closure_7.getState().isChromeInstalled;
};
export const useBrowserManagerSupportsInAppBrowser = function useBrowserManagerSupportsInAppBrowser() {
  return closure_7((supportsInAppBrowser) => supportsInAppBrowser.supportsInAppBrowser);
};
export const useBrowserManagerSelectedBrowser = function useBrowserManagerSelectedBrowser() {
  return closure_7((selectedBrowser) => selectedBrowser.selectedBrowser);
};
export const getBrowserManagerSelectedBrowser = function getBrowserManagerSelectedBrowser() {
  return closure_7.getState().selectedBrowser;
};
export const useIsInAppBrowserOpen = function useIsInAppBrowserOpen() {
  return closure_7((isInAppBrowserOpen) => isInAppBrowserOpen.isInAppBrowserOpen);
};
export const getIsInAppBrowserOpen = function getIsInAppBrowserOpen() {
  return closure_7.getState().isInAppBrowserOpen;
};
export const subscribeToIsInAppBrowserOpen = function subscribeToIsInAppBrowserOpen(arg0) {
  closure_0 = arg0;
  return closure_7.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      closure_0(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(href, CHROME) {
  let selectedBrowser = CHROME;
  if (CHROME === undefined) {
    selectedBrowser = state.getState().selectedBrowser;
  }
  if (selectedBrowser !== ConstantsIOS.WebBrowserType.SAFARI) {
    if (selectedBrowser !== tmp2(1093).WebBrowserType.CHROME) {
      if (selectedBrowser === tmp2(1093).WebBrowserType.IN_APP) {
        let tmp2Result = tmp2(1115);
      }
      if (tmp2(1093).WebBrowserType.IN_APP === selectedBrowser) {
        tmp2Result = tmp2(1115);
        if (tmp2Result.isAndroid()) {
          let openInAppURLResult = NativeBrowserManagerModuleDefault.openInAppURL(href);
        } else {
          openInAppURLResult = BrowserManager.openInAppURL(href);
        }
        return openInAppURLResult.then((result) => {
          if (false !== result) {
            state.setState({ isInAppBrowserOpen: true });
            if (_null != null) {
              obj4.remove();
            }
            _null = null;
            if (obj.isIOS()) {
              const obj3 = new closure_1_4(BrowserManager);
              _null = obj3.addListener("safariViewControllerDidFinish", () => {
                state.setState({ isInAppBrowserOpen: false });
                if (_null != null) {
                  _null.remove();
                }
                _null = null;
              });
            } else {
              if (tmp2Result.isAndroid()) {
                _null = closure_1_3.addEventListener("change", (event) => {
                  let isInAppBrowserOpen = "active" === event;
                  if (isInAppBrowserOpen) {
                    isInAppBrowserOpen = state.getState().isInAppBrowserOpen;
                  }
                  if (isInAppBrowserOpen) {
                    state.setState({ isInAppBrowserOpen: false });
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
            obj = PlatformUtils;
            obj4 = _null;
            tmp2 = require;
            tmp3 = dependencyMap;
          }
        });
      } else if (tmp2(1093).WebBrowserType.CHROME === selectedBrowser) {
        if (tmp2Result1.isAndroid()) {
          let openInChromeURLResult = NativeBrowserManagerModuleDefault.openInChromeURL(href);
        } else {
          openInChromeURLResult = BrowserManager.openInChromeURL(href, true);
        }
        return openInChromeURLResult;
      } else {
        return tmp2(1369).assertNever(selectedBrowser);
      }
    }
  }
  LinkingDefault.performURLNavigation(href);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    if (tmp(1093).WebBrowserType.SAFARI === selectedBrowser) {
      const browser = NativeBrowserManagerModuleDefault.selectBrowser(tmp(4526).BrowserType.SAFARI);
    } else if (tmp(1093).WebBrowserType.IN_APP === selectedBrowser) {
      const browser1 = NativeBrowserManagerModuleDefault.selectBrowser(tmp(4526).BrowserType.IN_APP);
    } else if (tmp(1093).WebBrowserType.CHROME === selectedBrowser) {
      const browser2 = NativeBrowserManagerModuleDefault.selectBrowser(tmp(4526).BrowserType.CHROME);
    }
  } else {
    BrowserManager = NativeModules.BrowserManager;
    const browser3 = BrowserManager.selectBrowser(selectedBrowser);
  }
  obj = { selectedBrowser };
  closure_7.setState(obj);
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  closure_7.setState({ isInAppBrowserOpen: false });
  if (!obj.isAndroid()) {
    BrowserManager = NativeModules.BrowserManager;
    BrowserManager.closeBrowser();
  }
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, appId, arg2, impressionToken) {
  closure_0 = arg2;
  closure_1 = Date.now();
  if (obj.isAndroid()) {
    let openPlayStoreInlineResult = NativeBrowserManagerModuleDefault.openPlayStoreInline(url, appId, function callback() {
      if (closure_0 != null) {
        tmp2(tmp);
      }
    });
  } else if (null == appId) {
    openPlayStoreInlineResult = Promise.resolve(false);
  } else {
    if (null != arg2) {
      const result = BrowserManager.setOpenAppStoreDismissCallback(() => {
        closure_0(Date.now() - closure_1);
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