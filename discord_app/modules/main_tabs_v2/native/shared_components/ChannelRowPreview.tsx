// discord_app/modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx
import importAllResult from "useTheme";
import { View } from "map";
import upsertRelationship from "upsertRelationship";
import jsxProd from "Themes";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { AttachmentIcon } from "../../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import { ImageIcon } from "../../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import { LinkIcon } from "../../../../design/components/Icon/native/redesign/generated/LinkIcon.tsx";
import { MusicIcon } from "../../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import { PhoneCallIcon } from "../../../../design/components/Icon/native/redesign/generated/PhoneCallIcon.tsx";
import { PhoneHangUpIcon } from "../../../../design/components/Icon/native/redesign/generated/PhoneHangUpIcon.tsx";
import { StickerIcon } from "../../../../design/components/Icon/native/redesign/generated/StickerIcon.tsx";
import { VideoIcon } from "../../../../design/components/Icon/native/redesign/generated/VideoIcon.tsx";
import { getOrParseMessagePreviewMarkupAST } from "../../../message_previews/native/MessagePreviewMarkup.tsx";
import { getFontScale } from "../../../screen/native/useFontScale.tsx";

let closure_6;
let error;
const require = arg1;
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
    const obj1 = {};
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
    ({ variant, color } = global);
    tmp = closure_2;
    tmp2 = require("useIsMobileVisualRefreshExperimentEnabled")("ChannelRowPreview");
    tmp3 = closure_0;
    obj = require("getFontScale");
    fontScale = obj.useFontScale();
    obj2 = require("formatMessagePreview");
    formattedMessagePreview = obj2.useFormattedMessagePreview(message, channel);
    obj3 = require("getLayoutStyles");
    layoutStyles = obj3.getLayoutStyles(layout);
    tmp7 = require("map");
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
          tmp9 = jsx;
          tmp10 = f47485;
          if ("markup" === formattedMessagePreview.type) {
            content = formattedMessagePreview.markup;
          } else {
            content = formattedMessagePreview.message.content;
          }
          obj = { markup: null, channelId: null, guildId: null, muted: null, layout: null, color: null };
          obj[0] = content;
          obj[1] = message.channel_id;
          obj[2] = channel.guild_id;
          obj[3] = global.muted;
          obj[4] = layout;
          obj[5] = color;
          text = tmp9(tmp10, obj);
        } else {
          str3 = "message";
        }
      }
      tmp11 = jsxs;
      obj1 = { style: null, children: null };
      obj2 = { flexDirection: "row", alignItems: "center", minHeight: null };
      obj2[2] = tmp8;
      obj1[0] = obj2;
      tmp12 = View;
      obj3 = { lineClamp: null, variant: null, maxFontSizeMultiplier: 1.75, color: null, style: null, children: null };
      obj3[0] = lineClamp;
      if (variant == null) {
        str4 = "text-sm/normal";
        if (!tmp2) {
          str4 = layoutStyles.messagePreview.text.variant;
        }
        variant = str4;
      }
      obj3[1] = variant;
      obj3[3] = color;
      obj3[4] = { paddingBottom: 2, flexShrink: 1 };
      combined = null != authorLabel;
      if (combined) {
        tmp14 = globalThis;
        _HermesInternal = HermesInternal;
        str5 = ": ";
        str6 = "";
        combined = "" + authorLabel + ": ";
      }
      items = [, ];
      items[0] = combined;
      items[1] = text;
      obj3[5] = items;
      items1 = [, ];
      items1[0] = tmp11(require("Text").Text, obj3);
      tmp15 = null != trailingIcon;
      if (tmp15) {
        tmp16 = jsx;
        tmp17 = PreviewIcon;
        obj4 = { icon: null, size: null, color: null, style: null };
        obj4[0] = trailingIcon;
        obj4[1] = layoutStyles.messagePreview.messageTypeIconSizeNew;
        obj4[2] = color;
        obj4[3] = { marginLeft: 4 };
        tmp15 = jsx(PreviewIcon, obj4);
      }
      items1[1] = tmp15;
      obj1[1] = items1;
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
    c2 = undefined;
    useToken = undefined;
    c4 = undefined;
    c5 = undefined;
    textColor = undefined;
    ({ textColor, gradientStyles, gradientColors } = global);
    tmp = require("useTheme")();
    obj = require("createCacheKey");
    obj = { seeMoreLabelColor: require("Themes").colors.TEXT_DEFAULT };
    c2 = obj.createNativeStyleProperties(obj)(tmp);
    obj3 = require("map");
    useToken = obj3.useToken(textColor);
    RenderEmbeds = require("explicitContentFromProto").RenderEmbeds;
    setting = RenderEmbeds.getSetting();
    c4 = setting;
    InlineEmbedMedia = require("explicitContentFromProto").InlineEmbedMedia;
    setting1 = InlineEmbedMedia.getSetting();
    c5 = setting1;
    InlineAttachmentMedia = require("explicitContentFromProto").InlineAttachmentMedia;
    setting2 = InlineAttachmentMedia.getSetting();
    textColor = setting2;
    items = [, , , ];
    items[0] = setting;
    items[1] = setting1;
    items[2] = setting2;
    items[3] = gifAutoPlay;
    memo = useToken.useMemo(() => {
      let obj = new gifAutoPlay(seeMoreLabelColor[24])();
      obj = { renderEmbeds: setting, inlineEmbedMedia: setting1, inlineAttachmentMedia: setting2, renderReactions: false, animateEmoji: false, gifAutoPlay, renderReplies: false, renderCodedLinks: false, renderGiftCode: false, renderActivityInviteEmbed: false, renderThreadEmbeds: false, renderForumPostActions: false, renderComponents: false, ignoreMentioned: true, enableSwipeActions: false, renderExecutedCommands: false, useAlternateEmbedColors: true };
      obj.setOptions(obj);
      return obj;
    }, items);
    obj1 = {
      pointerEvents: "none",
      horizontalOffset: 0,
      modifyRow(message) {
            let processColorOrThrowResult;
            message.contextType = outer1_0(seeMoreLabelColor[26]).MessageContextType.SEARCH;
            if (null != closure_3) {
              try {
                processColorOrThrowResult = outer1_0(seeMoreLabelColor[27]).processColorOrThrow(tmp4);
                const tmp2Result = outer1_0(seeMoreLabelColor[27]);
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
    return textColor(require("DCDChatItem"), obj1);
  }
}
let c3 = importAllResult;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_9 = importAllResult.memo((arg0) => {
  let channelId;
  let color;
  let guildId;
  let layout;
  let markup;
  let muted;
  ({ markup, channelId, guildId, muted, layout, color } = arg0);
  const fontScale = getFontScale.useFontScale();
  const obj = getFontScale;
  return getOrParseMessagePreviewMarkupAST.renderMessagePreviewMarkup({ content, muted, guildId, channelId, layout, color, fontScale });
});
const memoResult = importAllResult.memo((message) => {
  const _require = message;
  let obj = _initialize;
  const items = [upsertRelationship];
  const items1 = [message.message.author.id];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.isBlockedOrIgnored(message.message.author.id), items1);
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
const result = require("upsertRelationship").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/ChannelRowPreview.tsx");

export { ChannelRowPreview };
export { NativeChannelRowPreview };
export const NativeMessageChannelRowPreview = memoResult;