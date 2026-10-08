// === Module 13019: CutoutableAvatarImage ===

// Module 13019 (CutoutableAvatarImage)
import LoggerDefault from "Logger" /* 3 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 568 */;
import c from "c" /* 576 */;
import v1 from "v1" /* 1278 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import spring from "spring" /* 5374 */;
import FastImageDefault from "FastImage" /* 6164 */;
import inlineStylesDefault from "inlineStyles" /* 7550 */;
import ClipView from "ClipView" /* 8986 */;
import getChannelIcon from "getChannelIcon" /* 13021 */;
import getReactNativeSVGImageSourceDefault from "getReactNativeSVGImageSource" /* 13022 */;
import noop from "module_19" /* 19 */;

const ClipViewDefault = ClipView;

require = fn;
function CutoutAvatarImage(arg0) {
  if (closure_19) {
    let Circle2 = require;
    const cResult = c.c(38);
    ({ cutout: cutout2, size: size2, source: source2, style: style2 } = arg0);
    const result = size2 / 2;
    let radius2 = cutout2.radius;
    if (radius2 == null) {
      radius2 = result;
    }
    let num5 = cutout2.inset;
    if (num5 == null) {
      num5 = 0;
    }
    let CIRCULAR2 = cutout2.imageType;
    if (CIRCULAR2 == null) {
      CIRCULAR2 = obj6.CIRCULAR;
    }
    let diff = size2 - num5;
    let diff1 = size2;
    if (CIRCULAR2 === obj6.CIRCULAR) {
      diff1 = result;
    }
    const direction2 = cutout2.direction;
    if (obj5.BOTTOM_RIGHT === direction2) {
      diff = size2 - radius2 - num5;
      diff1 = size2 - radius2 - num5;
    } else if (tmp37.BOTTOM_LEFT === direction2) {
      diff = radius2 + num5;
      diff1 = size2 - radius2 - num5;
    }
    let width = globalThis;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const v4Result = Circle2(1278).v4();
      cResult[0] = v4Result;
      let first = v4Result;
      const Circle2Result = Circle2(1278);
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== style2) {
      const flattenResult = React4.flatten(style2);
      cResult[1] = style2;
      cResult[2] = flattenResult;
      let tmp40 = flattenResult;
    } else {
      tmp40 = cResult[2];
    }
    const tintColor2 = tmp40.tintColor;
    if (null != source2) {
      if (null != tintColor2) {
        if (cResult[3] !== tintColor2) {
          const obj3 = { tintColor: tintColor2 };
          cResult[3] = tintColor2;
          cResult[4] = obj3;
          let tmp49 = obj3;
        } else {
          tmp49 = cResult[4];
        }
        if (cResult[5] !== source2) {
          const tmp52 = getReactNativeSVGImageSourceDefault(source2);
          cResult[5] = source2;
          cResult[6] = tmp52;
          let tmp50 = tmp52;
        } else {
          tmp50 = cResult[6];
        }
        if (cResult[7] === tmp49) {
        }
        const size1 = { x: "0", y: "0", height: "100%", width: "100%", mask: null, children: null };
        const _HermesInternal6 = HermesInternal;
        size1.mask = "url(#" + first + ")";
        const obj4 = { style: tmp49, source: tmp50, usesSmallCache: true };
        size1.children = React5(FastImageDefault, obj4);
        const tmp56 = React5(Circle2(7550).ForeignObject, size1);
        cResult[7] = tmp49;
        cResult[8] = tmp50;
        cResult[9] = tmp56;
      }
    }
    if (cResult[10] !== source2) {
      const tmp45 = getReactNativeSVGImageSourceDefault(source2);
      cResult[10] = source2;
      cResult[11] = tmp45;
      let tmp43 = tmp45;
    } else {
      tmp43 = cResult[11];
    }
    if (cResult[12] !== tmp43) {
      const size3 = { x: "0", y: "0", height: "100%", width: "100%", href: tmp43, mask: null };
      const _HermesInternal5 = HermesInternal;
      size3.mask = "url(#" + first + ")";
      const tmp48 = React5(Circle2(7550).Image, size3);
      cResult[12] = tmp43;
      cResult[13] = tmp48;
      let tmp46 = tmp48;
    } else {
      tmp46 = cResult[13];
    }
    if (cResult[14] === CIRCULAR2) {
      if (cResult[15] === result) {
        if (cResult[16] === size2) {
          if (cResult[18] === radius2) {
            if (cResult[19] === diff) {
              if (cResult[20] === diff1) {
                let tmp63 = cResult[21];
              }
              if (cResult[22] === size2) {
                if (cResult[23] === tmp58) {
                  if (cResult[24] === tmp63) {
                    let tmp66 = cResult[25];
                  }
                  if (cResult[26] === cutout2.border) {
                    if (cResult[27] === CIRCULAR2) {
                      if (cResult[28] === result) {
                        if (cResult[29] === size2) {
                          let tmp70 = cResult[30];
                        }
                        if (cResult[31] === tmp46) {
                          if (cResult[32] === tmp66) {
                            if (cResult[33] === tmp70) {
                              let tmp76 = cResult[34];
                            }
                            if (cResult[35] === style2) {
                            }
                            obj5 = { style: style2, children: tmp76 };
                            const tmp83 = React5(hasOwnProperty, obj5);
                            cResult[35] = style2;
                            cResult[36] = tmp76;
                            cResult[37] = tmp83;
                          }
                        }
                        const size4 = { height: "100%", width: "100%", children: null };
                        const items = [tmp66, tmp46, tmp70];
                        size4.children = items;
                        const tmp79 = closure_1_8(inlineStylesDefault, size4);
                        cResult[31] = tmp46;
                        cResult[32] = tmp66;
                        cResult[33] = tmp70;
                        cResult[34] = tmp79;
                        tmp76 = tmp79;
                      }
                    }
                  }
                  if (null == cutout2.border) {
                    cResult[26] = cutout2.border;
                    cResult[27] = CIRCULAR2;
                    cResult[28] = result;
                    cResult[29] = size2;
                    cResult[30] = null;
                    tmp70 = null;
                  } else if (CIRCULAR2 === tmp35.CIRCULAR) {
                    Circle2 = Circle2(7550).Circle;
                    obj6 = { cx: result, cy: result, r: result, fill: "none", mask: "url(#" + first + ")", stroke: cutout2.border.color, strokeWidth: null };
                    width = cutout2.border.width;
                    obj6.strokeWidth = width;
                    let tmp73 = React5(Circle2, obj6);
                  } else {
                    const size5 = { x: 0, y: 0, height: size2, width: size2, fill: "none", mask: null, stroke: null, strokeWidth: null };
                    const _HermesInternal7 = HermesInternal;
                    size5.mask = "url(#" + first + ")";
                    size5.stroke = cutout2.border.color;
                    size5.strokeWidth = cutout2.border.width;
                    tmp73 = React5(Circle2(7550).Rect, size5);
                  }
                }
              }
              const obj7 = { children: null };
              const size6 = { width: size2, height: size2, id: first, children: null };
              const items1 = [tmp58, tmp63];
              size6.children = items1;
              obj7.children = closure_1_8(Circle2(7550).Mask, size6);
              const tmp69 = React5(Circle2(7550).Defs, obj7);
              cResult[22] = size2;
              cResult[23] = tmp58;
              cResult[24] = tmp63;
              cResult[25] = tmp69;
              tmp66 = tmp69;
            }
          }
          const obj8 = { cx: diff, cy: diff1, r: radius2, fill: "black" };
          const tmp65 = React5(Circle2(7550).Circle, obj8);
          cResult[18] = radius2;
          cResult[19] = diff;
          cResult[20] = diff1;
          cResult[21] = tmp65;
          tmp63 = tmp65;
        }
      }
    }
    if (CIRCULAR2 === obj6.CIRCULAR) {
      const obj9 = { cx: result, cy: result, r: result, fill: "white" };
      let tmp60 = React5(Circle2(7550).Circle, obj9);
    } else {
      const size7 = { x: 0, y: 0, height: size2, width: size2, fill: "white" };
      tmp60 = React5(Circle2(7550).Rect, size7);
    }
    cResult[14] = CIRCULAR2;
    cResult[15] = result;
    cResult[16] = size2;
    cResult[17] = tmp60;
  } else {
    ({ cutout, size, source, style } = arg0);
    const result1 = size / 2;
    let radius = cutout.radius;
    if (radius == null) {
      radius = result1;
    }
    let num2 = cutout.inset;
    if (num2 == null) {
      num2 = 0;
    }
    let CIRCULAR = cutout.imageType;
    if (CIRCULAR == null) {
      CIRCULAR = obj6.CIRCULAR;
    }
    let diff2 = size - num2;
    let diff3 = size;
    if (CIRCULAR === obj6.CIRCULAR) {
      diff3 = result1;
    }
    const direction = cutout.direction;
    if (obj5.BOTTOM_RIGHT === direction) {
      diff2 = size - radius - num2;
      diff3 = size - radius - num2;
    } else if (tmp7.BOTTOM_LEFT === direction) {
      diff2 = radius + num2;
      diff3 = size - radius - num2;
    }
    let Circle = require;
    let obj = dependencyMap;
    const v4Result1 = v1.v4();
    const tintColor = React4.flatten(style).tintColor;
    if (null != source) {
      if (null != tintColor) {
        const size8 = { x: "0", y: "0", height: "100%", width: "100%", mask: null, children: null };
        const _HermesInternal2 = HermesInternal;
        size8.mask = "url(#" + v4Result1 + ")";
        const obj10 = { style: null, source: null, usesSmallCache: true };
        const obj11 = { tintColor };
        obj10.style = obj11;
        obj10.source = getReactNativeSVGImageSourceDefault(source);
        size8.children = React5(FastImageDefault, obj10);
        let tmp13 = React5(Circle(7550).ForeignObject, size8);
        let tmp14 = importDefault;
        let tmp15 = React5;
      }
      const obj12 = { style, children: null };
      const size9 = { width: size, height: size, id: v4Result1, children: null };
      if (CIRCULAR === tmp5.CIRCULAR) {
        const obj13 = { cx: result1, cy: result1, r: result1, fill: "white" };
        let tmp15Result = tmp15(Circle(7550).Circle, obj13);
      } else {
        const size10 = { x: 0, y: 0, height: size, width: size, fill: "white" };
        tmp15Result = tmp15(Circle(7550).Rect, size10);
      }
      const obj14 = { children: null };
      const items2 = [tmp15Result, ];
      const obj16 = { cx: diff2, cy: diff3, r: radius, fill: "black" };
      items2[1] = tmp15(Circle(7550).Circle, obj16);
      size9.children = items2;
      obj14.children = closure_1_8(Circle(7550).Mask, size9);
      const items3 = [tmp15(Circle(7550).Defs, obj14), tmp13, ];
      if (null == cutout.border) {
        const size11 = { height: "100%", width: "100%", children: null };
        items3[2] = null;
        size11.children = items3;
        obj12.children = closure_1_8(tmp14Result, size11);
        return tmp15(hasOwnProperty, obj12);
      } else if (CIRCULAR === tmp5.CIRCULAR) {
        Circle = Circle(7550).Circle;
        obj = { cx: result1, cy: result1, r: result1, fill: "none", mask: null, stroke: null, strokeWidth: null };
        const _HermesInternal4 = HermesInternal;
        obj.mask = "url(#" + v4Result1 + ")";
        obj.stroke = cutout.border.color;
        cutout = cutout.border.width;
        obj.strokeWidth = cutout;
        let tmp15Result2 = tmp15(Circle, obj);
      } else {
        const size12 = { x: 0, y: 0, height: size, width: size, fill: "none", mask: null, stroke: null, strokeWidth: null };
        const _HermesInternal3 = HermesInternal;
        size12.mask = "url(#" + v4Result1 + ")";
        size12.stroke = cutout.border.color;
        size12.strokeWidth = cutout.border.width;
        tmp15Result2 = tmp15(Circle(7550).Rect, size12);
      }
      tmp14Result = tmp14(7550);
    }
    const size13 = { x: "0", y: "0", height: "100%", width: "100%", href: getReactNativeSVGImageSourceDefault(source), mask: null };
    const _HermesInternal = HermesInternal;
    size13.mask = "url(#" + v4Result1 + ")";
    tmp13 = React5(Circle(7550).Image, size13);
    tmp14 = importDefault;
    tmp15 = React5;
  }
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CHANNEL_SPRING_CONFIG = fn(13020).CHANNEL_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const logger = new LoggerDefault("UIKit - AvatarImage");
let obj = { XXSMALL: "xxsmall", XSMALL: "xsmall", SMALL: "small", NORMAL: "normal", LARGE: "large", XLARGE: "xlarge", XLARGE_72: "xlarge72", XXLARGE: "xxlarge", PROFILE: "profile", REFRESH_MEDIUM_32: "refreshMedium32", XXSMALL_10: "xsmall10", XSMALL_20: "xsmall20", SIZE_16: "size16", LARGE_48: "large48", EDIT_AVATAR_DECORATION: "editAvatarDecoration", GIFT_START: "giftStart", GIFT_SUCCESS: "giftSuccess", YOUBAR_60: "youBar60", TABS_22: "tabs22" };
const frozen = Object.freeze({ [obj.XXSMALL_10]: 10, [obj.SIZE_16]: 16, [obj.XXSMALL]: 18, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.NORMAL]: 40, [obj.LARGE_48]: 48, [obj.LARGE]: 50, [obj.XLARGE]: 64, [obj.XLARGE_72]: 72, [obj.XXLARGE]: 80, [obj.PROFILE]: 128, [obj.EDIT_AVATAR_DECORATION]: 144, [obj.GIFT_START]: 184, [obj.GIFT_SUCCESS]: 236, [obj.REFRESH_MEDIUM_32]: 32, [obj.YOUBAR_60]: 60, [obj.TABS_22]: 22 });
let obj2 = { image: { width: "100%", height: "100%" }, xxsmall: { width: frozen[obj.XXSMALL], height: frozen[obj.XXSMALL] }, xsmall10: { width: frozen[obj.XXSMALL_10], height: frozen[obj.XXSMALL_10] }, xsmall20: { width: frozen[obj.XSMALL_20], height: frozen[obj.XSMALL_20] }, xsmall: { width: frozen[obj.XSMALL], height: frozen[obj.XSMALL] }, small: { width: frozen[obj.SMALL], height: frozen[obj.SMALL] }, normal: { width: frozen[obj.NORMAL], height: frozen[obj.NORMAL] }, large: { width: frozen[obj.LARGE], height: frozen[obj.LARGE] }, xlarge: { width: frozen[obj.XLARGE], height: frozen[obj.XLARGE] }, xlarge72: { width: frozen[obj.XLARGE_72], height: frozen[obj.XLARGE_72] }, xxlarge: { width: frozen[obj.XXLARGE], height: frozen[obj.XXLARGE] }, refreshMedium32: { width: frozen[obj.REFRESH_MEDIUM_32], height: frozen[obj.REFRESH_MEDIUM_32] }, profile: { width: frozen[obj.PROFILE], height: frozen[obj.PROFILE] }, size16: { width: frozen[obj.SIZE_16], height: frozen[obj.SIZE_16] }, large48: { width: frozen[obj.LARGE_48], height: frozen[obj.LARGE_48] }, editAvatarDecoration: { width: frozen[obj.EDIT_AVATAR_DECORATION], height: frozen[obj.EDIT_AVATAR_DECORATION] }, giftStart: { width: frozen[obj.GIFT_START], height: frozen[obj.GIFT_START] }, giftSuccess: { width: frozen[obj.GIFT_SUCCESS], height: frozen[obj.GIFT_SUCCESS] }, youBar60: { width: frozen[obj.YOUBAR_60], height: frozen[obj.YOUBAR_60] }, tabs22: { width: frozen[obj.TABS_22], height: frozen[obj.TABS_22] }, borderRadii: null };
let obj3 = { xxsmall: { borderRadius: frozen[obj.XXSMALL] / 2 }, xsmall10: { borderRadius: frozen[obj.XXSMALL_10] / 2 }, xsmall20: { borderRadius: frozen[obj.XSMALL_20] / 2 }, xsmall: { borderRadius: frozen[obj.XSMALL] / 2 }, small: { borderRadius: frozen[obj.SMALL] / 2 }, normal: { borderRadius: frozen[obj.NORMAL] / 2 }, large: { borderRadius: frozen[obj.LARGE] / 2 }, xlarge: { borderRadius: frozen[obj.XLARGE] / 2 }, xlarge72: { borderRadius: frozen[obj.XLARGE_72] / 2 }, xxlarge: { borderRadius: frozen[obj.XXLARGE] / 2 }, refreshMedium32: { borderRadius: frozen[obj.REFRESH_MEDIUM_32] / 2 }, profile: { borderRadius: frozen[obj.PROFILE] / 2 }, size16: { borderRadius: frozen[obj.SIZE_16] / 2 }, large48: { borderRadius: frozen[obj.LARGE_48] / 2 }, editAvatarDecoration: { borderRadius: frozen[obj.EDIT_AVATAR_DECORATION] / 2 }, giftStart: { borderRadius: frozen[obj.GIFT_START] / 2 }, giftSuccess: { borderRadius: frozen[obj.GIFT_SUCCESS] / 2 }, youBar60: { borderRadius: frozen[obj.YOUBAR_60] / 2 }, tabs22: { borderRadius: frozen[obj.TABS_22] / 2 } };
obj2.borderRadii = obj3;
let obj5 = { RIGHT: 0, [0]: "RIGHT", BOTTOM_RIGHT: 1, [1]: "BOTTOM_RIGHT", BOTTOM_LEFT: 2, [2]: "BOTTOM_LEFT" };
let obj6 = { RECTANGULAR: 0, [0]: "RECTANGULAR", CIRCULAR: 1, [1]: "CIRCULAR" };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function StaticNativeCutoutAvatarImage(arg0) {
  const cResult = c.c(13);
  ({ cutout, source, style, imageStyle } = arg0);
  if (cResult[0] !== cutout) {
    const items = [cutout];
    cResult[0] = cutout;
    cResult[1] = items;
    let tmp3 = items;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== source) {
    const tmp6 = getReactNativeSVGImageSourceDefault(source);
    cResult[2] = source;
    cResult[3] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[3];
  }
  if (cResult[4] !== imageStyle) {
    const items1 = [obj2.image, imageStyle];
    cResult[4] = imageStyle;
    cResult[5] = items1;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[5];
  }
  if (cResult[6] === tmp4) {
    if (cResult[7] === tmp7) {
      let tmp9 = cResult[8];
    }
    if (cResult[9] === tmp3) {
      if (cResult[10] === style) {
        if (cResult[11] === tmp9) {
          let tmp11 = cResult[12];
        }
        return tmp11;
      }
    }
    obj2 = { style, cutouts: tmp3, children: tmp9 };
    const tmp14 = React5(ClipViewDefault, obj2);
    cResult[9] = tmp3;
    cResult[10] = style;
    cResult[11] = tmp9;
    cResult[12] = tmp14;
    tmp11 = tmp14;
  }
  const tmp10 = React5(FastImageDefault, { style: tmp7, source: tmp4, usesSmallCache: true });
  cResult[6] = tmp4;
  cResult[7] = tmp7;
  cResult[8] = tmp10;
  tmp9 = tmp10;
}) : (function StaticNativeCutoutAvatarImage(cutout) {
  cutout = cutout.cutout;
  let items = [cutout];
  ({ source, style, imageStyle } = cutout);
  const memo = noop.useMemo(() => {
    const items = [cutout];
    return items;
  }, items);
  const obj = { style, cutouts: memo, children: null };
  const tmp2 = getReactNativeSVGImageSourceDefault(source);
  obj2 = { style: null, source: tmp2, usesSmallCache: true };
  const items1 = [obj2.image, imageStyle];
  obj2.style = items1;
  obj.children = React5(FastImageDefault, obj2);
  return React5(ClipViewDefault, obj);
});
const __initData = { code: "function CutoutableAvatarImageTsx1(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}" };
const __initData2 = { code: "function CutoutableAvatarImageTsx2(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}" };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function AnimatedNativeCutoutAvatarImage(cutout) {
  const cResult = cutout(576).c(11);
  cutout = cutout.cutout;
  ({ source, style, imageStyle } = cutout);
  obj2 = cutout(4810);
  const fn = function i() {
    const size = cutout;
    if (cutout.shape === ClipView.CutoutShape.RoundedRect) {
      const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: spring.withSpring(size.x, CHANNEL_SPRING_CONFIG), y: null, width: null, height: null, cornerRadius: null };
      const tmpResult = spring;
      size1.y = spring.withSpring(size.y, CHANNEL_SPRING_CONFIG);
      const tmpResult8 = spring;
      size1.width = spring.withSpring(size.width, CHANNEL_SPRING_CONFIG);
      const tmpResult9 = spring;
      size1.height = spring.withSpring(size.height, CHANNEL_SPRING_CONFIG);
      const tmpResult10 = spring;
      size1.cornerRadius = spring.withSpring(size.cornerRadius, CHANNEL_SPRING_CONFIG);
      let point = size1;
      const tmpResult11 = spring;
    } else {
      point = { shape: ClipView.CutoutShape.Circle, x: spring.withSpring(size.x, CHANNEL_SPRING_CONFIG), y: null, size: null };
      const tmpResult12 = spring;
      point.y = spring.withSpring(size.y, CHANNEL_SPRING_CONFIG);
      const tmpResult13 = spring;
      point.size = spring.withSpring(size.size, CHANNEL_SPRING_CONFIG);
      const tmpResult14 = spring;
    }
    const obj = { cutouts: null };
    const items = [point];
    obj.cutouts = items;
    return obj;
  };
  let obj = cutout(576);
  const tmp = cutout;
  fn.__closure = { cutout, CutoutShape: cutout(8986).CutoutShape, withSpring: cutout(5374).withSpring, CHANNEL_SPRING_CONFIG };
  fn.__workletHash = 12529564164821;
  fn.__initData = __initData;
  const animatedProps = obj2.useAnimatedProps(fn);
  if (cResult[0] !== source) {
    const tmp7 = getReactNativeSVGImageSourceDefault(source);
    cResult[0] = source;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== imageStyle) {
    let items = [obj2.image, imageStyle];
    cResult[2] = imageStyle;
    cResult[3] = items;
    let tmp8 = items;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === tmp8) {
      let tmp10 = cResult[6];
    }
    if (cResult[7] === animatedProps) {
      if (cResult[8] === style) {
        if (cResult[9] === tmp10) {
          let tmp12 = cResult[10];
        }
        return tmp12;
      }
    }
    const obj4 = { style, animatedProps, children: tmp10 };
    const tmp14 = closure_7(tmp(8986).ClipViewAnimated, obj4);
    cResult[7] = animatedProps;
    cResult[8] = style;
    cResult[9] = tmp10;
    cResult[10] = tmp14;
    tmp12 = tmp14;
  }
  const tmp11 = closure_7(FastImageDefault, { style: tmp8, source: tmp5, usesSmallCache: true });
  cResult[4] = tmp5;
  cResult[5] = tmp8;
  cResult[6] = tmp11;
  tmp10 = tmp11;
  const obj3 = { cutout, CutoutShape: cutout(8986).CutoutShape, withSpring: cutout(5374).withSpring, CHANNEL_SPRING_CONFIG };
}) : (function AnimatedNativeCutoutAvatarImage(cutout) {
  cutout = cutout.cutout;
  ({ source, style, imageStyle } = cutout);
  const fn = function n() {
    const size = cutout;
    if (cutout.shape === ClipView.CutoutShape.RoundedRect) {
      const size1 = { shape: ClipView.CutoutShape.RoundedRect, x: spring.withSpring(size.x, CHANNEL_SPRING_CONFIG), y: null, width: null, height: null, cornerRadius: null };
      const tmpResult = spring;
      size1.y = spring.withSpring(size.y, CHANNEL_SPRING_CONFIG);
      const tmpResult8 = spring;
      size1.width = spring.withSpring(size.width, CHANNEL_SPRING_CONFIG);
      const tmpResult9 = spring;
      size1.height = spring.withSpring(size.height, CHANNEL_SPRING_CONFIG);
      const tmpResult10 = spring;
      size1.cornerRadius = spring.withSpring(size.cornerRadius, CHANNEL_SPRING_CONFIG);
      let point = size1;
      const tmpResult11 = spring;
    } else {
      point = { shape: ClipView.CutoutShape.Circle, x: spring.withSpring(size.x, CHANNEL_SPRING_CONFIG), y: null, size: null };
      const tmpResult12 = spring;
      point.y = spring.withSpring(size.y, CHANNEL_SPRING_CONFIG);
      const tmpResult13 = spring;
      point.size = spring.withSpring(size.size, CHANNEL_SPRING_CONFIG);
      const tmpResult14 = spring;
    }
    const obj = { cutouts: null };
    const items = [point];
    obj.cutouts = items;
    return obj;
  };
  obj2 = { cutout, CutoutShape: cutout(8986).CutoutShape, withSpring: cutout(5374).withSpring, CHANNEL_SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 6509713032566;
  fn.__initData = __initData2;
  const animatedProps = cutout(4810).useAnimatedProps(fn);
  let obj = cutout(4810);
  const obj3 = { style, animatedProps, children: null };
  const obj4 = { style: null, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true };
  let items = [obj2.image, imageStyle];
  obj4.style = items;
  obj3.children = closure_7(FastImageDefault, obj4);
  return closure_7(cutout(8986).ClipViewAnimated, obj3);
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function NativeCutoutAvatarImage(animate) {
  const cResult = c.c(4);
  if (true === animate.animate) {
    if (cResult[0] !== animate) {
      obj2 = {};
      const merged = Object.assign(animate);
      const tmp15 = React5(closure_17, obj2);
      cResult[0] = animate;
      cResult[1] = tmp15;
    }
  } else {
    if (cResult[2] !== animate) {
      const obj3 = {};
      const merged1 = Object.assign(animate);
      const tmp8 = React5(closure_14, obj3);
      cResult[2] = animate;
      cResult[3] = tmp8;
      let tmp2 = tmp8;
    } else {
      tmp2 = cResult[3];
    }
    return tmp2;
  }
}) : (function NativeCutoutAvatarImage(animate) {
  if (true === animate.animate) {
    obj2 = {};
    const merged = Object.assign(animate);
    let tmp6 = React5(closure_17, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(animate);
    tmp6 = React5(closure_14, obj);
  }
  return tmp6;
});
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled();
ReactCompilerGating = fn(558);
let obj4 = { borderRadius: frozen[obj.XXSMALL] / 2 };
let tmp4 = new LoggerDefault("UIKit - AvatarImage");
let size = fn(2);
let result = size.fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function CutoutableAvatarImage(arg0) {
  const cResult = c.c(28);
  ({ animate, cutout, size, style } = arg0);
  if (cResult[0] === style) {
    if (cResult[1] === tmp6) {
      let tmp7 = cResult[2];
    }
    let tmp9 = true === animate;
    if (tmp9) {
      tmp9 = null == cutout;
    }
    if (cResult[3] === arg0) {
      if (cResult[4] === tmp9) {
        if (cResult[5] === tmp4) {
          let tmp11 = cResult[6];
          let tmp12 = cResult[7];
          let tmp13 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (tmp13 !== Symbol.for("react.early_return_sentinel")) {
          return tmp13;
        } else if (null != cutout) {
          const nativeCutouts = cutout.nativeCutouts;
          let length;
          if (nativeCutouts != null) {
            length = nativeCutouts.length;
          }
          if (1 === length) {
            if (cResult[9] === animate) {
              if (cResult[10] === tmp8) {
                if (cResult[11] === cutout.nativeCutouts[0]) {
                  if (cResult[12] === tmp11) {
                  }
                }
              }
            }
            obj2 = { animate, cutout: cutout.nativeCutouts[0], source: tmp11, style: tmp7, imageStyle: tmp8 };
            const tmp47 = React5(closure_18, obj2);
            cResult[9] = animate;
            cResult[10] = tmp8;
            cutout = cutout.nativeCutouts[0];
            cResult[11] = cutout;
            cResult[12] = tmp11;
            cResult[13] = tmp7;
            cResult[14] = tmp47;
          } else {
            if (cResult[15] === animate) {
              if (cResult[16] === cutout) {
                if (cResult[17] === tmp4) {
                  if (cResult[18] === tmp11) {
                    if (cResult[19] === tmp7) {
                      let tmp40 = cResult[20];
                    }
                    return tmp40;
                  }
                }
              }
            }
            const obj3 = { style: tmp7, size: tmp4, animate, cutout, source: tmp11 };
            const tmp43 = React5(CutoutAvatarImage, obj3);
            cResult[15] = animate;
            cResult[16] = cutout;
            cResult[17] = tmp4;
            cResult[18] = tmp11;
            cResult[19] = tmp7;
            cResult[20] = tmp43;
            tmp40 = tmp43;
          }
        } else {
          if (cResult[21] === tmp8) {
            if (cResult[22] === tmp7) {
              let tmp33 = cResult[23];
            }
            let tmp34;
            if (typeof tmp12 === "number") {
              tmp34 = tmp12;
            }
            if (cResult[24] === tmp11) {
              if (cResult[25] === tmp33) {
                if (cResult[26] === tmp34) {
                  let tmp35 = cResult[27];
                }
                return tmp35;
              }
            }
            const obj4 = { style: tmp33, source: tmp11, placeholder: tmp34, usesSmallCache: true };
            const tmp38 = React5(FastImageDefault, obj4, "image");
            cResult[24] = tmp11;
            cResult[25] = tmp33;
            cResult[26] = tmp34;
            cResult[27] = tmp38;
            tmp35 = tmp38;
          }
          const items = [tmp7, tmp8];
          cResult[21] = tmp8;
          cResult[22] = tmp7;
          cResult[23] = items;
          tmp33 = items;
        }
      }
    }
    const _Symbol = Symbol;
    const obj7 = {};
    const merged = Object.assign(arg0);
    obj7.animate = tmp9;
    obj7.size = tmp4;
    ({ source, user, channel, animate: animate2, size: size2 } = obj7);
    if (null != source) {
      let sourceResult = source;
      if (typeof source === "function") {
        sourceResult = source(animate2);
      }
      let avatarSource = sourceResult;
    } else if (null != user) {
      avatarSource = user.getAvatarSource(tmp19, animate2, size2);
    } else if (null != channel) {
      const channelIconURL = getChannelIcon.getChannelIconURL(channel, size2);
      let tmp25 = channelIconURL;
      if (typeof channelIconURL !== "number") {
        tmp25 = channelIconURL;
        if (null != channelIconURL) {
          const obj8 = { uri: channelIconURL };
          tmp25 = obj8;
        }
      }
      avatarSource = tmp25;
      const tmpResult = getChannelIcon;
    } else {
      logger.warn("No image found from provided data");
    }
    let tmp27 = null;
    let tmp28;
    if (null != avatarSource) {
      const user2 = obj7.user;
      let source1;
      if (null != user2) {
        if (!tmp29) {
          obj5 = AvatarUtilsDefault;
          source1 = obj5.makeSource(AvatarUtilsDefault.getDefaultAvatarURL(user2.id, user2.discriminator));
        }
      }
      tmp28 = source1;
      tmp27 = forResult;
    }
    cResult[3] = arg0;
    cResult[4] = tmp9;
    cResult[5] = tmp4;
    cResult[6] = avatarSource;
    cResult[7] = tmp28;
    cResult[8] = tmp27;
    tmp13 = tmp27;
    tmp12 = tmp28;
    tmp11 = avatarSource;
    forResult = Symbol.for("react.early_return_sentinel");
  }
  const items1 = [obj2[size], style];
  cResult[0] = style;
  cResult[1] = obj2[size];
  cResult[2] = items1;
  tmp7 = items1;
}) : (function CutoutableAvatarImage(style) {
  ({ animate, cutout, size } = style);
  const items = [obj2[size], style.style];
  const obj = {};
  const merged = Object.assign(style);
  let tmp4 = true === animate;
  if (tmp4) {
    tmp4 = null == cutout;
  }
  obj.animate = tmp4;
  obj.size = frozen[size];
  ({ source, user, channel, animate: animate2, size: size2 } = obj);
  if (null != source) {
    let sourceResult = source;
    if (typeof source === "function") {
      sourceResult = source(animate2);
    }
    let avatarSource = sourceResult;
  } else if (null != user) {
    avatarSource = user.getAvatarSource(tmp6, animate2, size2);
  } else if (null != channel) {
    obj2 = getChannelIcon;
    const channelIconURL = obj2.getChannelIconURL(channel, size2);
    let tmp13 = channelIconURL;
    if (typeof channelIconURL !== "number") {
      tmp13 = channelIconURL;
      if (null != channelIconURL) {
        const obj3 = { uri: channelIconURL };
        tmp13 = obj3;
      }
    }
    avatarSource = tmp13;
  } else {
    logger.warn("No image found from provided data");
  }
  if (null == avatarSource) {
    return null;
  } else {
    const user2 = obj.user;
    if (null != user2) {
      if (!tmp30) {
        const obj4 = AvatarUtilsDefault;
        const source1 = obj4.makeSource(AvatarUtilsDefault.getDefaultAvatarURL(user2.id, user2.discriminator));
      }
    }
    if (null != cutout) {
      const nativeCutouts = cutout.nativeCutouts;
      let length;
      if (nativeCutouts != null) {
        length = nativeCutouts.length;
      }
      if (1 === length) {
        obj6 = { animate, cutout: null, source: null, style: null, imageStyle: null };
        cutout = cutout.nativeCutouts[0];
        obj6.cutout = cutout;
        obj6.source = avatarSource;
        obj6.style = items;
        obj6.imageStyle = tmp2;
        let tmp26 = React5(closure_18, obj6);
      } else {
        const obj7 = { style: items, size: tmp, animate, cutout, source: avatarSource };
        tmp26 = React5(CutoutAvatarImage, obj7);
      }
    } else {
      const obj8 = { style: null, source: null, placeholder: null, usesSmallCache: true };
      const items1 = [items, tmp2];
      obj8.style = items1;
      obj8.source = avatarSource;
      let tmp22;
      if (typeof source1 === "number") {
        tmp22 = source1;
      }
      obj8.placeholder = tmp22;
      return React5(FastImageDefault, obj8, "image");
    }
  }
}), function customShallowEqual(source, source2) {
  if (discord_common_shallowEqualDefault(source, source2, ["source"])) {
    source = source.source;
    const source1 = source2.source;
    if (source === source1) {
      return true;
    } else {
      if (typeof source1 !== "number") {
        if (typeof source1 === typeof source) {
          const _Array2 = Array;
          if (Array.isArray(source1)) {
            const _Array = Array;
            if (Array.isArray(source)) {
              if (source.length !== source1.length) {
                return false;
              } else {
                let num = 0;
                if (0 < source.length) {
                  while (discord_common_shallowEqualDefault(source[num], source1[num])) {
                    num = num + 1;
                  }
                  return false;
                }
                return true;
              }
            }
          }
          let tmp3 = typeof source1 !== "object";
          if (typeof source1 === "object") {
            tmp3 = typeof source !== "object";
          }
          if (!tmp3) {
            tmp3 = discord_common_shallowEqualDefault(source1, source);
          }
          return tmp3;
        }
      }
      return false;
    }
  } else {
    return false;
  }
});
export const AvatarSizes = obj;
export const AVATAR_SIZE_MAP = frozen;
export const styles = obj2;
export const CutoutDirection = obj5;
export const CutoutType = obj6;