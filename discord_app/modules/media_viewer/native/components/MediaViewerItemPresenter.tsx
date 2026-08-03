import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c4;
let c5;
const require = arg1;
({ View: c4, StyleSheet: c5 } = get_ActivityIndicator);
let closure_7 = { platformStyles: { position: "absolute", width: "100%", height: "100%" } };
let closure_8 = { code: "function MediaViewerItemPresenterTsx1(){const{entranceAnimationDriver,interpolate,Extrapolation,startHeight,sourceHeight,startWidth,sourceWidth,startTranslateY,startTranslateX,startScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}return{height:interpolateProxy([0,1],[startHeight,sourceHeight]),width:interpolateProxy([0,1],[startWidth,sourceWidth]),top:interpolateProxy([0,1],[startTranslateY,0]),left:interpolateProxy([0,1],[startTranslateX,0]),borderRadius:interpolateProxy([0,0.25],[16,0]),transform:[{scale:interpolateProxy([0,1],[startScale,1])}]};}" };
let result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemPresenter.tsx");

export default function MediaViewerItemPresenter(windowHeight) {
  let handleError;
  let handleLoad;
  let handleLoadStart;
  let loads;
  let originLayout;
  let renderMedia;
  let source;
  let windowWidth;
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  windowHeight = windowHeight.windowHeight;
  const entranceAnimationDriver = windowHeight.entranceAnimationDriver;
  const index = windowHeight.index;
  const panGestureConfig = windowHeight.panGestureConfig;
  let field;
  let width;
  let height;
  let num3;
  let diff2;
  let diff3;
  let width2;
  let height2;
  let obj = windowWidth(entranceAnimationDriver[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  const MediaViewerSourcesStore = windowWidth(entranceAnimationDriver[4]).MediaViewerSourcesStore;
  field = MediaViewerSourcesStore.useField("spoilerIndexes");
  let obj1 = index;
  let items = [index, field];
  const memo = index.useMemo(() => field.has(index), items);
  const size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
  width = size.width;
  height = size.height;
  const itemVisible = windowHeight.useItemVisible(index);
  let items1 = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      obj = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal2 = HermesInternal;
      obj[0] = "0:" + index + ":" + source[0].uri;
      obj[1] = handleLoadStart;
      obj[2] = handleLoad;
      obj[3] = handleError;
      obj[4] = source[0];
      obj[5] = num3.platformStyles;
      obj[6] = index;
      obj[7] = memo;
      obj[8] = itemVisible;
      obj[9] = panGestureConfig;
      items1.push(renderMedia(obj));
    }
    if (loads >= 1) {
      obj = { key: null, source: null, style: null, onLoad: null, onError: null, pointerEvents: null, fadeDuration: 0, fade: false, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal3 = HermesInternal;
      obj[0] = "1:" + index + ":" + source[0].uri;
      obj[1] = source[1];
      obj[2] = num3.platformStyles;
      obj[3] = handleLoad;
      obj[4] = handleError;
      let str5 = "auto";
      if (tmp10) {
        str5 = "none";
      }
      obj[5] = str5;
      obj[8] = index;
      obj[9] = memo;
      obj[10] = itemVisible;
      obj[11] = panGestureConfig;
      items1.push(renderMedia(obj));
    }
  } else {
    obj1 = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
    const _HermesInternal = HermesInternal;
    obj1[0] = "0:" + index + ":" + source.uri;
    obj1[1] = handleLoadStart;
    obj1[2] = handleLoad;
    obj1[3] = handleError;
    obj1[4] = source;
    obj1[5] = num3.platformStyles;
    obj1[6] = index;
    obj1[7] = memo;
    obj1[8] = itemVisible;
    obj1[9] = panGestureConfig;
    items1.push(renderMedia(obj1));
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
    num3 = 1;
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
    num3 = originLayout.width / width * num2;
    tmp19 = height;
    tmp20 = width;
  }
  class O {
    constructor() {
      value = entranceAnimationDriver.get();
      obj = { height: null, width: null, top: null, left: null, borderRadius: null, transform: null };
      items = [, ];
      items[0] = height;
      items[1] = height;
      obj2 = windowWidth(entranceAnimationDriver[6]);
      obj[0] = obj2.interpolate(value, [0, 1], items, windowWidth(entranceAnimationDriver[6]).Extrapolation.CLAMP);
      items1 = [, ];
      items1[0] = width;
      items1[1] = width;
      obj3 = windowWidth(entranceAnimationDriver[6]);
      obj[1] = obj3.interpolate(value, [0, 1], items1, windowWidth(entranceAnimationDriver[6]).Extrapolation.CLAMP);
      items2 = [, ];
      items2[0] = c9;
      items2[1] = 0;
      obj4 = windowWidth(entranceAnimationDriver[6]);
      obj[2] = obj4.interpolate(value, [0, 1], items2, windowWidth(entranceAnimationDriver[6]).Extrapolation.CLAMP);
      items3 = [, ];
      items3[0] = c8;
      items3[1] = 0;
      obj5 = windowWidth(entranceAnimationDriver[6]);
      obj[3] = obj5.interpolate(value, [0, 1], items3, windowWidth(entranceAnimationDriver[6]).Extrapolation.CLAMP);
      obj6 = windowWidth(entranceAnimationDriver[6]);
      obj[4] = obj6.interpolate(value, [0, 0.25], [16, 0], windowWidth(entranceAnimationDriver[6]).Extrapolation.CLAMP);
      obj = { scale: null };
      items4 = [, ];
      items4[0] = c7;
      items4[1] = 1;
      obj8 = windowWidth(entranceAnimationDriver[6]);
      obj[0] = obj8.interpolate(value, [0, 1], items4, windowWidth(entranceAnimationDriver[6]).Extrapolation.CLAMP);
      items5 = [];
      items5[0] = obj;
      obj[5] = items5;
      return obj;
    }
  }
  const tmp6 = windowHeight;
  const tmpResult = windowWidth(entranceAnimationDriver[6]);
  O.__closure = { entranceAnimationDriver, interpolate: windowWidth(entranceAnimationDriver[6]).interpolate, Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation, startHeight: tmp19, sourceHeight: height, startWidth: tmp20, sourceWidth: width, startTranslateY: diff1, startTranslateX: diff, startScale: num3 };
  O.__workletHash = 15052076990644;
  O.__initData = diff2;
  let items2 = [windowWidth, windowHeight, width, height];
  const animatedStyle = tmpResult.useAnimatedStyle(O);
  const memo1 = obj1.useMemo(() => {
    const container = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    const child = { width, height };
    return width.create({ container, child, presenter: { position: "relative", overflow: "hidden", opacity: 1 } });
  }, items2);
  let obj3 = { collapsable: false, style: memo1.container, children: null };
  let obj2 = { entranceAnimationDriver, interpolate: windowWidth(entranceAnimationDriver[6]).interpolate, Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation, startHeight: tmp19, sourceHeight: height, startWidth: tmp20, sourceWidth: width, startTranslateY: diff1, startTranslateX: diff, startScale: num3 };
  let items3 = [memo1.presenter, animatedStyle];
  obj3[2] = height(field, { style: memo1.child, children: height(tmp6(entranceAnimationDriver[7]), { style: items3, children: items1 }) });
  return height(field, obj3);
};