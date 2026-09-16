// discord_app/modules/forums/native/posts/ForumPostMedia.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ImageUtils from "../../../../utils/native/ImageUtils.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import SpoilerIconDefault from "../../../markup/native/SpoilerIcon.tsx";
import MessageAttachmentUtils from "../../../messages/MessageAttachmentUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";

require = fn;
function ForumPostMediaAndroid(blurTheme) {
  const shouldSpoiler = blurTheme.shouldSpoiler;
  const obj = {
    style: blurTheme.androidStyle,
    source: blurTheme.source,
    blurRadius: null,
    resizeMode: "cover",
    children: null,
  };
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
  const items = [
    closure_1_10(FastImageDefault, { style: iosStyle, source, resizeMode: "cover" }),
    closure_1_10(ForumPostMediaSpoiler, { shouldSpoiler, blurTheme }),
  ];
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
      obj1 = { blurTheme: null, style: null };
      obj1.blurTheme = blurTheme;
      tmp8 = StyleSheet;
      obj1.style = StyleSheet.absoluteFill;
      items = [,];
      items[0] = jsx(closure_1(closure_2[9]), obj1);
      tmp9 = View;
      obj5 = { style: null, children: null };
      obj5.style = tmp.spoilerIconContainer;
      size = { style: null, height: 30, width: 30 };
      size.style = tmp.spoilerIcon;
      obj5.children = jsx(closure_1(closure_2[10]), size);
      items[1] = jsx(View, obj5);
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
  const shouldAgeVerifyForReason = require("ExplicitMediaRedactionUtils").useShouldAgeVerifyForReason(
    obscureReason.obscureReason,
  );
  if (obscureReason.isMediaPost) {
    const obj2 = {};
    const merged = Object.assign(obscureReason);
    let tmp6Result = closure_10(ref(12153), obj2);
    let tmp12 = closure_10;
    const tmp19 = ref(12153);
  } else {
    if (tmp3Result.isAndroid()) {
      const obj3 = {};
      const merged1 = Object.assign(obscureReason);
      tmp6Result = closure_10(ForumPostMediaAndroid, obj3);
      tmp12 = closure_10;
    } else {
      const obj4 = {};
      const merged2 = Object.assign(obscureReason);
      tmp6Result = closure_10(ForumPostMediaIOS, obj4);
      tmp12 = closure_10;
    }
    tmp3Result = tmp3(1364);
  }
  if (null != obscureReason.obscureReason) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp3(7406).AGE_VERIFICATION_OBSCURABLE_REASONS;
    if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason.obscureReason)) {
      if (shouldAgeVerifyForReason) {
        const obj5 = { style: null, ref: null, children: null };
        const items = [tmp.mediaContainer, obscureReason.containerStyle];
        obj5.style = items;
        obj5.ref = ref;
        const obj6 = {
          androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
          activeOpacity: 0,
          onPress() {
            const obj = ref(8541);
            const result = obj.showAgeVerificationGetStartedModal({
              entryPoint: obscureReason(8543).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW,
            });
          },
          children: tmp6Result,
        };
        obj5.children = tmp12(tmp3(5208).PressableOpacity, obj6);
        let tmp12Result = tmp12(closure_5, obj5);
      }
      return tmp12Result;
    }
  }
  if (null != obscureReason.onPress) {
    const obj7 = { style: null, ref: null, children: null };
    const items1 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj7.style = items1;
    obj7.ref = ref;
    const obj8 = {
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
      children: tmp6Result,
    };
    obj7.children = tmp12(tmp3(5208).PressableOpacity, obj8);
    tmp12Result = tmp12(closure_5, obj7);
  } else {
    const obj9 = { style: null, ref: null, children: null };
    const items2 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj9.style = items2;
    obj9.ref = ref;
    obj9.children = tmp6Result;
    tmp12Result = tmp12(closure_5, obj9);
  }
  let obj = require("ExplicitMediaRedactionUtils");
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ImageBackground: closure_7, PixelRatio } = get_ActivityIndicator);
const ANDROID_FOREGROUND_RIPPLE = fn(1181).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = Math.min(PixelRatio.get(), 4);
let closure_14 = Math.min(PixelRatio.get(), 4);
const createStyles = fn(4638);
let obj2 = {
  mediaContainer: { position: "relative", overflow: "hidden" },
  thumbnailBorder: { borderRadius: nativeDefault.radii.sm },
  thumbnail: { height: 80, width: 80 },
  spoilerIconContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" },
  spoilerIcon: null,
  gridMediaContainer: null,
};
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj2.spoilerIcon = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
obj2.gridMediaContainer = { borderRadius: 2, overflow: "hidden" };
const __initData = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

