// === Module 15476: SelectWebBrowserSetting ===

// Module 15476 (SelectWebBrowserSetting)
import util from "util" /* 1114 */;
import BrowserManager from "BrowserManager" /* 4525 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

function useWebBrowserSettingOptions() {
  let CHROME = dependencyMap;
  let obj = BrowserManager;
  const items = [];
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  let obj1 = BrowserManager;
  if (obj1.useBrowserManagerSupportsInAppBrowser()) {
    obj = { label: null, value: null };
    const intl = tmp(1114).intl;
    obj.label = intl.string(tmp(1114).t.YayR6P);
    obj.value = tmp(1093).WebBrowserType.IN_APP;
    items.push(obj);
  }
  let tmpResult = tmp(1115);
  if (!tmpResult.isAndroid()) {
    obj = { label: null, value: null };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(tmp(1114).t.kEfv89);
    obj.value = tmp(1093).WebBrowserType.SAFARI;
    items.push(obj);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    tmpResult = tmp(1115);
    const intl3 = tmp(1114).intl;
    const string = intl3.string;
    let t = tmp(1114).t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    obj1 = { label: stringResult, value: null };
    CHROME = tmp(1093).WebBrowserType.CHROME;
    obj1.value = CHROME;
    t = items.push(obj1);
    isAndroidResult = tmpResult.isAndroid();
  }
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