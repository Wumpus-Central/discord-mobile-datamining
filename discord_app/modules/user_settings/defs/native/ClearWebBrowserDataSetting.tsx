// discord_app/modules/user_settings/defs/native/ClearWebBrowserDataSetting.tsx
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import BrowserManager from "../../../links/native/BrowserManager.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
const SettingBuilders = fn(11714);
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.HNqvOh);
  },
  parent: fn(8194).MobileUserSettings.WEB_BROWSER,
  variant: "danger",
  onPress: function showClearWebBrowserDataAlert() {
    const obj2 = { key: "clear-web-browser-data", title: null, content: null, confirmText: null, onConfirm: null };
    let intl = require("util").intl;
    obj2.title = intl.string(require("util").t.HNqvOh);
    const intl2 = require("util").intl;
    obj2.content = intl2.string(require("util").t.IyXIFu);
    const intl3 = require("util").intl;
    obj2.confirmText = intl3.string(require("util").t.HNqvOh);
    _require = asyncGeneratorStep(async () => {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw value;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              v1 = 1;
              dependencyMap = 1;
              const obj5 = { value: tmp4(4686).browserManagerClearWebsiteData(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            const obj7 = { key: "web-browser-data-cleared", content: null };
            const intl = tmp4(1115).intl;
            obj7.content = intl.string(tmp4(1115).t["zaEQz+"]);
            v1(4420).open(obj7);
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp7) {
          dependencyMap = tmp;
          throw tmp7;
        }
      }
    });
    obj2.onConfirm = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    require("AlertModal").showConfirmModal(obj2);
  },
  usePredicate() {
    const browserManagerSelectedBrowser = BrowserManager.useBrowserManagerSelectedBrowser();
    return PlatformUtils.isIOS() && browserManagerSelectedBrowser === ConstantsIOS.WebBrowserType.IN_APP;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ClearWebBrowserDataSetting.tsx");

export default pressable;
