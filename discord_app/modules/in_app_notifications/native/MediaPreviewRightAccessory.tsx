// discord_app/modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import utils_ImageUtils from "../../../utils/native/ImageUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VisualEffectViewDefault from "../../visual_effect_view/native/VisualEffectView.tsx";
import ImageWarningIcon from "../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import EyeIcon from "../../../design/components/Icon/native/redesign/generated/EyeIcon.tsx";
import ObscuredMediaUtils from "../../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ExplicitMediaRedactionModels from "../../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import ExplicitMediaRedactionUtils from "../../explicit_media_redaction/ExplicitMediaRedactionUtils.tsx";
import ExplicitMediaUtils from "../../messages/native/renderer/ExplicitMediaUtils.tsx";
import MediaSourceUtil from "../../media_viewer/native/MediaSourceUtil.tsx";
import PlayIcon from "../../../design/components/Icon/native/redesign/generated/PlayIcon.tsx";
import common_VideoDefault from "../../../components_native/common/Video.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import StickerDefault from "../../stickers/native/Sticker.tsx";
import useContentHarmTypes from "../../explicit_media_redaction/hooks/useContentHarmTypes.tsx";
import InAppNotificationConstants from "InAppNotificationConstants.tsx";
import usePreviewableMedia from "hooks/usePreviewableMedia.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const ClipViewDefault = ClipView;
let isSpoiler, total;

