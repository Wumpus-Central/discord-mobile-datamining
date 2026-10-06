// discord_app/design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx
import LoggerDefault from "../../../../modules/debug/Logger.tsx";
import shallowEqualDefault from "../../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import v1 from "../../../../../_runtime/01266_v1.js";
import AvatarUtilsDefault from "../../../../utils/AvatarUtils.tsx";
import spring from "../../../animation/reanimated/spring/spring.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import inlineStyles from "../../../../../_runtime/08169_inlineStyles.js";
import ClipView from "../../../components/Icon/native/ClipView.tsx";
import ChannelAnimationConstants from "../../../../modules/main_tabs_v2/native/shared_components/guild_channels/ChannelAnimationConstants.tsx";
import getChannelIcon from "../../../../modules/channel/getChannelIcon.tsx";
import getReactNativeSVGImageSourceDefault from "../../../../modules/svg/native/getReactNativeSVGImageSource.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const inlineStylesDefault = inlineStyles;
const ClipViewDefault = ClipView;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
function CutoutAvatarImage(arg0) {
  let cutout;
  let cutout2;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj3;
  let obj9;
  let size12;
  let size2;
  let size5;
  let source;
  let source2;
  let style;
  let style2;
  let tmp17Result;
  let tmp18Result4;
  let tmp22;
  if (closure_19) {
    let first;
    let tmp45;
    let tmp48;
    let tmp51;
    const obj15 = react2;
    const cResult = obj15.c(38);
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
    } else if (tmp41.BOTTOM_LEFT === direction2) {
      diff = radius2 + num5;
      diff1 = size2 - radius2 - num5;
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp32Result = v1;
      const v4Result = tmp32Result.v4();
      cResult[0] = v4Result;
      first = v4Result;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== style2) {
      const flattenResult = React3.flatten(style2);
      cResult[1] = style2;
      cResult[2] = flattenResult;
      tmp45 = flattenResult;
    } else {
      tmp45 = cResult[2];
    }
    const tintColor2 = tmp45.tintColor;
    if (null != source2) {
      let tmp64;
      if (null != tintColor2) {
        let tmp54;
        let tmp55;
        if (cResult[3] !== tintColor2) {
          obj2 = { tintColor: tintColor2 };
          cResult[3] = tintColor2;
          cResult[4] = obj2;
          tmp54 = obj2;
        } else {
          tmp54 = cResult[4];
        }
        if (cResult[5] !== source2) {
          const tmp57 = getReactNativeSVGImageSourceDefault(source2);
          cResult[5] = source2;
          cResult[6] = tmp57;
          tmp55 = tmp57;
        } else {
          tmp55 = cResult[6];
        }
        if (cResult[7] === tmp54) {
          let tmp58;
          if (cResult[8] === tmp55) {
            tmp58 = cResult[9];
          }
          tmp51 = tmp58;
        }
        const size1 = {
          x: "0",
          y: "0",
          height: "100%",
          width: "100%",
          mask: "url(#" + first + ")",
          children: metroImportDefault(FastImageDefault, obj3),
        };
        const _HermesInternal6 = HermesInternal;
        const ForeignObject2 = inlineStyles.ForeignObject;
        obj3 = { style: tmp54, source: tmp55, usesSmallCache: true };
        const tmp61 = metroImportDefault(ForeignObject2, size1);
        cResult[7] = tmp54;
        cResult[8] = tmp55;
        cResult[9] = tmp61;
        tmp58 = tmp61;
      }
      if (cResult[14] === CIRCULAR2) {
        if (cResult[15] === result) {
          let tmp62;
          if (cResult[16] === size2) {
            tmp62 = cResult[17];
          }
          if (cResult[18] === radius2) {
            if (cResult[19] === diff) {
              let tmp66;
              if (cResult[20] === diff1) {
                tmp66 = cResult[21];
              }
              if (cResult[22] === size2) {
                if (cResult[23] === tmp62) {
                  let tmp69;
                  if (cResult[24] === tmp66) {
                    tmp69 = cResult[25];
                  }
                  if (cResult[26] === cutout2.border) {
                    if (cResult[27] === CIRCULAR2) {
                      if (cResult[28] === result) {
                        let tmp73;
                        if (cResult[29] === size2) {
                          tmp73 = cResult[30];
                        }
                        if (cResult[31] === tmp51) {
                          if (cResult[32] === tmp69) {
                            let tmp78;
                            if (cResult[33] === tmp73) {
                              tmp78 = cResult[34];
                            }
                            if (cResult[35] === style2) {
                              let tmp82;
                              if (cResult[36] === tmp78) {
                                tmp82 = cResult[37];
                              }
                              tmp18Result4 = tmp82;
                            }
                            const obj4 = { style: style2, children: tmp78 };
                            const tmp85 = metroImportDefault(hasOwnProperty, obj4);
                            cResult[35] = style2;
                            cResult[36] = tmp78;
                            cResult[37] = tmp85;
                            tmp82 = tmp85;
                          }
                        }
                        const size3 = { height: "100%", width: "100%", children: items };
                        items = [tmp69, tmp51, tmp73];
                        const tmp81 = metroImportAll(inlineStylesDefault, size3);
                        cResult[31] = tmp51;
                        cResult[32] = tmp69;
                        cResult[33] = tmp73;
                        cResult[34] = tmp81;
                        tmp78 = tmp81;
                      }
                    }
                  }
                  let tmp74 = null;
                  if (null != cutout2.border) {
                    let tmp76;
                    if (CIRCULAR2 === obj6.CIRCULAR) {
                      obj5 = {
                        cx: result,
                        cy: result,
                        r: result,
                        fill: "none",
                        mask: "url(#" + first + ")",
                        stroke: cutout2.border.color,
                        strokeWidth: cutout2.border.width,
                      };
                      const _HermesInternal8 = HermesInternal;
                      const Circle2 = inlineStyles.Circle;
                      tmp76 = metroImportDefault(Circle2, obj5);
                    } else {
                      const size4 = {
                        x: 0,
                        y: 0,
                        height: size2,
                        width: size2,
                        fill: "none",
                        mask: "url(#" + first + ")",
                        stroke: cutout2.border.color,
                        strokeWidth: cutout2.border.width,
                      };
                      const _HermesInternal7 = HermesInternal;
                      const Rect2 = inlineStyles.Rect;
                      tmp76 = metroImportDefault(Rect2, size4);
                    }
                    tmp74 = tmp76;
                  }
                  cResult[26] = cutout2.border;
                  cResult[27] = CIRCULAR2;
                  cResult[28] = result;
                  cResult[29] = size2;
                  cResult[30] = tmp74;
                  tmp73 = tmp74;
                }
              }
              obj6 = { children: metroImportAll(inlineStyles.Mask, size5) };
              const Defs2 = inlineStyles.Defs;
              size5 = { width: size2, height: size2, id: first, children: items1 };
              items1 = [tmp62, tmp66];
              const tmp72 = metroImportDefault(Defs2, obj6);
              cResult[22] = size2;
              cResult[23] = tmp62;
              cResult[24] = tmp66;
              cResult[25] = tmp72;
              tmp69 = tmp72;
            }
          }
          const obj7 = { cx: diff, cy: diff1, r: radius2, fill: "black" };
          const tmp68 = metroImportDefault(inlineStyles.Circle, obj7);
          cResult[18] = radius2;
          cResult[19] = diff;
          cResult[20] = diff1;
          cResult[21] = tmp68;
          tmp66 = tmp68;
        }
      }
      if (CIRCULAR2 === obj6.CIRCULAR) {
        const obj8 = { cx: result, cy: result, r: result, fill: "white" };
        tmp64 = metroImportDefault(inlineStyles.Circle, obj8);
      } else {
        const size6 = { x: 0, y: 0, height: size2, width: size2, fill: "white" };
        tmp64 = metroImportDefault(inlineStyles.Rect, size6);
      }
      cResult[14] = CIRCULAR2;
      cResult[15] = result;
      cResult[16] = size2;
      cResult[17] = tmp64;
      tmp62 = tmp64;
    }
    if (cResult[10] !== source2) {
      const tmp50 = getReactNativeSVGImageSourceDefault(source2);
      cResult[10] = source2;
      cResult[11] = tmp50;
      tmp48 = tmp50;
    } else {
      tmp48 = cResult[11];
    }
    if (cResult[12] !== tmp48) {
      const size7 = { x: "0", y: "0", height: "100%", width: "100%", href: tmp48, mask: "url(#" + first + ")" };
      const _HermesInternal5 = HermesInternal;
      const Image2 = inlineStyles.Image;
      const tmp53 = metroImportDefault(Image2, size7);
      cResult[12] = tmp48;
      cResult[13] = tmp53;
      tmp51 = tmp53;
    } else {
      tmp51 = cResult[13];
    }
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
    } else if (tmp8.BOTTOM_LEFT === direction) {
      diff2 = radius + num2;
      diff3 = size - radius - num2;
    }
    const obj = v1;
    const v4Result1 = obj.v4();
    const tintColor = React3.flatten(style).tintColor;
    if (null != source) {
      let tmp16;
      let tmp17;
      let tmp18;
      let tmp18Result;
      if (null != tintColor) {
        const size8 = {
          x: "0",
          y: "0",
          height: "100%",
          width: "100%",
          mask: "url(#" + v4Result1 + ")",
          children: metroImportDefault(tmp22, obj9),
        };
        const _HermesInternal2 = HermesInternal;
        const ForeignObject = inlineStyles.ForeignObject;
        obj9 = { style: obj10, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true };
        obj10 = { tintColor };
        tmp22 = FastImageDefault;
        tmp16 = metroImportDefault(ForeignObject, size8);
        tmp17 = importDefault;
        tmp18 = metroImportDefault;
      }
      const obj11 = { style, children: metroImportAll(tmp17Result, size12) };
      tmp17Result = tmp17(8169);
      const Defs = inlineStyles.Defs;
      const size9 = { width: size, height: size, id: v4Result1, children: items2 };
      const Mask = inlineStyles.Mask;
      if (CIRCULAR === obj6.CIRCULAR) {
        const obj12 = { cx: result1, cy: result1, r: result1, fill: "white" };
        tmp18Result = tmp18(inlineStyles.Circle, obj12);
      } else {
        const size10 = { x: 0, y: 0, height: size, width: size, fill: "white" };
        tmp18Result = tmp18(inlineStyles.Rect, size10);
      }
      items2 = [tmp18Result];
      const obj13 = { children: metroImportAll(Mask, size9) };
      const obj14 = { cx: diff2, cy: diff3, r: radius, fill: "black" };
      items2[1] = tmp18(inlineStyles.Circle, obj14);
      const items3 = [tmp18(Defs, obj13), tmp16];
      let tmp27 = null;
      if (null != cutout.border) {
        let tmp18Result3;
        if (CIRCULAR === obj6.CIRCULAR) {
          const _HermesInternal4 = HermesInternal;
          const obj16 = {
            cx: result1,
            cy: result1,
            r: result1,
            fill: "none",
            mask: "url(#" + v4Result1 + ")",
            stroke: cutout.border.color,
            strokeWidth: cutout.border.width,
          };
          const Circle = inlineStyles.Circle;
          tmp18Result3 = tmp18(Circle, obj16);
        } else {
          const size11 = {
            x: 0,
            y: 0,
            height: size,
            width: size,
            fill: "none",
            mask: "url(#" + v4Result1 + ")",
            stroke: cutout.border.color,
            strokeWidth: cutout.border.width,
          };
          const _HermesInternal3 = HermesInternal;
          const Rect = inlineStyles.Rect;
          tmp18Result3 = tmp18(Rect, size11);
        }
        tmp27 = tmp18Result3;
      }
      size12 = { height: "100%", width: "100%", children: items3 };
      items3[2] = tmp27;
      tmp18Result4 = tmp18(hasOwnProperty, obj11);
    }
    const size13 = {
      x: "0",
      y: "0",
      height: "100%",
      width: "100%",
      href: getReactNativeSVGImageSourceDefault(source),
      mask: "url(#" + v4Result1 + ")",
    };
    const Image = inlineStyles.Image;
    const _HermesInternal = HermesInternal;
    tmp16 = metroImportDefault(Image, size13);
    tmp17 = importDefault;
    tmp18 = metroImportDefault;
  }
  return tmp18Result4;
}
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const CHANNEL_SPRING_CONFIG = ChannelAnimationConstants.CHANNEL_SPRING_CONFIG;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let tmp5 = new LoggerDefault("UIKit - AvatarImage");
const logger = tmp5;
let obj = {
  XXSMALL: "xxsmall",
  XSMALL: "xsmall",
  SMALL: "small",
  NORMAL: "normal",
  LARGE: "large",
  XLARGE: "xlarge",
  XLARGE_72: "xlarge72",
  XXLARGE: "xxlarge",
  PROFILE: "profile",
  REFRESH_MEDIUM_32: "refreshMedium32",
  XXSMALL_10: "xsmall10",
  XSMALL_20: "xsmall20",
  SIZE_16: "size16",
  LARGE_48: "large48",
  EDIT_AVATAR_DECORATION: "editAvatarDecoration",
  GIFT_START: "giftStart",
  GIFT_SUCCESS: "giftSuccess",
  YOUBAR_60: "youBar60",
  TABS_22: "tabs22",
};
const frozen = Object.freeze({
  [obj.XXSMALL_10]: 10,
  [obj.SIZE_16]: 16,
  [obj.XXSMALL]: 18,
  [obj.XSMALL_20]: 20,
  [obj.XSMALL]: 24,
  [obj.SMALL]: 30,
  [obj.NORMAL]: 40,
  [obj.LARGE_48]: 48,
  [obj.LARGE]: 50,
  [obj.XLARGE]: 64,
  [obj.XLARGE_72]: 72,
  [obj.XXLARGE]: 80,
  [obj.PROFILE]: 128,
  [obj.EDIT_AVATAR_DECORATION]: 144,
  [obj.GIFT_START]: 184,
  [obj.GIFT_SUCCESS]: 236,
  [obj.REFRESH_MEDIUM_32]: 32,
  [obj.YOUBAR_60]: 60,
  [obj.TABS_22]: 22,
});
let obj2 = {
  image: { width: "100%", height: "100%" },
  xxsmall: { width: frozen[obj.XXSMALL], height: frozen[obj.XXSMALL] },
  xsmall10: { width: frozen[obj.XXSMALL_10], height: frozen[obj.XXSMALL_10] },
  xsmall20: { width: frozen[obj.XSMALL_20], height: frozen[obj.XSMALL_20] },
  xsmall: { width: frozen[obj.XSMALL], height: frozen[obj.XSMALL] },
  small: { width: frozen[obj.SMALL], height: frozen[obj.SMALL] },
  normal: { width: frozen[obj.NORMAL], height: frozen[obj.NORMAL] },
  large: { width: frozen[obj.LARGE], height: frozen[obj.LARGE] },
  xlarge: { width: frozen[obj.XLARGE], height: frozen[obj.XLARGE] },
  xlarge72: { width: frozen[obj.XLARGE_72], height: frozen[obj.XLARGE_72] },
  xxlarge: { width: frozen[obj.XXLARGE], height: frozen[obj.XXLARGE] },
  refreshMedium32: { width: frozen[obj.REFRESH_MEDIUM_32], height: frozen[obj.REFRESH_MEDIUM_32] },
  profile: { width: frozen[obj.PROFILE], height: frozen[obj.PROFILE] },
  size16: { width: frozen[obj.SIZE_16], height: frozen[obj.SIZE_16] },
  large48: { width: frozen[obj.LARGE_48], height: frozen[obj.LARGE_48] },
  editAvatarDecoration: { width: frozen[obj.EDIT_AVATAR_DECORATION], height: frozen[obj.EDIT_AVATAR_DECORATION] },
  giftStart: { width: frozen[obj.GIFT_START], height: frozen[obj.GIFT_START] },
  giftSuccess: { width: frozen[obj.GIFT_SUCCESS], height: frozen[obj.GIFT_SUCCESS] },
  youBar60: { width: frozen[obj.YOUBAR_60], height: frozen[obj.YOUBAR_60] },
  tabs22: { width: frozen[obj.TABS_22], height: frozen[obj.TABS_22] },
  borderRadii: obj3,
};
obj3 = {
  xxsmall: obj4,
  xsmall10: { borderRadius: frozen[obj.XXSMALL_10] / 2 },
  xsmall20: { borderRadius: frozen[obj.XSMALL_20] / 2 },
  xsmall: { borderRadius: frozen[obj.XSMALL] / 2 },
  small: { borderRadius: frozen[obj.SMALL] / 2 },
  normal: { borderRadius: frozen[obj.NORMAL] / 2 },
  large: { borderRadius: frozen[obj.LARGE] / 2 },
  xlarge: { borderRadius: frozen[obj.XLARGE] / 2 },
  xlarge72: { borderRadius: frozen[obj.XLARGE_72] / 2 },
  xxlarge: { borderRadius: frozen[obj.XXLARGE] / 2 },
  refreshMedium32: { borderRadius: frozen[obj.REFRESH_MEDIUM_32] / 2 },
  profile: { borderRadius: frozen[obj.PROFILE] / 2 },
  size16: { borderRadius: frozen[obj.SIZE_16] / 2 },
  large48: { borderRadius: frozen[obj.LARGE_48] / 2 },
  editAvatarDecoration: { borderRadius: frozen[obj.EDIT_AVATAR_DECORATION] / 2 },
  giftStart: { borderRadius: frozen[obj.GIFT_START] / 2 },
  giftSuccess: { borderRadius: frozen[obj.GIFT_SUCCESS] / 2 },
  youBar60: { borderRadius: frozen[obj.YOUBAR_60] / 2 },
  tabs22: { borderRadius: frozen[obj.TABS_22] / 2 },
};
obj4 = { borderRadius: frozen[obj.XXSMALL] / 2 };
let obj5 = { RIGHT: 0, [0]: "RIGHT", BOTTOM_RIGHT: 1, [1]: "BOTTOM_RIGHT", BOTTOM_LEFT: 2, [2]: "BOTTOM_LEFT" };
let obj6 = { RECTANGULAR: 0, [0]: "RECTANGULAR", CIRCULAR: 1, [1]: "CIRCULAR" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let cutout;
      let imageStyle;
      let source;
      let style;
      let tmp3;
      let tmp4;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(13);
      ({ cutout, source, style, imageStyle } = arg0);
      if (cResult[0] !== cutout) {
        const items = [cutout];
        cResult[0] = cutout;
        cResult[1] = items;
        tmp3 = items;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== source) {
        const tmp6 = getReactNativeSVGImageSourceDefault(source);
        cResult[2] = source;
        cResult[3] = tmp6;
        tmp4 = tmp6;
      } else {
        tmp4 = cResult[3];
      }
      if (cResult[4] !== imageStyle) {
        const items1 = [obj2.image, imageStyle];
        cResult[4] = imageStyle;
        cResult[5] = items1;
        tmp7 = items1;
      } else {
        tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        let tmp9;
        if (cResult[7] === tmp7) {
          tmp9 = cResult[8];
        }
        if (cResult[9] === tmp3) {
          if (cResult[10] === style) {
            let tmp11;
            if (cResult[11] === tmp9) {
              tmp11 = cResult[12];
            }
            return tmp11;
          }
        }
        obj2 = { style, cutouts: tmp3, children: tmp9 };
        const tmp14 = metroImportDefault(ClipViewDefault, obj2);
        cResult[9] = tmp3;
        cResult[10] = style;
        cResult[11] = tmp9;
        cResult[12] = tmp14;
        tmp11 = tmp14;
      }
      const tmp10 = metroImportDefault(FastImageDefault, { style: tmp7, source: tmp4, usesSmallCache: true });
      cResult[6] = tmp4;
      cResult[7] = tmp7;
      cResult[8] = tmp10;
      tmp9 = tmp10;
    }
  : (cutout) => {
      let imageStyle;
      let items1;
      let source;
      let style;
      cutout = cutout.cutout;
      let items = [cutout];
      ({ source, style, imageStyle } = cutout);
      const memo = react.useMemo(() => {
        const items = [cutout];
        return items;
      }, items);
      const obj = { style, cutouts: memo, children: metroImportDefault(FastImageDefault, obj2) };
      obj2 = { style: items1, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true };
      items1 = [obj2.image, imageStyle];
      const tmp3 = ClipViewDefault;
      return metroImportDefault(tmp3, obj);
    };
