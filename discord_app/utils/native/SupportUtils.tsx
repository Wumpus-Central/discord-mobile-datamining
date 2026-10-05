// discord_app/utils/native/SupportUtils.tsx
import HelpdeskUtilsDefault from "../HelpdeskUtils.tsx";
import LinkingDefault from "../../lib/native/Linking.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import LocaleStore from "../../modules/user_settings/LocaleStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c2, c3, constants;

let obj = function _emailSupport() {
  obj = _asyncToGenerator(async () => {
    function getSessionInfo() {
      obj = closure_1_2(closure_1_3[2]);
      constants = obj.getConstants();
      let str2 = "N/A";
      const str = constants.Manifest;
      if (str.trim().length > 0) {
        str2 = constants.Manifest;
      }
      const Version = constants.Version;
      const obj2 = openURL(closure_1_3[3]);
      const systemVersion = obj2.getSystemVersion();
      const obj3 = openURL(closure_1_3[3]);
      return (
        "App version: " +
        Version +
        "\n  Manifest: " +
        str2 +
        "\n  iOS version: " +
        systemVersion +
        "\n  Device: " +
        obj3.getDeviceInfo() +
        "\n  Language: " +
        locale.locale
      );
    }
    if (c3 === 2) {
      c3 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let openURL;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp9 = LinkingDefault;
            let closure_1 = tmp9;
            openURL = tmp9.openURL;
            let obj2 = HelpdeskUtilsDefault;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.getSubmitRequestURL(getSessionInfo()), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          openURL(value);
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c3 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("utils/native/SupportUtils.tsx");

export const emailSupport = function emailSupport() {
  return obj(...arguments);
};
