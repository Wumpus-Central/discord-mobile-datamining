// discord_app/modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx
import isValidImageAttachment from "isValidImageAttachment";
import get_ActivityIndicator from "VoiceMessageIcon";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "preload";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let c4;
let c9;
let metroImportAll;
const require = arg1;
function VideoBadge() {
  const tmp = createCacheKey();
  obj = { style: tmp.badge, children: callback(require(8777) /* PlayIcon */.PlayIcon, obj) };
  obj = { style: tmp.icon, size: "custom", color: "white" };
  return callback(View, obj);
}
function CountBadge(children) {
  return callback(View, { style: callback3().badge, children: callback(require(4281) /* Text */.Text, { variant: "text-xs/semibold", color: "text-default", children: children.total }) });
}
function ObscuredMediaOverlay(isSpoiler) {
  let children;
  let isObscured;
  ({ isObscured, children } = isSpoiler);
  const tmp = createCacheKey();
  let obj = require(3989) /* map */;
  const token = obj.useToken(importDefault(712).colors.SPOILER_HIDDEN_BACKGROUND);
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
    obj = { style: null };
    obj[0] = tmp.obscureBackground;
    tmp8 = callback(View, obj);
  }
  items[1] = tmp8;
  let tmp11 = !isObscured;
  if (!isObscured) {
    obj = { blurTheme: null, android_fallbackColor: null, style: null };
    obj[0] = str;
    obj[1] = token;
    obj[2] = StyleSheet.absoluteFill;
    tmp11 = callback(importDefault(4685), obj);
  }
  items[2] = tmp11;
  const obj1 = { style: tmp.spoilerIconContainer, children: null };
  if (isObscured) {
    let tmp14Result = tmp14(tmp2(4791).ImageWarningIcon, { size: "sm", color: "white" });
  } else {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.spoilerPill;
    obj2[1] = tmp14(tmp2(8308).EyeIcon, { size: "sm", color: "white" });
    tmp14Result = tmp14(tmp15, obj2);
  }
  const obj3 = { children: null };
  obj1[1] = tmp14Result;
  items[3] = callback(View, obj1);
  obj3[0] = items;
  return closure_10(closure_9, obj3);
}
function SinglePreviewableMedia(arg0) {
  let height;
  let icon;
  let media;
  let message;
  let previewableMedia;
  let size;
  let type;
  let width;
  ({ previewableMedia, size, message } = arg0);
  const tmp = createCacheKey();
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  ({ type, media, icon } = previewableMedia);
  let obj1 = require(6968) /* redactionSettingToRenderedString */;
  const shouldAgeVerifyForExplicitMedia = obj1.useShouldAgeVerifyForExplicitMedia();
  let obj2 = require(9763) /* useEnabledHarmTypesBitmaskForChannelAndAuthorId */;
  const enabledHarmTypesBitmaskForMessage = obj2.useEnabledHarmTypesBitmaskForMessage(message);
  if (require(9721) /* VoiceMessageIcon */.PreviewableMediaTypes.VOICE_MESSAGE === type) {
    obj = { style: null, children: null };
    obj = { width: null, height: null };
    obj[0] = size;
    obj[1] = size;
    obj[0] = obj;
    obj[1] = icon;
    return callback(View, obj);
  } else {
    if (tmp2(9721).PreviewableMediaTypes.AUDIO !== type) {
      if (tmp2(9721).PreviewableMediaTypes.FILE !== type) {
        if (tmp2(9721).PreviewableMediaTypes.IMAGE !== type) {
          if (tmp2(9721).PreviewableMediaTypes.VIDEO !== type) {
            if (tmp2(9721).PreviewableMediaTypes.GIF === type) {
              const video = media.video;
              if (video != null) {
                const url = video.url;
              }
              const thumbnail = media.thumbnail;
              if (null == thumbnail) {
                return null;
              } else {
                let tmp2Result = tmp2(5818);
                const author = message.author;
                let id;
                if (author != null) {
                  id = author.id;
                }
                const enabledHarmTypesForChannelAndAuthorId = tmp2Result.getEnabledHarmTypesForChannelAndAuthorId(message.channel_id, id);
                tmp2Result = tmp2(5818);
                obj1 = { type: null, media: null };
                const getMediaObscuredReasonFromBitmask = tmp2Result.getMediaObscuredReasonFromBitmask;
                obj1[0] = tmp2(5823).ObscuredMediaTypes.Embed;
                obj1[1] = media;
                if (null != thumbnail.proxyURL) {
                  if ("" !== thumbnail.proxyURL) {
                    let url2 = thumbnail.proxyURL;
                  }
                  obj2 = { style: null, children: null };
                  const items1 = [tmp.mediaThumbnailContainer, ];
                  const obj3 = { width: null, height: null };
                  obj3[0] = size;
                  obj3[1] = size;
                  items1[1] = obj3;
                  obj2[0] = items1;
                  const obj4 = { isObscured: null, isSpoiler: false, children: null };
                  obj4[0] = tmp15;
                  if (null != url) {
                    if ("" !== url) {
                      if (!stateFromStores) {
                        const obj5 = { resizeMode: "cover", width: null, height: null, paused: false, src: null, poster: null, postponeRender: false };
                        obj5[1] = size;
                        obj5[2] = size;
                        const obj6 = { videoURI: null };
                        obj6[0] = url;
                        obj5[4] = obj6;
                        obj5[5] = url2;
                        let tmp16Result = tmp16(importDefault(8792), obj5);
                      }
                      obj4[2] = tmp16Result;
                      obj2[1] = tmp16(tmp18, obj4);
                      return tmp16(tmp17, obj2);
                    }
                  }
                  const obj7 = { source: null, style: null, resizeMode: "cover" };
                  const obj8 = { uri: null };
                  obj8[0] = url2;
                  obj7[0] = obj8;
                  obj7[1] = tmp.mediaThumbnail;
                  tmp16Result = tmp16(importDefault(5236), obj7);
                }
                url2 = thumbnail.url;
              }
            } else if (tmp2(9721).PreviewableMediaTypes.STICKER === type) {
              const obj9 = { style: null, children: null };
              const items2 = [tmp.mediaThumbnailContainer, ];
              const obj10 = { width: null, height: null };
              obj10[0] = size;
              obj10[1] = size;
              items2[1] = obj10;
              obj9[0] = items2;
              const obj11 = { sticker: null, size: null, animated: null };
              obj11[0] = media;
              obj11[1] = size;
              obj11[2] = !stateFromStores;
              obj9[1] = callback(importDefault(9764), obj11);
              return callback(View, obj9);
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
                const obj12 = { attachment: null, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: null, shouldAgeVerify: null };
                obj12[0] = media;
                obj12[2] = enabledHarmTypesBitmaskForMessage;
                obj12[3] = shouldAgeVerifyForExplicitMedia;
                const attachmentObscurityProps = tmp2(8039).getAttachmentObscurityProps(obj12);
                const tmp2Result1 = tmp2(8039);
                const attachmentUrl = tmp2(8768).getAttachmentUrl(media);
                const tmp2Result2 = tmp2(8768);
                const obj13 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: null, targetHeight: null, animated: false, format: null };
                obj13[0] = attachmentUrl;
                obj13[1] = width;
                obj13[2] = height;
                obj13[3] = 2 * size;
                obj13[4] = 2 * size;
                let str3;
                if (type === tmp2(9721).PreviewableMediaTypes.VIDEO) {
                  str3 = "png";
                }
                obj13[6] = str3;
                const obj14 = { style: null, children: null };
                const items3 = [tmp.mediaThumbnailContainer, ];
                const obj15 = { width: null, height: null };
                obj15[0] = size;
                obj15[1] = size;
                items3[1] = obj15;
                obj14[0] = items3;
                const obj16 = { isObscured: null, isSpoiler: null, children: null };
                ({ obscure: obj17[0], isSpoiler: obj17[1] } = attachmentObscurityProps);
                const srcWithWidthAndHeight = tmp2(1473).getSrcWithWidthAndHeight(obj13);
                const obj17 = { source: null, style: null, resizeMode: "cover" };
                const obj18 = { uri: null };
                obj18[0] = srcWithWidthAndHeight;
                obj17[0] = obj18;
                obj17[1] = tmp.mediaThumbnail;
                const items4 = [callback(importDefault(5236), obj17), ];
                let tmp24Result = null;
                if (type === tmp2(9721).PreviewableMediaTypes.VIDEO) {
                  tmp24Result = tmp24(VideoBadge, {});
                }
                items4[1] = tmp24Result;
                obj16[2] = items4;
                obj14[1] = closure_10(ObscuredMediaOverlay, obj16);
                return callback(View, obj14);
              }
            }
          }
        }
        return null;
      }
    }
    const obj19 = { style: null, children: null };
    const items5 = [tmp.iconContainer, ];
    const obj20 = { width: null, height: null };
    obj20[0] = size;
    obj20[1] = size;
    items5[1] = obj20;
    obj19[0] = items5;
    obj19[1] = icon;
    return callback(View, obj19);
  }
}
function MultiplePreviewableMedia(arg0) {
  let message;
  let previewableMedia;
  let totalMediaCount;
  ({ previewableMedia, totalMediaCount, message } = arg0);
  let obj = { style: callback4().container, children: null };
  const memo = React.useMemo(() => {
    const BADGE_PADDING = callback(1297).BADGE_PADDING;
    const sum = BADGE_PADDING + 5;
    const roundToNearestPixelResult = closure_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
    const obj = { shape: null, x: null, y: null, width: null, height: null, cornerRadius: null };
    obj[0] = callback(8103).CutoutShape.RoundedRect;
    obj[1] = 56 - roundToNearestPixelResult + sum;
    obj[2] = -sum;
    obj[3] = roundToNearestPixelResult;
    obj[4] = roundToNearestPixelResult;
    obj[5] = closure_4.roundToNearestPixel(roundToNearestPixelResult / 2);
    return obj;
  }, []);
  obj = { cutouts: items, children: null };
  items = [memo];
  const tmp = callback4();
  obj[1] = callback(SinglePreviewableMedia, { previewableMedia, size: 56, message });
  const items1 = [callback(importDefault(8103), obj), callback(CountBadge, { total: totalMediaCount })];
  obj[1] = items1;
  return callback2(View, obj);
}
function MediaPreviewRightAccessoryContent(arg0) {
  let message;
  let totalMediaCount;
  ({ totalMediaCount, message } = arg0);
  const first = arg0.previewableMedia[0];
  if (1 === totalMediaCount) {
    let obj = { previewableMedia: null, size: 64, message: null };
    obj[0] = first;
    obj[2] = message;
    let tmp4 = callback(SinglePreviewableMedia, obj);
  } else {
    obj = { previewableMedia: null, totalMediaCount: null, message: null };
    obj[0] = first;
    obj[1] = totalMediaCount;
    obj[2] = message;
    tmp4 = callback(MultiplePreviewableMedia, obj);
  }
  return tmp4;
}
function ExpandableMediaPreview(accessoryExitProgressSV) {
  let message;
  let previewableMedia;
  let totalMediaCount;
  accessoryExitProgressSV = accessoryExitProgressSV.accessoryExitProgressSV;
  ({ message, totalMediaCount, previewableMedia } = accessoryExitProgressSV);
  let obj = accessoryExitProgressSV(4146);
  const fn = function l() {
    const value = accessoryExitProgressSV.get();
    let obj = { opacity: 1 - value, transform: items };
    obj = { scale: 1 - value };
    items = [obj];
    return obj;
  };
  fn.__closure = { accessoryExitProgressSV };
  fn.__workletHash = 9116777278421;
  fn.__initData = closure_22;
  const animatedStyle = obj.useAnimatedStyle(fn);
  obj = { style: items, children: null };
  items = [callback5().rightAccessoryAbsolute, animatedStyle];
  obj[1] = callback(MediaPreviewRightAccessoryContent, { previewableMedia, totalMediaCount, message });
  return callback(importDefault(4146).View, obj);
}
function SimpleMediaPreview(arg0) {
  let message;
  let previewableMedia;
  let totalMediaCount;
  ({ message, previewableMedia, totalMediaCount } = arg0);
  return callback(View, { style: callback5().rightAccessoryContainer, children: callback(MediaPreviewRightAccessoryContent, { previewableMedia, totalMediaCount, message }) });
}
({ PixelRatio: c4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = jsxProd);
createCacheKey = { badge: null, icon: null };
createCacheKey = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.xs, width: 16, height: 16, position: "absolute", bottom: 4, left: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 10, height: 10 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { badge: null };
obj1[0] = { width: 20, height: 20, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", position: "absolute", right: -5, top: -5 };
let closure_12 = createCacheKey.createStyles(obj1);
createCacheKey = { mediaThumbnailContainer: null, mediaThumbnail: null, iconContainer: null, obscureBackground: null, spoilerIconContainer: null, spoilerPill: null };
let obj2 = { width: 20, height: 20, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.round, alignItems: "center", justifyContent: "center", position: "absolute", right: -5, top: -5 };
createCacheKey[0] = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[1] = { width: "100%", height: "100%" };
let obj4 = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[2] = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.sm };
createCacheKey = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.backgroundColor = require("Themes").unsafe_rawColors.PRIMARY_500;
createCacheKey[3] = createCacheKey;
let obj7 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj7.justifyContent = "center";
obj7.alignItems = "center";
createCacheKey[4] = obj7;
let obj5 = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.sm };
createCacheKey[5] = { padding: require("Themes").space.PX_4, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_14 = createCacheKey.createStyles({ container: { overflow: "visible" } });
let obj9 = { rightAccessoryContainer: { marginLeft: require("set").RIGHT_ACCESSORY_LEFT_MARGIN }, rightAccessoryAbsolute: null };
let obj8 = { padding: require("Themes").space.PX_4, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, justifyContent: "center", alignItems: "center" };
obj9[1] = { position: "absolute", right: require("Themes").space.PX_12, top: require("Themes").space.PX_12 };
let closure_15 = createCacheKey.createStyles(obj9);
let closure_22 = { code: "function MediaPreviewRightAccessoryTsx1(){const{accessoryExitProgressSV}=this.__closure;const progress=accessoryExitProgressSV.get();return{opacity:1-progress,transform:[{scale:1-progress}]};}" };
let obj10 = { position: "absolute", right: require("Themes").space.PX_12, top: require("Themes").space.PX_12 };
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const PREVIEW_SIZE = 64;
export const MediaPreviewRightAccessory = function MediaPreviewRightAccessory(arg0) {
  let accessoryExitProgressSV;
  let message;
  ({ message, accessoryExitProgressSV } = arg0);
  let obj = require(9721) /* VoiceMessageIcon */;
  const previewableMedia = obj.usePreviewableMedia(message);
  if (0 === previewableMedia.length) {
    return null;
  } else if (null != accessoryExitProgressSV) {
    obj = { message: null, previewableMedia: null, totalMediaCount: null, accessoryExitProgressSV: null };
    obj[0] = message;
    obj[1] = previewableMedia;
    obj[2] = length;
    obj[3] = accessoryExitProgressSV;
    let tmp3 = callback(ExpandableMediaPreview, obj);
  } else {
    obj = { message: null, previewableMedia: null, totalMediaCount: null };
    obj[0] = message;
    obj[1] = previewableMedia;
    obj[2] = length;
    tmp3 = callback(SimpleMediaPreview, obj);
  }
};