const __initData = {
  code: "function CutoutableAvatarImageTsx1(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}",
};
const __initData2 = {
  code: "function CutoutableAvatarImageTsx2(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (cutout) => {
      let imageStyle;
      let source;
      let style;
      let tmp5;
      let tmp8;
      let obj = cutout(576);
      const cResult = obj.c(11);
      const tmp = cutout;
      cutout = cutout.cutout;
      ({ source, style, imageStyle } = cutout);
      obj2 = cutout(4618);
      const fn = function i() {
        let items;
        let point;
        let tmpResult;
        let tmpResult10;
        let tmpResult11;
        let tmpResult12;
        let tmpResult13;
        let tmpResult14;
        let tmpResult8;
        let tmpResult9;
        size = cutout;
        if (cutout.shape === ClipView.CutoutShape.RoundedRect) {
          const size1 = {
            shape: ClipView.CutoutShape.RoundedRect,
            x: tmpResult.withSpring(size.x, CHANNEL_SPRING_CONFIG),
            y: tmpResult8.withSpring(size.y, CHANNEL_SPRING_CONFIG),
            width: tmpResult9.withSpring(size.width, CHANNEL_SPRING_CONFIG),
            height: tmpResult10.withSpring(size.height, CHANNEL_SPRING_CONFIG),
            cornerRadius: tmpResult11.withSpring(size.cornerRadius, CHANNEL_SPRING_CONFIG),
          };
          tmpResult = spring;
          tmpResult8 = spring;
          tmpResult9 = spring;
          tmpResult10 = spring;
          point = size1;
          tmpResult11 = spring;
        } else {
          point = {
            shape: ClipView.CutoutShape.Circle,
            x: tmpResult12.withSpring(size.x, CHANNEL_SPRING_CONFIG),
            y: tmpResult13.withSpring(size.y, CHANNEL_SPRING_CONFIG),
            size: tmpResult14.withSpring(size.size, CHANNEL_SPRING_CONFIG),
          };
          tmpResult12 = spring;
          tmpResult13 = spring;
          tmpResult14 = spring;
        }
        const obj = { cutouts: items };
        items = [point];
        return obj;
      };
      fn.__closure = {
        cutout,
        CutoutShape: cutout(8502).CutoutShape,
        withSpring: cutout(5604).withSpring,
        CHANNEL_SPRING_CONFIG,
      };
      fn.__workletHash = 12529564164821;
      fn.__initData = __initData;
      ({ cutout, CutoutShape: cutout(8502).CutoutShape, withSpring: cutout(5604).withSpring, CHANNEL_SPRING_CONFIG });
      const animatedProps = obj2.useAnimatedProps(fn);
      if (cResult[0] !== source) {
        const tmp7 = getReactNativeSVGImageSourceDefault(source);
        cResult[0] = source;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== imageStyle) {
        let items = [obj2.image, imageStyle];
        cResult[2] = imageStyle;
        cResult[3] = items;
        tmp8 = items;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        let tmp10;
        if (cResult[5] === tmp8) {
          tmp10 = cResult[6];
        }
        if (cResult[7] === animatedProps) {
          if (cResult[8] === style) {
            let tmp12;
            if (cResult[9] === tmp10) {
              tmp12 = cResult[10];
            }
            return tmp12;
          }
        }
        const obj4 = { style, animatedProps, children: tmp10 };
        const tmp14 = closure_7(tmp(8502).ClipViewAnimated, obj4);
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
    }
  : (cutout) => {
      let imageStyle;
      let items;
      let obj4;
      let source;
      let style;
      cutout = cutout.cutout;
      ({ source, style, imageStyle } = cutout);
      let obj = cutout(4618);
      const fn = function n() {
        let items;
        let point;
        let tmpResult;
        let tmpResult10;
        let tmpResult11;
        let tmpResult12;
        let tmpResult13;
        let tmpResult14;
        let tmpResult8;
        let tmpResult9;
        size = cutout;
        if (cutout.shape === ClipView.CutoutShape.RoundedRect) {
          const size1 = {
            shape: ClipView.CutoutShape.RoundedRect,
            x: tmpResult.withSpring(size.x, CHANNEL_SPRING_CONFIG),
            y: tmpResult8.withSpring(size.y, CHANNEL_SPRING_CONFIG),
            width: tmpResult9.withSpring(size.width, CHANNEL_SPRING_CONFIG),
            height: tmpResult10.withSpring(size.height, CHANNEL_SPRING_CONFIG),
            cornerRadius: tmpResult11.withSpring(size.cornerRadius, CHANNEL_SPRING_CONFIG),
          };
          tmpResult = spring;
          tmpResult8 = spring;
          tmpResult9 = spring;
          tmpResult10 = spring;
          point = size1;
          tmpResult11 = spring;
        } else {
          point = {
            shape: ClipView.CutoutShape.Circle,
            x: tmpResult12.withSpring(size.x, CHANNEL_SPRING_CONFIG),
            y: tmpResult13.withSpring(size.y, CHANNEL_SPRING_CONFIG),
            size: tmpResult14.withSpring(size.size, CHANNEL_SPRING_CONFIG),
          };
          tmpResult12 = spring;
          tmpResult13 = spring;
          tmpResult14 = spring;
        }
        const obj = { cutouts: items };
        items = [point];
        return obj;
      };
      obj2 = {
        cutout,
        CutoutShape: cutout(8502).CutoutShape,
        withSpring: cutout(5604).withSpring,
        CHANNEL_SPRING_CONFIG,
      };
      fn.__closure = obj2;
      fn.__workletHash = 6509713032566;
      fn.__initData = __initData2;
      const animatedProps = obj.useAnimatedProps(fn);
      const obj3 = { style, animatedProps, children: closure_7(FastImageDefault, obj4) };
      const tmp2 = getReactNativeSVGImageSourceDefault(source);
      const ClipViewAnimated = cutout(8502).ClipViewAnimated;
      obj4 = { style: items, source: tmp2, usesSmallCache: true };
      items = [obj2.image, imageStyle];
      return closure_7(ClipViewAnimated, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (animate) => {
      let tmp2;
      const obj = react2;
      const cResult = obj.c(4);
      if (true === animate.animate) {
        let tmp9;
        if (cResult[0] !== animate) {
          obj2 = {};
          const merged = Object.assign(animate);
          const tmp15 = metroImportDefault(closure_17, obj2);
          cResult[0] = animate;
          cResult[1] = tmp15;
          tmp9 = tmp15;
        } else {
          tmp9 = cResult[1];
        }
        tmp2 = tmp9;
      } else if (cResult[2] !== animate) {
        const obj3 = {};
        const merged1 = Object.assign(animate);
        const tmp8 = metroImportDefault(closure_14, obj3);
        cResult[2] = animate;
        cResult[3] = tmp8;
        tmp2 = tmp8;
      } else {
        tmp2 = cResult[3];
      }
      return tmp2;
    }
  : (animate) => {
      let tmp6;
      if (true === animate.animate) {
        obj2 = {};
        const merged = Object.assign(animate);
        tmp6 = metroImportDefault(closure_17, obj2);
      } else {
        const obj = {};
        const merged1 = Object.assign(animate);
        tmp6 = metroImportDefault(closure_14, obj);
      }
      return tmp6;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled();
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let animate;
        let animate2;
        let channel;
        let cutout;
        let size2;
        let source;
        let style;
        let user;
        const obj = react2;
        const cResult = obj.c(28);
        ({ animate, cutout, size, style } = arg0);
        if (cResult[0] === style) {
          let tmp7;
          let avatarSource;
          if (cResult[1] === obj2[size]) {
            tmp7 = cResult[2];
          }
          if (cResult[3] === arg0) {
            if (cResult[4] === (true === animate && null == cutout)) {
              let tmp11;
              let tmp12;
              let tmp13;
              if (cResult[5] === frozen[size]) {
                tmp11 = cResult[6];
                tmp12 = cResult[7];
                tmp13 = cResult[8];
              }
              const _Symbol2 = Symbol;
              if (tmp13 !== Symbol.for("react.early_return_sentinel")) {
                return tmp13;
              } else if (null != cutout) {
                let tmp41;
                const nativeCutouts = cutout.nativeCutouts;
                let length;
                if (nativeCutouts != null) {
                  length = nativeCutouts.length;
                }
                if (1 === length) {
                  if (cResult[9] === animate) {
                    if (cResult[10] === tmp5.borderRadii[size]) {
                      if (cResult[11] === cutout.nativeCutouts[0]) {
                        if (cResult[12] === tmp11) {
                          let tmp45;
                          if (cResult[13] === tmp7) {
                            tmp45 = cResult[14];
                          }
                          tmp41 = tmp45;
                        }
                      }
                    }
                  }
                  obj2 = {
                    animate,
                    cutout: cutout.nativeCutouts[0],
                    source: tmp11,
                    style: tmp7,
                    imageStyle: tmp5.borderRadii[size],
                  };
                  const tmp48 = metroImportDefault(closure_18, obj2);
                  cResult[9] = animate;
                  cResult[10] = tmp5.borderRadii[size];
                  cResult[11] = cutout.nativeCutouts[0];
                  cResult[12] = tmp11;
                  cResult[13] = tmp7;
                  cResult[14] = tmp48;
                  tmp45 = tmp48;
                } else {
                  if (cResult[15] === animate) {
                    if (cResult[16] === cutout) {
                      if (cResult[17] === frozen[size]) {
                        if (cResult[18] === tmp11) {
                          if (cResult[19] === tmp7) {
                            tmp41 = cResult[20];
                          }
                        }
                      }
                    }
                  }
                  const obj3 = { style: tmp7, size: frozen[size], animate, cutout, source: tmp11 };
                  const tmp44 = metroImportDefault(CutoutAvatarImage, obj3);
                  cResult[15] = animate;
                  cResult[16] = cutout;
                  cResult[17] = frozen[size];
                  cResult[18] = tmp11;
                  cResult[19] = tmp7;
                  cResult[20] = tmp44;
                  tmp41 = tmp44;
                }
                return tmp41;
              } else {
                if (cResult[21] === tmp5.borderRadii[size]) {
                  let tmp34;
                  if (cResult[22] === tmp7) {
                    tmp34 = cResult[23];
                  }
                  let tmp35;
                  if (typeof tmp12 === "number") {
                    tmp35 = tmp12;
                  }
                  if (cResult[24] === tmp11) {
                    if (cResult[25] === tmp34) {
                      let tmp36;
                      if (cResult[26] === tmp35) {
                        tmp36 = cResult[27];
                      }
                      return tmp36;
                    }
                  }
                  const obj4 = { style: tmp34, source: tmp11, placeholder: tmp35, usesSmallCache: true };
                  const tmp39 = metroImportDefault(FastImageDefault, obj4, "image");
                  cResult[24] = tmp11;
                  cResult[25] = tmp34;
                  cResult[26] = tmp35;
                  cResult[27] = tmp39;
                  tmp36 = tmp39;
                }
                const items = [tmp7, tmp5.borderRadii[size]];
                cResult[21] = tmp5.borderRadii[size];
                cResult[22] = tmp7;
                cResult[23] = items;
                tmp34 = items;
              }
            }
          }
          const _Symbol = Symbol;
          obj6 = { animate: true === animate && null == cutout, size: frozen[size] };
          const forResult = Symbol.for("react.early_return_sentinel");
          const merged = Object.assign(arg0);
          ({ source, user, channel, animate: animate2, size: size2 } = obj6);
          if (null != source) {
            let sourceResult = source;
            if (typeof source === "function") {
              sourceResult = source(animate2);
            }
            avatarSource = sourceResult;
          } else if (null != user) {
            avatarSource = user.getAvatarSource(tmp19, animate2, size2);
          } else if (null != channel) {
            const tmpResult = getChannelIcon;
            const channelIconURL = tmpResult.getChannelIconURL(channel, size2);
            let tmp25 = channelIconURL;
            if (typeof channelIconURL !== "number") {
              tmp25 = channelIconURL;
              if (null != channelIconURL) {
                tmp25 = { uri: channelIconURL };
                const obj7 = { uri: channelIconURL };
              }
            }
            avatarSource = tmp25;
          } else {
            logger.warn("No image found from provided data");
          }
          let tmp27 = null;
          let tmp28;
          if (null != avatarSource) {
            const user2 = obj6.user;
            let source1;
            if (null != user2) {
              if (!tmp29) {
                const makeSource = AvatarUtilsDefault.makeSource;
                AvatarUtilsDefault;
                obj5 = AvatarUtilsDefault;
                source1 = makeSource(obj5.getDefaultAvatarURL(user2.id, user2.discriminator));
              }
            }
            tmp28 = source1;
            tmp27 = forResult;
          }
          cResult[3] = arg0;
          cResult[4] = true === animate && null == cutout;
          cResult[5] = frozen[size];
          cResult[6] = avatarSource;
          cResult[7] = tmp28;
          cResult[8] = tmp27;
          tmp13 = tmp27;
          tmp12 = tmp28;
          tmp11 = avatarSource;
        }
        const items1 = [obj2[size], style];
        cResult[0] = style;
        cResult[1] = obj2[size];
        cResult[2] = items1;
        tmp7 = items1;
      }
    : (style) => {
        let animate;
        let animate2;
        let avatarSource;
        let channel;
        let cutout;
        let items1;
        let size2;
        let source;
        let tmp23;
        let tmp4;
        let user;
        ({ animate, cutout, size } = style);
        const items = [obj2[size], style.style];
        const obj = { animate: tmp4, size: frozen[size] };
        const merged = Object.assign(style);
        tmp4 = true === animate && null == cutout;
        ({ source, user, channel, animate: animate2, size: size2 } = obj);
        if (null != source) {
          let sourceResult = source;
          if (typeof source === "function") {
            sourceResult = source(animate2);
          }
          avatarSource = sourceResult;
        } else if (null != user) {
          avatarSource = user.getAvatarSource(tmp6, animate2, size2);
        } else if (null != channel) {
          obj2 = getChannelIcon;
          const channelIconURL = obj2.getChannelIconURL(channel, size2);
          let tmp13 = channelIconURL;
          if (typeof channelIconURL !== "number") {
            tmp13 = channelIconURL;
            if (null != channelIconURL) {
              tmp13 = { uri: channelIconURL };
              const obj3 = { uri: channelIconURL };
            }
          }
          avatarSource = tmp13;
        } else {
          logger.warn("No image found from provided data");
        }
        if (null == avatarSource) {
          return null;
        } else {
          let source1;
          let tmp19Result;
          const user2 = obj.user;
          if (null != user2) {
            if (!tmp31) {
              const makeSource = AvatarUtilsDefault.makeSource;
              AvatarUtilsDefault;
              const obj4 = AvatarUtilsDefault;
              source1 = makeSource(obj4.getDefaultAvatarURL(user2.id, user2.discriminator));
            }
          }
          if (null != cutout) {
            let tmp28;
            const nativeCutouts = cutout.nativeCutouts;
            let length;
            if (nativeCutouts != null) {
              length = nativeCutouts.length;
            }
            if (1 === length) {
              obj5 = {
                animate,
                cutout: cutout.nativeCutouts[0],
                source: avatarSource,
                style: items,
                imageStyle: obj2.borderRadii[size],
              };
              tmp28 = metroImportDefault(closure_18, obj5);
            } else {
              obj6 = { style: items, size: frozen[size], animate, cutout, source: avatarSource };
              tmp28 = metroImportDefault(CutoutAvatarImage, obj6);
            }
            tmp19Result = tmp28;
          } else {
            const obj7 = { style: items1, source: avatarSource, placeholder: tmp23, usesSmallCache: true };
            items1 = [items, obj2.borderRadii[size]];
            tmp23 = undefined;
            const tmp22 = FastImageDefault;
            if (typeof source1 === "number") {
              tmp23 = source1;
            }
            tmp19Result = metroImportDefault(tmp22, obj7, "image");
          }
          return tmp19Result;
        }
      },
  function customShallowEqual(source, source2) {
    if (shallowEqualDefault(source, source2, ["source"])) {
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
                    while (shallowEqualDefault(source[num], source1[num])) {
                      num = num + 1;
                    }
                    return false;
                  }
                  return true;
                }
              }
            }
            const tmp3 =
              typeof source1 !== "object" || typeof source !== "object" || shallowEqualDefault(source1, source);
            return tmp3;
          }
        }
        return false;
      }
    } else {
      return false;
    }
  },
);
let size = size_mod;
let result = size.fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default memoResult;
export const AvatarSizes = obj;
export const AVATAR_SIZE_MAP = frozen;
export const styles = obj2;
export const CutoutDirection = obj5;
export const CutoutType = obj6;
