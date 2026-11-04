// === Module 11222: ChannelRowPreview ===

// Module 11222 (ChannelRowPreview)
import UserSettings from "UserSettings" /* 4966 */;
import createStyles from "createStyles" /* 5141 */;
import useToken from "useToken" /* 5732 */;
import LinkIcon from "LinkIcon" /* 5861 */;
import RowGeneratorDefault from "RowGenerator" /* 8518 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8522 */;
import ImageIcon from "ImageIcon" /* 8800 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8851 */;
import PhoneCallIcon from "PhoneCallIcon" /* 10012 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 10014 */;
import AttachmentIcon from "AttachmentIcon" /* 10713 */;
import MusicIcon from "MusicIcon" /* 10936 */;
import VideoIcon from "VideoIcon" /* 11223 */;
import StickerIcon from "StickerIcon" /* 11225 */;
import MessagePreviewMarkup from "MessagePreviewMarkup" /* 11234 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;

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
    message = global.message;
    channel = global.channel;
    layout = global.layout;
    num = global.lineClamp;
    if (num === undefined) {
      num = 1;
    }
    muted = global.muted;
    ({ variant, color } = global);
    closure_4 = undefined;
    color = undefined;
    content = undefined;
    tmp = message;
    tmp2 = layout;
    obj = message(layout[12]);
    fontScale = obj.useFontScale();
    closure_4 = fontScale;
    obj2 = message(layout[13]);
    formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    obj3 = message(layout[14]);
    layoutStyles = obj3.getLayoutStyles(layout);
    obj4 = message(layout[15]);
    scaleTextLineHeightResult = obj4.scaleTextLineHeight(layoutStyles.messagePreview.text.variant, fontScale);
    if (color == null) {
      color1 = undefined;
      if (formattedMessagePreview != null) {
        color1 = formattedMessagePreview.color;
      }
      color = color1;
    }
    type1 = undefined;
    if (formattedMessagePreview != null) {
      type1 = formattedMessagePreview.type;
    }
    if ("markup" === type1) {
      content = formattedMessagePreview.markup;
    } else {
      str = "message";
      if ("message" === type1) {
        content = formattedMessagePreview.message.content;
      }
    }
    items = [, , , , , , ];
    items[0] = content;
    items[1] = muted;
    items[2] = channel.guild_id;
    items[3] = message.channel_id;
    items[4] = layout;
    items[5] = color;
    items[6] = fontScale;
    memo = muted.useMemo(() => {
      let result;
      if (null != content) {
        const obj2 = { content: tmp, muted, guildId: channel.guild_id, channelId: message.channel_id, layout, color, fontScale };
        result = MessagePreviewMarkup.renderMeasuredMessagePreviewMarkup(obj2);
      }
      return result;
    }, items);
    if (null == formattedMessagePreview) {
      return null;
    } else {
      ({ authorLabel, trailingIcon, type } = formattedMessagePreview);
      str5 = "text";
      if ("text" === type) {
        text = formattedMessagePreview.text;
      } else if ("markup" === type) {
        content1 = undefined;
        if (memo != null) {
          content1 = memo.content;
        }
        text = content1;
      } else {
        str2 = "message";
      }
      obj1 = { style: null, children: null };
      obj9 = { flexDirection: "row", alignItems: "center", minHeight: null };
      obj9.minHeight = scaleTextLineHeightResult;
      obj1.style = obj9;
      tmp13 = content;
      tmp11 = jsxs;
      tmp12 = closure_4;
      obj10 = { lineClamp: null, variant: null, maxFontSizeMultiplier: 1.75, color: null, leadingContent: null, mentions: null, style: null, children: null };
      obj10.lineClamp = num;
      if (variant == null) {
        variant = "body-sm/normal";
      }
      obj10.variant = variant;
      obj10.color = color;
      combined = undefined;
      if (null != authorLabel) {
        tmp15 = globalThis;
        _HermesInternal = HermesInternal;
        str3 = ": ";
        str4 = "";
        combined = "" + authorLabel + ": ";
      }
      obj10.leadingContent = combined;
      mentions = undefined;
      if (memo != null) {
        mentions = memo.mentions;
      }
      obj10.mentions = mentions;
      obj10.style = { paddingBottom: 2, flexShrink: 1 };
      obj10.children = text;
      items1 = [, ];
      items1[0] = tmp13(tmp(tmp2[17]).MessagePreviewParagraph, obj10);
      tmp13Result = null != trailingIcon;
      if (tmp13Result) {
        tmp18 = PreviewIcon;
        obj11 = { icon: null, size: null, color: null, style: null };
        obj11.icon = trailingIcon;
        obj11.size = layoutStyles.messagePreview.messageTypeIconSizeNew;
        obj11.color = color;
        obj11.style = { marginLeft: 4 };
        tmp13Result = tmp13(PreviewIcon, obj11);
      }
      items1[1] = tmp13Result;
      obj1.children = items1;
      return tmp11(tmp12, obj1);
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
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = noop.memo(function NativeMessageChannelRowPreview(message) {
  _require = message;
  items = [RelationshipStore];
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