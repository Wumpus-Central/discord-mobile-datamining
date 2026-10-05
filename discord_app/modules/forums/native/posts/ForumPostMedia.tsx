// === Module 11623: ForumPostMedia ===

// Module 11623 (ForumPostMedia)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FormConstants from "FormConstants" /* 1192 */;
import utils_ImageUtils from "utils/ImageUtils" /* 1483 */;
import UserSettings from "UserSettings" /* 2028 */;
import shared from "shared" /* 4729 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5773 */;
import FastImageDefault from "FastImage" /* 5974 */;
import useNativeForumPostHandlersDefault from "useNativeForumPostHandlers" /* 10031 */;
import SpoilerIconDefault from "SpoilerIcon" /* 11624 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 11626 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, obj1;

let PixelRatio;
let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
let react = react_mod;
({ View: hasOwnProperty, StyleSheet: metroRequire, ImageBackground: metroImportDefault, PixelRatio } = react_native);
const ANDROID_FOREGROUND_RIPPLE = FormConstants.ANDROID_FOREGROUND_RIPPLE;
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let closure_13 = Math.min(PixelRatio.get(), 4);
let closure_14 = Math.min(PixelRatio.get(), 4);
let createStyles = createStyles_mod;
let obj = { mediaContainer: { position: "relative", overflow: "hidden" }, thumbnailBorder: obj2, thumbnail: { height: 80, width: 80 }, spoilerIconContainer: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center" }, spoilerIcon: obj3, gridMediaContainer: { borderRadius: 2, overflow: "hidden" } };
obj2 = { borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.PRIMARY_300, alignSelf: "center" };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let androidStyle;
  let blurTheme;
  let shouldSpoiler;
  let source;
  const obj = react2;
  const cResult = obj.c(8);
  ({ shouldSpoiler, blurTheme, source, androidStyle } = arg0);
  let num = 0;
  if (shouldSpoiler) {
    num = 10;
  }
  if (cResult[0] === blurTheme) {
    let tmp2;
    if (cResult[1] === shouldSpoiler) {
      tmp2 = cResult[2];
    }
    if (cResult[3] === androidStyle) {
      if (cResult[4] === num) {
        if (cResult[5] === source) {
          let tmp4;
          if (cResult[6] === tmp2) {
            tmp4 = cResult[7];
          }
          return tmp4;
        }
      }
    }
    const obj2 = { style: androidStyle, source, blurRadius: num, resizeMode: "cover", children: tmp2 };
    const tmp7 = authStore(metroImportDefault, obj2);
    cResult[3] = androidStyle;
    cResult[4] = num;
    cResult[5] = source;
    cResult[6] = tmp2;
    cResult[7] = tmp7;
    tmp4 = tmp7;
  }
  const tmp3 = authStore(closure_18, { shouldSpoiler, blurTheme });
  cResult[0] = blurTheme;
  cResult[1] = shouldSpoiler;
  cResult[2] = tmp3;
  tmp2 = tmp3;
}) : ((shouldSpoiler) => {
  let blurTheme;
  let num;
  shouldSpoiler = shouldSpoiler.shouldSpoiler;
  const obj = { style: shouldSpoiler.androidStyle, source: shouldSpoiler.source, blurRadius: num, resizeMode: "cover", children: authStore(closure_18, { shouldSpoiler, blurTheme }) };
  num = 0;
  blurTheme = shouldSpoiler.blurTheme;
  if (shouldSpoiler) {
    num = 10;
  }
  return authStore(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let blurTheme;
  let iosStyle;
  let items;
  let shouldSpoiler;
  let source;
  const obj = react2;
  const cResult = obj.c(9);
  ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
  if (cResult[0] === iosStyle) {
    let tmp3;
    if (cResult[1] === source) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === blurTheme) {
      let tmp5;
      if (cResult[4] === shouldSpoiler) {
        tmp5 = cResult[5];
      }
      if (cResult[6] === tmp3) {
        let tmp9;
        if (cResult[7] === tmp5) {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
      const obj2 = { children: items };
      items = [tmp3, tmp5];
      const tmp12 = closure_12(unpackModuleId, obj2);
      cResult[6] = tmp3;
      cResult[7] = tmp5;
      cResult[8] = tmp12;
      tmp9 = tmp12;
    }
    const obj3 = { shouldSpoiler, blurTheme };
    const tmp8 = authStore(closure_18, obj3);
    cResult[3] = blurTheme;
    cResult[4] = shouldSpoiler;
    cResult[5] = tmp8;
    tmp5 = tmp8;
  }
  const tmp4 = authStore(FastImageDefault, { style: iosStyle, source, resizeMode: "cover" });
  cResult[0] = iosStyle;
  cResult[1] = source;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((arg0) => {
  let blurTheme;
  let iosStyle;
  let items;
  let shouldSpoiler;
  let source;
  const obj = { children: items };
  ({ shouldSpoiler, blurTheme, source, iosStyle } = arg0);
  items = [authStore(FastImageDefault, { style: iosStyle, source, resizeMode: "cover" }), authStore(closure_18, { shouldSpoiler, blurTheme })];
  return closure_12(unpackModuleId, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((blurTheme) => {
  let items;
  const obj = react2;
  const cResult = obj.c(10);
  blurTheme = blurTheme.blurTheme;
  const shouldSpoiler = blurTheme.shouldSpoiler;
  const tmp3 = closure_15();
  let tmp4 = null;
  if (shouldSpoiler) {
    let tmp5;
    let tmp10;
    if (cResult[0] !== blurTheme) {
      const obj2 = { blurTheme, style: metroRequire.absoluteFill };
      const tmp9 = authStore(VisualEffectViewDefault, obj2);
      cResult[0] = blurTheme;
      cResult[1] = tmp9;
      tmp5 = tmp9;
    } else {
      tmp5 = cResult[1];
    }
    if (cResult[2] !== tmp3.spoilerIcon) {
      size = { style: tmp3.spoilerIcon, height: 30, width: 30 };
      const tmp13 = authStore(SpoilerIconDefault, size);
      cResult[2] = tmp3.spoilerIcon;
      cResult[3] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] === tmp3.spoilerIconContainer) {
      let tmp14;
      if (cResult[5] === tmp10) {
        tmp14 = cResult[6];
      }
      if (cResult[7] === tmp5) {
        let tmp18;
        if (cResult[8] === tmp14) {
          tmp18 = cResult[9];
        }
        tmp4 = tmp18;
      }
      const obj3 = { children: items };
      items = [tmp5, tmp14];
      const tmp21 = closure_12(unpackModuleId, obj3);
      cResult[7] = tmp5;
      cResult[8] = tmp14;
      cResult[9] = tmp21;
      tmp18 = tmp21;
    }
    const obj4 = { style: tmp3.spoilerIconContainer, children: tmp10 };
    const tmp17 = authStore(hasOwnProperty, obj4);
    cResult[4] = tmp3.spoilerIconContainer;
    cResult[5] = tmp10;
    cResult[6] = tmp17;
    tmp14 = tmp17;
  }
  return tmp4;
}) : ((arg0) => {
  let blurTheme;
  let items;
  let shouldSpoiler;
  ({ shouldSpoiler, blurTheme } = arg0);
  const tmp = closure_15();
  let tmp2 = null;
  if (shouldSpoiler) {
    const obj = { children: items };
    const obj2 = { blurTheme, style: metroRequire.absoluteFill };
    items = [authStore(VisualEffectViewDefault, obj2), ];
    const obj3 = { style: tmp.spoilerIconContainer, children: authStore(SpoilerIconDefault, size) };
    size = { style: tmp.spoilerIcon, height: 30, width: 30 };
    items[1] = authStore(hasOwnProperty, obj3);
    tmp2 = closure_12(unpackModuleId, obj);
  }
  return tmp2;
});
let closure_18 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((obscureReason) => {
  let tmp38;
  let tmp7;
  _require = obscureReason;
  let obj = require("react");
  const cResult = obj.c(32);
  const tmp4 = closure_15();
  const ref = react.useRef(null);
  let obj2 = require("ExplicitMediaRedactionUtils");
  const shouldAgeVerifyForReason = obj2.useShouldAgeVerifyForReason(obscureReason.obscureReason);
  if (obscureReason.isMediaPost) {
    let tmp21;
    if (cResult[0] !== obscureReason) {
      const obj3 = {};
      const tmp24 = ref(11625);
      const merged = Object.assign(obscureReason);
      const tmp28 = closure_10(tmp24, obj3);
      cResult[0] = obscureReason;
      cResult[1] = tmp28;
      tmp21 = tmp28;
    } else {
      tmp21 = cResult[1];
    }
    tmp7 = tmp21;
  } else {
    const tmpResult = require("PlatformUtils");
    if (tmpResult.isAndroid()) {
      let tmp14;
      if (cResult[2] !== obscureReason) {
        const obj4 = {};
        const merged1 = Object.assign(obscureReason);
        const tmp20 = closure_10(closure_16, obj4);
        cResult[2] = obscureReason;
        cResult[3] = tmp20;
        tmp14 = tmp20;
      } else {
        tmp14 = cResult[3];
      }
      tmp7 = tmp14;
    } else if (cResult[4] !== obscureReason) {
      const obj5 = {};
      const merged2 = Object.assign(obscureReason);
      const tmp13 = closure_10(closure_17, obj5);
      cResult[4] = obscureReason;
      cResult[5] = tmp13;
      tmp7 = tmp13;
    } else {
      tmp7 = cResult[5];
    }
  }
  if (null != obscureReason.obscureReason) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp(6799).AGE_VERIFICATION_OBSCURABLE_REASONS;
    if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason.obscureReason)) {
      let tmp30;
      if (shouldAgeVerifyForReason) {
        if (cResult[6] === obscureReason.containerStyle) {
          let tmp32;
          if (cResult[7] === tmp4.mediaContainer) {
            tmp32 = cResult[8];
          }
          const _Symbol = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                result = obj.showAgeVerificationGetStartedModal(obj1);
                return;
              }
            }
            cResult[9] = S;
          } else {
            class S {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                result = obj.showAgeVerificationGetStartedModal(obj1);
                return;
              }
            }
          }
          if (cResult[10] !== tmp7) {
            class S {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                result = obj.showAgeVerificationGetStartedModal(obj1);
                return;
              }
            }
            const obj6 = { androidRippleConfig: ANDROID_FOREGROUND_RIPPLE, activeOpacity: 0, onPress: S, children: tmp7 };
            cResult[10] = tmp7;
            cResult[11] = closure_10(require("Pressables").PressableOpacity, obj6);
            const tmp37 = closure_10(require("Pressables").PressableOpacity, obj6);
          } else {
            class S {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                result = obj.showAgeVerificationGetStartedModal(obj1);
                return;
              }
            }
          }
          if (cResult[12] === tmp32) {
            class S {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                result = obj.showAgeVerificationGetStartedModal(obj1);
                return;
              }
            }
            tmp30 = tmp38;
          }
          const obj7 = { style: tmp32, ref, children: tmp35 };
          const tmp41 = closure_10(closure_5, obj7);
          cResult[12] = tmp32;
          cResult[13] = tmp35;
          cResult[14] = tmp41;
          tmp38 = tmp41;
        }
        const items = [tmp4.mediaContainer, obscureReason.containerStyle];
        cResult[6] = obscureReason.containerStyle;
        cResult[7] = tmp4.mediaContainer;
        cResult[8] = items;
        tmp32 = items;
      }
      return tmp30;
    }
  }
  if (null != obscureReason.onPress) {
    class S {
      constructor() {
        obj = closure_1(closure_1_2[17]);
        obj1 = { entryPoint: closure_0(closure_1_2[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        return;
      }
    }
    const items1 = [tmp4.mediaContainer, obscureReason.containerStyle];
    cResult[15] = obscureReason.containerStyle;
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
    const items2 = [tmp4.mediaContainer, obscureReason.containerStyle];
    cResult[26] = obscureReason.containerStyle;
    cResult[27] = tmp4.mediaContainer;
    cResult[28] = items2;
  }
}) : ((obscureReason) => {
  let items;
  let items1;
  let items2;
  let obj6;
  let obj8;
  let tmp12;
  let tmp12Result;
  let tmp6Result;
  _require = obscureReason;
  const tmp = closure_15();
  const ref = react.useRef(null);
  let obj = require("ExplicitMediaRedactionUtils");
  const shouldAgeVerifyForReason = obj.useShouldAgeVerifyForReason(obscureReason.obscureReason);
  if (obscureReason.isMediaPost) {
    let obj2 = {};
    const tmp19 = ref(11625);
    const merged = Object.assign(obscureReason);
    tmp6Result = closure_10(tmp19, obj2);
    tmp12 = closure_10;
  } else {
    const tmp3Result = require("PlatformUtils");
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
  }
  if (null != obscureReason.obscureReason) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = tmp3(6799).AGE_VERIFICATION_OBSCURABLE_REASONS;
    if (AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason.obscureReason)) {
      if (shouldAgeVerifyForReason) {
        const obj5 = { style: items, ref, children: tmp12(require("Pressables").PressableOpacity, obj6) };
        items = [tmp.mediaContainer, obscureReason.containerStyle];
        obj6 = {
          androidRippleConfig: ANDROID_FOREGROUND_RIPPLE,
          activeOpacity: 0,
          onPress() {
                  const obj = ref(dependencyMap[17]);
                  const obj2 = { entryPoint: obscureReason(dependencyMap[18]).AgeVerificationModalEntryPoint.FORUM_POST_MEDIA_PREVIEW };
                  const result = obj.showAgeVerificationGetStartedModal(obj2);
                },
          children: tmp6Result
        };
        tmp12Result = tmp12(closure_5, obj5);
      }
      return tmp12Result;
    }
  }
  if (null != obscureReason.onPress) {
    const obj7 = { style: items1, ref, children: tmp12(require("Pressables").PressableOpacity, obj8) };
    items1 = [tmp.mediaContainer, obscureReason.containerStyle];
    obj8 = {
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
    tmp12Result = tmp12(closure_5, obj7);
  } else {
    const obj9 = { style: items2, ref, children: tmp6Result };
    items2 = [tmp.mediaContainer, obscureReason.containerStyle];
    tmp12Result = tmp12(closure_5, obj9);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let media;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(7);
  ({ channel, media } = arg0);
  if (cResult[0] === channel) {
    let tmp4;
    if (cResult[1] === media) {
      tmp4 = cResult[2];
    }
    const tmpResult = MessageAttachmentUtils;
    [tmp7, tmp8] = tmpResult.useShouldObscure(tmp4);
    _slicedToArray(tmpResult.useShouldObscure(tmp4), 2);
    let str = "light";
    const tmpResult2 = shared;
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
        let tmp11;
        if (cResult[5] === tmp7) {
          tmp11 = cResult[6];
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
  }
  const obj3 = { media, channel };
  cResult[0] = channel;
  cResult[1] = media;
  cResult[2] = obj3;
  tmp4 = obj3;
}) : ((arg0) => {
  let channel;
  let media;
  let str;
  let tmp4;
  ({ channel, media } = arg0);
  const obj = MessageAttachmentUtils;
  const tmp3 = _slicedToArray(obj.useShouldObscure({ media, channel }), 2);
  const obj2 = { shouldObscure: tmp3[0], obscureReason: tmp3[1], blurTheme: str, format: tmp4 };
  str = "light";
  const obj3 = shared;
  if (obj3.isThemeDark(ThemeStore.theme)) {
    str = "dark";
  }
  const GifAutoPlay = UserSettings.GifAutoPlay;
  tmp4 = "png";
  if (GifAutoPlay.useSetting()) {
    tmp4 = null;
  }
  return obj2;
});
let closure_20 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((media) => {
  let blurTheme;
  let channel;
  let containerStyle;
  let embedLeftBorderColor;
  let firstMessageId;
  let format;
  let isEmbed;
  let obscureReason;
  let shouldObscure;
  let tmp5;
  let obj = react2;
  const cResult = obj.c(37);
  ({ channel, firstMessageId } = media);
  media = media.media;
  ({ isEmbed, embedLeftBorderColor, containerStyle } = media);
  const isLocalDeviceMedia = media.isLocalDeviceMedia;
  const tmp4 = closure_15();
  if (cResult[0] !== channel.id) {
    const obj2 = { threadId: channel.id };
    cResult[0] = channel.id;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  const onTapMedia = useNativeForumPostHandlersDefault(tmp5).onTapMedia;
  if (cResult[2] === firstMessageId) {
    if (cResult[3] === media) {
      let tmp6;
      if (cResult[4] === onTapMedia) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === channel) {
        let tmp7;
        let tmp15;
        if (cResult[7] === media) {
          tmp7 = cResult[8];
        }
        ({ shouldObscure, obscureReason, blurTheme, format } = closure_20(tmp7));
        closure_20(tmp7);
        if (isLocalDeviceMedia) {
          let tmp16;
          if (cResult[9] !== media.src) {
            const obj3 = { uri: media.src };
            cResult[9] = media.src;
            cResult[10] = obj3;
            tmp16 = obj3;
          } else {
            tmp16 = cResult[10];
          }
          tmp15 = tmp16;
        } else {
          if (cResult[11] === format) {
            if (cResult[12] === media.height) {
              if (cResult[13] === media.src) {
                if (cResult[14] === media.srcIsAnimated) {
                  let tmp10;
                  if (cResult[15] === media.width) {
                    tmp10 = cResult[16];
                  }
                  if (cResult[17] !== tmp10) {
                    const obj5 = { uri: tmp10 };
                    cResult[17] = tmp10;
                    cResult[18] = obj5;
                    tmp15 = obj5;
                  } else {
                    tmp15 = cResult[18];
                  }
                }
              }
            }
          }
          ({ src: obj4.src, width: obj4.sourceWidth, height: obj4.sourceHeight } = media);
          const _Math = Math;
          const obj6 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: Math.ceil(80 * closure_13), targetHeight: Math.ceil(80 * closure_13), format, animated: media.srcIsAnimated };
          const getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
          utils_ImageUtils;
          const _Math2 = Math;
          const srcWithWidthAndHeight = getSrcWithWidthAndHeight(obj6);
          cResult[11] = format;
          cResult[12] = media.height;
          cResult[13] = media.src;
          cResult[14] = media.srcIsAnimated;
          cResult[15] = media.width;
          cResult[16] = srcWithWidthAndHeight;
          tmp10 = srcWithWidthAndHeight;
        }
        if (cResult[19] === embedLeftBorderColor) {
          let tmp19;
          if (cResult[20] === isEmbed) {
            tmp19 = cResult[21];
          }
          if (cResult[22] === containerStyle) {
            if (cResult[23] === tmp4.thumbnailBorder) {
              let tmp21;
              let tmp23;
              if (cResult[24] === tmp19) {
                tmp21 = cResult[25];
              }
              if (shouldObscure == null) {
                shouldObscure = false;
              }
              if (cResult[26] !== channel) {
                const isMediaPostResult = channel.isMediaPost();
                cResult[26] = channel;
                cResult[27] = isMediaPostResult;
                tmp23 = isMediaPostResult;
              } else {
                tmp23 = cResult[27];
              }
              if (cResult[28] === blurTheme) {
                if (cResult[29] === obscureReason) {
                  if (cResult[30] === tmp6) {
                    if (cResult[31] === tmp15) {
                      if (cResult[32] === tmp4.thumbnail) {
                        if (cResult[33] === tmp23) {
                          if (cResult[34] === tmp21) {
                            let tmp25;
                            if (cResult[35] === shouldObscure) {
                              tmp25 = cResult[36];
                            }
                            return tmp25;
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj7 = { iosStyle: tmp17, androidStyle: tmp18, containerStyle: tmp21, obscureReason, shouldSpoiler: shouldObscure, blurTheme, source: tmp15, onPress: tmp6, isMediaPost: tmp23 };
              const tmp28 = authStore(closure_19, obj7);
              cResult[28] = blurTheme;
              cResult[29] = obscureReason;
              cResult[30] = tmp6;
              cResult[31] = tmp15;
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
        if (tmp20) {
          tmp20 = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
          const obj8 = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
        }
        cResult[19] = embedLeftBorderColor;
        cResult[20] = isEmbed;
        cResult[21] = tmp20;
        tmp19 = tmp20;
      }
      const obj15 = { channel, media };
      cResult[6] = channel;
      cResult[7] = media;
      cResult[8] = obj15;
      tmp7 = obj15;
    }
  }
  const fn = function p(containerRef) {
    let items;
    const obj = { messageId: firstMessageId, mediaItems: items, containerRef };
    items = [media];
    onTapMedia(obj);
  };
  cResult[2] = firstMessageId;
  cResult[3] = media;
  cResult[4] = onTapMedia;
  cResult[5] = fn;
  tmp6 = fn;
}) : ((firstMessageId) => {
  let blurTheme;
  let channel;
  let containerStyle;
  let embedLeftBorderColor;
  let format;
  let isLocalDeviceMedia;
  let items2;
  let memo;
  let obscureReason;
  let shouldObscure;
  ({ channel, isLocalDeviceMedia } = firstMessageId);
  firstMessageId = firstMessageId.firstMessageId;
  const media = firstMessageId.media;
  let isEmbed = firstMessageId.isEmbed;
  format = undefined;
  ({ embedLeftBorderColor, containerStyle } = firstMessageId);
  const tmp = closure_15();
  let obj = { threadId: channel.id };
  const onTapMedia = firstMessageId(media[23])(obj).onTapMedia;
  let items = [firstMessageId, media, onTapMedia];
  const callback = format.useCallback((containerRef) => {
    let items;
    const obj = { messageId: firstMessageId, mediaItems: items, containerRef };
    items = [media];
    onTapMedia(obj);
  }, items);
  const tmp3 = closure_20({ channel, media });
  ({ shouldObscure, format } = tmp3);
  const items1 = [format, isLocalDeviceMedia, , , , ];
  ({ height: arr2[2], src: arr2[3], width: arr2[4], srcIsAnimated: arr2[5] } = media);
  ({ obscureReason, blurTheme } = tmp3);
  const obj2 = { iosStyle: tmp.thumbnail, androidStyle: tmp.thumbnail, containerStyle: items2, obscureReason, shouldSpoiler: shouldObscure, blurTheme, source: memo, onPress: callback, isMediaPost: channel.isMediaPost() };
  items2 = [tmp.thumbnailBorder, , ];
  memo = format.useMemo(() => {
    let tmp8;
    const obj = { uri: null };
    if (isLocalDeviceMedia) {
      obj.uri = media.src;
      tmp8 = obj;
    } else {
      ({ src: obj2.src, width: obj2.sourceWidth, height: obj2.sourceHeight } = media);
      const _Math = Math;
      const obj3 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: Math.ceil(80 * closure_13), targetHeight: Math.ceil(80 * closure_13), format, animated: media.srcIsAnimated };
      const getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
      utils_ImageUtils;
      const _Math2 = Math;
      obj.uri = getSrcWithWidthAndHeight(obj3);
      tmp8 = obj;
    }
    return tmp8;
  }, items1);
  if (isEmbed) {
    let obj3 = { borderLeftWidth: 2, borderLeftColor: embedLeftBorderColor };
    isEmbed = obj3;
  }
  items2[1] = isEmbed;
  items2[2] = containerStyle;
  if (shouldObscure == null) {
    shouldObscure = false;
  }
  return closure_10(closure_19, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let blurTheme;
  let channel;
  let format;
  let height;
  let height2;
  let media;
  let obscureReason;
  let shouldObscure;
  let src;
  let src2;
  let targetHeight;
  let targetWidth;
  let width;
  let width2;
  const obj = react2;
  const cResult = obj.c(37);
  ({ channel, media, targetWidth, targetHeight } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] === channel) {
    let tmp5;
    let tmp8;
    let tmp16;
    if (cResult[1] === media) {
      tmp5 = cResult[2];
    }
    ({ shouldObscure, obscureReason, blurTheme, format } = closure_20(tmp5));
    closure_20(tmp5);
    if (cResult[3] !== channel) {
      const isMediaPostResult = channel.isMediaPost();
      cResult[3] = channel;
      cResult[4] = isMediaPostResult;
      tmp8 = isMediaPostResult;
    } else {
      tmp8 = cResult[4];
    }
    if (tmp8) {
      const _Math3 = Math;
      const bound = Math.min(1, targetWidth * closure_14 / media.width, targetHeight * closure_14 / media.height);
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
                let tmp21;
                let tmp23;
                if (cResult[10] === rounded1) {
                  tmp21 = cResult[11];
                }
                if (cResult[12] !== tmp21) {
                  const obj2 = { uri: tmp21 };
                  cResult[12] = tmp21;
                  cResult[13] = obj2;
                  tmp23 = obj2;
                } else {
                  tmp23 = cResult[13];
                }
                tmp16 = tmp23;
              }
            }
          }
        }
      }
      const obj3 = { src: src2, sourceWidth: width2, sourceHeight: height2, targetWidth: rounded, targetHeight: rounded1, format };
      const tmpResult = utils_ImageUtils;
      const srcWithWidthAndHeight = tmpResult.getSrcWithWidthAndHeight(obj3);
      cResult[5] = format;
      cResult[6] = media.height;
      cResult[7] = media.src;
      cResult[8] = media.width;
      cResult[9] = rounded;
      cResult[10] = rounded1;
      cResult[11] = srcWithWidthAndHeight;
      tmp21 = srcWithWidthAndHeight;
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
                let tmp14;
                if (cResult[19] === rounded3) {
                  tmp14 = cResult[20];
                }
                if (cResult[21] !== tmp14) {
                  const obj4 = { uri: tmp14 };
                  cResult[21] = tmp14;
                  cResult[22] = obj4;
                  tmp16 = obj4;
                } else {
                  tmp16 = cResult[22];
                }
              }
            }
          }
        }
      }
      const obj5 = { src, sourceWidth: width, sourceHeight: height, targetWidth: rounded2, targetHeight: rounded3, format };
      const tmpResult2 = utils_ImageUtils;
      const srcWithWidthAndHeight1 = tmpResult2.getSrcWithWidthAndHeight(obj5);
      cResult[14] = format;
      cResult[15] = media.height;
      cResult[16] = media.src;
      cResult[17] = media.width;
      cResult[18] = rounded2;
      cResult[19] = rounded3;
      cResult[20] = srcWithWidthAndHeight1;
      tmp14 = srcWithWidthAndHeight1;
    }
    if (cResult[23] === targetHeight) {
      let tmp24;
      let tmp25;
      if (cResult[24] === targetWidth) {
        tmp24 = cResult[25];
        tmp25 = cResult[26];
      }
      if (shouldObscure == null) {
        shouldObscure = false;
      }
      if (cResult[27] === blurTheme) {
        if (cResult[28] === tmp8) {
          if (cResult[29] === obscureReason) {
            if (cResult[30] === tmp16) {
              if (cResult[31] === tmp4.gridMediaContainer) {
                if (cResult[32] === tmp24) {
                  if (cResult[33] === tmp25) {
                    if (cResult[34] === shouldObscure) {
                      let tmp28;
                      if (cResult[35] === media.height >= media.width) {
                        tmp28 = cResult[36];
                      }
                      return tmp28;
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj6 = { containerStyle: tmp4.gridMediaContainer, iosStyle: tmp24, androidStyle: tmp25, shouldSpoiler: shouldObscure, obscureReason, blurTheme, source: tmp16, isPortrait: media.height >= media.width, isMediaPost: tmp8 };
      const tmp31 = authStore(closure_19, obj6);
      cResult[27] = blurTheme;
      cResult[28] = tmp8;
      cResult[29] = obscureReason;
      cResult[30] = tmp16;
      cResult[31] = tmp4.gridMediaContainer;
      cResult[32] = tmp24;
      cResult[33] = tmp25;
      cResult[34] = shouldObscure;
      cResult[35] = media.height >= media.width;
      cResult[36] = tmp31;
      tmp28 = tmp31;
    }
    size = { height: targetHeight, width: targetWidth };
    const size1 = { height: targetHeight, width: targetWidth };
    cResult[23] = targetHeight;
    cResult[24] = targetWidth;
    cResult[25] = size;
    cResult[26] = size1;
    tmp25 = size1;
    tmp24 = size;
  }
  const obj7 = { channel, media };
  cResult[0] = channel;
  cResult[1] = media;
  cResult[2] = obj7;
  tmp5 = obj7;
}) : ((targetWidth) => {
  let blurTheme;
  let c4;
  let channel;
  let format;
  let media;
  let memo;
  let obscureReason;
  let shouldObscure;
  ({ channel, media } = targetWidth);
  targetWidth = targetWidth.targetWidth;
  const targetHeight = targetWidth.targetHeight;
  format = undefined;
  const tmp = closure_15();
  const tmp2 = closure_20({ channel, media });
  ({ shouldObscure, format } = tmp2);
  ({ obscureReason, blurTheme } = tmp2);
  const isMediaPostResult = channel.isMediaPost();
  react = isMediaPostResult;
  const items = [, , , , , , ];
  ({ src: arr[0], width: arr[1], height: arr[2] } = media);
  items[3] = targetWidth;
  items[4] = targetHeight;
  items[5] = format;
  items[6] = isMediaPostResult;
  let obj = { containerStyle: tmp.gridMediaContainer, iosStyle: { height: targetHeight, width: targetWidth }, androidStyle: { height: targetHeight, width: targetWidth }, shouldSpoiler: shouldObscure, obscureReason, blurTheme, source: memo, isPortrait: media.height >= media.width, isMediaPost: isMediaPostResult };
  memo = react.useMemo(() => {
    let getSrcWithWidthAndHeight;
    let getSrcWithWidthAndHeight2;
    let obj7;
    let obj8;
    if (c4) {
      const _Math3 = Math;
      const bound = Math.min(1, targetWidth * closure_14 / media.width, targetHeight * closure_14 / media.height);
      const obj3 = { uri: getSrcWithWidthAndHeight2(obj7) };
      ({ src: obj4.src, width: obj4.sourceWidth, height: obj4.sourceHeight } = media);
      const _Math4 = Math;
      obj7 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: Math.ceil(media.width * bound), targetHeight: Math.ceil(media.height * bound), format };
      getSrcWithWidthAndHeight2 = utils_ImageUtils.getSrcWithWidthAndHeight;
      utils_ImageUtils;
      const _Math5 = Math;
      return obj3;
    } else {
      const obj = { uri: getSrcWithWidthAndHeight(obj8) };
      ({ src: obj2.src, width: obj2.sourceWidth, height: obj2.sourceHeight } = media);
      const _Math = Math;
      obj8 = { src: null, sourceWidth: null, sourceHeight: null, targetWidth: Math.ceil(targetWidth * closure_14), targetHeight: Math.ceil(targetHeight * closure_14), format };
      getSrcWithWidthAndHeight = utils_ImageUtils.getSrcWithWidthAndHeight;
      utils_ImageUtils;
      const _Math2 = Math;
      return obj;
    }
  }, items);
  if (shouldObscure == null) {
    shouldObscure = false;
  }
  return closure_10(closure_19, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostMedia.tsx");

export const ForumPostMediaSpoiler = tmp5;
export const useSharedMediaProps = tmp6;
export const ForumPostMediaThumbnail = tmp7;
export const ForumPostGridMedia = tmp8;