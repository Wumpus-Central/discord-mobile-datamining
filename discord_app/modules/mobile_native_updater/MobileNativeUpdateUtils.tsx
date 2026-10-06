// === Module 13737: MobileNativeUpdateUtils ===

// Module 13737 (MobileNativeUpdateUtils)
import LoggerDefault from "Logger" /* 3 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Linking from "Linking" /* 4571 */;
import MobileNativeUpdateConstants from "MobileNativeUpdateConstants" /* 4874 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c3;

let obj = function _checkForNewerBuild() {
  obj = _asyncToGenerator(async function() {
    let closure_0;
    let date;
    let str8;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp4;
        let obj7;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            tmp4 = undefined;
            obj7 = undefined;
            if (null === UPDATE_CONFIG) {
              c3 = 3;
              return { value: null, done: true };
            } else {
              const _HermesInternal3 = HermesInternal;
              logger.info("Checking " + UPDATE_CONFIG.url + " for updates");
              const HTTP = HTTPUtils.HTTP;
              const obj4 = { url: str8.toString(), headers: { Accept: "application/json" }, rejectWithError: false };
              const get = HTTP.get;
              str8 = UPDATE_CONFIG.url;
              c2 = 1;
              c3 = 1;
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          tmp4 = value;
          obj7 = { build: tmp4.body.build, version: tmp4.body.version, buildTimestamp: date, urls: tmp4.body.urls };
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date(tmp4.body.build_timestamp);
          if (obj7.build > closure_129_3.currentBuild) {
            let tmp15;
            if (obj7.version >= closure_129_3.currentVersion) {
              const _HermesInternal2 = HermesInternal;
              closure_129_4.info("Update build " + obj7.build + " is newer than " + closure_129_3.currentBuild);
              tmp15 = obj7;
            }
            c3 = 3;
            obj = { value: tmp15, done: true };
            return obj;
          }
          const _HermesInternal = HermesInternal;
          closure_129_4.info("Update build " + obj7.build + " is older than " + closure_129_3.currentBuild);
          tmp15 = null;
        }
      } catch (tmp22) {
        c3 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
function openBuildInstallerUrl(install) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(install);
    let origin1;
    const origin = uRL.origin;
    if (UPDATE_CONFIG != null) {
      origin1 = UPDATE_CONFIG.url.origin;
    }
    if (origin !== origin1) {
      const _HermesInternal = HermesInternal;
      logger.error("Attempted to follow invalid install URL " + uRL);
    } else {
      const openURLExternally = Linking.default.openURLExternally;
      obj = PlatformUtils;
      if (obj.isIOS()) {
        openURLExternally(uRL.toString(), ConstantsIOS.WebBrowserType.SAFARI);
      } else {
        openURLExternally(uRL.toString());
      }
    }
  } catch (err) {
  }
}
const UPDATE_CONFIG = MobileNativeUpdateConstants.UPDATE_CONFIG;
const logger = new LoggerDefault("MobileNativeUpdateUtils");
const tmp2 = new LoggerDefault("MobileNativeUpdateUtils");
const result = size.fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateUtils.tsx");

export const checkForNewerBuild = function checkForNewerBuild() {
  return obj(...arguments);
};
export const openBuildInstaller = function openBuildInstaller(newBuild) {
  openBuildInstallerUrl(newBuild.urls.install);
};
export { openBuildInstallerUrl };