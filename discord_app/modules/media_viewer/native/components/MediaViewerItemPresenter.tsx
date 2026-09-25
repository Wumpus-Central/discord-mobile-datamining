// === Module 12524: MediaViewerItemPresenter ===

// Module 12524 (MediaViewerItemPresenter)
import ReanimatedRexport from "ReanimatedRexport" /* 4563 */;
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
  const entranceAnimation = windowWidth(entranceAnimationDriver[3]).useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  let obj = windowWidth(entranceAnimationDriver[3]);
  const mediaItemHasSpoiler = windowWidth(entranceAnimationDriver[4]).useMediaItemHasSpoiler(index);
  let size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const itemVisible = windowHeight.useItemVisible(index);
  let items = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      let obj3 = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal2 = HermesInternal;
      obj3.key = "0:" + index + ":" + source[0].uri;
      obj3.onLoadStart = handleLoadStart;
      obj3.onLoad = handleLoad;
      obj3.onError = handleError;
      obj3.source = source[0];
      obj3.style = diff3.platformStyles;
      obj3.index = index;
      obj3.hasSpoiler = mediaItemHasSpoiler;
      obj3.visible = itemVisible;
      obj3.panGestureConfig = panGestureConfig;
      items.push(renderMedia(obj3));
    }
    if (loads >= 1) {
      let obj4 = { key: null, source: null, style: null, onLoad: null, onError: null, pointerEvents: null, fadeDuration: 0, fade: false, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal3 = HermesInternal;
      obj4.key = "1:" + index + ":" + source[0].uri;
      obj4.source = source[1];
      obj4.style = diff3.platformStyles;
      obj4.onLoad = handleLoad;
      obj4.onError = handleError;
      let str5 = "auto";
      if (tmp9) {
        str5 = "none";
      }
      obj4.pointerEvents = str5;
      obj4.index = index;
      obj4.hasSpoiler = mediaItemHasSpoiler;
      obj4.visible = itemVisible;
      obj4.panGestureConfig = panGestureConfig;
      items.push(renderMedia(obj4));
    }
  } else {
    let obj5 = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
    const _HermesInternal = HermesInternal;
    obj5.key = "0:" + index + ":" + source.uri;
    obj5.onLoadStart = handleLoadStart;
    obj5.onLoad = handleLoad;
    obj5.onError = handleError;
    obj5.source = source;
    obj5.style = diff3.platformStyles;
    obj5.index = index;
    obj5.hasSpoiler = mediaItemHasSpoiler;
    obj5.visible = itemVisible;
    obj5.panGestureConfig = panGestureConfig;
    items.push(renderMedia(obj5));
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
  let obj2 = windowWidth(entranceAnimationDriver[4]);
  const tmp5 = windowHeight;
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
      obj1 = { scale: null };
      items4 = [, ];
      items4[0] = closure_5;
      items4[1] = 1;
      obj8 = closure_0(closure_2[6]);
      obj1.scale = obj8.interpolate(value, [0, 1], items4, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items5 = [];
      items5[0] = obj1;
      size.transform = items5;
      return size;
    }
  }
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
  const obj7 = { collapsable: false, style: memo.container, children: null };
  const obj8 = { style: memo.child, children: null };
  const obj9 = { style: null, children: items };
  let items2 = [memo.presenter, animatedStyle];
  obj9.style = items2;
  obj8.children = diff2(tmp5(entranceAnimationDriver[7]), obj9);
  obj7.children = diff2(height, obj8);
  return diff2(height, obj7);
};