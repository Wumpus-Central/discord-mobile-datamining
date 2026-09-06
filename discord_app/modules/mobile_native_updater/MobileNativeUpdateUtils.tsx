// discord_app/modules/mobile_native_updater/MobileNativeUpdateUtils.tsx
import LoggerDefault from "../debug/Logger.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Linking from "../../lib/native/Linking.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _checkForNewerBuild(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          if (null === UPDATE_CONFIG) {
            c3 = 3;
            return { value: null, done: true };
          } else {
            const _HermesInternal2 = HermesInternal;
            logger.info("Checking " + UPDATE_CONFIG.url + " for updates");
            const HTTP = HTTPUtils.HTTP;
            const obj1 = {
              url: UPDATE_CONFIG.url.toString(),
              headers: { Accept: "application/json" },
              rejectWithError: false,
            };
            c2 = 1;
            c3 = 1;
            const obj2 = { value: HTTP.get(obj1), done: false };
            return obj2;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        const obj3 = {
          build: closure_128_0.body.build,
          version: closure_128_0.body.version,
          buildTimestamp: null,
          urls: null,
        };
        let infoResult2 = globalThis;
        const _Date = Date;
        const date = new Date(closure_128_0.body.build_timestamp);
        obj3.buildTimestamp = date;
        obj3.urls = closure_128_0.body.urls;
        closure_128_1 = obj3;
        if (closure_128_1.build <= closure_129_3.currentBuild) {
          const _HermesInternal = HermesInternal;
          closure_129_4.info("Update build " + closure_128_1.build + " is older than " + closure_129_3.currentBuild);
          c3 = 3;
        }
        infoResult2 = closure_129_4.info(
          "Update build " + closure_128_1.build + " is newer than " + closure_129_3.currentBuild,
        );
      }
    } catch (tmp24) {
      c3 = tmp;
      throw tmp24;
    }
  }
};
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
      const openURLExternally = Linking.default.openURLExternally;
      if (obj.isIOS()) {
        openURLExternally(str.toString(), ConstantsIOS.WebBrowserType.SAFARI);
      } else {
        openURLExternally(str.toString());
      }
    }
  } catch (err) {}
}
const UPDATE_CONFIG = fn(4541).UPDATE_CONFIG;
const logger = new LoggerDefault("MobileNativeUpdateUtils");
const size = fn(2);
const result = size.fileFinishedImporting("modules/mobile_native_updater/MobileNativeUpdateUtils.tsx");

export const checkForNewerBuild = function checkForNewerBuild() {
  const self = this;
  const apply = closure_5.apply;
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
