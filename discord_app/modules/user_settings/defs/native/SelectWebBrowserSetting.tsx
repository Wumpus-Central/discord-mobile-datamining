// discord_app/modules/user_settings/defs/native/SelectWebBrowserSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import obj1322 from "../../../../utils/PlatformUtils.tsx";
import keys from "../../../../ConstantsIOS.tsx";
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