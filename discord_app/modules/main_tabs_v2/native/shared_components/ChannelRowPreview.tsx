// discord_app/modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx
import c from "../../../../../_runtime/00576_c.js";
import UserSettings from "../../../user_settings/UserSettings.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import LinkIcon from "../../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import useFontScale from "../../../screen/native/useFontScale.tsx";
import ImageIcon from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import PhoneCallIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneCallIcon.tsx";
import PhoneHangUpIcon from "../../../../design/components/Icon/native/redesign/generated/PhoneHangUpIcon.tsx";
import RowGeneratorDefault from "../../../messages/native/renderer/RowGenerator.tsx";
import RowGeneratorStyleSheet from "../../../messages/native/renderer/RowGeneratorStyleSheet.tsx";
import RowGeneratorTypes from "../../../messages/native/renderer/RowGeneratorTypes.tsx";
import MusicIcon from "../../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import AttachmentIcon from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import useScaledTextLineHeight from "../../../screen/native/useScaledTextLineHeight.android.tsx";
import VideoIcon from "../../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import MessagePreviewMarkup from "../../../message_previews/native/MessagePreviewMarkup.tsx";
import ChannelListLayout from "guild_channels/layouts/ChannelListLayout.tsx";
import StickerIcon from "../../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import useFormattedMessagePreview from "../../../message_previews/useFormattedMessagePreview.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_3 = ["icon"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (icon) => {
      const cResult = c.c(19);
      if (cResult[0] !== icon) {
        icon = icon.icon;
        const tmp8 = _objectWithoutProperties(icon, closure_3);
        cResult[0] = icon;
        cResult[1] = icon;
        cResult[2] = tmp8;
        let tmp5 = tmp8;
        let tmp4 = icon;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if ("image" === tmp4) {
        if (cResult[3] !== tmp5) {
          const obj2 = {};
          const merged = Object.assign(tmp5);
          const tmp56 = closure_1_8(ImageIcon.ImageIcon, obj2);
          cResult[3] = tmp5;
          cResult[4] = tmp56;
          let tmp51 = tmp56;
        } else {
          tmp51 = cResult[4];
        }
        return tmp51;
      } else if ("video" === tmp4) {
        if (cResult[5] !== tmp5) {
          const obj3 = {};
          const merged1 = Object.assign(tmp5);
          const tmp50 = closure_1_8(VideoIcon.VideoIcon, obj3);
          cResult[5] = tmp5;
          cResult[6] = tmp50;
          let tmp45 = tmp50;
        } else {
          tmp45 = cResult[6];
        }
        return tmp45;
      } else if ("audio" === tmp4) {
        if (cResult[7] !== tmp5) {
          const obj4 = {};
          const merged2 = Object.assign(tmp5);
          const tmp44 = closure_1_8(MusicIcon.MusicIcon, obj4);
          cResult[7] = tmp5;
          cResult[8] = tmp44;
          let tmp39 = tmp44;
        } else {
          tmp39 = cResult[8];
        }
        return tmp39;
      } else if ("attachment" === tmp4) {
        if (cResult[9] !== tmp5) {
          const obj5 = {};
          const merged3 = Object.assign(tmp5);
          const tmp38 = closure_1_8(AttachmentIcon.AttachmentIcon, obj5);
          cResult[9] = tmp5;
          cResult[10] = tmp38;
          let tmp33 = tmp38;
        } else {
          tmp33 = cResult[10];
        }
        return tmp33;
      } else if ("link" === tmp4) {
        if (cResult[11] !== tmp5) {
          const obj6 = {};
          const merged4 = Object.assign(tmp5);
          const tmp32 = closure_1_8(LinkIcon.LinkIcon, obj6);
          cResult[11] = tmp5;
          cResult[12] = tmp32;
          let tmp27 = tmp32;
        } else {
          tmp27 = cResult[12];
        }
        return tmp27;
      } else if ("sticker" === tmp4) {
        if (cResult[13] !== tmp5) {
          const obj7 = {};
          const merged5 = Object.assign(tmp5);
          const tmp26 = closure_1_8(StickerIcon.StickerIcon, obj7);
          cResult[13] = tmp5;
          cResult[14] = tmp26;
          let tmp21 = tmp26;
        } else {
          tmp21 = cResult[14];
        }
        return tmp21;
      } else if ("call-active" === tmp4) {
        if (cResult[15] !== tmp5) {
          const obj8 = {};
          const merged6 = Object.assign(tmp5);
          const tmp20 = closure_1_8(PhoneCallIcon.PhoneCallIcon, obj8);
          cResult[15] = tmp5;
          cResult[16] = tmp20;
          let tmp15 = tmp20;
        } else {
          tmp15 = cResult[16];
        }
        return tmp15;
      } else if ("call-ended" === tmp4) {
        if (cResult[17] !== tmp5) {
          const obj9 = {};
          const merged7 = Object.assign(tmp5);
          const tmp14 = closure_1_8(PhoneHangUpIcon.PhoneHangUpIcon, obj9);
          cResult[17] = tmp5;
          cResult[18] = tmp14;
          let tmp9 = tmp14;
        } else {
          tmp9 = cResult[18];
        }
        return tmp9;
      }
    }
  : (icon) => {
      icon = icon.icon;
      const merged = Object.assign(icon, Object.assign({ icon: 0 }));
      if ("image" === icon) {
        const obj2 = {};
        const merged1 = Object.assign(merged);
        return closure_1_8(ImageIcon.ImageIcon, obj2);
      } else if ("video" === icon) {
        const obj3 = {};
        const merged2 = Object.assign(merged);
        return closure_1_8(VideoIcon.VideoIcon, obj3);
      } else if ("audio" === icon) {
        const obj4 = {};
        const merged3 = Object.assign(merged);
        return closure_1_8(MusicIcon.MusicIcon, obj4);
      } else if ("attachment" === icon) {
        const obj5 = {};
        const merged4 = Object.assign(merged);
        return closure_1_8(AttachmentIcon.AttachmentIcon, obj5);
      } else if ("link" === icon) {
        const obj6 = {};
        const merged5 = Object.assign(merged);
        return closure_1_8(LinkIcon.LinkIcon, obj6);
      } else if ("sticker" === icon) {
        const obj7 = {};
        const merged6 = Object.assign(merged);
        return closure_1_8(StickerIcon.StickerIcon, obj7);
      } else if ("call-active" === icon) {
        const obj8 = {};
        const merged7 = Object.assign(merged);
        return closure_1_8(PhoneCallIcon.PhoneCallIcon, obj8);
      } else if ("call-ended" === icon) {
        const obj = {};
        const merged8 = Object.assign(merged);
        return closure_1_8(PhoneHangUpIcon.PhoneHangUpIcon, obj);
      }
    };
ReactCompilerGating = fn(558);
let closure_11 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(8);
        ({ markup, channelId, guildId, muted, layout, color } = arg0);
        const fontScale = useFontScale.useFontScale();
        if (cResult[0] === channelId) {
          if (cResult[1] === color) {
            if (cResult[2] === fontScale) {
              if (cResult[3] === guildId) {
                if (cResult[4] === layout) {
                  if (cResult[5] === markup) {
                    if (cResult[6] === muted) {
                      let tmp5 = cResult[7];
                    }
                    return tmp5;
                  }
                }
              }
            }
          }
        }
        const result = MessagePreviewMarkup.renderMessagePreviewMarkup({
          content: markup,
          muted,
          guildId,
          channelId,
          layout,
          color,
          fontScale,
        });
        cResult[0] = channelId;
        cResult[1] = color;
        cResult[2] = fontScale;
        cResult[3] = guildId;
        cResult[4] = layout;
        cResult[5] = markup;
        cResult[6] = muted;
        cResult[7] = result;
        tmp5 = result;
        const tmpResult = MessagePreviewMarkup;
      }
    : (arg0) => {
        ({ markup, channelId, guildId, muted, layout, color } = arg0);
        const fontScale = useFontScale.useFontScale();
        return MessagePreviewMarkup.renderMessagePreviewMarkup({
          content,
          muted,
          guildId,
          channelId,
          layout,
          color,
          fontScale,
        });
      },
);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(28);
      ({ message, channel, layout, lineClamp, muted, variant, color } = arg0);
      let num = 1;
      if (undefined !== lineClamp) {
        num = lineClamp;
      }
      const fontScale = useFontScale.useFontScale();
      const tmpResult = useFontScale;
      const formattedMessagePreview = useFormattedMessagePreview.useFormattedMessagePreview(message, channel);
      if (cResult[0] === fontScale) {
        if (cResult[1] === layout) {
          let tmp6 = cResult[2];
          let tmp7 = cResult[3];
        }
        if (null == formattedMessagePreview) {
          return null;
        } else {
          ({ authorLabel, trailingIcon } = formattedMessagePreview);
          if (color == null) {
            color = formattedMessagePreview.color;
          }
          const type = formattedMessagePreview.type;
          if ("text" === type) {
            let text = formattedMessagePreview.text;
          } else if ("markup" === type) {
            if ("markup" === formattedMessagePreview.type) {
              let content = formattedMessagePreview.markup;
            } else {
              content = formattedMessagePreview.message.content;
            }
            if (cResult[4] === channel.guild_id) {
              if (cResult[5] === layout) {
                if (cResult[6] === message.channel_id) {
                  if (cResult[7] === muted) {
                    if (cResult[8] === color) {
                      if (cResult[9] === content) {
                        let tmp11 = cResult[10];
                      }
                      text = tmp11;
                    }
                  }
                }
              }
            }
            const obj2 = {
              markup: content,
              channelId: message.channel_id,
              guildId: channel.guild_id,
              muted,
              layout,
              color,
            };
            const tmp14 = closure_1_8(closure_11, obj2);
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
            let tmp15 = obj3;
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
            let tmp17 = obj4;
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
                  if (cResult[18] === combined) {
                    let tmp19 = cResult[19];
                  }
                  if (cResult[20] === tmp6) {
                    if (cResult[21] === color) {
                      if (cResult[22] === trailingIcon) {
                        let tmp22 = cResult[23];
                      }
                      if (cResult[24] === tmp15) {
                        if (cResult[25] === tmp19) {
                          if (cResult[26] === tmp22) {
                            let tmp26 = cResult[27];
                          }
                          return tmp26;
                        }
                      }
                      const obj5 = { style: tmp15, children: null };
                      const items = [tmp19, tmp22];
                      obj5.children = items;
                      const tmp29 = options(View, obj5);
                      cResult[24] = tmp15;
                      cResult[25] = tmp19;
                      cResult[26] = tmp22;
                      cResult[27] = tmp29;
                      tmp26 = tmp29;
                    }
                  }
                  let tmp23 = null != trailingIcon;
                  if (tmp23) {
                    const obj6 = {
                      icon: trailingIcon,
                      size: tmp6.messagePreview.messageTypeIconSizeNew,
                      color,
                      style: { marginLeft: 4 },
                    };
                    tmp23 = closure_1_8(closure_10, obj6);
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
          const obj7 = { lineClamp: num, variant, maxFontSizeMultiplier: 1.75, color, style: tmp17, children: null };
          const items1 = [combined, text];
          obj7.children = items1;
          const tmp21 = options(Text_Text.Text, obj7);
          cResult[14] = num;
          cResult[15] = color;
          cResult[16] = text;
          cResult[17] = variant;
          cResult[18] = combined;
          cResult[19] = tmp21;
          tmp19 = tmp21;
        }
      }
      const tmpResult4 = useFormattedMessagePreview;
      const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
      const tmpResult5 = ChannelListLayout;
      const scaleTextLineHeightResult = useScaledTextLineHeight.scaleTextLineHeight(
        layoutStyles.messagePreview.text.variant,
        fontScale,
      );
      cResult[0] = fontScale;
      cResult[1] = layout;
      cResult[2] = layoutStyles;
      cResult[3] = scaleTextLineHeightResult;
      tmp7 = scaleTextLineHeightResult;
      tmp6 = layoutStyles;
      const tmpResult6 = useScaledTextLineHeight;
    }
  : (arg0) => {
      ({ message, channel, layout, lineClamp } = arg0);
      if (lineClamp === undefined) {
        lineClamp = 1;
      }
      ({ variant, color, muted } = arg0);
      const fontScale = useFontScale.useFontScale();
      const formattedMessagePreview = useFormattedMessagePreview.useFormattedMessagePreview(message, channel);
      const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
      useScaledTextLineHeight;
      if (null == formattedMessagePreview) {
        return null;
      } else {
        ({ authorLabel, trailingIcon } = formattedMessagePreview);
        if (color == null) {
          color = formattedMessagePreview.color;
        }
        const type = formattedMessagePreview.type;
        if ("text" === type) {
          let text = formattedMessagePreview.text;
        } else if ("markup" === type) {
          if ("markup" === formattedMessagePreview.type) {
            let content = formattedMessagePreview.markup;
          } else {
            content = formattedMessagePreview.message.content;
          }
          const obj4 = {
            markup: content,
            channelId: message.channel_id,
            guildId: channel.guild_id,
            muted,
            layout,
            color,
          };
          text = closure_1_8(closure_11, obj4);
        }
        const obj5 = { style: null, children: null };
        const obj6 = { flexDirection: "row", alignItems: "center", minHeight: tmp7 };
        obj5.style = obj6;
        const obj7 = {
          lineClamp,
          variant: null,
          maxFontSizeMultiplier: 1.75,
          color: null,
          style: null,
          children: null,
        };
        if (variant == null) {
          variant = "text-sm/normal";
        }
        obj7.variant = variant;
        obj7.color = color;
        obj7.style = { paddingBottom: 2, flexShrink: 1 };
        let combined = null != authorLabel;
        if (combined) {
          const _HermesInternal = HermesInternal;
          combined = "" + authorLabel + ": ";
        }
        const items = [combined, text];
        obj7.children = items;
        const items1 = [options(Text_Text.Text, obj7)];
        let tmp14 = null != trailingIcon;
        if (tmp14) {
          const obj8 = {
            icon: trailingIcon,
            size: layoutStyles.messagePreview.messageTypeIconSizeNew,
            color,
            style: { marginLeft: 4 },
          };
          tmp14 = closure_1_8(closure_10, obj8);
        }
        items1[1] = tmp14;
        obj5.children = items1;
        return options(View, obj5);
      }
    };
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (textColor) => {
      const cResult = lineClamp(token[6]).c(19);
      ({ message, lineClamp } = textColor);
      ({ messageSizeCacheRef, maxHeight, gifAutoPlay, gradientStyles, gradientColors } = textColor);
      let tmp4 = undefined !== gifAutoPlay;
      if (tmp4) {
        tmp4 = gifAutoPlay;
      }
      const tmp6 = require("useTheme")();
      if (cResult[0] !== tmp6) {
        const obj2 = { seeMoreLabelColor: tmp5(tmp2[23]).colors.TEXT_DEFAULT };
        const tmp8 = lineClamp(tmp2[22]).createNativeStyleProperties(obj2)(tmp6);
        cResult[0] = tmp6;
        cResult[1] = tmp8;
        let tmp7 = tmp8;
        const tmpResult = lineClamp(tmp2[22]);
      } else {
        tmp7 = cResult[1];
      }
      importDefault = tmp7;
      let obj = lineClamp(token[6]);
      token = lineClamp(token[24]).useToken(textColor.textColor);
      if (cResult[2] === token) {
        if (cResult[3] === lineClamp) {
          if (cResult[4] === tmp7) {
            let tmp10 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const RenderEmbeds = lineClamp(tmp2[27]).RenderEmbeds;
            const setting = RenderEmbeds.getSetting();
            cResult[6] = setting;
            let tmp12 = setting;
          } else {
            tmp12 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const InlineEmbedMedia = lineClamp(tmp2[27]).InlineEmbedMedia;
            const setting1 = InlineEmbedMedia.getSetting();
            cResult[7] = setting1;
            let tmp14 = setting1;
          } else {
            tmp14 = cResult[7];
          }
          const _Symbol3 = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const InlineAttachmentMedia = lineClamp(tmp2[27]).InlineAttachmentMedia;
            const setting2 = InlineAttachmentMedia.getSetting();
            cResult[8] = setting2;
            let tmp16 = setting2;
          } else {
            tmp16 = cResult[8];
          }
          if (cResult[9] !== tmp4) {
            const obj5 = new tmp5(tmp2[28])();
            const obj3 = {
              renderEmbeds: tmp12,
              inlineEmbedMedia: tmp14,
              inlineAttachmentMedia: tmp16,
              renderReactions: false,
              animateEmoji: false,
              gifAutoPlay: tmp4,
              renderReplies: false,
              renderCodedLinks: false,
              renderGiftCode: false,
              renderActivityInviteEmbed: false,
              renderThreadEmbeds: false,
              renderForumPostActions: false,
              ignoreMentioned: true,
              enableSwipeActions: false,
              renderExecutedCommands: false,
              useAlternateEmbedColors: true,
            };
            obj5.setOptions(obj3);
            cResult[9] = tmp4;
            cResult[10] = obj5;
            let tmp18 = obj5;
          } else {
            tmp18 = cResult[10];
          }
          if (cResult[11] === gradientColors) {
            if (cResult[12] === gradientStyles) {
              if (cResult[13] === maxHeight) {
                if (cResult[14] === message) {
                  if (cResult[15] === messageSizeCacheRef) {
                    if (cResult[16] === tmp10) {
                      if (cResult[17] === tmp18) {
                        let tmp23 = cResult[18];
                      }
                      return tmp23;
                    }
                  }
                }
              }
            }
          }
          const obj4 = {
            pointerEvents: "none",
            horizontalOffset: 0,
            modifyRow: tmp10,
            message,
            rowGenerator: tmp18,
            messageSizeCacheRef,
            maxHeight,
            gradientStyles,
            gradientColors,
          };
          const tmp25 = closure_8(tmp5(tmp2[29]), obj4);
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
                } catch (err) {}
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
          cResult[16] = tmp10;
          cResult[17] = tmp18;
          cResult[18] = tmp25;
          tmp23 = tmp25;
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
            } catch (err) {}
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
      tmp10 = I;
      const tmpResult2 = lineClamp(token[24]);
    }
  : (arg0) => {
      ({ lineClamp: require, gifAutoPlay } = arg0);
      ({ message, messageSizeCacheRef, maxHeight } = arg0);
      if (gifAutoPlay === undefined) {
        gifAutoPlay = false;
      }
      ({ textColor, gradientStyles, gradientColors } = arg0);
      const tmp = gifAutoPlay(4797)();
      let obj = createStyles;
      dependencyMap = obj.createNativeStyleProperties({ seeMoreLabelColor: gifAutoPlay(587).colors.TEXT_DEFAULT })(tmp);
      const obj2 = { seeMoreLabelColor: gifAutoPlay(587).colors.TEXT_DEFAULT };
      closure_3 = useToken.useToken(textColor);
      const RenderEmbeds = UserSettings.RenderEmbeds;
      const setting = RenderEmbeds.getSetting();
      const InlineEmbedMedia = UserSettings.InlineEmbedMedia;
      const setting1 = InlineEmbedMedia.getSetting();
      const InlineAttachmentMedia = UserSettings.InlineAttachmentMedia;
      const setting2 = InlineAttachmentMedia.getSetting();
      const items = [setting, setting1, setting2, gifAutoPlay];
      const memo = setting1.useMemo(() => {
        const obj = new RowGeneratorDefault();
        obj.setOptions({
          renderEmbeds: setting,
          inlineEmbedMedia: setting1,
          inlineAttachmentMedia: setting2,
          renderReactions: false,
          animateEmoji: false,
          gifAutoPlay,
          renderReplies: false,
          renderCodedLinks: false,
          renderGiftCode: false,
          renderActivityInviteEmbed: false,
          renderThreadEmbeds: false,
          renderForumPostActions: false,
          ignoreMentioned: true,
          enableSwipeActions: false,
          renderExecutedCommands: false,
          useAlternateEmbedColors: true,
        });
        return obj;
      }, items);
      return closure_8(gifAutoPlay(8336), {
        pointerEvents: "none",
        horizontalOffset: 0,
        modifyRow(message) {
          let processColorOrThrowResult;
          message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
          if (null != closure_3) {
            try {
              processColorOrThrowResult = RowGeneratorStyleSheet.processColorOrThrow(tmp4);
              const tmp2Result = RowGeneratorStyleSheet;
            } catch (err) {}
          }
          if (null != processColorOrThrowResult) {
            message.message.textColor = processColorOrThrowResult;
          }
          if (null != _require) {
            const obj = { numberOfLines: tmp6, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: null };
            if (processColorOrThrowResult == null) {
              processColorOrThrowResult = seeMoreLabelColor.seeMoreLabelColor;
            }
            obj.seeMoreLabelColor = processColorOrThrowResult;
            message.truncation = obj;
          }
        },
        message,
        rowGenerator: memo,
        messageSizeCacheRef,
        maxHeight,
        gradientStyles,
        gradientColors,
      });
    };
