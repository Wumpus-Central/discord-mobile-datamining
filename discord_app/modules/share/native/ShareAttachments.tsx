// discord_app/modules/share/native/ShareAttachments.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import AttachmentPreviewDefault from "../../media/native/AttachmentPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let GRADIENT_EASING_CONFIG = { duration: 300, easing: fn(1200).STANDARD_EASING };
const createStyles = fn(5090);
let obj2 = {
  containerRevamp: { marginHorizontal: -nativeDefault.space.PX_16 },
  attachmentPreviewContentContainer: null,
  attachmentPreviewContentContainerRevamp: null,
  attachmentPreview: null,
  leftGradient: null,
  rightGradient: null,
  gradient: null,
};
let obj4 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj2.attachmentPreviewContentContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.attachmentPreviewContentContainerRevamp = { paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.attachmentPreview = {
  height: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
};
obj2.leftGradient = { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 };
obj2.rightGradient = { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 };
let obj7 = {
  height: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
};
obj2.gradient = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: "function ShareAttachmentsTsx1(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}",
};
const __initData2 = {
  code: "function ShareAttachmentsTsx2(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}",
};
const __initData3 = {
  code: "function ShareAttachmentsTsx3(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}",
};
const __initData4 = {
  code: "function ShareAttachmentsTsx4(){const{withTiming,contentOffset,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()<=0?0:1,GRADIENT_EASING_CONFIG)};}",
};
const __initData5 = {
  code: "function ShareAttachmentsTsx5(){const{withTiming,contentOffset,layoutWidth,contentWidth,GRADIENT_EASING_CONFIG}=this.__closure;return{opacity:withTiming(contentOffset.get()+layoutWidth.get()>=contentWidth.get()?0:1,GRADIENT_EASING_CONFIG)};}",
};
const __initData6 = {
  code: "function ShareAttachmentsTsx6(event){const{contentOffset,contentWidth,layoutWidth}=this.__closure;contentOffset.set(event.contentOffset.x);contentWidth.set(event.contentSize.width);layoutWidth.set(event.layoutMeasurement.width);}",
};
const ReactCompilerGating = fn(558);
let obj8 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let size = fn(2);
let result = size.fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ShareAttachments(arg0) {
      GRADIENT_EASING_CONFIG = attachmentPreview(sharedValue1[9]);
      const cResult = GRADIENT_EASING_CONFIG.c(48);
      ({ attachments, isRevamp } = arg0);
      attachmentPreview = closure_9();
      const sharedValue = attachmentPreview(sharedValue1[3]).useSharedValue(0);
      const tmpResult = attachmentPreview(sharedValue1[3]);
      sharedValue1 = attachmentPreview(sharedValue1[3]).useSharedValue(0);
      const tmpResult6 = attachmentPreview(sharedValue1[3]);
      const sharedValue2 = attachmentPreview(sharedValue1[3]).useSharedValue(0);
      const tmpResult7 = attachmentPreview(sharedValue1[3]);
      const fn = function n() {
        const obj = timing;
        let num = 1;
        if (sharedValue.get() <= 0) {
          num = 0;
        }
        return { opacity: obj.withTiming(num, obj) };
      };
      const tmpResult8 = attachmentPreview(sharedValue1[3]);
      fn.__closure = {
        withTiming: attachmentPreview(sharedValue1[10]).withTiming,
        contentOffset: sharedValue,
        GRADIENT_EASING_CONFIG,
      };
      fn.__workletHash = 3302668154466;
      fn.__initData = __initData;
      const animatedStyle = tmpResult8.useAnimatedStyle(fn);
      const obj2 = {
        withTiming: attachmentPreview(sharedValue1[10]).withTiming,
        contentOffset: sharedValue,
        GRADIENT_EASING_CONFIG,
      };
      const fn2 = function y() {
        const obj = timing;
        value = sharedValue.get();
        const sum = value + sharedValue2.get();
        let num = 1;
        if (sum >= sharedValue1.get()) {
          num = 0;
        }
        return { opacity: obj.withTiming(num, obj) };
      };
      const tmpResult9 = attachmentPreview(sharedValue1[3]);
      fn2.__closure = {
        withTiming: attachmentPreview(sharedValue1[10]).withTiming,
        contentOffset: sharedValue,
        layoutWidth: sharedValue2,
        contentWidth: sharedValue1,
        GRADIENT_EASING_CONFIG,
      };
      fn2.__workletHash = 13996707009656;
      fn2.__initData = __initData2;
      const animatedStyle1 = tmpResult9.useAnimatedStyle(fn2);
      let obj3 = {
        withTiming: attachmentPreview(sharedValue1[10]).withTiming,
        contentOffset: sharedValue,
        layoutWidth: sharedValue2,
        contentWidth: sharedValue1,
        GRADIENT_EASING_CONFIG,
      };
      const fn3 = function w(contentOffset) {
        const result = sharedValue.set(contentOffset.contentOffset.x);
        const result1 = sharedValue1.set(contentOffset.contentSize.width);
        const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
      };
      fn3.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
      fn3.__workletHash = 12660577105859;
      fn3.__initData = __initData3;
      attachmentPreview(sharedValue1[3]).useAnimatedScrollHandler(fn3);
      if (cResult[0] !== sharedValue2) {
        const fn4 = function v(nativeEvent) {
          const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = sharedValue2;
        cResult[1] = fn4;
      }
      if (cResult[2] !== sharedValue1) {
        class R {
          constructor(arg0) {
            result = closure_2.set(arg0);
            return;
          }
        }
        cResult[2] = sharedValue1;
        cResult[3] = R;
      } else {
        class R {
          constructor(arg0) {
            result = closure_2.set(arg0);
            return;
          }
        }
      }
      if (cResult[4] !== attachmentPreview.gradient.color) {
        class R {
          constructor(arg0) {
            result = closure_2.set(arg0);
            return;
          }
        }
        const hexWithOpacityResult = obj10.hexWithOpacity(attachmentPreview.gradient.color, 0);
        cResult[4] = attachmentPreview.gradient.color;
        cResult[5] = hexWithOpacityResult;
      } else {
        class R {
          constructor(arg0) {
            result = closure_2.set(arg0);
            return;
          }
        }
      }
      if (0 === attachments.length) {
        class R {
          constructor(arg0) {
            result = closure_2.set(arg0);
            return;
          }
        }
        return null;
      } else {
        class R {
          constructor(arg0) {
            result = closure_2.set(arg0);
            return;
          }
        }
        if (tmp4) {
          class R {
            constructor(arg0) {
              result = closure_2.set(arg0);
              return;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor(arg0) {
              result = closure_2.set(arg0);
              return;
            }
          }
          const point = { x: 1, y: 0 };
          cResult[6] = tmp18;
          cResult[7] = point;
          let tmp17 = point;
        } else {
          class R {
            constructor(arg0) {
              result = closure_2.set(arg0);
              return;
            }
          }
          tmp17 = cResult[7];
        }
        if (cResult[8] === attachmentPreview.gradient.color) {
          class R {
            constructor(arg0) {
              result = closure_2.set(arg0);
              return;
            }
          }
          if (cResult[11] === animatedStyle) {
            class R {
              constructor(arg0) {
                result = closure_2.set(arg0);
                return;
              }
            }
            if (cResult[14] === tmp19) {
              class R {
                constructor(arg0) {
                  result = closure_2.set(arg0);
                  return;
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor(arg0) {
                    result = closure_2.set(arg0);
                    return;
                  }
                }
                const point1 = { x: 1, y: 0 };
                cResult[17] = tmp27;
                cResult[18] = point1;
                let tmp26 = point1;
              } else {
                class R {
                  constructor(arg0) {
                    result = closure_2.set(arg0);
                    return;
                  }
                }
                tmp26 = cResult[18];
              }
              if (cResult[19] === attachmentPreview.gradient.color) {
                class R {
                  constructor(arg0) {
                    result = closure_2.set(arg0);
                    return;
                  }
                }
                if (cResult[22] === animatedStyle1) {
                  class R {
                    constructor(arg0) {
                      result = closure_2.set(arg0);
                      return;
                    }
                  }
                  if (cResult[25] === tmp28) {
                    class R {
                      constructor(arg0) {
                        result = closure_2.set(arg0);
                        return;
                      }
                    }
                    if (tmp4) {
                      class R {
                        constructor(arg0) {
                          result = closure_2.set(arg0);
                          return;
                        }
                      }
                    }
                    if (cResult[28] === attachmentPreview.attachmentPreviewContentContainer) {
                      class R {
                        constructor(arg0) {
                          result = closure_2.set(arg0);
                          return;
                        }
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        class R {
                          constructor(arg0) {
                            result = closure_2.set(arg0);
                            return;
                          }
                        }
                        const stringResult = obj15.string(tmp(tmp2[12]).t.RhtzFe);
                        cResult[31] = stringResult;
                      } else {
                        class R {
                          constructor(arg0) {
                            result = closure_2.set(arg0);
                            return;
                          }
                        }
                      }
                      if (cResult[32] === attachments) {
                        class R {
                          constructor(arg0) {
                            result = closure_2.set(arg0);
                            return;
                          }
                        }
                      }
                      if (cResult[35] !== attachmentPreview.attachmentPreview) {
                        class Q {
                          constructor(arg0, arg1) {
                            obj = { style: closure_0.attachmentPreview, children: null };
                            size = {
                              uri: arg0.uri,
                              width: 60,
                              height: 60,
                              isImage: null,
                              isVideo: null,
                              fileName: null,
                              showPlayOnVideoPreview: true,
                            };
                            tmp = closure_1(closure_2[13]);
                            obj3 = closure_0(closure_2[14]);
                            size.isImage = obj3.isImage(arg0.uri, arg0.mimeType);
                            obj4 = closure_0(closure_2[14]);
                            size.isVideo = obj4.isVideo(arg0.uri, arg0.mimeType);
                            size.fileName = arg0.name;
                            obj.children = jsx(tmp, size);
                            return jsx(View, obj, arg1);
                          }
                        }
                        cResult[35] = attachmentPreview.attachmentPreview;
                        cResult[36] = Q;
                      } else {
                        class Q {
                          constructor(arg0, arg1) {
                            obj = { style: closure_0.attachmentPreview, children: null };
                            size = {
                              uri: arg0.uri,
                              width: 60,
                              height: 60,
                              isImage: null,
                              isVideo: null,
                              fileName: null,
                              showPlayOnVideoPreview: true,
                            };
                            tmp = closure_1(closure_2[13]);
                            obj3 = closure_0(closure_2[14]);
                            size.isImage = obj3.isImage(arg0.uri, arg0.mimeType);
                            obj4 = closure_0(closure_2[14]);
                            size.isVideo = obj4.isVideo(arg0.uri, arg0.mimeType);
                            size.fileName = arg0.name;
                            obj.children = jsx(tmp, size);
                            return jsx(View, obj, arg1);
                          }
                        }
                      }
                      const mapped = attachments.map(Q);
                      cResult[32] = attachments;
                      attachmentPreview = attachmentPreview.attachmentPreview;
                      cResult[33] = attachmentPreview;
                      cResult[34] = mapped;
                    }
                    const items = [attachmentPreview.attachmentPreviewContentContainer, undefined];
                    cResult[28] = attachmentPreview.attachmentPreviewContentContainer;
                    cResult[29] = undefined;
                    cResult[30] = items;
                  }
                  const obj4 = { start: tmp27, end: tmp26, colors: tmp28, style: tmp29, pointerEvents: "box-none" };
                  const tmp33 = closure_5(LinearGradient, obj4);
                  cResult[25] = tmp28;
                  cResult[26] = tmp29;
                  cResult[27] = tmp33;
                }
                const items1 = [attachmentPreview.rightGradient, animatedStyle1];
                cResult[22] = animatedStyle1;
                cResult[23] = attachmentPreview.rightGradient;
                cResult[24] = items1;
              }
              const items2 = [tmp13, attachmentPreview.gradient.color];
              cResult[19] = attachmentPreview.gradient.color;
              cResult[20] = tmp13;
              cResult[21] = items2;
            }
            const obj5 = { start: tmp18, end: tmp17, colors: tmp19, style: tmp20, pointerEvents: "box-none" };
            const tmp24 = closure_5(LinearGradient, obj5);
            cResult[14] = tmp19;
            cResult[15] = tmp20;
            cResult[16] = tmp24;
          }
          const items3 = [attachmentPreview.leftGradient, animatedStyle];
          cResult[11] = animatedStyle;
          cResult[12] = attachmentPreview.leftGradient;
          cResult[13] = items3;
        }
        const items4 = [attachmentPreview.gradient.color, tmp13];
        cResult[8] = attachmentPreview.gradient.color;
        cResult[9] = tmp13;
        cResult[10] = items4;
      }
      const tmpResult10 = attachmentPreview(sharedValue1[3]);
    }
  : function ShareAttachments(arg0) {
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
      const fn = function _() {
        const obj = timing;
        let num = 1;
        if (sharedValue.get() <= 0) {
          num = 0;
        }
        return { opacity: obj.withTiming(num, obj) };
      };
      const obj4 = require("ReanimatedRexport");
      fn.__closure = { withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG };
      fn.__workletHash = 3355545292519;
      fn.__initData = __initData4;
      const animatedStyle = obj4.useAnimatedStyle(fn);
      const obj5 = { withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG };
      const fn2 = function f() {
        const obj = timing;
        value = sharedValue.get();
        const sum = value + sharedValue2.get();
        let num = 1;
        if (sum >= sharedValue1.get()) {
          num = 0;
        }
        return { opacity: obj.withTiming(num, obj) };
      };
      const obj6 = require("ReanimatedRexport");
      fn2.__closure = {
        withTiming: require("timing").withTiming,
        contentOffset: sharedValue,
        layoutWidth: sharedValue2,
        contentWidth: sharedValue1,
        GRADIENT_EASING_CONFIG,
      };
      fn2.__workletHash = 15314989935487;
      fn2.__initData = __initData5;
      const animatedStyle1 = obj6.useAnimatedStyle(fn2);
      const obj7 = {
        withTiming: require("timing").withTiming,
        contentOffset: sharedValue,
        layoutWidth: sharedValue2,
        contentWidth: sharedValue1,
        GRADIENT_EASING_CONFIG,
      };
      class S {
        constructor(arg0) {
          result = closure_1.set(arg0.contentOffset.x);
          result1 = closure_2.set(arg0.contentSize.width);
          result2 = closure_3.set(arg0.layoutMeasurement.width);
          return;
        }
      }
      S.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
      S.__workletHash = 1501520307014;
      S.__initData = __initData6;
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
      let tmp19Result = null;
      if (0 !== attachments.length) {
        let containerRevamp;
        if (isRevamp) {
          containerRevamp = tmp.containerRevamp;
        }
        const obj9 = { style: containerRevamp, children: null };
        const obj10 = {
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
          colors: null,
          style: null,
          pointerEvents: "box-none",
        };
        const items3 = [tmp.gradient.color, memo];
        obj10.colors = items3;
        const items4 = [tmp.leftGradient, animatedStyle];
        obj10.style = items4;
        const items5 = [closure_5(LinearGradient, obj10), ,];
        const obj11 = {
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
          colors: null,
          style: null,
          pointerEvents: "box-none",
        };
        const items6 = [memo, tmp.gradient.color];
        obj11.colors = items6;
        const items7 = [tmp.rightGradient, animatedStyle1];
        obj11.style = items7;
        items5[1] = closure_5(LinearGradient, obj11);
        const items8 = [tmp.attachmentPreviewContentContainer];
        let prop;
        if (isRevamp) {
          prop = tmp.attachmentPreviewContentContainerRevamp;
        }
        const obj12 = {
          contentContainerStyle: null,
          horizontal: true,
          onScroll: null,
          onLayout: null,
          onContentSizeChange: null,
          scrollEventThrottle: 16,
          showsHorizontalScrollIndicator: false,
          accessibilityRole: "list",
          accessibilityLabel: null,
          children: null,
        };
        items8[1] = prop;
        obj12.contentContainerStyle = items8;
        obj12.onScroll = animatedScrollHandler;
        obj12.onLayout = callback;
        obj12.onContentSizeChange = callback1;
        const intl = tmp2(tmp3[12]).intl;
        obj12.accessibilityLabel = intl.string(tmp2(tmp3[12]).t.RhtzFe);
        obj12.children = attachments.map((uri, index) => {
          const obj = { style: closure_0.attachmentPreview, children: null };
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
        items5[2] = closure_5(sharedValue(tmp3[3]).ScrollView, obj12);
        obj9.children = items5;
        tmp19Result = closure_6(View, obj9);
      }
      return tmp19Result;
    };
