// _runtime/00986_ANDROID_DEFAULT_BUNDLE_NAME.js
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import registerSpanErrorInstrumentation from "00682_registerSpanErrorInstrumentation.js";

const Platform = get_ActivityIndicator.Platform;
let c2 = "app:///index.android.bundle";

export const ANDROID_DEFAULT_BUNDLE_NAME = "app:///index.android.bundle";
export const IOS_DEFAULT_BUNDLE_NAME = "app:///main.jsbundle";
export const createReactNativeRewriteFrames = function createReactNativeRewriteFrames() {
  let obj = registerSpanErrorInstrumentation;
  obj = {
    iteratee(platform) {
      if ("java" !== platform.platform) {
        if ("cocoa" !== platform.platform) {
          if (platform.filename) {
            delete tmp[tmp2];
            const str2 = platform.filename;
            const str4 = platform.filename.replace(/^file:\/\//, "");
            platform.filename = platform.filename
              .replace(/^file:\/\//, "")
              .replace(/^address at /, "")
              .replace(/^.*\/[^.]+(\.app|CodePush|.*(?=\/))/, "");
            if ("[native code]" !== platform.filename) {
              if ("native" !== platform.filename) {
                let isHermesEnabledResult = callback(table[2]).isHermesEnabled();
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
                  platform.filename = closure_2;
                  return platform;
                } else {
                  tmp9Result = tmp9(tmp10[2]);
                  tmp9Result.isExpo();
                  if ("/InternalBytecode.js" === platform.filename) {
                    platform.in_app = false;
                  }
                  const filename = platform.filename;
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
                const obj3 = callback(table[2]);
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