let closure_13 = tmp4;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export const ChannelRowPreview = tmp3;
export const NativeChannelRowPreview = tmp4;
export const NativeMessageChannelRowPreview = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (message) => {
        _require = message;
        const cResult = require("c").c(8);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [RelationshipStore];
          cResult[0] = items;
          let first = items;
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
          let tmp7 = items1;
          let tmp6 = fn;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        const obj = require("c");
        const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
        const tmpResult = require("initialize");
        if (tmpResult2.isMessageContentPreviewable(message.message)) {
          if (!stateFromStores) {
            if (cResult[4] !== message) {
              const obj2 = {};
              const merged = Object.assign(message);
              const tmp15 = closure_8(closure_13, obj2);
              cResult[4] = message;
              cResult[5] = tmp15;
              let tmp9 = tmp15;
            } else {
              tmp9 = cResult[5];
            }
            return tmp9;
          }
        }
        if (cResult[6] !== message) {
          const obj3 = {};
          const merged1 = Object.assign(message);
          const tmp22 = closure_8(closure_12, obj3);
          cResult[6] = message;
          cResult[7] = tmp22;
        }
        tmpResult2 = require("useFormattedMessagePreview");
      }
    : (message) => {
        _require = message;
        const items = [RelationshipStore];
        const items1 = [message.message.author.id];
        const stateFromStores = require("initialize").useStateFromStores(
          items,
          () => RelationshipStore.isBlockedOrIgnored(message.message.author.id),
          items1,
        );
        const obj = require("initialize");
        if (obj2.isMessageContentPreviewable(message.message)) {
          if (!stateFromStores) {
            const obj3 = {};
            const merged = Object.assign(message);
            let tmp7 = closure_8(closure_13, obj3);
          }
          return tmp7;
        }
        const merged1 = Object.assign(message);
        tmp7 = closure_8(closure_12, {});
        obj2 = require("useFormattedMessagePreview");
        const obj4 = {};
      },
);
