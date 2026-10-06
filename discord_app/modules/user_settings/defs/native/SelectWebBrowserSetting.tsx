// === Module 15315: SelectWebBrowserSetting ===

// Module 15315 (SelectWebBrowserSetting)
import react from "react" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl4 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import BrowserManager from "BrowserManager" /* 4857 */;
import SettingsConstants from "SettingsConstants" /* 7645 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11142 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let intl2;
  const obj = react;
  const cResult = obj.c(6);
  const obj2 = BrowserManager;
  const browserManagerIsChromeInstalled = obj2.useBrowserManagerIsChromeInstalled();
  const obj3 = BrowserManager;
  const browserManagerSupportsInAppBrowser = obj3.useBrowserManagerSupportsInAppBrowser();
  if (cResult[0] === browserManagerIsChromeInstalled) {
    let tmp6;
    if (cResult[1] === browserManagerSupportsInAppBrowser) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  const items = [];
  if (browserManagerSupportsInAppBrowser) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { label: intl.string(intl4.t.YayR6P), value: ConstantsIOS.WebBrowserType.IN_APP };
      intl = intl4.intl;
      cResult[3] = obj4;
      tmp8 = obj4;
    } else {
      tmp8 = cResult[3];
    }
    items.push(tmp8);
  }
  const tmpResult = PlatformUtils;
  if (!tmpResult.isAndroid()) {
    let tmp11;
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { label: intl2.string(intl4.t.kEfv89), value: ConstantsIOS.WebBrowserType.SAFARI };
      intl2 = intl4.intl;
      cResult[4] = obj5;
      tmp11 = obj5;
    } else {
      tmp11 = cResult[4];
    }
    items.push(tmp11);
  }
  if (browserManagerIsChromeInstalled) {
    let tmp14;
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      let stringResult;
      const tmpResult2 = PlatformUtils;
      const isAndroidResult = tmpResult2.isAndroid();
      const intl3 = intl4.intl;
      const string = intl3.string;
      const t = intl4.t;
      if (isAndroidResult) {
        stringResult = string(t.kEfv89);
      } else {
        stringResult = string(t.FfjVVt);
      }
      const obj6 = { label: stringResult, value: ConstantsIOS.WebBrowserType.CHROME };
      cResult[5] = obj6;
      tmp14 = obj6;
    } else {
      tmp14 = cResult[5];
    }
    items.push(tmp14);
  }
  cResult[0] = browserManagerIsChromeInstalled;
  cResult[1] = browserManagerSupportsInAppBrowser;
  cResult[2] = items;
  tmp6 = items;
}) : (() => {
  let intl;
  let intl2;
  const items = [];
  const obj = BrowserManager;
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  const obj2 = BrowserManager;
  if (obj2.useBrowserManagerSupportsInAppBrowser()) {
    const push = items.push;
    const obj3 = { label: intl.string(intl4.t.YayR6P), value: ConstantsIOS.WebBrowserType.IN_APP };
    intl = intl4.intl;
    push(obj3);
  }
  const tmpResult = PlatformUtils;
  if (!tmpResult.isAndroid()) {
    const push2 = items.push;
    const obj4 = { label: intl2.string(intl4.t.kEfv89), value: ConstantsIOS.WebBrowserType.SAFARI };
    intl2 = intl4.intl;
    push2(obj4);
  }
  if (browserManagerIsChromeInstalled) {
    let stringResult;
    const push3 = items.push;
    const tmpResult2 = PlatformUtils;
    const isAndroidResult = tmpResult2.isAndroid();
    const intl3 = intl4.intl;
    const string = intl3.string;
    const t = intl4.t;
    if (isAndroidResult) {
      stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    const obj5 = { label: stringResult, value: ConstantsIOS.WebBrowserType.CHROME };
    push3(obj5);
  }
  return items;
});
const fn = () => {
  const obj = BrowserManager;
  return obj.useBrowserManagerSelectedBrowser();
};
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["C+DkPu"]);
  },
  parent: MobileUserSettings.WEB_BROWSER,
  useValue: fn,
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const obj = BrowserManager;
    const result = obj.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: tmp3
};
const radio = SettingBuilders.createRadio(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export const useWebBrowserSettingOptions = tmp3;