let StyleSheet;
let c10;
let c9;
let closure_4;
let metroImportAll;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let size;
let size1;
({ PixelRatio: closure_4, StyleSheet } = react_native);
const View = react_native.View;
const RIGHT_ACCESSORY_LEFT_MARGIN = InAppNotificationConstants.RIGHT_ACCESSORY_LEFT_MARGIN;
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { badge: size, icon: { width: 10, height: 10 } };
size = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.xs,
  width: 16,
  height: 16,
  position: "absolute",
  bottom: 4,
  left: 4,
};
let closure_11 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let obj2 = { badge: size1 };
size1 = {
  width: 20,
  height: 20,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: -5,
  top: -5,
};
let closure_12 = createStyles.createStyles(obj2);
createStyles = createStyles_mod;
let obj3 = {
  mediaThumbnailContainer: obj4,
  mediaThumbnail: { width: "100%", height: "100%" },
  iconContainer: obj5,
  obscureBackground: obj6,
  spoilerIconContainer: obj7,
  spoilerPill: obj8,
};
obj4 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj5 = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
};
obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7 = { justifyContent: "center", alignItems: "center" };
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj8 = {
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  alignItems: "center",
};
let closure_13 = createStyles(obj3);
createStyles = createStyles_mod;
let closure_14 = createStyles.createStyles({ container: { overflow: "visible" } });
createStyles = createStyles_mod;
let obj9 = { rightAccessoryContainer: { marginLeft: RIGHT_ACCESSORY_LEFT_MARGIN } };
let closure_15 = createStyles.createStyles(obj9);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      const tmp4 = closure_11();
      if (cResult[0] !== tmp4.icon) {
        const obj2 = { style: tmp4.icon, size: "custom", color: "white" };
        const tmp7 = metroImportAll(PlayIcon.PlayIcon, obj2);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.badge) {
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const obj3 = { style: tmp4.badge, children: tmp5 };
      const tmp9 = metroImportAll(View, obj3);
      cResult[2] = tmp4.badge;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : () => {
      let obj2;
      const tmp = closure_11();
      const obj = { style: tmp.badge, children: metroImportAll(PlayIcon.PlayIcon, obj2) };
      obj2 = { style: tmp.icon, size: "custom", color: "white" };
      return metroImportAll(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (total) => {
      let tmp5;
      const obj = react2;
      const cResult = obj.c(5);
      total = total.total;
      const tmp4 = closure_12();
      if (cResult[0] !== total) {
        const obj2 = { variant: "text-xs/semibold", color: "text-default", children: total };
        const tmp7 = metroImportAll(Text_Text.Text, obj2);
        cResult[0] = total;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.badge) {
        let tmp8;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        return tmp8;
      }
      const obj3 = { style: tmp4.badge, children: tmp5 };
      const tmp9 = metroImportAll(View, obj3);
      cResult[2] = tmp4.badge;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
    }
  : (total) => {
      total = total.total;
      const obj = {
        style: closure_12().badge,
        children: metroImportAll(Text_Text.Text, {
          variant: "text-xs/semibold",
          color: "text-default",
          children: total,
        }),
      };
      return metroImportAll(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSpoiler) => {
      let children;
      let isObscured;
      let items;
      const obj = react2;
      const cResult = obj.c(17);
      ({ isObscured, children } = isSpoiler);
      isSpoiler = isSpoiler.isSpoiler;
      const tmp4 = closure_13();
      const obj2 = useToken;
      const token = obj2.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
      if (!isObscured) {
        if (!isSpoiler) {
          return children;
        }
      }
      let str = "light";
      const tmpResult = PlatformUtils;
      if (tmpResult.isAndroid()) {
        str = "dark";
      }
      if (cResult[0] === isObscured) {
        let tmp7;
        if (cResult[1] === tmp4.obscureBackground) {
          tmp7 = cResult[2];
        }
        if (cResult[3] === isObscured) {
          let tmp11;
          let tmp16Result;
          if (cResult[4] === token) {
            tmp11 = cResult[5];
          }
          if (cResult[6] === isObscured) {
            let tmp15;
            if (cResult[7] === tmp4.spoilerPill) {
              tmp15 = cResult[8];
            }
            if (cResult[9] === tmp4.spoilerIconContainer) {
              let tmp19;
              if (cResult[10] === tmp15) {
                tmp19 = cResult[11];
              }
              if (cResult[12] === children) {
                if (cResult[13] === tmp7) {
                  if (cResult[14] === tmp11) {
                    let tmp23;
                    if (cResult[15] === tmp19) {
                      tmp23 = cResult[16];
                    }
                    return tmp23;
                  }
                }
              }
              const obj3 = { children: items };
              items = [children, tmp7, tmp11, tmp19];
              const tmp26 = authStore(React4, obj3);
              cResult[12] = children;
              cResult[13] = tmp7;
              cResult[14] = tmp11;
              cResult[15] = tmp19;
              cResult[16] = tmp26;
              tmp23 = tmp26;
            }
            const obj4 = { style: tmp4.spoilerIconContainer, children: tmp15 };
            const tmp22 = metroImportAll(View, obj4);
            cResult[9] = tmp4.spoilerIconContainer;
            cResult[10] = tmp15;
            cResult[11] = tmp22;
            tmp19 = tmp22;
          }
          if (isObscured) {
            tmp16Result = metroImportAll(ImageWarningIcon.ImageWarningIcon, { size: "sm", color: "white" });
          } else {
            const obj5 = {
              style: tmp4.spoilerPill,
              children: metroImportAll(EyeIcon.EyeIcon, { size: "sm", color: "white" }),
            };
            tmp16Result = metroImportAll(View, obj5);
          }
          cResult[6] = isObscured;
          cResult[7] = tmp4.spoilerPill;
          cResult[8] = tmp16Result;
          tmp15 = tmp16Result;
        }
        let tmp12 = !isObscured;
        if (tmp12) {
          const obj6 = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
          tmp12 = metroImportAll(VisualEffectViewDefault, obj6);
        }
        cResult[3] = isObscured;
        cResult[4] = token;
        cResult[5] = tmp12;
        tmp11 = tmp12;
      }
      let tmp8 = isObscured;
      if (tmp8) {
        const obj7 = { style: tmp4.obscureBackground };
        tmp8 = metroImportAll(View, obj7);
      }
      cResult[0] = isObscured;
      cResult[1] = tmp4.obscureBackground;
      cResult[2] = tmp8;
      tmp7 = tmp8;
    }
  : (isSpoiler) => {
      let children;
      let isObscured;
      let tmp14Result;
      ({ isObscured, children } = isSpoiler);
      isSpoiler = isSpoiler.isSpoiler;
      const tmp = closure_13();
      const obj = useToken;
      const token = obj.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
      if (!isObscured) {
        if (!isSpoiler) {
          return children;
        }
      }
      let str = "light";
      const tmp2Result = PlatformUtils;
      if (tmp2Result.isAndroid()) {
        str = "dark";
      }
      const items = [children, , ,];
      let tmp8 = isObscured;
      if (tmp8) {
        const obj2 = { style: tmp.obscureBackground };
        tmp8 = metroImportAll(View, obj2);
      }
      items[1] = tmp8;
      let tmp11 = !isObscured;
      if (tmp11) {
        const obj3 = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
        tmp11 = metroImportAll(VisualEffectViewDefault, obj3);
      }
      items[2] = tmp11;
      const obj4 = { style: tmp.spoilerIconContainer, children: tmp14Result };
      if (isObscured) {
        tmp14Result = metroImportAll(ImageWarningIcon.ImageWarningIcon, { size: "sm", color: "white" });
      } else {
        const obj5 = {
          style: tmp.spoilerPill,
          children: metroImportAll(EyeIcon.EyeIcon, { size: "sm", color: "white" }),
        };
        tmp14Result = metroImportAll(View, obj5);
      }
      const obj6 = { children: items };
      items[3] = metroImportAll(View, obj4);
      return authStore(React4, obj6);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let height;
      let icon;
      let items3;
      let media;
      let message;
      let obj5;
      let obj7;
      let previewableMedia;
      let str3;
      let tmp5;
      let tmp6;
      let type;
      let useReducedMotion;
      let width;
      const obj = react2;
      const cResult = obj.c(79);
      ({ previewableMedia, size, message } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function l() {
          return useReducedMotion.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      ({ type, media, icon } = previewableMedia);
      const tmpResult8 = ExplicitMediaRedactionUtils;
      const shouldAgeVerifyForExplicitMedia = tmpResult8.useShouldAgeVerifyForExplicitMedia();
      const tmpResult9 = useContentHarmTypes;
      const enabledHarmTypesBitmaskForMessage = tmpResult9.useEnabledHarmTypesBitmaskForMessage(message);
      if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        let tmp82;
        if (cResult[2] !== size) {
          const size1 = { width: size, height: size };
          cResult[2] = size;
          cResult[3] = size1;
          tmp82 = size1;
        } else {
          tmp82 = cResult[3];
        }
        if (cResult[4] === icon) {
          let tmp83;
          if (cResult[5] === tmp82) {
            tmp83 = cResult[6];
          }
          return tmp83;
        }
        const obj2 = { style: tmp82, children: icon };
        const tmp86 = metroImportAll(View, obj2);
        cResult[4] = icon;
        cResult[5] = tmp82;
        cResult[6] = tmp86;
        tmp83 = tmp86;
      } else {
        let tmp76;
        if (usePreviewableMedia.PreviewableMediaTypes.AUDIO !== type) {
          if (usePreviewableMedia.PreviewableMediaTypes.FILE !== type) {
            if (usePreviewableMedia.PreviewableMediaTypes.IMAGE !== type) {
              if (usePreviewableMedia.PreviewableMediaTypes.VIDEO !== type) {
                if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
                  let url;
                  const video = media.video;
                  if (video != null) {
                    url = video.url;
                  }
                  const thumbnail = media.thumbnail;
                  if (null == thumbnail) {
                    return null;
                  } else {
                    if (cResult[45] === media) {
                      const author = message.author;
                      let id;
                      const tmp24 = cResult[46];
                      if (author != null) {
                        id = author.id;
                      }
                      if (tmp24 === id) {
                        let arr3;
                        if (cResult[47] === message.channel_id) {
                          arr3 = cResult[48];
                        }
                        if (null != thumbnail.proxyURL) {
                          let url2;
                          let tmp34;
                          if ("" !== thumbnail.proxyURL) {
                            url2 = thumbnail.proxyURL;
                          }
                          if (cResult[49] !== size) {
                            const size2 = { width: size, height: size };
                            cResult[49] = size;
                            cResult[50] = size2;
                            tmp34 = size2;
                          } else {
                            tmp34 = cResult[50];
                          }
                          if (cResult[51] === tmp4.mediaThumbnailContainer) {
                            let tmp35;
                            let tmp36;
                            if (cResult[52] === tmp34) {
                              tmp35 = cResult[53];
                            }
                            if (cResult[54] === (null != url && "" !== url)) {
                              if (cResult[55] === url2) {
                                if (cResult[56] === stateFromStores) {
                                  if (cResult[57] === size) {
                                    if (cResult[58] === tmp4.mediaThumbnail) {
                                      if (cResult[59] === url) {
                                        tmp36 = cResult[60];
                                      }
                                      if (cResult[61] === arr3.length > 0) {
                                        let tmp42;
                                        if (cResult[62] === tmp36) {
                                          tmp42 = cResult[63];
                                        }
                                        if (cResult[64] === tmp35) {
                                          let tmp46;
                                          if (cResult[65] === tmp42) {
                                            tmp46 = cResult[66];
                                          }
                                          return tmp46;
                                        }
                                        const obj3 = { style: tmp35, children: tmp42 };
                                        const tmp49 = metroImportAll(View, obj3);
                                        cResult[64] = tmp35;
                                        cResult[65] = tmp42;
                                        cResult[66] = tmp49;
                                        tmp46 = tmp49;
                                      }
                                      const obj4 = { isObscured: arr3.length > 0, isSpoiler: false, children: tmp36 };
                                      const tmp45 = metroImportAll(closure_18, obj4);
                                      cResult[61] = arr3.length > 0;
                                      cResult[62] = tmp36;
                                      cResult[63] = tmp45;
                                      tmp42 = tmp45;
                                    }
                                  }
                                }
                              }
                            }
                            if (null != url && "" !== url) {
                              let tmp39;
                              if (!stateFromStores) {
                                const size3 = {
                                  resizeMode: "cover",
                                  width: size,
                                  height: size,
                                  paused: false,
                                  src: obj5,
                                  poster: url2,
                                  postponeRender: false,
                                };
                                obj5 = { videoURI: url };
                                tmp39 = metroImportAll(common_VideoDefault, size3);
                              }
                              cResult[54] = null != url && "" !== url;
                              cResult[55] = url2;
                              cResult[56] = stateFromStores;
                              cResult[57] = size;
                              cResult[58] = tmp4.mediaThumbnail;
                              cResult[59] = url;
                              cResult[60] = tmp39;
                              tmp36 = tmp39;
                            }
                            const obj6 = { source: obj7, style: tmp4.mediaThumbnail, resizeMode: "cover" };
                            obj7 = { uri: url2 };
                            tmp39 = metroImportAll(FastImageDefault, obj6);
                          }
                          const items1 = [tmp4.mediaThumbnailContainer, tmp34];
                          cResult[51] = tmp4.mediaThumbnailContainer;
                          cResult[52] = tmp34;
                          cResult[53] = items1;
                          tmp35 = items1;
                        }
                        url2 = thumbnail.url;
                      }
                    }
                    const author2 = message.author;
                    let id1;
                    const getEnabledHarmTypesForChannelAndAuthorId =
                      ObscuredMediaUtils.getEnabledHarmTypesForChannelAndAuthorId;
                    const channel_id = message.channel_id;
                    ObscuredMediaUtils;
                    if (author2 != null) {
                      id1 = author2.id;
                    }
                    const enabledHarmTypesForChannelAndAuthorId = getEnabledHarmTypesForChannelAndAuthorId(
                      channel_id,
                      id1,
                    );
                    const obj8 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
                    const getMediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask;
                    ObscuredMediaUtils;
                    const mediaObscuredReasonFromBitmask = getMediaObscuredReasonFromBitmask(
                      obj8,
                      enabledHarmTypesForChannelAndAuthorId,
                    );
                    cResult[45] = media;
                    const author3 = message.author;
                    let id2;
                    if (author3 != null) {
                      id2 = author3.id;
                    }
                    cResult[46] = id2;
                    cResult[47] = message.channel_id;
                    cResult[48] = mediaObscuredReasonFromBitmask;
                    arr3 = mediaObscuredReasonFromBitmask;
                  }
                } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
                  let tmp12;
                  if (cResult[67] !== size) {
                    const size4 = { width: size, height: size };
                    cResult[67] = size;
                    cResult[68] = size4;
                    tmp12 = size4;
                  } else {
                    tmp12 = cResult[68];
                  }
                  if (cResult[69] === tmp4.mediaThumbnailContainer) {
                    let tmp13;
                    if (cResult[70] === tmp12) {
                      tmp13 = cResult[71];
                    }
                    if (cResult[72] === media) {
                      if (cResult[73] === size) {
                        let tmp15;
                        if (cResult[74] === !stateFromStores) {
                          tmp15 = cResult[75];
                        }
                        if (cResult[76] === tmp13) {
                          let tmp19;
                          if (cResult[77] === tmp15) {
                            tmp19 = cResult[78];
                          }
                          return tmp19;
                        }
                        const obj9 = { style: tmp13, children: tmp15 };
                        const tmp22 = metroImportAll(View, obj9);
                        cResult[76] = tmp13;
                        cResult[77] = tmp15;
                        cResult[78] = tmp22;
                        tmp19 = tmp22;
                      }
                    }
                    const obj10 = { sticker: media, size, animated: !stateFromStores };
                    const tmp18 = metroImportAll(StickerDefault, obj10);
                    cResult[72] = media;
                    cResult[73] = size;
                    cResult[74] = !stateFromStores;
                    cResult[75] = tmp18;
                    tmp15 = tmp18;
                  }
                  const items2 = [tmp4.mediaThumbnailContainer, tmp12];
                  cResult[69] = tmp4.mediaThumbnailContainer;
                  cResult[70] = tmp12;
                  cResult[71] = items2;
                  tmp13 = items2;
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
                    if (cResult[15] === enabledHarmTypesBitmaskForMessage) {
                      if (cResult[16] === media) {
                        let tmp51;
                        if (cResult[17] === shouldAgeVerifyForExplicitMedia) {
                          tmp51 = cResult[18];
                        }
                        if (cResult[19] === height) {
                          if (cResult[20] === media) {
                            if (cResult[21] === size) {
                              if (cResult[22] === type) {
                                let tmp53;
                                let tmp57;
                                if (cResult[23] === width) {
                                  tmp53 = cResult[24];
                                }
                                if (cResult[25] !== size) {
                                  const size5 = { width: size, height: size };
                                  cResult[25] = size;
                                  cResult[26] = size5;
                                  tmp57 = size5;
                                } else {
                                  tmp57 = cResult[26];
                                }
                                if (cResult[27] === tmp4.mediaThumbnailContainer) {
                                  let tmp58;
                                  let tmp59;
                                  if (cResult[28] === tmp57) {
                                    tmp58 = cResult[29];
                                  }
                                  if (cResult[30] !== tmp53) {
                                    const obj11 = { uri: tmp53 };
                                    cResult[30] = tmp53;
                                    cResult[31] = obj11;
                                    tmp59 = obj11;
                                  } else {
                                    tmp59 = cResult[31];
                                  }
                                  if (cResult[32] === tmp4.mediaThumbnail) {
                                    let tmp60;
                                    let tmp64;
                                    if (cResult[33] === tmp59) {
                                      tmp60 = cResult[34];
                                    }
                                    if (cResult[35] !== type) {
                                      let tmp65 = null;
                                      if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                                        tmp65 = metroImportAll(closure_16, {});
                                      }
                                      cResult[35] = type;
                                      cResult[36] = tmp65;
                                      tmp64 = tmp65;
                                    } else {
                                      tmp64 = cResult[36];
                                    }
                                    if (cResult[37] === tmp51.isSpoiler) {
                                      if (cResult[38] === tmp51.obscure) {
                                        if (cResult[39] === tmp60) {
                                          let tmp68;
                                          if (cResult[40] === tmp64) {
                                            tmp68 = cResult[41];
                                          }
                                          if (cResult[42] === tmp68) {
                                            let tmp72;
                                            if (cResult[43] === tmp58) {
                                              tmp72 = cResult[44];
                                            }
                                            return tmp72;
                                          }
                                          const obj12 = { style: tmp58, children: tmp68 };
                                          const tmp75 = metroImportAll(View, obj12);
                                          cResult[42] = tmp68;
                                          cResult[43] = tmp58;
                                          cResult[44] = tmp75;
                                          tmp72 = tmp75;
                                        }
                                      }
                                    }
                                    const obj13 = { isObscured: null, isSpoiler: null, children: items3 };
                                    ({ obscure: obj23.isObscured, isSpoiler: obj23.isSpoiler } = tmp51);
                                    items3 = [tmp60, tmp64];
                                    const tmp71 = authStore(closure_18, obj13);
                                    cResult[37] = tmp51.isSpoiler;
                                    cResult[38] = tmp51.obscure;
                                    cResult[39] = tmp60;
                                    cResult[40] = tmp64;
                                    cResult[41] = tmp71;
                                    tmp68 = tmp71;
                                  }
                                  const obj14 = { source: tmp59, style: tmp4.mediaThumbnail, resizeMode: "cover" };
                                  const tmp63 = metroImportAll(FastImageDefault, obj14);
                                  cResult[32] = tmp4.mediaThumbnail;
                                  cResult[33] = tmp59;
                                  cResult[34] = tmp63;
                                  tmp60 = tmp63;
                                }
                                const items4 = [tmp4.mediaThumbnailContainer, tmp57];
                                cResult[27] = tmp4.mediaThumbnailContainer;
                                cResult[28] = tmp57;
                                cResult[29] = items4;
                                tmp58 = items4;
                              }
                            }
                          }
                        }
                        const tmpResult12 = MediaSourceUtil;
                        const attachmentUrl = tmpResult12.getAttachmentUrl(media);
                        const obj15 = {
                          src: attachmentUrl,
                          sourceWidth: width,
                          sourceHeight: height,
                          targetWidth: 2 * size,
                          targetHeight: 2 * size,
                          animated: false,
                          format: str3,
                        };
                        const getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
                        str3 = undefined;
                        utils_ImageUtils;
                        if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                          str3 = "png";
                        }
                        const srcWithWidthAndHeight = getSrcWithWidthAndHeight(obj15);
                        cResult[19] = height;
                        cResult[20] = media;
                        cResult[21] = size;
                        cResult[22] = type;
                        cResult[23] = width;
                        cResult[24] = srcWithWidthAndHeight;
                        tmp53 = srcWithWidthAndHeight;
                      }
                    }
                    const obj16 = {
                      attachment: media,
                      shouldObscureSpoiler: true,
                      enabledContentHarmTypeFlags: enabledHarmTypesBitmaskForMessage,
                      shouldAgeVerify: shouldAgeVerifyForExplicitMedia,
                    };
                    const tmpResult14 = ExplicitMediaUtils;
                    const attachmentObscurityProps = tmpResult14.getAttachmentObscurityProps(obj16);
                    cResult[15] = enabledHarmTypesBitmaskForMessage;
                    cResult[16] = media;
                    cResult[17] = shouldAgeVerifyForExplicitMedia;
                    cResult[18] = attachmentObscurityProps;
                    tmp51 = attachmentObscurityProps;
                  }
                }
              }
            }
            return null;
          }
        }
        if (cResult[7] !== size) {
          const size6 = { width: size, height: size };
          cResult[7] = size;
          cResult[8] = size6;
          tmp76 = size6;
        } else {
          tmp76 = cResult[8];
        }
        if (cResult[9] === tmp4.iconContainer) {
          let tmp77;
          if (cResult[10] === tmp76) {
            tmp77 = cResult[11];
          }
          if (cResult[12] === icon) {
            let tmp78;
            if (cResult[13] === tmp77) {
              tmp78 = cResult[14];
            }
            return tmp78;
          }
          const obj17 = { style: tmp77, children: icon };
          const tmp81 = metroImportAll(View, obj17);
          cResult[12] = icon;
          cResult[13] = tmp77;
          cResult[14] = tmp81;
          tmp78 = tmp81;
        }
        const items5 = [tmp4.iconContainer, tmp76];
        cResult[9] = tmp4.iconContainer;
        cResult[10] = tmp76;
        cResult[11] = items5;
        tmp77 = items5;
      }
    }
  : (arg0) => {
      let height;
      let icon;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let media;
      let message;
      let obj10;
      let obj12;
      let obj16;
      let obj19;
      let obj8;
      let previewableMedia;
      let size1;
      let str3;
      let type;
      let useReducedMotion;
      let width;
      ({ previewableMedia, size, message } = arg0);
      const tmp = closure_13();
      const items = [AccessibilityStore];
      const obj = useStateFromStores;
      const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      ({ type, media, icon } = previewableMedia);
      const obj2 = ExplicitMediaRedactionUtils;
      const shouldAgeVerifyForExplicitMedia = obj2.useShouldAgeVerifyForExplicitMedia();
      const obj3 = useContentHarmTypes;
      const enabledHarmTypesBitmaskForMessage = obj3.useEnabledHarmTypesBitmaskForMessage(message);
      if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        const obj4 = { style: size1, children: icon };
        size1 = { width: size, height: size };
        return metroImportAll(View, obj4);
      } else {
        if (usePreviewableMedia.PreviewableMediaTypes.AUDIO !== type) {
          if (usePreviewableMedia.PreviewableMediaTypes.FILE !== type) {
            if (usePreviewableMedia.PreviewableMediaTypes.IMAGE !== type) {
              if (usePreviewableMedia.PreviewableMediaTypes.VIDEO !== type) {
                if (usePreviewableMedia.PreviewableMediaTypes.GIF === type) {
                  let url;
                  const video = media.video;
                  if (video != null) {
                    url = video.url;
                  }
                  const thumbnail = media.thumbnail;
                  if (null == thumbnail) {
                    return null;
                  } else {
                    const author = message.author;
                    let id;
                    const getEnabledHarmTypesForChannelAndAuthorId =
                      ObscuredMediaUtils.getEnabledHarmTypesForChannelAndAuthorId;
                    const channel_id = message.channel_id;
                    ObscuredMediaUtils;
                    if (author != null) {
                      id = author.id;
                    }
                    const enabledHarmTypesForChannelAndAuthorId = getEnabledHarmTypesForChannelAndAuthorId(
                      channel_id,
                      id,
                    );
                    ({ type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media });
                    const getMediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask;
                    ObscuredMediaUtils;
                    if (null != thumbnail.proxyURL) {
                      let url2;
                      if ("" !== thumbnail.proxyURL) {
                        url2 = thumbnail.proxyURL;
                      }
                      const obj6 = { style: items1, children: null };
                      items1 = [tmp.mediaThumbnailContainer];
                      const size2 = { width: size, height: size };
                      items1[1] = size2;
                      const obj7 = { isObscured: tmp15, isSpoiler: false, children: null };
                      if (null != url) {
                        if ("" !== url) {
                          let tmp16Result;
                          if (!stateFromStores) {
                            const size3 = {
                              resizeMode: "cover",
                              width: size,
                              height: size,
                              paused: false,
                              src: obj8,
                              poster: url2,
                              postponeRender: false,
                            };
                            obj8 = { videoURI: url };
                            tmp16Result = metroImportAll(common_VideoDefault, size3);
                          }
                          obj7.children = tmp16Result;
                          obj6.children = metroImportAll(tmp18, obj7);
                          return metroImportAll(tmp17, obj6);
                        }
                      }
                      const obj9 = { source: obj10, style: tmp.mediaThumbnail, resizeMode: "cover" };
                      obj10 = { uri: url2 };
                      tmp16Result = metroImportAll(FastImageDefault, obj9);
                    }
                    url2 = thumbnail.url;
                  }
                } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
                  const obj11 = { style: items2, children: metroImportAll(StickerDefault, obj12) };
                  items2 = [tmp.mediaThumbnailContainer];
                  const size4 = { width: size, height: size };
                  items2[1] = size4;
                  obj12 = { sticker: media, size, animated: !stateFromStores };
                  return metroImportAll(View, obj11);
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
                    const obj13 = {
                      attachment: media,
                      shouldObscureSpoiler: true,
                      enabledContentHarmTypeFlags: enabledHarmTypesBitmaskForMessage,
                      shouldAgeVerify: shouldAgeVerifyForExplicitMedia,
                    };
                    const tmp2Result6 = ExplicitMediaUtils;
                    const attachmentObscurityProps = tmp2Result6.getAttachmentObscurityProps(obj13);
                    const tmp2Result7 = MediaSourceUtil;
                    const attachmentUrl = tmp2Result7.getAttachmentUrl(media);
                    const obj14 = {
                      src: attachmentUrl,
                      sourceWidth: width,
                      sourceHeight: height,
                      targetWidth: 2 * size,
                      targetHeight: 2 * size,
                      animated: false,
                      format: str3,
                    };
                    const getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
                    str3 = undefined;
                    utils_ImageUtils;
                    if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                      str3 = "png";
                    }
                    const obj15 = { style: items3, children: authStore(closure_18, obj16) };
                    items3 = [tmp.mediaThumbnailContainer];
                    const size5 = { width: size, height: size };
                    items3[1] = size5;
                    obj16 = { isObscured: null, isSpoiler: null, children: items4 };
                    ({ obscure: obj17.isObscured, isSpoiler: obj17.isSpoiler } = attachmentObscurityProps);
                    const srcWithWidthAndHeight = getSrcWithWidthAndHeight(obj14);
                    const obj18 = { source: obj19, style: tmp.mediaThumbnail, resizeMode: "cover" };
                    obj19 = { uri: srcWithWidthAndHeight };
                    items4 = [metroImportAll(FastImageDefault, obj18)];
                    let tmp24Result = null;
                    if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                      tmp24Result = metroImportAll(closure_16, {});
                    }
                    items4[1] = tmp24Result;
                    return metroImportAll(View, obj15);
                  }
                }
              }
            }
            return null;
          }
        }
        const obj20 = { style: items5, children: icon };
        items5 = [tmp.iconContainer];
        const size6 = { width: size, height: size };
        items5[1] = size6;
        return metroImportAll(View, obj20);
      }
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let items1;
      let message;
      let previewableMedia;
      let roundToNearestPixelResult1;
      let tmp9;
      let totalMediaCount;
      const obj = react2;
      const cResult = obj.c(11);
      ({ previewableMedia, totalMediaCount, message } = arg0);
      const tmp4 = closure_14();
      const sum = native.BADGE_PADDING + 5;
      const roundToNearestPixelResult = React3.roundToNearestPixel(20 + 2 * native.BADGE_PADDING);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        size = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: 56 - roundToNearestPixelResult + sum,
          y: -sum,
          width: roundToNearestPixelResult,
          height: roundToNearestPixelResult,
          cornerRadius: roundToNearestPixelResult1,
        };
        cResult[0] = size;
        first = size;
        roundToNearestPixelResult1 = React3.roundToNearestPixel(roundToNearestPixelResult / 2);
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first];
        cResult[1] = items;
        tmp9 = items;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === message) {
        let tmp10;
        let tmp13;
        if (cResult[3] === previewableMedia) {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== totalMediaCount) {
          const obj3 = { total: totalMediaCount };
          const tmp16 = metroImportAll(closure_17, obj3);
          cResult[5] = totalMediaCount;
          cResult[6] = tmp16;
          tmp13 = tmp16;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp10) {
            let tmp17;
            if (cResult[9] === tmp13) {
              tmp17 = cResult[10];
            }
            return tmp17;
          }
        }
        const obj4 = { style: tmp4.container, children: items1 };
        items1 = [tmp10, tmp13];
        const tmp20 = authStore(View, obj4);
        cResult[7] = tmp4.container;
        cResult[8] = tmp10;
        cResult[9] = tmp13;
        cResult[10] = tmp20;
        tmp17 = tmp20;
      }
      const obj5 = { cutouts: tmp9, children: metroImportAll(closure_19, { previewableMedia, size: 56, message }) };
      const tmp11 = ClipViewDefault;
      const tmp12 = metroImportAll(tmp11, obj5);
      cResult[2] = message;
      cResult[3] = previewableMedia;
      cResult[4] = tmp12;
      tmp10 = tmp12;
    }
  : (arg0) => {
      let items;
      let items1;
      let message;
      let previewableMedia;
      let totalMediaCount;
      ({ previewableMedia, totalMediaCount, message } = arg0);
      const obj = { style: closure_14().container, children: items1 };
      const memo = react.useMemo(() => {
        let roundToNearestPixelResult1;
        const BADGE_PADDING = native.BADGE_PADDING;
        const sum = BADGE_PADDING + 5;
        const roundToNearestPixelResult = closure_1_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
        size = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: 56 - roundToNearestPixelResult + sum,
          y: -sum,
          width: roundToNearestPixelResult,
          height: roundToNearestPixelResult,
          cornerRadius: roundToNearestPixelResult1,
        };
        roundToNearestPixelResult1 = closure_1_4.roundToNearestPixel(roundToNearestPixelResult / 2);
        return size;
      }, []);
      const obj2 = { cutouts: items, children: metroImportAll(closure_19, { previewableMedia, size: 56, message }) };
      items = [memo];
      const tmp3 = ClipViewDefault;
      items1 = [metroImportAll(tmp3, obj2), metroImportAll(closure_17, { total: totalMediaCount })];
      return authStore(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let message;
      let tmp3;
      let totalMediaCount;
      const obj = react2;
      const cResult = obj.c(7);
      ({ totalMediaCount, message } = arg0);
      const first = arg0.previewableMedia[0];
      if (1 === totalMediaCount) {
        if (cResult[0] === first) {
          let tmp7;
          if (cResult[1] === message) {
            tmp7 = cResult[2];
          }
          tmp3 = tmp7;
        }
        const obj2 = { previewableMedia: first, size: 64, message };
        const tmp10 = metroImportAll(closure_19, obj2);
        cResult[0] = first;
        cResult[1] = message;
        cResult[2] = tmp10;
        tmp7 = tmp10;
      } else {
        if (cResult[3] === first) {
          if (cResult[4] === message) {
            if (cResult[5] === totalMediaCount) {
              tmp3 = cResult[6];
            }
          }
        }
        const obj3 = { previewableMedia: first, totalMediaCount, message };
        const tmp6 = metroImportAll(closure_20, obj3);
        cResult[3] = first;
        cResult[4] = message;
        cResult[5] = totalMediaCount;
        cResult[6] = tmp6;
        tmp3 = tmp6;
      }
      return tmp3;
    }
  : (arg0) => {
      let message;
      let tmp4;
      let totalMediaCount;
      ({ totalMediaCount, message } = arg0);
      const first = arg0.previewableMedia[0];
      if (1 === totalMediaCount) {
        const obj2 = { previewableMedia: first, size: 64, message };
        tmp4 = metroImportAll(closure_19, obj2);
      } else {
        const obj = { previewableMedia: first, totalMediaCount, message };
        tmp4 = metroImportAll(closure_20, obj);
      }
      return tmp4;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const obj = react2;
      const cResult = obj.c(7);
      message = message.message;
      const tmp2 = closure_15();
      const obj2 = usePreviewableMedia;
      const previewableMedia = obj2.usePreviewableMedia(message);
      let tmp3 = null;
      if (0 !== previewableMedia.length) {
        if (cResult[0] === message) {
          if (cResult[1] === previewableMedia) {
            let tmp4;
            if (cResult[2] === previewableMedia.length) {
              tmp4 = cResult[3];
            }
            if (cResult[4] === tmp2.rightAccessoryContainer) {
              let tmp8;
              if (cResult[5] === tmp4) {
                tmp8 = cResult[6];
              }
              tmp3 = tmp8;
            }
            const obj3 = { style: tmp2.rightAccessoryContainer, children: tmp4 };
            const tmp11 = metroImportAll(View, obj3);
            cResult[4] = tmp2.rightAccessoryContainer;
            cResult[5] = tmp4;
            cResult[6] = tmp11;
            tmp8 = tmp11;
          }
        }
        const obj4 = { previewableMedia, totalMediaCount: previewableMedia.length, message };
        const tmp7 = metroImportAll(closure_21, obj4);
        cResult[0] = message;
        cResult[1] = previewableMedia;
        cResult[2] = previewableMedia.length;
        cResult[3] = tmp7;
        tmp4 = tmp7;
      }
      return tmp3;
    }
  : (message) => {
      let obj3;
      message = message.message;
      const tmp = closure_15();
      const obj = usePreviewableMedia;
      const previewableMedia = obj.usePreviewableMedia(message);
      let tmp2 = null;
      if (0 !== previewableMedia.length) {
        const obj2 = { style: tmp.rightAccessoryContainer, children: metroImportAll(closure_21, obj3) };
        obj3 = { previewableMedia, totalMediaCount: previewableMedia.length, message };
        tmp2 = metroImportAll(View, obj2);
      }
      return tmp2;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const MediaPreviewRightAccessory = tmp7;
