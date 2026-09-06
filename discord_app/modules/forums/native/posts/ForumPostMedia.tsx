// === Module 12009: ForumPostMedia ===

// Module 12009 (ForumPostMedia)
import nativeDefault from "native" /* 576 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1476 */;
import UserSettings from "UserSettings" /* 1935 */;
import VisualEffectViewDefault from "VisualEffectView" /* 4965 */;
import FastImageDefault from "FastImage" /* 5587 */;
import SpoilerIconDefault from "SpoilerIcon" /* 12010 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 12012 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

require = fn;
function ForumPostMediaAndroid(blurTheme) {
  const shouldSpoiler = blurTheme.shouldSpoiler;
  const obj = { style: blurTheme.androidStyle, source: blurTheme.source, blurRadius: null, resizeMode: "cover", children: null };
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  obj.blurRadius = num;
  obj.children = closure_1_10(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme: blurTheme.blurTheme });
  return closure_1_10(React5, obj);
}
function ForumPostMediaIOS(arg0) {
  const obj = { children: null };
  ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
  const items = [closure_1_10(FastImageDefault, { style: iosStyle, source, resizeMode: "cover" }), closure_1_10(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme })];
  obj.children = items;
  return closure_1_12(closure_1_11, obj);
}
class ForumPostMediaSpoiler {
  constructor(arg0) {
    ({ shouldSpoiler, blurTheme } = global);
    tmp = closure_15();
    tmp2 = null;
    if (shouldSpoiler) {
      tmp3 = jsxs;
      tmp4 = Fragment;
      obj = { children: null };
      tmp5 = jsx;
      tmp6 = closure_1;
      tmp7 = closure_2;
      obj = { blurTheme: null, style: null };
      obj.blurTheme = blurTheme;
      tmp8 = StyleSheet;
      obj.style = StyleSheet.absoluteFill;
      items = [, ];
      items[0] = jsx(closure_1(closure_2[9]), obj);
      tmp9 = View;
      obj1 = { style: null, children: null };
      obj1.style = tmp.spoilerIconContainer;
      size = { style: null, height: 30, width: 30 };
      size.style = tmp.spoilerIcon;
      obj1.children = jsx(closure_1(closure_2[10]), size);
      items[1] = jsx(View, obj1);
      obj.children = items;
      tmp2 = jsxs(Fragment, obj);
    }
    return tmp2;
  }
}
function ForumPostMedia(obscureReason) {
  _require = obscureReason;
  const tmp = closure_15();
  const ref = noop.useRef(null);
  let obj = require("ExplicitMediaRedactionUtils");
  const shouldAgeVerifyForReason = obj.useShouldAgeVerifyForReason(obscureReason.obscureReason);
  if (obscureReason.isMediaPost) {
    obj = {};
    const merged = Object.assign(obscureReason);
    let tmp6Result = closure_10(ref(12011), obj);
    let tmp12 = closure_10;
    const tmp19 = ref(12011);
  } else {
    if (tmp3Result.isAndroid()) {
      obj = {};
      const merged1 = Object.assign(obscureReason);
      tmp6Result = tmp6(ForumPostMediaAndroid, obj);
      tmp12 = tmp6;
    } else {
      const obj1 = {};
      const merged2 = Object.assign(obscureReason);
      tmp6Result = tmp6(ForumPostMediaIOS, obj1);
      tmp12 = tmp6;
    }
    tmp3Result = tmp3(1115);
  }
  if (null != obscureReason.obscureReason) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp3(7296).AGE_VERIFICATION_OBSCURABLE_REASONS;
    if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason.obscureReason)) {
      if (shouldAgeVerifyForReason) {
        const obj2 = { style: null, ref: null, children: null };
        const items = [tmp.mediaContainer, obscureReason.containerStyle];
        obj2.style = items;
        obj2.ref = ref;
        const obj3 = {
          androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
          activeOpacity: 0,
          onPress() {
                  ref(8411);
                  const obj = { entryPoint: obscureReason(8413).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                  const result = obj.showAgeVerificationGetStartedModal(obj);
                },
          children: tmp6Result
        };
        obj2.children = tmp12(tmp3(5123).PressableOpacity, obj3);
        let tmp12Result = tmp12(closure_5, obj2);
      }
      return tmp12Result;
    }
  }
  if (null != obscureReason.onPress) {
    const obj4 = { style: null, ref: null, children: null };
    const items1 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj4.style = items1;
    obj4.ref = ref;
    const obj5 = {
      androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
      activeOpacity: 0.8,
      onPress() {
          const onPress = obscureReason.onPress;
          let onPressResult;
          if (onPress != null) {
            onPressResult = onPress(ref);
          }
          return onPressResult;
        },
      children: tmp6Result
    };
    obj4.children = tmp12(tmp3(5123).PressableOpacity, obj5);
    tmp12Result = tmp12(closure_5, obj4);
  } else {
    const obj6 = { style: null, ref: null, children: null };
    const items2 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj6.style = items2;
    obj6.ref = ref;
    obj6.children = tmp6Result;
    tmp12Result = tmp12(closure_5, obj6);
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ImageBackground: closure_7, PixelRatio } = get_ActivityIndicator);
const ANDROID_FOREGROUND_RIPPLE = fn(1182).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = Math.min(PixelRatio.get(), 4);
let closure_14 = Math.min(PixelRatio.get(), 4);
fn(4560);
let createStyles = { mediaContainer: { position: "relative", overflow: "hidden" }, thumbnailBorder: null, thumbnail: null, spoilerIconContainer: null, spoilerIcon: null, gridMediaContainer: null };
createStyles = { borderRadius: nativeDefault.radii.sm };
createStyles.thumbnailBorder = createStyles;
createStyles.thumbnail = { height: 80, width: 80 };
createStyles.spoilerIconContainer = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" };
createStyles.spoilerIcon = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
createStyles.gridMediaContainer = { borderRadius: 2, overflow: "hidden" };
const __initData = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

export { ForumPostMediaSpoiler };
export const useSharedMediaProps = function useSharedMediaProps(arg0) {
  ({ channel, media } = arg0);
  let obj = MessageAttachmentUtils;
  const tmp3 = _slicedToArray(obj.useShouldObscure({ media, channel }), 2);
  obj = { shouldObscure: tmp3[0], obscureReason: tmp3[1], blurTheme: null, format: null };
  let str = "light";
  if (obj3.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  obj.blurTheme = str;
  const GifAutoPlay = UserSettings.GifAutoPlay;
  let tmp4 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp4 = null;
  }
  obj.format = tmp4;
  return obj;
};
export const ForumPostMediaThumbnail = function ForumPostMediaThumbnail(firstMessageId) {
  ({ channel, isLocalDeviceMedia } = firstMessageId);
  firstMessageId = firstMessageId.firstMessageId;
  const media = firstMessageId.media;
  let isEmbed = firstMessageId.isEmbed;
  noop = undefined;
  ({ embedLeftBorderColor, containerStyle } = firstMessageId);
  const tmp = closure_15();
  let obj = { threadId: channel.id };
  const onTapMedia = firstMessageId(media[21])(obj).onTapMedia;
  let items = [firstMessageId, media, onTapMedia];
  const callback = noop.useCallback((containerRef) => {
    const obj = { messageId: firstMessageId, mediaItems: null, containerRef };
    const items = [media];
    obj.mediaItems = items;
    onTapMedia(obj);
  }, items);
  let obj2 = noop;
  const obj3 = isLocalDeviceMedia(media[18]);
  const tmp2 = media;
  const tmp4 = isLocalDeviceMedia;
  [flag, tmp6] = onTapMedia(isLocalDeviceMedia(media[18]).useShouldObscure({ media, channel }), 2);
  const tmp5 = onTapMedia(isLocalDeviceMedia(media[18]).useShouldObscure({ media, channel }), 2);
  let str = "light";
  if (obj4.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = tmp4(tmp2[20]).GifAutoPlay;
  let tmp7 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp7 = null;
  }
  noop = tmp7;
  const items1 = [tmp7, isLocalDeviceMedia, , , , ];
  ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
  obj = { iosStyle: tmp.thumbnail, androidStyle: tmp.thumbnail, containerStyle: null, obscureReason: null, shouldSpoiler: null, blurTheme: null, source: null, onPress: null, isMediaPost: null };
  const items2 = [tmp.thumbnailBorder, , ];
  const memo = obj2.useMemo(() => {
    let obj = { uri: null };
    if (isLocalDeviceMedia) {
      obj.uri = media.src;
      let tmp7 = obj;
    } else {
      obj = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, format: null, animated: null };
      ({ src: obj3.src, width: obj3.sourceWidth, height: obj3.sourceHeight } = media);
      const _Math = Math;
      obj.targetWidth = Math.ceil(80 * closure_13);
      const _Math2 = Math;
      obj.targetHeight = Math.ceil(80 * closure_13);
      obj.format = format;
      obj.animated = media.srcIsAnimated;
      obj.uri = utils_ImageUtils.getSrcWithWidthAndHeight(obj);
      tmp7 = obj;
    }
    return tmp7;
  }, items1);
  if (isEmbed) {
    obj = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
    isEmbed = obj;
  }
  items2[1] = isEmbed;
  items2[2] = containerStyle;
  obj.containerStyle = items2;
  obj.obscureReason = tmp6;
  obj.shouldSpoiler = flag;
  obj.blurTheme = str;
  obj.source = memo;
  obj.onPress = callback;
  obj.isMediaPost = channel.isMediaPost();
  return closure_10(ForumPostMedia, obj);
};
export const ForumPostGridMedia = function ForumPostGridMedia(targetWidth) {
  ({ channel, media } = targetWidth);
  targetWidth = targetWidth.targetWidth;
  const targetHeight = targetWidth.targetHeight;
  _slicedToArray = undefined;
  noop = undefined;
  let obj = media(targetHeight[18]);
  const tmp = closure_15();
  const tmp2 = media;
  const tmp3 = targetHeight;
  [flag, tmp5] = _slicedToArray(obj.useShouldObscure({ media, channel }), 2);
  const tmp4 = _slicedToArray(obj.useShouldObscure({ media, channel }), 2);
  let str = "light";
  if (obj2.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = tmp2(tmp3[20]).GifAutoPlay;
  let tmp6 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp6 = null;
  }
  _slicedToArray = tmp6;
  const isMediaPostResult = channel.isMediaPost();
  noop = isMediaPostResult;
  const items = [, , , , , , ];
  ({ src: arr[0], width: arr[1], height: arr[2] } = media);
  items[3] = targetWidth;
  items[4] = targetHeight;
  items[5] = tmp6;
  items[6] = isMediaPostResult;
  obj = { containerStyle: tmp.gridMediaContainer, iosStyle: { height: targetHeight, width: targetWidth }, androidStyle: { height: targetHeight, width: targetWidth }, shouldSpoiler: null, obscureReason: null, blurTheme: null, source: null, isPortrait: null, isMediaPost: null };
  const memo = noop.useMemo(() => {
    if (c4) {
      const _Math3 = Math;
      const bound = Math.min(1, targetWidth * closure_14 / media.width, targetHeight * closure_14 / media.height);
      let obj = { uri: null };
      obj = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, format: null };
      ({ src: obj6.src, width: obj6.sourceWidth, height: obj6.sourceHeight } = media);
      const _Math4 = Math;
      obj.targetWidth = Math.ceil(media.width * bound);
      const _Math5 = Math;
      obj.targetHeight = Math.ceil(media.height * bound);
      obj.format = format;
      obj.uri = utils_ImageUtils.getSrcWithWidthAndHeight(obj);
      return obj;
    } else {
      obj = { uri: null };
      const obj1 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, format: null };
      ({ src: obj3.src, width: obj3.sourceWidth, height: obj3.sourceHeight } = media);
      const _Math = Math;
      obj1.targetWidth = Math.ceil(targetWidth * closure_14);
      const _Math2 = Math;
      obj1.targetHeight = Math.ceil(targetHeight * closure_14);
      obj1.format = format;
      obj.uri = obj1.getSrcWithWidthAndHeight(obj1);
      return obj;
    }
  }, items);
  obj.shouldSpoiler = flag;
  obj.obscureReason = tmp5;
  obj.blurTheme = str;
  obj.source = memo;
  obj.isPortrait = media.height >= media.width;
  obj.isMediaPost = isMediaPostResult;
  return closure_10(ForumPostMedia, obj);
};