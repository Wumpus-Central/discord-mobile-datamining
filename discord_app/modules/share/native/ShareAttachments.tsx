// === Module 16029: ShareAttachments ===

// Module 16029 (ShareAttachments)
import nativeDefault from "native" /* 575 */;
import ColorUtils from "ColorUtils" /* 5137 */;
import LinearGradientDefault from "LinearGradient" /* 5715 */;
import utils_UploadUtils from "utils/UploadUtils" /* 8290 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 11243 */;
import noop from "module_19" /* 19 */;
import module_1652 from "module_1652" /* 1652 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const LinearGradient = module_1652.createAnimatedComponent(LinearGradientDefault);
let obj = { duration: 300, easing: fn(1187).STANDARD_EASING };
const createStyles = fn(5140);
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
let closure_10 = { code: "(function ShareAttachmentsTsx1(){let[withTiming,contentOffset,GRADIENT_EASING_CONFIG]=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};})" };
let closure_11 = { code: "(function ShareAttachmentsTsx2(){let[withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG]=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};})" };
let closure_12 = { code: "(function ShareAttachmentsTsx3(event){let[contentOffset,contentWidth,layoutWidth]=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default function ShareAttachments(arg0) {
  ({ attachments, isRevamp } = arg0);
  if (isRevamp === undefined) {
    isRevamp = false;
  }
  let tmp = closure_9();
  _require = tmp;
  obj = require("module_1652");
  const sharedValue = obj.useSharedValue(0);
  const sharedValue1 = require("module_1652").useSharedValue(0);
  const obj2 = require("module_1652");
  const sharedValue2 = require("module_1652").useSharedValue(0);
  let obj3 = require("module_1652");
  items = [closure_10, require("timing/timing").withTiming, sharedValue, obj];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp8, tmp9, tmp10, tmp11] = items;
  class ShareAttachmentsTsx1 {
    constructor() {
      tmp = closure_0;
      num = 1;
      if (closure_1.get() <= 0) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_2) };
      return obj;
    }
  }
  const items1 = [tmp9, tmp10, tmp11];
  ShareAttachmentsTsx1.__closure = items1;
  ShareAttachmentsTsx1.__workletHash = 2089299746555;
  ShareAttachmentsTsx1.__initData = tmp8;
  const animatedStyle = require("module_1652").useAnimatedStyle(ShareAttachmentsTsx1);
  const obj4 = require("module_1652");
  const tmp7 = obj;
  const items2 = [closure_11, require("timing/timing").withTiming, sharedValue, sharedValue2, sharedValue1, tmp7];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c4 = undefined;
  [tmp13, tmp14, tmp15, tmp16, tmp17, tmp18] = items2;
  class ShareAttachmentsTsx2 {
    constructor() {
      tmp = closure_0;
      value = closure_1.get();
      sum = value + closure_2.get();
      num = 1;
      if (sum >= closure_3.get()) {
        num = 0;
      }
      obj = { opacity: tmp(num, closure_4) };
      return obj;
    }
  }
  const items3 = [tmp14, tmp15, tmp16, tmp17, tmp18];
  ShareAttachmentsTsx2.__closure = items3;
  ShareAttachmentsTsx2.__workletHash = 8432492365025;
  ShareAttachmentsTsx2.__initData = tmp13;
  const animatedStyle1 = require("module_1652").useAnimatedStyle(ShareAttachmentsTsx2);
  const tmp2Result = require("module_1652");
  const items4 = [closure_12, sharedValue, sharedValue1, sharedValue2];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp20, tmp21, tmp22, tmp23] = items4;
  class ShareAttachmentsTsx3 {
    constructor(arg0) {
      result = closure_0.set(arg0.contentOffset.x);
      result1 = closure_1.set(arg0.contentSize.width);
      result2 = closure_2.set(arg0.layoutMeasurement.width);
      return;
    }
  }
  const items5 = [tmp21, tmp22, tmp23];
  ShareAttachmentsTsx3.__closure = items5;
  ShareAttachmentsTsx3.__workletHash = 11612093533242;
  ShareAttachmentsTsx3.__initData = tmp20;
  const items6 = [sharedValue2];
  const tmp2Result2 = require("module_1652");
  const items7 = [sharedValue1];
  const callback = noop.useCallback((nativeEvent) => {
    const result = _undefined3.set(nativeEvent.nativeEvent.layout.width);
  }, items6);
  const items8 = [tmp.gradient.color];
  const callback1 = noop.useCallback((arg0) => {
    const result = _undefined2.set(arg0);
  }, items7);
  const memo = noop.useMemo(() => ColorUtils.hexWithOpacity(_undefined.gradient.color, 0), items8);
  let tmp34Result = null;
  if (0 !== attachments.length) {
    let containerRevamp;
    if (isRevamp) {
      containerRevamp = tmp.containerRevamp;
    }
    const obj5 = { style: containerRevamp, children: null };
    const obj6 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, style: null, pointerEvents: "box-none" };
    const items9 = [tmp.gradient.color, memo];
    obj6.colors = items9;
    const items10 = [tmp.leftGradient, animatedStyle];
    obj6.style = items10;
    const items11 = [closure_5(LinearGradient, obj6), , ];
    const obj7 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: null, style: null, pointerEvents: "box-none" };
    const items12 = [memo, tmp.gradient.color];
    obj7.colors = items12;
    const items13 = [tmp.rightGradient, animatedStyle1];
    obj7.style = items13;
    items11[1] = closure_5(LinearGradient, obj7);
    const items14 = [, ];
    class ShareAttachmentsTsx1 {
      constructor() {
        tmp = closure_0;
        num = 1;
        if (closure_1.get() <= 0) {
          num = 0;
        }
        obj = { opacity: tmp(num, closure_2) };
        return obj;
      }
    }
    let prop;
    if (isRevamp) {
      prop = tmp.attachmentPreviewContentContainerRevamp;
    }
    const obj8 = { contentContainerStyle: null, horizontal: true, onScroll: null, onLayout: null, onContentSizeChange: null, scrollEventThrottle: 16, showsHorizontalScrollIndicator: false, accessibilityRole: "list", accessibilityLabel: null, children: null };
    items14[1] = prop;
    obj8.contentContainerStyle = items14;
    obj8.onScroll = animatedScrollHandler;
    obj8.onLayout = callback;
    obj8.onContentSizeChange = callback1;
    const intl = tmp2(1113).intl;
    obj8.accessibilityLabel = intl.string(tmp2(1113).t.RhtzFe);
    obj8.children = attachments.map((uri, index) => {
      obj = { style: _undefined.attachmentPreview, children: null };
      const size = { uri: uri.uri, width: 60, height: 60, isImage: null, isVideo: null, fileName: null, showPlayOnVideoPreview: true };
      const tmp = AttachmentPreviewDefault;
      size.isImage = utils_UploadUtils.isImage(uri.uri, uri.mimeType);
      size.isVideo = utils_UploadUtils.isVideo(uri.uri, uri.mimeType);
      size.fileName = uri.name;
      obj.children = hasOwnProperty(tmp, size);
      return hasOwnProperty(View, obj, index);
    });
    items11[2] = closure_5(module_1652.ScrollView, obj8);
    obj5.children = items11;
    tmp34Result = closure_6(c4, obj5);
  }
  return tmp34Result;
};