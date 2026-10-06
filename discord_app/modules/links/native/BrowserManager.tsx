// === Module 4857: BrowserManager ===

// Module 4857 (BrowserManager)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import LinkingDefault from "Linking" /* 4571 */;
import react_native2 from "react-native" /* 4858 */;
import react_nativeDefault2 from "react-native" /* 4859 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const react_nativeDefault = react_native2;
let c0, c1, closure_7;

let importDefaultResult;
let obj = function _browserManagerClearWebsiteData() {
  obj = _asyncToGenerator(async () => {
    let obj3;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj2 = PlatformUtils;
            if (obj2.isIOS()) {
              c1 = 1;
              c0 = 1;
              const obj6 = { value: obj3.clearWebsiteData(), done: false };
              obj3 = react_nativeDefault2;
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
const AppState = react_native.AppState;
if (PlatformUtils.isAndroid()) {
  importDefaultResult = react_nativeDefault;
} else {
  importDefaultResult = react_nativeDefault2;
}
const hasOwnProperty = importDefaultResult;
let closure_6 = module_570.create(() => {
  obj = { isInAppBrowserOpen: false };
  const merged = Object.assign(hasOwnProperty.getConstants());
  return obj;
});
let c7 = null;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isChromeInstalled) {
      return isChromeInstalled.isChromeInstalled;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((isChromeInstalled) => isChromeInstalled.isChromeInstalled));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(supportsInAppBrowser) {
      return supportsInAppBrowser.supportsInAppBrowser;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((supportsInAppBrowser) => supportsInAppBrowser.supportsInAppBrowser));
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(selectedBrowser) {
      return selectedBrowser.selectedBrowser;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((selectedBrowser) => selectedBrowser.selectedBrowser));
ReactCompilerGating = ReactCompilerGating_mod;
function getBrowserManagerIsChromeInstalled() {
  return closure_6.getState().isChromeInstalled;
}
function getBrowserManagerSelectedBrowser() {
  return closure_6.getState().selectedBrowser;
}
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(isInAppBrowserOpen) {
      return isInAppBrowserOpen.isInAppBrowserOpen;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  return closure_6(first);
}) : (() => closure_6((isInAppBrowserOpen) => isInAppBrowserOpen.isInAppBrowserOpen));
let result = size.fileFinishedImporting("modules/links/native/BrowserManager.tsx");

export const useBrowserManagerIsChromeInstalled = tmp3;
export { getBrowserManagerIsChromeInstalled };
export const useBrowserManagerSupportsInAppBrowser = tmp4;
export const useBrowserManagerSelectedBrowser = tmp5;
export { getBrowserManagerSelectedBrowser };
export const useIsInAppBrowserOpen = tmp6;
export const getIsInAppBrowserOpen = function getIsInAppBrowserOpen() {
  return closure_6.getState().isInAppBrowserOpen;
};
export const subscribeToIsInAppBrowserOpen = function subscribeToIsInAppBrowserOpen(arg0) {
  let closure_0 = arg0;
  return closure_6.subscribe((isInAppBrowserOpen, isInAppBrowserOpen2) => {
    if (isInAppBrowserOpen.isInAppBrowserOpen !== isInAppBrowserOpen2.isInAppBrowserOpen) {
      closure_0(isInAppBrowserOpen.isInAppBrowserOpen, isInAppBrowserOpen2.isInAppBrowserOpen);
    }
  });
};
export const browserManagerOpenUrl = function browserManagerOpenUrl(tryHandleUniversalLink) {
  let selectedBrowser = CHROME;
  if (CHROME === undefined) {
    selectedBrowser = state.getState().selectedBrowser;
  }
  if (selectedBrowser !== ConstantsIOS.WebBrowserType.SAFARI) {
    if (selectedBrowser !== ConstantsIOS.WebBrowserType.CHROME) {
      if (selectedBrowser === ConstantsIOS.WebBrowserType.IN_APP) {
        let tmp2Result = PlatformUtils;
      }
      if (ConstantsIOS.WebBrowserType.IN_APP === selectedBrowser) {
        const openInAppURLResult = hasOwnProperty.openInAppURL(tryHandleUniversalLink);
        return openInAppURLResult.then((result) => {
          if (false !== result) {
            state.setState({ isInAppBrowserOpen: true });
            const obj4 = closure_7;
            if (closure_7 != null) {
              obj4.remove();
            }
            closure_7 = null;
            obj = PlatformUtils;
            if (obj.isIOS()) {
              const obj3 = react_nativeDefault2;
              closure_7 = obj3.onSafariViewControllerDidFinish(() => {
                state.setState({ isInAppBrowserOpen: false });
                obj = c7;
                if (c7 != null) {
                  obj.remove();
                }
                c7 = null;
              });
            } else {
              const tmp2Result = PlatformUtils;
              if (tmp2Result.isAndroid()) {
                closure_7 = AppState.addEventListener("change", (event) => {
                  const isInAppBrowserOpen = "active" === event && state.getState().isInAppBrowserOpen;
                  if (isInAppBrowserOpen) {
                    state.setState({ isInAppBrowserOpen: false });
                    obj = c7;
                    if (c7 != null) {
                      obj.remove();
                    }
                    c7 = null;
                  }
                });
              }
            }
          }
        });
      } else if (ConstantsIOS.WebBrowserType.CHROME === selectedBrowser) {
        let openInChromeURLResult;
        const tmp2Result3 = PlatformUtils;
        if (tmp2Result3.isAndroid()) {
          const tmp6Result = react_nativeDefault;
          openInChromeURLResult = tmp6Result.openInChromeURL(tryHandleUniversalLink);
        } else {
          const tmp6Result2 = react_nativeDefault2;
          openInChromeURLResult = tmp6Result2.openInChromeURL(tryHandleUniversalLink, true);
        }
        return openInChromeURLResult;
      } else {
        const tmp2Result4 = GlobalUtils;
        return tmp2Result4.assertNever(selectedBrowser);
      }
    }
  }
  const obj6 = LinkingDefault;
  obj6.performURLNavigation(tryHandleUniversalLink);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj3 = {};
    obj3[ConstantsIOS.WebBrowserType.SAFARI] = react_native2.BrowserType.SAFARI;
    obj3[ConstantsIOS.WebBrowserType.IN_APP] = react_native2.BrowserType.IN_APP;
    obj3[ConstantsIOS.WebBrowserType.CHROME] = react_native2.BrowserType.CHROME;
    if (null != obj3[selectedBrowser]) {
      const obj4 = react_nativeDefault;
      const browser = obj4.selectBrowser(tmp5);
    }
  } else {
    const obj2 = react_nativeDefault2;
    const browser1 = obj2.selectBrowser(selectedBrowser);
  }
  const obj5 = { selectedBrowser };
  closure_6.setState(obj5);
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  closure_6.setState({ isInAppBrowserOpen: false });
  obj = PlatformUtils;
  if (obj.isIOS()) {
    const obj2 = react_nativeDefault2;
    obj2.closeBrowser();
  }
};
export const browserManagerClearWebsiteData = function browserManagerClearWebsiteData() {
  return obj(...arguments);
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, appId, arg2, impressionToken) {
  let openPlayStoreInlineResult;
  let closure_0 = arg2;
  let closure_1 = Date.now();
  obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj3 = react_nativeDefault;
    openPlayStoreInlineResult = obj3.openPlayStoreInline(url, appId, function callback() {
      if (closure_0 != null) {
        tmp2(tmp);
      }
    });
  } else {
    const tmp2 = null;
    if (null == appId) {
      openPlayStoreInlineResult = Promise.resolve(false);
    } else {
      if (null != arg2) {
        const obj2 = react_nativeDefault2;
        const result = obj2.setOpenAppStoreDismissCallback(() => {
          closure_0(Date.now() - closure_1);
        });
      }
      impressionToken = undefined;
      const openAppStoreInline = react_nativeDefault2.openAppStoreInline;
      react_nativeDefault2;
      if (impressionToken != null) {
        impressionToken = impressionToken.impressionToken;
      }
      if (impressionToken == null) {
        impressionToken = null;
      }
      openPlayStoreInlineResult = openAppStoreInline(url, appId, impressionToken);
    }
  }
  return openPlayStoreInlineResult;
};