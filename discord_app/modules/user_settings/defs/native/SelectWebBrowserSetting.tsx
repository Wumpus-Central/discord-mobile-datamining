// discord_app/modules/user_settings/defs/native/SelectWebBrowserSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import NativeModules from "../../../links/native/BrowserManager.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

function useWebBrowserSettingOptions() {
  let CHROME = dependencyMap;
  let obj = NativeModules;
  const items = [];
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  obj1 = NativeModules;
  if (obj1.useBrowserManagerSupportsInAppBrowser()) {
    obj = { label: null, value: null };
    const intl = tmp(1236).intl;
    obj[0] = intl.string(tmp(1236).t.YayR6P);
    obj[1] = tmp(691).WebBrowserType.IN_APP;
    items.push(obj);
  }
  let tmpResult = tmp(500);
  if (!tmpResult.isAndroid()) {
    obj = { label: null, value: null };
    const intl2 = tmp(1236).intl;
    obj[0] = intl2.string(tmp(1236).t.kEfv89);
    obj[1] = tmp(691).WebBrowserType.SAFARI;
    items.push(obj);
  }
  if (!browserManagerIsChromeInstalled) {
    return items;
  } else {
    tmpResult = tmp(500);
    const intl3 = tmp(1236).intl;
    const string = intl3.string;
    let t = tmp(1236).t;
    if (isAndroidResult) {
      let stringResult = string(t.kEfv89);
    } else {
      stringResult = string(t.FfjVVt);
    }
    obj1 = { label: null, value: null };
    obj1[0] = stringResult;
    CHROME = tmp(691).WebBrowserType.CHROME;
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
  useOptions: useWebBrowserSettingOptions,
});
let obj = {
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
  useOptions: useWebBrowserSettingOptions,
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };
