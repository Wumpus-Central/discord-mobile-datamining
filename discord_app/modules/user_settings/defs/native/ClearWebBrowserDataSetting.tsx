// discord_app/modules/user_settings/defs/native/ClearWebBrowserDataSetting.tsx
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import BrowserManager from "../../../links/native/BrowserManager.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
      onConfirm: function () {
        return closure_0(...arguments);
      },
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
  },
};
const pressable = SettingBuilders.createPressable(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClearWebBrowserDataSetting.tsx");

export default pressable;
