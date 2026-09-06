// === Module 5587: preload ===

// Module 5587 (preload)
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 5588 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import set from "set" /* 1115 */;

class FastImageAndroid {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj.defaultSource = global.placeholder;
    obj.fadeDuration = 0;
    return jsx(Image, obj);
  }
}
({ Image: obj1, NativeModules: c3 } = get_ActivityIndicator);
let closure_5 = createCacheKey.createStyles({ base: { overflow: "hidden" } });
let merged = Object.assign(noopAll.memo((fade) => {
  ({ placeholder, enableAnimation } = fade);
  let tmp2 = undefined === enableAnimation;
  ({ source, style } = fade);
  if (!tmp2) {
    tmp2 = enableAnimation;
  }
  fade = fade.fade;
  let tmp3 = undefined === fade;
  ({ paused, manualPlayback } = fade);
  if (!tmp3) {
    tmp3 = fade;
  }
  const usesSmallCache = fade.usesSmallCache;
  if (typeof source === "number") {
    let obj = {};
    const merged = Object.assign(fade);
    return <closure_2 />;
  } else {
    let assetSource = null;
    if (null != placeholder) {
      assetSource = closure_2.resolveAssetSource(placeholder);
    }
    obj = {};
    const merged1 = Object.assign(fade);
    const items = [tmp.base, style];
    obj.style = items;
    let uri;
    if (assetSource != null) {
      uri = assetSource.uri;
    }
    obj.placeholder = uri;
    obj.enableAnimation = tmp2;
    obj.paused = paused;
    obj.manualPlayback = manualPlayback;
    obj.fade = tmp3;
    obj.usesSmallCache = tmp4;
    return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
  }
  tmp = callback();
  tmp4 = undefined !== usesSmallCache && usesSmallCache;
}), {
  preload(arg0) {
    closure_0 = arg0;
    let num = arg1;
    if (arg1 === undefined) {
      num = 2000;
    }
    let promise = new Promise((arg0) => {
      const ImageManager = closure_1_3.ImageManager;
      ImageManager.preload(closure_0, arg0);
    });
    const items = [promise, ];
    promise = new Promise((arg0) => setTimeout(arg0, num));
    items[1] = promise;
    return Promise.race(items);
  }
});
FastImageAndroid.preload = (closure_0) => {
  closure_0 = arg1;
  const catchPromise = closure_2.prefetch(closure_0).catch(() => {

  });
  let racePromise = catchPromise;
  if (null != arg1) {
    const items = [catchPromise, ];
    const promise = new Promise((arg0) => setTimeout(arg0, closure_0));
    items[1] = promise;
    racePromise = Promise.race(items);
  }
  return racePromise;
};
if (set.isAndroid()) {
  merged = FastImageAndroid;
}
const result = set.fileFinishedImporting("components_native/common/FastImage.tsx");

export default merged;