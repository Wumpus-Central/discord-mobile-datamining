// _runtime/00997_ANDROID_DEFAULT_BUNDLE_NAME.js
import react_native from "00017_react-native.js";
import _mod693 from "metro/00693__.js";
import _mod878 from "metro/00878__.js";

let filename;

const Platform = react_native.Platform;
let c2 = "app:///index.android.bundle";

export const ANDROID_DEFAULT_BUNDLE_NAME = "app:///index.android.bundle";
export const IOS_DEFAULT_BUNDLE_NAME = "app:///main.jsbundle";
export const createReactNativeRewriteFrames = function createReactNativeRewriteFrames() {
  const obj = _mod693;
  const obj2 = {
    iteratee(platform) {
      if ("java" !== platform.platform) {
        if ("cocoa" !== platform.platform) {
          if (platform.filename) {
            delete tmp["abs_path"];
            const str = platform.filename;
            const str3 = str.replace(/^file:\/\//, "");
            const str4 = str3.replace(/^address at /, "");
            platform.filename = str4.replace(/^.*\/[^.]+(\.app|CodePush|.*(?=\/))/, "");
            if ("[native code]" !== platform.filename) {
              if ("native" !== platform.filename) {
                const obj3 = _mod878;
                const isHermesEnabledResult =
                  obj3.isHermesEnabled() && 1 === platform.lineno && undefined !== platform.colno;
                if (isHermesEnabledResult) {
                  platform.colno = platform.colno + 1;
                }
                const tmp8Result = _mod878;
                if (tmp8Result.isExpo()) {
                  platform.filename = filename;
                  return platform;
                } else {
                  let combined;
                  const tmp8Result2 = _mod878;
                  tmp8Result2.isExpo();
                  if ("/InternalBytecode.js" === platform.filename) {
                    platform.in_app = false;
                  }
                  filename = platform.filename;
                  if (0 === filename.indexOf("/")) {
                    const _HermesInternal2 = HermesInternal;
                    combined = "" + "app://" + platform.filename;
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
  return obj.rewriteFramesIntegration(obj2);
};
