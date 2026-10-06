// === Module 16860: SearchMediaImage ===

// Module 16860 (SearchMediaImage)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5780 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5872 */;
import ObscureMediaModels from "ObscureMediaModels" /* 6809 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6842 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7950 */;
import CirclePlayIcon from "CirclePlayIcon" /* 8401 */;
import generated_SpoilerIcon from "generated/SpoilerIcon" /* 11051 */;
import AttachmentPreview from "AttachmentPreview" /* 11056 */;
import useContentHarmTypes from "useContentHarmTypes" /* 11316 */;
import MessageAttachmentUtils from "MessageAttachmentUtils" /* 11640 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SearchMessageStore from "SearchMessageStore" /* 6794 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, embed, flag;

let c10;
let c9;
let closure_15;
let closure_16;
let closure_17;
let unpackModuleId;
let closure_3 = ["attachment", "channelId", "authorId"];
let closure_4 = ["embed", "sources", "messageId", "channelId", "authorId"];
let closure_5 = ["unfurledMediaItem", "sources", "channelId", "authorId", "isBot"];
({ ImageBackground: c9, StyleSheet: c10, View: unpackModuleId } = react_native);
const MessageAttachmentFlags = Constants.MessageAttachmentFlags;
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = Fragment);
let closure_18 = createStyles.createStyles({ container: { justifyContent: "center", alignItems: "center" }, sound: { justifyContent: "center", alignItems: "center" } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let height;
  let items1;
  let items2;
  let obscureReason;
  let width;
  const obj = react2;
  const cResult = obj.c(16);
  ({ obscureReason, height, width } = arg0);
  const tmp4 = closure_18();
  let str = "light";
  const tmp6 = useThemeDefault();
  const obj2 = shared;
  if (obj2.isThemeDark(tmp6)) {
    str = "dark";
  }
  if (cResult[0] === height) {
    let tmp7;
    let tmp8;
    let tmp17;
    if (cResult[1] === width) {
      tmp7 = cResult[2];
    }
    if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
      let tmp14;
      const _Symbol2 = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = closure_15(generated_SpoilerIcon.SpoilerIcon, { size: "lg" });
        cResult[3] = tmp16;
        tmp14 = tmp16;
      } else {
        tmp14 = cResult[3];
      }
      tmp8 = tmp14;
    } else {
      let tmp10;
      if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
        if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== obscureReason) {
          if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
            if (ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT === obscureReason) {
              tmp8 = null;
            }
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = closure_15(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
        cResult[4] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[4];
      }
      tmp8 = tmp10;
    }
    if (cResult[5] !== tmp7) {
      const items = [authStore.absoluteFill, tmp7];
      cResult[5] = tmp7;
      cResult[6] = items;
      tmp17 = items;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] === str) {
      let tmp19;
      if (cResult[8] === tmp17) {
        tmp19 = cResult[9];
      }
      if (cResult[10] === tmp8) {
        let tmp22;
        if (cResult[11] === tmp4) {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp19) {
          let tmp28;
          if (cResult[14] === tmp22) {
            tmp28 = cResult[15];
          }
          return tmp28;
        }
        const obj3 = { children: items1 };
        items1 = [tmp19, tmp22];
        const tmp31 = closure_17(authStore3, obj3);
        cResult[13] = tmp19;
        cResult[14] = tmp22;
        cResult[15] = tmp31;
        tmp28 = tmp31;
      }
      let tmp24 = null != tmp8;
      if (tmp24) {
        const obj4 = { style: items2, children: tmp8 };
        items2 = [authStore.absoluteFill, tmp4.container];
        tmp24 = closure_15(unpackModuleId, obj4);
      }
      cResult[10] = tmp8;
      cResult[11] = tmp4;
      cResult[12] = tmp24;
      tmp22 = tmp24;
    }
    const obj5 = { blurTheme: str, style: tmp17 };
    const tmp21 = closure_15(VisualEffectViewDefault, obj5);
    cResult[7] = str;
    cResult[8] = tmp17;
    cResult[9] = tmp21;
    tmp19 = tmp21;
  }
  size = { height, width };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = size;
  tmp7 = size;
}) : ((obscureReason) => {
  let items2;
  let items4;
  obscureReason = obscureReason.obscureReason;
  const height = obscureReason.height;
  const width = obscureReason.width;
  const tmp = closure_18();
  let str = "light";
  const tmp4 = height(width[11])();
  const obj = obscureReason(width[12]);
  const tmp2 = height;
  const tmp3 = width;
  if (obj.isThemeDark(tmp4)) {
    str = "dark";
  }
  const items = [height, width];
  const items1 = [obscureReason];
  const memo = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  const memo1 = react.useMemo(() => {
    if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
      return closure_15(generated_SpoilerIcon.SpoilerIcon, { size: "lg" });
    } else {
      if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
        if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== obscureReason) {
          if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
            if (ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT === obscureReason) {
              return null;
            }
          }
        }
      }
      return closure_15(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
    }
  }, items1);
  const obj2 = { blurTheme: str, style: items2 };
  items2 = [closure_10.absoluteFill, memo];
  const children = [closure_15(tmp2(tmp3[16]), obj2), ];
  let tmp9Result = null != memo1;
  if (tmp9Result) {
    const obj3 = { style: items4, children: memo1 };
    items4 = [closure_10.absoluteFill, tmp.container];
    tmp9Result = closure_15(closure_11, obj3);
  }
  children[1] = tmp9Result;
  return closure_17(closure_16, { children });
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channelId) => {
  let containerHeight;
  let containerStyle;
  let containerWidth;
  let items1;
  let items2;
  let mediaHeight;
  let mediaUrl;
  let mediaWidth;
  let obscureReason;
  let placeholder;
  let placeholderVersion;
  let renderFallback;
  let scale;
  let tmp18;
  let tmp19;
  const obj = channelId(576);
  const cResult = obj.c(43);
  channelId = channelId.channelId;
  ({ mediaUrl, mediaHeight, mediaWidth, containerStyle, placeholder, placeholderVersion, renderFallback, obscureReason, containerHeight, containerWidth, scale } = channelId);
  if (cResult[0] === containerHeight) {
    let tmp4;
    let tmp6;
    let tmp8;
    let tmp11;
    let tmp45;
    if (cResult[1] === containerWidth) {
      tmp4 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [ChannelStore];
      cResult[3] = items;
      tmp6 = items;
    } else {
      tmp6 = cResult[3];
    }
    if (cResult[4] !== channelId) {
      const fn = function _() {
        return ChannelStore.getChannel(channelId);
      };
      cResult[4] = channelId;
      cResult[5] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[5];
    }
    const tmpResult = channelId(504);
    const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp8);
    const tmpResult6 = channelId(7956);
    const shouldDisplaySpoilerObscurity = tmpResult6.useShouldDisplaySpoilerObscurity(stateFromStores);
    if (obscureReason !== channelId(6809).ObscureReason.SPOILER) {
      tmp11 = obscureReason;
    } else {
      tmp11 = null;
    }
    if (null != mediaUrl) {
      if (null != mediaHeight) {
        if (null != mediaWidth) {
          let items4;
          if (cResult[8] === containerHeight) {
            if (cResult[9] === containerWidth) {
              if (cResult[10] === mediaHeight) {
                if (cResult[11] === mediaUrl) {
                  if (cResult[12] === mediaWidth) {
                    let tmp13;
                    let tmp21;
                    if (cResult[13] === scale) {
                      tmp13 = cResult[14];
                    }
                    if (cResult[15] !== tmp11) {
                      const tmpResult7 = channelId(11640);
                      const obscuredAlt = tmpResult7.getObscuredAlt(tmp11);
                      cResult[15] = tmp11;
                      cResult[16] = obscuredAlt;
                      tmp21 = obscuredAlt;
                    } else {
                      tmp21 = cResult[16];
                    }
                    if (cResult[17] === containerHeight) {
                      if (cResult[18] === containerWidth) {
                        let tmp23;
                        let tmp27;
                        if (cResult[19] === tmp11) {
                          tmp23 = cResult[20];
                        }
                        const tmpResult8 = channelId(1369);
                        if (tmpResult8.isAndroid()) {
                          if (null != tmp11) {
                            let tmp36;
                            if (cResult[21] !== tmp13) {
                              const obj2 = { uri: tmp13 };
                              cResult[21] = tmp13;
                              cResult[22] = obj2;
                              tmp36 = obj2;
                            } else {
                              tmp36 = cResult[22];
                            }
                            if (cResult[23] === tmp21) {
                              if (cResult[24] === tmp4) {
                                let tmp37;
                                if (cResult[25] === tmp36) {
                                  tmp37 = cResult[26];
                                }
                                if (cResult[27] === containerStyle) {
                                  if (cResult[28] === tmp23) {
                                    let tmp41;
                                    if (cResult[29] === tmp37) {
                                      tmp41 = cResult[30];
                                    }
                                    return tmp41;
                                  }
                                }
                                const obj3 = { style: containerStyle, children: items1 };
                                items1 = [tmp37, tmp23];
                                const tmp44 = closure_17(closure_11, obj3);
                                cResult[27] = containerStyle;
                                cResult[28] = tmp23;
                                cResult[29] = tmp37;
                                cResult[30] = tmp44;
                                tmp41 = tmp44;
                              }
                            }
                            const obj4 = { style: tmp4, source: tmp36, blurRadius: 10, resizeMode: "cover", accessibilityLabel: tmp21 };
                            const tmp40 = closure_15(closure_9, obj4);
                            cResult[23] = tmp21;
                            cResult[24] = tmp4;
                            cResult[25] = tmp36;
                            cResult[26] = tmp40;
                            tmp37 = tmp40;
                          }
                        }
                        if (cResult[31] !== tmp21) {
                          let stringResult = tmp21;
                          const tmpResult9 = channelId(1369);
                          if (tmpResult9.isAndroid()) {
                            const intl = tmp(1126).intl;
                            stringResult = intl.string(tmp(1126).t.jes7FG);
                          }
                          cResult[31] = tmp21;
                          cResult[32] = stringResult;
                          tmp27 = stringResult;
                        } else {
                          tmp27 = cResult[32];
                        }
                        if (cResult[33] === tmp27) {
                          if (cResult[34] === placeholder) {
                            if (cResult[35] === placeholderVersion) {
                              if (cResult[36] === tmp4) {
                                let tmp29;
                                if (cResult[37] === tmp13) {
                                  tmp29 = cResult[38];
                                }
                                if (cResult[39] === containerStyle) {
                                  if (cResult[40] === tmp23) {
                                    let tmp32;
                                    if (cResult[41] === tmp29) {
                                      tmp32 = cResult[42];
                                    }
                                    return tmp32;
                                  }
                                }
                                const obj5 = { style: containerStyle, children: items2 };
                                items2 = [tmp29, tmp23];
                                const tmp35 = closure_17(closure_11, obj5);
                                cResult[39] = containerStyle;
                                cResult[40] = tmp23;
                                cResult[41] = tmp29;
                                cResult[42] = tmp35;
                                tmp32 = tmp35;
                              }
                            }
                          }
                        }
                        const obj6 = { style: tmp4, uri: tmp13, placeholder, placeholderVersion, alt: tmp27 };
                        const tmp31 = closure_15(channelId(8442).ImageWithPlaceholder, obj6);
                        cResult[33] = tmp27;
                        cResult[34] = placeholder;
                        cResult[35] = placeholderVersion;
                        cResult[36] = tmp4;
                        cResult[37] = tmp13;
                        cResult[38] = tmp31;
                        tmp29 = tmp31;
                      }
                    }
                    let tmp24 = null;
                    if (null != tmp11) {
                      size = { obscureReason: tmp11, height: containerHeight, width: containerWidth };
                      tmp24 = closure_15(closure_19, size);
                    }
                    cResult[17] = containerHeight;
                    cResult[18] = containerWidth;
                    cResult[19] = tmp11;
                    cResult[20] = tmp24;
                    tmp23 = tmp24;
                  }
                }
              }
            }
          }
          const result = containerHeight * scale;
          const result1 = containerWidth * scale;
          if (mediaWidth > mediaHeight) {
            const _Math2 = Math;
            const items3 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
            items4 = items3;
          } else {
            items4 = [result, ];
            const _Math = Math;
            items4[1] = Math.round(mediaHeight * (result / mediaWidth));
          }
          [tmp18, tmp19] = items4;
          _slicedToArray(items4, 2);
          const obj7 = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp18, targetHeight: tmp19, format: "png" };
          const tmpResult10 = channelId(1483);
          const srcWithWidthAndHeight = tmpResult10.getSrcWithWidthAndHeight(obj7);
          cResult[8] = containerHeight;
          cResult[9] = containerWidth;
          cResult[10] = mediaHeight;
          cResult[11] = mediaUrl;
          cResult[12] = mediaWidth;
          cResult[13] = scale;
          cResult[14] = srcWithWidthAndHeight;
          tmp13 = srcWithWidthAndHeight;
        }
      }
    }
    if (cResult[6] !== renderFallback) {
      let tmp46 = null;
      if (null != renderFallback) {
        const obj8 = { children: renderFallback() };
        tmp46 = closure_15(closure_16, obj8);
      }
      cResult[6] = renderFallback;
      cResult[7] = tmp46;
      tmp45 = tmp46;
    } else {
      tmp45 = cResult[7];
    }
    return tmp45;
  }
  const size1 = { height: containerHeight, width: containerWidth };
  cResult[0] = containerHeight;
  cResult[1] = containerWidth;
  cResult[2] = size1;
  tmp4 = size1;
}) : ((containerWidth) => {
  let containerHeight;
  let containerStyle;
  let items4;
  let items5;
  let mediaHeight;
  let mediaUrl;
  let mediaWidth;
  let obj6;
  let obscureReason;
  let placeholder;
  let placeholderVersion;
  let renderFallback;
  let require;
  let tmp11;
  let tmp12;
  let tmp6;
  ({ channelId: require, mediaUrl, mediaHeight, mediaWidth, containerStyle, renderFallback, obscureReason, containerHeight } = containerWidth);
  containerWidth = containerWidth.containerWidth;
  const scale = containerWidth.scale;
  const items = [containerHeight, containerWidth];
  ({ placeholder, placeholderVersion } = containerWidth);
  const memo = react.useMemo(() => {
    size = { height: containerHeight, width: containerWidth };
    return size;
  }, items);
  const items1 = [ChannelStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(_require));
  const obj2 = require("computeGlobalSpoilerDisplay");
  const shouldDisplaySpoilerObscurity = obj2.useShouldDisplaySpoilerObscurity(stateFromStores);
  if (obscureReason !== require("ObscureMediaModels").ObscureReason.SPOILER) {
    tmp6 = obscureReason;
  } else {
    tmp6 = null;
  }
  if (null != mediaUrl) {
    if (null != mediaHeight) {
      if (null != mediaWidth) {
        let items3;
        const result = containerHeight * scale;
        const result1 = containerWidth * scale;
        if (mediaWidth > mediaHeight) {
          const _Math2 = Math;
          const items2 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
          items3 = items2;
        } else {
          items3 = [result, ];
          const _Math = Math;
          items3[1] = Math.round(mediaHeight * (result / mediaWidth));
        }
        [tmp11, tmp12] = items3;
        _slicedToArray(items3, 2);
        const obj3 = { src: mediaUrl, sourceWidth: mediaWidth, sourceHeight: mediaHeight, targetWidth: tmp11, targetHeight: tmp12, format: "png" };
        const tmp2Result = require("utils/ImageUtils");
        const srcWithWidthAndHeight = tmp2Result.getSrcWithWidthAndHeight(obj3);
        const tmp2Result4 = require("MessageAttachmentUtils");
        const obscuredAlt = tmp2Result4.getObscuredAlt(tmp6);
        let tmp15 = null;
        if (null != tmp6) {
          size = { obscureReason: tmp6, height: containerHeight, width: containerWidth };
          tmp15 = closure_15(closure_19, size);
        }
        const tmp2Result5 = require("PlatformUtils");
        if (tmp2Result5.isAndroid()) {
          if (null != tmp6) {
            const obj5 = { style: memo, source: obj6, blurRadius: 10, resizeMode: "cover", accessibilityLabel: obscuredAlt };
            const obj4 = { style: containerStyle, children: items4 };
            obj6 = { uri: srcWithWidthAndHeight };
            items4 = [closure_15(closure_9, obj5), tmp15];
            return closure_17(closure_11, obj4);
          }
        }
        let stringResult = obscuredAlt;
        const tmp2Result6 = require("PlatformUtils");
        if (tmp2Result6.isAndroid()) {
          const intl = require("intl").intl;
          stringResult = intl.string(require("intl").t.jes7FG);
        }
        const obj7 = { style: containerStyle, children: items5 };
        const obj8 = { style: memo, uri: srcWithWidthAndHeight, placeholder, placeholderVersion, alt: stringResult };
        items5 = [closure_15(require("ImageWithPlaceholder").ImageWithPlaceholder, obj8), tmp15];
        return closure_17(closure_11, obj7);
      }
    }
  }
  let tmp26 = null;
  if (null != renderFallback) {
    const obj9 = { children: renderFallback() };
    tmp26 = closure_15(closure_16, obj9);
  }
  return tmp26;
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let attachment;
  let authorId;
  let channelId;
  let tmp4;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] !== arg0) {
    ({ attachment, channelId, authorId } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = attachment;
    cResult[2] = authorId;
    cResult[3] = channelId;
    cResult[4] = tmp9;
    tmp6 = tmp9;
    tmp5 = channelId;
    tmp4 = authorId;
    size = attachment;
  } else {
    size = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  const tmpResult = useContentHarmTypes;
  const enabledHarmTypesBitmaskForChannelAndAuthorId = tmpResult.useEnabledHarmTypesBitmaskForChannelAndAuthorId(tmp5, tmp4);
  if (cResult[5] === size.flags) {
    let tmp11;
    if (cResult[6] === tmp5) {
      tmp11 = cResult[7];
    }
    if (cResult[8] === size) {
      if (cResult[9] === enabledHarmTypesBitmaskForChannelAndAuthorId) {
        let tmp15;
        let tmp17;
        if (cResult[10] === tmp11) {
          tmp15 = cResult[11];
        }
        if (cResult[12] !== size) {
          const tmpResult5 = MediaSourceUtil;
          const attachmentUrl = tmpResult5.getAttachmentUrl(size);
          cResult[12] = size;
          cResult[13] = attachmentUrl;
          tmp17 = attachmentUrl;
        } else {
          tmp17 = cResult[13];
        }
        if (cResult[14] === size.height) {
          if (cResult[15] === size.width) {
            if (cResult[16] === tmp5) {
              if (cResult[17] === tmp17) {
                if (cResult[18] === tmp15) {
                  let tmp19;
                  if (cResult[19] === tmp6) {
                    tmp19 = cResult[20];
                  }
                  return tmp19;
                }
              }
            }
          }
        }
        const obj2 = { channelId: tmp5, obscureReason: tmp15, mediaUrl: tmp17 };
        const merged = Object.assign(tmp6);
        ({ height: obj6.mediaHeight, width: obj6.mediaWidth } = size);
        const tmp25 = closure_15(closure_20, obj2);
        cResult[14] = size.height;
        cResult[15] = size.width;
        cResult[16] = tmp5;
        cResult[17] = tmp17;
        cResult[18] = tmp15;
        cResult[19] = tmp6;
        cResult[20] = tmp25;
        tmp19 = tmp25;
      }
    }
    const tmpResult6 = MessageAttachmentUtils;
    const obscureReasonForAttachment = tmpResult6.getObscureReasonForAttachment(size, enabledHarmTypesBitmaskForChannelAndAuthorId, tmp11);
    cResult[8] = size;
    cResult[9] = enabledHarmTypesBitmaskForChannelAndAuthorId;
    cResult[10] = tmp11;
    cResult[11] = obscureReasonForAttachment;
    tmp15 = obscureReasonForAttachment;
  }
  let num6 = size.flags;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (num6 == null) {
    num6 = 0;
  }
  let hasFlagResult = hasFlag(num6, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    const tmpResult8 = SpoilerChannelUtils;
    hasFlagResult = tmpResult8.isChannelSpoilerGated(ChannelStore.getChannel(tmp5));
  }
  cResult[5] = size.flags;
  cResult[6] = tmp5;
  cResult[7] = hasFlagResult;
  tmp11 = hasFlagResult;
}) : ((attachment) => {
  let attachmentUrl;
  let c2;
  attachment = attachment.attachment;
  const channelId = attachment.channelId;
  const authorId = attachment.authorId;
  const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
  dependencyMap = undefined;
  let obj = attachment(11316);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  let num = attachment.flags;
  const hasFlag = attachment(1390).hasFlag;
  attachment(1390);
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
  if (!hasFlagResult) {
    const tmp2Result = attachment(6842);
    hasFlagResult = tmp2Result.isChannelSpoilerGated(ChannelStore.getChannel(channelId));
  }
  dependencyMap = hasFlagResult;
  const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
  const memo = react.useMemo(() => {
    const obj = MessageAttachmentUtils;
    return obj.getObscureReasonForAttachment(attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, c2);
  }, items);
  const obj2 = { channelId, obscureReason: memo, mediaUrl: attachmentUrl };
  const tmp2Result2 = attachment(7950);
  attachmentUrl = tmp2Result2.getAttachmentUrl(attachment);
  const merged1 = Object.assign(merged);
  ({ height: obj4.mediaHeight, width: obj4.mediaWidth } = attachment);
  return closure_15(closure_20, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((embed) => {
  let authorId;
  let channelId;
  let closure_0;
  let closure_2;
  let isChannelSpoilerGated;
  let tmp14;
  let tmp18;
  let tmp4;
  let tmp5;
  let tmp8;
  let obj = require("react");
  const cResult = obj.c(26);
  if (cResult[0] !== embed) {
    embed = embed.embed;
    _require = embed;
    const sources = embed.sources;
    dependencyMap = sources;
    const messageId = embed.messageId;
    let closure_1 = messageId;
    ({ channelId, authorId } = embed);
    cResult[0] = embed;
    cResult[1] = authorId;
    cResult[2] = channelId;
    cResult[3] = embed;
    cResult[4] = messageId;
    const tmp12 = _objectWithoutProperties(embed, isChannelSpoilerGated);
    class C {
      constructor() {
        message = closure_13.getMessage(closure_1);
        if (null == message) {
          return null;
        } else {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[27]);
          tmp4 = closure_2;
          flag = false;
          flattenSourceResult = obj.flattenSource(closure_2, false);
          flag2 = undefined;
          if (flattenSourceResult != null) {
            flag2 = flattenSourceResult.spoiler;
          }
          if (flag2 == null) {
            flag2 = false;
          }
          tmp2Result = tmp2(tmp3[20]);
          tmp7 = closure_0;
          getObscureReasonForEmbed = tmp2Result.getObscureReasonForEmbed;
          if (!flag2) {
            flag2 = closure_4;
          }
          tmp8 = closure_3;
          tmp9 = tmp2Result;
          tmp10 = tmp7;
          tmp11 = message;
          tmp12 = flag2;
          return getObscureReasonForEmbed(tmp7, message, flag2, closure_3);
        }
      }
    }
    cResult[6] = sources;
    tmp8 = tmp12;
    tmp5 = channelId;
    tmp4 = authorId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    _require = cResult[3];
    closure_1 = cResult[4];
    tmp8 = cResult[5];
    dependencyMap = cResult[6];
  }
  const tmpResult = require("useContentHarmTypes");
  const enabledHarmTypesBitmaskForChannelAndAuthorId = tmpResult.useEnabledHarmTypesBitmaskForChannelAndAuthorId(tmp5, tmp4);
  if (cResult[7] !== tmp5) {
    const channel = ChannelStore.getChannel(tmp5);
    cResult[7] = tmp5;
    cResult[8] = channel;
    tmp14 = channel;
  } else {
    tmp14 = cResult[8];
  }
  const tmpResult5 = require("SpoilerChannelUtils");
  isChannelSpoilerGated = tmpResult5.useIsChannelSpoilerGated(tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SearchMessageStore];
    cResult[9] = items;
    tmp18 = items;
  } else {
    tmp18 = cResult[9];
  }
  if (cResult[10] === tmp6) {
    if (cResult[11] === enabledHarmTypesBitmaskForChannelAndAuthorId) {
      if (cResult[12] === isChannelSpoilerGated) {
        if (cResult[13] === tmp7) {
          let tmp20;
          let url;
          let height;
          let width;
          if (cResult[14] === tmp9) {
            tmp20 = cResult[15];
          }
          const tmpResult6 = require("get initialized");
          const stateFromStores = tmpResult6.useStateFromStores(tmp18, tmp20);
          const thumbnail = tmp6.thumbnail;
          if (cResult[16] !== tmp6) {
            const tmpResult7 = require("MediaSourceUtil");
            const embedMedia = tmpResult7.getEmbedMedia(tmp6);
            let embedUrl = null;
            if (null != embedMedia) {
              const tmpResult8 = require("MediaSourceUtil");
              embedUrl = tmpResult8.getEmbedUrl(embedMedia);
            }
            cResult[16] = tmp6;
            cResult[17] = embedMedia;
            cResult[18] = embedUrl;
            url = embedUrl;
            size = embedMedia;
          } else {
            size = cResult[17];
            url = cResult[18];
          }
          if (null != thumbnail) {
            url = thumbnail.url;
          }
          if (null != thumbnail) {
            height = thumbnail.height;
          } else if (size != null) {
            height = size.height;
          }
          if (null != thumbnail) {
            width = thumbnail.width;
          } else if (size != null) {
            width = size.width;
          }
          if (cResult[19] === tmp5) {
            if (cResult[20] === height) {
              if (cResult[21] === url) {
                if (cResult[22] === width) {
                  if (cResult[23] === stateFromStores) {
                    let tmp25;
                    if (cResult[24] === tmp8) {
                      tmp25 = cResult[25];
                    }
                    return tmp25;
                  }
                }
              }
            }
          }
          const obj2 = { channelId: tmp5, obscureReason: stateFromStores, mediaUrl: url, mediaHeight: height, mediaWidth: width };
          const merged = Object.assign(tmp8);
          const tmp31 = closure_15(closure_20, obj2);
          class C {
            constructor() {
              message = closure_13.getMessage(closure_1);
              if (null == message) {
                return null;
              } else {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[27]);
                tmp4 = closure_2;
                flag = false;
                flattenSourceResult = obj.flattenSource(closure_2, false);
                flag2 = undefined;
                if (flattenSourceResult != null) {
                  flag2 = flattenSourceResult.spoiler;
                }
                if (flag2 == null) {
                  flag2 = false;
                }
                tmp2Result = tmp2(tmp3[20]);
                tmp7 = closure_0;
                getObscureReasonForEmbed = tmp2Result.getObscureReasonForEmbed;
                if (!flag2) {
                  flag2 = closure_4;
                }
                tmp8 = closure_3;
                tmp9 = tmp2Result;
                tmp10 = tmp7;
                tmp11 = message;
                tmp12 = flag2;
                return getObscureReasonForEmbed(tmp7, message, flag2, closure_3);
              }
            }
          }
          cResult[19] = tmp5;
          cResult[20] = height;
          cResult[21] = url;
          cResult[22] = width;
          cResult[23] = stateFromStores;
          cResult[24] = tmp8;
          cResult[25] = tmp31;
          tmp25 = tmp31;
        }
      }
    }
  }
  class C {
    constructor() {
      message = closure_13.getMessage(closure_1);
      if (null == message) {
        return null;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[27]);
        tmp4 = closure_2;
        flag = false;
        flattenSourceResult = obj.flattenSource(closure_2, false);
        flag2 = undefined;
        if (flattenSourceResult != null) {
          flag2 = flattenSourceResult.spoiler;
        }
        if (flag2 == null) {
          flag2 = false;
        }
        tmp2Result = tmp2(tmp3[20]);
        tmp7 = closure_0;
        getObscureReasonForEmbed = tmp2Result.getObscureReasonForEmbed;
        if (!flag2) {
          flag2 = closure_4;
        }
        tmp8 = closure_3;
        tmp9 = tmp2Result;
        tmp10 = tmp7;
        tmp11 = message;
        tmp12 = flag2;
        return getObscureReasonForEmbed(tmp7, message, flag2, closure_3);
      }
    }
  }
  cResult[10] = tmp6;
  cResult[11] = enabledHarmTypesBitmaskForChannelAndAuthorId;
  cResult[12] = isChannelSpoilerGated;
  cResult[13] = tmp7;
  cResult[14] = tmp9;
  cResult[15] = C;
  tmp20 = C;
}) : ((embed) => {
  let channelId;
  let height;
  let width;
  embed = embed.embed;
  ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
  const authorId = embed.authorId;
  const merged = Object.assign(embed, Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }));
  let obj = embed(11316);
  closure_3 = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const obj2 = embed(6842);
  closure_4 = obj2.useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [SearchMessageStore];
  const thumbnail = embed.thumbnail;
  const obj3 = embed(504);
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const message = SearchMessageStore.getMessage(dependencyMap);
    if (null == message) {
      return null;
    } else {
      const obj = MediaSourceUtil;
      const flattenSourceResult = obj.flattenSource(importDefault, false);
      let flag2;
      if (flattenSourceResult != null) {
        flag2 = flattenSourceResult.spoiler;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      const getObscureReasonForEmbed = MessageAttachmentUtils.getObscureReasonForEmbed;
      const tmp2Result = MessageAttachmentUtils;
      if (!flag2) {
        flag2 = closure_4;
      }
      return getObscureReasonForEmbed(embed, message, flag2, closure_3);
    }
  });
  const obj4 = embed(7950);
  size = obj4.getEmbedMedia(embed);
  let embedUrl = null;
  const tmp2 = embed;
  if (null != size) {
    let tmp2Result = tmp2(7950);
    embedUrl = tmp2Result.getEmbedUrl(size);
  }
  if (null != thumbnail) {
    embedUrl = thumbnail.url;
  }
  if (null != thumbnail) {
    height = thumbnail.height;
  } else if (size != null) {
    height = size.height;
  }
  if (null != thumbnail) {
    width = thumbnail.width;
  } else if (size != null) {
    width = size.width;
  }
  const obj5 = { channelId, obscureReason: stateFromStores, mediaUrl: embedUrl, mediaHeight: height, mediaWidth: width };
  const merged1 = Object.assign(merged);
  return closure_15(closure_20, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let height;
  let width;
  const obj = react2;
  const cResult = obj.c(10);
  ({ height, width, containerStyle } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === height) {
    let tmp5;
    if (cResult[1] === width) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === containerStyle) {
      if (cResult[4] === tmp5) {
        let tmp6;
        let tmp8;
        let tmp11;
        if (cResult[5] === tmp4.sound) {
          tmp6 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp10 = closure_15(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" });
          cResult[7] = tmp10;
          tmp8 = tmp10;
        } else {
          tmp8 = cResult[7];
        }
        if (cResult[8] !== tmp6) {
          const obj2 = { style: tmp6, children: tmp8 };
          const tmp14 = closure_15(unpackModuleId, obj2);
          cResult[8] = tmp6;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[9];
        }
        return tmp11;
      }
    }
    const items = [tmp4.sound, containerStyle, tmp5];
    cResult[3] = containerStyle;
    cResult[4] = tmp5;
    cResult[5] = tmp4.sound;
    cResult[6] = items;
    tmp6 = items;
  }
  size = { height, width };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = size;
  tmp5 = size;
}) : ((height) => {
  let items1;
  height = height.height;
  const width = height.width;
  const containerStyle = height.containerStyle;
  const items = [height, width];
  const obj = { style: items1, children: closure_15(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" }) };
  items1 = [closure_18().sound, containerStyle, ];
  closure_18();
  items1[2] = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  return closure_15(unpackModuleId, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let fileName;
  let height;
  let width;
  const obj = react2;
  const cResult = obj.c(12);
  ({ fileName, height, width, containerStyle } = arg0);
  const tmp4 = closure_18();
  if (cResult[0] === height) {
    let tmp5;
    if (cResult[1] === width) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === containerStyle) {
      if (cResult[4] === tmp5) {
        let tmp6;
        let tmp7;
        if (cResult[5] === tmp4.sound) {
          tmp6 = cResult[6];
        }
        if (cResult[7] !== fileName) {
          const obj2 = { fileName };
          const tmp9 = closure_15(AttachmentPreview.AttachmentIcon, obj2);
          cResult[7] = fileName;
          cResult[8] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          let tmp10;
          if (cResult[10] === tmp7) {
            tmp10 = cResult[11];
          }
          return tmp10;
        }
        const obj3 = { style: tmp6, children: tmp7 };
        const tmp13 = closure_15(unpackModuleId, obj3);
        cResult[9] = tmp6;
        cResult[10] = tmp7;
        cResult[11] = tmp13;
        tmp10 = tmp13;
      }
    }
    const items = [tmp4.sound, containerStyle, tmp5];
    cResult[3] = containerStyle;
    cResult[4] = tmp5;
    cResult[5] = tmp4.sound;
    cResult[6] = items;
    tmp6 = items;
  }
  size = { height, width };
  cResult[0] = height;
  cResult[1] = width;
  cResult[2] = size;
  tmp5 = size;
}) : ((height) => {
  let containerStyle;
  let fileName;
  let items1;
  height = height.height;
  const width = height.width;
  ({ fileName, containerStyle } = height);
  const items = [height, width];
  const obj = { style: items1, children: closure_15(AttachmentPreview.AttachmentIcon, { fileName }) };
  items1 = [closure_18().sound, containerStyle, ];
  closure_18();
  items1[2] = react.useMemo(() => {
    size = { height, width };
    return size;
  }, items);
  return closure_15(unpackModuleId, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let authorId;
  let channelId;
  let isBot;
  let sources;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let unfurledMediaItem;
  const obj = react2;
  const cResult = obj.c(24);
  if (cResult[0] !== arg0) {
    ({ unfurledMediaItem, sources, channelId, authorId, isBot } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_5);
    cResult[0] = arg0;
    cResult[1] = authorId;
    cResult[2] = channelId;
    cResult[3] = isBot;
    cResult[4] = tmp11;
    cResult[5] = sources;
    cResult[6] = unfurledMediaItem;
    size = unfurledMediaItem;
    tmp8 = sources;
    tmp7 = tmp11;
    tmp6 = isBot;
    tmp5 = channelId;
    tmp4 = authorId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    size = cResult[6];
  }
  const tmpResult = useContentHarmTypes;
  const enabledHarmTypesBitmaskForChannelAndAuthorId = tmpResult.useEnabledHarmTypesBitmaskForChannelAndAuthorId(tmp5, tmp4);
  if (cResult[7] !== tmp5) {
    const channel = ChannelStore.getChannel(tmp5);
    cResult[7] = tmp5;
    cResult[8] = channel;
    tmp13 = channel;
  } else {
    tmp13 = cResult[8];
  }
  const tmpResult4 = SpoilerChannelUtils;
  const isChannelSpoilerGated = tmpResult4.useIsChannelSpoilerGated(tmp13);
  if (cResult[9] === isChannelSpoilerGated) {
    let tmp17;
    if (cResult[10] === tmp8) {
      tmp17 = cResult[11];
    }
    if (cResult[12] === enabledHarmTypesBitmaskForChannelAndAuthorId) {
      if (cResult[13] === tmp6) {
        if (cResult[14] === tmp17) {
          let tmp21;
          if (cResult[15] === size) {
            tmp21 = cResult[16];
          }
          if (cResult[17] === tmp5) {
            if (cResult[18] === tmp21) {
              if (cResult[19] === tmp7) {
                if (cResult[20] === size.height) {
                  if (cResult[21] === size.proxyUrl) {
                    let tmp28;
                    if (cResult[22] === size.width) {
                      tmp28 = cResult[23];
                    }
                    return tmp28;
                  }
                }
              }
            }
          }
          const obj2 = { channelId: tmp5, obscureReason: tmp21 };
          const merged = Object.assign(tmp7);
          ({ proxyUrl: obj6.mediaUrl, height: obj6.mediaHeight, width: obj6.mediaWidth } = size);
          const tmp34 = closure_15(closure_20, obj2);
          cResult[17] = tmp5;
          cResult[18] = tmp21;
          cResult[19] = tmp7;
          cResult[20] = size.height;
          cResult[21] = size.proxyUrl;
          cResult[22] = size.width;
          cResult[23] = tmp34;
          tmp28 = tmp34;
        }
      }
    }
    const tmpResult5 = MessageAttachmentUtils;
    const obscureReasonForUnfurledMediaItem = tmpResult5.getObscureReasonForUnfurledMediaItem(size, enabledHarmTypesBitmaskForChannelAndAuthorId, tmp17, tmp6);
    cResult[12] = enabledHarmTypesBitmaskForChannelAndAuthorId;
    cResult[13] = tmp6;
    cResult[14] = tmp17;
    cResult[15] = size;
    cResult[16] = obscureReasonForUnfurledMediaItem;
    tmp21 = obscureReasonForUnfurledMediaItem;
  }
  const tmpResult6 = MediaSourceUtil;
  const flattenSourceResult = tmpResult6.flattenSource(tmp8);
  let spoiler;
  if (flattenSourceResult != null) {
    spoiler = flattenSourceResult.spoiler;
  }
  cResult[9] = isChannelSpoilerGated;
  cResult[10] = tmp8;
  cResult[11] = spoiler || isChannelSpoilerGated;
  tmp17 = tmp20;
}) : ((unfurledMediaItem) => {
  let channelId;
  let isBot;
  let memo;
  unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
  const sources = unfurledMediaItem.sources;
  ({ channelId, isBot } = unfurledMediaItem);
  const authorId = unfurledMediaItem.authorId;
  const merged = Object.assign(unfurledMediaItem, Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }));
  let obj = unfurledMediaItem(isBot[24]);
  const enabledHarmTypesBitmaskForChannelAndAuthorId = obj.useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, authorId);
  const obj2 = unfurledMediaItem(isBot[26]);
  const isChannelSpoilerGated = obj2.useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
  const items = [unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, sources, isBot, isChannelSpoilerGated];
  const obj4 = { channelId, obscureReason: memo };
  memo = react.useMemo(() => {
    const getObscureReasonForUnfurledMediaItem = MessageAttachmentUtils.getObscureReasonForUnfurledMediaItem;
    MessageAttachmentUtils;
    const obj = MediaSourceUtil;
    const flattenSourceResult = obj.flattenSource(sources);
    let spoiler;
    if (flattenSourceResult != null) {
      spoiler = flattenSourceResult.spoiler;
    }
    const tmp6 = spoiler || isChannelSpoilerGated;
    return getObscureReasonForUnfurledMediaItem(unfurledMediaItem, enabledHarmTypesBitmaskForChannelAndAuthorId, tmp6, isBot);
  }, items);
  const merged1 = Object.assign(merged);
  ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
  return closure_15(closure_20, obj4);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = tmp5;
export const SearchEmbedMediaImage = tmp6;
export const SearchSoundMediaImage = tmp7;
export const SearchFileMediaImage = tmp8;
export const SearchComponentMediaImage = tmp9;