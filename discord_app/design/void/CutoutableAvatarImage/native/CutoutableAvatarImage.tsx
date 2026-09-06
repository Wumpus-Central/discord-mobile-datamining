// === Module 13028: StaticNativeCutoutAvatarImage ===

// Module 13028 (StaticNativeCutoutAvatarImage)
import timestampDefault from "timestamp" /* 3 */;
import shallowEqualDefault from "shallowEqual" /* 558 */;
import v1 from "v1" /* 1256 */;
import getAvatarURLDefault from "getAvatarURL" /* 1396 */;
import preloadDefault from "preload" /* 5587 */;
import inlineStyles from "inlineStyles" /* 8453 */;
import inlineStylesDefault from "inlineStyles" /* 8453 */;
import SolidCutoutDefault from "SolidCutout" /* 8813 */;
import getChannelIconURL from "getChannelIconURL" /* 13030 */;
import getReactNativeSVGImageSourceDefault from "getReactNativeSVGImageSource" /* 13031 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { CHANNEL_SPRING_CONFIG } from "n" /* 13029 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function StaticNativeCutoutAvatarImage(cutout) {
  cutout = cutout.cutout;
  let items = [cutout];
  ({ source, style, imageStyle } = cutout);
  const memo = importAllResult.useMemo(() => {
    const items = [cutout];
    return items;
  }, items);
  obj = { style, cutouts: memo, children: null };
  const tmp2 = getReactNativeSVGImageSourceDefault(source);
  const items1 = [obj.image, imageStyle];
  obj[2] = callback(preloadDefault, { style: items1, source: tmp2, usesSmallCache: true });
  return callback(SolidCutoutDefault, obj);
}
function AnimatedNativeCutoutAvatarImage(cutout) {
  cutout = cutout.cutout;
  ({ source, style, imageStyle } = cutout);
  obj = cutout(4296);
  const fn = function h() {
    const size = cutout;
    if (cutout.shape === cutout(closure_1_2[8]).CutoutShape.RoundedRect) {
      obj = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
      obj[0] = tmp(tmp2[8]).CutoutShape.RoundedRect;
      let tmpResult = tmp(tmp2[11]);
      obj[1] = tmpResult.withSpring(size.x, closure_1_6);
      tmpResult = tmp(tmp2[11]);
      obj[2] = tmpResult.withSpring(size.y, closure_1_6);
      obj[3] = tmp(tmp2[11]).withSpring(size.width, closure_1_6);
      const tmpResult1 = tmp(tmp2[11]);
      obj[4] = tmp(tmp2[11]).withSpring(size.height, closure_1_6);
      const tmpResult2 = tmp(tmp2[11]);
      obj[5] = tmp(tmp2[11]).withSpring(size.cornerRadius, closure_1_6);
      const tmpResult3 = tmp(tmp2[11]);
    } else {
      obj = { shape: null, x: null, y: null, size: null };
      obj[0] = tmp(tmp2[8]).CutoutShape.Circle;
      obj[1] = tmp(tmp2[11]).withSpring(size.x, closure_1_6);
      const tmpResult4 = tmp(tmp2[11]);
      obj[2] = tmp(tmp2[11]).withSpring(size.y, closure_1_6);
      const tmpResult5 = tmp(tmp2[11]);
      obj[3] = tmp(tmp2[11]).withSpring(size.size, closure_1_6);
      const tmpResult6 = tmp(tmp2[11]);
    }
    const cutouts = [obj];
    return { cutouts };
  };
  obj = { cutout, CutoutShape: cutout(8813).CutoutShape, withSpring: cutout(4974).withSpring, CHANNEL_SPRING_CONFIG };
  fn.__closure = obj;
  fn.__workletHash = 12529564164821;
  fn.__initData = closure_15;
  const animatedProps = obj.useAnimatedProps(fn);
  obj = { style, animatedProps, children: callback(preloadDefault, { style: items, source: getReactNativeSVGImageSourceDefault(source), usesSmallCache: true }) };
  items = [obj.image, imageStyle];
  return callback(cutout(8813).ClipViewAnimated, obj);
}
function NativeCutoutAvatarImage(animate) {
  if (true === animate.animate) {
    obj = {};
    const merged = Object.assign(animate);
    let tmp6 = callback(AnimatedNativeCutoutAvatarImage, obj);
  } else {
    obj = {};
    const merged1 = Object.assign(animate);
    tmp6 = callback(StaticNativeCutoutAvatarImage, obj);
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
    CIRCULAR = obj40.CIRCULAR;
  }
  let diff = size - num;
  let diff1 = size;
  if (CIRCULAR === obj40.CIRCULAR) {
    diff1 = result;
  }
  const direction = cutout.direction;
  if (obj39.BOTTOM_RIGHT === direction) {
    diff = size - radius - num;
    diff1 = size - radius - num;
  } else if (tmp6.BOTTOM_LEFT === direction) {
    diff = radius + num;
    diff1 = size - radius - num;
  }
  let Circle = require;
  obj = dependencyMap;
  obj1 = v1;
  const v4Result = obj1.v4();
  const tintColor = closure_4.flatten(style).tintColor;
  if (null != source) {
    if (null != tintColor) {
      obj = { x: "0", y: "0", height: "100%", width: "100%", mask: null, children: null };
      const _HermesInternal = HermesInternal;
      obj[4] = "url(#" + v4Result + ")";
      obj = { style: null, source: null, usesSmallCache: true };
      obj1 = { tintColor: null };
      obj1[0] = tintColor;
      obj[0] = obj1;
      obj[1] = getReactNativeSVGImageSourceDefault(source);
      obj[5] = callback(preloadDefault, obj);
      let tmp8 = callback(inlineStyles.ForeignObject, obj);
      let tmp9 = importDefault;
      let tmp10 = callback;
      const tmp14 = preloadDefault;
    }
    const obj2 = { style: null, children: null };
    obj2[0] = style;
    const obj3 = { width: null, height: null, id: null, children: null };
    obj3[0] = size;
    obj3[1] = size;
    obj3[2] = v4Result;
    if (CIRCULAR === tmp4.CIRCULAR) {
      const obj4 = { cx: null, cy: null, r: null, fill: "white" };
      obj4[0] = result;
      obj4[1] = result;
      obj4[2] = result;
      let tmp10Result = tmp10(inlineStyles.Circle, obj4);
    } else {
      const obj5 = { x: 0, y: 0, height: null, width: null, fill: "white" };
      obj5[2] = size;
      obj5[3] = size;
      tmp10Result = tmp10(inlineStyles.Rect, obj5);
    }
    const obj6 = { children: null };
    const items = [tmp10Result, ];
    const obj7 = { cx: null, cy: null, r: null, fill: "black" };
    obj7[0] = diff;
    obj7[1] = diff1;
    obj7[2] = radius;
    items[1] = tmp10(inlineStyles.Circle, obj7);
    obj3[3] = items;
    obj6[0] = closure_8(inlineStyles.Mask, obj3);
    const items1 = [tmp10(inlineStyles.Defs, obj6), tmp8, ];
    if (null == cutout.border) {
      const obj8 = { height: "100%", width: "100%", children: null };
      items1[2] = null;
      obj8[2] = items1;
      obj2[1] = tmp16(tmp9Result, obj8);
      return tmp10(tmp15, obj2);
    } else if (CIRCULAR === tmp4.CIRCULAR) {
      Circle = inlineStyles.Circle;
      obj = { cx: null, cy: null, r: null, fill: "none", mask: null, stroke: null, strokeWidth: null };
      obj[0] = result;
      obj[1] = result;
      obj[2] = result;
      const _HermesInternal3 = HermesInternal;
      obj[4] = "url(#" + v4Result + ")";
      obj[5] = cutout.border.color;
      cutout = cutout.border.width;
      obj[6] = cutout;
      tmp10Result = tmp10(Circle, obj);
    } else {
      const obj9 = { x: 0, y: 0, height: null, width: null, fill: "none", mask: null, stroke: null, strokeWidth: null };
      obj9[2] = size;
      obj9[3] = size;
      const _HermesInternal2 = HermesInternal;
      obj9[5] = "url(#" + v4Result + ")";
      obj9[6] = cutout.border.color;
      obj9[7] = cutout.border.width;
      tmp10Result = tmp10(inlineStyles.Rect, obj9);
    }
    tmp15 = closure_5;
    tmp9Result = inlineStylesDefault;
  }
  tmp8 = callback(inlineStyles.Image, { x: "0", y: "0", height: "100%", width: "100%", href: getReactNativeSVGImageSourceDefault(source), mask: "url(#" + v4Result + ")" });
  tmp9 = importDefault;
  tmp10 = callback;
}
let c3 = importAllResult;
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = new timestampDefault("UIKit - AvatarImage");
let obj = { XXSMALL: "xxsmall", XSMALL: "xsmall", SMALL: "small", NORMAL: "normal", LARGE: "large", XLARGE: "xlarge", XLARGE_72: "xlarge72", XXLARGE: "xxlarge", PROFILE: "profile", REFRESH_MEDIUM_32: "refreshMedium32", XXSMALL_10: "xsmall10", XSMALL_20: "xsmall20", SIZE_16: "size16", LARGE_48: "large48", EDIT_AVATAR_DECORATION: "editAvatarDecoration", GIFT_START: "giftStart", GIFT_SUCCESS: "giftSuccess", YOUBAR_60: "youBar60", TABS_22: "tabs22" };
const frozen = Object.freeze({ [obj.XXSMALL_10]: 10, [obj.SIZE_16]: 16, [obj.XXSMALL]: 18, [obj.XSMALL_20]: 20, [obj.XSMALL]: 24, [obj.SMALL]: 30, [obj.NORMAL]: 40, [obj.LARGE_48]: 48, [obj.LARGE]: 50, [obj.XLARGE]: 64, [obj.XLARGE_72]: 72, [obj.XXLARGE]: 80, [obj.PROFILE]: 128, [obj.EDIT_AVATAR_DECORATION]: 144, [obj.GIFT_START]: 184, [obj.GIFT_SUCCESS]: 236, [obj.REFRESH_MEDIUM_32]: 32, [obj.YOUBAR_60]: 60, [obj.TABS_22]: 22 });
obj = { image: { width: "100%", height: "100%" }, xxsmall: obj1, xsmall10: obj2, xsmall20: obj3, xsmall: obj4, small: obj5, normal: obj6, large: obj7, xlarge: obj8, xlarge72: obj9, xxlarge: obj10, refreshMedium32: obj11, profile: obj12, size16: obj13, large48: obj14, editAvatarDecoration: obj15, giftStart: obj16, giftSuccess: obj17, youBar60: obj18, tabs22: obj19, borderRadii: { xxsmall: obj20, xsmall10: obj21, xsmall20: obj22, xsmall: obj23, small: obj24, normal: obj25, large: obj26, xlarge: obj27, xlarge72: obj28, xxlarge: obj29, refreshMedium32: obj30, profile: obj31, size16: obj32, large48: obj33, editAvatarDecoration: obj34, giftStart: obj35, giftSuccess: obj36, youBar60: obj37, tabs22: obj38 } };
const obj39 = { RIGHT: 0, [0]: "RIGHT", BOTTOM_RIGHT: 1, [1]: "BOTTOM_RIGHT", BOTTOM_LEFT: 2, [2]: "BOTTOM_LEFT" };
const obj40 = { RECTANGULAR: 0, [0]: "RECTANGULAR", CIRCULAR: 1, [1]: "CIRCULAR" };
let closure_15 = { code: "function CutoutableAvatarImageTsx1(){const{cutout,CutoutShape,withSpring,CHANNEL_SPRING_CONFIG}=this.__closure;const animatedCutout=cutout.shape===CutoutShape.RoundedRect?{shape:CutoutShape.RoundedRect,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),width:withSpring(cutout.width,CHANNEL_SPRING_CONFIG),height:withSpring(cutout.height,CHANNEL_SPRING_CONFIG),cornerRadius:withSpring(cutout.cornerRadius,CHANNEL_SPRING_CONFIG)}:{shape:CutoutShape.Circle,x:withSpring(cutout.x,CHANNEL_SPRING_CONFIG),y:withSpring(cutout.y,CHANNEL_SPRING_CONFIG),size:withSpring(cutout.size,CHANNEL_SPRING_CONFIG)};return{cutouts:[animatedCutout]};}" };
obj1 = { width: frozen[obj.XXSMALL], height: frozen[obj.XXSMALL] };
obj10 = { width: frozen[obj.XXLARGE], height: frozen[obj.XXLARGE] };
obj11 = { width: frozen[obj.REFRESH_MEDIUM_32], height: frozen[obj.REFRESH_MEDIUM_32] };
obj12 = { width: frozen[obj.PROFILE], height: frozen[obj.PROFILE] };
obj13 = { width: frozen[obj.SIZE_16], height: frozen[obj.SIZE_16] };
obj14 = { width: frozen[obj.LARGE_48], height: frozen[obj.LARGE_48] };
obj15 = { width: frozen[obj.EDIT_AVATAR_DECORATION], height: frozen[obj.EDIT_AVATAR_DECORATION] };
obj16 = { width: frozen[obj.GIFT_START], height: frozen[obj.GIFT_START] };
obj17 = { width: frozen[obj.GIFT_SUCCESS], height: frozen[obj.GIFT_SUCCESS] };
obj18 = { width: frozen[obj.YOUBAR_60], height: frozen[obj.YOUBAR_60] };
obj19 = { width: frozen[obj.TABS_22], height: frozen[obj.TABS_22] };
obj2 = { width: frozen[obj.XXSMALL_10], height: frozen[obj.XXSMALL_10] };
obj20 = { borderRadius: frozen[obj.XXSMALL] / 2 };
obj21 = { borderRadius: frozen[obj.XXSMALL_10] / 2 };
obj22 = { borderRadius: frozen[obj.XSMALL_20] / 2 };
obj23 = { borderRadius: frozen[obj.XSMALL] / 2 };
obj24 = { borderRadius: frozen[obj.SMALL] / 2 };
obj25 = { borderRadius: frozen[obj.NORMAL] / 2 };
obj26 = { borderRadius: frozen[obj.LARGE] / 2 };
obj27 = { borderRadius: frozen[obj.XLARGE] / 2 };
obj28 = { borderRadius: frozen[obj.XLARGE_72] / 2 };
obj29 = { borderRadius: frozen[obj.XXLARGE] / 2 };
obj3 = { width: frozen[obj.XSMALL_20], height: frozen[obj.XSMALL_20] };
obj30 = { borderRadius: frozen[obj.REFRESH_MEDIUM_32] / 2 };
obj31 = { borderRadius: frozen[obj.PROFILE] / 2 };
obj32 = { borderRadius: frozen[obj.SIZE_16] / 2 };
obj33 = { borderRadius: frozen[obj.LARGE_48] / 2 };
obj34 = { borderRadius: frozen[obj.EDIT_AVATAR_DECORATION] / 2 };
obj35 = { borderRadius: frozen[obj.GIFT_START] / 2 };
obj36 = { borderRadius: frozen[obj.GIFT_SUCCESS] / 2 };
obj37 = { borderRadius: frozen[obj.YOUBAR_60] / 2 };
obj38 = { borderRadius: frozen[obj.TABS_22] / 2 };
obj4 = { width: frozen[obj.XSMALL], height: frozen[obj.XSMALL] };
obj5 = { width: frozen[obj.SMALL], height: frozen[obj.SMALL] };
obj6 = { width: frozen[obj.NORMAL], height: frozen[obj.NORMAL] };
obj7 = { width: frozen[obj.LARGE], height: frozen[obj.LARGE] };
obj8 = { width: frozen[obj.XLARGE], height: frozen[obj.XLARGE] };
obj9 = { width: frozen[obj.XLARGE_72], height: frozen[obj.XLARGE_72] };
let tmp4 = new timestampDefault("UIKit - AvatarImage");
const memoResult = importAllResult.memo((style) => {
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
    obj1 = getChannelIconURL;
    const channelIconURL = obj1.getChannelIconURL(channel, size2);
    let tmp13 = channelIconURL;
    if (typeof channelIconURL !== "number") {
      tmp13 = channelIconURL;
      if (null != channelIconURL) {
        obj = { uri: null };
        obj[0] = channelIconURL;
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
        const obj4 = getAvatarURLDefault;
        source = obj4.makeSource(getAvatarURLDefault.getDefaultAvatarURL(user2.id, user2.discriminator));
        const obj5 = getAvatarURLDefault;
      }
    }
    if (null != cutout) {
      const nativeCutouts = cutout.nativeCutouts;
      let length;
      if (nativeCutouts != null) {
        length = nativeCutouts.length;
      }
      if (1 === length) {
        obj = { animate: null, cutout: null, source: null, style: null, imageStyle: null };
        obj[0] = animate;
        cutout = cutout.nativeCutouts[0];
        obj[1] = cutout;
        obj[2] = avatarSource;
        obj[3] = items;
        obj[4] = tmp2;
        let tmp26 = callback(NativeCutoutAvatarImage, obj);
      } else {
        obj1 = { style: null, size: null, animate: null, cutout: null, source: null };
        obj1[0] = items;
        obj1[1] = tmp;
        obj1[2] = animate;
        obj1[3] = cutout;
        obj1[4] = avatarSource;
        tmp26 = callback(CutoutAvatarImage, obj1);
      }
    } else {
      const obj2 = { style: null, source: null, placeholder: null, usesSmallCache: true };
      const items1 = [items, tmp2];
      obj2[0] = items1;
      obj2[1] = avatarSource;
      let tmp22;
      if (typeof source === "number") {
        tmp22 = source;
      }
      obj2[2] = tmp22;
      return callback(preloadDefault, obj2, "image");
    }
  }
}, function customShallowEqual(source, source2) {
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
          let tmp3 = typeof source1 !== "object";
          if (typeof source1 === "object") {
            tmp3 = typeof source !== "object";
          }
          if (!tmp3) {
            tmp3 = shallowEqualDefault(source1, source);
          }
          return tmp3;
        }
      }
      return false;
    }
  } else {
    return false;
  }
  const tmp = importDefault;
});
let result = require("set").fileFinishedImporting("design/void/CutoutableAvatarImage/native/CutoutableAvatarImage.tsx");

export default memoResult;
export const AvatarSizes = obj;
export const AVATAR_SIZE_MAP = frozen;
export const styles = obj;
export const CutoutDirection = obj39;
export const CutoutType = obj40;