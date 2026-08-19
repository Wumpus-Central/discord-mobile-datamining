// === Module 14784: useWebBrowserSettingOptions ===

// Module 14784 (useWebBrowserSettingOptions)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import keys from "keys" /* 691 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import NativeModules from "NativeModules" /* 4340 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;

function useWebBrowserSettingOptions() {
  let CHROME = dependencyMap;
  let obj = NativeModules;
  const items = [];
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  obj1 = NativeModules;
  if (obj1.useBrowserManagerSupportsInAppBrowser()) {
    obj = { label: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.YayR6P);
    obj[1] = keys.WebBrowserType.IN_APP;
    items.push(obj);
  }
  let tmpResult = obj1322;
  if (!tmpResult.isAndroid()) {
    obj = { label: null, value: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t.kEfv89);
    obj[1] = keys.WebBrowserType.SAFARI;
    items.push(obj);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    tmpResult = obj1322;
    const intl3 = getSystemLocale.intl;
    const string = intl3.string;
    let t = getSystemLocale.t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    obj1 = { label: null, value: null };
    obj1[0] = stringResult;
    CHROME = keys.WebBrowserType.CHROME;
    obj1[1] = CHROME;
    t = items.push(obj1);
    isAndroidResult = tmpResult.isAndroid();
  }
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["C+DkPu"]);
  },
  parent: MobileUserSettings.MobileUserSettings.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return NativeModules.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = NativeModules.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
});
let result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };