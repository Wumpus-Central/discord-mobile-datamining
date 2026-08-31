// === Module 10153: PreviewIcon ===

// Module 10153 (PreviewIcon)
import explicitContentFromProto from "explicitContentFromProto" /* 4136 */;
import map from "map" /* 4167 */;
import LinkIcon from "LinkIcon" /* 4391 */;
import Text from "Text" /* 4444 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import getFontScale from "getFontScale" /* 4903 */;
import ImageIcon from "ImageIcon" /* 5004 */;
import PhoneCallIcon from "PhoneCallIcon" /* 7591 */;
import PhoneHangUpIcon from "PhoneHangUpIcon" /* 7593 */;
import map2 from "map" /* 9050 */;
import MusicIcon from "MusicIcon" /* 9212 */;
import formatMessagePreview from "formatMessagePreview" /* 10137 */;
import VideoIcon from "VideoIcon" /* 10154 */;
import AttachmentIcon from "AttachmentIcon" /* 10156 */;
import StickerIcon from "StickerIcon" /* 10158 */;
import getOrParseMessagePreviewMarkupAST from "getOrParseMessagePreviewMarkupAST" /* 10160 */;
import getLayoutStyles from "getLayoutStyles" /* 10163 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "markAllUserIdListsStale" /* 4100 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function PreviewIcon(icon) {
  icon = icon.icon;
  const merged = Object.assign(icon, Object.create(null));
  if ("image" === icon) {
    let obj = {};
    const merged1 = Object.assign(merged);
    return callback(ImageIcon.ImageIcon, obj);
  } else if ("video" === icon) {
    obj = {};
    const merged2 = Object.assign(merged);
    return callback(VideoIcon.VideoIcon, obj);
  } else if ("audio" === icon) {
    obj1 = {};
    const merged3 = Object.assign(merged);
    return callback(MusicIcon.MusicIcon, obj1);
  } else if ("attachment" === icon) {
    const obj2 = {};
    const merged4 = Object.assign(merged);
    return callback(AttachmentIcon.AttachmentIcon, obj2);
  } else if ("link" === icon) {
    const obj3 = {};
    const merged5 = Object.assign(merged);
    return callback(LinkIcon.LinkIcon, obj3);
  } else if ("sticker" === icon) {
    const obj4 = {};
    const merged6 = Object.assign(merged);
    return callback(StickerIcon.StickerIcon, obj4);
  } else if ("call-active" === icon) {
    const obj5 = {};
    const merged7 = Object.assign(merged);
    return callback(PhoneCallIcon.PhoneCallIcon, obj5);
  } else if ("call-ended" === icon) {
    obj = {};
    const merged8 = Object.assign(merged);
    return callback(PhoneHangUpIcon.PhoneHangUpIcon, obj);
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
    obj = require("getFontScale");
    fontScale = obj.useFontScale();
    obj2 = require("formatMessagePreview");
    formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    obj3 = require("getLayoutStyles");
    layoutStyles = obj3.getLayoutStyles(layout);
    tmp6 = require("map");
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
          obj[0] = content;
          obj[1] = message.channel_id;
          obj[2] = channel.guild_id;
          obj[3] = muted;
          obj[4] = layout;
          obj[5] = color;
          text = tmp8(tmp9, obj);
        } else {
          str3 = "message";
        }
      }
      tmp10 = jsxs;
      obj1 = { style: null, children: null };
      obj2 = { flexDirection: "row", alignItems: "center", minHeight: null };
      obj2[2] = tmp7;
      obj1[0] = obj2;
      tmp11 = View;
      obj3 = { lineClamp: null, variant: null, maxFontSizeMultiplier: 1.75, color: null, style: null, children: null };
      obj3[0] = lineClamp;
      if (variant == null) {
        variant = "text-sm/normal";
      }
      obj3[1] = variant;
      obj3[3] = color;
      obj3[4] = { paddingBottom: 2, flexShrink: 1 };
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
      obj3[5] = items;
      items1 = [, ];
      items1[0] = tmp10(require("Text").Text, obj3);
      tmp14 = null != trailingIcon;
      if (tmp14) {
        tmp15 = jsx;
        tmp16 = PreviewIcon;
        obj4 = { icon: null, size: null, color: null, style: null };
        obj4[0] = trailingIcon;
        obj4[1] = layoutStyles.messagePreview.messageTypeIconSizeNew;
        obj4[2] = color;
        obj4[3] = { marginLeft: 4 };
        tmp14 = jsx(PreviewIcon, obj4);
      }
      items1[1] = tmp14;
      obj1[1] = items1;
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
    tmp = require("useTheme")();
    obj = require("createCacheKey");
    obj = { seeMoreLabelColor: require("Themes").colors.TEXT_DEFAULT };
    closure_2 = obj.createNativeStyleProperties(obj)(tmp);
    obj3 = require("map");
    closure_3 = obj3.useToken(textColor);
    RenderEmbeds = require("explicitContentFromProto").RenderEmbeds;
    setting = RenderEmbeds.getSetting();
    closure_4 = setting;
    InlineEmbedMedia = require("explicitContentFromProto").InlineEmbedMedia;
    setting1 = InlineEmbedMedia.getSetting();
    closure_5 = setting1;
    InlineAttachmentMedia = require("explicitContentFromProto").InlineAttachmentMedia;
    setting2 = InlineAttachmentMedia.getSetting();
    closure_6 = setting2;
    items = [, , , ];
    items[0] = setting;
    items[1] = setting1;
    items[2] = setting2;
    items[3] = gifAutoPlay;
    memo = closure_3.useMemo(() => {
      let obj = new gifAutoPlay(seeMoreLabelColor[23])();
      obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
      obj.setOptions(obj);
      return obj;
    }, items);
    obj1 = {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(message) {
            let processColorOrThrowResult;
            message.contextType = closure_1_0(seeMoreLabelColor[25]).MessageContextType.SEARCH;
            if (null != closure_3) {
              try {
                processColorOrThrowResult = closure_1_0(seeMoreLabelColor[26]).processColorOrThrow(tmp4);
                const tmp2Result = closure_1_0(seeMoreLabelColor[26]);
              } catch (err) {
              }
            }
            if (null != processColorOrThrowResult) {
              message.message.textColor = processColorOrThrowResult;
            }
            if (null != closure_0) {
              const obj = { numberOfLines: null, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: null };
              obj[0] = tmp6;
              if (processColorOrThrowResult == null) {
                processColorOrThrowResult = seeMoreLabelColor.seeMoreLabelColor;
              }
              obj[3] = processColorOrThrowResult;
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
    return closure_6(require("DCDChatItem"), obj1);
  }
}
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_9 = importAllResult.memo((arg0) => {
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const fontScale = getFontScale.useFontScale();
  const obj = getFontScale;
  return getOrParseMessagePreviewMarkupAST.renderMessagePreviewMarkup({ content, muted, guildId, channelId, layout, color, fontScale });
});
const memoResult = importAllResult.memo((message) => {
  const _require = message;
  let obj = _require(589);
  const items = [closure_5];
  const items1 = [message.message.author.id];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.isBlockedOrIgnored(message.message.author.id), items1);
  if (obj2.isMessageContentPreviewable(message.message)) {
    if (!stateFromStores) {
      obj = {};
      const merged = Object.assign(message);
      let tmp7 = callback(NativeChannelRowPreview, obj);
    }
    return tmp7;
  }
  obj = {};
  const merged1 = Object.assign(message);
  tmp7 = callback(ChannelRowPreview, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = memoResult;