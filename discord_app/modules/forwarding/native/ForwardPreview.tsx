// discord_app/modules/forwarding/native/ForwardPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ImageUtilsDefault from "../../../utils/native/ImageUtils.tsx";
import _modDef2914 from "../../checkpoint/Checkpoint.messages.js";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import RowGeneratorTypes from "../../messages/native/renderer/RowGeneratorTypes.tsx";
import ChatItemDefault from "../../../components_native/chat/ChatItem.tsx";
import ClipViewDefault from "../../../design/components/Icon/native/ClipView.tsx";
import ForwardPreviewUtils from "../ForwardPreviewUtils.tsx";
import MosaicMediaType from "../../messages/MosaicMediaType.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function MessagePreview(content) {
  ({ message, attachmentCount } = content);
  importDefault = undefined;
  if (attachmentCount > 0) {
    let TEXT_SUBTLE = tmp(576).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp(576).colors.TEXT_SUBTLE;
  }
  let obj = attachmentCount(4560);
  const tmp4 = obj.createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(useThemeDefault());
  importDefault = tmp4;
  const items = [tmp4.seeMoreLabelColor, attachmentCount];
  const callback = noop.useCallback((message) => {
    message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    message.truncation = {
      numberOfLines: num,
      expandable: false,
      seeMoreLabel: "...",
      seeMoreLabelColor: closure_1.seeMoreLabelColor,
    };
    message.message.edited = "";
  }, items);
  const memo = noop.useMemo(() => {
    const obj = new closure_1(dependencyMap[7])();
    obj.setOptions({
      renderEmbeds: false,
      renderReactions: false,
      inlineEmbedMedia: false,
      inlineAttachmentMedia: false,
      animateEmoji: true,
      gifAutoPlay: false,
      timestampHourCycle: 0,
      renderCodedLinks: false,
      renderGiftCode: false,
      renderActivityInstanceEmbed: false,
      renderActivityInviteEmbed: false,
      renderComponents: false,
      renderThreadEmbeds: false,
      renderReplies: false,
      renderCommunicationDisabled: false,
      renderAttachments: false,
      renderExecutedCommands: false,
      renderPolls: false,
      renderSharedClientTheme: false,
      renderForumPostActions: false,
      ignoreMentioned: false,
      ignoreEmbedDescriptionCache: false,
      forceHideSimpleEmbedContent: false,
      enableSwipeActions: false,
      useAlternateEmbedColors: false,
    });
    return obj;
  }, []);
  obj = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback, message: null, rowGenerator: null };
  obj = { messageSnapshots: [], content: content.contentMessage.content };
  const tmp3 = useThemeDefault();
  obj.message = message.merge(obj);
  obj.rowGenerator = memo;
  return closure_5(ChatItemDefault, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 56;
fn(4560);
let createStyles = {
  forwardPreview: null,
  quote: null,
  contentWrapper: null,
  attachmentPreview: null,
  attachmentPreviewVideo: null,
  videoThumbnail: null,
  playIcon: null,
  attachmentPreviewOverflow: null,
  overflowCount: null,
  attachmentRow: null,
  largeIcon: null,
};
createStyles = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
createStyles.forwardPreview = createStyles;
let size = { width: 4, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
createStyles.quote = size;
createStyles.contentWrapper = { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 };
let size1 = { position: "relative", width: 56, height: 56, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.attachmentPreview = size1;
createStyles.attachmentPreviewVideo = { backgroundColor: nativeDefault.colors.BLACK };
createStyles.videoThumbnail = { position: "absolute", top: 0, left: 0, opacity: 0.6 };
createStyles.playIcon = { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 };
createStyles.attachmentPreviewOverflow = { position: "relative" };
let size2 = {
  position: "absolute",
  bottom: 0,
  right: 0,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: 24,
  height: 24,
  lineHeight: 24,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
};
createStyles.overflowCount = size2;
createStyles.attachmentRow = { flexDirection: "row", alignItems: "center", gap: 6 };
createStyles.largeIcon = { width: 20, height: 20 };
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = function ForwardPreview(message) {
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = closure_8();
  let obj = ForwardPreviewUtils;
  const forwardPreviewContent = obj.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  let checkpointData = null;
  if (contentMessage.components.length > 0) {
    checkpointData = null;
    if (contentMessage.components[0].type === tmp2(1894).ComponentType.CHECKPOINT_CARD) {
      checkpointData = contentMessage.components[0].checkpointData;
    }
  }
  let tmp6 = null;
  if (null != checkpointData) {
    let num = checkpointData.cardId;
    if (num == null) {
      num = 0;
    }
    tmp6 = tmp2(11696).CHECKPOINT_PERSONA_COLORS[num];
  }
  if (tmp6 != null) {
    const primaryColor = tmp6.primaryColor;
  }
  if (attachments.length > 0) {
    let tmp2Result = tmp2(12);
    const countByResult = tmp2Result.countBy(attachments, (proxy_url) =>
      MosaicMediaType.getMosaicMediaTypeForAttachment(proxy_url, true),
    );
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
        const intl4 = tmp2(1114).intl;
        obj = { image_count: num2, video_count: num3 };
        let formatToPlainStringResult = intl4.formatToPlainString(tmp2(1114).t.Lr0Top, obj);
        let AttachmentIcon = tmp2(11699).ImagesIcon;
      }
      if (num3 > 0) {
        if (length === num3) {
          obj = { style: null, children: null };
          const items = [,];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          obj.style = items;
          const size = { style: tmp.videoThumbnail, source: null, width: null, height: null };
          const obj1 = { uri: null };
          let obj17 = utils_ImageUtilsDefault;
          obj1.uri = obj17.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png");
          size.source = obj1;
          size.width = v56;
          size.height = v56;
          const items1 = [hasOwnProperty(FastImageDefault, size)];
          const obj2 = { style: tmp.playIcon, size: "md", color: "white" };
          items1[1] = hasOwnProperty(tmp2(10132).CirclePlayIcon, obj2);
          obj.children = items1;
          let tmp7 = timestampProducer(View, obj);
          let tmp8 = AttachmentIcon;
          let tmp9 = formatToPlainStringResult;
        }
      }
      if (length > 0) {
        const obj3 = { style: tmp.attachmentPreview, children: null };
        const size1 = { source: null, width: null, height: null };
        const obj4 = { uri: null };
        let obj13 = utils_ImageUtilsDefault;
        obj4.uri = obj13.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56);
        size1.source = obj4;
        size1.width = v56;
        size1.height = v56;
        obj3.children = hasOwnProperty(FastImageDefault, size1);
        tmp7 = hasOwnProperty(View, obj3);
        tmp8 = AttachmentIcon;
        tmp9 = formatToPlainStringResult;
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
          const obj5 = { style: tmp.attachmentPreview, children: null };
          const size2 = { source: null, width: null, height: null };
          const obj6 = { uri: null };
          let obj9 = utils_ImageUtilsDefault;
          obj6.uri = obj9.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56);
          size2.source = obj6;
          size2.width = v56;
          size2.height = v56;
          obj5.children = hasOwnProperty(FastImageDefault, size2);
          tmp7 = hasOwnProperty(View, obj5);
          tmp8 = AttachmentIcon;
          tmp9 = formatToPlainStringResult;
        }
      }
    }
    if (num3 > 0) {
      const intl3 = tmp2(1114).intl;
      const obj7 = { count: num3 };
      formatToPlainStringResult = intl3.formatToPlainString(tmp2(1114).t.SJ6pPX, obj7);
      AttachmentIcon = tmp2(10132).CirclePlayIcon;
    } else if (num2 > 0) {
      const intl2 = tmp2(1114).intl;
      const obj8 = { count: num2 };
      if (1 === num2) {
        let ImagesIcon = tmp2(5087).ImageIcon;
      } else {
        ImagesIcon = tmp2(11699).ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.h4pFfU, obj8);
      const formatToPlainStringResult1 = intl2.formatToPlainString(tmp2(1114).t.h4pFfU, obj8);
    } else {
      const intl = tmp2(1114).intl;
      obj9 = { count: length };
      formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t["89ihS8"], obj9);
      AttachmentIcon = tmp2(10112).AttachmentIcon;
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
      const size3 = {
        shape: tmp2(8813).CutoutShape.RoundedRect,
        x: 28,
        y: 28,
        width: 32,
        height: 32,
        cornerRadius: 12,
      };
      const obj10 = { style: tmp.attachmentPreviewOverflow, children: null };
      const obj11 = { cutouts: null, children: null };
      const items2 = [size3];
      obj11.cutouts = items2;
      obj11.children = tmp7;
      const items3 = [hasOwnProperty(ClipViewDefault, obj11)];
      const obj12 = { style: tmp.overflowCount, variant: "text-xs/semibold", color: "text-default", children: null };
      const items4 = ["+", length - 1];
      obj12.children = items4;
      items3[1] = timestampProducer(tmp2(4556).Text, obj12);
      obj10.children = items3;
      tmp33 = timestampProducer(View, obj10);
    }
  }
  obj13 = { style: tmp.forwardPreview, children: null };
  const items5 = [hasOwnProperty(View, { style: tmp.quote }), , ,];
  const obj15 = { style: tmp.contentWrapper, children: null };
  let tmp36Result = null != checkpointData;
  if (tmp36Result) {
    const obj16 = { variant: "text-md/medium", children: null };
    const intl5 = tmp2(1114).intl;
    obj16.children = intl5.string(_modDef2914.goiR2u);
    tmp36Result = tmp36(tmp2(4556).Text, obj16);
  }
  const items6 = [tmp36Result, ,];
  tmp36Result = hasContent;
  if (hasContent) {
    obj17 = { message, contentMessage, attachmentCount: length };
    tmp36Result = tmp36(MessagePreview, obj17);
  }
  items6[1] = tmp36Result;
  let tmp34Result = length > 0;
  if (tmp34Result) {
    const obj18 = { style: tmp.attachmentRow, children: null };
    let tmp36Result1 = null != tmp8;
    if (tmp36Result1) {
      let str2 = "custom";
      if (hasContent) {
        str2 = "sm";
      }
      const obj19 = { size: str2, style: null, color: "text-muted" };
      let largeIcon = !hasContent;
      if (!hasContent) {
        largeIcon = tmp.largeIcon;
      }
      obj19.style = largeIcon;
      tmp36Result1 = tmp36(tmp8, obj19);
    }
    const items7 = [tmp36Result1];
    let tmp36Result2 = null != tmp9;
    if (tmp36Result2) {
      let str3 = "text-md/medium";
      if (hasContent) {
        str3 = "text-sm/medium";
      }
      const obj20 = { variant: str3, color: "text-muted", children: tmp9 };
      tmp36Result2 = tmp36(tmp2(4556).Text, obj20);
    }
    items7[1] = tmp36Result2;
    obj18.children = items7;
    tmp34Result = tmp34(tmp35, obj18);
  }
  items6[2] = tmp34Result;
  obj15.children = items6;
  items5[1] = timestampProducer(View, obj15);
  items5[2] = tmp33;
  let tmp36Result3 = null != checkpointData;
  if (tmp36Result3) {
    const obj21 = { style: tmp.attachmentPreview, children: null };
    const size4 = { style: null, width: null, height: null, source: null };
    const obj22 = { backgroundColor: primaryColor };
    size4.style = obj22;
    size4.width = v56;
    size4.height = v56;
    tmp2Result = tmp2(8143);
    let num5 = checkpointData.cardId;
    if (num5 == null) {
      num5 = 0;
    }
    const obj23 = { uri: tmp2Result.getCardAssetUrl(num5) };
    size4.source = obj23;
    obj21.children = tmp36(FastImageDefault, size4);
    tmp36Result3 = tmp36(tmp35, obj21);
  }
  items5[3] = tmp36Result3;
  obj13.children = items5;
  return timestampProducer(View, obj13);
};
