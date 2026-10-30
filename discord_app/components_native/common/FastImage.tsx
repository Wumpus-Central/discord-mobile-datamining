// discord_app/components_native/common/FastImage.tsx
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import FastImageNativeComponentDefault from "../../../discord_common/js/packages/rtn-codegen/js/FastImageNativeComponent.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, StyleSheet: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let FastImageApngExperiment = fn(5713);
FastImageApngExperiment = FastImageApngExperiment.initializeFastImageApngExperiment();
let size = fn(2);
const result1 = size.fileFinishedImporting("components_native/common/FastImage.tsx");

export default noop.memo(function FastImage(enableAnimation) {
  ({ accessible, accessibilityLabel, autoPlay } = enableAnimation);
  if (autoPlay === undefined) {
    autoPlay = true;
  }
  let flag = enableAnimation.enableAnimation;
  if (flag === undefined) {
    flag = true;
  }
  let num = enableAnimation.fadeDuration;
  if (num === undefined) {
    num = 200;
  }
  ({ placeholder, resizeMode, source, style, tintColor, usesSmallCache, paused } = enableAnimation);
  if (usesSmallCache === undefined) {
    usesSmallCache = false;
  }
  const merged = Object.assign(
    enableAnimation,
    Object.assign({
      accessible: 0,
      accessibilityLabel: 0,
      autoPlay: 0,
      enableAnimation: 0,
      fadeDuration: 0,
      paused: 0,
      placeholder: 0,
      resizeMode: 0,
      source: 0,
      style: 0,
      tintColor: 0,
      usesSmallCache: 0,
    }),
  );
  if (null != source) {
    if (typeof source !== "number") {
      const _Array = Array;
      let tmp3 = source;
      if (!Array.isArray(source)) {
        const items = [source];
        tmp3 = items;
      }
      const tmp2 = tmp3;
    }
  }
  const items1 = [{ overflow: "hidden" }, style, ,];
  let tmp4;
  if (null != tintColor) {
    const obj = { tintColor };
    tmp4 = obj;
  }
  items1[2] = tmp4;
  let tmp5;
  if (null != resizeMode) {
    const obj2 = { resizeMode };
    tmp5 = obj2;
  }
  items1[3] = tmp5;
  if (accessible == null) {
    accessible = null != accessibilityLabel || undefined;
    const tmp6 = null != accessibilityLabel || undefined;
  }
  let tmp7 = null != source && typeof source === "object";
  if (tmp7) {
    tmp7 = "__packager_asset" in source;
  }
  if (tmp7) {
    tmp7 = true === source.__packager_asset;
  }
  React4.flatten(style);
  if (typeof source !== "number") {
    if (!tmp7) {
      const obj3 = {};
      const merged1 = Object.assign(merged);
      obj3.accessible = accessible;
      obj3.accessibilityLabel = accessibilityLabel;
      obj3.shouldNotifyLoadEvents =
        null != merged.onLoadStart ||
        null != merged.onLoad ||
        null != merged.onLoadEnd ||
        null != merged.onError ||
        null != merged.onProgress;
      obj3.source = tmp2;
      const size = { width: null, height: null };
      ({ width: obj4.width, height: obj4.height } = merged);
      const items2 = [size, items1];
      obj3.style = items2;
      let assetSource = null;
      if (null != placeholder) {
        assetSource = React3.resolveAssetSource(placeholder);
      }
      let uri;
      if (assetSource != null) {
        uri = assetSource.uri;
      }
      obj3.placeholder = uri;
      obj3.autoPlay = autoPlay;
      obj3.enableAnimation = flag;
      obj3.paused = paused;
      obj3.fadeDuration = num;
      obj3.usesSmallCache = usesSmallCache;
      let tmp20Result = jsx(FastImageNativeComponentDefault, {});
    }
    return tmp20Result;
  }
  const obj5 = {};
  const merged2 = Object.assign(merged);
  obj5.resizeMode = resizeMode;
  obj5.source = source;
  obj5.style = items1;
  obj5.tintColor = tintColor;
  obj5.accessible = accessible;
  obj5.accessibilityLabel = accessibilityLabel;
  let tmp23;
  if (obj6.isAndroid()) {
    tmp23 = placeholder;
  }
  obj5.defaultSource = tmp23;
  let num2 = 0;
  if (typeof source !== "number") {
    num2 = 0;
    if (!tmp7) {
      num2 = num;
    }
  }
  obj5.fadeDuration = num2;
  tmp20Result = <React3 />;
  obj6 = PlatformUtils;
});
