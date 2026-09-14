// discord_app/modules/user_settings/defs/native/SelectWebBrowserSetting.tsx
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import BrowserManager from "../../../links/native/BrowserManager.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
  useOptions: useWebBrowserSettingOptions,
});
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };
