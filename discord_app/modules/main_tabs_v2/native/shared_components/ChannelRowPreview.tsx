// === Module 10365: ChannelRowPreview ===

// Module 10365 (ChannelRowPreview)
import UserSettings from "UserSettings" /* 2019 */;
import useToken from "useToken" /* 4457 */;
import LinkIcon from "LinkIcon" /* 4698 */;
import Text_Text from "Text/Text" /* 4752 */;
import createStyles from "createStyles" /* 4756 */;
import useFontScale from "useFontScale" /* 5193 */;
import ImageIcon from "ImageIcon" /* 5305 */;
import PhoneCallIcon from "PhoneCallIcon" /* 8124 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 8126 */;
import RowGeneratorDefault from "RowGenerator" /* 8190 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8194 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8395 */;
import MusicIcon from "MusicIcon" /* 10167 */;
import useFormattedMessagePreview from "useFormattedMessagePreview" /* 10350 */;
import VideoIcon from "VideoIcon" /* 10366 */;
import AttachmentIcon from "AttachmentIcon" /* 10368 */;
import StickerIcon from "StickerIcon" /* 10370 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 10372 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10375 */;
import ChannelListLayout from "ChannelListLayout" /* 10377 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4405 */;

const require = globalThis.__r;

require = fn;
function PreviewIcon(icon) {
  icon = icon.icon;
  const merged = Object.assign(icon, Object.assign({ icon: 0 }));
  if ("image" === icon) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    return timestampProducer(ImageIcon.ImageIcon, obj2);
  } else if ("video" === icon) {
    const obj3 = {};
    const merged2 = Object.assign(merged);
    return timestampProducer(VideoIcon.VideoIcon, obj3);
  } else if ("audio" === icon) {
    const obj4 = {};
    const merged3 = Object.assign(merged);
    return timestampProducer(MusicIcon.MusicIcon, obj4);
  } else if ("attachment" === icon) {
    const obj5 = {};
    const merged4 = Object.assign(merged);
    return timestampProducer(AttachmentIcon.AttachmentIcon, obj5);
  } else if ("link" === icon) {
    const obj6 = {};
    const merged5 = Object.assign(merged);
    return timestampProducer(LinkIcon.LinkIcon, obj6);
  } else if ("sticker" === icon) {
    const obj7 = {};
    const merged6 = Object.assign(merged);
    return timestampProducer(StickerIcon.StickerIcon, obj7);
  } else if ("call-active" === icon) {
    const obj8 = {};
    const merged7 = Object.assign(merged);
    return timestampProducer(PhoneCallIcon.PhoneCallIcon, obj8);
  } else if ("call-ended" === icon) {
    const obj = {};
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
          obj1 = { markup: null, channelId: null, guildId: null, muted: null, layout: null, color: null };
          obj1.markup = content;
          obj1.channelId = message.channel_id;
          obj1.guildId = channel.guild_id;
          obj1.muted = muted;
          obj1.layout = layout;
          obj1.color = color;
          text = tmp8(tmp9, obj1);
        } else {
          str3 = "message";
        }
      }
      tmp10 = jsxs;
      obj9 = { style: null, children: null };
      obj10 = { flexDirection: "row", alignItems: "center", minHeight: null };
      obj10.minHeight = tmp7;
      obj9.style = obj10;
      tmp11 = View;
      obj11 = { lineClamp: null, variant: null, maxFontSizeMultiplier: 1.75, color: null, style: null, children: null };
      obj11.lineClamp = lineClamp;
      if (variant == null) {
        variant = "text-sm/normal";
      }
      obj11.variant = variant;
      obj11.color = color;
      obj11.style = { paddingBottom: 2, flexShrink: 1 };
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
      obj11.children = items;
      items1 = [, ];
      items1[0] = tmp10(tmp(tmp2[17]).Text, obj11);
      tmp14 = null != trailingIcon;
      if (tmp14) {
        tmp15 = jsx;
        tmp16 = PreviewIcon;
        obj12 = { icon: null, size: null, color: null, style: null };
        obj12.icon = trailingIcon;
        obj12.size = layoutStyles.messagePreview.messageTypeIconSizeNew;
        obj12.color = color;
        obj12.style = { marginLeft: 4 };
        tmp14 = jsx(PreviewIcon, obj12);
      }
      items1[1] = tmp14;
      obj9.children = items1;
      return tmp10(tmp11, obj9);
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
    obj1 = { seeMoreLabelColor: c1(closure_2[20]).colors.TEXT_DEFAULT };
    closure_2 = obj.createNativeStyleProperties(obj1)(tmp);
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
      const obj = new RowGeneratorDefault();
      obj.setOptions({ renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true });
      return obj;
    }, items);
    obj5 = {
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
    return closure_6(c1(closure_2[24]), obj5);
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
  const items = [RelationshipStore];
  const items1 = [message.message.author.id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.isBlockedOrIgnored(message.message.author.id), items1);
  const obj = require("initialize");
  if (obj2.isMessageContentPreviewable(message.message)) {
    if (!stateFromStores) {
      const obj3 = {};
      const merged = Object.assign(message);
      let tmp7 = closure_6(NativeChannelRowPreview, obj3);
    }
    return tmp7;
  }
  const merged1 = Object.assign(message);
  tmp7 = closure_6(ChannelRowPreview, {});
  obj2 = require("useFormattedMessagePreview");
  const obj4 = {};
});