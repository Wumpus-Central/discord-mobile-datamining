// === Module 986: ANDROID_DEFAULT_BUNDLE_NAME ===

// Module 986 (ANDROID_DEFAULT_BUNDLE_NAME)
import _mod17 from "module_17" /* 17 */;
import _mod682 from "module_682" /* 682 */;
import _mod867 from "module_867" /* 867 */;

const Platform = _mod17.Platform;
let c2 = "app:///index.android.bundle";

export const ANDROID_DEFAULT_BUNDLE_NAME = "app:///index.android.bundle";
export const IOS_DEFAULT_BUNDLE_NAME = "app:///main.jsbundle";
export const createReactNativeRewriteFrames = function createReactNativeRewriteFrames() {
  const obj = {
    iteratee(platform) {
      if ("java" !== platform.platform) {
        if ("cocoa" !== platform.platform) {
          if (platform.filename) {
            delete tmp[tmp2];
            const str4 = platform.filename.replace(/^file:\/\//, "");
            platform.filename = platform.filename.replace(/^file:\/\//, "").replace(/^address at /, "").replace(/^.*\/[^.]+(\.app|CodePush|.*(?=\/))/, "");
            if ("[native code]" !== platform.filename) {
              if ("native" !== platform.filename) {
                let isHermesEnabledResult = _mod867.isHermesEnabled();
                if (isHermesEnabledResult) {
                  isHermesEnabledResult = 1 === platform.lineno;
                }
                if (isHermesEnabledResult) {
                  isHermesEnabledResult = undefined !== platform.colno;
                }
                if (isHermesEnabledResult) {
                  platform.colno = platform.colno + 1;
                }
                let tmp9Result = tmp9(tmp10[2]);
                if (tmp9Result.isExpo()) {
                  platform.filename = filename;
                  return platform;
                } else {
                  tmp9Result = tmp9(tmp10[2]);
                  tmp9Result.isExpo();
                  if ("/InternalBytecode.js" === platform.filename) {
                    platform.in_app = false;
                  }
                  filename = platform.filename;
                  if (0 === filename.indexOf("/")) {
                    const _HermesInternal2 = HermesInternal;
                    let combined = "" + "app://" + platform.filename;
                  } else {
                    const _HermesInternal = HermesInternal;
                    combined = "" + "app://" + "/" + platform.filename;
                  }
                  platform.filename = combined;
                  return platform;
                }
              }
            }
            return platform;
          } else {
            return platform;
          }
        }
      }
      return platform;
    }
  };
  return obj.rewriteFramesIntegration(obj);
};