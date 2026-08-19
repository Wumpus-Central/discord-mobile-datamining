// discord_app/modules/mobile_native_updater/MobileNativeUpdateUtils.tsx
import timestampDefault from "../debug/Logger.tsx";
import obj132 from "../../utils/PlatformUtils.tsx";
import keys from "../../ConstantsIOS.tsx";
import _mod4090 from "../../lib/native/Linking.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import { UPDATE_CONFIG } from "MobileNativeUpdateConstants.tsx";

require = fn;
function _checkForNewerBuild() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let obj3 = tmp2;
            closure_0 = tmp5;
            closure_0 = undefined;
            obj3 = undefined;
            if (null === c3) {
              c3 = 3;
              return { value: null, done: true };
            } else {
              const _HermesInternal2 = HermesInternal;
              closure_1_4.info("Checking " + c3.url + " for updates");
              const HTTP = closure_1_0(closure_1_1[3]).HTTP;
              obj1 = { url: null, headers: null, rejectWithError: false };
              obj1[0] = c3.url.toString();
              obj1[1] = { Accept: "application/json" };
              c2 = 1;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          obj3 = { build: null, version: null, buildTimestamp: null, urls: null };
          obj3[0] = closure_0.body.build;
          obj3[1] = closure_0.body.version;
          let infoResult2 = globalThis;
          const _Date = Date;
          const date = new Date(closure_0.body.build_timestamp);
          obj3[2] = date;
          obj3[3] = closure_0.body.urls;
          if (obj3.build <= c3.currentBuild) {
            const _HermesInternal = HermesInternal;
            logger.info("Update build " + obj3.build + " is older than " + c3.currentBuild);
            c3 = 3;
          }
          infoResult2 = logger.info("Update build " + obj3.build + " is newer than " + c3.currentBuild);
        }
      } catch (tmp24) {
        c3 = tmp;
        throw tmp24;
      }
    }
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function openBuildInstallerUrl(install) {
  try {
    const _URL = URL;
    const uRL = new URL(install);
    let origin;
    if (UPDATE_CONFIG != null) {
      origin = UPDATE_CONFIG.url.origin;
    }
    if (uRL.origin !== origin) {
      const _HermesInternal = HermesInternal;
      logger.error("Attempted to follow invalid install URL " + str);
    } else {
      const openURLExternally = _mod4090.default.openURLExternally;
      if (obj.isIOS()) {
        openURLExternally(str.toString(), keys.WebBrowserType.SAFARI);
      } else {
        openURLExternally(str.toString());
      }
      obj = obj132;
    }
  } catch (err) {
  }
}
let closure_4 = new timestampDefault("MobileNativeUpdateUtils");
const tmp2 = new timestampDefault("MobileNativeUpdateUtils");
const result = require("obj132").fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateUtils.tsx");

export const checkForNewerBuild = function checkForNewerBuild() {
  const self = this;
  const apply = _checkForNewerBuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const openBuildInstaller = function openBuildInstaller(newBuild) {
  openBuildInstallerUrl(newBuild.urls.install);
};
export { openBuildInstallerUrl };