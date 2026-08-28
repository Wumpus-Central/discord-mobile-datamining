// discord_app/modules/forwarding/native/ForwardPreview.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSrcWithWidthAndHeightDefault from "../../../utils/native/ImageUtils.tsx";
import messagesProxyDefault from "../../checkpoint/Checkpoint.messages.js";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import SolidCutoutDefault from "../../../design/components/Icon/native/ClipView.tsx";
import DCDChatItemDefault from "../../../components_native/chat/ChatItem.tsx";
import useForwardPreviewContent from "../ForwardPreviewUtils.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function MessagePreview(content) {
  ({ message, attachmentCount } = content);
  importDefault = undefined;
  if (attachmentCount > 0) {
    let TEXT_SUBTLE = tmp(712).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp(712).colors.TEXT_SUBTLE;
  }
  let obj = attachmentCount(4446);
  const tmp4 = obj.createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(useThemeDefault());
  importDefault = tmp4;
  const items = [tmp4.seeMoreLabelColor, attachmentCount];
  const callback = React.useCallback((message) => {
    message.contextType = attachmentCount(closure_1_2[6]).MessageContextType.SEARCH;
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    message.truncation = { numberOfLines: num, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: lib.seeMoreLabelColor };
    message.message.edited = "";
  }, items);
  const memo = React.useMemo(() => {
    const obj = new lib(table[7])();
    obj.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
    return obj;
  }, []);
  obj = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback, message: null, rowGenerator: null };
  obj = { messageSnapshots: [], content: content.contentMessage.content };
  const tmp3 = useThemeDefault();
  obj[3] = message.merge(obj);
  obj[4] = memo;
  return callback(DCDChatItemDefault, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let c7 = 56;
createCacheKey = { forwardPreview: null, quote: null, contentWrapper: null, attachmentPreview: null, attachmentPreviewVideo: null, videoThumbnail: null, playIcon: null, attachmentPreviewOverflow: null, overflowCount: null, attachmentRow: null, largeIcon: null };
createCacheKey = { flexDirection: "row", gap: ThemesDefault.space.PX_12, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 4, height: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
createCacheKey[2] = { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 };
let obj1 = { width: 4, height: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
createCacheKey[3] = { position: "relative", width: 56, height: 56, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
let obj2 = { position: "relative", width: 56, height: 56, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[5] = { position: "absolute", top: 0, left: 0, opacity: 0.6 };
createCacheKey[6] = { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 };
createCacheKey[7] = { position: "relative" };
let obj3 = { backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[8] = { position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", textAlign: "center", width: 24, height: 24, lineHeight: 24, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[9] = { flexDirection: "row", alignItems: "center", gap: 6 };
createCacheKey[10] = { width: 20, height: 20 };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj4 = { position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", textAlign: "center", width: 24, height: 24, lineHeight: 24, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
const result = require("set").fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = function ForwardPreview(message) {
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = callback3();
  let obj = useForwardPreviewContent;
  const forwardPreviewContent = obj.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  let checkpointData = null;
  if (contentMessage.components.length > 0) {
    checkpointData = null;
    if (contentMessage.components[0].type === tmp2(1956).ComponentType.CHECKPOINT_CARD) {
      checkpointData = contentMessage.components[0].checkpointData;
    }
  }
  let tmp6 = null;
  if (null != checkpointData) {
    let num = checkpointData.cardId;
    if (num == null) {
      num = 0;
    }
    tmp6 = tmp2(11213).CHECKPOINT_PERSONA_COLORS[num];
  }
  if (tmp6 != null) {
    const primaryColor = tmp6.primaryColor;
  }
  if (attachments.length > 0) {
    let tmp2Result = tmp2(12);
    const countByResult = tmp2Result.countBy(attachments, (proxy_url) => callback(table[13]).getMosaicMediaTypeForAttachment(proxy_url, true));
    let num2 = countByResult.IMAGE;
    if (num2 == null) {
      num2 = 0;
    }
    let num3 = countByResult.VIDEO;
    if (num3 == null) {
      num3 = 0;
    }
    if (num2 > 0) {
      if (num3 > 0) {
        const intl4 = tmp2(1236).intl;
        obj = { image_count: null, video_count: null };
        obj[0] = num2;
        obj[1] = num3;
        let formatToPlainStringResult = intl4.formatToPlainString(tmp2(1236).t.Lr0Top, obj);
        let AttachmentIcon = tmp2(11216).ImagesIcon;
      }
      if (num3 > 0) {
        if (length === num3) {
          obj = { style: null, children: null };
          const items = [, ];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          obj[0] = items;
          obj1 = { style: null, source: null, width: null, height: null };
          obj1[0] = tmp.videoThumbnail;
          const obj2 = { uri: null };
          let obj17 = getSrcWithWidthAndHeightDefault;
          obj2[0] = obj17.getMobileOptimizedSrc(attachments[0].proxy_url, c7, c7, "png");
          obj1[1] = obj2;
          obj1[2] = c7;
          obj1[3] = c7;
          const items1 = [callback(preloadDefault, obj1), ];
          const obj3 = { style: null, size: "md", color: "white" };
          obj3[0] = tmp.playIcon;
          items1[1] = callback(tmp2(10151).CirclePlayIcon, obj3);
          obj[1] = items1;
          let tmp7 = callback2(View, obj);
          let tmp8 = AttachmentIcon;
          let tmp9 = formatToPlainStringResult;
          const tmp28 = preloadDefault;
        }
      }
      if (length > 0) {
        const obj4 = { style: null, children: null };
        obj4[0] = tmp.attachmentPreview;
        const obj5 = { source: null, width: null, height: null };
        const obj6 = { uri: null };
        let obj13 = getSrcWithWidthAndHeightDefault;
        obj6[0] = obj13.getMobileOptimizedSrc(attachments[0].proxy_url, c7, c7);
        obj5[0] = obj6;
        obj5[1] = c7;
        obj5[2] = c7;
        obj4[1] = callback(preloadDefault, obj5);
        tmp7 = callback(View, obj4);
        tmp8 = AttachmentIcon;
        tmp9 = formatToPlainStringResult;
        const tmp22 = preloadDefault;
      } else {
        const first = embeds[0];
        let proxyURL;
        if (first != null) {
          const thumbnail = first.thumbnail;
          if (thumbnail != null) {
            proxyURL = thumbnail.proxyURL;
          }
        }
        tmp7 = null;
        tmp8 = AttachmentIcon;
        tmp9 = formatToPlainStringResult;
        if (null != proxyURL) {
          const obj7 = { style: null, children: null };
          obj7[0] = tmp.attachmentPreview;
          const obj8 = { source: null, width: null, height: null };
          let obj9 = { uri: null };
          obj9 = getSrcWithWidthAndHeightDefault;
          obj9[0] = obj9.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, c7, c7);
          obj8[0] = obj9;
          obj8[1] = c7;
          obj8[2] = c7;
          obj7[1] = callback(preloadDefault, obj8);
          tmp7 = callback(View, obj7);
          tmp8 = AttachmentIcon;
          tmp9 = formatToPlainStringResult;
          const tmp17 = preloadDefault;
        }
      }
    }
    if (num3 > 0) {
      const intl3 = tmp2(1236).intl;
      const obj10 = { count: null };
      obj10[0] = num3;
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1236).t.SJ6pPX, obj10);
      AttachmentIcon = tmp2(10151).CirclePlayIcon;
    } else if (num2 > 0) {
      const intl2 = tmp2(1236).intl;
      const obj11 = { count: null };
      obj11[0] = num2;
      if (1 === num2) {
        let ImagesIcon = tmp2(5001).ImageIcon;
      } else {
        ImagesIcon = tmp2(11216).ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.h4pFfU, obj11);
      const formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1236).t.h4pFfU, obj11);
    } else {
      const intl = tmp2(1236).intl;
      const obj12 = { count: null };
      obj12[0] = length;
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t["89ihS8"], obj12);
      AttachmentIcon = tmp2(10133).AttachmentIcon;
    }
  } else {
    tmp7 = null;
    tmp8 = null;
    tmp9 = null;
  }
  let tmp33 = tmp7;
  if (attachments.length > 1) {
    tmp33 = tmp7;
    if (null != tmp7) {
      obj13 = { shape: null, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
      obj13[0] = tmp2(8044).CutoutShape.RoundedRect;
      const obj14 = { style: null, children: null };
      obj14[0] = tmp.attachmentPreviewOverflow;
      const obj15 = { cutouts: null, children: null };
      const items2 = [obj13];
      obj15[0] = items2;
      obj15[1] = tmp7;
      const items3 = [callback(SolidCutoutDefault, obj15), ];
      const obj16 = { style: null, variant: "text-xs/semibold", color: "text-default", children: null };
      obj16[0] = tmp.overflowCount;
      const items4 = ["+", length - 1];
      obj16[3] = items4;
      items3[1] = callback2(tmp2(4442).Text, obj16);
      obj14[1] = items3;
      tmp33 = callback2(View, obj14);
    }
  }
  obj17 = { style: tmp.forwardPreview, children: null };
  const items5 = [callback(View, { style: tmp.quote }), , , ];
  const obj19 = { style: tmp.contentWrapper, children: null };
  let tmp36Result = null != checkpointData;
  if (tmp36Result) {
    const obj20 = { variant: "text-md/medium", children: null };
    const intl5 = tmp2(1236).intl;
    obj20[1] = intl5.string(messagesProxyDefault.goiR2u);
    tmp36Result = tmp36(tmp2(4442).Text, obj20);
  }
  const items6 = [tmp36Result, , ];
  tmp36Result = hasContent;
  if (hasContent) {
    const obj21 = { message: null, contentMessage: null, attachmentCount: null };
    obj21[0] = message;
    obj21[1] = contentMessage;
    obj21[2] = length;
    tmp36Result = tmp36(MessagePreview, obj21);
  }
  items6[1] = tmp36Result;
  let tmp34Result = length > 0;
  if (tmp34Result) {
    const obj22 = { style: null, children: null };
    obj22[0] = tmp.attachmentRow;
    let tmp36Result1 = null != tmp8;
    if (tmp36Result1) {
      let str2 = "custom";
      if (hasContent) {
        str2 = "sm";
      }
      const obj23 = { size: null, style: null, color: "text-muted" };
      obj23[0] = str2;
      let largeIcon = !hasContent;
      if (!hasContent) {
        largeIcon = tmp.largeIcon;
      }
      obj23[1] = largeIcon;
      tmp36Result1 = tmp36(tmp8, obj23);
    }
    const items7 = [tmp36Result1, ];
    let tmp36Result2 = null != tmp9;
    if (tmp36Result2) {
      let str3 = "text-md/medium";
      if (hasContent) {
        str3 = "text-sm/medium";
      }
      const obj24 = { variant: null, color: "text-muted", children: null };
      obj24[0] = str3;
      obj24[2] = tmp9;
      tmp36Result2 = tmp36(tmp2(4442).Text, obj24);
    }
    items7[1] = tmp36Result2;
    obj22[1] = items7;
    tmp34Result = tmp34(tmp35, obj22);
  }
  items6[2] = tmp34Result;
  obj19[1] = items6;
  items5[1] = callback2(View, obj19);
  items5[2] = tmp33;
  let tmp36Result3 = null != checkpointData;
  if (tmp36Result3) {
    const obj25 = { style: null, children: null };
    obj25[0] = tmp.attachmentPreview;
    const obj26 = { style: null, width: null, height: null, source: null };
    const obj27 = { backgroundColor: null };
    obj27[0] = primaryColor;
    obj26[0] = obj27;
    obj26[1] = c7;
    obj26[2] = c7;
    tmp2Result = tmp2(7999);
    let num5 = checkpointData.cardId;
    if (num5 == null) {
      num5 = 0;
    }
    const obj28 = { uri: null };
    obj28[0] = tmp2Result.getCardAssetUrl(num5);
    obj26[3] = obj28;
    obj25[1] = tmp36(preloadDefault, obj26);
    tmp36Result3 = tmp36(tmp35, obj25);
    const tmp46 = preloadDefault;
  }
  items5[3] = tmp36Result3;
  obj17[1] = items5;
  return callback2(View, obj17);
};