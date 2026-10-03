// discord_app/modules/search/native/components/list/SearchMediaImage.tsx
import c from "../../../../../../_runtime/00576_c.js";
import FlagUtils from "../../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import shared from "../../../../../design/shared.tsx";
import useThemeDefault from "../../../../../hooks/useTheme.tsx";
import VisualEffectViewDefault from "../../../../visual_effect_view/native/VisualEffectView.tsx";
import SpoilerChannelUtils from "../../../../spoiler_channels/SpoilerChannelUtils.tsx";
import MediaSourceUtil from "../../../../media_viewer/native/MediaSourceUtil.tsx";
import CirclePlayIcon from "../../../../../design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx";
import AttachmentPreview from "../../../../media/native/AttachmentPreview.tsx";
import useContentHarmTypes from "../../../../explicit_media_redaction/hooks/useContentHarmTypes.tsx";
import MessageAttachmentUtils from "../../../../messages/MessageAttachmentUtils.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import SearchMessageStore from "../../../SearchMessageStore.tsx";

const ImageWarningIcon = SpoilerIcon(5865);
const ObscureMediaModels = SpoilerIcon(6799);
const generated_SpoilerIcon = SpoilerIcon(11038);
require = fn;
let closure_3 = ["attachment", "channelId", "authorId"];
let closure_4 = ["embed", "sources", "messageId", "channelId", "authorId"];
let closure_5 = ["unfurledMediaItem", "sources", "channelId", "authorId", "isBot"];
get_ActivityIndicator = fn(17);
({ ImageBackground: closure_9, StyleSheet: c10, View: closure_11 } = get_ActivityIndicator);
const MessageAttachmentFlags = fn(1085).MessageAttachmentFlags;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const createStyles = fn(4890);
let closure_18 = createStyles.createStyles({
  container: { justifyContent: "center", alignItems: "center" },
  sound: { justifyContent: "center", alignItems: "center" },
});
let ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let SpoilerIcon = require;
      const cResult = c.c(16);
      ({ obscureReason, height, width } = arg0);
      const tmp3 = closure_18();
      const tmp5 = useThemeDefault();
      let str = "light";
      if (obj2.isThemeDark(tmp5)) {
        str = "dark";
      }
      if (cResult[0] === height) {
        if (cResult[1] === width) {
          let tmp6 = cResult[2];
        }
        if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            SpoilerIcon = generated_SpoilerIcon.SpoilerIcon;
            const tmp15 = closure_1_15(SpoilerIcon, { size: "lg" });
            cResult[3] = tmp15;
          }
        } else {
          if (ObscureMediaModels.ObscureReason.EXPLICIT_CONTENT !== obscureReason) {
            if (ObscureMediaModels.ObscureReason.GORE_CONTENT !== obscureReason) {
              if (ObscureMediaModels.ObscureReason.SELF_HARM_CONTENT !== obscureReason) {
                if (ObscureMediaModels.ObscureReason.POTENTIAL_EXPLICIT_CONTENT === obscureReason) {
                  let tmp7 = null;
                }
              }
              if (cResult[5] !== tmp6) {
                const items = [v65535.absoluteFill, tmp6];
                cResult[5] = tmp6;
                cResult[6] = items;
                let tmp17 = items;
              } else {
                tmp17 = cResult[6];
              }
              if (cResult[7] === str) {
                if (cResult[8] === tmp17) {
                  let tmp19 = cResult[9];
                }
                if (cResult[10] === tmp7) {
                  if (cResult[11] === tmp3) {
                    let tmp22 = cResult[12];
                  }
                  if (cResult[13] === tmp19) {
                    if (cResult[14] === tmp22) {
                      let tmp28 = cResult[15];
                    }
                    return tmp28;
                  }
                  const obj3 = { children: null };
                  const items1 = [tmp19, tmp22];
                  obj3.children = items1;
                  const tmp31 = constants(value2, obj3);
                  cResult[13] = tmp19;
                  cResult[14] = tmp22;
                  cResult[15] = tmp31;
                  tmp28 = tmp31;
                }
                let tmp24 = null != tmp7;
                if (tmp24) {
                  const obj4 = { style: null, children: null };
                  const items2 = [v65535.absoluteFill, tmp3.container];
                  obj4.style = items2;
                  obj4.children = tmp7;
                  tmp24 = closure_1_15(closure_1_11, obj4);
                }
                cResult[10] = tmp7;
                cResult[11] = tmp3;
                cResult[12] = tmp24;
                tmp22 = tmp24;
              }
              const obj5 = { blurTheme: str, style: tmp17 };
              const tmp21 = closure_1_15(VisualEffectViewDefault, obj5);
              cResult[7] = str;
              cResult[8] = tmp17;
              cResult[9] = tmp21;
              tmp19 = tmp21;
            }
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp11 = closure_1_15(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
            cResult[4] = tmp11;
            let tmp9 = tmp11;
          } else {
            tmp9 = cResult[4];
          }
          tmp7 = tmp9;
        }
      }
      const size = { height, width };
      cResult[0] = height;
      cResult[1] = width;
      cResult[2] = size;
      tmp6 = size;
      obj2 = shared;
    }
  : (obscureReason) => {
      obscureReason = obscureReason.obscureReason;
      const height = obscureReason.height;
      const width = obscureReason.width;
      const tmp = closure_18();
      const tmp2 = height;
      const tmp3 = width;
      const tmp4 = height(width[11])();
      let str = "light";
      if (obj.isThemeDark(tmp4)) {
        str = "dark";
      }
      const items = [height, width];
      const items1 = [obscureReason];
      const memo = noop.useMemo(() => {
        const size = { height, width };
        return size;
      }, items);
      const memo1 = noop.useMemo(() => {
        if (ObscureMediaModels.ObscureReason.SPOILER === obscureReason) {
          return closure_2_15(generated_SpoilerIcon.SpoilerIcon, { size: "lg" });
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
          return closure_2_15(ImageWarningIcon.ImageWarningIcon, { size: "lg" });
        }
      }, items1);
      const obj2 = { blurTheme: str, style: null };
      const items2 = [closure_10.absoluteFill, memo];
      obj2.style = items2;
      const children = [closure_15(tmp2(tmp3[16]), obj2)];
      let tmp9Result = null != memo1;
      if (tmp9Result) {
        const obj3 = { style: null, children: null };
        const items4 = [closure_10.absoluteFill, tmp.container];
        obj3.style = items4;
        obj3.children = memo1;
        tmp9Result = closure_15(closure_11, obj3);
      }
      children[1] = tmp9Result;
      return closure_17(closure_16, { children });
    };
ReactCompilerGating = fn(558);
let closure_20 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channelId) => {
        const cResult = channelId(576).c(43);
        channelId = channelId.channelId;
        ({
          mediaUrl,
          mediaHeight,
          mediaWidth,
          containerStyle,
          placeholder,
          placeholderVersion,
          renderFallback,
          obscureReason,
          containerHeight,
          containerWidth,
          scale,
        } = channelId);
        if (cResult[0] === containerHeight) {
          if (cResult[1] === containerWidth) {
            let tmp4 = cResult[2];
          }
          let srcWithWidthAndHeight = globalThis;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const items = [ChannelStore];
            cResult[3] = items;
            let tmp6 = items;
          } else {
            tmp6 = cResult[3];
          }
          if (cResult[4] !== channelId) {
            const fn = function _() {
              return ChannelStore.getChannel(channelId);
            };
            cResult[4] = channelId;
            cResult[5] = fn;
            let tmp8 = fn;
          } else {
            tmp8 = cResult[5];
          }
          const stateFromStores = tmp(504).useStateFromStores(tmp6, tmp8);
          const tmpResult = tmp(504);
          const shouldDisplaySpoilerObscurity = tmp(7945).useShouldDisplaySpoilerObscurity(stateFromStores);
          if (obscureReason !== tmp(6799).ObscureReason.SPOILER) {
            let tmp11 = obscureReason;
          } else {
            tmp11 = null;
          }
          if (null != mediaUrl) {
            if (null != mediaHeight) {
              if (null != mediaWidth) {
                if (cResult[8] === containerHeight) {
                  if (cResult[9] === containerWidth) {
                    if (cResult[10] === mediaHeight) {
                      if (cResult[11] === mediaUrl) {
                        if (cResult[12] === mediaWidth) {
                          if (cResult[13] === scale) {
                            if (cResult[15] !== tmp11) {
                              const obscuredAlt = tmp(11626).getObscuredAlt(tmp11);
                              cResult[15] = tmp11;
                              cResult[16] = obscuredAlt;
                              let tmp20 = obscuredAlt;
                              const tmpResult6 = tmp(11626);
                            } else {
                              tmp20 = cResult[16];
                            }
                            if (cResult[17] === containerHeight) {
                              if (cResult[18] === containerWidth) {
                                if (cResult[19] === tmp11) {
                                  let tmp22 = cResult[20];
                                }
                                if (tmpResult7.isAndroid()) {
                                  if (null != tmp11) {
                                    if (cResult[21] !== tmp13) {
                                      const obj2 = { uri: tmp13 };
                                      cResult[21] = tmp13;
                                      cResult[22] = obj2;
                                      let tmp35 = obj2;
                                    } else {
                                      tmp35 = cResult[22];
                                    }
                                    if (cResult[23] === tmp20) {
                                      if (cResult[24] === tmp4) {
                                        if (cResult[25] === tmp35) {
                                          let tmp36 = cResult[26];
                                        }
                                        if (cResult[27] === containerStyle) {
                                          if (cResult[28] === tmp22) {
                                            if (cResult[29] === tmp36) {
                                              let tmp40 = cResult[30];
                                            }
                                            return tmp40;
                                          }
                                        }
                                        const obj3 = { style: containerStyle, children: null };
                                        const items1 = [tmp36, tmp22];
                                        obj3.children = items1;
                                        const tmp43 = closure_17(closure_11, obj3);
                                        cResult[27] = containerStyle;
                                        cResult[28] = tmp22;
                                        cResult[29] = tmp36;
                                        cResult[30] = tmp43;
                                        tmp40 = tmp43;
                                      }
                                    }
                                    const obj4 = {
                                      style: tmp4,
                                      source: tmp35,
                                      blurRadius: 10,
                                      resizeMode: "cover",
                                      accessibilityLabel: tmp20,
                                    };
                                    const tmp39 = closure_15(closure_9, obj4);
                                    cResult[23] = tmp20;
                                    cResult[24] = tmp4;
                                    cResult[25] = tmp35;
                                    cResult[26] = tmp39;
                                    tmp36 = tmp39;
                                  }
                                }
                                if (cResult[31] !== tmp20) {
                                  let stringResult = tmp20;
                                  if (tmpResult8.isAndroid()) {
                                    const intl = tmp(1126).intl;
                                    stringResult = intl.string(tmp(1126).t.jes7FG);
                                  }
                                  cResult[31] = tmp20;
                                  cResult[32] = stringResult;
                                  let tmp26 = stringResult;
                                  tmpResult8 = tmp(1369);
                                } else {
                                  tmp26 = cResult[32];
                                }
                                if (cResult[33] === tmp26) {
                                  if (cResult[34] === placeholder) {
                                    if (cResult[35] === placeholderVersion) {
                                      if (cResult[36] === tmp4) {
                                        if (cResult[37] === tmp13) {
                                          let tmp28 = cResult[38];
                                        }
                                        if (cResult[39] === containerStyle) {
                                          if (cResult[40] === tmp22) {
                                            if (cResult[41] === tmp28) {
                                              let tmp31 = cResult[42];
                                            }
                                            return tmp31;
                                          }
                                        }
                                        const obj5 = { style: containerStyle, children: null };
                                        const items2 = [tmp28, tmp22];
                                        obj5.children = items2;
                                        const tmp34 = closure_17(closure_11, obj5);
                                        cResult[39] = containerStyle;
                                        cResult[40] = tmp22;
                                        cResult[41] = tmp28;
                                        cResult[42] = tmp34;
                                        tmp31 = tmp34;
                                      }
                                    }
                                  }
                                }
                                const obj6 = { style: tmp4, uri: tmp13, placeholder, placeholderVersion, alt: tmp26 };
                                const tmp30 = closure_15(tmp(8409).ImageWithPlaceholder, obj6);
                                cResult[33] = tmp26;
                                cResult[34] = placeholder;
                                cResult[35] = placeholderVersion;
                                cResult[36] = tmp4;
                                cResult[37] = tmp13;
                                cResult[38] = tmp30;
                                tmp28 = tmp30;
                                tmpResult7 = tmp(1369);
                              }
                            }
                            let tmp23 = null;
                            if (null != tmp11) {
                              const size = { obscureReason: tmp11, height: containerHeight, width: containerWidth };
                              tmp23 = closure_15(closure_19, size);
                            }
                            cResult[17] = containerHeight;
                            cResult[18] = containerWidth;
                            cResult[19] = tmp11;
                            cResult[20] = tmp23;
                            tmp22 = tmp23;
                          }
                        }
                      }
                    }
                  }
                }
                const result = containerHeight * scale;
                let result1 = containerWidth * scale;
                if (mediaWidth > mediaHeight) {
                  const _Math2 = srcWithWidthAndHeight.Math;
                  const items3 = [_Math2.round(mediaWidth * (result1 / mediaHeight)), result1];
                  let items4 = items3;
                } else {
                  items4 = [result];
                  const _Math = Math;
                  items4[1] = Math.round(mediaHeight * (result / mediaWidth));
                }
                [tmp17, tmp18] = items4;
                result1 = tmp(1483);
                const obj7 = {
                  src: mediaUrl,
                  sourceWidth: mediaWidth,
                  sourceHeight: mediaHeight,
                  targetWidth: tmp17,
                  targetHeight: tmp18,
                  format: "png",
                };
                srcWithWidthAndHeight = result1.getSrcWithWidthAndHeight(obj7);
                cResult[8] = containerHeight;
                cResult[9] = containerWidth;
                cResult[10] = mediaHeight;
                cResult[11] = mediaUrl;
                cResult[12] = mediaWidth;
                cResult[13] = scale;
                cResult[14] = srcWithWidthAndHeight;
                const tmp16 = _slicedToArray(items4, 2);
              }
            }
          }
          if (cResult[6] !== renderFallback) {
            let tmp45 = null;
            if (null != renderFallback) {
              const obj8 = { children: renderFallback() };
              tmp45 = closure_15(closure_16, obj8);
            }
            cResult[6] = renderFallback;
            cResult[7] = tmp45;
            let tmp44 = tmp45;
          } else {
            tmp44 = cResult[7];
          }
          return tmp44;
        }
        const size1 = { height: containerHeight, width: containerWidth };
        cResult[0] = containerHeight;
        cResult[1] = containerWidth;
        cResult[2] = size1;
        tmp4 = size1;
        const obj = channelId(576);
      }
    : (containerWidth) => {
        ({
          channelId: require,
          mediaUrl,
          mediaHeight,
          mediaWidth,
          containerStyle,
          renderFallback,
          obscureReason,
          containerHeight,
        } = containerWidth);
        containerWidth = containerWidth.containerWidth;
        const scale = containerWidth.scale;
        const items = [containerHeight, containerWidth];
        ({ placeholder, placeholderVersion } = containerWidth);
        const memo = noop.useMemo(() => {
          const size = { height: containerHeight, width: containerWidth };
          return size;
        }, items);
        const items1 = [ChannelStore];
        const stateFromStores = require("initialize").useStateFromStores(items1, () =>
          ChannelStore.getChannel(_require),
        );
        const obj = require("initialize");
        const shouldDisplaySpoilerObscurity =
          require("computeGlobalSpoilerDisplay").useShouldDisplaySpoilerObscurity(stateFromStores);
        if (obscureReason !== require("ObscureMediaModels").ObscureReason.SPOILER) {
          let tmp6 = obscureReason;
        } else {
          tmp6 = null;
        }
        if (null != mediaUrl) {
          if (null != mediaHeight) {
            if (null != mediaWidth) {
              const result = containerHeight * scale;
              const result1 = containerWidth * scale;
              if (mediaWidth > mediaHeight) {
                const _Math2 = Math;
                const items2 = [Math.round(mediaWidth * (result1 / mediaHeight)), result1];
                let items3 = items2;
              } else {
                items3 = [result];
                const _Math = Math;
                items3[1] = Math.round(mediaHeight * (result / mediaWidth));
              }
              [tmp11, tmp12] = items3;
              const tmp10 = _slicedToArray(items3, 2);
              const obj3 = {
                src: mediaUrl,
                sourceWidth: mediaWidth,
                sourceHeight: mediaHeight,
                targetWidth: tmp11,
                targetHeight: tmp12,
                format: "png",
              };
              const srcWithWidthAndHeight = require("utils/ImageUtils").getSrcWithWidthAndHeight(obj3);
              const tmp2Result = require("utils/ImageUtils");
              const obscuredAlt = require("MessageAttachmentUtils").getObscuredAlt(tmp6);
              let tmp15 = null;
              if (null != tmp6) {
                let size = { obscureReason: tmp6, height: containerHeight, width: containerWidth };
                tmp15 = closure_15(closure_19, size);
              }
              const tmp2Result4 = require("MessageAttachmentUtils");
              if (tmp2Result5.isAndroid()) {
                if (null != tmp6) {
                  const obj4 = { style: containerStyle, children: null };
                  const obj5 = {
                    style: memo,
                    source: null,
                    blurRadius: 10,
                    resizeMode: "cover",
                    accessibilityLabel: null,
                  };
                  const obj6 = { uri: srcWithWidthAndHeight };
                  obj5.source = obj6;
                  obj5.accessibilityLabel = obscuredAlt;
                  const items4 = [closure_15(closure_9, obj5), tmp15];
                  obj4.children = items4;
                  return closure_17(closure_11, obj4);
                }
              }
              tmp2Result5 = require("PlatformUtils");
              let stringResult = obscuredAlt;
              if (tmp2Result6.isAndroid()) {
                const intl = require("util").intl;
                stringResult = intl.string(require("util").t.jes7FG);
              }
              const obj7 = { style: containerStyle, children: null };
              const obj8 = {
                style: memo,
                uri: srcWithWidthAndHeight,
                placeholder,
                placeholderVersion,
                alt: stringResult,
              };
              const items5 = [closure_15(require("ImageWithPlaceholder").ImageWithPlaceholder, obj8), tmp15];
              obj7.children = items5;
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
      },
);
fn(558);
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(21);
      if (cResult[0] !== arg0) {
        ({ attachment, channelId, authorId } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = attachment;
        cResult[2] = authorId;
        cResult[3] = channelId;
        cResult[4] = tmp9;
        let tmp6 = tmp9;
        let tmp5 = channelId;
        let tmp4 = authorId;
        let size = attachment;
      } else {
        size = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      const enabledHarmTypesBitmaskForChannelAndAuthorId =
        useContentHarmTypes.useEnabledHarmTypesBitmaskForChannelAndAuthorId(tmp5, tmp4);
      if (cResult[5] === size.flags) {
        if (cResult[6] === tmp5) {
          let tmp11 = cResult[7];
        }
        if (cResult[8] === size) {
          if (cResult[9] === enabledHarmTypesBitmaskForChannelAndAuthorId) {
            if (cResult[10] === tmp11) {
              let tmp14 = cResult[11];
            }
            if (cResult[12] !== size) {
              const attachmentUrl = MediaSourceUtil.getAttachmentUrl(size);
              cResult[12] = size;
              cResult[13] = attachmentUrl;
              let tmp16 = attachmentUrl;
              const tmpResult5 = MediaSourceUtil;
            } else {
              tmp16 = cResult[13];
            }
            if (cResult[14] === size.height) {
              if (cResult[15] === size.width) {
                if (cResult[16] === tmp5) {
                  if (cResult[17] === tmp16) {
                    if (cResult[18] === tmp14) {
                      if (cResult[19] === tmp6) {
                        let tmp18 = cResult[20];
                      }
                      return tmp18;
                    }
                  }
                }
              }
            }
            const obj2 = {};
            const merged = Object.assign(tmp6);
            obj2.channelId = tmp5;
            obj2.obscureReason = tmp14;
            obj2.mediaUrl = tmp16;
            ({ height: obj7.mediaHeight, width: obj7.mediaWidth } = size);
            const tmp24 = closure_1_15(closure_20, obj2);
            cResult[14] = size.height;
            cResult[15] = size.width;
            cResult[16] = tmp5;
            cResult[17] = tmp16;
            cResult[18] = tmp14;
            cResult[19] = tmp6;
            cResult[20] = tmp24;
            tmp18 = tmp24;
          }
        }
        const obscureReasonForAttachment = MessageAttachmentUtils.getObscureReasonForAttachment(
          size,
          enabledHarmTypesBitmaskForChannelAndAuthorId,
          tmp11,
        );
        cResult[8] = size;
        cResult[9] = enabledHarmTypesBitmaskForChannelAndAuthorId;
        cResult[10] = tmp11;
        cResult[11] = obscureReasonForAttachment;
        tmp14 = obscureReasonForAttachment;
        const tmpResult6 = MessageAttachmentUtils;
      }
      const tmpResult = useContentHarmTypes;
      let num6 = size.flags;
      if (num6 == null) {
        num6 = 0;
      }
      let hasFlagResult = FlagUtils.hasFlag(num6, MessageAttachmentFlags.IS_SPOILER);
      if (!hasFlagResult) {
        hasFlagResult = SpoilerChannelUtils.isChannelSpoilerGated(ChannelStore.getChannel(tmp5));
        const tmpResult8 = SpoilerChannelUtils;
      }
      cResult[5] = size.flags;
      cResult[6] = tmp5;
      cResult[7] = hasFlagResult;
      tmp11 = hasFlagResult;
      const tmpResult7 = FlagUtils;
    }
  : (attachment) => {
      attachment = attachment.attachment;
      const channelId = attachment.channelId;
      const merged = Object.assign(attachment, Object.assign({ attachment: 0, channelId: 0, authorId: 0 }));
      dependencyMap = undefined;
      const enabledHarmTypesBitmaskForChannelAndAuthorId = attachment(
        11303,
      ).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, attachment.authorId);
      const obj = attachment(11303);
      let num = attachment.flags;
      if (num == null) {
        num = 0;
      }
      let hasFlagResult = attachment(1390).hasFlag(num, MessageAttachmentFlags.IS_SPOILER);
      if (!hasFlagResult) {
        hasFlagResult = tmp2(6832).isChannelSpoilerGated(ChannelStore.getChannel(channelId));
        const tmp2Result = tmp2(6832);
      }
      dependencyMap = hasFlagResult;
      const items = [attachment, enabledHarmTypesBitmaskForChannelAndAuthorId, hasFlagResult];
      const memo = noop.useMemo(
        () =>
          MessageAttachmentUtils.getObscureReasonForAttachment(
            attachment,
            enabledHarmTypesBitmaskForChannelAndAuthorId,
            c2,
          ),
        items,
      );
      const obj2 = attachment(1390);
      const obj3 = {};
      const attachmentUrl = attachment(7939).getAttachmentUrl(attachment);
      const merged1 = Object.assign(merged);
      obj3.channelId = channelId;
      obj3.obscureReason = memo;
      obj3.mediaUrl = attachmentUrl;
      ({ height: obj5.mediaHeight, width: obj5.mediaWidth } = attachment);
      return closure_15(closure_20, obj3);
    };
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (embed) => {
      const cResult = require("c").c(26);
      if (cResult[0] !== embed) {
        embed = embed.embed;
        _require = embed;
        const sources = embed.sources;
        dependencyMap = sources;
        const messageId = embed.messageId;
        closure_1 = messageId;
        ({ channelId, authorId } = embed);
        cResult[0] = embed;
        cResult[1] = authorId;
        cResult[2] = channelId;
        cResult[3] = embed;
        cResult[4] = messageId;
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
              tmp6 = closure_0;
              if (!flag2) {
                flag2 = closure_4;
              }
              tmp7 = closure_3;
              tmp8 = tmp2Result;
              tmp9 = tmp6;
              tmp10 = message;
              tmp11 = flag2;
              return tmp2Result.getObscureReasonForEmbed(tmp6, message, flag2, closure_3);
            }
          }
        }
        cResult[6] = sources;
        let tmp8 = _objectWithoutProperties(embed, isChannelSpoilerGated);
        let tmp5 = channelId;
        let tmp4 = authorId;
        const tmp12 = _objectWithoutProperties(embed, isChannelSpoilerGated);
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        _require = cResult[3];
        closure_1 = cResult[4];
        tmp8 = cResult[5];
        dependencyMap = cResult[6];
      }
      const obj = require("c");
      const enabledHarmTypesBitmaskForChannelAndAuthorId =
        require("useContentHarmTypes").useEnabledHarmTypesBitmaskForChannelAndAuthorId(tmp5, tmp4);
      if (cResult[7] !== tmp5) {
        const channel = ChannelStore.getChannel(tmp5);
        cResult[7] = tmp5;
        cResult[8] = channel;
        let tmp14 = channel;
      } else {
        tmp14 = cResult[8];
      }
      const tmpResult = require("useContentHarmTypes");
      isChannelSpoilerGated = require("SpoilerChannelUtils").useIsChannelSpoilerGated(tmp14);
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchMessageStore];
        cResult[9] = items;
        let tmp18 = items;
      } else {
        tmp18 = cResult[9];
      }
      if (cResult[10] === tmp6) {
        if (cResult[11] === enabledHarmTypesBitmaskForChannelAndAuthorId) {
          if (cResult[12] === isChannelSpoilerGated) {
            if (cResult[13] === tmp7) {
              if (cResult[14] === tmp9) {
                let tmp20 = cResult[15];
              }
              const stateFromStores = tmp(504).useStateFromStores(tmp18, tmp20);
              const thumbnail = tmp6.thumbnail;
              if (cResult[16] !== tmp6) {
                const embedMedia = tmp(7939).getEmbedMedia(tmp6);
                let embedUrl = null;
                if (null != embedMedia) {
                  embedUrl = tmp(7939).getEmbedUrl(embedMedia);
                  const tmpResult8 = tmp(7939);
                }
                cResult[16] = tmp6;
                cResult[17] = embedMedia;
                cResult[18] = embedUrl;
                let url = embedUrl;
                let size = embedMedia;
                const tmpResult7 = tmp(7939);
              } else {
                size = cResult[17];
                url = cResult[18];
              }
              if (null != thumbnail) {
                url = thumbnail.url;
              }
              if (null != thumbnail) {
                let height = thumbnail.height;
              } else if (size != null) {
                height = size.height;
              }
              if (null != thumbnail) {
                let width = thumbnail.width;
              } else if (size != null) {
                width = size.width;
              }
              if (cResult[19] === tmp5) {
                if (cResult[20] === height) {
                  if (cResult[21] === url) {
                    if (cResult[22] === width) {
                      if (cResult[23] === stateFromStores) {
                        if (cResult[24] === tmp8) {
                          let tmp25 = cResult[25];
                        }
                        return tmp25;
                      }
                    }
                  }
                }
              }
              const obj2 = {};
              const merged = Object.assign(tmp8);
              obj2.channelId = tmp5;
              obj2.obscureReason = stateFromStores;
              obj2.mediaUrl = url;
              obj2.mediaHeight = height;
              obj2.mediaWidth = width;
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
                    tmp6 = closure_0;
                    if (!flag2) {
                      flag2 = closure_4;
                    }
                    tmp7 = closure_3;
                    tmp8 = tmp2Result;
                    tmp9 = tmp6;
                    tmp10 = message;
                    tmp11 = flag2;
                    return tmp2Result.getObscureReasonForEmbed(tmp6, message, flag2, closure_3);
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
              const tmpResult6 = tmp(504);
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
            tmp6 = closure_0;
            if (!flag2) {
              flag2 = closure_4;
            }
            tmp7 = closure_3;
            tmp8 = tmp2Result;
            tmp9 = tmp6;
            tmp10 = message;
            tmp11 = flag2;
            return tmp2Result.getObscureReasonForEmbed(tmp6, message, flag2, closure_3);
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
      const tmpResult5 = require("SpoilerChannelUtils");
    }
  : (embed) => {
      embed = embed.embed;
      ({ sources: importDefault, messageId: dependencyMap, channelId } = embed);
      const merged = Object.assign(
        embed,
        Object.assign({ embed: 0, sources: 0, messageId: 0, channelId: 0, authorId: 0 }),
      );
      closure_3 = embed(11303).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, embed.authorId);
      const obj = embed(11303);
      const tmp2 = embed;
      closure_4 = embed(6832).useIsChannelSpoilerGated(ChannelStore.getChannel(channelId));
      const obj2 = embed(6832);
      const items = [SearchMessageStore];
      const thumbnail = embed.thumbnail;
      const stateFromStores = embed(504).useStateFromStores(items, () => {
        const message = SearchMessageStore.getMessage(dependencyMap);
        if (null == message) {
          return null;
        } else {
          const flattenSourceResult = MediaSourceUtil.flattenSource(importDefault, false);
          let flag2;
          if (flattenSourceResult != null) {
            flag2 = flattenSourceResult.spoiler;
          }
          if (flag2 == null) {
            flag2 = false;
          }
          const tmp2Result = MessageAttachmentUtils;
          if (!flag2) {
            flag2 = closure_4;
          }
          return tmp2Result.getObscureReasonForEmbed(embed, message, flag2, closure_3);
        }
      });
      const obj3 = embed(504);
      const size = embed(7939).getEmbedMedia(embed);
      let embedUrl = null;
      if (null != size) {
        embedUrl = tmp2(7939).getEmbedUrl(size);
        let tmp2Result = tmp2(7939);
      }
      if (null != thumbnail) {
        embedUrl = thumbnail.url;
      }
      if (null != thumbnail) {
        let height = thumbnail.height;
      } else if (size != null) {
        height = size.height;
      }
      if (null != thumbnail) {
        let width = thumbnail.width;
      } else if (size != null) {
        width = size.width;
      }
      const obj5 = {};
      const merged1 = Object.assign(merged);
      obj5.channelId = channelId;
      obj5.obscureReason = stateFromStores;
      obj5.mediaUrl = embedUrl;
      obj5.mediaHeight = height;
      obj5.mediaWidth = width;
      return closure_15(closure_20, obj5);
    };
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(10);
      ({ height, width, containerStyle } = arg0);
      const tmp4 = closure_18();
      if (cResult[0] === height) {
        if (cResult[1] === width) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === containerStyle) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === tmp4.sound) {
              let tmp6 = cResult[6];
            }
            const _Symbol = Symbol;
            if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp10 = closure_1_15(CirclePlayIcon.CirclePlayIcon, {
                size: "lg",
                color: "interactive-text-default",
              });
              cResult[7] = tmp10;
              let tmp8 = tmp10;
            } else {
              tmp8 = cResult[7];
            }
            if (cResult[8] !== tmp6) {
              const obj2 = { style: tmp6, children: tmp8 };
              const tmp14 = closure_1_15(closure_1_11, obj2);
              cResult[8] = tmp6;
              cResult[9] = tmp14;
              let tmp11 = tmp14;
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
      const size = { height, width };
      cResult[0] = height;
      cResult[1] = width;
      cResult[2] = size;
      tmp5 = size;
    }
  : (height) => {
      height = height.height;
      const width = height.width;
      const items = [height, width];
      const obj = { style: null, children: null };
      const items1 = [
        closure_18().sound,
        height.containerStyle,
        noop.useMemo(() => {
          const size = { height, width };
          return size;
        }, items),
      ];
      obj.style = items1;
      obj.children = closure_1_15(CirclePlayIcon.CirclePlayIcon, { size: "lg", color: "interactive-text-default" });
      return closure_1_15(closure_1_11, obj);
    };
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(12);
      ({ fileName, height, width, containerStyle } = arg0);
      const tmp4 = closure_18();
      if (cResult[0] === height) {
        if (cResult[1] === width) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === containerStyle) {
          if (cResult[4] === tmp5) {
            if (cResult[5] === tmp4.sound) {
              let tmp6 = cResult[6];
            }
            if (cResult[7] !== fileName) {
              const obj2 = { fileName };
              const tmp9 = closure_1_15(AttachmentPreview.AttachmentIcon, obj2);
              cResult[7] = fileName;
              cResult[8] = tmp9;
              let tmp7 = tmp9;
            } else {
              tmp7 = cResult[8];
            }
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp7) {
                let tmp10 = cResult[11];
              }
              return tmp10;
            }
            const obj3 = { style: tmp6, children: tmp7 };
            const tmp13 = closure_1_15(closure_1_11, obj3);
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
      const size = { height, width };
      cResult[0] = height;
      cResult[1] = width;
      cResult[2] = size;
      tmp5 = size;
    }
  : (height) => {
      height = height.height;
      const width = height.width;
      ({ fileName, containerStyle } = height);
      const items = [height, width];
      const obj = { style: null, children: null };
      const items1 = [
        closure_18().sound,
        containerStyle,
        noop.useMemo(() => {
          const size = { height, width };
          return size;
        }, items),
      ];
      obj.style = items1;
      obj.children = closure_1_15(AttachmentPreview.AttachmentIcon, { fileName });
      return closure_1_15(closure_1_11, obj);
    };
