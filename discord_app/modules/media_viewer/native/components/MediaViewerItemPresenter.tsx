// === Module 12985: MediaViewerItemPresenter ===

// Module 12985 (MediaViewerItemPresenter)
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
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
  const index = windowHeight.index;
  const panGestureConfig = windowHeight.panGestureConfig;
  let num3;
  let diff2;
  let diff3;
  let width2;
  let height2;
  let obj = windowWidth(entranceAnimationDriver[3]);
  const entranceAnimation = obj.useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  const MediaViewerSourcesStore = windowWidth(entranceAnimationDriver[4]).MediaViewerSourcesStore;
  const field = MediaViewerSourcesStore.useField("spoilerIndexes");
  let obj1 = index;
  let items = [index, field];
  const memo = index.useMemo(() => field.has(index), items);
  let size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
  const width = size.width;
  const height = size.height;
  const itemVisible = windowHeight.useItemVisible(index);
  let items1 = [];
  if (Array.isArray(source)) {
    if (loads <= 1) {
      obj = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal2 = HermesInternal;
      obj.key = "0:" + index + ":" + source[0].uri;
      obj.onLoadStart = handleLoadStart;
      obj.onLoad = handleLoad;
      obj.onError = handleError;
      obj.source = source[0];
      obj.style = num3.platformStyles;
      obj.index = index;
      obj.hasSpoiler = memo;
      obj.visible = itemVisible;
      obj.panGestureConfig = panGestureConfig;
      items1.push(renderMedia(obj));
    }
    if (loads >= 1) {
      obj = { key: null, source: null, style: null, onLoad: null, onError: null, pointerEvents: null, fadeDuration: 0, fade: false, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
      const _HermesInternal3 = HermesInternal;
      obj.key = "1:" + index + ":" + source[0].uri;
      obj.source = source[1];
      obj.style = num3.platformStyles;
      obj.onLoad = handleLoad;
      obj.onError = handleError;
      let str5 = "auto";
      if (tmp10) {
        str5 = "none";
      }
      obj.pointerEvents = str5;
      obj.index = index;
      obj.hasSpoiler = memo;
      obj.visible = itemVisible;
      obj.panGestureConfig = panGestureConfig;
      items1.push(renderMedia(obj));
    }
  } else {
    obj1 = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, panGestureConfig: null };
    const _HermesInternal = HermesInternal;
    obj1.key = "0:" + index + ":" + source.uri;
    obj1.onLoadStart = handleLoadStart;
    obj1.onLoad = handleLoad;
    obj1.onError = handleError;
    obj1.source = source;
    obj1.style = num3.platformStyles;
    obj1.index = index;
    obj1.hasSpoiler = memo;
    obj1.visible = itemVisible;
    obj1.panGestureConfig = panGestureConfig;
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
      items2[0] = closure_9;
      items2[1] = 0;
      obj4 = closure_0(closure_2[6]);
      size.top = obj4.interpolate(value, [0, 1], items2, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items3 = [, ];
      items3[0] = closure_8;
      items3[1] = 0;
      obj5 = closure_0(closure_2[6]);
      size.left = obj5.interpolate(value, [0, 1], items3, closure_0(closure_2[6]).Extrapolation.CLAMP);
      obj6 = closure_0(closure_2[6]);
      size.borderRadius = obj6.interpolate(value, [0, 0.25], [16, 0], closure_0(closure_2[6]).Extrapolation.CLAMP);
      obj = { scale: null };
      items4 = [, ];
      items4[0] = closure_7;
      items4[1] = 1;
      obj8 = closure_0(closure_2[6]);
      obj.scale = obj8.interpolate(value, [0, 1], items4, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items5 = [];
      items5[0] = obj;
      size.transform = items5;
      return size;
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
    const obj = { container: null, child: null, presenter: { position: "relative", overflow: "hidden", opacity: 1 } };
    const size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    obj.container = size;
    const size1 = { width, height };
    obj.child = size1;
    return hasOwnProperty.create(obj);
  }, items2);
  let obj3 = { collapsable: false, style: memo1.container, children: null };
  let obj4 = { style: memo1.child, children: null };
  let obj5 = { style: null, children: items1 };
  let items3 = [memo1.presenter, animatedStyle];
  obj5.style = items3;
  obj4.children = height(tmp6(entranceAnimationDriver[7]), obj5);
  obj3.children = height(field, obj4);
  return height(field, obj3);
};