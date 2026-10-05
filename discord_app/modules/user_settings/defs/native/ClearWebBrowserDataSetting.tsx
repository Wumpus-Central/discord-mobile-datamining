// === Module 15302: ClearWebBrowserDataSetting ===

// Module 15302 (ClearWebBrowserDataSetting)
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl4 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import BrowserManager from "BrowserManager" /* 4851 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c2;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.HNqvOh);
  },
  parent: MobileUserSettings.WEB_BROWSER,
  variant: "danger",
  onPress: function showClearWebBrowserDataAlert() {
    let closure_0;
    let intl;
    let intl2;
    let intl3;
    let obj = {
      key: "clear-web-browser-data",
      title: intl.string(require("intl").t.HNqvOh),
      content: intl2.string(require("intl").t.IyXIFu),
      confirmText: intl3.string(require("intl").t.HNqvOh),
      onConfirm: function() {
        return closure_0(...arguments);
      }
    };
    const showConfirmModal = require("AlertModal").showConfirmModal;
    require("AlertModal");
    intl = require("intl").intl;
    intl2 = require("intl").intl;
    intl3 = require("intl").intl;
    _require = _asyncToGenerator(async () => {
      let intl;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              v1 = 1;
              const obj2 = tmp3(c2[4]);
              c2 = 1;
              const obj5 = { value: obj2.browserManagerClearWebsiteData(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const obj6 = { key: "web-browser-data-cleared", content: intl.string(tmp3(c2[3]).t["zaEQz+"]) };
            const open = v1(c2[5]).open;
            const tmp13 = v1(c2[5]);
            intl = tmp3(c2[3]).intl;
            open(obj6);
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp6) {
          c2 = 3;
          throw tmp6;
        }
      }
    });
    showConfirmModal(obj);
  },
  usePredicate() {
    const obj = BrowserManager;
    const browserManagerSelectedBrowser = obj.useBrowserManagerSelectedBrowser();
    const obj2 = PlatformUtils;
    const tmp4 = obj2.isIOS() && browserManagerSelectedBrowser === ConstantsIOS.WebBrowserType.IN_APP;
    return tmp4;
  }
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClearWebBrowserDataSetting.tsx");

export default pressable;