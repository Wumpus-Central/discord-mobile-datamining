// discord_app/modules/forwarding/native/ForwardPreview.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import utils_ImageUtilsDefault from "../../../utils/native/ImageUtils.tsx";
import useThemeDefault from "../../../hooks/useTheme.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import checkpoint_CheckpointMessageComponentUtils from "../../checkpoint/CheckpointMessageComponentUtils.tsx";
import ImageIcon from "../../../design/components/Icon/native/redesign/generated/ImageIcon.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import RowGeneratorTypes from "../../messages/native/renderer/RowGeneratorTypes.tsx";
import ChatItemDefault from "../../../components_native/chat/ChatItem.tsx";
import CirclePlayIcon from "../../../design/components/Icon/native/redesign/generated/CirclePlayIcon.tsx";
import ClipView from "../../../design/components/Icon/native/ClipView.tsx";
import AttachmentIcon2 from "../../../design/components/Icon/native/redesign/generated/AttachmentIcon.tsx";
import ForwardPreviewUtils from "../ForwardPreviewUtils.tsx";
import MosaicMediaType from "../../messages/MosaicMediaType.tsx";
import ImagesIcon2 from "../../../design/components/Icon/native/redesign/generated/ImagesIcon.tsx";
import CheckpointForwardPreviewDefault from "../../checkpoint/native/components/CheckpointForwardPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const ClipViewDefault = ClipView;

