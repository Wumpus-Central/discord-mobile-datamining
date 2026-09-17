// === Module 14017: ShareAttachments ===

// Module 14017 (ShareAttachments)
import nativeDefault from "native" /* 576 */;
import ColorUtils from "ColorUtils" /* 4489 */;
import timing from "timing" /* 4641 */;
import LinearGradientDefault from "LinearGradient" /* 5074 */;
import utils_UploadUtils from "utils/UploadUtils" /* 5225 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 10343 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let GRADIENT_EASING_CONFIG = { duration: 300, easing: fn(1177).STANDARD_EASING };
const createStyles = fn(4640);
let obj2 = { containerRevamp: { marginHorizontal: -nativeDefault.space.PX_16 }, attachmentPreviewContentContainer: null, attachmentPreviewContentContainerRevamp: null, attachmentPreview: null, leftGradient: null, rightGradient: null, gradient: null };
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.attachmentPreviewContentContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.attachmentPreviewContentContainerRevamp = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.attachmentPreview = { height: 60, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
obj2.leftGradient = { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 };
obj2.rightGradient = { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 };
let obj7 = { height: 60, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overflow: "hidden", borderRadius: nativeDefault.radii.sm };
obj2.gradient = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj2);
const __initData = { code: "function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}" };
const __initData2 = { code: "function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}" };
const __initData3 = { code: "function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default function ShareAttachments(arg0) {
  ({ attachments, isRevamp } = arg0);
  if (isRevamp === undefined) {
    isRevamp = false;
  }
  let sharedValue1;
  let tmp = closure_9();
  _require = tmp;
  GRADIENT_EASING_CONFIG = require("ReanimatedRexport");
  const sharedValue = GRADIENT_EASING_CONFIG.useSharedValue(0);
  sharedValue1 = require("ReanimatedRexport").useSharedValue(0);
  const obj2 = require("ReanimatedRexport");
  const sharedValue2 = require("ReanimatedRexport").useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const fn = function y() {
    const obj = timing;
    let num = 1;
    if (sharedValue.get() <= 0) {
      num = 0;
    }
    return { opacity: obj.withTiming(num, obj) };
  };
  const obj4 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG };
  fn.__workletHash = 3302668154466;
  fn.__initData = __initData;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  const obj5 = { withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG };
  class S {
    constructor() {
      obj = closure_0(closure_2[8]);
      value = closure_1.get();
      sum = value + closure_3.get();
      num = 1;
      if (sum >= closure_2.get()) {
        num = 0;
      }
      obj1 = { opacity: obj.withTiming(num, closure_8) };
      return obj1;
    }
  }
  const obj6 = require("ReanimatedRexport");
  S.__closure = { withTiming: require("timing").withTiming, contentOffset: sharedValue, layoutWidth: sharedValue2, contentWidth: sharedValue1, GRADIENT_EASING_CONFIG };
  S.__workletHash = 13996707009656;
  S.__initData = __initData2;
  const animatedStyle1 = obj6.useAnimatedStyle(S);
  const obj7 = { withTiming: require("timing").withTiming, contentOffset: sharedValue, layoutWidth: sharedValue2, contentWidth: sharedValue1, GRADIENT_EASING_CONFIG };
  const fn2 = function v(contentOffset) {
    const result = sharedValue.set(contentOffset.contentOffset.x);
    const result1 = sharedValue1.set(contentOffset.contentSize.width);
    const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
  };
  fn2.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
  fn2.__workletHash = 12660577105859;
  fn2.__initData = __initData3;
  const items = [sharedValue2];
  const obj8 = require("ReanimatedRexport");
  const items1 = [sharedValue1];
  const callback = sharedValue2.useCallback((nativeEvent) => {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
  }, items);
  const items2 = [tmp.gradient.color];
  const callback1 = sharedValue2.useCallback((arg0) => {
    const result = sharedValue1.set(arg0);
  }, items1);
  const memo = sharedValue2.useMemo(() => ColorUtils.hexWithOpacity(closure_0.gradient.color, 0), items2);
  let tmp20Result = null;
  if (0 !== attachments.length) {
    let containerRevamp;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    const obj9 = { style: containerRevamp, children: null };
    const obj10 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, style: null, pointerEvents: "box-none" };
    const items3 = [tmp.gradient.color, memo];
    obj10.colors = items3;
    const items4 = [tmp.leftGradient, animatedStyle];
    obj10.style = items4;
    const items5 = [closure_5(LinearGradient, obj10), , ];
    const obj11 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, style: null, pointerEvents: "box-none" };
    const items6 = [memo, tmp.gradient.color];
    obj11.colors = items6;
    const items7 = [tmp.rightGradient, animatedStyle1];
    obj11.style = items7;
    items5[1] = closure_5(LinearGradient, obj11);
    const items8 = [tmp.attachmentPreviewContentContainer, ];
    let prop;
    if (isRevamp) {
      prop = tmp.attachmentPreviewContentContainerRevamp;
    }
    class S {
      constructor() {
        obj = closure_0(closure_2[8]);
        value = closure_1.get();
        sum = value + closure_3.get();
        num = 1;
        if (sum >= closure_2.get()) {
          num = 0;
        }
        obj1 = { opacity: obj.withTiming(num, closure_8) };
        return obj1;
      }
    }
    items8[1] = prop;
    tmp19[0] = items8;
    tmp19[2] = animatedScrollHandler;
    tmp19[3] = callback;
    tmp19[4] = callback1;
    const intl = tmp2(tmp3[10]).intl;
    tmp19[8] = intl.string(tmp2(tmp3[10]).t.RhtzFe);
    tmp19[9] = attachments.map((uri, index) => {
      const obj = { style: closure_0.attachmentPreview, children: null };
      const size = { uri: uri.uri, width: 60, height: 60, isImage: null, isVideo: null, fileName: null, showPlayOnVideoPreview: true };
      const tmp = AttachmentPreviewDefault;
      size.isImage = utils_UploadUtils.isImage(uri.uri, uri.mimeType);
      size.isVideo = utils_UploadUtils.isVideo(uri.uri, uri.mimeType);
      size.fileName = uri.name;
      obj.children = hasOwnProperty(tmp, size);
      return hasOwnProperty(View, obj, index);
    });
    items5[2] = closure_5(sharedValue(tmp3[3]).ScrollView, tmp19);
    obj9.children = items5;
    tmp20Result = closure_6(View, obj9);
  }
  return tmp20Result;
};