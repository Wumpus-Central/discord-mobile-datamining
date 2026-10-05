// === Module 12488: ChannelRowPreview ===

// Module 12488 (ChannelRowPreview)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import UserSettings from "UserSettings" /* 2028 */;
import useToken from "useToken" /* 4580 */;
import LinkIcon2 from "LinkIcon" /* 4839 */;
import Text_Text from "Text/Text" /* 4886 */;
import createStyles from "createStyles" /* 4890 */;
import useFontScale from "useFontScale" /* 5602 */;
import ImageIcon2 from "ImageIcon" /* 5871 */;
import PhoneCallIcon2 from "PhoneCallIcon" /* 7523 */;
import PhoneHangUpIcon2 from "PhoneHangUpIcon" /* 7525 */;
import RowGeneratorDefault from "RowGenerator" /* 7591 */;
import react_native2 from "react-native" /* 7595 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 7809 */;
import MusicIcon2 from "MusicIcon" /* 9571 */;
import AttachmentIcon2 from "AttachmentIcon" /* 10369 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10723 */;
import VideoIcon2 from "VideoIcon" /* 11234 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11695 */;
import ChannelListLayout from "ChannelListLayout" /* 11698 */;
import StickerIcon2 from "StickerIcon" /* 12190 */;
import useFormattedMessagePreview from "useFormattedMessagePreview" /* 12476 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, icon, importDefault, obj1, tmp2, tmp3;

let c9;
let metroImportAll;
let closure_3 = ["icon"];
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((icon) => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(19);
  if (cResult[0] !== icon) {
    icon = icon.icon;
    const tmp8 = _objectWithoutProperties(icon, closure_3);
    cResult[0] = icon;
    cResult[1] = icon;
    cResult[2] = tmp8;
    tmp5 = tmp8;
    tmp4 = icon;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if ("image" === tmp4) {
    let tmp51;
    if (cResult[3] !== tmp5) {
      const obj2 = {};
      const ImageIcon = ImageIcon2.ImageIcon;
      const merged = Object.assign(tmp5);
      const tmp56 = metroImportAll(ImageIcon, obj2);
      cResult[3] = tmp5;
      cResult[4] = tmp56;
      tmp51 = tmp56;
    } else {
      tmp51 = cResult[4];
    }
    return tmp51;
  } else if ("video" === tmp4) {
    let tmp45;
    if (cResult[5] !== tmp5) {
      const obj3 = {};
      const VideoIcon = VideoIcon2.VideoIcon;
      const merged1 = Object.assign(tmp5);
      const tmp50 = metroImportAll(VideoIcon, obj3);
      cResult[5] = tmp5;
      cResult[6] = tmp50;
      tmp45 = tmp50;
    } else {
      tmp45 = cResult[6];
    }
    return tmp45;
  } else if ("audio" === tmp4) {
    let tmp39;
    if (cResult[7] !== tmp5) {
      const obj4 = {};
      const MusicIcon = MusicIcon2.MusicIcon;
      const merged2 = Object.assign(tmp5);
      const tmp44 = metroImportAll(MusicIcon, obj4);
      cResult[7] = tmp5;
      cResult[8] = tmp44;
      tmp39 = tmp44;
    } else {
      tmp39 = cResult[8];
    }
    return tmp39;
  } else if ("attachment" === tmp4) {
    let tmp33;
    if (cResult[9] !== tmp5) {
      const obj5 = {};
      const AttachmentIcon = AttachmentIcon2.AttachmentIcon;
      const merged3 = Object.assign(tmp5);
      const tmp38 = metroImportAll(AttachmentIcon, obj5);
      cResult[9] = tmp5;
      cResult[10] = tmp38;
      tmp33 = tmp38;
    } else {
      tmp33 = cResult[10];
    }
    return tmp33;
  } else if ("link" === tmp4) {
    let tmp27;
    if (cResult[11] !== tmp5) {
      const obj6 = {};
      const LinkIcon = LinkIcon2.LinkIcon;
      const merged4 = Object.assign(tmp5);
      const tmp32 = metroImportAll(LinkIcon, obj6);
      cResult[11] = tmp5;
      cResult[12] = tmp32;
      tmp27 = tmp32;
    } else {
      tmp27 = cResult[12];
    }
    return tmp27;
  } else if ("sticker" === tmp4) {
    let tmp21;
    if (cResult[13] !== tmp5) {
      const obj7 = {};
      const StickerIcon = StickerIcon2.StickerIcon;
      const merged5 = Object.assign(tmp5);
      const tmp26 = metroImportAll(StickerIcon, obj7);
      cResult[13] = tmp5;
      cResult[14] = tmp26;
      tmp21 = tmp26;
    } else {
      tmp21 = cResult[14];
    }
    return tmp21;
  } else if ("call-active" === tmp4) {
    let tmp15;
    if (cResult[15] !== tmp5) {
      const obj8 = {};
      const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
      const merged6 = Object.assign(tmp5);
      const tmp20 = metroImportAll(PhoneCallIcon, obj8);
      cResult[15] = tmp5;
      cResult[16] = tmp20;
      tmp15 = tmp20;
    } else {
      tmp15 = cResult[16];
    }
    return tmp15;
  } else if ("call-ended" === tmp4) {
    let tmp9;
    if (cResult[17] !== tmp5) {
      const obj9 = {};
      const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
      const merged7 = Object.assign(tmp5);
      const tmp14 = metroImportAll(PhoneHangUpIcon, obj9);
      cResult[17] = tmp5;
      cResult[18] = tmp14;
      tmp9 = tmp14;
    } else {
      tmp9 = cResult[18];
    }
    return tmp9;
  }
}) : ((icon) => {
  icon = icon.icon;
  const merged = Object.assign(icon, Object.assign({ icon: 0 }));
  if ("image" === icon) {
    const obj2 = {};
    const ImageIcon = ImageIcon2.ImageIcon;
    const merged1 = Object.assign(merged);
    return metroImportAll(ImageIcon, obj2);
  } else if ("video" === icon) {
    const obj3 = {};
    const VideoIcon = VideoIcon2.VideoIcon;
    const merged2 = Object.assign(merged);
    return metroImportAll(VideoIcon, obj3);
  } else if ("audio" === icon) {
    const obj4 = {};
    const MusicIcon = MusicIcon2.MusicIcon;
    const merged3 = Object.assign(merged);
    return metroImportAll(MusicIcon, obj4);
  } else if ("attachment" === icon) {
    const obj5 = {};
    const AttachmentIcon = AttachmentIcon2.AttachmentIcon;
    const merged4 = Object.assign(merged);
    return metroImportAll(AttachmentIcon, obj5);
  } else if ("link" === icon) {
    const obj6 = {};
    const LinkIcon = LinkIcon2.LinkIcon;
    const merged5 = Object.assign(merged);
    return metroImportAll(LinkIcon, obj6);
  } else if ("sticker" === icon) {
    const obj7 = {};
    const StickerIcon = StickerIcon2.StickerIcon;
    const merged6 = Object.assign(merged);
    return metroImportAll(StickerIcon, obj7);
  } else if ("call-active" === icon) {
    const obj8 = {};
    const PhoneCallIcon = PhoneCallIcon2.PhoneCallIcon;
    const merged7 = Object.assign(merged);
    return metroImportAll(PhoneCallIcon, obj8);
  } else if ("call-ended" === icon) {
    const obj = {};
    const PhoneHangUpIcon = PhoneHangUpIcon2.PhoneHangUpIcon;
    const merged8 = Object.assign(merged);
    return metroImportAll(PhoneHangUpIcon, obj);
  }
});
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channelId;
  let color;
  let guildId;
  let layout;
  let markup;
  let muted;
  const obj = react2;
  const cResult = obj.c(8);
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  if (cResult[0] === channelId) {
    if (cResult[1] === color) {
      if (cResult[2] === fontScale) {
        if (cResult[3] === guildId) {
          if (cResult[4] === layout) {
            if (cResult[5] === markup) {
              let tmp5;
              if (cResult[6] === muted) {
                tmp5 = cResult[7];
              }
              return tmp5;
            }
          }
        }
      }
    }
  }
  const tmpResult = MessagePreviewMarkup;
  const result = tmpResult.renderMessagePreviewMarkup({ content: markup, muted, guildId, channelId, layout, color, fontScale });
  cResult[0] = channelId;
  cResult[1] = color;
  cResult[2] = fontScale;
  cResult[3] = guildId;
  cResult[4] = layout;
  cResult[5] = markup;
  cResult[6] = muted;
  cResult[7] = result;
  tmp5 = result;
}) : ((arg0) => {
  let channelId;
  let color;
  let guildId;
  let layout;
  let markup;
  let muted;
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = MessagePreviewMarkup;
  return obj2.renderMessagePreviewMarkup({ content, muted, guildId, channelId, layout, color, fontScale });
}));
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let authorLabel;
  let channel;
  let color;
  let items;
  let items1;
  let layout;
  let lineClamp;
  let message;
  let muted;
  let trailingIcon;
  let variant;
  const obj = react2;
  const cResult = obj.c(28);
  ({ message, channel, layout, lineClamp, muted, variant, color } = arg0);
  let num = 1;
  if (undefined !== lineClamp) {
    num = lineClamp;
  }
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  const tmpResult4 = useFormattedMessagePreview;
  const formattedMessagePreview = tmpResult4.useFormattedMessagePreview(message, channel);
  if (cResult[0] === fontScale) {
    let tmp6;
    let tmp7;
    if (cResult[1] === layout) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    if (null == formattedMessagePreview) {
      return null;
    } else {
      let text;
      let tmp15;
      let tmp17;
      ({ authorLabel, trailingIcon } = formattedMessagePreview);
      if (color == null) {
        color = formattedMessagePreview.color;
      }
      const type = formattedMessagePreview.type;
      if ("text" === type) {
        text = formattedMessagePreview.text;
      } else if ("markup" === type) {
        let content;
        if ("markup" === formattedMessagePreview.type) {
          content = formattedMessagePreview.markup;
        } else {
          content = formattedMessagePreview.message.content;
        }
        if (cResult[4] === channel.guild_id) {
          if (cResult[5] === layout) {
            if (cResult[6] === message.channel_id) {
              if (cResult[7] === muted) {
                if (cResult[8] === color) {
                  let tmp11;
                  if (cResult[9] === content) {
                    tmp11 = cResult[10];
                  }
                  text = tmp11;
                }
              }
            }
          }
        }
        const obj2 = { markup: content, channelId: message.channel_id, guildId: channel.guild_id, muted, layout, color };
        const tmp14 = metroImportAll(closure_11, obj2);
        cResult[4] = channel.guild_id;
        cResult[5] = layout;
        cResult[6] = message.channel_id;
        cResult[7] = muted;
        cResult[8] = color;
        cResult[9] = content;
        cResult[10] = tmp14;
        tmp11 = tmp14;
      }
      if (cResult[11] !== tmp7) {
        const obj3 = { flexDirection: "row", alignItems: "center", minHeight: tmp7 };
        cResult[11] = tmp7;
        cResult[12] = obj3;
        tmp15 = obj3;
      } else {
        tmp15 = cResult[12];
      }
      if (variant == null) {
        variant = "text-sm/normal";
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { paddingBottom: 2, flexShrink: 1 };
        cResult[13] = obj4;
        tmp17 = obj4;
      } else {
        tmp17 = cResult[13];
      }
      let combined = null != authorLabel;
      if (combined) {
        const _HermesInternal = HermesInternal;
        combined = "" + authorLabel + ": ";
      }
      if (cResult[14] === num) {
        if (cResult[15] === color) {
          if (cResult[16] === text) {
            if (cResult[17] === variant) {
              let tmp19;
              if (cResult[18] === combined) {
                tmp19 = cResult[19];
              }
              if (cResult[20] === tmp6) {
                if (cResult[21] === color) {
                  let tmp22;
                  if (cResult[22] === trailingIcon) {
                    tmp22 = cResult[23];
                  }
                  if (cResult[24] === tmp15) {
                    if (cResult[25] === tmp19) {
                      let tmp26;
                      if (cResult[26] === tmp22) {
                        tmp26 = cResult[27];
                      }
                      return tmp26;
                    }
                  }
                  const obj5 = { style: tmp15, children: items };
                  items = [tmp19, tmp22];
                  const tmp29 = React4(View, obj5);
                  cResult[24] = tmp15;
                  cResult[25] = tmp19;
                  cResult[26] = tmp22;
                  cResult[27] = tmp29;
                  tmp26 = tmp29;
                }
              }
              let tmp23 = null != trailingIcon;
              if (tmp23) {
                const obj6 = { icon: trailingIcon, size: tmp6.messagePreview.messageTypeIconSizeNew, color, style: { marginLeft: 4 } };
                tmp23 = metroImportAll(closure_10, obj6);
              }
              cResult[20] = tmp6;
              cResult[21] = color;
              cResult[22] = trailingIcon;
              cResult[23] = tmp23;
              tmp22 = tmp23;
            }
          }
        }
      }
      const obj7 = { lineClamp: num, variant, maxFontSizeMultiplier: 1.75, color, style: tmp17, children: items1 };
      items1 = [combined, text];
      const tmp21 = React4(Text_Text.Text, obj7);
      cResult[14] = num;
      cResult[15] = color;
      cResult[16] = text;
      cResult[17] = variant;
      cResult[18] = combined;
      cResult[19] = tmp21;
      tmp19 = tmp21;
    }
  }
  const tmpResult5 = ChannelListLayout;
  const layoutStyles = tmpResult5.getLayoutStyles(layout);
  const tmpResult6 = useScaledTextLineHeight;
  const scaleTextLineHeightResult = tmpResult6.scaleTextLineHeight(layoutStyles.messagePreview.text.variant, fontScale);
  cResult[0] = fontScale;
  cResult[1] = layout;
  cResult[2] = layoutStyles;
  cResult[3] = scaleTextLineHeightResult;
  tmp7 = scaleTextLineHeightResult;
  tmp6 = layoutStyles;
}) : ((arg0) => {
  let authorLabel;
  let channel;
  let color;
  let items;
  let items1;
  let layout;
  let lineClamp;
  let message;
  let muted;
  let obj6;
  let trailingIcon;
  let variant;
  ({ message, channel, layout, lineClamp } = arg0);
  if (lineClamp === undefined) {
    lineClamp = 1;
  }
  ({ variant, color, muted } = arg0);
  const obj = useFontScale;
  const fontScale = obj.useFontScale();
  const obj2 = useFormattedMessagePreview;
  const formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
  const obj3 = ChannelListLayout;
  const layoutStyles = obj3.getLayoutStyles(layout);
  useScaledTextLineHeight;
  if (null == formattedMessagePreview) {
    return null;
  } else {
    let text;
    ({ authorLabel, trailingIcon } = formattedMessagePreview);
    if (color == null) {
      color = formattedMessagePreview.color;
    }
    const type = formattedMessagePreview.type;
    if ("text" === type) {
      text = formattedMessagePreview.text;
    } else if ("markup" === type) {
      let content;
      if ("markup" === formattedMessagePreview.type) {
        content = formattedMessagePreview.markup;
      } else {
        content = formattedMessagePreview.message.content;
      }
      const obj4 = { markup: content, channelId: message.channel_id, guildId: channel.guild_id, muted, layout, color };
      text = metroImportAll(closure_11, obj4);
    }
    const obj5 = { style: obj6, children: items1 };
    obj6 = { flexDirection: "row", alignItems: "center", minHeight: tmp7 };
    const obj7 = { lineClamp, variant, maxFontSizeMultiplier: 1.75, color, style: { paddingBottom: 2, flexShrink: 1 }, children: items };
    const Text = Text_Text.Text;
    if (variant == null) {
      variant = "text-sm/normal";
    }
    let combined = null != authorLabel;
    if (combined) {
      const _HermesInternal = HermesInternal;
      combined = "" + authorLabel + ": ";
    }
    items = [combined, text];
    items1 = [React4(Text, obj7), ];
    let tmp14 = null != trailingIcon;
    if (tmp14) {
      const obj8 = { icon: trailingIcon, size: layoutStyles.messagePreview.messageTypeIconSizeNew, color, style: { marginLeft: 4 } };
      tmp14 = metroImportAll(closure_10, obj8);
    }
    items1[1] = tmp14;
    return React4(View, obj5);
  }
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function(textColor) {
  let gifAutoPlay;
  let gradientColors;
  let gradientStyles;
  let lineClamp;
  let maxHeight;
  let message;
  let messageSizeCacheRef;
  let seeMoreLabelColor;
  let tmp7;
  let token;
  let obj = lineClamp(token[6]);
  const cResult = obj.c(19);
  ({ message, lineClamp } = textColor);
  ({ messageSizeCacheRef, maxHeight, gifAutoPlay, gradientStyles, gradientColors } = textColor);
  let tmp4 = undefined !== gifAutoPlay;
  textColor = textColor.textColor;
  if (tmp4) {
    tmp4 = gifAutoPlay;
  }
  const tmp6 = require("useTheme")();
  if (cResult[0] !== tmp6) {
    const obj2 = { seeMoreLabelColor: require("native").colors.TEXT_DEFAULT };
    const createNativeStyleProperties = lineClamp(token[22]).createNativeStyleProperties;
    lineClamp(token[22]);
    const tmp9 = createNativeStyleProperties(obj2)(tmp6);
    cResult[0] = tmp6;
    cResult[1] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  importDefault = tmp7;
  const tmpResult2 = lineClamp(token[24]);
  token = tmpResult2.useToken(textColor);
  if (cResult[2] === token) {
    if (cResult[3] === lineClamp) {
      let tmp11;
      let tmp13;
      let tmp15;
      let tmp17;
      let tmp19;
      if (cResult[4] === tmp7) {
        tmp11 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const RenderEmbeds = lineClamp(tmp2[27]).RenderEmbeds;
        const setting = RenderEmbeds.getSetting();
        cResult[6] = setting;
        tmp13 = setting;
      } else {
        tmp13 = cResult[6];
      }
      const _Symbol2 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const InlineEmbedMedia = lineClamp(tmp2[27]).InlineEmbedMedia;
        const setting1 = InlineEmbedMedia.getSetting();
        cResult[7] = setting1;
        tmp15 = setting1;
      } else {
        tmp15 = cResult[7];
      }
      const _Symbol3 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const InlineAttachmentMedia = lineClamp(tmp2[27]).InlineAttachmentMedia;
        const setting2 = InlineAttachmentMedia.getSetting();
        cResult[8] = setting2;
        tmp17 = setting2;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] !== tmp4) {
        const self = this;
        const self2 = this;
        const obj4 = new require("RowGenerator")();
        const obj3 = { renderEmbeds: tmp13, inlineEmbedMedia: tmp15, inlineAttachmentMedia: tmp17, renderReactions: false, animateEmoji: false, gifAutoPlay: tmp4, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
        obj4.setOptions(obj3);
        cResult[9] = tmp4;
        cResult[10] = obj4;
        tmp19 = obj4;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === gradientColors) {
        if (cResult[12] === gradientStyles) {
          if (cResult[13] === maxHeight) {
            if (cResult[14] === message) {
              if (cResult[15] === messageSizeCacheRef) {
                if (cResult[16] === tmp11) {
                  let tmp22;
                  if (cResult[17] === tmp19) {
                    tmp22 = cResult[18];
                  }
                  return tmp22;
                }
              }
            }
          }
        }
      }
      const obj5 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: tmp11, message, rowGenerator: tmp19, messageSizeCacheRef, maxHeight, gradientStyles, gradientColors };
      const tmp24 = closure_8(require("ChatItem"), obj5);
      cResult[11] = gradientColors;
      class I {
        constructor(arg0) {
          processColorOrThrowResult = undefined;
          tmp2 = closure_0;
          tmp3 = closure_2;
          textColor.contextType = closure_0(closure_2[25]).MessageContextType.SEARCH;
          if (null != closure_2) {
            try {
              tmp2Result = tmp2(tmp3[26]);
              processColorOrThrowResult = tmp2Result.processColorOrThrow(tmp4);
            } catch (err) {
            }
          }
          if (null != processColorOrThrowResult) {
            tmp5 = processColorOrThrowResult;
            textColor.message.textColor = processColorOrThrowResult;
          }
          if (null != lineClamp) {
            obj1 = { numberOfLines: null, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: null };
            obj1.numberOfLines = tmp6;
            if (processColorOrThrowResult == null) {
              tmp7 = closure_1;
              processColorOrThrowResult = closure_1.seeMoreLabelColor;
            }
            obj1.seeMoreLabelColor = processColorOrThrowResult;
            textColor.truncation = obj1;
          }
          return;
        }
      }
      cResult[12] = gradientStyles;
      cResult[13] = maxHeight;
      cResult[14] = message;
      cResult[15] = messageSizeCacheRef;
      cResult[16] = tmp11;
      cResult[17] = tmp19;
      cResult[18] = tmp24;
      tmp22 = tmp24;
    }
  }
  class I {
    constructor(arg0) {
      processColorOrThrowResult = undefined;
      tmp2 = closure_0;
      tmp3 = closure_2;
      textColor.contextType = closure_0(closure_2[25]).MessageContextType.SEARCH;
      if (null != closure_2) {
        try {
          tmp2Result = tmp2(tmp3[26]);
          processColorOrThrowResult = tmp2Result.processColorOrThrow(tmp4);
        } catch (err) {
        }
      }
      if (null != processColorOrThrowResult) {
        tmp5 = processColorOrThrowResult;
        textColor.message.textColor = processColorOrThrowResult;
      }
      if (null != lineClamp) {
        obj1 = { numberOfLines: null, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: null };
        obj1.numberOfLines = tmp6;
        if (processColorOrThrowResult == null) {
          tmp7 = closure_1;
          processColorOrThrowResult = closure_1.seeMoreLabelColor;
        }
        obj1.seeMoreLabelColor = processColorOrThrowResult;
        textColor.truncation = obj1;
      }
      return;
    }
  }
  cResult[2] = token;
  cResult[3] = lineClamp;
  cResult[4] = tmp7;
  cResult[5] = I;
  tmp11 = I;
}) : ((arg0) => {
  let gifAutoPlay;
  let gradientColors;
  let gradientStyles;
  let maxHeight;
  let message;
  let messageSizeCacheRef;
  let require;
  let seeMoreLabelColor;
  let textColor;
  ({ lineClamp: require, gifAutoPlay } = arg0);
  ({ message, messageSizeCacheRef, maxHeight } = arg0);
  if (gifAutoPlay === undefined) {
    gifAutoPlay = false;
  }
  ({ textColor, gradientStyles, gradientColors } = arg0);
  const tmp = gifAutoPlay(4791)();
  let obj = createStyles;
  let obj2 = { seeMoreLabelColor: gifAutoPlay(587).colors.TEXT_DEFAULT };
  dependencyMap = obj.createNativeStyleProperties(obj2)(tmp);
  const obj3 = useToken;
  closure_3 = obj3.useToken(textColor);
  const RenderEmbeds = UserSettings.RenderEmbeds;
  const setting = RenderEmbeds.getSetting();
  const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
  const setting1 = InlineEmbedMedia.getSetting();
  const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
  const setting2 = InlineAttachmentMedia.getSetting();
  const items = [setting, setting1, setting2, gifAutoPlay];
  const memo = setting1.useMemo(() => {
    const obj = new RowGeneratorDefault();
    const obj2 = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
    obj.setOptions(obj2);
    return obj;
  }, items);
  const obj4 = {
    pointerEvents: "none",
    horizontalOffset: 0,
    modifyRow(message) {
      let processColorOrThrowResult;
      message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
      if (null != closure_3) {
        try {
          const tmp2Result = react_native2;
          processColorOrThrowResult = tmp2Result.processColorOrThrow(tmp4);
        } catch (err) {
        }
      }
      if (null != processColorOrThrowResult) {
        message.message.textColor = processColorOrThrowResult;
      }
      if (null != _require) {
        const obj = { numberOfLines: tmp6, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: processColorOrThrowResult };
        if (processColorOrThrowResult == null) {
          processColorOrThrowResult = seeMoreLabelColor.seeMoreLabelColor;
        }
        message.truncation = obj;
      }
    },
    message,
    rowGenerator: memo,
    messageSizeCacheRef,
    maxHeight,
    gradientStyles,
    gradientColors
  };
  return closure_8(gifAutoPlay(8303), obj4);
});
let closure_13 = tmp5;
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let first;
  let tmp16;
  let tmp6;
  let tmp7;
  _require = message;
  const obj = require("react");
  const cResult = obj.c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== message.message.author.id) {
    const fn = function o() {
      return RelationshipStore.isBlockedOrIgnored(message.message.author.id);
    };
    const items1 = [message.message.author.id];
    cResult[1] = message.message.author.id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult2 = require("useFormattedMessagePreview");
  if (tmpResult2.isMessageContentPreviewable(message.message)) {
    let tmp9;
    if (!stateFromStores) {
      if (cResult[4] !== message) {
        const obj2 = {};
        const merged = Object.assign(message);
        const tmp15 = closure_8(closure_13, obj2);
        cResult[4] = message;
        cResult[5] = tmp15;
        tmp9 = tmp15;
      } else {
        tmp9 = cResult[5];
      }
    }
    return tmp9;
  }
  if (cResult[6] !== message) {
    const obj3 = {};
    const merged1 = Object.assign(message);
    const tmp22 = closure_8(closure_12, obj3);
    cResult[6] = message;
    cResult[7] = tmp22;
    tmp16 = tmp22;
  } else {
    tmp16 = cResult[7];
  }
  tmp9 = tmp16;
}) : ((message) => {
  _require = message;
  const items = [RelationshipStore];
  const items1 = [message.message.author.id];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(message.message.author.id), items1);
  const obj2 = require("useFormattedMessagePreview");
  if (obj2.isMessageContentPreviewable(message.message)) {
    let tmp7;
    if (!stateFromStores) {
      const obj3 = {};
      const merged = Object.assign(message);
      tmp7 = closure_8(closure_13, obj3);
    }
    return tmp7;
  }
  const obj4 = {};
  const merged1 = Object.assign(message);
  tmp7 = closure_8(closure_12, obj4);
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export const ChannelRowPreview = tmp4;
export const NativeChannelRowPreview = tmp5;
export const NativeMessageChannelRowPreview = memo2Result;