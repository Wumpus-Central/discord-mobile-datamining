// === Module 15751: SelectWebBrowserSetting ===

// Module 15751 (SelectWebBrowserSetting)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import BrowserManager from "BrowserManager" /* 4720 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

function useWebBrowserSettingOptions() {
  let CHROME = dependencyMap;
  const items = [];
  const browserManagerIsChromeInstalled = BrowserManager.useBrowserManagerIsChromeInstalled();
  if (obj2.useBrowserManagerSupportsInAppBrowser()) {
    const obj3 = { label: null, value: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.YayR6P);
    obj3.value = ConstantsIOS.WebBrowserType.IN_APP;
    items.push(obj3);
  }
  obj2 = BrowserManager;
  if (!tmpResult.isAndroid()) {
    const obj4 = { label: null, value: null };
    const intl2 = util.intl;
    obj4.label = intl2.string(util.t.kEfv89);
    obj4.value = ConstantsIOS.WebBrowserType.SAFARI;
    items.push(obj4);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    const tmpResult2 = PlatformUtils;
    const intl3 = util.intl;
    const string = intl3.string;
    let t = util.t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    const obj5 = { label: stringResult, value: null };
    CHROME = ConstantsIOS.WebBrowserType.CHROME;
    obj5.value = CHROME;
    t = items.push(obj5);
    isAndroidResult = PlatformUtils.isAndroid();
  }
  tmpResult = PlatformUtils;
}
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["C+DkPu"]);
  },
  parent: SettingsConstants.MobileUserSettings.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return BrowserManager.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = BrowserManager.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };