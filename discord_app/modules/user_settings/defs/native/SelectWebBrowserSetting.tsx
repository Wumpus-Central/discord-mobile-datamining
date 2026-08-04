import createToggle from "createToggle";

function useWebBrowserSettingOptions() {
  let CHROME = dependencyMap;
  let obj = require(4251) /* NativeModules */;
  const items = [];
  const browserManagerIsChromeInstalled = obj.useBrowserManagerIsChromeInstalled();
  let obj1 = require(4251) /* NativeModules */;
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
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["C+DkPu"]);
  },
  parent: require("MobileSetting").MobileSetting.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return require(4251) /* NativeModules */.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = require(4251) /* NativeModules */.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
});
let obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["C+DkPu"]);
  },
  parent: require("MobileSetting").MobileSetting.WEB_BROWSER,
  useValue: function useWebBrowserSettingValue() {
    return require(4251) /* NativeModules */.useBrowserManagerSelectedBrowser();
  },
  onValueChange: function onWebBrowserSettingValueChange(arg0) {
    const result = require(4251) /* NativeModules */.browserManagerSelectBrowser(Number(arg0));
  },
  useOptions: useWebBrowserSettingOptions
};
let result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SelectWebBrowserSetting.tsx");

export default radio;
export { useWebBrowserSettingOptions };