require = fn;
function MessagePreview(content) {
  ({ message, attachmentCount } = content);
  importDefault = undefined;
  if (attachmentCount > 0) {
    let TEXT_SUBTLE = tmp(576).colors.TEXT_DEFAULT;
  } else {
    TEXT_SUBTLE = tmp(576).colors.TEXT_SUBTLE;
  }
  const tmp3 = useThemeDefault();
  const tmp4 = attachmentCount(4836).createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp3);
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
  const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback, message: null, rowGenerator: null };
  let obj = attachmentCount(4836);
  const obj3 = { messageSnapshots: [], content: content.contentMessage.content };
  obj2.message = message.merge(obj3);
  obj2.rowGenerator = memo;
  return closure_5(ChatItemDefault, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 56;
const createStyles = fn(4836);
let obj2 = {
  forwardPreview: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" },
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
let size = { width: 4, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: 2 };
obj2.quote = size;
obj2.contentWrapper = { flexDirection: "column", flex: 1, paddingVertical: 4, gap: 6 };
let size1 = { position: "relative", width: 56, height: 56, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.attachmentPreview = size1;
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" };
obj2.attachmentPreviewVideo = { backgroundColor: nativeDefault.colors.BLACK };
obj2.videoThumbnail = { position: "absolute", top: 0, left: 0, opacity: 0.6 };
obj2.playIcon = { position: "absolute", top: 0, left: 0, margin: 16, zIndex: 100 };
obj2.attachmentPreviewOverflow = { position: "relative" };
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
obj2.overflowCount = size2;
obj2.attachmentRow = { flexDirection: "row", alignItems: "center", gap: 6 };
obj2.largeIcon = { width: 20, height: 20 };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/native/ForwardPreview.tsx");

export const ForwardPreview = function ForwardPreview(message) {
  message = message.message;
  ({ channel, forwardOptions } = message);
  const tmp = closure_8();
  const forwardPreviewContent = ForwardPreviewUtils.useForwardPreviewContent({ message, channel, forwardOptions });
  ({ attachments, embeds, hasContent, contentMessage } = forwardPreviewContent);
  const checkpointDataFromMessage =
    checkpoint_CheckpointMessageComponentUtils.getCheckpointDataFromMessage(contentMessage);
  if (attachments.length > 0) {
    const countByResult = _mod12.countBy(attachments, (proxy_url) =>
      MosaicMediaType.getMosaicMediaTypeForAttachment(proxy_url, true),
    );
    let num = countByResult.IMAGE;
    if (num == null) {
      num = 0;
    }
    let num2 = countByResult.VIDEO;
    if (num2 == null) {
      num2 = 0;
    }
    if (num > 0) {
      if (num2 > 0) {
        const intl4 = util.intl;
        const obj3 = { image_count: num, video_count: num2 };
        let formatToPlainStringResult = intl4.formatToPlainString(util.t.Lr0Top, obj3);
        let AttachmentIcon = ImagesIcon2.ImagesIcon;
      }
      if (num2 > 0) {
        if (length === num2) {
          const obj4 = { style: null, children: null };
          const items = [,];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          obj4.style = items;
          const size = { style: tmp.videoThumbnail, source: null, width: null, height: null };
          const obj5 = { uri: null };
          const obj19 = utils_ImageUtilsDefault;
          obj5.uri = obj19.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png");
          size.source = obj5;
          size.width = v56;
          size.height = v56;
          const items1 = [hasOwnProperty(FastImageDefault, size)];
          const obj6 = { style: tmp.playIcon, size: "md", color: "white" };
          items1[1] = hasOwnProperty(CirclePlayIcon.CirclePlayIcon, obj6);
          obj4.children = items1;
          let tmp6 = timestampProducer(View, obj4);
          let tmp7 = AttachmentIcon;
          let tmp8 = formatToPlainStringResult;
        }
      }
      if (length > 0) {
        const obj7 = { style: tmp.attachmentPreview, children: null };
        const size1 = { source: null, width: null, height: null };
        const obj8 = { uri: null };
        const tmp22 = FastImageDefault;
        obj8.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56);
        size1.source = obj8;
        size1.width = v56;
        size1.height = v56;
        obj7.children = hasOwnProperty(tmp22, size1);
        tmp6 = hasOwnProperty(View, obj7);
        tmp7 = AttachmentIcon;
        tmp8 = formatToPlainStringResult;
      } else {
        const first = embeds[0];
        let proxyURL;
        if (first != null) {
          const thumbnail = first.thumbnail;
          if (thumbnail != null) {
            proxyURL = thumbnail.proxyURL;
          }
        }
        tmp6 = null;
        tmp7 = AttachmentIcon;
        tmp8 = formatToPlainStringResult;
        if (null != proxyURL) {
          const obj9 = { style: tmp.attachmentPreview, children: null };
          const size2 = { source: null, width: null, height: null };
          const obj10 = { uri: null };
          const tmp17 = FastImageDefault;
          obj10.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56);
          size2.source = obj10;
          size2.width = v56;
          size2.height = v56;
          obj9.children = hasOwnProperty(tmp17, size2);
          tmp6 = hasOwnProperty(View, obj9);
          tmp7 = AttachmentIcon;
          tmp8 = formatToPlainStringResult;
        }
      }
    }
    if (num2 > 0) {
      const intl3 = util.intl;
      const obj12 = { count: num2 };
      formatToPlainStringResult = intl3.formatToPlainString(util.t.SJ6pPX, obj12);
      AttachmentIcon = CirclePlayIcon.CirclePlayIcon;
    } else if (num > 0) {
      const intl2 = util.intl;
      const obj13 = { count: num };
      if (1 === num) {
        let ImagesIcon = ImageIcon.ImageIcon;
      } else {
        ImagesIcon = ImagesIcon2.ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = intl2.formatToPlainString(util.t.h4pFfU, obj13);
      const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.h4pFfU, obj13);
    } else {
      const intl = util.intl;
      const obj14 = { count: length };
      formatToPlainStringResult = intl.formatToPlainString(util.t["89ihS8"], obj14);
      AttachmentIcon = AttachmentIcon2.AttachmentIcon;
    }
    const tmp2Result = _mod12;
  } else {
    tmp6 = null;
    tmp7 = null;
    tmp8 = null;
  }
  let tmp33 = tmp6;
  if (attachments.length > 1) {
    tmp33 = tmp6;
    if (null != tmp6) {
      const size3 = { shape: ClipView.CutoutShape.RoundedRect, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
      const obj16 = { style: tmp.attachmentPreviewOverflow, children: null };
      const obj17 = { cutouts: null, children: null };
      const items2 = [size3];
      obj17.cutouts = items2;
      obj17.children = tmp6;
      const items3 = [hasOwnProperty(ClipViewDefault, obj17)];
      const obj18 = { style: tmp.overflowCount, variant: "text-xs/semibold", color: "text-default", children: null };
      const items4 = ["+", length - 1];
      obj18.children = items4;
      items3[1] = timestampProducer(Text_Text.Text, obj18);
      obj16.children = items3;
      tmp33 = timestampProducer(View, obj16);
    }
  }
  const obj20 = { style: tmp.forwardPreview, children: null };
  const items5 = [hasOwnProperty(View, { style: tmp.quote }), , ,];
  const obj22 = { style: tmp.contentWrapper, children: null };
  let tmp36Result = null != checkpointDataFromMessage;
  if (tmp36Result) {
    const obj23 = {
      variant: "text-md/medium",
      children: checkpoint_CheckpointMessageComponentUtils.getCheckpointLabel(checkpointDataFromMessage),
    };
    tmp36Result = hasOwnProperty(Text_Text.Text, obj23);
    const tmp2Result2 = checkpoint_CheckpointMessageComponentUtils;
  }
  const items6 = [tmp36Result, ,];
  let tmp36Result5 = hasContent;
  if (hasContent) {
    const obj24 = { message, contentMessage, attachmentCount: length };
    tmp36Result5 = hasOwnProperty(MessagePreview, obj24);
  }
  items6[1] = tmp36Result5;
  let tmp34Result = length > 0;
  if (tmp34Result) {
    const obj25 = { style: tmp.attachmentRow, children: null };
    let tmp36Result6 = null != tmp7;
    if (tmp36Result6) {
      let str2 = "custom";
      if (hasContent) {
        str2 = "sm";
      }
      const obj26 = { size: str2, style: null, color: "text-muted" };
      let largeIcon = !hasContent;
      if (!hasContent) {
        largeIcon = tmp.largeIcon;
      }
      obj26.style = largeIcon;
      tmp36Result6 = hasOwnProperty(tmp7, obj26);
    }
    const items7 = [tmp36Result6];
    let tmp36Result7 = null != tmp8;
    if (tmp36Result7) {
      let str3 = "text-md/medium";
      if (hasContent) {
        str3 = "text-sm/medium";
      }
      const obj27 = { variant: str3, color: "text-muted", children: tmp8 };
      tmp36Result7 = hasOwnProperty(Text_Text.Text, obj27);
    }
    items7[1] = tmp36Result7;
    obj25.children = items7;
    tmp34Result = timestampProducer(View, obj25);
  }
  items6[2] = tmp34Result;
  obj22.children = items6;
  items5[1] = timestampProducer(View, obj22);
  items5[2] = tmp33;
  let tmp36Result8 = null != checkpointDataFromMessage;
  if (tmp36Result8) {
    const obj28 = { style: tmp.attachmentPreview, children: null };
    const obj29 = { checkpointData: checkpointDataFromMessage };
    obj28.children = hasOwnProperty(CheckpointForwardPreviewDefault, obj29);
    tmp36Result8 = hasOwnProperty(View, obj28);
  }
  items5[3] = tmp36Result8;
  obj20.children = items5;
  return timestampProducer(View, obj20);
};
