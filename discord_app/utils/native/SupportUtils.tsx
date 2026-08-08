// discord_app/utils/native/SupportUtils.tsx
import combined from "combined";
import _getSystemLocale from "_getSystemLocale";

const require = arg1;
function _emailSupport() {
  const self = this;
  const tmp = callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const tmp10 = outer1_1(3998);
            let closure_1 = tmp10;
            const openURL = tmp10.openURL;
            let obj1 = outer1_1(1974);
            c2 = 1;
            dependencyMap = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.getSubmitRequestURL((function getSessionInfo() {
              const constants = v1(table[2]).getConstants();
              let str2 = "N/A";
              if (str.trim().length > 0) {
                str2 = constants.Manifest;
              }
              const obj = v1(table[2]);
              str = constants.Manifest;
              const systemVersion = openURL(table[3]).getSystemVersion();
              const obj2 = openURL(table[3]);
              return "App version: " + constants.Version + "\n  Manifest: " + str2 + "\n  iOS version: " + systemVersion + "\n  Device: " + openURL(table[3]).getDeviceInfo() + "\n  Language: " + locale.locale;
            })());
            return obj1;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          openURL(arg1);
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp11) {
        dependencyMap = tmp;
        throw tmp11;
      }
    }
  });
  const _emailSupport = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("getConstants").fileFinishedImporting("utils/native/SupportUtils.tsx");

export const emailSupport = function emailSupport() {
  const self = this;
  const apply = _emailSupport.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};