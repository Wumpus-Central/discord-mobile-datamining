// === Module 11691: BannerBase ===

// Module 11691 (BannerBase)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import Text_Text from "Text/Text" /* 5087 */;
import spring from "spring" /* 5375 */;
import _mod11692 from "module_11692" /* 11692 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const SPRING_CONFIG = { mass: 1, stiffness: 100, damping: 15 };
const createStyles = fn(5091);
let obj2 = { banner: null, bannerGradientColor: null, bannerBackgroundGradient: null, imageContainer: null, trinketsLottie: null, bannerTextContainer: null, bannerText: null };
const rect = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, position: "absolute", borderRadius: nativeDefault.radii.lg, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: PX_12, flexDirection: "row", minHeight: fn(11680).APP_ICON_SIZE + 2 * PX_12 + 4, bottom: nativeDefault.space.PX_16, left: nativeDefault.space.PX_16 };
obj2.banner = rect;
obj2.bannerGradientColor = { backgroundColor: "#7eaaff" };
const rect1 = { position: "absolute", top: 0, left: 0, borderRadius: nativeDefault.radii.lg };
obj2.bannerBackgroundGradient = rect1;
obj2.imageContainer = { width: 72 };
obj2.trinketsLottie = { width: 175, height: 175, position: "absolute", top: -38, left: -27, zIndex: 1, pointerEvents: "none" };
obj2.bannerTextContainer = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
obj2.bannerText = { width: "100%" };
let closure_10 = createStyles.createStyles(obj2);
const __initData = { code: "function BannerBaseTsx1(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const __initData2 = { code: "function BannerBaseTsx2(){const{bannerMeasured,withDelay,withSpring,SPRING_CONFIG}=this.__closure;return{opacity:bannerMeasured.get()?withDelay(150,withSpring(1,SPRING_CONFIG)):0,transform:[{translateY:bannerMeasured.get()?withDelay(150,withSpring(0,SPRING_CONFIG)):30}]};}" };
const ReactCompilerGating = fn(558);
let obj3 = { alignItems: "center", justifyContent: "center", marginLeft: nativeDefault.space.PX_12, flexShrink: 1 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BannerBase.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BannerBase(arg0) {
  const cResult = c.c(49);
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
    const tmpResult5 = ColorUtils;
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
    const tmpResult6 = initialize;
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
                const _Symbol3 = Symbol;
                ({ imageContainer, trinketsLottie } = tmp4);
                if (cResult[29] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmpResult8 = _mod11692;
                  cResult[29] = tmpResult8;
                  let tmp33 = tmpResult8;
                } else {
                  tmp33 = cResult[29];
                }
                if (cResult[30] === tmp4.trinketsLottie) {
                  if (cResult[31] === tmp35) {
                    let tmp36 = cResult[32];
                  }
                  if (cResult[33] === image) {
                    if (cResult[34] === tmp4.imageContainer) {
                      if (cResult[35] === tmp36) {
                        let tmp39 = cResult[36];
                      }
                      if (cResult[37] === tmp4.bannerText) {
                        if (cResult[38] === text) {
                          let tmp43 = cResult[39];
                        }
                        if (cResult[40] === tmp4.bannerTextContainer) {
                          if (cResult[41] === tmp43) {
                            let tmp46 = cResult[42];
                          }
                          if (cResult[43] === tmp20) {
                            if (cResult[44] === tmp30) {
                              if (cResult[45] === tmp39) {
                                if (cResult[46] === tmp46) {
                                  if (cResult[47] === tmp25) {
                                    let tmp50 = cResult[48];
                                  }
                                  return tmp50;
                                }
                              }
                            }
                          }
                          let obj4 = { style: tmp25, onLayout: tmp20, children: null };
                          const items1 = [tmp30, tmp39, tmp46];
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
                          const tmp52 = closure_8(tmp8(4811).View, obj4);
                          cResult[43] = tmp20;
                          cResult[44] = tmp30;
                          cResult[45] = tmp39;
                          cResult[46] = tmp46;
                          cResult[47] = tmp25;
                          cResult[48] = tmp52;
                          tmp50 = tmp52;
                        }
                        let obj5 = { style: tmp4.bannerTextContainer, children: tmp43 };
                        const tmp49 = closure_7(View, obj5);
                        cResult[40] = tmp4.bannerTextContainer;
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
                        cResult[41] = tmp43;
                        cResult[42] = tmp49;
                        tmp46 = tmp49;
                      }
                      let obj6 = { variant: "text-md/semibold", color: "text-overlay-light", style: tmp4.bannerText, children: text };
                      const tmp45 = closure_7(Text_Text.Text, obj6);
                      cResult[37] = tmp4.bannerText;
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
                      cResult[39] = tmp45;
                      tmp43 = tmp45;
                    }
                  }
                  const obj7 = { style: imageContainer, children: null };
                  const items2 = [tmp36, image];
                  obj7.children = items2;
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
                  cResult[33] = image;
                  cResult[34] = tmp4.imageContainer;
                  cResult[35] = tmp36;
                  cResult[36] = tmp42;
                  tmp39 = tmp42;
                }
                const obj8 = { style: null, source: null, autoPlay: null };
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
                obj8.source = tmp33;
                obj8.autoPlay = !stateFromStores;
                const tmp38 = closure_7(tmp8(6112), obj8);
                cResult[30] = tmp4.trinketsLottie;
                cResult[31] = !stateFromStores;
                cResult[32] = tmp38;
                tmp36 = tmp38;
              }
              const obj9 = { start: tmp26, end: tmp27, colors: tmp14, style: tmp29 };
              const tmp32 = closure_7(tmp8(5388), obj9);
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
            const items3 = [tmp4.bannerBackgroundGradient, tmp28];
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
            tmp29 = items3;
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
      const items4 = [tmp4.banner, tmp24, animatedStyle];
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
      cResult[17] = items4;
      tmp25 = items4;
    }
    const obj10 = { opacity: num9, width: diff };
    cResult[11] = diff;
    cResult[12] = num9;
    cResult[13] = obj10;
    tmp24 = obj10;
    const tmpResult7 = ReanimatedRexport;
  }
  const items5 = [tmp10, tmp12];
  cResult[4] = tmp10;
  cResult[5] = tmp12;
  cResult[6] = items5;
  tmp14 = items5;
}) : (function BannerBase(arg0) {
  _require = undefined;
  ({ image, text } = arg0);
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
  const items4 = [closure_7(sharedValue(5388), obj8), , ];
  const obj9 = { style: tmp.imageContainer, children: null };
  const obj10 = { style: tmp.trinketsLottie, source: null, autoPlay: null };
  let obj6 = { bannerMeasured: sharedValue, withDelay: require("ReanimatedRexport").withDelay, withSpring: require("spring").withSpring, SPRING_CONFIG };
  obj10.source = require("module_11692");
  obj10.autoPlay = !stateFromStores;
  const items5 = [closure_7(sharedValue(6112), obj10), image];
  obj9.children = items5;
  items4[1] = closure_8(View, obj9);
  const obj11 = { style: tmp.bannerTextContainer, children: closure_7(require("Text/Text").Text, { variant: "text-md/semibold", color: "text-overlay-light", style: tmp.bannerText, children: text }) };
  items4[2] = closure_7(View, obj11);
  obj7.children = items4;
  return closure_8(sharedValue(4811).View, obj7);
});