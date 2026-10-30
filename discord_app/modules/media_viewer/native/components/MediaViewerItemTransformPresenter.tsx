// discord_app/modules/media_viewer/native/components/MediaViewerItemTransformPresenter.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let obj = { platformStyles: { position: "absolute", width: "100%", height: "100%" }, presenter: null };
let obj2 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj2.overflow = "hidden";
obj2.opacity = 1;
obj.presenter = obj2;
function toScale(arg0, arg1) {
  let num = 1;
  if (arg1 > 0) {
    const _Math = Math;
    num = Math.max(arg0 / arg1, 0.001);
  }
  return num;
}
toScale.__closure = { MIN_SCALE: 0.001 };
toScale.__workletHash = 9575629284817;
toScale.__initData = {
  code: "function toScale_MediaViewerItemTransformPresenterTsx1(size,finalSize){const{MIN_SCALE}=this.__closure;return finalSize>0?Math.max(size/finalSize,MIN_SCALE):1;}",
};
let closure_9 = {
  code: "function MediaViewerItemTransformPresenterTsx2(){const{entranceAnimationDriver,interpolate,Extrapolation,startWidth,sourceWidth,startHeight,sourceHeight,startTranslateX,startTranslateY,startScale,toScale}=this.__closure;const entranceValue=entranceAnimationDriver.get();function interpolateProxy(from,to){return interpolate(entranceValue,from,to,Extrapolation.CLAMP);}const width=interpolateProxy([0,1],[startWidth,sourceWidth]);const height=interpolateProxy([0,1],[startHeight,sourceHeight]);const left=interpolateProxy([0,1],[startTranslateX,0]);const top=interpolateProxy([0,1],[startTranslateY,0]);const scale=interpolateProxy([0,1],[startScale,1]);const scaleX=toScale(width,sourceWidth);const scaleY=toScale(height,sourceHeight);return{borderRadius:interpolateProxy([0,0.25],[16,0])/Math.sqrt(scaleX*scaleY),transform:[{translateX:left+(width-sourceWidth)/2},{translateY:top+(height-sourceHeight)/2},{scaleX:scale*scaleX},{scaleY:scale*scaleY}]};}",
};
let closure_10 = {
  code: "function MediaViewerItemTransformPresenterTsx3(){const{entranceAnimationDriver,toScale,interpolate,startWidth,sourceWidth,Extrapolation,startHeight,sourceHeight}=this.__closure;const entranceValue=entranceAnimationDriver.get();const scaleX=toScale(interpolate(entranceValue,[0,1],[startWidth,sourceWidth],Extrapolation.CLAMP),sourceWidth);const scaleY=toScale(interpolate(entranceValue,[0,1],[startHeight,sourceHeight],Extrapolation.CLAMP),sourceHeight);const cover=Math.max(scaleX,scaleY);return{transform:[{scaleX:cover/scaleX},{scaleY:cover/scaleY}]};}",
};
let size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaViewerItemTransformPresenter.tsx");

