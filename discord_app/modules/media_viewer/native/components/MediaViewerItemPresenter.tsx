// discord_app/modules/media_viewer/native/components/MediaViewerItemPresenter.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_7 = { platformStyles: { position: "absolute", width: "100%", height: "100%" } };
const PlatformUtils = fn(1381);
if (PlatformUtils.isAndroid()) {
  const _parseInt = parseInt;
  obj2 = fn(4929);
}
let closure_9 = {
  code: "function MediaViewerItemPresenterTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,BORDER_RADIUS_END,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,BORDER_RADIUS_END]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

export default function MediaViewerItemPresenter(windowHeight) {
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  const entranceAnimationDriver = windowHeight.entranceAnimationDriver;
  const index = windowHeight.index;
  let num3;
  let diff2;
  let diff3;
  let width2;
  let height2;
  ({ useItemVisible, panGestureConfig } = windowHeight);
  const entranceAnimation = windowWidth(entranceAnimationDriver[5]).useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  let obj = windowWidth(entranceAnimationDriver[5]);
  const mediaItemHasSpoiler = windowWidth(entranceAnimationDriver[6]).useMediaItemHasSpoiler(index);
  let size = windowHeight(entranceAnimationDriver[7])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const itemVisible = useItemVisible(index);
  const overlayEnabled = panGestureConfig.overlayEnabled;
  let items = [overlayEnabled];
  const callback = width.useCallback(() => {
    const result = overlayEnabled.set(!overlayEnabled.get());
  }, items);
  let items1 = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      let obj4 = {
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
      obj4.style = diff2.platformStyles;
      obj4.index = index;
      obj4.hasSpoiler = mediaItemHasSpoiler;
      obj4.visible = itemVisible;
      obj4.onToggleOverlay = callback;
      items1.push(renderMedia(obj4));
    }
    if (loads >= 1) {
      let obj5 = {
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
      obj5.style = diff2.platformStyles;
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
    let obj6 = {
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
    obj6.style = diff2.platformStyles;
    obj6.index = index;
    obj6.hasSpoiler = mediaItemHasSpoiler;
    obj6.visible = itemVisible;
    obj6.onToggleOverlay = callback;
    items1.push(renderMedia(obj6));
  }
  let result = width / height;
  let diff = originLayout.x - (width - originLayout.width) / 2 - (windowWidth - width) / 2;
  diff2 = diff;
  const result1 = (windowHeight - height) / 2;
  let diff1 = originLayout.y - (height - originLayout.height) / 2 - result1;
  diff3 = diff1;
  width2 = width;
  height2 = height;
  if ("cover" === originLayout.resizeMode) {
    width2 = originLayout.width;
    height2 = originLayout.height;
    diff2 = originLayout.x - (windowWidth - width) / 2;
    diff3 = originLayout.y - result1;
    let tmp19 = height2;
    let tmp20 = width2;
    diff1 = diff3;
    diff = diff2;
    num3 = 1;
  } else {
    let num2 = 1;
    if (result > tmp15) {
      num2 = result;
    }
    num3 = (originLayout.width / width) * num2;
    tmp19 = height;
    tmp20 = width;
  }
  let obj2 = windowWidth(entranceAnimationDriver[6]);
  let obj3 = width;
  const tmp5 = windowHeight;
  class F {
    constructor() {
      value = entranceAnimationDriver.get();
      size = { height: null, width: null, top: null, left: null, borderRadius: null, transform: null };
      items = [,];
      items[0] = height;
      items[1] = height;
      obj2 = closure_0(closure_2[8]);
      size.height = obj2.interpolate(value, [0, 1], items, closure_0(closure_2[8]).Extrapolation.CLAMP);
      items1 = [,];
      items1[0] = width;
      items1[1] = width;
      obj3 = closure_0(closure_2[8]);
      size.width = obj3.interpolate(value, [0, 1], items1, closure_0(closure_2[8]).Extrapolation.CLAMP);
      items2 = [,];
      items2[0] = closure_8;
      items2[1] = 0;
      obj4 = closure_0(closure_2[8]);
      size.top = obj4.interpolate(value, [0, 1], items2, closure_0(closure_2[8]).Extrapolation.CLAMP);
      items3 = [,];
      items3[0] = closure_7;
      items3[1] = 0;
      obj5 = closure_0(closure_2[8]);
      size.left = obj5.interpolate(value, [0, 1], items3, closure_0(closure_2[8]).Extrapolation.CLAMP);
      items4 = [16];
      items4[1] = hairlineWidth;
      obj6 = closure_0(closure_2[8]);
      size.borderRadius = obj6.interpolate(value, [0, 0.25], items4, closure_0(closure_2[8]).Extrapolation.CLAMP);
      obj1 = { scale: null };
      items5 = [,];
      items5[0] = closure_6;
      items5[1] = 1;
      obj8 = closure_0(closure_2[8]);
      obj1.scale = obj8.interpolate(value, [0, 1], items5, closure_0(closure_2[8]).Extrapolation.CLAMP);
      items6 = [];
      items6[0] = obj1;
      size.transform = items6;
      return size;
    }
  }
  const tmpResult = windowWidth(entranceAnimationDriver[8]);
  F.__closure = {
    entranceAnimationDriver,
    interpolate: windowWidth(entranceAnimationDriver[8]).interpolate,
    Extrapolation: windowWidth(entranceAnimationDriver[8]).Extrapolation,
    startHeight: tmp19,
    sourceHeight: height,
    startWidth: tmp20,
    sourceWidth: width,
    startTranslateY: diff1,
    startTranslateX: diff,
    BORDER_RADIUS_END: diff3,
    startScale: num3,
  };
  F.__workletHash = 2455267388296;
  F.__initData = width2;
  let items2 = [windowWidth, windowHeight, width, height];
  const animatedStyle = tmpResult.useAnimatedStyle(F);
  const memo = obj3.useMemo(() => {
    const obj = { container: null, child: null, presenter: { position: "relative", overflow: "hidden", opacity: 1 } };
    const size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    obj.container = size;
    const size1 = { width, height };
    obj.child = size1;
    return StyleSheet.create(obj);
  }, items2);
  const obj8 = { collapsable: false, style: memo.container, children: null };
  const obj9 = { style: memo.child, children: null };
  const obj10 = { style: null, children: items1 };
  let items3 = [memo.presenter, animatedStyle];
  obj10.style = items3;
  obj9.children = num3(tmp5(entranceAnimationDriver[9]), obj10);
  obj8.children = num3(height, obj9);
  return num3(height, obj8);
}
