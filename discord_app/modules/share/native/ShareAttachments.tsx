// discord_app/modules/share/native/ShareAttachments.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import timing from "../../../design/animation/reanimated/timing/timing.tsx";
import LinearGradientDefault from "../../../../_runtime/05605_LinearGradient.js";
import utils_UploadUtils from "../../../utils/native/UploadUtils.tsx";
import AttachmentPreviewDefault from "../../media/native/AttachmentPreview.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const LinearGradient = ReanimatedRexport.createAnimatedComponent(LinearGradientDefault);
let GRADIENT_EASING_CONFIG = { duration: 300, easing: native.STANDARD_EASING };
let createStyles = createStyles_mod;
let obj2 = {
  containerRevamp: obj3,
  attachmentPreviewContentContainer: obj4,
  attachmentPreviewContentContainerRevamp: obj5,
  attachmentPreview: obj6,
  leftGradient: { width: 50, position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 100 },
  rightGradient: { width: 50, position: "absolute", right: 0, top: 0, bottom: 0, zIndex: 100 },
  gradient: obj7,
};
obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = {
  height: 60,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  overflow: "hidden",
  borderRadius: nativeDefault.radii.sm,
};
obj7 = { color: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_9 = createStyles(obj2);
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
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let attachmentPreview;
      let attachments;
      let isRevamp;
      let sharedValue1;
      let tmp12;
      let tmp = _require;
      GRADIENT_EASING_CONFIG = require("react");
      const cResult = GRADIENT_EASING_CONFIG.c(48);
      ({ attachments, isRevamp } = arg0);
      const tmp5 = closure_9();
      _require = tmp5;
      const tmpResult = tmp(sharedValue1[3]);
      const sharedValue = tmpResult.useSharedValue(0);
      const tmpResult6 = tmp(sharedValue1[3]);
      sharedValue1 = tmpResult6.useSharedValue(0);
      const tmpResult7 = tmp(sharedValue1[3]);
      const sharedValue2 = tmpResult7.useSharedValue(0);
      const fn = function n() {
        let obj;
        const withTiming = timing.withTiming;
        let num = 1;
        timing;
        if (sharedValue.get() <= 0) {
          num = 0;
        }
        obj = { opacity: withTiming(num, obj) };
        return obj;
      };
      const tmpResult8 = tmp(sharedValue1[3]);
      fn.__closure = {
        withTiming: tmp(sharedValue1[10]).withTiming,
        contentOffset: sharedValue,
        GRADIENT_EASING_CONFIG,
      };
      fn.__workletHash = 3302668154466;
      fn.__initData = __initData;
      ({ withTiming: tmp(sharedValue1[10]).withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG });
      const animatedStyle = tmpResult8.useAnimatedStyle(fn);
      const fn2 = function y() {
        let obj;
        const withTiming = timing.withTiming;
        timing;
        const value = sharedValue.get();
        const sum = value + sharedValue2.get();
        let num = 1;
        if (sum >= sharedValue1.get()) {
          num = 0;
        }
        obj = { opacity: withTiming(num, obj) };
        return obj;
      };
      const tmpResult9 = tmp(sharedValue1[3]);
      let obj3 = {
        withTiming: tmp(tmp2[10]).withTiming,
        contentOffset: sharedValue,
        layoutWidth: sharedValue2,
        contentWidth: sharedValue1,
        GRADIENT_EASING_CONFIG,
      };
      fn2.__closure = obj3;
      fn2.__workletHash = 13996707009656;
      fn2.__initData = __initData2;
      const animatedStyle1 = tmpResult9.useAnimatedStyle(fn2);
      const fn3 = function w(contentOffset) {
        const result = sharedValue.set(contentOffset.contentOffset.x);
        const result1 = sharedValue1.set(contentOffset.contentSize.width);
        const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
      };
      fn3.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
      fn3.__workletHash = 12660577105859;
      fn3.__initData = __initData3;
      const tmpResult10 = tmp(sharedValue1[3]);
      const animatedScrollHandler = tmpResult10.useAnimatedScrollHandler(fn3);
      if (cResult[0] !== sharedValue2) {
        const fn4 = function v(nativeEvent) {
          const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = sharedValue2;
        let num = 1;
        cResult[1] = fn4;
        tmp12 = fn4;
      } else {
        tmp12 = cResult[1];
      }
      if (cResult[2] !== sharedValue1) {
        class R {
          constructor(arg0) {
            const result = sharedValue1.set(arg0);
          }
        }
        cResult[2] = sharedValue1;
        cResult[3] = R;
      } else {
        class R {
          constructor(arg0) {
            const result = sharedValue1.set(arg0);
          }
        }
      }
      if (cResult[4] !== tmp5.gradient.color) {
        class R {
          constructor(arg0) {
            const result = sharedValue1.set(arg0);
          }
        }
        cResult[4] = tmp5.gradient.color;
        cResult[5] = obj10.hexWithOpacity(tmp5.gradient.color, 0);
        const hexWithOpacityResult = obj10.hexWithOpacity(tmp5.gradient.color, 0);
      } else {
        class R {
          constructor(arg0) {
            const result = sharedValue1.set(arg0);
          }
        }
      }
      if (0 === attachments.length) {
        class R {
          constructor(arg0) {
            const result = sharedValue1.set(arg0);
          }
        }
        return null;
      } else {
        let tmp18;
        class R {
          constructor(arg0) {
            const result = sharedValue1.set(arg0);
          }
        }
        if (undefined !== isRevamp && isRevamp) {
          class R {
            constructor(arg0) {
              const result = sharedValue1.set(arg0);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor(arg0) {
              const result = sharedValue1.set(arg0);
            }
          }
          const point = { x: 1, y: 0 };
          cResult[6] = tmp19;
          cResult[7] = point;
          tmp18 = point;
        } else {
          class R {
            constructor(arg0) {
              const result = sharedValue1.set(arg0);
            }
          }
          tmp18 = cResult[7];
        }
        if (cResult[8] === tmp5.gradient.color) {
          class R {
            constructor(arg0) {
              const result = sharedValue1.set(arg0);
            }
          }
          if (cResult[11] === animatedStyle) {
            class R {
              constructor(arg0) {
                const result = sharedValue1.set(arg0);
              }
            }
            if (cResult[14] === tmp20) {
              let tmp27;
              class R {
                constructor(arg0) {
                  const result = sharedValue1.set(arg0);
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class R {
                  constructor(arg0) {
                    const result = sharedValue1.set(arg0);
                  }
                }
                const point1 = { x: 1, y: 0 };
                cResult[17] = tmp28;
                cResult[18] = point1;
                tmp27 = point1;
              } else {
                class R {
                  constructor(arg0) {
                    const result = sharedValue1.set(arg0);
                  }
                }
                tmp27 = cResult[18];
              }
              if (cResult[19] === tmp5.gradient.color) {
                class R {
                  constructor(arg0) {
                    const result = sharedValue1.set(arg0);
                  }
                }
                if (cResult[22] === animatedStyle1) {
                  class R {
                    constructor(arg0) {
                      const result = sharedValue1.set(arg0);
                    }
                  }
                  if (cResult[25] === tmp29) {
                    class R {
                      constructor(arg0) {
                        const result = sharedValue1.set(arg0);
                      }
                    }
                    if (undefined !== isRevamp && isRevamp) {
                      class R {
                        constructor(arg0) {
                          const result = sharedValue1.set(arg0);
                        }
                      }
                    }
                    if (cResult[28] === tmp5.attachmentPreviewContentContainer) {
                      let tmp37;
                      class R {
                        constructor(arg0) {
                          const result = sharedValue1.set(arg0);
                        }
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                        class R {
                          constructor(arg0) {
                            const result = sharedValue1.set(arg0);
                          }
                        }
                        const stringResult = obj15.string(tmp(sharedValue1[12]).t.RhtzFe);
                        cResult[31] = stringResult;
                        tmp37 = stringResult;
                      } else {
                        class R {
                          constructor(arg0) {
                            const result = sharedValue1.set(arg0);
                          }
                        }
                      }
                      if (cResult[32] === attachments) {
                        class R {
                          constructor(arg0) {
                            const result = sharedValue1.set(arg0);
                          }
                        }
                        if (cResult[37] === R) {
                          class R {
                            constructor(arg0) {
                              const result = sharedValue1.set(arg0);
                            }
                          }
                        }
                        let obj4 = {
                          contentContainerStyle: tmp36,
                          horizontal: true,
                          onScroll: animatedScrollHandler,
                          onLayout: tmp12,
                          onContentSizeChange: R,
                          scrollEventThrottle: 16,
                          showsHorizontalScrollIndicator: false,
                          accessibilityRole: "list",
                          accessibilityLabel: tmp37,
                          children: tmp39,
                        };
                        cResult[37] = R;
                        cResult[38] = tmp12;
                        cResult[39] = animatedScrollHandler;
                        cResult[40] = tmp36;
                        cResult[41] = tmp39;
                        cResult[42] = closure_5(sharedValue(sharedValue1[3]).ScrollView, obj4);
                        const tmp45 = closure_5(sharedValue(sharedValue1[3]).ScrollView, obj4);
                      }
                      if (cResult[35] !== tmp5.attachmentPreview) {
                        class Q {
                          constructor(uri, id) {
                            let obj3;
                            let obj4;
                            let tmp;
                            const obj = {
                              style: attachmentPreview.attachmentPreview,
                              children: hasOwnProperty(tmp, size),
                            };
                            size = {
                              uri: uri.uri,
                              width: 60,
                              height: 60,
                              isImage: obj3.isImage(uri.uri, uri.mimeType),
                              isVideo: obj4.isVideo(uri.uri, uri.mimeType),
                              fileName: uri.name,
                              showPlayOnVideoPreview: true,
                            };
                            tmp = AttachmentPreviewDefault;
                            obj3 = utils_UploadUtils;
                            obj4 = utils_UploadUtils;
                            return hasOwnProperty(View, obj, id);
                          }
                        }
                        cResult[35] = tmp5.attachmentPreview;
                        cResult[36] = Q;
                      } else {
                        class Q {
                          constructor(uri, id) {
                            let obj3;
                            let obj4;
                            let tmp;
                            const obj = {
                              style: attachmentPreview.attachmentPreview,
                              children: hasOwnProperty(tmp, size),
                            };
                            size = {
                              uri: uri.uri,
                              width: 60,
                              height: 60,
                              isImage: obj3.isImage(uri.uri, uri.mimeType),
                              isVideo: obj4.isVideo(uri.uri, uri.mimeType),
                              fileName: uri.name,
                              showPlayOnVideoPreview: true,
                            };
                            tmp = AttachmentPreviewDefault;
                            obj3 = utils_UploadUtils;
                            obj4 = utils_UploadUtils;
                            return hasOwnProperty(View, obj, id);
                          }
                        }
                      }
                      const mapped = attachments.map(Q);
                      cResult[32] = attachments;
                      cResult[33] = tmp5.attachmentPreview;
                      cResult[34] = mapped;
                    }
                    const items = [tmp5.attachmentPreviewContentContainer, undefined];
                    cResult[28] = tmp5.attachmentPreviewContentContainer;
                    cResult[29] = undefined;
                    cResult[30] = items;
                  }
                  const obj5 = { start: tmp28, end: tmp27, colors: tmp29, style: tmp30, pointerEvents: "box-none" };
                  cResult[25] = tmp29;
                  cResult[26] = tmp30;
                  cResult[27] = closure_5(LinearGradient, obj5);
                  const tmp34 = closure_5(LinearGradient, obj5);
                }
                const items1 = [tmp5.rightGradient, animatedStyle1];
                cResult[22] = animatedStyle1;
                cResult[23] = tmp5.rightGradient;
                cResult[24] = items1;
              }
              const items2 = [tmp14, tmp5.gradient.color];
              cResult[19] = tmp5.gradient.color;
              cResult[20] = tmp14;
              cResult[21] = items2;
            }
            const obj6 = { start: tmp19, end: tmp18, colors: tmp20, style: tmp21, pointerEvents: "box-none" };
            cResult[14] = tmp20;
            cResult[15] = tmp21;
            cResult[16] = closure_5(LinearGradient, obj6);
            const tmp25 = closure_5(LinearGradient, obj6);
          }
          const items3 = [tmp5.leftGradient, animatedStyle];
          cResult[11] = animatedStyle;
          cResult[12] = tmp5.leftGradient;
          cResult[13] = items3;
        }
        const items4 = [tmp5.gradient.color, tmp14];
        cResult[8] = tmp5.gradient.color;
        cResult[9] = tmp14;
        cResult[10] = items4;
      }
    }
  : (arg0) => {
      let attachments;
      let closure_0;
      let intl;
      let isRevamp;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      ({ attachments, isRevamp } = arg0);
      if (isRevamp === undefined) {
        isRevamp = false;
      }
      let sharedValue1;
      let tmp = closure_9();
      _require = tmp;
      GRADIENT_EASING_CONFIG = require("ReanimatedRexport");
      const sharedValue = GRADIENT_EASING_CONFIG.useSharedValue(0);
      const obj2 = require("ReanimatedRexport");
      sharedValue1 = obj2.useSharedValue(0);
      let obj3 = require("ReanimatedRexport");
      const sharedValue2 = obj3.useSharedValue(0);
      let obj4 = require("ReanimatedRexport");
      const fn = function _() {
        let obj;
        const withTiming = timing.withTiming;
        let num = 1;
        timing;
        if (sharedValue.get() <= 0) {
          num = 0;
        }
        obj = { opacity: withTiming(num, obj) };
        return obj;
      };
      fn.__closure = { withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG };
      fn.__workletHash = 3355545292519;
      fn.__initData = __initData4;
      ({ withTiming: require("timing").withTiming, contentOffset: sharedValue, GRADIENT_EASING_CONFIG });
      const animatedStyle = obj4.useAnimatedStyle(fn);
      const fn2 = function f() {
        let obj;
        const withTiming = timing.withTiming;
        timing;
        const value = sharedValue.get();
        const sum = value + sharedValue2.get();
        let num = 1;
        if (sum >= sharedValue1.get()) {
          num = 0;
        }
        obj = { opacity: withTiming(num, obj) };
        return obj;
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
      ({
        withTiming: require("timing").withTiming,
        contentOffset: sharedValue,
        layoutWidth: sharedValue2,
        contentWidth: sharedValue1,
        GRADIENT_EASING_CONFIG,
      });
      const animatedStyle1 = obj6.useAnimatedStyle(fn2);
      const obj8 = require("ReanimatedRexport");
      class S {
        constructor(contentOffset) {
          const result = sharedValue.set(contentOffset.contentOffset.x);
          const result1 = sharedValue1.set(contentOffset.contentSize.width);
          const result2 = sharedValue2.set(contentOffset.layoutMeasurement.width);
        }
      }
      S.__closure = { contentOffset: sharedValue, contentWidth: sharedValue1, layoutWidth: sharedValue2 };
      S.__workletHash = 1501520307014;
      S.__initData = __initData6;
      const items = [sharedValue2];
      const items1 = [sharedValue1];
      const animatedScrollHandler = obj8.useAnimatedScrollHandler(S);
      const callback = sharedValue2.useCallback((nativeEvent) => {
        const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
      }, items);
      const items2 = [tmp.gradient.color];
      const callback1 = sharedValue2.useCallback((arg0) => {
        const result = sharedValue1.set(arg0);
      }, items1);
      const memo = sharedValue2.useMemo(() => {
        const obj = ColorUtils;
        return obj.hexWithOpacity(closure_0.gradient.color, 0);
      }, items2);
      let tmp19Result = null;
      if (0 !== attachments.length) {
        let containerRevamp;
        if (isRevamp) {
          containerRevamp = tmp.containerRevamp;
        }
        const obj10 = {
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
          colors: items3,
          style: items4,
          pointerEvents: "box-none",
        };
        items3 = [tmp.gradient.color, memo];
        items4 = [tmp.leftGradient, animatedStyle];
        const obj9 = { style: containerRevamp, children: items5 };
        items5 = [closure_5(LinearGradient, obj10), ,];
        const obj11 = {
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 },
          colors: items6,
          style: items7,
          pointerEvents: "box-none",
        };
        items6 = [memo, tmp.gradient.color];
        items7 = [tmp.rightGradient, animatedStyle1];
        items5[1] = closure_5(LinearGradient, obj11);
        const items8 = [tmp.attachmentPreviewContentContainer];
        let prop;
        const ScrollView = sharedValue(tmp3[3]).ScrollView;
        if (isRevamp) {
          prop = tmp.attachmentPreviewContentContainerRevamp;
        }
        items8[1] = prop;
        const obj12 = {
          contentContainerStyle: items8,
          horizontal: true,
          onScroll: animatedScrollHandler,
          onLayout: callback,
          onContentSizeChange: callback1,
          scrollEventThrottle: 16,
          showsHorizontalScrollIndicator: false,
          accessibilityRole: "list",
          accessibilityLabel: intl.string(require("intl").t.RhtzFe),
          children: attachments.map((uri, index) => {
            let obj3;
            let obj4;
            let tmp;
            const obj = { style: closure_0.attachmentPreview, children: hasOwnProperty(tmp, size) };
            size = {
              uri: uri.uri,
              width: 60,
              height: 60,
              isImage: obj3.isImage(uri.uri, uri.mimeType),
              isVideo: obj4.isVideo(uri.uri, uri.mimeType),
              fileName: uri.name,
              showPlayOnVideoPreview: true,
            };
            tmp = AttachmentPreviewDefault;
            obj3 = utils_UploadUtils;
            obj4 = utils_UploadUtils;
            return hasOwnProperty(View, obj, index);
          }),
        };
        intl = tmp2(tmp3[12]).intl;
        items5[2] = closure_5(ScrollView, obj12);
        tmp19Result = closure_6(View, obj9);
      }
      return tmp19Result;
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/share/native/ShareAttachments.tsx");

export default tmp4;
