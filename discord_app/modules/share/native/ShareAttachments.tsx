// discord_app/modules/share/native/ShareAttachments.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import LinearGradient from "LinearGradient";
import createCacheKey from "createCacheKey";
import importDefaultResult from "module_4162";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { duration: 300, easing: require("Button").STANDARD_EASING };
obj = { containerRevamp: null, attachmentPreviewContentContainer: null, attachmentPreviewContentContainerRevamp: null, attachmentPreview: null, leftGradient: null, rightGradient: null, gradient: null };
obj[0] = { marginHorizontal: -require("Themes").space.PX_16 };
createCacheKey = { flexDirection: "row", gap: require("Themes").space.PX_8 };
obj[1] = createCacheKey;
let obj1 = { marginHorizontal: -require("Themes").space.PX_16 };
obj[2] = { paddingHorizontal: require("Themes").space.PX_16 };
let obj3 = { paddingHorizontal: require("Themes").space.PX_16 };
obj[3] = { height: 60, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, overflow: "hidden", borderRadius: require("Themes").radii.sm };
obj[4] = { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 };
obj[5] = { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 };
const obj4 = { height: 60, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, overflow: "hidden", borderRadius: require("Themes").radii.sm };
obj[6] = { color: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { code: "function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}" };
let closure_11 = { code: "function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}" };
let closure_12 = { code: "function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}" };
const obj5 = { color: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let result = require("jsxProd").fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default function ShareAttachments(arg0) {
  let attachments;
  let isRevamp;
  ({ attachments, isRevamp } = arg0);
  if (isRevamp === undefined) {
    isRevamp = false;
  }
  let _require;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let tmp = callback2();
  _require = tmp;
  let obj = _require(sharedValue1[3]);
  sharedValue = obj.useSharedValue(0);
  let obj1 = _require(sharedValue1[3]);
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = _require(sharedValue1[3]);
  sharedValue2 = obj2.useSharedValue(0);
  let obj3 = _require(sharedValue1[3]);
  const fn = function y() {
    let obj = _undefined(sharedValue1[8]);
    let num = 1;
    if (sharedValue.get() <= 0) {
      num = 0;
    }
    obj = { opacity: obj.withTiming(num, outer1_8) };
    return obj;
  };
  obj = { withTiming: _require(sharedValue1[8]).withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG: obj };
  fn.__closure = obj;
  fn.__workletHash = 3302668154466;
  fn.__initData = closure_10;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  class S {
    constructor() {
      obj = c0(useSharedValue[8]);
      value = c1.get();
      sum = value + useSharedValue.get();
      num = 1;
      if (sum >= useSharedValue.get()) {
        num = 0;
      }
      obj = { opacity: obj.withTiming(num, outer1_8) };
      return obj;
    }
  }
  obj = { withTiming: _require(sharedValue1[8]).withTiming, contentOffset: sharedValue, layoutWidth: sharedValue2, contentWidth: sharedValue1, GRADIENT_EASING_CONFIG: obj };
  S.__closure = obj;
  S.__workletHash = 13996707009656;
  S.__initData = closure_11;
  const animatedStyle1 = _require(sharedValue1[3]).useAnimatedStyle(S);
  const obj6 = _require(sharedValue1[3]);
  const fn2 = function v(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.x);
    const result1 = sharedValue1.set(contentOffset.contentSize.width);
    const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
  };
  fn2.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
  fn2.__workletHash = 12660577105859;
  fn2.__initData = closure_12;
  const items = [sharedValue2];
  const obj8 = _require(sharedValue1[3]);
  const items1 = [sharedValue1];
  const callback = sharedValue2.useCallback((nativeEvent) => {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
  }, items);
  const items2 = [tmp.gradient.color];
  const callback1 = sharedValue2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items1);
  const memo = sharedValue2.useMemo(() => _undefined(sharedValue1[9]).hexWithOpacity(_undefined.gradient.color, 0), items2);
  let tmp20Result = null;
  if (0 !== attachments.length) {
    let containerRevamp;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    obj1 = { style: null, children: null };
    obj1[0] = containerRevamp;
    obj2 = { start: null, end: null, colors: null, style: null, pointerEvents: "box-none" };
    obj2[0] = { x: 0, y: 0 };
    obj2[1] = { x: 1, y: 0 };
    const items3 = [tmp.gradient.color, memo];
    obj2[2] = items3;
    const items4 = [tmp.leftGradient, animatedStyle];
    obj2[3] = items4;
    const items5 = [callback(LinearGradient, obj2), , ];
    obj3 = { start: null, end: null, colors: null, style: null, pointerEvents: "box-none" };
    obj3[0] = { x: 0, y: 0 };
    obj3[1] = { x: 1, y: 0 };
    const items6 = [memo, tmp.gradient.color];
    obj3[2] = items6;
    const items7 = [tmp.rightGradient, animatedStyle1];
    obj3[3] = items7;
    items5[1] = callback(LinearGradient, obj3);
    const items8 = [tmp.attachmentPreviewContentContainer, ];
    let prop;
    if (isRevamp) {
      prop = tmp.attachmentPreviewContentContainerRevamp;
    }
    class S {
      constructor() {
        obj = c0(useSharedValue[8]);
        value = c1.get();
        sum = value + useSharedValue.get();
        num = 1;
        if (sum >= useSharedValue.get()) {
          num = 0;
        }
        obj = { opacity: obj.withTiming(num, outer1_8) };
        return obj;
      }
    }
    items8[1] = prop;
    tmp19[0] = items8;
    tmp19[2] = animatedScrollHandler;
    tmp19[3] = callback;
    tmp19[4] = callback1;
    const intl = tmp2(tmp3[10]).intl;
    tmp19[8] = intl.string(tmp2(tmp3[10]).t.RhtzFe);
    tmp19[9] = attachments.map((uri) => {
      let obj = { style: _undefined.attachmentPreview, children: null };
      obj = { uri: uri.uri, width: 60, height: 60, isImage: null, isVideo: null, fileName: null, showPlayOnVideoPreview: true };
      const tmp = sharedValue(sharedValue1[11]);
      obj[3] = _undefined(sharedValue1[12]).isImage(uri.uri, uri.mimeType);
      const obj3 = _undefined(sharedValue1[12]);
      obj[4] = _undefined(sharedValue1[12]).isVideo(uri.uri, uri.mimeType);
      obj[5] = uri.name;
      obj[1] = outer1_5(tmp, obj);
      return outer1_5(outer1_4, obj, arg1);
    });
    items5[2] = callback(sharedValue(tmp3[3]).ScrollView, tmp19);
    obj1[1] = items5;
    tmp20Result = closure_6(View, obj1);
    const tmp15 = callback;
    const tmp20 = closure_6;
    const tmp21 = View;
  }
  return tmp20Result;
};