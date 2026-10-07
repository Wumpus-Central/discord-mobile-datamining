// discord_app/modules/forums/native/posts/ForumPostMedia.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ImageUtils from "../../../../utils/native/ImageUtils.tsx";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import shared from "../../../../design/shared.tsx";
import VisualEffectViewDefault from "../../../visual_effect_view/native/VisualEffectView.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import useNativeForumPostHandlersDefault from "hooks/useNativeForumPostHandlers.tsx";
import SpoilerIconDefault from "../../../markup/native/SpoilerIcon.tsx";
import MessageAttachmentUtils from "../../../messages/MessageAttachmentUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire, ImageBackground: closure_7, PixelRatio } = get_ActivityIndicator);
const ANDROID_FOREGROUND_RIPPLE = fn(1192).ANDROID_FOREGROUND_RIPPLE;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = Math.min(PixelRatio.get(), 4);
let closure_14 = Math.min(PixelRatio.get(), 4);
const createStyles = fn(4896);
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
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(8);
      ({ shouldSpoiler, blurTheme, source, androidStyle } = arg0);
      let num = 0;
      if (shouldSpoiler) {
        num = 10;
      }
      if (cResult[0] === blurTheme) {
        if (cResult[1] === shouldSpoiler) {
          let tmp2 = cResult[2];
        }
        if (cResult[3] === androidStyle) {
          if (cResult[4] === num) {
            if (cResult[5] === source) {
              if (cResult[6] === tmp2) {
                let tmp4 = cResult[7];
              }
              return tmp4;
            }
          }
        }
        const obj2 = { style: androidStyle, source, blurRadius: num, resizeMode: "cover", children: tmp2 };
        const tmp7 = v65535(React5, obj2);
        cResult[3] = androidStyle;
        cResult[4] = num;
        cResult[5] = source;
        cResult[6] = tmp2;
        cResult[7] = tmp7;
        tmp4 = tmp7;
      }
      const tmp3 = v65535(closure_18, { shouldSpoiler, blurTheme });
      cResult[0] = blurTheme;
      cResult[1] = shouldSpoiler;
      cResult[2] = tmp3;
      tmp2 = tmp3;
    }
  : (blurTheme) => {
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
      obj.children = v65535(closure_18, { shouldSpoiler, blurTheme: blurTheme.blurTheme });
      return v65535(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(9);
      ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
      if (cResult[0] === iosStyle) {
        if (cResult[1] === source) {
          let tmp3 = cResult[2];
        }
        if (cResult[3] === blurTheme) {
          if (cResult[4] === shouldSpoiler) {
            let tmp5 = cResult[5];
          }
          if (cResult[6] === tmp3) {
            if (cResult[7] === tmp5) {
              let tmp9 = cResult[8];
            }
            return tmp9;
          }
          const obj2 = { children: null };
          const items = [tmp3, tmp5];
          obj2.children = items;
          const tmp12 = __initData(closure_1_11, obj2);
          cResult[6] = tmp3;
          cResult[7] = tmp5;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
        const obj3 = { shouldSpoiler, blurTheme };
        const tmp8 = v65535(closure_18, obj3);
        cResult[3] = blurTheme;
        cResult[4] = shouldSpoiler;
        cResult[5] = tmp8;
        tmp5 = tmp8;
      }
      const tmp4 = v65535(FastImageDefault, { style: iosStyle, source, resizeMode: "cover" });
      cResult[0] = iosStyle;
      cResult[1] = source;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (arg0) => {
      const obj = { children: null };
      ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
      const items = [
        v65535(FastImageDefault, { style: iosStyle, source, resizeMode: "cover" }),
        v65535(closure_18, { shouldSpoiler, blurTheme }),
      ];
      obj.children = items;
      return __initData(closure_1_11, obj);
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (blurTheme) => {
      const cResult = c.c(10);
      blurTheme = blurTheme.blurTheme;
      const tmp3 = closure_15();
      if (!blurTheme.shouldSpoiler) {
        return null;
      } else {
        if (cResult[0] !== blurTheme) {
          const obj2 = { blurTheme, style: timestampProducer.absoluteFill };
          const tmp8 = v65535(VisualEffectViewDefault, obj2);
          cResult[0] = blurTheme;
          cResult[1] = tmp8;
          let tmp4 = tmp8;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] !== tmp3.spoilerIcon) {
          const size = { style: tmp3.spoilerIcon, height: 30, width: 30 };
          const tmp12 = v65535(SpoilerIconDefault, size);
          cResult[2] = tmp3.spoilerIcon;
          cResult[3] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[3];
        }
        if (cResult[4] === tmp3.spoilerIconContainer) {
          if (cResult[5] === tmp9) {
            let tmp13 = cResult[6];
          }
          if (cResult[7] === tmp4) {
          }
          const obj3 = { children: null };
          const items = [tmp4, tmp13];
          obj3.children = items;
          const tmp20 = __initData(closure_1_11, obj3);
          cResult[7] = tmp4;
          cResult[8] = tmp13;
          cResult[9] = tmp20;
        }
        const obj4 = { style: tmp3.spoilerIconContainer, children: tmp9 };
        const tmp16 = v65535(hasOwnProperty, obj4);
        cResult[4] = tmp3.spoilerIconContainer;
        cResult[5] = tmp9;
        cResult[6] = tmp16;
        tmp13 = tmp16;
      }
    }
  : (arg0) => {
      ({ shouldSpoiler, blurTheme } = arg0);
      const tmp = closure_15();
      let tmp2 = null;
      if (shouldSpoiler) {
        const obj = { children: null };
        const obj2 = { blurTheme, style: timestampProducer.absoluteFill };
        const items = [v65535(VisualEffectViewDefault, obj2)];
        const obj3 = { style: tmp.spoilerIconContainer, children: null };
        const size = { style: tmp.spoilerIcon, height: 30, width: 30 };
        obj3.children = v65535(SpoilerIconDefault, size);
        items[1] = v65535(hasOwnProperty, obj3);
        obj.children = items;
        tmp2 = __initData(closure_1_11, obj);
      }
      return tmp2;
    };
let closure_18 = tmp4;
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isMediaPost) => {
      _require = isMediaPost;
      const cResult = require("c").c(32);
      const tmp4 = closure_15();
      const ref = noop.useRef(null);
      require("ExplicitMediaRedactionUtils");
      if (isMediaPost.isMediaPost) {
        if (cResult[0] !== isMediaPost) {
          const obj2 = {};
          const merged = Object.assign(isMediaPost);
          const tmp29 = closure_10(ref(11639), obj2);
          cResult[0] = isMediaPost;
          cResult[1] = tmp29;
          const tmp25 = ref(11639);
        }
      } else {
        if (tmpResult.isAndroid()) {
          if (cResult[2] !== isMediaPost) {
            const obj3 = {};
            const merged1 = Object.assign(isMediaPost);
            const tmp21 = closure_10(closure_16, obj3);
            cResult[2] = isMediaPost;
            cResult[3] = tmp21;
            let tmp15 = tmp21;
          } else {
            tmp15 = cResult[3];
          }
          let tmp8 = tmp15;
        } else if (cResult[4] !== isMediaPost) {
          const obj4 = {};
          const merged2 = Object.assign(isMediaPost);
          const tmp14 = closure_10(closure_17, obj4);
          cResult[4] = isMediaPost;
          cResult[5] = tmp14;
          tmp8 = tmp14;
        } else {
          tmp8 = cResult[5];
        }
        if (null != isMediaPost.obscureReason) {
          const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp(6809).AGE_VERIFICATION_OBSCURABLE_REASONS;
          if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(isMediaPost.obscureReason)) {
            if (tmp7) {
              if (cResult[6] === isMediaPost.containerStyle) {
                if (cResult[7] === tmp4.mediaContainer) {
                  let tmp33 = cResult[8];
                }
                const _Symbol = Symbol;
                if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                  class S {
                    constructor() {
                      obj = closure_1(closure_1_2[17]);
                      obj1 = {
                        entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW,
                      };
                      result = obj.showAgeVerificationGetStartedModal(obj1);
                      return;
                    }
                  }
                  cResult[9] = S;
                } else {
                  class S {
                    constructor() {
                      obj = closure_1(closure_1_2[17]);
                      obj1 = {
                        entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW,
                      };
                      result = obj.showAgeVerificationGetStartedModal(obj1);
                      return;
                    }
                  }
                }
                if (cResult[10] !== tmp8) {
                  class S {
                    constructor() {
                      obj = closure_1(closure_1_2[17]);
                      obj1 = {
                        entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW,
                      };
                      result = obj.showAgeVerificationGetStartedModal(obj1);
                      return;
                    }
                  }
                  const obj5 = {
                    androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
                    activeOpacity: 0,
                    onPress: S,
                    children: tmp8,
                  };
                  const tmp38 = closure_10(tmp(5916).PressableOpacity, obj5);
                  cResult[10] = tmp8;
                  cResult[11] = tmp38;
                } else {
                  class S {
                    constructor() {
                      obj = closure_1(closure_1_2[17]);
                      obj1 = {
                        entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW,
                      };
                      result = obj.showAgeVerificationGetStartedModal(obj1);
                      return;
                    }
                  }
                }
                if (cResult[12] === tmp33) {
                  class S {
                    constructor() {
                      obj = closure_1(closure_1_2[17]);
                      obj1 = {
                        entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW,
                      };
                      result = obj.showAgeVerificationGetStartedModal(obj1);
                      return;
                    }
                  }
                }
                const obj6 = { style: tmp33, ref, children: tmp36 };
                const tmp42 = closure_10(closure_5, obj6);
                cResult[12] = tmp33;
                cResult[13] = tmp36;
                cResult[14] = tmp42;
              }
              const items = [tmp4.mediaContainer, isMediaPost.containerStyle];
              cResult[6] = isMediaPost.containerStyle;
              cResult[7] = tmp4.mediaContainer;
              cResult[8] = items;
              tmp33 = items;
            }
          }
        }
        if (null != isMediaPost.onPress) {
          class S {
            constructor() {
              obj = closure_1(closure_1_2[17]);
              obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
              result = obj.showAgeVerificationGetStartedModal(obj1);
              return;
            }
          }
          const items1 = [tmp4.mediaContainer, isMediaPost.containerStyle];
          cResult[15] = isMediaPost.containerStyle;
          cResult[16] = tmp4.mediaContainer;
          cResult[17] = items1;
        } else {
          class S {
            constructor() {
              obj = closure_1(closure_1_2[17]);
              obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
              result = obj.showAgeVerificationGetStartedModal(obj1);
              return;
            }
          }
          const items2 = [tmp4.mediaContainer, isMediaPost.containerStyle];
          cResult[26] = isMediaPost.containerStyle;
          cResult[27] = tmp4.mediaContainer;
          cResult[28] = items2;
        }
        tmpResult = tmp(1369);
      }
      let obj = require("c");
    }
  : (obscureReason) => {
      _require = obscureReason;
      const tmp = closure_15();
      const ref = noop.useRef(null);
      const shouldAgeVerifyForReason = require("ExplicitMediaRedactionUtils").useShouldAgeVerifyForReason(
        obscureReason.obscureReason,
      );
      if (obscureReason.isMediaPost) {
        const obj2 = {};
        const merged = Object.assign(obscureReason);
        let tmp6Result = closure_10(ref(11639), obj2);
        let tmp12 = closure_10;
        const tmp19 = ref(11639);
      } else {
        if (tmp3Result.isAndroid()) {
          const obj3 = {};
          const merged1 = Object.assign(obscureReason);
          tmp6Result = closure_10(closure_16, obj3);
          tmp12 = closure_10;
        } else {
          const obj4 = {};
          const merged2 = Object.assign(obscureReason);
          tmp6Result = closure_10(closure_17, obj4);
          tmp12 = closure_10;
        }
        tmp3Result = tmp3(1369);
      }
      if (null != obscureReason.obscureReason) {
        const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp3(6809).AGE_VERIFICATION_OBSCURABLE_REASONS;
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
                const obj = ref(8117);
                const result = obj.showAgeVerificationGetStartedModal({
                  entryPoint: obscureReason(8119).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW,
                });
              },
              children: tmp6Result,
            };
            obj5.children = tmp12(tmp3(5916).PressableOpacity, obj6);
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
        obj7.children = tmp12(tmp3(5916).PressableOpacity, obj8);
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
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(7);
      ({ channel, media } = arg0);
      if (cResult[0] === channel) {
        if (cResult[1] === media) {
          let tmp4 = cResult[2];
        }
        const tmpResult = MessageAttachmentUtils;
        [tmp7, tmp8] = MessageAttachmentUtils.useShouldObscure(tmp4);
        const tmp6 = _slicedToArray(MessageAttachmentUtils.useShouldObscure(tmp4), 2);
        let str = "light";
        if (tmpResult2.isThemeDark(ThemeStore.theme)) {
          str = "dark";
        }
        const GifAutoPlay = UserSettings.GifAutoPlay;
        let tmp10 = "png";
        if (GifAutoPlay.useSetting()) {
          tmp10 = null;
        }
        if (cResult[3] === tmp10) {
          if (cResult[4] === tmp8) {
            if (cResult[5] === tmp7) {
              let tmp11 = cResult[6];
            }
            return tmp11;
          }
        }
        const obj2 = { shouldObscure: tmp7, obscureReason: tmp8, blurTheme: str, format: tmp10 };
        cResult[3] = tmp10;
        cResult[4] = tmp8;
        cResult[5] = tmp7;
        cResult[6] = obj2;
        tmp11 = obj2;
        tmpResult2 = shared;
      }
      const obj3 = { media, channel };
      cResult[0] = channel;
      cResult[1] = media;
      cResult[2] = obj3;
      tmp4 = obj3;
    }
  : (arg0) => {
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
let closure_20 = tmp5;
fn(558);
let obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (media) => {
      const cResult = c.c(37);
      ({ channel, firstMessageId } = media);
      src = media.media;
      ({ isEmbed, embedLeftBorderColor, containerStyle } = media);
      const tmp4 = closure_15();
      if (cResult[0] !== channel.id) {
        const obj2 = { threadId: channel.id };
        cResult[0] = channel.id;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const onTapMedia = useNativeForumPostHandlersDefault(tmp5).onTapMedia;
      if (cResult[2] === firstMessageId) {
        if (cResult[3] === src) {
          if (cResult[4] === onTapMedia) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === channel) {
            if (cResult[7] === src) {
              let tmp7 = cResult[8];
            }
            ({ shouldObscure, obscureReason, blurTheme, format } = closure_20(tmp7));
            if (media.isLocalDeviceMedia) {
              if (cResult[9] !== src.src) {
                const obj3 = { uri: null };
                ({ src: obj7.uri, src } = src);
                cResult[9] = src;
                cResult[10] = obj3;
              }
            } else {
              if (cResult[11] === format) {
                if (cResult[12] === src.height) {
                  if (cResult[13] === src.src) {
                    if (cResult[14] === src.srcIsAnimated) {
                      if (cResult[15] === src.width) {
                        let tmp10 = cResult[16];
                      }
                      if (cResult[17] !== tmp10) {
                        const obj4 = { uri: tmp10 };
                        cResult[17] = tmp10;
                        cResult[18] = obj4;
                        let tmp14 = obj4;
                      } else {
                        tmp14 = cResult[18];
                      }
                      if (cResult[19] === embedLeftBorderColor) {
                        if (cResult[20] === isEmbed) {
                          let tmp19 = cResult[21];
                        }
                        if (cResult[22] === containerStyle) {
                          if (cResult[23] === tmp4.thumbnailBorder) {
                            if (cResult[24] === tmp19) {
                              let tmp21 = cResult[25];
                            }
                            if (shouldObscure == null) {
                              shouldObscure = false;
                            }
                            if (cResult[26] !== channel) {
                              const isMediaPostResult = channel.isMediaPost();
                              cResult[26] = channel;
                              cResult[27] = isMediaPostResult;
                              let tmp23 = isMediaPostResult;
                            } else {
                              tmp23 = cResult[27];
                            }
                            if (cResult[28] === blurTheme) {
                              if (cResult[29] === obscureReason) {
                                if (cResult[30] === tmp6) {
                                  if (cResult[31] === tmp14) {
                                    if (cResult[32] === tmp4.thumbnail) {
                                      if (cResult[33] === tmp23) {
                                        if (cResult[34] === tmp21) {
                                          if (cResult[35] === shouldObscure) {
                                            let tmp25 = cResult[36];
                                          }
                                          return tmp25;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj6 = {
                              iosStyle: tmp17,
                              androidStyle: tmp18,
                              containerStyle: tmp21,
                              obscureReason,
                              shouldSpoiler: shouldObscure,
                              blurTheme,
                              source: tmp14,
                              onPress: tmp6,
                              isMediaPost: tmp23,
                            };
                            const tmp28 = v65535(closure_19, obj6);
                            cResult[28] = blurTheme;
                            cResult[29] = obscureReason;
                            cResult[30] = tmp6;
                            cResult[31] = tmp14;
                            cResult[32] = tmp4.thumbnail;
                            cResult[33] = tmp23;
                            cResult[34] = tmp21;
                            cResult[35] = shouldObscure;
                            cResult[36] = tmp28;
                            tmp25 = tmp28;
                          }
                        }
                        let items = [tmp4.thumbnailBorder, tmp19, containerStyle];
                        cResult[22] = containerStyle;
                        cResult[23] = tmp4.thumbnailBorder;
                        cResult[24] = tmp19;
                        cResult[25] = items;
                        tmp21 = items;
                      }
                      let tmp20 = isEmbed;
                      if (isEmbed) {
                        const obj8 = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
                        tmp20 = obj8;
                      }
                      cResult[19] = embedLeftBorderColor;
                      cResult[20] = isEmbed;
                      cResult[21] = tmp20;
                      tmp19 = tmp20;
                    }
                  }
                }
              }
              const obj9 = {
                src: null,
                sourceWidth: null,
                sourceHeight: null,
                targetWidth: null,
                targetHeight: null,
                format: null,
                animated: null,
              };
              ({ src: obj5.src, width: obj5.sourceWidth, height: obj5.sourceHeight } = src);
              const _Math = Math;
              obj9.targetWidth = Math.ceil(80 * closure_13);
              const _Math2 = Math;
              obj9.targetHeight = Math.ceil(80 * closure_13);
              obj9.format = format;
              obj9.animated = src.srcIsAnimated;
              const srcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight(obj9);
              cResult[11] = format;
              cResult[12] = src.height;
              cResult[13] = src.src;
              cResult[14] = src.srcIsAnimated;
              cResult[15] = src.width;
              cResult[16] = srcWithWidthAndHeight;
              tmp10 = srcWithWidthAndHeight;
              const tmpResult = utils_ImageUtils;
            }
            const tmp9 = closure_20(tmp7);
          }
          const obj16 = { channel, media: src };
          cResult[6] = channel;
          cResult[7] = src;
          cResult[8] = obj16;
          tmp7 = obj16;
        }
      }
      const fn = function p(containerRef) {
        const obj = { messageId: firstMessageId, mediaItems: null, containerRef };
        const items = [src];
        obj.mediaItems = items;
        onTapMedia(obj);
      };
      cResult[2] = firstMessageId;
      cResult[3] = src;
      cResult[4] = onTapMedia;
      cResult[5] = fn;
      tmp6 = fn;
    }
  : (firstMessageId) => {
      ({ channel, isLocalDeviceMedia } = firstMessageId);
      firstMessageId = firstMessageId.firstMessageId;
      const media = firstMessageId.media;
      let isEmbed = firstMessageId.isEmbed;
      format = undefined;
      ({ embedLeftBorderColor, containerStyle } = firstMessageId);
      const tmp = closure_15();
      const onTapMedia = firstMessageId(media[23])({ threadId: channel.id }).onTapMedia;
      let items = [firstMessageId, media, onTapMedia];
      const callback = format.useCallback((containerRef) => {
        const obj = { messageId: firstMessageId, mediaItems: null, containerRef };
        const items = [media];
        obj.mediaItems = items;
        onTapMedia(obj);
      }, items);
      const tmp3 = closure_20({ channel, media });
      ({ shouldObscure, format } = tmp3);
      const items1 = [format, isLocalDeviceMedia, , , ,];
      ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
      ({ obscureReason, blurTheme } = tmp3);
      let obj2 = {
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
      const memo = format.useMemo(() => {
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
        const obj3 = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
        isEmbed = obj3;
      }
      items2[1] = isEmbed;
      items2[2] = containerStyle;
      obj2.containerStyle = items2;
      obj2.obscureReason = obscureReason;
      if (shouldObscure == null) {
        shouldObscure = false;
      }
      obj2.shouldSpoiler = shouldObscure;
      obj2.blurTheme = blurTheme;
      obj2.source = memo;
      obj2.onPress = callback;
      obj2.isMediaPost = channel.isMediaPost();
      return closure_10(closure_19, obj2);
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

export const ForumPostMediaSpoiler = tmp4;
export const useSharedMediaProps = tmp5;
export const ForumPostMediaThumbnail = tmp6;
export const ForumPostGridMedia = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(37);
      ({ channel, media, targetWidth, targetHeight } = arg0);
      const tmp4 = closure_15();
      if (cResult[0] === channel) {
        if (cResult[1] === media) {
          let tmp5 = cResult[2];
        }
        ({ shouldObscure, obscureReason, blurTheme, format } = closure_20(tmp5));
        if (cResult[3] !== channel) {
          const isMediaPostResult = channel.isMediaPost();
          cResult[3] = channel;
          cResult[4] = isMediaPostResult;
          let tmp8 = isMediaPostResult;
        } else {
          tmp8 = cResult[4];
        }
        if (tmp8) {
          const _Math3 = Math;
          const bound = Math.min(
            1,
            (targetWidth * closure_14) / media.width,
            (targetHeight * closure_14) / media.height,
          );
          const _Math4 = Math;
          ({ src: src2, width: width2, height: height2 } = media);
          const rounded = Math.ceil(media.width * bound);
          const _Math5 = Math;
          const rounded1 = Math.ceil(media.height * bound);
          if (cResult[5] === format) {
            if (cResult[6] === media.height) {
              if (cResult[7] === media.src) {
                if (cResult[8] === media.width) {
                  if (cResult[9] === rounded) {
                    if (cResult[10] === rounded1) {
                      let tmp21 = cResult[11];
                    }
                    if (cResult[12] !== tmp21) {
                      const obj2 = { uri: tmp21 };
                      cResult[12] = tmp21;
                      cResult[13] = obj2;
                    }
                  }
                }
              }
            }
          }
          const obj3 = {
            src: src2,
            sourceWidth: width2,
            sourceHeight: height2,
            targetWidth: rounded,
            targetHeight: rounded1,
            format,
          };
          const srcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight(obj3);
          cResult[5] = format;
          cResult[6] = media.height;
          cResult[7] = media.src;
          cResult[8] = media.width;
          cResult[9] = rounded;
          cResult[10] = rounded1;
          cResult[11] = srcWithWidthAndHeight;
          tmp21 = srcWithWidthAndHeight;
          const tmpResult = utils_ImageUtils;
        } else {
          const _Math = Math;
          ({ src, width, height } = media);
          const rounded2 = Math.ceil(targetWidth * closure_14);
          const _Math2 = Math;
          const rounded3 = Math.ceil(targetHeight * closure_14);
          if (cResult[14] === format) {
            if (cResult[15] === media.height) {
              if (cResult[16] === media.src) {
                if (cResult[17] === media.width) {
                  if (cResult[18] === rounded2) {
                    if (cResult[19] === rounded3) {
                      let tmp14 = cResult[20];
                    }
                    if (cResult[21] !== tmp14) {
                      const obj4 = { uri: tmp14 };
                      cResult[21] = tmp14;
                      cResult[22] = obj4;
                      let tmp16 = obj4;
                    } else {
                      tmp16 = cResult[22];
                    }
                    if (cResult[23] === targetHeight) {
                      if (cResult[24] === targetWidth) {
                        let tmp25 = cResult[25];
                        let tmp26 = cResult[26];
                      }
                      if (shouldObscure == null) {
                        shouldObscure = false;
                      }
                      if (cResult[27] === blurTheme) {
                        if (cResult[28] === tmp8) {
                          if (cResult[29] === obscureReason) {
                            if (cResult[30] === tmp16) {
                              if (cResult[31] === tmp4.gridMediaContainer) {
                                if (cResult[32] === tmp25) {
                                  if (cResult[33] === tmp26) {
                                    if (cResult[34] === shouldObscure) {
                                      if (cResult[35] === tmp28) {
                                        let tmp29 = cResult[36];
                                      }
                                      return tmp29;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj5 = {
                        containerStyle: tmp4.gridMediaContainer,
                        iosStyle: tmp25,
                        androidStyle: tmp26,
                        shouldSpoiler: shouldObscure,
                        obscureReason,
                        blurTheme,
                        source: tmp16,
                        isPortrait: media.height >= media.width,
                        isMediaPost: tmp8,
                      };
                      const tmp32 = v65535(closure_19, obj5);
                      cResult[27] = blurTheme;
                      cResult[28] = tmp8;
                      cResult[29] = obscureReason;
                      cResult[30] = tmp16;
                      cResult[31] = tmp4.gridMediaContainer;
                      cResult[32] = tmp25;
                      cResult[33] = tmp26;
                      cResult[34] = shouldObscure;
                      cResult[35] = media.height >= media.width;
                      cResult[36] = tmp32;
                      tmp29 = tmp32;
                    }
                    const size = { height: targetHeight, width: targetWidth };
                    const size1 = { height: targetHeight, width: targetWidth };
                    cResult[23] = targetHeight;
                    cResult[24] = targetWidth;
                    cResult[25] = size;
                    cResult[26] = size1;
                    tmp26 = size1;
                    tmp25 = size;
                  }
                }
              }
            }
          }
          const obj6 = {
            src,
            sourceWidth: width,
            sourceHeight: height,
            targetWidth: rounded2,
            targetHeight: rounded3,
            format,
          };
          const srcWithWidthAndHeight1 = utils_ImageUtils.getSrcWithWidthAndHeight(obj6);
          cResult[14] = format;
          cResult[15] = media.height;
          cResult[16] = media.src;
          cResult[17] = media.width;
          cResult[18] = rounded2;
          cResult[19] = rounded3;
          cResult[20] = srcWithWidthAndHeight1;
          tmp14 = srcWithWidthAndHeight1;
          const tmpResult2 = utils_ImageUtils;
        }
        const tmp7 = closure_20(tmp5);
      }
      const obj7 = { channel, media };
      cResult[0] = channel;
      cResult[1] = media;
      cResult[2] = obj7;
      tmp5 = obj7;
    }
  : (targetWidth) => {
      ({ channel, media } = targetWidth);
      targetWidth = targetWidth.targetWidth;
      const targetHeight = targetWidth.targetHeight;
      format = undefined;
      const tmp2 = closure_20({ channel, media });
      ({ shouldObscure, format } = tmp2);
      ({ obscureReason, blurTheme } = tmp2);
      const isMediaPostResult = channel.isMediaPost();
      noop = isMediaPostResult;
      const items = [, , , , , ,];
      ({ src: arr[0], width: arr[1], height: arr[2] } = media);
      items[3] = targetWidth;
      items[4] = targetHeight;
      items[5] = format;
      items[6] = isMediaPostResult;
      let obj = {
        containerStyle: closure_15().gridMediaContainer,
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
          const bound = Math.min(
            1,
            (targetWidth * closure_14) / media.width,
            (targetHeight * closure_14) / media.height,
          );
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
      if (shouldObscure == null) {
        shouldObscure = false;
      }
      obj.shouldSpoiler = shouldObscure;
      obj.obscureReason = obscureReason;
      obj.blurTheme = blurTheme;
      obj.source = memo;
      obj.isPortrait = media.height >= media.width;
      obj.isMediaPost = isMediaPostResult;
      return closure_10(closure_19, obj);
    };
