// === Module 13028: CutoutableAvatarImage ===

// Module 13028 (CutoutableAvatarImage)
import LoggerDefault from "Logger" /* 3 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import v1 from "v1" /* 1256 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import FastImageDefault from "FastImage" /* 5587 */;
import ClipView from "ClipView" /* 8813 */;
import getChannelIcon from "getChannelIcon" /* 13030 */;
import getReactNativeSVGImageSourceDefault from "getReactNativeSVGImageSource" /* 13031 */;
import noop from "module_19" /* 19 */;

const ClipViewDefault = ClipView;

const inlineStyles = Circle(8453);
const inlineStylesDefault = tmp9(8453);
require = fn;
function StaticNativeCutoutAvatarImage(cutout) {
  cutout = cutout.cutout;
  let items = [cutout];
  ({ source, style, imageStyle } = cutout);
  const memo = noop.useMemo(() => {
    const items = [cutout];
    return items;
  }, items);
  obj = { style, cutouts: memo, children: null };
  const tmp2 = getReactNativeSVGImageSourceDefault(source);
  obj = { style: null, source: tmp2, usesSmallCache: true };
  const items1 = [obj.image, imageStyle];
  obj.style = items1;
  obj.children = React5(FastImageDefault, obj);
  return React5(ClipViewDefault, obj);
}
function AnimatedNativeCutoutAvatarImage(cutout) {
  cutout = cutout.cutout;
  ({ source, style, imageStyle } = cutout);
  cutout(4296);
  const fn = function h() {
    let size = cutout;
    if (cutout.shape === ClipView.CutoutShape.RoundedRect) {
      size = { shape: tmp(8813).CutoutShape.RoundedRect, x: null, y: null, width: null, height: null, cornerRadius: null };
      let tmpResult = tmp(4974);
      size.x = tmpResult.withSpring(size.x, CHANNEL_SPRING_CONFIG);
      tmpResult = tmp(4974);
      size.y = tmpResult.withSpring(size.y, CHANNEL_SPRING_CONFIG);
      size.width = tmp(4974).withSpring(size.width, CHANNEL_SPRING_CONFIG);
      const tmpResult1 = tmp(4974);
      size.height = tmp(4974).withSpring(size.height, CHANNEL_SPRING_CONFIG);
      const tmpResult2 = tmp(4974);
      size.cornerRadius = tmp(4974).withSpring(size.cornerRadius, CHANNEL_SPRING_CONFIG);
      let point = size;
      const tmpResult3 = tmp(4974);
    } else {
      point = { shape: tmp(8813).CutoutShape.Circle, x: tmp(4974).withSpring(size.x, CHANNEL_SPRING_CONFIG), y: null, size: null };
      const tmpResult4 = tmp(4974);
      point.y = tmp(4974).withSpring(size.y, CHANNEL_SPRING_CONFIG);
      const tmpResult5 = tmp(4974);
      point.size = tmp(4974).withSpring(size.size, CHANNEL_SPRING_CONFIG);
      const tmpResult6 = tmp(4974);
    }
    obj = { cutouts: null };
    const items = [point];
    obj.cutouts = items;
    return obj;
  };
  let __closure = { cutout, CutoutShape: cutout(8813).CutoutShape, withSpring: cutout(4974).withSpring, CHANNEL_SPRING_CONFIG };
  fn.__closure = __closure;
  fn.__workletHash = 12529564164821;
  fn.__initData = __initData;
  const animatedProps = __closure.useAnimatedProps(fn);
  __closure = { style, animatedProps, children: null };
  const obj1 = { style: null, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true };
  let items = [__closure.image, imageStyle];
  obj1.style = items;
  __closure.children = closure_7(FastImageDefault, obj1);
  return closure_7(cutout(8813).ClipViewAnimated, __closure);
}
function NativeCutoutAvatarImage(animate) {
  if (true === animate.animate) {
    obj = {};
    const merged = Object.assign(animate);
    let tmp6 = React5(AnimatedNativeCutoutAvatarImage, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(animate);
    tmp6 = React5(StaticNativeCutoutAvatarImage, obj);
  }
  return tmp6;
}
function CutoutAvatarImage(arg0) {
  ({ cutout, size, source, style } = arg0);
  const result = size / 2;
  let radius = cutout.radius;
  if (radius == null) {
    radius = result;
  }
  let num = cutout.inset;
  if (num == null) {
    num = 0;
  }
  let CIRCULAR = cutout.imageType;
  if (CIRCULAR == null) {
    CIRCULAR = obj4.CIRCULAR;
  }
  let diff = size - num;
  let diff1 = size;
  if (CIRCULAR === obj4.CIRCULAR) {
    diff1 = result;
  }
  const direction = cutout.direction;
  if (obj3.BOTTOM_RIGHT === direction) {
    diff = size - radius - num;
    diff1 = size - radius - num;
  } else if (tmp6.BOTTOM_LEFT === direction) {
    diff = radius + num;
    diff1 = size - radius - num;
  }
  let Circle = require;
  style = dependencyMap;
  let obj1 = v1;
  const v4Result = obj1.v4();
  const tintColor = React4.flatten(style).tintColor;
  if (null != source) {
    if (null != tintColor) {
      size = { x: "0", y: "0", height: "100%", width: "100%", mask: null, children: null };
      const _HermesInternal = HermesInternal;
      size.mask = "url(#" + v4Result + ")";
      style = { style: null, source: null, usesSmallCache: true };
      style = { tintColor };
      style.style = style;
      style.source = getReactNativeSVGImageSourceDefault(source);
      size.children = React5(FastImageDefault, style);
      let tmp8 = React5(inlineStyles.ForeignObject, size);
      let tmp10 = React5;
    }
    obj1 = { style, children: null };
    const size1 = { width: size, height: size, id: v4Result, children: null };
    if (CIRCULAR === tmp4.CIRCULAR) {
      const obj2 = { cx: result, cy: result, r: result, fill: "white" };
      let tmp10Result = tmp10(inlineStyles.Circle, obj2);
    } else {
      const size2 = { x: 0, y: 0, height: size, width: size, fill: "white" };
      tmp10Result = tmp10(inlineStyles.Rect, size2);
    }
    obj3 = { children: null };
    const items = [tmp10Result, ];
    obj4 = { cx: diff, cy: diff1, r: radius, fill: "black" };
    items[1] = tmp10(inlineStyles.Circle, obj4);
    size1.children = items;
    obj3.children = React6(inlineStyles.Mask, size1);
    const items1 = [tmp10(inlineStyles.Defs, obj3), tmp8, ];
    if (null == cutout.border) {
      const size3 = { height: "100%", width: "100%", children: null };
      items1[2] = null;
      size3.children = items1;
      obj1.children = tmp16(tmp9Result, size3);
      return tmp10(tmp15, obj1);
    } else if (CIRCULAR === tmp4.CIRCULAR) {
      Circle = inlineStyles.Circle;
      style = { cx: result, cy: result, r: result, fill: "none", mask: null, stroke: null, strokeWidth: null };
      const _HermesInternal3 = HermesInternal;
      style.mask = "url(#" + v4Result + ")";
      style.stroke = cutout.border.color;
      cutout = cutout.border.width;
      style.strokeWidth = cutout;
      tmp10Result = tmp10(Circle, style);
    } else {
      const size4 = { x: 0, y: 0, height: size, width: size, fill: "none", mask: null, stroke: null, strokeWidth: null };
      const _HermesInternal2 = HermesInternal;
      size4.mask = "url(#" + v4Result + ")";
      size4.stroke = cutout.border.color;
      size4.strokeWidth = cutout.border.width;
      tmp10Result = tmp10(inlineStyles.Rect, size4);
    }
    tmp15 = hasOwnProperty;
    tmp9Result = inlineStylesDefault;
  }
  const size5 = { x: "0", y: "0", height: "100%", width: "100%", href: getReactNativeSVGImageSourceDefault(source), mask: "url(#" + v4Result + ")" };
  tmp8 = React5(inlineStyles.Image, size5);
  tmp10 = React5;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CHANNEL_SPRING_CONFIG = fn(13029).CHANNEL_SPRING_CONFIG;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const logger = new LoggerDefault("UIKit - AvatarImage");
let styles = { XXSMALL: "xxsmall", XSMALL: "xsmall", SMALL: "small", NORMAL: "normal", LARGE: "large", XLARGE: "xlarge", XLARGE_72: "xlarge72", XXLARGE: "xxlarge", PROFILE: "profile", REFRESH_MEDIUM_32: "refreshMedium32", XXSMALL_10: "xsmall10", XSMALL_20: "xsmall20", SIZE_16: "size16", LARGE_48: "large48", EDIT_AVATAR_DECORATION: "editAvatarDecoration", GIFT_START: "giftStart", GIFT_SUCCESS: "giftSuccess", YOUBAR_60: "youBar60", TABS_22: "tabs22" };
const frozen = Object.freeze({ [styles.XXSMALL_10]: 10, [styles.SIZE_16]: 16, [styles.XXSMALL]: 18, [styles.XSMALL_20]: 20, [styles.XSMALL]: 24, [styles.SMALL]: 30, [styles.NORMAL]: 40, [styles.LARGE_48]: 48, [styles.LARGE]: 50, [styles.XLARGE]: 64, [styles.XLARGE_72]: 72, [styles.XXLARGE]: 80, [styles.PROFILE]: 128, [styles.EDIT_AVATAR_DECORATION]: 144, [styles.GIFT_START]: 184, [styles.GIFT_SUCCESS]: 236, [styles.REFRESH_MEDIUM_32]: 32, [styles.YOUBAR_60]: 60, [styles.TABS_22]: 22 });
styles = { image: { width: "100%", height: "100%" }, xxsmall: { width: frozen[styles.XXSMALL], height: frozen[styles.XXSMALL] }, xsmall10: { width: frozen[styles.XXSMALL_10], height: frozen[styles.XXSMALL_10] }, xsmall20: { width: frozen[styles.XSMALL_20], height: frozen[styles.XSMALL_20] }, xsmall: { width: frozen[styles.XSMALL], height: frozen[styles.XSMALL] }, small: { width: frozen[styles.SMALL], height: frozen[styles.SMALL] }, normal: { width: frozen[styles.NORMAL], height: frozen[styles.NORMAL] }, large: { width: frozen[styles.LARGE], height: frozen[styles.LARGE] }, xlarge: { width: frozen[styles.XLARGE], height: frozen[styles.XLARGE] }, xlarge72: { width: frozen[styles.XLARGE_72], height: frozen[styles.XLARGE_72] }, xxlarge: { width: frozen[styles.XXLARGE], height: frozen[styles.XXLARGE] }, refreshMedium32: { width: frozen[styles.REFRESH_MEDIUM_32], height: frozen[styles.REFRESH_MEDIUM_32] }, profile: { width: frozen[styles.PROFILE], height: frozen[styles.PROFILE] }, size16: { width: frozen[styles.SIZE_16], height: frozen[styles.SIZE_16] }, large48: { width: frozen[styles.LARGE_48], height: frozen[styles.LARGE_48] }, editAvatarDecoration: { width: frozen[styles.EDIT_AVATAR_DECORATION], height: frozen[styles.EDIT_AVATAR_DECORATION] }, giftStart: { width: frozen[styles.GIFT_START], height: frozen[styles.GIFT_START] }, giftSuccess: { width: frozen[styles.GIFT_SUCCESS], height: frozen[styles.GIFT_SUCCESS] }, youBar60: { width: frozen[styles.YOUBAR_60], height: frozen[styles.YOUBAR_60] }, tabs22: { width: frozen[styles.TABS_22], height: frozen[styles.TABS_22] }, borderRadii: null };
let obj1 = { xxsmall: { borderRadius: frozen[styles.XXSMALL] / 2 }, xsmall10: { borderRadius: frozen[styles.XXSMALL_10] / 2 }, xsmall20: { borderRadius: frozen[styles.XSMALL_20] / 2 }, xsmall: { borderRadius: frozen[styles.XSMALL] / 2 }, small: { borderRadius: frozen[styles.SMALL] / 2 }, normal: { borderRadius: frozen[styles.NORMAL] / 2 }, large: { borderRadius: frozen[styles.LARGE] / 2 }, xlarge: { borderRadius: frozen[styles.XLARGE] / 2 }, xlarge72: { borderRadius: frozen[styles.XLARGE_72] / 2 }, xxlarge: { borderRadius: frozen[styles.XXLARGE] / 2 }, refreshMedium32: { borderRadius: frozen[styles.REFRESH_MEDIUM_32] / 2 }, profile: { borderRadius: frozen[styles.PROFILE] / 2 }, size16: { borderRadius: frozen[styles.SIZE_16] / 2 }, large48: { borderRadius: frozen[styles.LARGE_48] / 2 }, editAvatarDecoration: { borderRadius: frozen[styles.EDIT_AVATAR_DECORATION] / 2 }, giftStart: { borderRadius: frozen[styles.GIFT_START] / 2 }, giftSuccess: { borderRadius: frozen[styles.GIFT_SUCCESS] / 2 }, youBar60: { borderRadius: frozen[styles.YOUBAR_60] / 2 }, tabs22: { borderRadius: frozen[styles.TABS_22] / 2 } };
styles.borderRadii = obj1;
let obj3 = { RIGHT: 0, [0]: "RIGHT", BOTTOM_RIGHT: 1, [1]: "BOTTOM_RIGHT", BOTTOM_LEFT: 2, [2]: "BOTTOM_LEFT" };
let obj4 = { RECTANGULAR: 0, [0]: "RECTANGULAR", CIRCULAR: 1, [1]: "CIRCULAR" };
const __initData = { code: "function CutoutableAvatarImageTsx1(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}" };
let obj2 = { borderRadius: frozen[styles.XXSMALL] / 2 };
let tmp4 = new LoggerDefault("UIKit - AvatarImage");
let size = fn(2);
let result = size.fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default noop.memo((style) => {
  ({ animate, cutout, size } = style);
  const items = [obj[size], style.style];
  obj = {};
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
    let obj1 = getChannelIcon;
    const channelIconURL = obj1.getChannelIconURL(channel, size2);
    let tmp13 = channelIconURL;
    if (typeof channelIconURL !== "number") {
      tmp13 = channelIconURL;
      if (null != channelIconURL) {
        obj = { uri: channelIconURL };
        tmp13 = obj;
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
        obj4 = AvatarUtilsDefault;
        source = obj4.makeSource(AvatarUtilsDefault.getDefaultAvatarURL(user2.id, user2.discriminator));
      }
    }
    if (null != cutout) {
      const nativeCutouts = cutout.nativeCutouts;
      let length;
      if (nativeCutouts != null) {
        length = nativeCutouts.length;
      }
      if (1 === length) {
        obj = { animate, cutout: null, source: null, style: null, imageStyle: null };
        cutout = cutout.nativeCutouts[0];
        obj.cutout = cutout;
        obj.source = avatarSource;
        obj.style = items;
        obj.imageStyle = tmp2;
        let tmp26 = React5(NativeCutoutAvatarImage, obj);
      } else {
        obj1 = { style: items, size: tmp, animate, cutout, source: avatarSource };
        tmp26 = React5(CutoutAvatarImage, obj1);
      }
    } else {
      const obj2 = { style: null, source: null, placeholder: null, usesSmallCache: true };
      const items1 = [items, tmp2];
      obj2.style = items1;
      obj2.source = avatarSource;
      let tmp22;
      if (typeof source === "number") {
        tmp22 = source;
      }
      obj2.placeholder = tmp22;
      return React5(FastImageDefault, obj2, "image");
    }
  }
}, function customShallowEqual(source, source2) {
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
export const AvatarSizes = styles;
export const AVATAR_SIZE_MAP = frozen;
export { styles };
export const CutoutDirection = obj3;
export const CutoutType = obj4;