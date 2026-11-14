// discord_app/modules/media_viewer/native/components/MediaViewerItemPresenter.tsx
import MediaViewerEntranceJankExperiment from "../MediaViewerEntranceJankExperiment.tsx";
import getMediaViewerStateForScreenDefault from "../getMediaViewerStateForScreen.tsx";
import MediaViewerItemTransformPresenterDefault from "MediaViewerItemTransformPresenter.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const _modDef1655 = tmp5(1655);
require = fn;
function MediaViewerItemPresenter(windowHeight) {
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  _require = windowWidth;
  windowHeight = windowHeight.windowHeight;
  importDefault = windowHeight;
  ({ entranceAnimationDriver, index } = windowHeight);
  ({ useItemVisible, panGestureConfig } = windowHeight);
  const entranceAnimation = require("useEntranceAnimation").useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  let obj = require("useEntranceAnimation");
  const mediaItemHasSpoiler = require("useMediaItemHasSpoiler").useMediaItemHasSpoiler(index);
  let size = getMediaViewerStateForScreenDefault(windowWidth, windowHeight, source);
  const width = size.width;
  dependencyMap = width;
  const height = size.height;
  noop = height;
  const itemVisible = useItemVisible(index);
  const overlayEnabled = panGestureConfig.overlayEnabled;
  c4 = overlayEnabled;
  items = [overlayEnabled];
  const callback = noop.useCallback(() => {
    const result = _undefined.set(!_undefined.get());
  }, items);
  let items1 = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      const obj4 = {
        key: null,
        onLoadStart: null,
        onLoad: null,
        onError: null,
        source: null,
        style: null,
        index: null,
        hasSpoiler: null,
        visible: null,
        onToggleOverlay: null,
      };
      const _HermesInternal2 = HermesInternal;
      obj4.key = "0:" + index + ":" + source[0].uri;
      obj4.onLoadStart = handleLoadStart;
      obj4.onLoad = handleLoad;
      obj4.onError = handleError;
      obj4.source = source[0];
      obj4.style = c7.platformStyles;
      obj4.index = index;
      obj4.hasSpoiler = mediaItemHasSpoiler;
      obj4.visible = itemVisible;
      obj4.onToggleOverlay = callback;
      items1.push(renderMedia(obj4));
    }
    if (loads >= 1) {
      const obj5 = {
        key: null,
        source: null,
        style: null,
        onLoad: null,
        onError: null,
        pointerEvents: null,
        fadeDuration: 0,
        index: null,
        hasSpoiler: null,
        visible: null,
        onToggleOverlay: null,
      };
      const _HermesInternal3 = HermesInternal;
      obj5.key = "1:" + index + ":" + source[0].uri;
      obj5.source = source[1];
      obj5.style = c7.platformStyles;
      obj5.onLoad = handleLoad;
      obj5.onError = handleError;
      let str5 = "auto";
      if (tmp10) {
        str5 = "none";
      }
      obj5.pointerEvents = str5;
      obj5.index = index;
      obj5.hasSpoiler = mediaItemHasSpoiler;
      obj5.visible = itemVisible;
      obj5.onToggleOverlay = callback;
      items1.push(renderMedia(obj5));
    }
  } else {
    const obj6 = {
      key: null,
      onLoadStart: null,
      onLoad: null,
      onError: null,
      source: null,
      style: null,
      index: null,
      hasSpoiler: null,
      visible: null,
      onToggleOverlay: null,
    };
    const _HermesInternal = HermesInternal;
    obj6.key = "0:" + index + ":" + source.uri;
    obj6.onLoadStart = handleLoadStart;
    obj6.onLoad = handleLoad;
    obj6.onError = handleError;
    obj6.source = source;
    obj6.style = c7.platformStyles;
    obj6.index = index;
    obj6.hasSpoiler = mediaItemHasSpoiler;
    obj6.visible = itemVisible;
    obj6.onToggleOverlay = callback;
    items1.push(renderMedia(obj6));
  }
  let result = width / height;
  const result1 = (windowHeight - height) / 2;
  if ("cover" === originLayout.resizeMode) {
    ({ width: width2, height: height2 } = originLayout);
    let diff = originLayout.x - (windowWidth - width) / 2;
    let diff1 = originLayout.y - result1;
    let num3 = 1;
  } else {
    let num2 = 1;
    if (result > tmp15) {
      num2 = result;
    }
    diff = tmp16 - tmp17;
    diff1 = tmp19 - result1;
    num3 = (originLayout.width / width) * num2;
    height2 = height;
    width2 = width;
  }
  const obj2 = require("useMediaItemHasSpoiler");
  const obj3 = noop;
  let items2 = [
    c9,
    entranceAnimationDriver,
    require("../../../../../_runtime/metro/01655__.js").interpolate,
    require("../../../../../_runtime/metro/01655__.js").Extrapolation,
    height2,
    height,
    width2,
    width,
    diff1,
    diff,
    c8,
    num3,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  c5 = undefined;
  jsx = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33] = items2;
  class MediaViewerItemPresenterTsx1 {
    constructor() {
      value = closure_0.get();
      size = { height: null, width: null, top: null, left: null, borderRadius: null, transform: null };
      items = [,];
      items[0] = closure_3;
      items[1] = closure_4;
      size.height = closure_1(value, [0, 1], items, closure_2.CLAMP);
      items1 = [,];
      items1[0] = closure_5;
      items1[1] = closure_6;
      size.width = closure_1(value, [0, 1], items1, closure_2.CLAMP);
      items2 = [,];
      items2[0] = closure_7;
      items2[1] = 0;
      size.top = closure_1(value, [0, 1], items2, closure_2.CLAMP);
      items3 = [,];
      items3[0] = closure_8;
      items3[1] = 0;
      size.left = closure_1(value, [0, 1], items3, closure_2.CLAMP);
      items4 = [16];
      items4[1] = closure_9;
      size.borderRadius = closure_1(value, [0, 0.25], items4, closure_2.CLAMP);
      obj1 = { scale: null };
      items5 = [,];
      items5[0] = closure_10;
      items5[1] = 1;
      obj1.scale = closure_1(value, [0, 1], items5, closure_2.CLAMP);
      items6 = [];
      items6[0] = obj1;
      size.transform = items6;
      return size;
    }
  }
  let items3 = [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33];
  MediaViewerItemPresenterTsx1.__closure = items3;
  MediaViewerItemPresenterTsx1.__workletHash = 5465877012081;
  MediaViewerItemPresenterTsx1.__initData = tmp22;
  let items4 = [windowWidth, windowHeight, width, height];
  const animatedStyle = require("../../../../../_runtime/metro/01655__.js").useAnimatedStyle(
    MediaViewerItemPresenterTsx1,
  );
  const memo = obj3.useMemo(() => {
    const obj = { container: null, child: null, presenter: { position: "relative", overflow: "hidden", opacity: 1 } };
    const size = { width, height, alignItems: "center", justifyContent: "center" };
    obj.container = size;
    const size1 = { width: width2, height: height2 };
    obj.child = size1;
    return StyleSheet.create(obj);
  }, items4);
  const obj7 = { collapsable: false, style: memo.container, children: null };
  const obj8 = { style: memo.child, children: null };
  const obj9 = { style: null, children: items1 };
  let items5 = [memo.presenter, animatedStyle];
  obj9.style = items5;
  obj8.children = jsx(_modDef1655.View, { style: null, children: items1 });
  obj7.children = <c4 style={memo.child}>{null}</c4>;
  return (
    <c4 collapsable={false} style={memo.container}>
      {null}
    </c4>
  );
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let jsx = fn(21).jsx;
let closure_7 = { platformStyles: { position: "absolute", width: "100%", height: "100%" } };
const PlatformUtils = fn(1380);
if (PlatformUtils.isAndroid()) {
  const _parseInt = parseInt;
  obj2 = fn(5263);
}
let closure_9 = {
  code: "(function MediaViewerItemPresenterTsx1(){let[entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,BORDER_RADIUS_END,startScale]=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,BORDER_RADIUS_END]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};})",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

export default function MediaViewerItemPresenterGuard(source) {
  if (obj.useIsMediaViewerEntranceJankFixEnabled()) {
    if (tmpResult.canPresentWithTransforms(source)) {
      const obj2 = {};
      const merged = Object.assign(source);
      let tmp4 = jsx(MediaViewerItemTransformPresenterDefault, {});
    }
    return tmp4;
  }
  const merged1 = Object.assign(source);
  tmp4 = <MediaViewerItemPresenter />;
  obj = MediaViewerEntranceJankExperiment;
  const obj3 = {};
}
