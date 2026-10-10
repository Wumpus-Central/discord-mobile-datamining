// === Module 11737: BannerBase ===

// Module 11737 (BannerBase)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;
import ColorUtils from "ColorUtils" /* 4967 */;
import Text_Text from "Text/Text" /* 5088 */;
import spring from "spring" /* 5378 */;
import _mod11738 from "module_11738" /* 11738 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
const createStyles = fn(5092);
let obj2 = { banner: null, bannerGradientColor: null, bannerBackgroundGradient: null, imageContainer: null, trinketsLottie: null, bannerTextContainer: null, bannerTextContainerWithImage: null, bannerTextContainerWithoutImage: null, bannerText: null, bannerTextCentered: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: fn(11726).APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
obj2.banner = rect;
obj2.bannerGradientColor = { backgroundColor: "#7eaaff" };
const rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2.bannerBackgroundGradient = rect1;
obj2.imageContainer = { width: 72 };
obj2.trinketsLottie = { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" };
obj2.bannerTextContainer = { alignItems: "center", justifyContent: "center", flexShrink: 1 };
obj2.bannerTextContainerWithImage = { marginLeft: nativeDefault.space.PX_12 };
obj2.bannerTextContainerWithoutImage = { flex: 1 };
obj2.bannerText = { width: "100%" };
obj2.bannerTextCentered = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj2);
const __initData = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const __initData2 = { code: "function BannerBaseTsx2(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const ReactCompilerGating = fn(558);
let obj3 = { marginLeft: nativeDefault.space.PX_12 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BannerBase(arg0) {
  const cResult = c.c(52);
  ({ image, text } = arg0);
  const tmp4 = closure_10();
  [tmp6, require] = noop.useState(0);
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  const sharedValue = ReanimatedRexport.useSharedValue(false);
  const diff = sharedValue(1497)().width - 2 * sharedValue(587).space.PX_16;
  const backgroundColor = tmp4.bannerGradientColor.backgroundColor;
  if (cResult[0] !== backgroundColor) {
    const hexOpacityToRgbaResult = ColorUtils.hexOpacityToRgba(backgroundColor, 0.2);
    cResult[0] = backgroundColor;
    cResult[1] = hexOpacityToRgbaResult;
    let tmp10 = hexOpacityToRgbaResult;
    const tmpResult = ColorUtils;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== backgroundColor) {
    const hexOpacityToRgbaResult1 = ColorUtils.hexOpacityToRgba(backgroundColor, 0);
    cResult[2] = backgroundColor;
    cResult[3] = hexOpacityToRgbaResult1;
    let tmp12 = hexOpacityToRgbaResult1;
    const tmpResult4 = ColorUtils;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === tmp10) {
    if (cResult[5] === tmp12) {
      let tmp14 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [AccessibilityStore];
      const fn = function k() {
        return useReducedMotion.useReducedMotion;
      };
      cResult[7] = items;
      cResult[8] = fn;
      let tmp17 = fn;
      let tmp16 = items;
    } else {
      tmp16 = cResult[7];
      tmp17 = cResult[8];
    }
    const stateFromStores = initialize.useStateFromStores(tmp16, tmp17);
    if (cResult[9] !== sharedValue) {
      function handleLayout(nativeEvent) {
        const layout = nativeEvent.nativeEvent.layout;
        let height;
        if (layout != null) {
          height = layout.height;
        }
        if (height > 0) {
          _require(height);
          const result = sharedValue.set(true);
        }
      }
      cResult[9] = sharedValue;
      cResult[10] = handleLayout;
      let tmp20 = handleLayout;
    } else {
      tmp20 = cResult[10];
    }
    const tmpResult5 = initialize;
    class M {
      constructor() {
        obj = closure_1;
        num = 0;
        if (closure_1.get()) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj2 = closure_0(closure_2[10]);
          tmp3 = closure_0;
          tmp4 = closure_2;
          obj3 = closure_0(closure_2[14]);
          tmp5 = closure_9;
          num2 = 1;
          num3 = 150;
          num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
        }
        obj1 = { opacity: num, transform: null };
        num4 = 30;
        if (obj.get()) {
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj5 = closure_0(closure_2[10]);
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj6 = closure_0(closure_2[14]);
          tmp10 = closure_9;
          num5 = 150;
          num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
        }
        items = [];
        items[0] = { translateY: num4 };
        obj1.transform = items;
        return obj1;
      }
    }
    let obj3 = { bannerMeasured: sharedValue, withDelay: ReanimatedRexport.withDelay, withSpring: spring.withSpring, SPRING_CONFIG };
    M.__closure = obj3;
    M.__workletHash = 5314641176204;
    M.__initData = __initData;
    const animatedStyle = ReanimatedRexport.useAnimatedStyle(M);
    let num9 = 0;
    if (tmp6 > 0) {
      num9 = 1;
    }
    if (cResult[11] === diff) {
      if (cResult[12] === num9) {
        let tmp24 = cResult[13];
      }
      if (cResult[14] === animatedStyle) {
        if (cResult[15] === tmp4.banner) {
          if (cResult[16] === tmp24) {
            let tmp25 = cResult[17];
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const point = { x: 0, y: 0 };
            const point1 = { x: 0, y: 1 };
            cResult[18] = point;
            cResult[19] = point1;
            let tmp27 = point1;
            let tmp26 = point;
          } else {
            tmp26 = cResult[18];
            tmp27 = cResult[19];
          }
          if (cResult[20] === tmp6) {
            if (cResult[21] === diff) {
              let tmp28 = cResult[22];
            }
            if (cResult[23] === tmp4.bannerBackgroundGradient) {
              if (cResult[24] === tmp28) {
                let tmp29 = cResult[25];
              }
              if (cResult[26] === tmp14) {
                if (cResult[27] === tmp29) {
                  let tmp30 = cResult[28];
                }
                if (cResult[29] === image) {
                  if (cResult[30] === tmp4.imageContainer) {
                    if (cResult[31] === tmp4.trinketsLottie) {
                      if (cResult[32] === stateFromStores) {
                        let tmp33 = cResult[33];
                      }
                      const tmp42 = null != image ? tmp4.bannerTextContainerWithImage : tmp4.bannerTextContainerWithoutImage;
                      if (cResult[34] === tmp4.bannerTextContainer) {
                        if (cResult[35] === tmp42) {
                          let tmp43 = cResult[36];
                        }
                        if (cResult[37] === tmp4.bannerText) {
                          if (cResult[38] === tmp44) {
                            let tmp45 = cResult[39];
                          }
                          if (cResult[40] === tmp45) {
                            if (cResult[41] === text) {
                              let tmp46 = cResult[42];
                            }
                            if (cResult[43] === tmp43) {
                              if (cResult[44] === tmp46) {
                                let tmp49 = cResult[45];
                              }
                              if (cResult[46] === tmp20) {
                                if (cResult[47] === tmp30) {
                                  if (cResult[48] === tmp33) {
                                    if (cResult[49] === tmp49) {
                                      if (cResult[50] === tmp25) {
                                        let tmp53 = cResult[51];
                                      }
                                      return tmp53;
                                    }
                                  }
                                }
                              }
                              let obj4 = { style: tmp25, onLayout: tmp20, children: null };
                              const items1 = [tmp30, tmp33, tmp49];
                              class M {
                                constructor() {
                                  obj = closure_1;
                                  num = 0;
                                  if (closure_1.get()) {
                                    tmp = closure_0;
                                    tmp2 = closure_2;
                                    obj2 = closure_0(closure_2[10]);
                                    tmp3 = closure_0;
                                    tmp4 = closure_2;
                                    obj3 = closure_0(closure_2[14]);
                                    tmp5 = closure_9;
                                    num2 = 1;
                                    num3 = 150;
                                    num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                                  }
                                  obj1 = { opacity: num, transform: null };
                                  num4 = 30;
                                  if (obj.get()) {
                                    tmp6 = closure_0;
                                    tmp7 = closure_2;
                                    obj5 = closure_0(closure_2[10]);
                                    tmp8 = closure_0;
                                    tmp9 = closure_2;
                                    obj6 = closure_0(closure_2[14]);
                                    tmp10 = closure_9;
                                    num5 = 150;
                                    num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                                  }
                                  items = [];
                                  items[0] = { translateY: num4 };
                                  obj1.transform = items;
                                  return obj1;
                                }
                              }
                              const tmp55 = closure_8(tmp8(4850).View, obj4);
                              cResult[46] = tmp20;
                              cResult[47] = tmp30;
                              cResult[48] = tmp33;
                              cResult[49] = tmp49;
                              cResult[50] = tmp25;
                              cResult[51] = tmp55;
                              tmp53 = tmp55;
                            }
                            let obj5 = { style: tmp43, children: tmp46 };
                            const tmp52 = closure_7(View, obj5);
                            cResult[43] = tmp43;
                            class M {
                              constructor() {
                                obj = closure_1;
                                num = 0;
                                if (closure_1.get()) {
                                  tmp = closure_0;
                                  tmp2 = closure_2;
                                  obj2 = closure_0(closure_2[10]);
                                  tmp3 = closure_0;
                                  tmp4 = closure_2;
                                  obj3 = closure_0(closure_2[14]);
                                  tmp5 = closure_9;
                                  num2 = 1;
                                  num3 = 150;
                                  num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                                }
                                obj1 = { opacity: num, transform: null };
                                num4 = 30;
                                if (obj.get()) {
                                  tmp6 = closure_0;
                                  tmp7 = closure_2;
                                  obj5 = closure_0(closure_2[10]);
                                  tmp8 = closure_0;
                                  tmp9 = closure_2;
                                  obj6 = closure_0(closure_2[14]);
                                  tmp10 = closure_9;
                                  num5 = 150;
                                  num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                                }
                                items = [];
                                items[0] = { translateY: num4 };
                                obj1.transform = items;
                                return obj1;
                              }
                            }
                            cResult[44] = tmp46;
                            cResult[45] = tmp52;
                            tmp49 = tmp52;
                          }
                          let obj6 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp45, children: text };
                          const tmp48 = closure_7(Text_Text.Text, obj6);
                          cResult[40] = tmp45;
                          class M {
                            constructor() {
                              obj = closure_1;
                              num = 0;
                              if (closure_1.get()) {
                                tmp = closure_0;
                                tmp2 = closure_2;
                                obj2 = closure_0(closure_2[10]);
                                tmp3 = closure_0;
                                tmp4 = closure_2;
                                obj3 = closure_0(closure_2[14]);
                                tmp5 = closure_9;
                                num2 = 1;
                                num3 = 150;
                                num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                              }
                              obj1 = { opacity: num, transform: null };
                              num4 = 30;
                              if (obj.get()) {
                                tmp6 = closure_0;
                                tmp7 = closure_2;
                                obj5 = closure_0(closure_2[10]);
                                tmp8 = closure_0;
                                tmp9 = closure_2;
                                obj6 = closure_0(closure_2[14]);
                                tmp10 = closure_9;
                                num5 = 150;
                                num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                              }
                              items = [];
                              items[0] = { translateY: num4 };
                              obj1.transform = items;
                              return obj1;
                            }
                          }
                          cResult[42] = tmp48;
                          tmp46 = tmp48;
                        }
                        const items2 = [tmp4.bannerText, null == image && tmp4.bannerTextCentered];
                        cResult[37] = tmp4.bannerText;
                        cResult[38] = null == image && tmp4.bannerTextCentered;
                        class M {
                          constructor() {
                            obj = closure_1;
                            num = 0;
                            if (closure_1.get()) {
                              tmp = closure_0;
                              tmp2 = closure_2;
                              obj2 = closure_0(closure_2[10]);
                              tmp3 = closure_0;
                              tmp4 = closure_2;
                              obj3 = closure_0(closure_2[14]);
                              tmp5 = closure_9;
                              num2 = 1;
                              num3 = 150;
                              num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                            }
                            obj1 = { opacity: num, transform: null };
                            num4 = 30;
                            if (obj.get()) {
                              tmp6 = closure_0;
                              tmp7 = closure_2;
                              obj5 = closure_0(closure_2[10]);
                              tmp8 = closure_0;
                              tmp9 = closure_2;
                              obj6 = closure_0(closure_2[14]);
                              tmp10 = closure_9;
                              num5 = 150;
                              num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                            }
                            items = [];
                            items[0] = { translateY: num4 };
                            obj1.transform = items;
                            return obj1;
                          }
                        }
                        cResult[39] = items2;
                        tmp45 = items2;
                      }
                      const items3 = [tmp4.bannerTextContainer, tmp42];
                      cResult[34] = tmp4.bannerTextContainer;
                      class M {
                        constructor() {
                          obj = closure_1;
                          num = 0;
                          if (closure_1.get()) {
                            tmp = closure_0;
                            tmp2 = closure_2;
                            obj2 = closure_0(closure_2[10]);
                            tmp3 = closure_0;
                            tmp4 = closure_2;
                            obj3 = closure_0(closure_2[14]);
                            tmp5 = closure_9;
                            num2 = 1;
                            num3 = 150;
                            num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                          }
                          obj1 = { opacity: num, transform: null };
                          num4 = 30;
                          if (obj.get()) {
                            tmp6 = closure_0;
                            tmp7 = closure_2;
                            obj5 = closure_0(closure_2[10]);
                            tmp8 = closure_0;
                            tmp9 = closure_2;
                            obj6 = closure_0(closure_2[14]);
                            tmp10 = closure_9;
                            num5 = 150;
                            num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                          }
                          items = [];
                          items[0] = { translateY: num4 };
                          obj1.transform = items;
                          return obj1;
                        }
                      }
                      cResult[36] = items3;
                      tmp43 = items3;
                    }
                  }
                }
                let tmp35 = null != image;
                if (tmp35) {
                  const obj7 = { style: tmp4.imageContainer, children: null };
                  const obj8 = { style: tmp4.trinketsLottie, source: _mod11738, autoPlay: !stateFromStores };
                  class M {
                    constructor() {
                      obj = closure_1;
                      num = 0;
                      if (closure_1.get()) {
                        tmp = closure_0;
                        tmp2 = closure_2;
                        obj2 = closure_0(closure_2[10]);
                        tmp3 = closure_0;
                        tmp4 = closure_2;
                        obj3 = closure_0(closure_2[14]);
                        tmp5 = closure_9;
                        num2 = 1;
                        num3 = 150;
                        num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                      }
                      obj1 = { opacity: num, transform: null };
                      num4 = 30;
                      if (obj.get()) {
                        tmp6 = closure_0;
                        tmp7 = closure_2;
                        obj5 = closure_0(closure_2[10]);
                        tmp8 = closure_0;
                        tmp9 = closure_2;
                        obj6 = closure_0(closure_2[14]);
                        tmp10 = closure_9;
                        num5 = 150;
                        num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                      }
                      items = [];
                      items[0] = { translateY: num4 };
                      obj1.transform = items;
                      return obj1;
                    }
                  }
                  tmp40[0] = closure_7(tmp8(6105), obj8);
                  tmp40[1] = image;
                  obj7.children = tmp40;
                  tmp35 = closure_8(View, obj7);
                  const tmp8Result = tmp8(6105);
                }
                cResult[29] = image;
                cResult[30] = tmp4.imageContainer;
                class M {
                  constructor() {
                    obj = closure_1;
                    num = 0;
                    if (closure_1.get()) {
                      tmp = closure_0;
                      tmp2 = closure_2;
                      obj2 = closure_0(closure_2[10]);
                      tmp3 = closure_0;
                      tmp4 = closure_2;
                      obj3 = closure_0(closure_2[14]);
                      tmp5 = closure_9;
                      num2 = 1;
                      num3 = 150;
                      num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                    }
                    obj1 = { opacity: num, transform: null };
                    num4 = 30;
                    if (obj.get()) {
                      tmp6 = closure_0;
                      tmp7 = closure_2;
                      obj5 = closure_0(closure_2[10]);
                      tmp8 = closure_0;
                      tmp9 = closure_2;
                      obj6 = closure_0(closure_2[14]);
                      tmp10 = closure_9;
                      num5 = 150;
                      num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                    }
                    items = [];
                    items[0] = { translateY: num4 };
                    obj1.transform = items;
                    return obj1;
                  }
                }
                cResult[32] = stateFromStores;
                cResult[33] = tmp35;
                tmp33 = tmp35;
              }
              const obj9 = { start: tmp26, end: tmp27, colors: tmp14, style: tmp29 };
              const tmp32 = closure_7(tmp8(5391), obj9);
              class M {
                constructor() {
                  obj = closure_1;
                  num = 0;
                  if (closure_1.get()) {
                    tmp = closure_0;
                    tmp2 = closure_2;
                    obj2 = closure_0(closure_2[10]);
                    tmp3 = closure_0;
                    tmp4 = closure_2;
                    obj3 = closure_0(closure_2[14]);
                    tmp5 = closure_9;
                    num2 = 1;
                    num3 = 150;
                    num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                  }
                  obj1 = { opacity: num, transform: null };
                  num4 = 30;
                  if (obj.get()) {
                    tmp6 = closure_0;
                    tmp7 = closure_2;
                    obj5 = closure_0(closure_2[10]);
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj6 = closure_0(closure_2[14]);
                    tmp10 = closure_9;
                    num5 = 150;
                    num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                  }
                  items = [];
                  items[0] = { translateY: num4 };
                  obj1.transform = items;
                  return obj1;
                }
              }
              cResult[27] = tmp29;
              cResult[28] = tmp32;
              tmp30 = tmp32;
            }
            const items4 = [tmp4.bannerBackgroundGradient, tmp28];
            cResult[23] = tmp4.bannerBackgroundGradient;
            cResult[24] = tmp28;
            class M {
              constructor() {
                obj = closure_1;
                num = 0;
                if (closure_1.get()) {
                  tmp = closure_0;
                  tmp2 = closure_2;
                  obj2 = closure_0(closure_2[10]);
                  tmp3 = closure_0;
                  tmp4 = closure_2;
                  obj3 = closure_0(closure_2[14]);
                  tmp5 = closure_9;
                  num2 = 1;
                  num3 = 150;
                  num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
                }
                obj1 = { opacity: num, transform: null };
                num4 = 30;
                if (obj.get()) {
                  tmp6 = closure_0;
                  tmp7 = closure_2;
                  obj5 = closure_0(closure_2[10]);
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  obj6 = closure_0(closure_2[14]);
                  tmp10 = closure_9;
                  num5 = 150;
                  num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
                }
                items = [];
                items[0] = { translateY: num4 };
                obj1.transform = items;
                return obj1;
              }
            }
            tmp29 = items4;
          }
          const size = { height: tmp6, width: diff };
          cResult[20] = tmp6;
          class M {
            constructor() {
              obj = closure_1;
              num = 0;
              if (closure_1.get()) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj2 = closure_0(closure_2[10]);
                tmp3 = closure_0;
                tmp4 = closure_2;
                obj3 = closure_0(closure_2[14]);
                tmp5 = closure_9;
                num2 = 1;
                num3 = 150;
                num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
              }
              obj1 = { opacity: num, transform: null };
              num4 = 30;
              if (obj.get()) {
                tmp6 = closure_0;
                tmp7 = closure_2;
                obj5 = closure_0(closure_2[10]);
                tmp8 = closure_0;
                tmp9 = closure_2;
                obj6 = closure_0(closure_2[14]);
                tmp10 = closure_9;
                num5 = 150;
                num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
              }
              items = [];
              items[0] = { translateY: num4 };
              obj1.transform = items;
              return obj1;
            }
          }
          cResult[21] = diff;
          cResult[22] = size;
          tmp28 = size;
        }
      }
      const items5 = [tmp4.banner, tmp24, animatedStyle];
      cResult[14] = animatedStyle;
      cResult[15] = tmp4.banner;
      class M {
        constructor() {
          obj = closure_1;
          num = 0;
          if (closure_1.get()) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj2 = closure_0(closure_2[10]);
            tmp3 = closure_0;
            tmp4 = closure_2;
            obj3 = closure_0(closure_2[14]);
            tmp5 = closure_9;
            num2 = 1;
            num3 = 150;
            num = obj2.withDelay(150, obj3.withSpring(1, closure_9));
          }
          obj1 = { opacity: num, transform: null };
          num4 = 30;
          if (obj.get()) {
            tmp6 = closure_0;
            tmp7 = closure_2;
            obj5 = closure_0(closure_2[10]);
            tmp8 = closure_0;
            tmp9 = closure_2;
            obj6 = closure_0(closure_2[14]);
            tmp10 = closure_9;
            num5 = 150;
            num4 = obj5.withDelay(150, obj6.withSpring(0, closure_9));
          }
          items = [];
          items[0] = { translateY: num4 };
          obj1.transform = items;
          return obj1;
        }
      }
      cResult[16] = tmp24;
      cResult[17] = items5;
      tmp25 = items5;
    }
    const obj10 = { opacity: num9, width: diff };
    cResult[11] = diff;
    cResult[12] = num9;
    cResult[13] = obj10;
    tmp24 = obj10;
    const tmpResult6 = ReanimatedRexport;
  }
  const items6 = [tmp10, tmp12];
  cResult[4] = tmp10;
  cResult[5] = tmp12;
  cResult[6] = items6;
  tmp14 = items6;
}) : (function BannerBase(children) {
  const image = children.image;
  _require = undefined;
  const tmp = closure_10();
  let num = 0;
  [tmp3, c0] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const sharedValue = require("ReanimatedRexport").useSharedValue(false);
  const diff = sharedValue(1497)().width - 2 * sharedValue(587).space.PX_16;
  const backgroundColor = tmp.bannerGradientColor.backgroundColor;
  const obj = require("ReanimatedRexport");
  let items = [require("ColorUtils").hexOpacityToRgba(backgroundColor, 0.2), ];
  let obj2 = require("ColorUtils");
  items[1] = require("ColorUtils").hexOpacityToRgba(backgroundColor, 0);
  let obj3 = require("ColorUtils");
  const items1 = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => useReducedMotion.useReducedMotion);
  let obj4 = require("initialize");
  const fn = function p() {
    let num = 0;
    if (sharedValue.get()) {
      const obj2 = ReanimatedRexport;
      num = obj2.withDelay(150, spring.withSpring(1, closure_9));
    }
    const obj4 = { opacity: num, transform: null };
    let num4 = 30;
    if (sharedValue.get()) {
      const obj5 = ReanimatedRexport;
      num4 = obj5.withDelay(150, spring.withSpring(0, closure_9));
    }
    const items = [{ translateY: num4 }];
    obj4.transform = items;
    return obj4;
  };
  let obj5 = require("ReanimatedRexport");
  fn.__closure = { bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG };
  fn.__workletHash = 2233562582031;
  fn.__initData = __initData2;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const items2 = [tmp.banner, , ];
  if (tmp3 > 0) {
    num = 1;
  }
  const obj7 = {
    style: items2,
    onLayout: function handleLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      let height;
      if (layout != null) {
        height = layout.height;
      }
      if (height > 0) {
        _undefined(height);
        const result = sharedValue.set(true);
      }
    },
    children: null
  };
  items2[1] = { opacity: num, width: diff };
  items2[2] = animatedStyle;
  const obj8 = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items, style: null };
  const items3 = [tmp.bannerBackgroundGradient, { height: tmp3, width: diff }];
  obj8.style = items3;
  const items4 = [closure_7(sharedValue(5391), obj8), , ];
  let tmp11Result = null != image;
  if (tmp11Result) {
    const obj9 = { style: tmp.imageContainer, children: null };
    const obj10 = { style: tmp.trinketsLottie, source: tmp4(11738), autoPlay: !stateFromStores };
    const items5 = [closure_7(tmp7(6105), obj10), image];
    obj9.children = items5;
    tmp11Result = closure_8(View, obj9);
    const tmp7Result = tmp7(6105);
  }
  items4[1] = tmp11Result;
  const items6 = [tmp.bannerTextContainer, ];
  const obj11 = { style: items6, children: null };
  items6[1] = null != image ? tmp.bannerTextContainerWithImage : tmp.bannerTextContainerWithoutImage;
  const items7 = [tmp.bannerText, ];
  let bannerTextCentered = null == image;
  if (bannerTextCentered) {
    bannerTextCentered = tmp.bannerTextCentered;
  }
  items7[1] = bannerTextCentered;
  obj11.children = closure_7(require("Text/Text").Text, { variant: "text-md/semibold", color: "text-overlay-light", style: items7, children: children.text });
  items4[2] = closure_7(View, obj11);
  obj7.children = items4;
  return closure_8(sharedValue(4850).View, obj7);
});