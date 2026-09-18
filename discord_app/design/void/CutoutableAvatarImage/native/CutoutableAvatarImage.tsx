// === Module 13274: CutoutableAvatarImage ===

// Module 13274 (CutoutableAvatarImage)
import LoggerDefault from "Logger" /* 3 */;
import discord_common_shallowEqualDefault from "discord_common/shallowEqual" /* 558 */;
import v1 from "v1" /* 1255 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import spring from "spring" /* 5143 */;
import FastImageDefault from "FastImage" /* 5757 */;
import ClipView from "ClipView" /* 9054 */;
import getChannelIcon from "getChannelIcon" /* 13276 */;
import getReactNativeSVGImageSourceDefault from "getReactNativeSVGImageSource" /* 13277 */;
import noop from "module_19" /* 19 */;

const ClipViewDefault = ClipView;

const inlineStyles = Circle(8689);
const inlineStylesDefault = tmp9(8689);
require = fn;
function StaticNativeCutoutAvatarImage(cutout) {
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
}
function AnimatedNativeCutoutAvatarImage(cutout) {
  cutout = cutout.cutout;
  ({ source, style, imageStyle } = cutout);
  const fn = function h() {
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
  obj2 = { cutout, CutoutShape: cutout(9054).CutoutShape, withSpring: cutout(5143).withSpring, CHANNEL_SPRING_CONFIG };
  fn.__closure = obj2;
  fn.__workletHash = 12529564164821;
  fn.__initData = __initData;
  const animatedProps = cutout(4458).useAnimatedProps(fn);
  let obj = cutout(4458);
  const obj3 = { style, animatedProps, children: null };
  const obj4 = { style: null, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true };
  let items = [obj2.image, imageStyle];
  obj4.style = items;
  obj3.children = closure_7(FastImageDefault, obj4);
  return closure_7(cutout(9054).ClipViewAnimated, obj3);
}
function NativeCutoutAvatarImage(animate) {
  if (true === animate.animate) {
    obj2 = {};
    const merged = Object.assign(animate);
    let tmp6 = React5(AnimatedNativeCutoutAvatarImage, obj2);
  } else {
    const obj = {};
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
    CIRCULAR = obj6.CIRCULAR;
  }
  let diff = size - num;
  let diff1 = size;
  if (CIRCULAR === obj6.CIRCULAR) {
    diff1 = result;
  }
  const direction = cutout.direction;
  if (obj5.BOTTOM_RIGHT === direction) {
    diff = size - radius - num;
    diff1 = size - radius - num;
  } else if (tmp6.BOTTOM_LEFT === direction) {
    diff = radius + num;
    diff1 = size - radius - num;
  }
  let Circle = require;
  let obj = dependencyMap;
  const v4Result = v1.v4();
  const tintColor = React4.flatten(style).tintColor;
  if (null != source) {
    if (null != tintColor) {
      const size1 = { x: "0", y: "0", height: "100%", width: "100%", mask: null, children: null };
      const _HermesInternal = HermesInternal;
      size1.mask = "url(#" + v4Result + ")";
      const obj3 = { style: null, source: null, usesSmallCache: true };
      const obj4 = { tintColor };
      obj3.style = obj4;
      obj3.source = getReactNativeSVGImageSourceDefault(source);
      size1.children = React5(FastImageDefault, obj3);
      let tmp8 = React5(inlineStyles.ForeignObject, size1);
      let tmp10 = React5;
    }
    obj5 = { style, children: null };
    const size2 = { width: size, height: size, id: v4Result, children: null };
    if (CIRCULAR === tmp4.CIRCULAR) {
      obj6 = { cx: result, cy: result, r: result, fill: "white" };
      let tmp10Result = tmp10(inlineStyles.Circle, obj6);
    } else {
      const size3 = { x: 0, y: 0, height: size, width: size, fill: "white" };
      tmp10Result = tmp10(inlineStyles.Rect, size3);
    }
    const obj7 = { children: null };
    const items = [tmp10Result, ];
    const obj8 = { cx: diff, cy: diff1, r: radius, fill: "black" };
    items[1] = tmp10(inlineStyles.Circle, obj8);
    size2.children = items;
    obj7.children = React6(inlineStyles.Mask, size2);
    const items1 = [tmp10(inlineStyles.Defs, obj7), tmp8, ];
    if (null == cutout.border) {
      const size4 = { height: "100%", width: "100%", children: null };
      items1[2] = null;
      size4.children = items1;
      obj5.children = React6(tmp9Result, size4);
      return tmp10(hasOwnProperty, obj5);
    } else if (CIRCULAR === tmp4.CIRCULAR) {
      Circle = inlineStyles.Circle;
      obj = { cx: result, cy: result, r: result, fill: "none", mask: null, stroke: null, strokeWidth: null };
      const _HermesInternal3 = HermesInternal;
      obj.mask = "url(#" + v4Result + ")";
      obj.stroke = cutout.border.color;
      cutout = cutout.border.width;
      obj.strokeWidth = cutout;
      let tmp10Result2 = tmp10(Circle, obj);
    } else {
      const size5 = { x: 0, y: 0, height: size, width: size, fill: "none", mask: null, stroke: null, strokeWidth: null };
      const _HermesInternal2 = HermesInternal;
      size5.mask = "url(#" + v4Result + ")";
      size5.stroke = cutout.border.color;
      size5.strokeWidth = cutout.border.width;
      tmp10Result2 = tmp10(inlineStyles.Rect, size5);
    }
    tmp9Result = inlineStylesDefault;
  }
  const size6 = { x: "0", y: "0", height: "100%", width: "100%", href: getReactNativeSVGImageSourceDefault(source), mask: "url(#" + v4Result + ")" };
  tmp8 = React5(inlineStyles.Image, size6);
  tmp10 = React5;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const CHANNEL_SPRING_CONFIG = fn(13275).CHANNEL_SPRING_CONFIG;
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
const __initData = { code: "function CutoutableAvatarImageTsx1(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}" };
let obj4 = { borderRadius: frozen[obj.XXSMALL] / 2 };
let tmp4 = new LoggerDefault("UIKit - AvatarImage");
let size = fn(2);
let result = size.fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default noop.memo((style) => {
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
        let tmp26 = React5(NativeCutoutAvatarImage, obj6);
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
export const AvatarSizes = obj;
export const AVATAR_SIZE_MAP = frozen;
export const styles = obj2;
export const CutoutDirection = obj5;
export const CutoutType = obj6;