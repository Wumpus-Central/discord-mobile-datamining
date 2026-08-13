// discord_app/modules/forums/native/posts/ForumPostMedia.tsx
import _slicedToArray from "_slicedToArray";
import AccessibilityAnnouncer from "AccessibilityAnnouncer";
import get_ActivityIndicator from "AgeVerificationModalEntryPoint";
import handleThemeChange from "handleThemeChange";
import { ANDROID_FOREGROUND_RIPPLE } from "semanticColor";
import jsxProd from "useNativeForumPostHandlers";
import createCacheKey from "createCacheKey";
import { preload } from "../../../../components_native/common/FastImage.tsx";
import { redactionSettingToRenderedString } from "../../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import { getForumPostShouldObscure } from "../../../messages/MessageAttachmentUtils.tsx";
import { explicitContentFromProto } from "../../../user_settings/UserSettings.tsx";

let PixelRatio;
let c10;
let c5;
let closure_12;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function ForumPostMediaAndroid(blurTheme) {
  const shouldSpoiler = blurTheme.shouldSpoiler;
  const obj = { style: blurTheme.androidStyle, source: blurTheme.source, blurRadius: null, resizeMode: "cover", children: null };
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  obj[2] = num;
  obj[4] = closure_10(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme: blurTheme.blurTheme });
  return closure_10(closure_7, obj);
}
function ForumPostMediaIOS(arg0) {
  let blurTheme;
  let iosStyle;
  let shouldSpoiler;
  let source;
  const obj = { children: null };
  ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
  const items = [callback2(preload, { style: iosStyle, source, resizeMode: "cover" }), callback2(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme })];
  obj[0] = items;
  return callback3(closure_11, obj);
}
class ForumPostMediaSpoiler {
  constructor(arg0) {
    ({ shouldSpoiler, blurTheme } = global);
    tmp = get();
    tmp2 = null;
    if (shouldSpoiler) {
      tmp3 = jsxs;
      tmp4 = Fragment;
      obj = { children: null };
      tmp5 = jsx;
      tmp6 = closure_1;
      tmp7 = closure_2;
      obj = { blurTheme: null, style: null };
      obj[0] = blurTheme;
      tmp8 = StyleSheet;
      obj[1] = StyleSheet.absoluteFill;
      items = [, ];
      items[0] = jsx(require("isBlurDisabled"), obj);
      tmp9 = View;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.spoilerIconContainer;
      obj2 = { style: null, height: 30, width: 30 };
      obj2[0] = tmp.spoilerIcon;
      obj1[1] = jsx(require("Spoiler"), obj2);
      items[1] = jsx(View, obj1);
      obj[0] = items;
      tmp2 = jsxs(Fragment, obj);
    }
    return tmp2;
  }
}
function ForumPostMedia(obscureReason) {
  const _require = obscureReason;
  const tmp = createCacheKey();
  const ref = React.useRef(null);
  let obj = _redactionSettingToRenderedString;
  const shouldAgeVerifyForReason = obj.useShouldAgeVerifyForReason(obscureReason.obscureReason);
  if (obscureReason.isMediaPost) {
    obj = {};
    const merged = Object.assign(obscureReason);
    let tmp6Result = callback2(ref(11458), obj);
    let tmp12 = callback2;
    const tmp19 = ref(11458);
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
    tmp3Result = tmp3(500);
  }
  if (null != obscureReason.obscureReason) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp3(5954).AGE_VERIFICATION_OBSCURABLE_REASONS;
    if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason.obscureReason)) {
      if (shouldAgeVerifyForReason) {
        const obj2 = { style: null, ref: null, children: null };
        const items = [tmp.mediaContainer, obscureReason.containerStyle];
        obj2[0] = items;
        obj2[1] = ref;
        const obj3 = { androidRippleConfig: null, activeOpacity: 0, onPress: null, children: null };
        obj3[0] = ANDROID_FOREGROUND_RIPPLE;
        obj3[2] = function onPress() {
          let obj = ref(7842);
          obj = { entryPoint: obscureReason(7844).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
          const result = obj.showAgeVerificationGetStartedModal(obj);
        };
        obj3[3] = tmp6Result;
        obj2[2] = tmp12(tmp3(4887).PressableOpacity, obj3);
        let tmp12Result = tmp12(closure_5, obj2);
      }
      return tmp12Result;
    }
  }
  if (null != obscureReason.onPress) {
    const obj4 = { style: null, ref: null, children: null };
    const items1 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj4[0] = items1;
    obj4[1] = ref;
    const obj5 = { androidRippleConfig: null, activeOpacity: 0.8, onPress: null, children: null };
    obj5[0] = ANDROID_FOREGROUND_RIPPLE;
    obj5[2] = function onPress() {
      const onPress = obscureReason.onPress;
      let onPressResult;
      if (onPress != null) {
        onPressResult = onPress(ref);
      }
      return onPressResult;
    };
    obj5[3] = tmp6Result;
    obj4[2] = tmp12(tmp3(4887).PressableOpacity, obj5);
    tmp12Result = tmp12(closure_5, obj4);
  } else {
    const obj6 = { style: null, ref: null, children: null };
    const items2 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj6[0] = items2;
    obj6[1] = ref;
    obj6[2] = tmp6Result;
    tmp12Result = tmp12(closure_5, obj6);
  }
}
({ View: c5, StyleSheet: closure_6, ImageBackground: error, PixelRatio } = get_ActivityIndicator);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = Math.min(PixelRatio.get(), 4);
let closure_14 = Math.min(PixelRatio.get(), 4);
createCacheKey = { mediaContainer: { position: "relative", overflow: "hidden" }, thumbnailBorder: null, thumbnail: null, spoilerIconContainer: null, spoilerIcon: null, gridMediaContainer: null };
createCacheKey = { borderRadius: require("Themes").radii.sm };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { height: 80, width: 80 };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" };
createCacheKey[4] = { color: require("Themes").unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
createCacheKey[5] = { borderRadius: 2, overflow: "hidden" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { color: require("Themes").unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

export { ForumPostMediaSpoiler };
export const useSharedMediaProps = function useSharedMediaProps(arg0) {
  let channel;
  let media;
  ({ channel, media } = arg0);
  let obj = getForumPostShouldObscure;
  const tmp3 = callback(obj.useShouldObscure({ media, channel }), 2);
  obj = { shouldObscure: tmp3[0], obscureReason: tmp3[1], blurTheme: null, format: null };
  let str = "light";
  if (obj3.isThemeDark(handleThemeChange.theme)) {
    str = "dark";
  }
  obj[2] = str;
  const GifAutoPlay = explicitContentFromProto.GifAutoPlay;
  let tmp4 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp4 = null;
  }
  obj[3] = tmp4;
  return obj;
};
export const ForumPostMediaThumbnail = function ForumPostMediaThumbnail(firstMessageId) {
  let channel;
  let containerStyle;
  let embedLeftBorderColor;
  let flag;
  let isLocalDeviceMedia;
  let tmp6;
  ({ channel, isLocalDeviceMedia } = firstMessageId);
  firstMessageId = firstMessageId.firstMessageId;
  const media = firstMessageId.media;
  let isEmbed = firstMessageId.isEmbed;
  let onTapMedia;
  let React;
  ({ embedLeftBorderColor, containerStyle } = firstMessageId);
  const tmp = createCacheKey();
  let obj = { threadId: channel.id };
  onTapMedia = firstMessageId(media[21])(obj).onTapMedia;
  let items = [firstMessageId, media, onTapMedia];
  const callback = React.useCallback((containerRef) => {
    const items = [media];
    onTapMedia({ messageId: firstMessageId, mediaItems: items, containerRef });
  }, items);
  let obj2 = React;
  const obj3 = isLocalDeviceMedia(media[18]);
  const tmp2 = media;
  const tmp4 = isLocalDeviceMedia;
  [flag, tmp6] = onTapMedia(isLocalDeviceMedia(media[18]).useShouldObscure({ media, channel }), 2);
  const tmp5 = onTapMedia(isLocalDeviceMedia(media[18]).useShouldObscure({ media, channel }), 2);
  let str = "light";
  if (obj4.isThemeDark(handleThemeChange.theme)) {
    str = "dark";
  }
  const GifAutoPlay = tmp4(tmp2[20]).GifAutoPlay;
  let tmp7 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp7 = null;
  }
  React = tmp7;
  const items1 = [tmp7, isLocalDeviceMedia, , , , ];
  ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
  obj = { iosStyle: tmp.thumbnail, androidStyle: tmp.thumbnail, containerStyle: null, obscureReason: null, shouldSpoiler: null, blurTheme: null, source: null, onPress: null, isMediaPost: null };
  const items2 = [tmp.thumbnailBorder, , ];
  const memo = obj2.useMemo(() => {
    let obj = { uri: null };
    if (isLocalDeviceMedia) {
      obj[0] = media.src;
      let tmp7 = obj;
    } else {
      obj = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, format: null, animated: null };
      ({ src: obj3[0], width: obj3[1], height: obj3[2] } = media);
      const _Math = Math;
      obj[3] = Math.ceil(80 * outer1_13);
      const _Math2 = Math;
      obj[4] = Math.ceil(80 * outer1_13);
      obj[5] = c4;
      obj[6] = media.srcIsAnimated;
      obj[0] = isLocalDeviceMedia(media[22]).getSrcWithWidthAndHeight(obj);
      tmp7 = obj;
      const obj2 = isLocalDeviceMedia(media[22]);
    }
    return tmp7;
  }, items1);
  if (isEmbed) {
    obj = { borderLeftWidth: 2, borderLeftColor: null };
    obj[1] = embedLeftBorderColor;
    isEmbed = obj;
  }
  items2[1] = isEmbed;
  items2[2] = containerStyle;
  obj[2] = items2;
  obj[3] = tmp6;
  obj[4] = flag;
  obj[5] = str;
  obj[6] = memo;
  obj[7] = callback;
  obj[8] = channel.isMediaPost();
  return closure_10(ForumPostMedia, obj);
};
export const ForumPostGridMedia = function ForumPostGridMedia(targetWidth) {
  let channel;
  let flag;
  let media;
  let tmp5;
  ({ channel, media } = targetWidth);
  targetWidth = targetWidth.targetWidth;
  const targetHeight = targetWidth.targetHeight;
  let callback;
  let React;
  let obj = media(targetHeight[18]);
  const tmp = createCacheKey();
  const tmp2 = media;
  const tmp3 = targetHeight;
  [flag, tmp5] = callback(obj.useShouldObscure({ media, channel }), 2);
  const tmp4 = callback(obj.useShouldObscure({ media, channel }), 2);
  let str = "light";
  if (obj2.isThemeDark(handleThemeChange.theme)) {
    str = "dark";
  }
  const GifAutoPlay = tmp2(tmp3[20]).GifAutoPlay;
  let tmp6 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp6 = null;
  }
  callback = tmp6;
  const isMediaPostResult = channel.isMediaPost();
  React = isMediaPostResult;
  const items = [, , , , , , ];
  ({ src: arr[0], width: arr[1], height: arr[2] } = media);
  items[3] = targetWidth;
  items[4] = targetHeight;
  items[5] = tmp6;
  items[6] = isMediaPostResult;
  obj = { containerStyle: tmp.gridMediaContainer, iosStyle: { height: targetHeight, width: targetWidth }, androidStyle: { height: targetHeight, width: targetWidth }, shouldSpoiler: null, obscureReason: null, blurTheme: null, source: null, isPortrait: null, isMediaPost: null };
  const memo = React.useMemo(() => {
    if (c4) {
      const _Math3 = Math;
      const bound = Math.min(1, targetWidth * outer1_14 / media.width, targetHeight * outer1_14 / media.height);
      let obj = { uri: null };
      obj = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, format: null };
      ({ src: obj6[0], width: obj6[1], height: obj6[2] } = media);
      const _Math4 = Math;
      obj[3] = Math.ceil(media.width * bound);
      const _Math5 = Math;
      obj[4] = Math.ceil(media.height * bound);
      obj[5] = c3;
      obj[0] = media(targetHeight[22]).getSrcWithWidthAndHeight(obj);
      return obj;
    } else {
      obj = { uri: null };
      let obj1 = media(targetHeight[22]);
      obj1 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, format: null };
      ({ src: obj3[0], width: obj3[1], height: obj3[2] } = media);
      const _Math = Math;
      obj1[3] = Math.ceil(targetWidth * outer1_14);
      const _Math2 = Math;
      obj1[4] = Math.ceil(targetHeight * outer1_14);
      obj1[5] = c3;
      obj[0] = obj1.getSrcWithWidthAndHeight(obj1);
      return obj;
    }
  }, items);
  obj[3] = flag;
  obj[4] = tmp5;
  obj[5] = str;
  obj[6] = memo;
  obj[7] = media.height >= media.width;
  obj[8] = isMediaPostResult;
  return closure_10(ForumPostMedia, obj);
};