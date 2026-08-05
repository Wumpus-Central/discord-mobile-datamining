// discord_app/modules/links/native/BrowserManager.tsx
import get_ActivityIndicator from "get ActivityIndicator";
import keys from "keys";

let NativeModules;
let c3;
let c4;
({ AppState: c3, NativeEventEmitter: c4, NativeModules } = get_ActivityIndicator);
let BrowserManager = NativeModules.BrowserManager;
let closure_7 = keys.create(() => {
  let obj = require("../../../utils/PlatformUtils.tsx") /* set */;
  if (obj.isAndroid()) {
    let isChromeInstalled = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").getConstants().isChromeInstalled;
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
  } else {
    isChromeInstalled = BrowserManager.isChromeInstalled;
  }
  obj = { isChromeInstalled, selectedBrowser: null, supportsInAppBrowser: null, isInAppBrowserOpen: false };
  let tmpResult = tmp(500);
  if (tmpResult.isAndroid()) {
    let selectedBrowser = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").getConstants().selectedBrowser;
    const obj5 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
  } else {
    selectedBrowser = BrowserManager.selectedBrowser;
  }
  obj[1] = selectedBrowser;
  tmpResult = tmp(500);
  if (tmpResult.isAndroid()) {
    let supportsInAppBrowser = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").getConstants().supportsInAppBrowser;
    const obj7 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
  } else {
    supportsInAppBrowser = BrowserManager.supportsInAppBrowser;
  }
  obj[2] = supportsInAppBrowser;
  return obj;
});
let c8 = null;
let result = require("set").fileFinishedImporting("modules/links/native/BrowserManager.tsx");

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
  let closure_0 = arg0;
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
  if (selectedBrowser !== require("../../../ConstantsIOS.tsx") /* keys */.WebBrowserType.SAFARI) {
    if (selectedBrowser !== tmp2(691).WebBrowserType.CHROME) {
      if (selectedBrowser === tmp2(691).WebBrowserType.IN_APP) {
        let tmp2Result = tmp2(500);
      }
      if (tmp2(691).WebBrowserType.IN_APP === selectedBrowser) {
        tmp2Result = tmp2(500);
        if (tmp2Result.isAndroid()) {
          let openInAppURLResult = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").openInAppURL(closure_0);
          const obj6 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
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
      } else if (tmp2(691).WebBrowserType.CHROME === selectedBrowser) {
        if (tmp2Result1.isAndroid()) {
          let openInChromeURLResult = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").openInChromeURL(closure_0);
          let obj4 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
        } else {
          openInChromeURLResult = BrowserManager.openInChromeURL(closure_0, true);
        }
        return openInChromeURLResult;
      } else {
        return tmp2(1351).assertNever(selectedBrowser);
      }
    }
  }
  require("../../../lib/native/Linking.tsx").performURLNavigation(closure_0);
  return Promise.resolve();
};
export const browserManagerSelectBrowser = function browserManagerSelectBrowser(selectedBrowser) {
  let obj = require("../../../utils/PlatformUtils.tsx") /* set */;
  if (obj.isAndroid()) {
    if (tmp(691).WebBrowserType.SAFARI === selectedBrowser) {
      const browser = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").selectBrowser(tmp(4252).BrowserType.SAFARI);
      const obj3 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
    } else if (tmp(691).WebBrowserType.IN_APP === selectedBrowser) {
      const browser1 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").selectBrowser(tmp(4252).BrowserType.IN_APP);
      const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
    } else if (tmp(691).WebBrowserType.CHROME === selectedBrowser) {
      const browser2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").selectBrowser(tmp(4252).BrowserType.CHROME);
      const obj5 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
    }
  } else {
    const BrowserManager = NativeModules.BrowserManager;
    const browser3 = BrowserManager.selectBrowser(selectedBrowser);
  }
  obj = { selectedBrowser };
  store.setState(obj);
};
export const browserManagerCloseBrowser = function browserManagerCloseBrowser() {
  store.setState({ isInAppBrowserOpen: false });
  if (!obj.isAndroid()) {
    const BrowserManager = NativeModules.BrowserManager;
    BrowserManager.closeBrowser();
  }
};
export const openPlayStoreInlineInstall = function openPlayStoreInlineInstall(url, arg1, arg2) {
  const _require = arg2;
  const importDefault = Date.now();
  if (obj.isAndroid()) {
    let openPlayStoreInlineResult = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx").openPlayStoreInline(url, arg1, function callback() {
      if (closure_0 != null) {
        tmp2(tmp);
      }
    });
    const obj2 = require("../../../../discord_common/js/packages/rtn-codegen/js/NativeBrowserManagerModule.tsx");
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