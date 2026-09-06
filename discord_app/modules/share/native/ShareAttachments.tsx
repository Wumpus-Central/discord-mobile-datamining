// discord_app/modules/share/native/ShareAttachments.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../_runtime/04987_LinearGradient.js";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import AttachmentPreviewDefault from "../../media/native/AttachmentPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let obj = { duration: 300, easing: fn(1178).STANDARD_EASING };
fn(4560);
obj = {
  containerRevamp: { marginHorizontal: -nativeDefault.space.PX_16 },
  attachmentPreviewContentContainer: null,
  attachmentPreviewContentContainerRevamp: null,
  attachmentPreview: null,
  leftGradient: null,
  rightGradient: null,
  gradient: null,
};
const createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj.attachmentPreviewContentContainer = createStyles;
let obj1 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj.attachmentPreviewContentContainerRevamp = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj.attachmentPreview = {
  height: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
};
obj.leftGradient = { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 };
obj.rightGradient = { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 };
const obj4 = {
  height: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
};
obj.gradient = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj);
const __initData = {
  code: "function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}",
};
const __initData2 = {
  code: "function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}",
};
const __initData3 = {
  code: "function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}",
};
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
  let __closure = require("ReanimatedRexport");
  const sharedValue = __closure.useSharedValue(0);
  let obj1 = require("ReanimatedRexport");
  sharedValue1 = obj1.useSharedValue(0);
  let obj2 = require("ReanimatedRexport");
  const sharedValue2 = obj2.useSharedValue(0);
  let obj3 = require("ReanimatedRexport");
  const fn = function y() {
    obj = timing;
    let num = 1;
    if (sharedValue.get() <= 0) {
      num = 0;
    }
    obj = { opacity: obj.withTiming(num, obj) };
    return obj;
  };
  __closure = {
    withTiming: require("timing").withTiming,
    contentOffset: sharedValue,
    GRADIENT_EASING_CONFIG: __closure,
  };
  fn.__closure = __closure;
  fn.__workletHash = 3302668154466;
  fn.__initData = __initData;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  class S {
    constructor() {
      obj = closure_0(closure_2[8]);
      value = closure_1.get();
      sum = value + closure_3.get();
      num = 1;
      if (sum >= closure_2.get()) {
        num = 0;
      }
      obj = { opacity: obj.withTiming(num, closure_8) };
      return obj;
    }
  }
  __closure = {
    withTiming: require("timing").withTiming,
    contentOffset: sharedValue,
    layoutWidth: sharedValue2,
    contentWidth: sharedValue1,
    GRADIENT_EASING_CONFIG: __closure,
  };
  S.__closure = __closure;
  S.__workletHash = 13996707009656;
  S.__initData = __initData2;
  const animatedStyle1 = require("ReanimatedRexport").useAnimatedStyle(S);
  const obj6 = require("ReanimatedRexport");
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
    obj1 = { style: containerRevamp, children: null };
    obj2 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, style: null, pointerEvents: "box-none" };
    const items3 = [tmp.gradient.color, memo];
    obj2.colors = items3;
    const items4 = [tmp.leftGradient, animatedStyle];
    obj2.style = items4;
    const items5 = [closure_5(LinearGradient, obj2), ,];
    obj3 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, style: null, pointerEvents: "box-none" };
    const items6 = [memo, tmp.gradient.color];
    obj3.colors = items6;
    const items7 = [tmp.rightGradient, animatedStyle1];
    obj3.style = items7;
    items5[1] = closure_5(LinearGradient, obj3);
    const items8 = [tmp.attachmentPreviewContentContainer];
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
        obj = { opacity: obj.withTiming(num, closure_8) };
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
    tmp19[9] = attachments.map((uri, index) => {
      obj = { style: closure_0.attachmentPreview, children: null };
      const size = {
        uri: uri.uri,
        width: 60,
        height: 60,
        isImage: null,
        isVideo: null,
        fileName: null,
        showPlayOnVideoPreview: true,
      };
      const tmp = AttachmentPreviewDefault;
      size.isImage = utils_UploadUtils.isImage(uri.uri, uri.mimeType);
      size.isVideo = utils_UploadUtils.isVideo(uri.uri, uri.mimeType);
      size.fileName = uri.name;
      obj.children = hasOwnProperty(tmp, size);
      return hasOwnProperty(View, obj, index);
    });
    items5[2] = closure_5(sharedValue(tmp3[3]).ScrollView, tmp19);
    obj1.children = items5;
    tmp20Result = closure_6(View, obj1);
  }
  return tmp20Result;
}