let size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/SearchMediaImage.tsx");

export const SearchAttachmentMediaImage = tmp4;
export const SearchEmbedMediaImage = tmp5;
export const SearchSoundMediaImage = tmp6;
export const SearchFileMediaImage = tmp7;
export const SearchComponentMediaImage = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(24);
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
        let size = unfurledMediaItem;
        let tmp8 = sources;
        let tmp7 = tmp11;
        let tmp6 = isBot;
        let tmp5 = channelId;
        let tmp4 = authorId;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        size = cResult[6];
      }
      const enabledHarmTypesBitmaskForChannelAndAuthorId =
        useContentHarmTypes.useEnabledHarmTypesBitmaskForChannelAndAuthorId(tmp5, tmp4);
      if (cResult[7] !== tmp5) {
        const channel = ChannelStore.getChannel(tmp5);
        cResult[7] = tmp5;
        cResult[8] = channel;
        let tmp13 = channel;
      } else {
        tmp13 = cResult[8];
      }
      const tmpResult = useContentHarmTypes;
      const isChannelSpoilerGated = SpoilerChannelUtils.useIsChannelSpoilerGated(tmp13);
      if (cResult[9] === isChannelSpoilerGated) {
        if (cResult[10] === tmp8) {
          let tmp17 = cResult[11];
        }
        if (cResult[12] === enabledHarmTypesBitmaskForChannelAndAuthorId) {
          if (cResult[13] === tmp6) {
            if (cResult[14] === tmp17) {
              if (cResult[15] === size) {
                let tmp21 = cResult[16];
              }
              if (cResult[17] === tmp5) {
                if (cResult[18] === tmp21) {
                  if (cResult[19] === tmp7) {
                    if (cResult[20] === size.height) {
                      if (cResult[21] === size.proxyUrl) {
                        if (cResult[22] === size.width) {
                          let tmp28 = cResult[23];
                        }
                        return tmp28;
                      }
                    }
                  }
                }
              }
              const obj2 = {};
              const merged = Object.assign(tmp7);
              obj2.channelId = tmp5;
              obj2.obscureReason = tmp21;
              ({ proxyUrl: obj6.mediaUrl, height: obj6.mediaHeight, width: obj6.mediaWidth } = size);
              const tmp34 = closure_1_15(closure_20, obj2);
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
        const obscureReasonForUnfurledMediaItem = tmpResult5.getObscureReasonForUnfurledMediaItem(
          size,
          enabledHarmTypesBitmaskForChannelAndAuthorId,
          tmp17,
          tmp6,
        );
        cResult[12] = enabledHarmTypesBitmaskForChannelAndAuthorId;
        cResult[13] = tmp6;
        cResult[14] = tmp17;
        cResult[15] = size;
        cResult[16] = obscureReasonForUnfurledMediaItem;
        tmp21 = obscureReasonForUnfurledMediaItem;
      }
      const tmpResult4 = SpoilerChannelUtils;
      const flattenSourceResult = MediaSourceUtil.flattenSource(tmp8);
      let spoiler;
      if (flattenSourceResult != null) {
        spoiler = flattenSourceResult.spoiler;
      }
      cResult[9] = isChannelSpoilerGated;
      cResult[10] = tmp8;
      cResult[11] = spoiler || isChannelSpoilerGated;
      tmp17 = tmp20;
      const tmpResult6 = MediaSourceUtil;
    }
  : (unfurledMediaItem) => {
      unfurledMediaItem = unfurledMediaItem.unfurledMediaItem;
      const sources = unfurledMediaItem.sources;
      ({ channelId, isBot } = unfurledMediaItem);
      const merged = Object.assign(
        unfurledMediaItem,
        Object.assign({ unfurledMediaItem: 0, sources: 0, channelId: 0, authorId: 0, isBot: 0 }),
      );
      const enabledHarmTypesBitmaskForChannelAndAuthorId = unfurledMediaItem(
        isBot[24],
      ).useEnabledHarmTypesBitmaskForChannelAndAuthorId(channelId, unfurledMediaItem.authorId);
      let obj = unfurledMediaItem(isBot[24]);
      const isChannelSpoilerGated = unfurledMediaItem(isBot[26]).useIsChannelSpoilerGated(
        ChannelStore.getChannel(channelId),
      );
      const items = [
        unfurledMediaItem,
        enabledHarmTypesBitmaskForChannelAndAuthorId,
        sources,
        isBot,
        isChannelSpoilerGated,
      ];
      const obj4 = {};
      const memo = noop.useMemo(() => {
        const obj = MessageAttachmentUtils;
        const flattenSourceResult = MediaSourceUtil.flattenSource(sources);
        let spoiler;
        if (flattenSourceResult != null) {
          spoiler = flattenSourceResult.spoiler;
        }
        return obj.getObscureReasonForUnfurledMediaItem(
          unfurledMediaItem,
          enabledHarmTypesBitmaskForChannelAndAuthorId,
          spoiler || isChannelSpoilerGated,
          isBot,
        );
      }, items);
      const merged1 = Object.assign(merged);
      obj4.channelId = channelId;
      obj4.obscureReason = memo;
      ({ proxyUrl: obj3.mediaUrl, height: obj3.mediaHeight, width: obj3.mediaWidth } = unfurledMediaItem);
      return closure_15(closure_20, obj4);
    };
