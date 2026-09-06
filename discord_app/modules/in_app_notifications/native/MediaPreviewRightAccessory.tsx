// === Module 10174: MediaPreviewRightAccessory ===

// Module 10174 (MediaPreviewRightAccessory)
import useStateFromStores from "useStateFromStores" /* 563 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1476 */;
import useToken from "useToken" /* 4262 */;
import Text_Text from "Text/Text" /* 4556 */;
import VisualEffectViewDefault from "VisualEffectView" /* 4965 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5081 */;
import FastImageDefault from "FastImage" /* 5587 */;
import EyeIcon from "EyeIcon" /* 6970 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 7292 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 7297 */;
import ExplicitMediaRedactionUtils from "ExplicitMediaRedactionUtils" /* 7600 */;
import ExplicitMediaUtils from "ExplicitMediaUtils" /* 8125 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8263 */;
import PlayIcon from "PlayIcon" /* 8274 */;
import common_VideoDefault from "common/Video" /* 8307 */;
import ClipView from "ClipView" /* 8813 */;
import usePreviewableMedia from "usePreviewableMedia" /* 10131 */;
import useContentHarmTypes from "useContentHarmTypes" /* 10175 */;
import StickerDefault from "Sticker" /* 10176 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const ClipViewDefault = ClipView;

require = fn;
function VideoBadge() {
  const tmp = closure_11();
  let obj = { style: tmp.badge, children: null };
  obj = { style: tmp.icon, size: "custom", color: "white" };
  obj.children = React6(PlayIcon.PlayIcon, obj);
  return React6(View, obj);
}
function CountBadge(children) {
  return React6(View, { style: closure_12().badge, children: React6(Text_Text.Text, { variant: "text-xs/semibold", color: "text-default", children: children.total }) });
}
function ObscuredMediaOverlay(isSpoiler) {
  ({ isObscured, children } = isSpoiler);
  const tmp = closure_13();
  let obj = useToken;
  const token = obj.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
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
    obj = { style: tmp.obscureBackground };
    tmp8 = React6(View, obj);
  }
  items[1] = tmp8;
  let tmp11 = !isObscured;
  if (!isObscured) {
    obj = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
    tmp11 = React6(VisualEffectViewDefault, obj);
  }
  items[2] = tmp11;
  const obj1 = { style: tmp.spoilerIconContainer, children: null };
  if (isObscured) {
    let tmp14Result = React6(ImageWarningIcon.ImageWarningIcon, { size: "sm", color: "white" });
  } else {
    const obj2 = { style: tmp.spoilerPill, children: React6(EyeIcon.EyeIcon, { size: "sm", color: "white" }) };
    tmp14Result = React6(View, obj2);
  }
  const obj3 = { children: null };
  obj1.children = tmp14Result;
  items[3] = React6(View, obj1);
  obj3.children = items;
  return closure_1_10(React7, obj3);
}
function SinglePreviewableMedia(arg0) {
  ({ previewableMedia, size, message } = arg0);
  const tmp = closure_13();
  let obj = useStateFromStores;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  ({ type, media, icon } = previewableMedia);
  let obj1 = ExplicitMediaRedactionUtils;
  const shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let obj2 = useContentHarmTypes;
  const enabledHarmTypesBitmaskForMessage = obj2.useEnabledHarmTypesBitmaskForMessage(message);
  if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
    obj = { style: null, children: null };
    size = { width: null, height: null };
    size.width = size;
    size.height = size;
    obj.style = size;
    obj.children = icon;
    return React6(View, obj);
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
                let tmp2Result = ObscuredMediaUtils;
                const author = message.author;
                let id;
                if (author != null) {
                  id = author.id;
                }
                const enabledHarmTypesForChannelAndAuthorId = tmp2Result.getEnabledHarmTypesForChannelAndAuthorId(message.channel_id, id);
                tmp2Result = ObscuredMediaUtils;
                obj = { type: null, media: null };
                const getMediaObscuredReasonFromBitmask = tmp2Result.getMediaObscuredReasonFromBitmask;
                obj.type = ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed;
                obj.media = media;
                if (null != thumbnail.proxyURL) {
                  if ("" !== thumbnail.proxyURL) {
                    let url2 = thumbnail.proxyURL;
                  }
                  obj1 = { style: null, children: null };
                  const items1 = [tmp.mediaThumbnailContainer, ];
                  const size1 = { width: size, height: size };
                  items1[1] = size1;
                  obj1.style = items1;
                  obj2 = { isObscured: tmp15, isSpoiler: false, children: null };
                  if (null != url) {
                    if ("" !== url) {
                      if (!stateFromStores) {
                        const size2 = { resizeMode: "cover", width: size, height: size, paused: false, src: null, poster: null, postponeRender: false };
                        const obj3 = { videoURI: url };
                        size2.src = obj3;
                        size2.poster = url2;
                        let tmp16Result = React6(common_VideoDefault, size2);
                      }
                      obj2.children = tmp16Result;
                      obj1.children = React6(tmp18, obj2);
                      return React6(tmp17, obj1);
                    }
                  }
                  const obj4 = { source: null, style: null, resizeMode: "cover" };
                  const obj5 = { uri: url2 };
                  obj4.source = obj5;
                  obj4.style = tmp.mediaThumbnail;
                  tmp16Result = React6(FastImageDefault, obj4);
                }
                url2 = thumbnail.url;
              }
            } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
              const obj6 = { style: null, children: null };
              const items2 = [tmp.mediaThumbnailContainer, ];
              const size3 = { width: size, height: size };
              items2[1] = size3;
              obj6.style = items2;
              const obj7 = { sticker: media, size, animated: !stateFromStores };
              obj6.children = React6(StickerDefault, obj7);
              return React6(View, obj6);
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
                const obj8 = { attachment: media, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: enabledHarmTypesBitmaskForMessage, shouldAgeVerify: shouldAgeVerifyForExplicitMedia };
                const attachmentObscurityProps = ExplicitMediaUtils.getAttachmentObscurityProps(obj8);
                const tmp2Result1 = ExplicitMediaUtils;
                const attachmentUrl = MediaSourceUtil.getAttachmentUrl(media);
                const tmp2Result2 = MediaSourceUtil;
                const obj9 = { src: attachmentUrl, sourceWidth: width, sourceHeight: height, targetWidth: 2 * size, targetHeight: 2 * size, animated: false, format: null };
                let str3;
                if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                  str3 = "png";
                }
                obj9.format = str3;
                const obj10 = { style: null, children: null };
                const items3 = [tmp.mediaThumbnailContainer, ];
                const size4 = { width: size, height: size };
                items3[1] = size4;
                obj10.style = items3;
                const obj11 = { isObscured: null, isSpoiler: null, children: null };
                ({ obscure: obj17.isObscured, isSpoiler: obj17.isSpoiler } = attachmentObscurityProps);
                const srcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight(obj9);
                const obj12 = { source: null, style: null, resizeMode: "cover" };
                const obj13 = { uri: srcWithWidthAndHeight };
                obj12.source = obj13;
                obj12.style = tmp.mediaThumbnail;
                const items4 = [React6(FastImageDefault, obj12), ];
                let tmp24Result = null;
                if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                  tmp24Result = React6(VideoBadge, {});
                }
                items4[1] = tmp24Result;
                obj11.children = items4;
                obj10.children = closure_1_10(ObscuredMediaOverlay, obj11);
                return React6(View, obj10);
              }
            }
          }
        }
        return null;
      }
    }
    const obj14 = { style: null, children: null };
    const items5 = [tmp.iconContainer, ];
    const size5 = { width: size, height: size };
    items5[1] = size5;
    obj14.style = items5;
    obj14.children = icon;
    return React6(View, obj14);
  }
}
function MultiplePreviewableMedia(arg0) {
  ({ previewableMedia, totalMediaCount, message } = arg0);
  let obj = { style: closure_14().container, children: null };
  const memo = noop.useMemo(() => {
    const BADGE_PADDING = native.BADGE_PADDING;
    const sum = BADGE_PADDING + 5;
    const roundToNearestPixelResult = closure_1_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
    const size = { shape: ClipView.CutoutShape.RoundedRect, x: 56 - roundToNearestPixelResult + sum, y: -sum, width: roundToNearestPixelResult, height: roundToNearestPixelResult, cornerRadius: closure_1_4.roundToNearestPixel(roundToNearestPixelResult / 2) };
    return size;
  }, []);
  obj = { cutouts: null, children: null };
  const items = [memo];
  obj.cutouts = items;
  const tmp = closure_14();
  obj.children = React6(SinglePreviewableMedia, { previewableMedia, size: 56, message });
  const items1 = [React6(ClipViewDefault, obj), React6(CountBadge, { total: totalMediaCount })];
  obj.children = items1;
  return closure_1_10(View, obj);
}
function MediaPreviewRightAccessoryContent(arg0) {
  ({ totalMediaCount, message } = arg0);
  const first = arg0.previewableMedia[0];
  if (1 === totalMediaCount) {
    let obj = { previewableMedia: first, size: 64, message };
    let tmp4 = React6(SinglePreviewableMedia, obj);
  } else {
    obj = { previewableMedia: first, totalMediaCount, message };
    tmp4 = React6(MultiplePreviewableMedia, obj);
  }
  return tmp4;
}
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { badge: null, icon: null };
let size = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.xs, width: 16, height: 16, position: "absolute", bottom: 4, left: 4 };
createStyles.badge = size;
createStyles.icon = { width: 10, height: 10 };
let closure_11 = createStyles.createStyles(createStyles);
fn(4560);
createStyles = { badge: null };
let size1 = { width: 20, height: 20, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, alignItems: "center", justifyContent: "center", position: "absolute", right: -5, top: -5 };
createStyles.badge = size1;
let closure_12 = createStyles.createStyles(createStyles);
fn(4560);
let obj1 = { mediaThumbnailContainer: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, mediaThumbnail: { width: "100%", height: "100%" }, iconContainer: null, obscureBackground: null, spoilerIconContainer: null, spoilerPill: null };
createStyles = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.sm };
obj1.iconContainer = createStyles;
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.backgroundColor = nativeDefault.unsafe_rawColors.PRIMARY_500;
obj1.obscureBackground = obj4;
let obj5 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj5.justifyContent = "center";
obj5.alignItems = "center";
obj1.spoilerIconContainer = obj5;
createStyles = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
obj1.spoilerPill = createStyles;
let closure_13 = createStyles.createStyles(obj1);
createStyles = fn(4560);
let closure_14 = createStyles.createStyles({ container: { overflow: "visible" } });
createStyles = fn(4560);
let obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_15 = createStyles.createStyles({ rightAccessoryContainer: { marginLeft: fn(10095).RIGHT_ACCESSORY_LEFT_MARGIN } });
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const MediaPreviewRightAccessory = function MediaPreviewRightAccessory(message) {
  message = message.message;
  let obj = usePreviewableMedia;
  const previewableMedia = obj.usePreviewableMedia(message);
  let tmp2 = null;
  if (0 !== previewableMedia.length) {
    obj = { style: tmp.rightAccessoryContainer, children: null };
    obj = { previewableMedia, totalMediaCount: length, message };
    obj.children = React6(MediaPreviewRightAccessoryContent, obj);
    tmp2 = React6(View, obj);
  }
  return tmp2;
};