export { ForumPostMediaSpoiler };
export const useSharedMediaProps = function useSharedMediaProps(arg0) {
  ({ channel, media } = arg0);
  const tmp3 = _slicedToArray(MessageAttachmentUtils.useShouldObscure({ media, channel }), 2);
  const obj2 = { shouldObscure: tmp3[0], obscureReason: tmp3[1], blurTheme: null, format: null };
  let str = "light";
  if (obj3.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  obj2.blurTheme = str;
  const GifAutoPlay = UserSettings.GifAutoPlay;
  let tmp4 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp4 = null;
  }
  obj2.format = tmp4;
  return obj2;
};
export const ForumPostMediaThumbnail = function ForumPostMediaThumbnail(firstMessageId) {
  ({ channel, isLocalDeviceMedia } = firstMessageId);
  firstMessageId = firstMessageId.firstMessageId;
  const media = firstMessageId.media;
  let isEmbed = firstMessageId.isEmbed;
  noop = undefined;
  ({ embedLeftBorderColor, containerStyle } = firstMessageId);
  const tmp = closure_15();
  const onTapMedia = firstMessageId(media[21])({ threadId: channel.id }).onTapMedia;
  let items = [firstMessageId, media, onTapMedia];
  const callback = noop.useCallback((containerRef) => {
    const obj = { messageId: firstMessageId, mediaItems: null, containerRef };
    const items = [media];
    obj.mediaItems = items;
    onTapMedia(obj);
  }, items);
  let obj = { threadId: channel.id };
  let obj2 = noop;
  const obj3 = isLocalDeviceMedia(media[18]);
  const tmp2 = media;
  [flag, tmp6] = onTapMedia(isLocalDeviceMedia(media[18]).useShouldObscure({ media, channel }), 2);
  const tmp5 = onTapMedia(isLocalDeviceMedia(media[18]).useShouldObscure({ media, channel }), 2);
  let str = "light";
  if (obj4.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = isLocalDeviceMedia(tmp2[20]).GifAutoPlay;
  let tmp7 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp7 = null;
  }
  noop = tmp7;
  const items1 = [tmp7, isLocalDeviceMedia, , , ,];
  ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
  const obj5 = {
    iosStyle: tmp.thumbnail,
    androidStyle: tmp.thumbnail,
    containerStyle: null,
    obscureReason: null,
    shouldSpoiler: null,
    blurTheme: null,
    source: null,
    onPress: null,
    isMediaPost: null,
  };
  const items2 = [tmp.thumbnailBorder, ,];
  const memo = obj2.useMemo(() => {
    const obj = { uri: null };
    if (isLocalDeviceMedia) {
      obj.uri = media.src;
      let tmp7 = obj;
    } else {
      const obj4 = {
        src: null,
        sourceWidth: null,
        sourceHeight: null,
        targetWidth: null,
        targetHeight: null,
        format: null,
        animated: null,
      };
      ({ src: obj3.src, width: obj3.sourceWidth, height: obj3.sourceHeight } = media);
      const _Math = Math;
      obj4.targetWidth = Math.ceil(80 * closure_13);
      const _Math2 = Math;
      obj4.targetHeight = Math.ceil(80 * closure_13);
      obj4.format = format;
      obj4.animated = media.srcIsAnimated;
      obj.uri = utils_ImageUtils.getSrcWithWidthAndHeight(obj4);
      tmp7 = obj;
    }
    return tmp7;
  }, items1);
  if (isEmbed) {
    const obj6 = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
    isEmbed = obj6;
  }
  items2[1] = isEmbed;
  items2[2] = containerStyle;
  obj5.containerStyle = items2;
  obj5.obscureReason = tmp6;
  obj5.shouldSpoiler = flag;
  obj5.blurTheme = str;
  obj5.source = memo;
  obj5.onPress = callback;
  obj5.isMediaPost = channel.isMediaPost();
  return closure_10(ForumPostMedia, obj5);
};
export const ForumPostGridMedia = function ForumPostGridMedia(targetWidth) {
  ({ channel, media } = targetWidth);
  targetWidth = targetWidth.targetWidth;
  const targetHeight = targetWidth.targetHeight;
  _slicedToArray = undefined;
  noop = undefined;
  const tmp = closure_15();
  const tmp3 = targetHeight;
  let obj = media(targetHeight[18]);
  [flag, tmp5] = media(targetHeight[18]).useShouldObscure({ media, channel });
  const tmp4 = _slicedToArray(media(targetHeight[18]).useShouldObscure({ media, channel }), 2);
  let str = "light";
  if (obj2.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = media(tmp3[20]).GifAutoPlay;
  let tmp6 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp6 = null;
  }
  _slicedToArray = tmp6;
  const isMediaPostResult = channel.isMediaPost();
  noop = isMediaPostResult;
  const items = [, , , , , ,];
  ({ src: arr[0], width: arr[1], height: arr[2] } = media);
  items[3] = targetWidth;
  items[4] = targetHeight;
  items[5] = tmp6;
  items[6] = isMediaPostResult;
  const obj3 = {
    containerStyle: tmp.gridMediaContainer,
    iosStyle: { height: targetHeight, width: targetWidth },
    androidStyle: { height: targetHeight, width: targetWidth },
    shouldSpoiler: null,
    obscureReason: null,
    blurTheme: null,
    source: null,
    isPortrait: null,
    isMediaPost: null,
  };
  const memo = noop.useMemo(() => {
    if (c4) {
      const _Math3 = Math;
      const bound = Math.min(1, (targetWidth * closure_14) / media.width, (targetHeight * closure_14) / media.height);
      const obj4 = { uri: null };
      const obj9 = {
        src: null,
        sourceWidth: null,
        sourceHeight: null,
        targetWidth: null,
        targetHeight: null,
        format: null,
      };
      ({ src: obj6.src, width: obj6.sourceWidth, height: obj6.sourceHeight } = media);
      const _Math4 = Math;
      obj9.targetWidth = Math.ceil(media.width * bound);
      const _Math5 = Math;
      obj9.targetHeight = Math.ceil(media.height * bound);
      obj9.format = format;
      obj4.uri = utils_ImageUtils.getSrcWithWidthAndHeight(obj9);
      return obj4;
    } else {
      const obj = { uri: null };
      const obj10 = {
        src: null,
        sourceWidth: null,
        sourceHeight: null,
        targetWidth: null,
        targetHeight: null,
        format: null,
      };
      ({ src: obj3.src, width: obj3.sourceWidth, height: obj3.sourceHeight } = media);
      const _Math = Math;
      obj10.targetWidth = Math.ceil(targetWidth * closure_14);
      const _Math2 = Math;
      obj10.targetHeight = Math.ceil(targetHeight * closure_14);
      obj10.format = format;
      obj.uri = utils_ImageUtils.getSrcWithWidthAndHeight(obj10);
      return obj;
    }
  }, items);
  obj3.shouldSpoiler = flag;
  obj3.obscureReason = tmp5;
  obj3.blurTheme = str;
  obj3.source = memo;
  obj3.isPortrait = media.height >= media.width;
  obj3.isMediaPost = isMediaPostResult;
  return closure_10(ForumPostMedia, obj3);
};
