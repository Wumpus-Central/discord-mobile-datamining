// === Module 10109: ChannelRowPreview ===

// Module 10109 (ChannelRowPreview)
import UserSettings from "UserSettings" /* 1935 */;
import useToken from "useToken" /* 4262 */;
import LinkIcon from "LinkIcon" /* 4503 */;
import createStyles from "createStyles" /* 4560 */;
import useFontScale from "useFontScale" /* 4982 */;
import ImageIcon from "ImageIcon" /* 5087 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7880 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 7882 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 7936 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8126 */;
import MusicIcon from "MusicIcon" /* 9911 */;
import useFormattedMessagePreview from "useFormattedMessagePreview" /* 10093 */;
import VideoIcon from "VideoIcon" /* 10110 */;
import AttachmentIcon from "AttachmentIcon" /* 10112 */;
import StickerIcon from "StickerIcon" /* 10114 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10116 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10119 */;
import ChannelListLayout from "ChannelListLayout" /* 10121 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

const Text_Text = tmp(4556);
require = fn;
function PreviewIcon(icon) {
  icon = icon.icon;
  const merged = Object.assign(icon, Object.assign({ icon: 0 }));
  if ("image" === icon) {
    let obj = {};
    const merged1 = Object.assign(merged);
    return timestampProducer(ImageIcon.ImageIcon, obj);
  } else if ("video" === icon) {
    obj = {};
    const merged2 = Object.assign(merged);
    return timestampProducer(VideoIcon.VideoIcon, obj);
  } else if ("audio" === icon) {
    const obj1 = {};
    const merged3 = Object.assign(merged);
    return timestampProducer(MusicIcon.MusicIcon, obj1);
  } else if ("attachment" === icon) {
    const obj2 = {};
    const merged4 = Object.assign(merged);
    return timestampProducer(AttachmentIcon.AttachmentIcon, obj2);
  } else if ("link" === icon) {
    const obj3 = {};
    const merged5 = Object.assign(merged);
    return timestampProducer(LinkIcon.LinkIcon, obj3);
  } else if ("sticker" === icon) {
    const obj4 = {};
    const merged6 = Object.assign(merged);
    return timestampProducer(StickerIcon.StickerIcon, obj4);
  } else if ("call-active" === icon) {
    const obj5 = {};
    const merged7 = Object.assign(merged);
    return timestampProducer(PhoneCallIcon.PhoneCallIcon, obj5);
  } else if ("call-ended" === icon) {
    obj = {};
    const merged8 = Object.assign(merged);
    return timestampProducer(PhoneHangUpIcon.PhoneHangUpIcon, obj);
  }
}
class ChannelRowPreview {
  constructor(arg0) {
    ({ message, channel, layout, lineClamp } = global);
    if (lineClamp === undefined) {
      lineClamp = 1;
    }
    ({ variant, color, muted } = global);
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[12]);
    fontScale = obj.useFontScale();
    obj2 = closure_0(closure_2[14]);
    formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    obj3 = closure_0(closure_2[15]);
    layoutStyles = obj3.getLayoutStyles(layout);
    tmp6 = closure_0(closure_2[16]);
    if (null == formattedMessagePreview) {
      return null;
    } else {
      ({ authorLabel, trailingIcon } = formattedMessagePreview);
      if (color == null) {
        color = formattedMessagePreview.color;
      }
      type = formattedMessagePreview.type;
      str = "text";
      if ("text" === type) {
        text = formattedMessagePreview.text;
      } else {
        str2 = "markup";
        if ("markup" === type) {
          tmp8 = jsx;
          tmp9 = closure_9;
          if ("markup" === formattedMessagePreview.type) {
            content = formattedMessagePreview.markup;
          } else {
            content = formattedMessagePreview.message.content;
          }
          obj = { markup: null, channelId: null, guildId: null, muted: null, layout: null, color: null };
          obj.markup = content;
          obj.channelId = message.channel_id;
          obj.guildId = channel.guild_id;
          obj.muted = muted;
          obj.layout = layout;
          obj.color = color;
          text = tmp8(tmp9, obj);
        } else {
          str3 = "message";
        }
      }
      tmp10 = jsxs;
      obj1 = { style: null, children: null };
      obj2 = { flexDirection: "row", alignItems: "center", minHeight: null };
      obj2.minHeight = tmp7;
      obj1.style = obj2;
      tmp11 = View;
      obj3 = { lineClamp: null, variant: null, maxFontSizeMultiplier: 1.75, color: null, style: null, children: null };
      obj3.lineClamp = lineClamp;
      if (variant == null) {
        variant = "text-sm/normal";
      }
      obj3.variant = variant;
      obj3.color = color;
      obj3.style = { paddingBottom: 2, flexShrink: 1 };
      combined = null != authorLabel;
      if (combined) {
        tmp13 = globalThis;
        _HermesInternal = HermesInternal;
        str4 = ": ";
        str5 = "";
        combined = "" + authorLabel + ": ";
      }
      items = [, ];
      items[0] = combined;
      items[1] = text;
      obj3.children = items;
      items1 = [, ];
      items1[0] = tmp10(tmp(tmp2[17]).Text, obj3);
      tmp14 = null != trailingIcon;
      if (tmp14) {
        tmp15 = jsx;
        tmp16 = PreviewIcon;
        obj4 = { icon: null, size: null, color: null, style: null };
        obj4.icon = trailingIcon;
        obj4.size = layoutStyles.messagePreview.messageTypeIconSizeNew;
        obj4.color = color;
        obj4.style = { marginLeft: 4 };
        tmp14 = jsx(PreviewIcon, obj4);
      }
      items1[1] = tmp14;
      obj1.children = items1;
      return tmp10(tmp11, obj1);
    }
  }
}
class NativeChannelRowPreview {
  constructor(arg0) {
    ({ lineClamp, gifAutoPlay } = global);
    ({ message, messageSizeCacheRef, maxHeight } = global);
    if (gifAutoPlay === undefined) {
      gifAutoPlay = false;
    }
    c1 = gifAutoPlay;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    ({ textColor, gradientStyles, gradientColors } = global);
    tmp = c1(closure_2[18])();
    obj = lineClamp(closure_2[19]);
    obj = { seeMoreLabelColor: c1(closure_2[20]).colors.TEXT_DEFAULT };
    closure_2 = obj.createNativeStyleProperties(obj)(tmp);
    obj3 = lineClamp(closure_2[21]);
    closure_3 = obj3.useToken(textColor);
    RenderEmbeds = lineClamp(closure_2[22]).RenderEmbeds;
    setting = RenderEmbeds.getSetting();
    closure_4 = setting;
    InlineEmbedMedia = lineClamp(closure_2[22]).InlineEmbedMedia;
    setting1 = InlineEmbedMedia.getSetting();
    closure_5 = setting1;
    InlineAttachmentMedia = lineClamp(closure_2[22]).InlineAttachmentMedia;
    setting2 = InlineAttachmentMedia.getSetting();
    closure_6 = setting2;
    items = [, , , ];
    items[0] = setting;
    items[1] = setting1;
    items[2] = setting2;
    items[3] = gifAutoPlay;
    memo = closure_3.useMemo(() => {
      new RowGeneratorDefault();
      const obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
      obj.setOptions(obj);
      return obj;
    }, items);
    obj1 = {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(message) {
            let processColorOrThrowResult;
            message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
            if (null != closure_3) {
              try {
                processColorOrThrowResult = RowGeneratorStyleSheet.processColorOrThrow(tmp4);
                const tmp2Result = RowGeneratorStyleSheet;
              } catch (err) {
              }
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
      gradientColors
    };
    return closure_6(c1(closure_2[24]), obj1);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_9 = noop.memo((arg0) => {
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const fontScale = useFontScale.useFontScale();
  return MessagePreviewMarkup.renderMessagePreviewMarkup({ content, muted, guildId, channelId, layout, color, fontScale });
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = noop.memo((message) => {
  _require = message;
  let obj = require("initialize");
  const items = [RelationshipStore];
  const items1 = [message.message.author.id];
  const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(message.message.author.id), items1);
  if (obj2.isMessageContentPreviewable(message.message)) {
    if (!stateFromStores) {
      obj = {};
      const merged = Object.assign(message);
      let tmp7 = closure_6(NativeChannelRowPreview, obj);
    }
    return tmp7;
  }
  obj = {};
  const merged1 = Object.assign(message);
  tmp7 = closure_6(ChannelRowPreview, obj);
});