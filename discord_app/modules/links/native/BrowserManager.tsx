// === Module 4602: BrowserManager ===

// Module 4602 (BrowserManager)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import PlatformUtils2 from "PlatformUtils" /* 1364 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import LinkingDefault from "Linking" /* 4332 */;
import NativeBrowserManagerModule from "NativeBrowserManagerModule" /* 4603 */;
import NativeBrowserManagerModuleIOSDefault from "NativeBrowserManagerModuleIOS" /* 4604 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const NativeBrowserManagerModuleDefault = NativeBrowserManagerModule;

require = fn;
let closure_8 = async function _browserManagerClearWebsiteData() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (obj2.isIOS()) {
            c1 = 1;
            c0 = 1;
            const obj6 = { value: NativeBrowserManagerModuleIOSDefault.clearWebsiteData(), done: false };
            return obj6;
          }
          obj2 = PlatformUtils2;
        }
      } else if (arg0 === 1) {
        c0 = 3;
        throw value;
      } else if (arg0 === 2) {
        c0 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c0 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
const AppState = fn(17).AppState;
const PlatformUtils = fn(1364);
if (PlatformUtils.isAndroid()) {
  let importDefaultResult = NativeBrowserManagerModuleDefault;
} else {
  importDefaultResult = NativeBrowserManagerModuleIOSDefault;
}
const hasOwnProperty = importDefaultResult;
function getBrowserManagerIsChromeInstalled() {
  return closure_6.getState().isChromeInstalled;
}
function getBrowserManagerSelectedBrowser() {
  return closure_6.getState().selectedBrowser;
}
const module_560 = fn(560);
let closure_6 = module_560.create(() => {
  const obj = {};
  const merged = Object.assign(importDefaultResult.getConstants());
  obj.isInAppBrowserOpen = false;
  return obj;
});
let c7 = null;
const size = fn(2);
let result = size.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

export const useBrowserManagerIsChromeInstalled = function useBrowserManagerIsChromeInstalled() {
  return closure_6((isChromeInstalled) => isChromeInstalled.isChromeInstalled);
};
export { getBrowserManagerIsChromeInstalled };
export const useBrowserManagerSupportsInAppBrowser = function useBrowserManagerSupportsInAppBrowser() {
  return closure_6((supportsInAppBrowser) => supportsInAppBrowser.supportsInAppBrowser);
};
export const useBrowserManagerSelectedBrowser = function useBrowserManagerSelectedBrowser() {
  return closure_6((selectedBrowser) => selectedBrowser.selectedBrowser);
};
export { getBrowserManagerSelectedBrowser };
export const useIsInAppBrowserOpen = function useIsInAppBrowserOpen() {
  return closure_6((isInAppBrowserOpen) => isInAppBrowserOpen.isInAppBrowserOpen);
};
export const getIsInAppBrowserOpen = function getIsInAppBrowserOpen() {
  return closure_6.getState().isInAppBrowserOpen;
};
export const subscribeToIsInAppBrowserOpen = function subscribeToIsInAppBrowserOpen(arg0) {
  closure_0 = arg0;
  return closure_6.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      closure_0(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(href) {
  let selectedBrowser = CHROME;
  if (CHROME === undefined) {
    selectedBrowser = state.getState().selectedBrowser;
  }
  if (selectedBrowser !== ConstantsIOS.WebBrowserType.SAFARI) {
    if (selectedBrowser !== ConstantsIOS.WebBrowserType.CHROME) {
      if (selectedBrowser === ConstantsIOS.WebBrowserType.IN_APP) {
        PlatformUtils2;
      }
      if (ConstantsIOS.WebBrowserType.IN_APP === selectedBrowser) {
        return importDefaultResult.openInAppURL(href).then((result) => {
          if (false !== result) {
            state.setState({ isInAppBrowserOpen: true });
            if (_null != null) {
              obj4.remove();
            }
            _null = null;
            if (obj.isIOS()) {
              _null = NativeBrowserManagerModuleIOSDefault.onSafariViewControllerDidFinish(() => {
                state.setState({ isInAppBrowserOpen: false });
                if (_null != null) {
                  _null.remove();
                }
                _null = null;
              });
            } else {
              if (tmp2Result.isAndroid()) {
                _null = AppState.addEventListener("change", (event) => {
                  let isInAppBrowserOpen = "active" === event;
                  if (isInAppBrowserOpen) {
                    isInAppBrowserOpen = state.getState().isInAppBrowserOpen;
                  }
                  if (isInAppBrowserOpen) {
                    state.setState({ isInAppBrowserOpen: false });
                    if (c7 != null) {
                      obj.remove();
                    }
                    c7 = null;
                    obj = c7;
                  }
                });
              }
              tmp2Result = PlatformUtils2;
            }
            obj = PlatformUtils2;
            obj4 = _null;
          }
        });
      } else if (ConstantsIOS.WebBrowserType.CHROME === selectedBrowser) {
        if (tmp2Result3.isAndroid()) {
          let openInChromeURLResult = NativeBrowserManagerModuleDefault.openInChromeURL(href);
          const tmp6Result = NativeBrowserManagerModuleDefault;
        } else {
          openInChromeURLResult = NativeBrowserManagerModuleIOSDefault.openInChromeURL(href, true);
          const tmp6Result2 = NativeBrowserManagerModuleIOSDefault;
        }
        return openInChromeURLResult;
      } else {
        return GlobalUtils.assertNever(selectedBrowser);
      }
    }
  }
  LinkingDefault.performURLNavigation(href);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  if (obj.isAndroid()) {
    const obj3 = {};
    obj3[ConstantsIOS.WebBrowserType.SAFARI] = NativeBrowserManagerModule.BrowserType.SAFARI;
    obj3[ConstantsIOS.WebBrowserType.IN_APP] = NativeBrowserManagerModule.BrowserType.IN_APP;
    obj3[ConstantsIOS.WebBrowserType.CHROME] = NativeBrowserManagerModule.BrowserType.CHROME;
    if (null != obj3[selectedBrowser]) {
      const browser = NativeBrowserManagerModuleDefault.selectBrowser(tmp5);
    }
  } else {
    const browser1 = NativeBrowserManagerModuleIOSDefault.selectBrowser(selectedBrowser);
  }
  closure_6.setState({ selectedBrowser });
  obj = PlatformUtils2;
  const obj5 = { selectedBrowser };
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  closure_6.setState({ isInAppBrowserOpen: false });
  if (obj.isIOS()) {
    NativeBrowserManagerModuleIOSDefault.closeBrowser();
  }
  obj = PlatformUtils2;
};
export const browserManagerClearWebsiteData = function browserManagerClearWebsiteData() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
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
      const result = NativeBrowserManagerModuleIOSDefault.setOpenAppStoreDismissCallback(() => {
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
    openPlayStoreInlineResult = NativeBrowserManagerModuleIOSDefault.openAppStoreInline(url, appId, impressionToken);
  }
  return openPlayStoreInlineResult;
};