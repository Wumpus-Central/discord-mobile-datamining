// === Module 13015: MediaViewerItemPresenter ===

// Module 13015 (MediaViewerItemPresenter)
import ReanimatedRexport from "ReanimatedRexport" /* 4310 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let closure_7 = { platformStyles: { position: "absolute", width: "100%", height: "100%" } };
let closure_8 = { code: "function MediaViewerItemPresenterTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

export default function MediaViewerItemPresenter(windowHeight) {
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  const entranceAnimationDriver = windowHeight.entranceAnimationDriver;
  ({ index, panGestureConfig } = windowHeight);
  let num3;
  let diff2;
  let diff3;
  let width2;
  let height2;
  let obj = windowWidth(entranceAnimationDriver[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  let obj1 = windowWidth(entranceAnimationDriver[4]);
  const mediaItemHasSpoiler = obj1.useMediaItemHasSpoiler(index);
  let size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const itemVisible = windowHeight.useItemVisible(index);
  let items = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      obj = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal2 = HermesInternal;
      obj.key = "0:" + index + ":" + source[0].uri;
      obj.onLoadStart = handleLoadStart;
      obj.onLoad = handleLoad;
      obj.onError = handleError;
      obj.source = source[0];
      obj.style = diff3.platformStyles;
      obj.index = index;
      obj.hasSpoiler = mediaItemHasSpoiler;
      obj.visible = itemVisible;
      obj.panGestureConfig = panGestureConfig;
      items.push(renderMedia(obj));
    }
    if (loads >= 1) {
      obj = { key: null, source: null, style: null, onLoad: null, onError: null, pointerEvents: null, fadeDuration: 0, fade: false, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal3 = HermesInternal;
      obj.key = "1:" + index + ":" + source[0].uri;
      obj.source = source[1];
      obj.style = diff3.platformStyles;
      obj.onLoad = handleLoad;
      obj.onError = handleError;
      let str5 = "auto";
      if (tmp9) {
        str5 = "none";
      }
      obj.pointerEvents = str5;
      obj.index = index;
      obj.hasSpoiler = mediaItemHasSpoiler;
      obj.visible = itemVisible;
      obj.panGestureConfig = panGestureConfig;
      items.push(renderMedia(obj));
    }
  } else {
    obj1 = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
    const _HermesInternal = HermesInternal;
    obj1.key = "0:" + index + ":" + source.uri;
    obj1.onLoadStart = handleLoadStart;
    obj1.onLoad = handleLoad;
    obj1.onError = handleError;
    obj1.source = source;
    obj1.style = diff3.platformStyles;
    obj1.index = index;
    obj1.hasSpoiler = mediaItemHasSpoiler;
    obj1.visible = itemVisible;
    obj1.panGestureConfig = panGestureConfig;
    items.push(renderMedia(obj1));
  }
  const result = width / height;
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
    let tmp18 = height2;
    let tmp19 = width2;
    diff1 = diff3;
    diff = diff2;
    num3 = 1;
  } else {
    let num2 = 1;
    if (result > tmp14) {
      num2 = result;
    }
    num3 = originLayout.width / width * num2;
    tmp18 = height;
    tmp19 = width;
  }
  class F {
    constructor() {
      value = entranceAnimationDriver.get();
      size = { height: null, width: null, top: null, left: null, borderRadius: null, transform: null };
      items = [, ];
      items[0] = height;
      items[1] = height;
      obj2 = closure_0(closure_2[6]);
      size.height = obj2.interpolate(value, [0, 1], items, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items1 = [, ];
      items1[0] = width;
      items1[1] = width;
      obj3 = closure_0(closure_2[6]);
      size.width = obj3.interpolate(value, [0, 1], items1, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items2 = [, ];
      items2[0] = closure_7;
      items2[1] = 0;
      obj4 = closure_0(closure_2[6]);
      size.top = obj4.interpolate(value, [0, 1], items2, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items3 = [, ];
      items3[0] = closure_6;
      items3[1] = 0;
      obj5 = closure_0(closure_2[6]);
      size.left = obj5.interpolate(value, [0, 1], items3, closure_0(closure_2[6]).Extrapolation.CLAMP);
      obj6 = closure_0(closure_2[6]);
      size.borderRadius = obj6.interpolate(value, [0, 0.25], [16, 0], closure_0(closure_2[6]).Extrapolation.CLAMP);
      obj = { scale: null };
      items4 = [, ];
      items4[0] = closure_5;
      items4[1] = 1;
      obj8 = closure_0(closure_2[6]);
      obj.scale = obj8.interpolate(value, [0, 1], items4, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items5 = [];
      items5[0] = obj;
      size.transform = items5;
      return size;
    }
  }
  const tmp5 = windowHeight;
  const tmpResult = windowWidth(entranceAnimationDriver[6]);
  F.__closure = { entranceAnimationDriver, interpolate: windowWidth(entranceAnimationDriver[6]).interpolate, Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation, startHeight: tmp18, sourceHeight: height, startWidth: tmp19, sourceWidth: width, startTranslateY: diff1, startTranslateX: diff, startScale: num3 };
  F.__workletHash = 15052076990644;
  F.__initData = width2;
  let items1 = [windowWidth, windowHeight, width, height];
  const animatedStyle = tmpResult.useAnimatedStyle(F);
  const memo = width.useMemo(() => {
    const obj = { container: null, child: null, presenter: { position: "relative", overflow: "hidden", opacity: 1 } };
    const size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    obj.container = size;
    const size1 = { width, height };
    obj.child = size1;
    return hasOwnProperty.create(obj);
  }, items1);
  let obj3 = { collapsable: false, style: memo.container, children: null };
  let obj4 = { style: memo.child, children: null };
  let obj5 = { style: null, children: items };
  let items2 = [memo.presenter, animatedStyle];
  obj5.style = items2;
  obj4.children = diff2(tmp5(entranceAnimationDriver[7]), obj5);
  obj3.children = diff2(height, obj4);
  return diff2(height, obj3);
};