// === Module 10302: MediaPreviewRightAccessory ===

// Module 10302 (MediaPreviewRightAccessory)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1176 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1476 */;
import useToken from "useToken" /* 4338 */;
import Text_Text from "Text/Text" /* 4632 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5046 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5162 */;
import FastImageDefault from "FastImage" /* 5668 */;
import EyeIcon from "EyeIcon" /* 7071 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7395 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7400 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7702 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 8242 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8383 */;
import PlayIcon from "PlayIcon" /* 8392 */;
import common_VideoDefault from "common/Video" /* 8425 */;
import ClipView from "ClipView" /* 8940 */;
import usePreviewableMedia from "usePreviewableMedia" /* 10259 */;
import useContentHarmTypes from "useContentHarmTypes" /* 10303 */;
import StickerDefault from "Sticker" /* 10304 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4628 */;

const ClipViewDefault = ClipView;

require = fn;
function VideoBadge() {
  const tmp = closure_11();
  const obj = { style: tmp.badge, children: React6(PlayIcon.PlayIcon, { style: tmp.icon, size: "custom", color: "white" }) };
  return React6(View, obj);
}
function CountBadge(children) {
  return React6(View, { style: closure_12().badge, children: React6(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: children.total }) });
}
function ObscuredMediaOverlay(isSpoiler) {
  ({ isObscured, children } = isSpoiler);
  const tmp = closure_13();
  const token = useToken.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
  if (!isObscured) {
    if (!isSpoiler.isSpoiler) {
      return children;
    }
  }
  let str = "light";
  if (tmp2Result.isAndroid()) {
    str = "dark";
  }
  const items = [children, , , ];
  let tmp8 = isObscured;
  if (isObscured) {
    const obj2 = { style: tmp.obscureBackground };
    tmp8 = React6(View, obj2);
  }
  items[1] = tmp8;
  let tmp11 = !isObscured;
  if (!isObscured) {
    const obj3 = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
    tmp11 = React6(VisualEffectViewDefault, obj3);
  }
  items[2] = tmp11;
  const obj4 = { style: tmp.spoilerIconContainer, children: null };
  if (isObscured) {
    let tmp14Result = React6(ImageWarningIcon.ImageWarningIcon, { size: "sm", color: "white" });
  } else {
    const obj5 = { style: tmp.spoilerPill, children: React6(EyeIcon.EyeIcon, { size: "sm", color: "white" }) };
    tmp14Result = React6(View, obj5);
  }
  const obj6 = { children: null };
  obj4.children = tmp14Result;
  items[3] = React6(View, obj4);
  obj6.children = items;
  return closure_1_10(React7, obj6);
}
function SinglePreviewableMedia(arg0) {
  ({ previewableMedia, size, message } = arg0);
  const tmp = closure_13();
  const items = [AccessibilityStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  ({ type, media, icon } = previewableMedia);
  const shouldAgeVerifyForExplicitMedia = ExplicitMediaRedactionUtils.useShouldAgeVerifyForExplicitMedia();
  const enabledHarmTypesBitmaskForMessage = useContentHarmTypes.useEnabledHarmTypesBitmaskForMessage(message);
  if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
    const obj4 = { style: null, children: null };
    const size1 = { width: size, height: size };
    obj4.style = size1;
    obj4.children = icon;
    return React6(View, obj4);
  } else {
    if (usePreviewableMedia.PreviewableMediaTypes.AUDIO !== type) {
      if (usePreviewableMedia.PreviewableMediaTypes.FILE !== type) {
        if (usePreviewableMedia.PreviewableMediaTypes.IMAGE !== type) {
          if (usePreviewableMedia.PreviewableMediaTypes.VIDEO !== type) {
            if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
              const video = media.video;
              if (video != null) {
                const url = video.url;
              }
              const thumbnail = media.thumbnail;
              if (null == thumbnail) {
                return null;
              } else {
                const author = message.author;
                let id;
                if (author != null) {
                  id = author.id;
                }
                const enabledHarmTypesForChannelAndAuthorId = ObscuredMediaUtils.getEnabledHarmTypesForChannelAndAuthorId(message.channel_id, id);
                const tmp2Result = ObscuredMediaUtils;
                const obj5 = { type: null, media: null };
                const getMediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask;
                obj5.type = ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed;
                obj5.media = media;
                if (null != thumbnail.proxyURL) {
                  if ("" !== thumbnail.proxyURL) {
                    let url2 = thumbnail.proxyURL;
                  }
                  const obj6 = { style: null, children: null };
                  const items1 = [tmp.mediaThumbnailContainer, ];
                  const size2 = { width: size, height: size };
                  items1[1] = size2;
                  obj6.style = items1;
                  const obj7 = { isObscured: tmp15, isSpoiler: false, children: null };
                  if (null != url) {
                    if ("" !== url) {
                      if (!stateFromStores) {
                        const size3 = { resizeMode: "cover", width: size, height: size, paused: false, src: null, poster: null, postponeRender: false };
                        const obj8 = { videoURI: url };
                        size3.src = obj8;
                        size3.poster = url2;
                        let tmp16Result = React6(common_VideoDefault, size3);
                      }
                      obj7.children = tmp16Result;
                      obj6.children = React6(tmp18, obj7);
                      return React6(tmp17, obj6);
                    }
                  }
                  const obj9 = { source: null, style: null, resizeMode: "cover" };
                  const obj10 = { uri: url2 };
                  obj9.source = obj10;
                  obj9.style = tmp.mediaThumbnail;
                  tmp16Result = React6(FastImageDefault, obj9);
                }
                url2 = thumbnail.url;
                const tmp2Result5 = ObscuredMediaUtils;
              }
            } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
              const obj11 = { style: null, children: null };
              const items2 = [tmp.mediaThumbnailContainer, ];
              const size4 = { width: size, height: size };
              items2[1] = size4;
              obj11.style = items2;
              const obj12 = { sticker: media, size, animated: !stateFromStores };
              obj11.children = React6(StickerDefault, obj12);
              return React6(View, obj11);
            } else {
              return null;
            }
          }
        }
        ({ width, height } = media);
        if (null != width) {
          if (width > 0) {
            if (null != height) {
              if (height > 0) {
                const obj13 = { attachment: media, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: enabledHarmTypesBitmaskForMessage, shouldAgeVerify: shouldAgeVerifyForExplicitMedia };
                const attachmentObscurityProps = ExplicitMediaUtils.getAttachmentObscurityProps(obj13);
                const tmp2Result6 = ExplicitMediaUtils;
                const attachmentUrl = MediaSourceUtil.getAttachmentUrl(media);
                const tmp2Result7 = MediaSourceUtil;
                const obj14 = { src: attachmentUrl, sourceWidth: width, sourceHeight: height, targetWidth: 2 * size, targetHeight: 2 * size, animated: false, format: null };
                let str3;
                if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                  str3 = "png";
                }
                obj14.format = str3;
                const obj15 = { style: null, children: null };
                const items3 = [tmp.mediaThumbnailContainer, ];
                const size5 = { width: size, height: size };
                items3[1] = size5;
                obj15.style = items3;
                const obj16 = { isObscured: null, isSpoiler: null, children: null };
                ({ obscure: obj17.isObscured, isSpoiler: obj17.isSpoiler } = attachmentObscurityProps);
                const srcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight(obj14);
                const obj18 = { source: null, style: null, resizeMode: "cover" };
                const obj19 = { uri: srcWithWidthAndHeight };
                obj18.source = obj19;
                obj18.style = tmp.mediaThumbnail;
                const items4 = [React6(FastImageDefault, obj18), ];
                let tmp24Result = null;
                if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                  tmp24Result = React6(VideoBadge, {});
                }
                items4[1] = tmp24Result;
                obj16.children = items4;
                obj15.children = closure_1_10(ObscuredMediaOverlay, obj16);
                return React6(View, obj15);
              }
            }
          }
        }
        return null;
      }
    }
    const obj20 = { style: null, children: null };
    const items5 = [tmp.iconContainer, ];
    const size6 = { width: size, height: size };
    items5[1] = size6;
    obj20.style = items5;
    obj20.children = icon;
    return React6(View, obj20);
  }
}
function MultiplePreviewableMedia(arg0) {
  ({ previewableMedia, totalMediaCount, message } = arg0);
  const obj = { style: closure_14().container, children: null };
  const memo = noop.useMemo(() => {
    const BADGE_PADDING = native.BADGE_PADDING;
    const sum = BADGE_PADDING + 5;
    const roundToNearestPixelResult = closure_1_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
    const size = { shape: ClipView.CutoutShape.RoundedRect, x: 56 - roundToNearestPixelResult + sum, y: -sum, width: roundToNearestPixelResult, height: roundToNearestPixelResult, cornerRadius: closure_1_4.roundToNearestPixel(roundToNearestPixelResult / 2) };
    return size;
  }, []);
  const obj2 = { cutouts: null, children: null };
  const items = [memo];
  obj2.cutouts = items;
  const tmp = closure_14();
  obj2.children = React6(SinglePreviewableMedia, { previewableMedia, size: 56, message });
  const items1 = [React6(ClipViewDefault, obj2), React6(CountBadge, { total: totalMediaCount })];
  obj.children = items1;
  return closure_1_10(View, obj);
}
function MediaPreviewRightAccessoryContent(arg0) {
  ({ totalMediaCount, message } = arg0);
  const first = arg0.previewableMedia[0];
  if (1 === totalMediaCount) {
    const obj2 = { previewableMedia: first, size: 64, message };
    let tmp4 = React6(SinglePreviewableMedia, obj2);
  } else {
    const obj = { previewableMedia: first, totalMediaCount, message };
    tmp4 = React6(MultiplePreviewableMedia, obj);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
let createStyles = fn(4636);
let obj2 = { badge: null, icon: null };
let size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xs, width: 16, height: 16, position: "absolute", bottom: 4, left: 4 };
obj2.badge = size;
obj2.icon = { width: 10, height: 10 };
let closure_11 = createStyles.createStyles(obj2);
createStyles = fn(4636);
let obj3 = { badge: null };
let size1 = { width: 20, height: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", position: "absolute", right: -5, top: -5 };
obj3.badge = size1;
let closure_12 = createStyles.createStyles(obj3);
createStyles = fn(4636);
let obj5 = { mediaThumbnailContainer: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, mediaThumbnail: { width: "100%", height: "100%" }, iconContainer: null, obscureBackground: null, spoilerIconContainer: null, spoilerPill: null };
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj5.iconContainer = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm };
let obj9 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj9.backgroundColor = nativeDefault.unsafe_rawColors.PRIMARY_500;
obj5.obscureBackground = obj9;
let obj10 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj10.justifyContent = "center";
obj10.alignItems = "center";
obj5.spoilerIconContainer = obj10;
let obj8 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm };
obj5.spoilerPill = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
let closure_13 = createStyles.createStyles(obj5);
createStyles = fn(4636);
let closure_14 = createStyles.createStyles({ container: { overflow: "visible" } });
createStyles = fn(4636);
let obj11 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
let closure_15 = createStyles.createStyles({ rightAccessoryContainer: { marginLeft: fn(10224).RIGHT_ACCESSORY_LEFT_MARGIN } });
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const MediaPreviewRightAccessory = function MediaPreviewRightAccessory(message) {
  message = message.message;
  const tmp = closure_15();
  const previewableMedia = usePreviewableMedia.usePreviewableMedia(message);
  let tmp2 = null;
  if (0 !== previewableMedia.length) {
    const obj2 = { style: tmp.rightAccessoryContainer, children: null };
    const obj3 = { previewableMedia, totalMediaCount: length, message };
    obj2.children = React6(MediaPreviewRightAccessoryContent, obj3);
    tmp2 = React6(View, obj2);
  }
  return tmp2;
};