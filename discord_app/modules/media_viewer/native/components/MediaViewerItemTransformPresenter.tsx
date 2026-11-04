// === Module 15017: MediaViewerItemTransformPresenter ===

// Module 15017 (MediaViewerItemTransformPresenter)
import _modDef1652 from "module_1652" /* 1652 */;
import getMediaViewerStateForScreenDefault from "getMediaViewerStateForScreen" /* 15014 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
let jsx = fn(21).jsx;
let obj = { platformStyles: { position: "absolute", width: "100%", height: "100%" }, presenter: null };
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj2.opacity = 1;
obj.presenter = obj2;
let items = [{ code: "(function toScale_MediaViewerItemTransformPresenterTsx1(size,finalSize){let[MIN_SCALE]=this.__closure;return finalSize>0?Math.max(size/finalSize,MIN_SCALE):1;})" }, 0.001];
let closure_129_0;
[tmp4, tmp5] = items;
function toScale(arg0, arg1) {
  let num = 1;
  if (arg1 > 0) {
    const _Math = Math;
    num = Math.max(arg0 / arg1, require);
  }
  return num;
}
let items1 = [tmp5];
toScale.__closure = items1;
toScale.__workletHash = 3407744270152;
toScale.__initData = tmp4;
let closure_9 = { code: "(function MediaViewerItemTransformPresenterTsx2(){let[entranceAnimationDriver,interpolate,Extrapolation,startWidth,sourceWidth,startHeight,sourceHeight,startTranslateX,startTranslateY,startScale,toScale]=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}const width=interpolateProxy([0,1],[startWidth,sourceWidth]);const height=interpolateProxy([0,1],[startHeight,sourceHeight]);const left=interpolateProxy([0,1],[startTranslateX,0]);const top=interpolateProxy([0,1],[startTranslateY,0]);const scale=interpolateProxy([0,1],[startScale,1]);const scaleX=toScale(width,sourceWidth);const scaleY=toScale(height,sourceHeight);return{borderRadius:interpolateProxy([0,0.25],[16,0])/Math.sqrt(scaleX*scaleY),transform:[{translateX:left+(width-sourceWidth)/2},{translateY:top+(height-sourceHeight)/2},{scaleX:scale*scaleX},{scaleY:scale*scaleY}]};})" };
let closure_10 = { code: "(function MediaViewerItemTransformPresenterTsx3(){let[entranceAnimationDriver,toScale,interpolate,startWidth,sourceWidth,Extrapolation,startHeight,sourceHeight]=this.__closure;const entranceValue=entranceAnimationDriver.get();const scaleX=toScale(interpolate(entranceValue,[0,1],[startWidth,sourceWidth],Extrapolation.CLAMP),sourceWidth);const scaleY=toScale(interpolate(entranceValue,[0,1],[startHeight,sourceHeight],Extrapolation.CLAMP),sourceHeight);const cover=Math.max(scaleX,scaleY);return{transform:[{scaleX:cover/scaleX},{scaleY:cover/scaleY}]};})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemTransformPresenter.tsx");

export default function MediaViewerItemTransformPresenter(windowHeight) {
  ({ source, originLayout, renderMedia, windowWidth } = windowHeight);
  _require = windowWidth;
  windowHeight = windowHeight.windowHeight;
  importDefault = windowHeight;
  ({ entranceAnimationDriver, index } = windowHeight);
  ({ useItemVisible, panGestureConfig } = windowHeight);
  const entranceAnimation = require("useEntranceAnimation").useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  obj = require("useEntranceAnimation");
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
      const obj4 = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, onToggleOverlay: null };
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
      const obj5 = { key: null, source: null, style: null, onLoad: null, onError: null, pointerEvents: null, fadeDuration: 0, index: null, hasSpoiler: null, visible: null, onToggleOverlay: null };
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
    const obj6 = { key: null, onLoadStart: null, onLoad: null, onError: null, source: null, style: null, index: null, hasSpoiler: null, visible: null, onToggleOverlay: null };
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
    num3 = originLayout.width / width * num2;
    height2 = height;
    width2 = width;
  }
  const obj2 = require("useMediaItemHasSpoiler");
  const obj3 = noop;
  let items2 = [c9, entranceAnimationDriver, require("module_1652").interpolate, require("module_1652").Extrapolation, width2, width, height2, height, diff, diff1, num3, c8];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  StyleSheet = undefined;
  jsx = undefined;
  c7 = undefined;
  c8 = undefined;
  c9 = undefined;
  c10 = undefined;
  [tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items2;
  class MediaViewerItemTransformPresenterTsx2 {
    constructor() {
      value = closure_0.get();
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      tmp2 = closure_1(value, [0, 1], items, closure_2.CLAMP);
      items1 = [, ];
      items1[0] = closure_5;
      items1[1] = closure_6;
      tmp3 = closure_1(value, [0, 1], items1, closure_2.CLAMP);
      items2 = [, ];
      items2[0] = closure_7;
      items2[1] = 0;
      items3 = [, ];
      items3[0] = closure_8;
      items3[1] = 0;
      tmp4 = closure_1(value, [0, 1], items2, closure_2.CLAMP);
      items4 = [, ];
      items4[0] = closure_9;
      items4[1] = 1;
      tmp5 = closure_1(value, [0, 1], items3, closure_2.CLAMP);
      tmp6 = closure_1(value, [0, 1], items4, closure_2.CLAMP);
      tmp7 = closure_10(tmp2, closure_4);
      tmp8 = closure_10(tmp3, closure_6);
      obj = { borderRadius: null, transform: null };
      tmp9 = closure_1(value, [0, 0.25], [16, 0], closure_2.CLAMP);
      obj.borderRadius = tmp9 / Math.sqrt(tmp7 * tmp8);
      obj1 = { translateX: tmp4 + (tmp2 - closure_4) / 2 };
      items5 = [, , , ];
      items5[0] = obj1;
      items5[1] = { translateY: tmp5 + (tmp3 - closure_6) / 2 };
      items5[2] = { scaleX: tmp6 * tmp7 };
      items5[3] = { scaleY: tmp6 * tmp8 };
      obj.transform = items5;
      return obj;
    }
  }
  let items3 = [tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
  MediaViewerItemTransformPresenterTsx2.__closure = items3;
  MediaViewerItemTransformPresenterTsx2.__workletHash = 7865873276369;
  MediaViewerItemTransformPresenterTsx2.__initData = tmp23;
  const animatedStyle = require("module_1652").useAnimatedStyle(MediaViewerItemTransformPresenterTsx2);
  const tmp22 = c8;
  const tmpResult = require("module_1652");
  let items4 = [c10, entranceAnimationDriver, tmp22, require("module_1652").interpolate, width2, width, require("module_1652").Extrapolation, height2, height];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  StyleSheet = undefined;
  jsx = undefined;
  c7 = undefined;
  [tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items4;
  class MediaViewerItemTransformPresenterTsx3 {
    constructor() {
      value = closure_0.get();
      items = [, ];
      items[0] = closure_3;
      items[1] = closure_4;
      tmp2 = closure_1(closure_2(value, [0, 1], items, closure_5.CLAMP), closure_4);
      items1 = [, ];
      items1[0] = closure_6;
      items1[1] = closure_7;
      tmp3 = closure_1(closure_2(value, [0, 1], items1, closure_5.CLAMP), closure_7);
      bound = Math.max(tmp2, tmp3);
      obj = { transform: null };
      obj1 = { scaleX: bound / tmp2 };
      items2 = [, ];
      items2[0] = obj1;
      items2[1] = { scaleY: bound / tmp3 };
      obj.transform = items2;
      return obj;
    }
  }
  let items5 = [tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
  MediaViewerItemTransformPresenterTsx3.__closure = items5;
  MediaViewerItemTransformPresenterTsx3.__workletHash = 10330717925602;
  MediaViewerItemTransformPresenterTsx3.__initData = tmp36;
  const items6 = [windowWidth, windowHeight, width, height];
  const animatedStyle1 = require("module_1652").useAnimatedStyle(MediaViewerItemTransformPresenterTsx3);
  const memo = obj3.useMemo(() => {
    obj = { container: null, child: null };
    const size = { width, height, alignItems: "center", justifyContent: "center" };
    obj.container = size;
    const size1 = { width: width2, height: height2 };
    obj.child = size1;
    return StyleSheet.create(obj);
  }, items6);
  const obj7 = { collapsable: false, style: memo.container, children: null };
  const obj8 = { style: memo.child, children: null };
  const obj9 = { style: null, children: null };
  const items7 = [c7.presenter, animatedStyle];
  obj9.style = items7;
  const obj10 = { style: null, children: items1 };
  const items8 = [StyleSheet.absoluteFill, animatedStyle1];
  obj10.style = items8;
  obj9.children = jsx(_modDef1652.View, { style: null, children: items1 });
  obj8.children = jsx(_modDef1652.View, { style: null, children: null });
  obj7.children = <c4 style={memo.child}>{null}</c4>;
  return <c4 collapsable={false} style={memo.container}>{null}</c4>;
};
export function canPresentWithTransforms(source) {
  source = source.source;
  let everyResult = "cover" !== source.originLayout.resizeMode;
  if (!everyResult) {
    const _Array = Array;
    obj = source;
    if (!Array.isArray(source)) {
      items = [source];
      obj = items;
    }
    everyResult = obj.every((videoURI) => {
      let tmp = null == videoURI.videoURI;
      if (tmp) {
        tmp = null == videoURI.portal;
      }
      if (tmp) {
        tmp = null == videoURI.embedURI;
      }
      return tmp;
    });
  }
  return everyResult;
}