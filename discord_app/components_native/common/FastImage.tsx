// === Module 5587: FastImage ===

// Module 5587 (FastImage)
import FastImageNativeComponentDefault from "FastImageNativeComponent" /* 5588 */;
import noop from "module_19" /* 19 */;

class FastImageAndroid {
  constructor(arg0) {
    obj = {};
    merged = Object.assign(global);
    obj.defaultSource = global.placeholder;
    obj.fadeDuration = 0;
    return jsx(Image, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Image: c2, NativeModules: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ base: { overflow: "hidden" } });
let merged = Object.assign(noop.memo((fade) => {
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
    return <React2 />;
  } else {
    let assetSource = null;
    if (null != placeholder) {
      assetSource = React2.resolveAssetSource(placeholder);
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
    return jsx(FastImageNativeComponentDefault, {});
  }
  tmp = closure_5();
  tmp4 = undefined !== usesSmallCache && usesSmallCache;
}), {
  preload(arg0) {
    closure_0 = arg0;
    let promise = new Promise((arg0) => {
      ImageManager = ImageManager.ImageManager;
      ImageManager.preload(closure_0, arg0);
    });
    const items = [promise, ];
    promise = new Promise((arg0) => setTimeout(arg0, num));
    items[1] = promise;
    return Promise.race(items);
  }
});
FastImageAndroid.preload = (arg0, arg1) => {
  closure_0 = arg1;
  const catchPromise = React2.prefetch(arg0).catch(() => {

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
const PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  merged = FastImageAndroid;
}
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default merged;