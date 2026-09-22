// === Module 15824: SupportUtils ===

// Module 15824 (SupportUtils)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import LinkingDefault from "Linking" /* 4452 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import LocaleStore from "LocaleStore" /* 2109 */;

const require = fn;
let closure_6 = async function _emailSupport() {
  if (c3 === 2) {
    c3 = 3;
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
          const tmp10 = LinkingDefault;
          closure_1 = tmp10;
          const openURL = tmp10.openURL;
          c2 = 1;
          c3 = 1;
          const obj5 = {
            value: HelpdeskUtilsDefault.getSubmitRequestURL((function getSessionInfo() {
                      constants = closure_1_2(dependencyMap[2]).getConstants();
                      let str2 = "N/A";
                      if (str.trim().length > 0) {
                        str2 = constants.Manifest;
                      }
                      const obj = closure_1_2(dependencyMap[2]);
                      str = constants.Manifest;
                      const systemVersion = openURL(dependencyMap[3]).getSystemVersion();
                      const obj2 = openURL(dependencyMap[3]);
                      return "App version: " + constants.Version + "\n  Manifest: " + str2 + "\n  iOS version: " + systemVersion + "\n  Device: " + openURL(dependencyMap[3]).getDeviceInfo() + "\n  Language: " + locale.locale;
                    })()),
            done: false
          };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        openURL(value);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp11) {
      c3 = tmp;
      throw tmp11;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("utils/native/SupportUtils.tsx");

export const emailSupport = function emailSupport() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};