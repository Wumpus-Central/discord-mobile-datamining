// _runtime/00986_ANDROID_DEFAULT_BUNDLE_NAME.js
import _mod17 from "metro/00017__.js";
import _mod682 from "metro/00682__.js";
import _mod867 from "metro/00867__.js";

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
            platform.filename = platform.filename
              .replace(/^file:\/\//, "")
              .replace(/^address at /, "")
              .replace(/^.*\/[^.]+(\.app|CodePush|.*(?=\/))/, "");
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
                let tmp9Result = _mod867;
                if (tmp9Result.isExpo()) {
                  platform.filename = filename;
                  return platform;
                } else {
                  tmp9Result = _mod867;
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
    },
  };
  return obj.rewriteFramesIntegration(obj);
};
