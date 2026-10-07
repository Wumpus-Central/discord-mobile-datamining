// discord_app/modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../design/void/native.tsx";
import utils_ImageUtils from "../../../utils/native/ImageUtils.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VisualEffectViewDefault from "../../visual_effect_view/native/VisualEffectView.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
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
import usePreviewableMedia from "hooks/usePreviewableMedia.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const ClipViewDefault = ClipView;

const PlatformUtils = ImageWarningIcon(1369);
const ImageWarningIcon2 = ImageWarningIcon(5872);
const EyeIcon = ImageWarningIcon(6465);
require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: closure_4, StyleSheet } = get_ActivityIndicator);
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
let createStyles = fn(4896);
let obj2 = { badge: null, icon: null };
let size = {
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
obj2.badge = size;
obj2.icon = { width: 10, height: 10 };
let closure_11 = createStyles.createStyles(obj2);
createStyles = fn(4896);
let obj3 = { badge: null };
let size1 = {
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
obj3.badge = size1;
let closure_12 = createStyles.createStyles(obj3);
createStyles = fn(4896);
let obj5 = {
  mediaThumbnailContainer: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" },
  mediaThumbnail: { width: "100%", height: "100%" },
  iconContainer: null,
  obscureBackground: null,
  spoilerIconContainer: null,
  spoilerPill: null,
};
let obj6 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj5.iconContainer = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
};
let obj9 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj9.backgroundColor = nativeDefault.unsafe_rawColors.PRIMARY_500;
obj5.obscureBackground = obj9;
let obj10 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj10.justifyContent = "center";
obj10.alignItems = "center";
obj5.spoilerIconContainer = obj10;
let obj8 = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
};
obj5.spoilerPill = {
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  alignItems: "center",
};
let closure_13 = createStyles.createStyles(obj5);
createStyles = fn(4896);
let closure_14 = createStyles.createStyles({ container: { overflow: "visible" } });
createStyles = fn(4896);
let obj11 = {
  padding: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT,
  justifyContent: "center",
  alignItems: "center",
};
let closure_15 = createStyles.createStyles({
  rightAccessoryContainer: { marginLeft: fn(12493).RIGHT_ACCESSORY_LEFT_MARGIN },
});
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(5);
      const tmp4 = closure_11();
      if (cResult[0] !== tmp4.icon) {
        const obj2 = { style: tmp4.icon, size: "custom", color: "white" };
        const tmp7 = closure_1_8(PlayIcon.PlayIcon, obj2);
        cResult[0] = tmp4.icon;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.badge) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = closure_1_8(View, { style: tmp4.badge, children: tmp5 });
      cResult[2] = tmp4.badge;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp4.badge, children: tmp5 };
    }
  : () => {
      const tmp = closure_11();
      const obj = {
        style: tmp.badge,
        children: closure_1_8(PlayIcon.PlayIcon, { style: tmp.icon, size: "custom", color: "white" }),
      };
      return closure_1_8(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (total) => {
      const cResult = c.c(5);
      total = total.total;
      const tmp4 = closure_12();
      if (cResult[0] !== total) {
        const obj2 = { variant: "text-xs/semibold", color: "text-default", children: total };
        const tmp7 = closure_1_8(Text_Text.Text, obj2);
        cResult[0] = total;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.badge) {
        if (cResult[3] === tmp5) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const tmp9 = closure_1_8(View, { style: tmp4.badge, children: tmp5 });
      cResult[2] = tmp4.badge;
      cResult[3] = tmp5;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj3 = { style: tmp4.badge, children: tmp5 };
    }
  : (children) =>
      closure_1_8(View, {
        style: closure_12().badge,
        children: closure_1_8(Text_Text.Text, {
          variant: "text-xs/semibold",
          color: "text-default",
          children: children.total,
        }),
      });
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isSpoiler) => {
      let ImageWarningIcon = require;
      let obj = dependencyMap;
      const cResult = c.c(17);
      ({ isObscured, children } = isSpoiler);
      const tmp2 = closure_13();
      const token = useToken.useToken(nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND);
      if (!isObscured) {
        if (!isSpoiler.isSpoiler) {
          return children;
        }
      }
      let str = "light";
      if (ImageWarningIconResult.isAndroid()) {
        str = "dark";
      }
      if (cResult[0] === isObscured) {
        if (cResult[1] === tmp2.obscureBackground) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === isObscured) {
          if (cResult[4] === token) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === isObscured) {
            if (cResult[7] === tmp2.spoilerPill) {
              if (cResult[9] === tmp2.spoilerIconContainer) {
                if (cResult[10] === tmp13) {
                  let tmp18 = cResult[11];
                }
                if (cResult[12] === children) {
                  if (cResult[13] === tmp5) {
                    if (cResult[14] === tmp9) {
                      if (cResult[15] === tmp18) {
                        let tmp22 = cResult[16];
                      }
                      return tmp22;
                    }
                  }
                }
                const obj4 = { children: null };
                const items = [children, tmp5, tmp9, tmp18];
                obj4.children = items;
                const tmp25 = v65535(options, obj4);
                cResult[12] = children;
                cResult[13] = tmp5;
                cResult[14] = tmp9;
                cResult[15] = tmp18;
                cResult[16] = tmp25;
                tmp22 = tmp25;
              }
              const obj5 = { style: tmp2.spoilerIconContainer, children: cResult[8] };
              const tmp21 = closure_1_8(View, obj5);
              cResult[9] = tmp2.spoilerIconContainer;
              cResult[10] = cResult[8];
              cResult[11] = tmp21;
              tmp18 = tmp21;
            }
          }
          if (isObscured) {
            ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
            obj = { size: "sm", color: "white" };
            let tmp14Result = closure_1_8(ImageWarningIcon, obj);
          } else {
            const obj6 = {
              style: tmp2.spoilerPill,
              children: closure_1_8(EyeIcon.EyeIcon, { size: "sm", color: "white" }),
            };
            tmp14Result = closure_1_8(View, obj6);
          }
          cResult[6] = isObscured;
          isObscured = tmp2.spoilerPill;
          cResult[7] = isObscured;
          cResult[8] = tmp14Result;
        }
        let tmp10 = !isObscured;
        if (!isObscured) {
          const obj7 = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
          tmp10 = closure_1_8(VisualEffectViewDefault, obj7);
        }
        cResult[3] = isObscured;
        cResult[4] = token;
        cResult[5] = tmp10;
        tmp9 = tmp10;
      }
      let tmp6 = isObscured;
      if (isObscured) {
        const obj8 = { style: tmp2.obscureBackground };
        tmp6 = closure_1_8(View, obj8);
      }
      cResult[0] = isObscured;
      cResult[1] = tmp2.obscureBackground;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      ImageWarningIconResult = PlatformUtils;
    }
  : (isSpoiler) => {
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
      const items = [children, , ,];
      let tmp8 = isObscured;
      if (isObscured) {
        const obj2 = { style: tmp.obscureBackground };
        tmp8 = closure_1_8(View, obj2);
      }
      items[1] = tmp8;
      let tmp11 = !isObscured;
      if (!isObscured) {
        const obj3 = { blurTheme: str, android_fallbackColor: token, style: StyleSheet.absoluteFill };
        tmp11 = closure_1_8(VisualEffectViewDefault, obj3);
      }
      items[2] = tmp11;
      const obj4 = { style: tmp.spoilerIconContainer, children: null };
      if (isObscured) {
        let tmp14Result = closure_1_8(ImageWarningIcon2.ImageWarningIcon, { size: "sm", color: "white" });
      } else {
        const obj5 = { style: tmp.spoilerPill, children: closure_1_8(EyeIcon.EyeIcon, { size: "sm", color: "white" }) };
        tmp14Result = closure_1_8(View, obj5);
      }
      const obj6 = { children: null };
      obj4.children = tmp14Result;
      items[3] = closure_1_8(View, obj4);
      obj6.children = items;
      return v65535(options, obj6);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(79);
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
      let mediaThumbnail = useStateFromStores.useStateFromStores(tmp5, tmp6);
      ({ type, media, icon } = previewableMedia);
      const tmpResult = useStateFromStores;
      const shouldAgeVerifyForExplicitMedia = ExplicitMediaRedactionUtils.useShouldAgeVerifyForExplicitMedia();
      const tmpResult8 = ExplicitMediaRedactionUtils;
      const enabledHarmTypesBitmaskForMessage = useContentHarmTypes.useEnabledHarmTypesBitmaskForMessage(message);
      if (usePreviewableMedia.PreviewableMediaTypes.VOICE_MESSAGE === type) {
        if (cResult[2] !== size) {
          const size1 = { width: size, height: size };
          cResult[2] = size;
          cResult[3] = size1;
          let tmp78 = size1;
        } else {
          tmp78 = cResult[3];
        }
        if (cResult[4] === icon) {
          if (cResult[5] === tmp78) {
            let tmp79 = cResult[6];
          }
          return tmp79;
        }
        const obj2 = { style: tmp78, children: icon };
        const tmp82 = closure_1_8(View, obj2);
        cResult[4] = icon;
        cResult[5] = tmp78;
        cResult[6] = tmp82;
        tmp79 = tmp82;
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
                    if (cResult[45] === media) {
                      const author = message.author;
                      let id;
                      if (author != null) {
                        id = author.id;
                      }
                      if (cResult[46] === id) {
                        if (null != thumbnail.proxyURL) {
                          if ("" !== thumbnail.proxyURL) {
                            let url2 = thumbnail.proxyURL;
                          }
                          let tmp29 = null != url;
                          if (tmp29) {
                            tmp29 = "" !== url;
                          }
                          if (cResult[49] !== size) {
                            const size2 = { width: size, height: size };
                            cResult[49] = size;
                            cResult[50] = size2;
                            let tmp30 = size2;
                          } else {
                            tmp30 = cResult[50];
                          }
                          if (cResult[51] === tmp4.mediaThumbnailContainer) {
                            if (cResult[52] === tmp30) {
                              let tmp31 = cResult[53];
                            }
                            if (cResult[54] === tmp29) {
                              if (cResult[55] === url2) {
                                if (cResult[56] === mediaThumbnail) {
                                  if (cResult[57] === size) {
                                    if (cResult[58] === tmp4.mediaThumbnail) {
                                      if (cResult[59] === url) {
                                        if (cResult[61] === tmp28) {
                                          if (cResult[62] === tmp32) {
                                            let tmp39 = cResult[63];
                                          }
                                          if (cResult[64] === tmp31) {
                                            if (cResult[65] === tmp39) {
                                              let tmp43 = cResult[66];
                                            }
                                            return tmp43;
                                          }
                                          const obj3 = { style: tmp31, children: tmp39 };
                                          const tmp46 = closure_1_8(View, obj3);
                                          cResult[64] = tmp31;
                                          cResult[65] = tmp39;
                                          cResult[66] = tmp46;
                                          tmp43 = tmp46;
                                        }
                                        const obj4 = { isObscured: tmp28, isSpoiler: false, children: cResult[60] };
                                        const tmp42 = closure_1_8(closure_18, obj4);
                                        cResult[61] = tmp28;
                                        cResult[62] = cResult[60];
                                        cResult[63] = tmp42;
                                        tmp39 = tmp42;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (tmp29) {
                              if (!mediaThumbnail) {
                                const size3 = {
                                  resizeMode: "cover",
                                  width: size,
                                  height: size,
                                  paused: false,
                                  src: null,
                                  poster: null,
                                  postponeRender: false,
                                };
                                const obj5 = { videoURI: url };
                                size3.src = obj5;
                                size3.poster = url2;
                                let tmp35 = closure_1_8(common_VideoDefault, size3);
                              }
                              cResult[54] = tmp29;
                              cResult[55] = url2;
                              cResult[56] = mediaThumbnail;
                              cResult[57] = size;
                              mediaThumbnail = tmp4.mediaThumbnail;
                              cResult[58] = mediaThumbnail;
                              cResult[59] = url;
                              cResult[60] = tmp35;
                            }
                            const obj6 = { source: null, style: null, resizeMode: "cover" };
                            const obj7 = { uri: url2 };
                            obj6.source = obj7;
                            obj6.style = tmp4.mediaThumbnail;
                            tmp35 = closure_1_8(FastImageDefault, obj6);
                          }
                          const items1 = [tmp4.mediaThumbnailContainer, tmp30];
                          cResult[51] = tmp4.mediaThumbnailContainer;
                          cResult[52] = tmp30;
                          cResult[53] = items1;
                          tmp31 = items1;
                        }
                        url2 = thumbnail.url;
                      }
                    }
                    const author2 = message.author;
                    let id1;
                    if (author2 != null) {
                      id1 = author2.id;
                    }
                    const enabledHarmTypesForChannelAndAuthorId =
                      ObscuredMediaUtils.getEnabledHarmTypesForChannelAndAuthorId(message.channel_id, id1);
                    const tmpResult10 = ObscuredMediaUtils;
                    const obj8 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media };
                    const mediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask(
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
                    const tmpResult11 = ObscuredMediaUtils;
                  }
                } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
                  if (cResult[67] !== size) {
                    const size4 = { width: size, height: size };
                    cResult[67] = size;
                    cResult[68] = size4;
                    let tmp11 = size4;
                  } else {
                    tmp11 = cResult[68];
                  }
                  if (cResult[69] === tmp4.mediaThumbnailContainer) {
                    if (cResult[70] === tmp11) {
                      let tmp12 = cResult[71];
                    }
                    if (cResult[72] === media) {
                      if (cResult[73] === size) {
                        if (cResult[74] === tmp13) {
                          let tmp14 = cResult[75];
                        }
                        if (cResult[76] === tmp12) {
                          if (cResult[77] === tmp14) {
                            let tmp18 = cResult[78];
                          }
                          return tmp18;
                        }
                        const obj9 = { style: tmp12, children: tmp14 };
                        const tmp21 = closure_1_8(View, obj9);
                        cResult[76] = tmp12;
                        cResult[77] = tmp14;
                        cResult[78] = tmp21;
                        tmp18 = tmp21;
                      }
                    }
                    const obj10 = { sticker: media, size, animated: !mediaThumbnail };
                    const tmp17 = closure_1_8(StickerDefault, obj10);
                    cResult[72] = media;
                    cResult[73] = size;
                    cResult[74] = !mediaThumbnail;
                    cResult[75] = tmp17;
                    tmp14 = tmp17;
                  }
                  const items2 = [tmp4.mediaThumbnailContainer, tmp11];
                  cResult[69] = tmp4.mediaThumbnailContainer;
                  cResult[70] = tmp11;
                  cResult[71] = items2;
                  tmp12 = items2;
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
                        if (cResult[17] === shouldAgeVerifyForExplicitMedia) {
                          let tmp48 = cResult[18];
                        }
                        if (cResult[19] === height) {
                          if (cResult[20] === media) {
                            if (cResult[21] === size) {
                              if (cResult[22] === type) {
                                if (cResult[23] === width) {
                                  let tmp50 = cResult[24];
                                }
                                if (cResult[25] !== size) {
                                  const size5 = { width: size, height: size };
                                  cResult[25] = size;
                                  cResult[26] = size5;
                                  let tmp53 = size5;
                                } else {
                                  tmp53 = cResult[26];
                                }
                                if (cResult[27] === tmp4.mediaThumbnailContainer) {
                                  if (cResult[28] === tmp53) {
                                    let tmp54 = cResult[29];
                                  }
                                  if (cResult[30] !== tmp50) {
                                    const obj11 = { uri: tmp50 };
                                    cResult[30] = tmp50;
                                    cResult[31] = obj11;
                                    let tmp55 = obj11;
                                  } else {
                                    tmp55 = cResult[31];
                                  }
                                  if (cResult[32] === tmp4.mediaThumbnail) {
                                    if (cResult[33] === tmp55) {
                                      let tmp56 = cResult[34];
                                    }
                                    if (cResult[35] !== type) {
                                      let tmp61 = null;
                                      if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                                        tmp61 = closure_1_8(closure_16, {});
                                      }
                                      cResult[35] = type;
                                      cResult[36] = tmp61;
                                      let tmp60 = tmp61;
                                    } else {
                                      tmp60 = cResult[36];
                                    }
                                    if (cResult[37] === tmp48.isSpoiler) {
                                      if (cResult[38] === tmp48.obscure) {
                                        if (cResult[39] === tmp56) {
                                          if (cResult[40] === tmp60) {
                                            let tmp64 = cResult[41];
                                          }
                                          if (cResult[42] === tmp64) {
                                            if (cResult[43] === tmp54) {
                                              let tmp68 = cResult[44];
                                            }
                                            return tmp68;
                                          }
                                          const obj12 = { style: tmp54, children: tmp64 };
                                          const tmp71 = closure_1_8(View, obj12);
                                          cResult[42] = tmp64;
                                          cResult[43] = tmp54;
                                          cResult[44] = tmp71;
                                          tmp68 = tmp71;
                                        }
                                      }
                                    }
                                    const obj13 = { isObscured: null, isSpoiler: null, children: null };
                                    ({ obscure: obj26.isObscured, isSpoiler: obj26.isSpoiler } = tmp48);
                                    const items3 = [tmp56, tmp60];
                                    obj13.children = items3;
                                    const tmp67 = v65535(closure_18, obj13);
                                    cResult[37] = tmp48.isSpoiler;
                                    cResult[38] = tmp48.obscure;
                                    cResult[39] = tmp56;
                                    cResult[40] = tmp60;
                                    cResult[41] = tmp67;
                                    tmp64 = tmp67;
                                  }
                                  const obj14 = { source: tmp55, style: tmp4.mediaThumbnail, resizeMode: "cover" };
                                  const tmp59 = closure_1_8(FastImageDefault, obj14);
                                  cResult[32] = tmp4.mediaThumbnail;
                                  cResult[33] = tmp55;
                                  cResult[34] = tmp59;
                                  tmp56 = tmp59;
                                }
                                const items4 = [tmp4.mediaThumbnailContainer, tmp53];
                                cResult[27] = tmp4.mediaThumbnailContainer;
                                cResult[28] = tmp53;
                                cResult[29] = items4;
                                tmp54 = items4;
                              }
                            }
                          }
                        }
                        const attachmentUrl = MediaSourceUtil.getAttachmentUrl(media);
                        const tmpResult12 = MediaSourceUtil;
                        const obj15 = {
                          src: attachmentUrl,
                          sourceWidth: width,
                          sourceHeight: height,
                          targetWidth: 2 * size,
                          targetHeight: 2 * size,
                          animated: false,
                          format: null,
                        };
                        let str3;
                        if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                          str3 = "png";
                        }
                        obj15.format = str3;
                        const srcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight(obj15);
                        cResult[19] = height;
                        cResult[20] = media;
                        cResult[21] = size;
                        cResult[22] = type;
                        cResult[23] = width;
                        cResult[24] = srcWithWidthAndHeight;
                        tmp50 = srcWithWidthAndHeight;
                        const tmpResult13 = utils_ImageUtils;
                      }
                    }
                    const obj16 = {
                      attachment: media,
                      shouldObscureSpoiler: true,
                      enabledContentHarmTypeFlags: enabledHarmTypesBitmaskForMessage,
                      shouldAgeVerify: shouldAgeVerifyForExplicitMedia,
                    };
                    const attachmentObscurityProps = ExplicitMediaUtils.getAttachmentObscurityProps(obj16);
                    cResult[15] = enabledHarmTypesBitmaskForMessage;
                    cResult[16] = media;
                    cResult[17] = shouldAgeVerifyForExplicitMedia;
                    cResult[18] = attachmentObscurityProps;
                    tmp48 = attachmentObscurityProps;
                    const tmpResult14 = ExplicitMediaUtils;
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
          let tmp72 = size6;
        } else {
          tmp72 = cResult[8];
        }
        if (cResult[9] === tmp4.iconContainer) {
          if (cResult[10] === tmp72) {
            let tmp73 = cResult[11];
          }
          if (cResult[12] === icon) {
            if (cResult[13] === tmp73) {
              let tmp74 = cResult[14];
            }
            return tmp74;
          }
          const obj17 = { style: tmp73, children: icon };
          const tmp77 = closure_1_8(View, obj17);
          cResult[12] = icon;
          cResult[13] = tmp73;
          cResult[14] = tmp77;
          tmp74 = tmp77;
        }
        const items5 = [tmp4.iconContainer, tmp72];
        cResult[9] = tmp4.iconContainer;
        cResult[10] = tmp72;
        cResult[11] = items5;
        tmp73 = items5;
      }
      const tmpResult9 = useContentHarmTypes;
    }
  : (arg0) => {
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
        return closure_1_8(View, obj4);
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
                    const enabledHarmTypesForChannelAndAuthorId =
                      ObscuredMediaUtils.getEnabledHarmTypesForChannelAndAuthorId(message.channel_id, id);
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
                      const items1 = [tmp.mediaThumbnailContainer];
                      const size2 = { width: size, height: size };
                      items1[1] = size2;
                      obj6.style = items1;
                      const obj7 = { isObscured: tmp15, isSpoiler: false, children: null };
                      if (null != url) {
                        if ("" !== url) {
                          if (!stateFromStores) {
                            const size3 = {
                              resizeMode: "cover",
                              width: size,
                              height: size,
                              paused: false,
                              src: null,
                              poster: null,
                              postponeRender: false,
                            };
                            const obj8 = { videoURI: url };
                            size3.src = obj8;
                            size3.poster = url2;
                            let tmp16Result = closure_1_8(common_VideoDefault, size3);
                          }
                          obj7.children = tmp16Result;
                          obj6.children = closure_1_8(tmp18, obj7);
                          return closure_1_8(tmp17, obj6);
                        }
                      }
                      const obj9 = { source: null, style: null, resizeMode: "cover" };
                      const obj10 = { uri: url2 };
                      obj9.source = obj10;
                      obj9.style = tmp.mediaThumbnail;
                      tmp16Result = closure_1_8(FastImageDefault, obj9);
                    }
                    url2 = thumbnail.url;
                    const tmp2Result5 = ObscuredMediaUtils;
                  }
                } else if (usePreviewableMedia.PreviewableMediaTypes.STICKER === type) {
                  const obj11 = { style: null, children: null };
                  const items2 = [tmp.mediaThumbnailContainer];
                  const size4 = { width: size, height: size };
                  items2[1] = size4;
                  obj11.style = items2;
                  const obj12 = { sticker: media, size, animated: !stateFromStores };
                  obj11.children = closure_1_8(StickerDefault, obj12);
                  return closure_1_8(View, obj11);
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
                    const attachmentObscurityProps = ExplicitMediaUtils.getAttachmentObscurityProps(obj13);
                    const tmp2Result6 = ExplicitMediaUtils;
                    const attachmentUrl = MediaSourceUtil.getAttachmentUrl(media);
                    const tmp2Result7 = MediaSourceUtil;
                    const obj14 = {
                      src: attachmentUrl,
                      sourceWidth: width,
                      sourceHeight: height,
                      targetWidth: 2 * size,
                      targetHeight: 2 * size,
                      animated: false,
                      format: null,
                    };
                    let str3;
                    if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                      str3 = "png";
                    }
                    obj14.format = str3;
                    const obj15 = { style: null, children: null };
                    const items3 = [tmp.mediaThumbnailContainer];
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
                    const items4 = [closure_1_8(FastImageDefault, obj18)];
                    let tmp24Result = null;
                    if (type === usePreviewableMedia.PreviewableMediaTypes.VIDEO) {
                      tmp24Result = closure_1_8(closure_16, {});
                    }
                    items4[1] = tmp24Result;
                    obj16.children = items4;
                    obj15.children = v65535(closure_18, obj16);
                    return closure_1_8(View, obj15);
                  }
                }
              }
            }
            return null;
          }
        }
        const obj20 = { style: null, children: null };
        const items5 = [tmp.iconContainer];
        const size6 = { width: size, height: size };
        items5[1] = size6;
        obj20.style = items5;
        obj20.children = icon;
        return closure_1_8(View, obj20);
      }
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(11);
      ({ previewableMedia, totalMediaCount, message } = arg0);
      const tmp4 = closure_14();
      const sum = native.BADGE_PADDING + 5;
      const roundToNearestPixelResult = React4.roundToNearestPixel(20 + 2 * native.BADGE_PADDING);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const size = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: 56 - roundToNearestPixelResult + sum,
          y: -sum,
          width: roundToNearestPixelResult,
          height: roundToNearestPixelResult,
          cornerRadius: React4.roundToNearestPixel(roundToNearestPixelResult / 2),
        };
        cResult[0] = size;
        let first = size;
        const roundToNearestPixelResult1 = React4.roundToNearestPixel(roundToNearestPixelResult / 2);
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first];
        cResult[1] = items;
        let tmp9 = items;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] === message) {
        if (cResult[3] === previewableMedia) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] !== totalMediaCount) {
          const obj3 = { total: totalMediaCount };
          const tmp16 = closure_1_8(closure_17, obj3);
          cResult[5] = totalMediaCount;
          cResult[6] = tmp16;
          let tmp13 = tmp16;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp4.container) {
          if (cResult[8] === tmp10) {
            if (cResult[9] === tmp13) {
              let tmp17 = cResult[10];
            }
            return tmp17;
          }
        }
        const obj4 = { style: tmp4.container, children: null };
        const items1 = [tmp10, tmp13];
        obj4.children = items1;
        const tmp20 = v65535(View, obj4);
        cResult[7] = tmp4.container;
        cResult[8] = tmp10;
        cResult[9] = tmp13;
        cResult[10] = tmp20;
        tmp17 = tmp20;
      }
      const obj5 = { cutouts: tmp9, children: null };
      obj5.children = closure_1_8(closure_19, { previewableMedia, size: 56, message });
      const tmp12 = closure_1_8(ClipViewDefault, obj5);
      cResult[2] = message;
      cResult[3] = previewableMedia;
      cResult[4] = tmp12;
      tmp10 = tmp12;
    }
  : (arg0) => {
      ({ previewableMedia, totalMediaCount, message } = arg0);
      const obj = { style: closure_14().container, children: null };
      const memo = noop.useMemo(() => {
        const BADGE_PADDING = native.BADGE_PADDING;
        const sum = BADGE_PADDING + 5;
        const roundToNearestPixelResult = closure_1_4.roundToNearestPixel(20 + 2 * BADGE_PADDING);
        const size = {
          shape: ClipView.CutoutShape.RoundedRect,
          x: 56 - roundToNearestPixelResult + sum,
          y: -sum,
          width: roundToNearestPixelResult,
          height: roundToNearestPixelResult,
          cornerRadius: closure_1_4.roundToNearestPixel(roundToNearestPixelResult / 2),
        };
        return size;
      }, []);
      const obj2 = { cutouts: null, children: null };
      const items = [memo];
      obj2.cutouts = items;
      const tmp = closure_14();
      obj2.children = closure_1_8(closure_19, { previewableMedia, size: 56, message });
      const items1 = [closure_1_8(ClipViewDefault, obj2), closure_1_8(closure_17, { total: totalMediaCount })];
      obj.children = items1;
      return v65535(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      ({ totalMediaCount, message } = arg0);
      const first = arg0.previewableMedia[0];
      let num = 1;
      if (1 === totalMediaCount) {
        if (cResult[0] === first) {
        }
        const obj2 = { previewableMedia: first, size: 64, message };
        const tmp10 = closure_1_8(closure_19, obj2);
        cResult[0] = first;
        cResult[num] = message;
        num = 2;
        cResult[2] = tmp10;
      } else {
        if (cResult[3] === first) {
          if (cResult[4] === message) {
            if (cResult[5] === totalMediaCount) {
              let tmp3 = cResult[6];
            }
            return tmp3;
          }
        }
        const obj3 = { previewableMedia: first, totalMediaCount, message };
        const tmp6 = closure_1_8(closure_20, obj3);
        cResult[3] = first;
        cResult[4] = message;
        cResult[5] = totalMediaCount;
        cResult[6] = tmp6;
        tmp3 = tmp6;
      }
    }
  : (arg0) => {
      ({ totalMediaCount, message } = arg0);
      const first = arg0.previewableMedia[0];
      if (1 === totalMediaCount) {
        const obj2 = { previewableMedia: first, size: 64, message };
        let tmp4 = closure_1_8(closure_19, obj2);
      } else {
        const obj = { previewableMedia: first, totalMediaCount, message };
        tmp4 = closure_1_8(closure_20, obj);
      }
      return tmp4;
    };
ReactCompilerGating = fn(558);
let obj12 = { rightAccessoryContainer: { marginLeft: fn(12493).RIGHT_ACCESSORY_LEFT_MARGIN } };
size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_notifications/native/MediaPreviewRightAccessory.tsx");

export const MediaPreviewRightAccessory = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const cResult = c.c(7);
      message = message.message;
      let rightAccessoryContainer = closure_15();
      const previewableMedia = usePreviewableMedia.usePreviewableMedia(message);
      if (0 === previewableMedia.length) {
        return null;
      } else {
        if (cResult[0] === message) {
          if (cResult[1] === previewableMedia) {
            if (cResult[2] === length) {
              let tmp2 = cResult[3];
            }
            if (cResult[4] === rightAccessoryContainer.rightAccessoryContainer) {
            }
            const obj3 = { style: rightAccessoryContainer.rightAccessoryContainer, children: tmp2 };
            const tmp9 = closure_1_8(View, obj3);
            rightAccessoryContainer = rightAccessoryContainer.rightAccessoryContainer;
            cResult[4] = rightAccessoryContainer;
            cResult[5] = tmp2;
            cResult[6] = tmp9;
          }
        }
        const obj4 = { previewableMedia, totalMediaCount: length, message };
        const tmp5 = closure_1_8(closure_21, obj4);
        cResult[0] = message;
        cResult[1] = previewableMedia;
        cResult[2] = length;
        cResult[3] = tmp5;
        tmp2 = tmp5;
      }
    }
  : (message) => {
      message = message.message;
      const tmp = closure_15();
      const previewableMedia = usePreviewableMedia.usePreviewableMedia(message);
      let tmp2 = null;
      if (0 !== previewableMedia.length) {
        const obj2 = { style: tmp.rightAccessoryContainer, children: null };
        const obj3 = { previewableMedia, totalMediaCount: length, message };
        obj2.children = closure_1_8(closure_21, obj3);
        tmp2 = closure_1_8(View, obj2);
      }
      return tmp2;
    };
