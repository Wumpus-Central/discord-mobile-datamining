// === Module 12786: MediaViewerItemPresenter ===

// Module 12786 (MediaViewerItemPresenter)
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_7 = { platformStyles: { position: "absolute", width: "100%", height: "100%" } };
let closure_8 = { code: "function MediaViewerItemPresenterTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}" };
let size = size_mod;
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

export default function MediaViewerItemPresenter(windowHeight) {
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let index;
  let items2;
  let loads;
  let obj8;
  let obj9;
  let originLayout;
  let panGestureConfig;
  let renderMedia;
  let source;
  let str5;
  let tmp18;
  let tmp19;
  let windowWidth;
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  const entranceAnimationDriver = windowHeight.entranceAnimationDriver;
  ({ index, panGestureConfig } = windowHeight);
  let num3;
  let diff2;
  let diff3;
  let width2;
  let height2;
  const useItemVisible = windowHeight.useItemVisible;
  let obj = windowWidth(entranceAnimationDriver[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  let obj2 = windowWidth(entranceAnimationDriver[4]);
  const mediaItemHasSpoiler = obj2.useMediaItemHasSpoiler(index);
  size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const itemVisible = useItemVisible(index);
  let items = [];
  const tmp5 = windowHeight;
  if (Array.isArray(source)) {
    if (loads <= 1) {
      let obj3 = { key: "0:" + index + ":" + source[0].uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source: source[0], style: diff3.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, panGestureConfig };
      const _HermesInternal2 = HermesInternal;
      const push2 = items.push;
      push2(renderMedia(obj3));
    }
    if (loads >= 1) {
      let obj4 = { key: "1:" + index + ":" + source[0].uri, source: source[1], style: diff3.platformStyles, onLoad: handleLoad, onError: handleError, pointerEvents: str5, fadeDuration: 0, fade: false, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, panGestureConfig };
      const _HermesInternal3 = HermesInternal;
      const push3 = items.push;
      str5 = "auto";
      if (loads <= 1) {
        str5 = "none";
      }
      push3(renderMedia(obj4));
    }
  } else {
    let obj5 = { key: "0:" + index + ":" + source.uri, onLoadStart: handleLoadStart, onLoad: handleLoad, onError: handleError, source, style: diff3.platformStyles, index, hasSpoiler: mediaItemHasSpoiler, visible: itemVisible, panGestureConfig };
    const _HermesInternal = HermesInternal;
    const push = items.push;
    push(renderMedia(obj5));
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
    tmp18 = height2;
    tmp19 = width2;
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
  const tmpResult = windowWidth(entranceAnimationDriver[6]);
  class F {
    constructor() {
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj2;
      let obj3;
      let obj4;
      let obj5;
      let obj6;
      let obj8;
      const value = entranceAnimationDriver.get();
      size = { height: obj2.interpolate(value, [0, 1], items, ReanimatedRexport.Extrapolation.CLAMP), width: obj3.interpolate(value, [0, 1], items1, ReanimatedRexport.Extrapolation.CLAMP), top: obj4.interpolate(value, [0, 1], items2, ReanimatedRexport.Extrapolation.CLAMP), left: obj5.interpolate(value, [0, 1], items3, ReanimatedRexport.Extrapolation.CLAMP), borderRadius: obj6.interpolate(value, [0, 0.25], [16, 0], ReanimatedRexport.Extrapolation.CLAMP), transform: items5 };
      items = [height2, height];
      items1 = [width2, width];
      obj2 = ReanimatedRexport;
      items2 = [diff3, 0];
      obj3 = ReanimatedRexport;
      items3 = [diff2, 0];
      obj4 = ReanimatedRexport;
      obj5 = ReanimatedRexport;
      obj6 = ReanimatedRexport;
      const obj = { scale: obj8.interpolate(value, [0, 1], items4, ReanimatedRexport.Extrapolation.CLAMP) };
      items4 = [num3, 1];
      items5 = [obj];
      obj8 = ReanimatedRexport;
      return size;
    }
  }
  let obj6 = { entranceAnimationDriver, interpolate: tmp(tmp2[6]).interpolate, Extrapolation: tmp(tmp2[6]).Extrapolation, startHeight: tmp18, sourceHeight: height, startWidth: tmp19, sourceWidth: width, startTranslateY: diff1, startTranslateX: diff, startScale: num3 };
  F.__closure = obj6;
  F.__workletHash = 15052076990644;
  F.__initData = width2;
  let items1 = [windowWidth, windowHeight, width, height];
  const animatedStyle = tmpResult.useAnimatedStyle(F);
  const memo = width.useMemo(() => {
    let size1;
    const obj = { container: size, child: size1, presenter: { position: "relative", overflow: "hidden", opacity: 1 } };
    size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    size1 = { width, height };
    return hasOwnProperty.create(obj);
  }, items1);
  const obj7 = { collapsable: false, style: memo.container, children: diff2(height, obj8) };
  obj8 = { style: memo.child, children: diff2(tmp5(entranceAnimationDriver[7]), obj9) };
  obj9 = { style: items2, children: items };
  items2 = [memo.presenter, animatedStyle];
  return diff2(height, obj7);
};