export default function MediaViewerItemTransformPresenter(windowHeight) {
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
  const entranceAnimation = windowWidth(entranceAnimationDriver[3]).useEntranceAnimation(entranceAnimationDriver);
  ({ loads, handleLoad, handleError, handleLoadStart } = entranceAnimation);
  obj = windowWidth(entranceAnimationDriver[3]);
  const mediaItemHasSpoiler = windowWidth(entranceAnimationDriver[4]).useMediaItemHasSpoiler(index);
  let size = windowHeight(entranceAnimationDriver[5])(windowWidth, windowHeight, source);
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
  let obj2 = windowWidth(entranceAnimationDriver[4]);
  let obj3 = width;
  class G {
    constructor() {
      value = entranceAnimationDriver.get();
      items = [,];
      items[0] = width;
      tmp2 = width;
      items[1] = width;
      tmp3 = closure_0;
      tmp4 = closure_2;
      obj = closure_0(closure_2[6]);
      interpolateResult = obj.interpolate(value, [0, 1], items, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items1 = [,];
      items1[0] = height;
      tmp6 = height;
      items1[1] = height;
      obj2 = closure_0(closure_2[6]);
      interpolateResult1 = obj2.interpolate(value, [0, 1], items1, closure_0(closure_2[6]).Extrapolation.CLAMP);
      items2 = [,];
      items2[0] = closure_7;
      items2[1] = 0;
      obj3 = closure_0(closure_2[6]);
      items3 = [,];
      items3[0] = closure_8;
      items3[1] = 0;
      interpolateResult2 = obj3.interpolate(value, [0, 1], items2, closure_0(closure_2[6]).Extrapolation.CLAMP);
      obj4 = closure_0(closure_2[6]);
      items4 = [,];
      items4[0] = closure_6;
      num = 1;
      items4[1] = 1;
      interpolateResult3 = obj4.interpolate(value, [0, 1], items3, closure_0(closure_2[6]).Extrapolation.CLAMP);
      obj5 = closure_0(closure_2[6]);
      interpolateResult4 = obj5.interpolate(value, [0, 1], items4, closure_0(closure_2[6]).Extrapolation.CLAMP);
      if (typeof toScale === "function") {
        bound = num;
        if (tmp2 > 0) {
          tmp13 = globalThis;
          _Math = Math;
          num2 = 0.001;
          bound = Math.max(interpolateResult / tmp2, 0.001);
        }
        if (typeof tmp11 === "function") {
          if (tmp6 > 0) {
            tmp14 = globalThis;
            _Math2 = Math;
            num3 = 0.001;
            num = Math.max(interpolateResult1 / tmp6, 0.001);
          }
          obj1 = { borderRadius: null, transform: null };
          tmp3Result = tmp3(tmp4[6]);
          tmp15 = tmp3Result;
          tmp16 = value;
          tmp18 = globalThis;
          _Math3 = Math;
          interpolateResult5 = tmp3Result.interpolate(value, [0, 0.25], [16, 0], tmp3(tmp4[6]).Extrapolation.CLAMP);
          obj1.borderRadius = interpolateResult5 / Math.sqrt(bound * num);
          obj12 = { translateX: null };
          num4 = 2;
          obj12.translateX = interpolateResult2 + (interpolateResult - tmp2) / 2;
          items5 = [, , ,];
          items5[0] = obj12;
          obj13 = { translateY: null };
          obj13.translateY = interpolateResult3 + (interpolateResult1 - tmp6) / 2;
          items5[1] = obj13;
          obj14 = { scaleX: null };
          obj14.scaleX = interpolateResult4 * bound;
          items5[2] = obj14;
          obj15 = { scaleY: null };
          obj15.scaleY = interpolateResult4 * num;
          items5[3] = obj15;
          obj1.transform = items5;
          return obj1;
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const tmpResult = windowWidth(entranceAnimationDriver[6]);
  G.__closure = {
    entranceAnimationDriver,
    interpolate: windowWidth(entranceAnimationDriver[6]).interpolate,
    Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation,
    startWidth: tmp20,
    sourceWidth: width,
    startHeight: tmp19,
    sourceHeight: height,
    startTranslateX: diff,
    startTranslateY: diff1,
    startScale: num3,
    toScale: diff3,
  };
  G.__workletHash = 512853979336;
  G.__initData = width2;
  const animatedStyle = tmpResult.useAnimatedStyle(G);
  let obj7 = {
    entranceAnimationDriver,
    interpolate: windowWidth(entranceAnimationDriver[6]).interpolate,
    Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation,
    startWidth: tmp20,
    sourceWidth: width,
    startHeight: tmp19,
    sourceHeight: height,
    startTranslateX: diff,
    startTranslateY: diff1,
    startScale: num3,
    toScale: diff3,
  };
  class B {
    constructor() {
      value = entranceAnimationDriver.get();
      tmp3 = closure_0;
      tmp4 = closure_2;
      tmp2 = toScale;
      tmp5 = closure_0(closure_2[6]);
      items = [,];
      items[0] = width;
      tmp6 = width;
      items[1] = width;
      if (typeof toScale === "function") {
        num = 0;
        num2 = 1;
        num3 = 1;
        if (tmp6 > 0) {
          tmp8 = globalThis;
          _Math = Math;
          num4 = 0.001;
          num3 = Math.max(tmp7 / tmp6, 0.001);
        }
        tmp3Result = tmp3(tmp4[6]);
        tmp10 = height;
        items1 = [,];
        items1[0] = height;
        tmp11 = height;
        items1[1] = height;
        interpolate = tmp3Result.interpolate;
        tmp12 = tmp3Result;
        tmp13 = value;
        tmp14 = items1;
        if (typeof tmp2 === "function") {
          if (tmp11 > 0) {
            tmp16 = globalThis;
            _Math2 = Math;
            num5 = 0.001;
            num2 = Math.max(tmp15 / tmp11, 0.001);
          }
          tmp17 = globalThis;
          _Math3 = Math;
          bound = Math.max(num3, num2);
          obj = { transform: null };
          obj1 = { scaleX: null };
          obj1.scaleX = bound / num3;
          items2 = [,];
          items2[0] = obj1;
          obj4 = { scaleY: null };
          obj4.scaleY = bound / num2;
          items2[1] = obj4;
          obj.transform = items2;
          return obj;
        } else {
          str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  const tmpResult2 = windowWidth(entranceAnimationDriver[6]);
  B.__closure = {
    entranceAnimationDriver,
    toScale: diff3,
    interpolate: windowWidth(entranceAnimationDriver[6]).interpolate,
    startWidth: tmp20,
    sourceWidth: width,
    Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation,
    startHeight: tmp19,
    sourceHeight: height,
  };
  B.__workletHash = 7705932751771;
  B.__initData = height2;
  let items2 = [windowWidth, windowHeight, width, height];
  const animatedStyle1 = tmpResult2.useAnimatedStyle(B);
  const memo = obj3.useMemo(() => {
    obj = { container: null, child: null };
    const size = { width: windowWidth, height: windowHeight, alignItems: "center", justifyContent: "center" };
    obj.container = size;
    const size1 = { width, height };
    obj.child = size1;
    return StyleSheet.create(obj);
  }, items2);
  let obj9 = { collapsable: false, style: memo.container, children: null };
  let obj10 = { style: memo.child, children: null };
  const obj11 = { style: null, children: null };
  let items3 = [diff2.presenter, animatedStyle];
  obj11.style = items3;
  let obj8 = {
    entranceAnimationDriver,
    toScale: diff3,
    interpolate: windowWidth(entranceAnimationDriver[6]).interpolate,
    startWidth: tmp20,
    sourceWidth: width,
    Extrapolation: windowWidth(entranceAnimationDriver[6]).Extrapolation,
    startHeight: tmp19,
    sourceHeight: height,
  };
  const obj12 = { style: null, children: items1 };
  let items4 = [overlayEnabled.absoluteFill, animatedStyle1];
  obj12.style = items4;
  obj11.children = num3(windowHeight(entranceAnimationDriver[7]), obj12);
  obj10.children = num3(windowHeight(entranceAnimationDriver[7]), obj11);
  obj9.children = num3(height, obj10);
  return num3(height, obj9);
}
export function canPresentWithTransforms(source) {
  source = source.source;
  let everyResult = "cover" !== source.originLayout.resizeMode;
  if (!everyResult) {
    const _Array = Array;
    obj = source;
    if (!Array.isArray(source)) {
      const items = [source];
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
