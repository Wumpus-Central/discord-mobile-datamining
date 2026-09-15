// === Module 11828: ForwardPreview ===

// Module 11828 (ForwardPreview)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import utils_ImageUtilsDefault from "utils/ImageUtils" /* 1477 */;
import Server from "Server" /* 1895 */;
import _modDef2915 from "module_2915" /* 2915 */;
import useThemeDefault from "useTheme" /* 4574 */;
import Text_Text from "Text/Text" /* 4635 */;
import ImageIcon from "ImageIcon" /* 5171 */;
import FastImageDefault from "FastImage" /* 5672 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8246 */;
import CheckpointUtils from "CheckpointUtils" /* 8263 */;
import ChatItemDefault from "ChatItem" /* 8778 */;
import ClipView from "ClipView" /* 8943 */;
import AttachmentIcon2 from "AttachmentIcon" /* 10242 */;
import CirclePlayIcon from "CirclePlayIcon" /* 10262 */;
import ForwardPreviewUtils from "ForwardPreviewUtils" /* 11829 */;
import CheckpointColors from "CheckpointColors" /* 11830 */;
import MosaicMediaType from "MosaicMediaType" /* 11831 */;
import ImagesIcon2 from "ImagesIcon" /* 11833 */;
import noop from "module_19" /* 19 */;

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
  const tmp4 = attachmentCount(4639).createNativeStyleProperties({ seeMoreLabelColor: TEXT_SUBTLE })(tmp3);
  importDefault = tmp4;
  const items = [tmp4.seeMoreLabelColor, attachmentCount];
  const callback = noop.useCallback((message) => {
    message.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
    let num = 2;
    if (attachmentCount > 0) {
      num = 1;
    }
    message.truncation = { numberOfLines: num, expandable: false, seeMoreLabel: "...", seeMoreLabelColor: closure_1.seeMoreLabelColor };
    message.message.edited = "";
  }, items);
  const memo = noop.useMemo(() => {
    const obj = new closure_1(dependencyMap[7])();
    obj.setOptions({ renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: true, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false });
    return obj;
  }, []);
  const obj2 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: callback, message: null, rowGenerator: null };
  let obj = attachmentCount(4639);
  const obj3 = { messageSnapshots: [], content: content.contentMessage.content };
  obj2.message = message.merge(obj3);
  obj2.rowGenerator = memo;
  return closure_5(ChatItemDefault, obj2);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = 56;
const createStyles = fn(4639);
let obj2 = { forwardPreview: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center" }, quote: null, contentWrapper: null, attachmentPreview: null, attachmentPreviewVideo: null, videoThumbnail: null, playIcon: null, attachmentPreviewOverflow: null, overflowCount: null, attachmentRow: null, largeIcon: null };
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
let size2 = { position: "absolute", bottom: 0, right: 0, alignItems: "center", justifyContent: "center", textAlign: "center", width: 24, height: 24, lineHeight: 24, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
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
  let checkpointData = null;
  if (contentMessage.components.length > 0) {
    checkpointData = null;
    if (contentMessage.components[0].type === Server.ComponentType.CHECKPOINT_CARD) {
      checkpointData = contentMessage.components[0].checkpointData;
    }
  }
  let tmp6 = null;
  if (null != checkpointData) {
    let num = checkpointData.cardId;
    if (num == null) {
      num = 0;
    }
    tmp6 = CheckpointColors.CHECKPOINT_PERSONA_COLORS[num];
  }
  if (tmp6 != null) {
    const primaryColor = tmp6.primaryColor;
  }
  if (attachments.length > 0) {
    const countByResult = _mod12.countBy(attachments, (proxy_url) => MosaicMediaType.getMosaicMediaTypeForAttachment(proxy_url, true));
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
        const intl4 = util.intl;
        const obj2 = { image_count: num2, video_count: num3 };
        let formatToPlainStringResult = intl4.formatToPlainString(util.t.Lr0Top, obj2);
        let AttachmentIcon = ImagesIcon2.ImagesIcon;
      }
      if (num3 > 0) {
        if (length === num3) {
          const obj3 = { style: null, children: null };
          const items = [, ];
          ({ attachmentPreview: arr[0], attachmentPreviewVideo: arr[1] } = tmp);
          obj3.style = items;
          const size = { style: tmp.videoThumbnail, source: null, width: null, height: null };
          const obj4 = { uri: null };
          const obj18 = utils_ImageUtilsDefault;
          obj4.uri = obj18.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56, "png");
          size.source = obj4;
          size.width = v56;
          size.height = v56;
          const items1 = [hasOwnProperty(FastImageDefault, size), ];
          const obj5 = { style: tmp.playIcon, size: "md", color: "white" };
          items1[1] = hasOwnProperty(CirclePlayIcon.CirclePlayIcon, obj5);
          obj3.children = items1;
          let tmp7 = timestampProducer(View, obj3);
          let tmp8 = AttachmentIcon;
          let tmp9 = formatToPlainStringResult;
        }
      }
      if (length > 0) {
        const obj6 = { style: tmp.attachmentPreview, children: null };
        const size1 = { source: null, width: null, height: null };
        const obj7 = { uri: null };
        const tmp22 = FastImageDefault;
        obj7.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(attachments[0].proxy_url, v56, v56);
        size1.source = obj7;
        size1.width = v56;
        size1.height = v56;
        obj6.children = hasOwnProperty(tmp22, size1);
        tmp7 = hasOwnProperty(View, obj6);
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
          const obj8 = { style: tmp.attachmentPreview, children: null };
          const size2 = { source: null, width: null, height: null };
          const obj9 = { uri: null };
          const tmp17 = FastImageDefault;
          obj9.uri = utils_ImageUtilsDefault.getMobileOptimizedSrc(embeds[0].thumbnail.proxyURL, v56, v56);
          size2.source = obj9;
          size2.width = v56;
          size2.height = v56;
          obj8.children = hasOwnProperty(tmp17, size2);
          tmp7 = hasOwnProperty(View, obj8);
          tmp8 = AttachmentIcon;
          tmp9 = formatToPlainStringResult;
        }
      }
    }
    if (num3 > 0) {
      const intl3 = util.intl;
      const obj11 = { count: num3 };
      formatToPlainStringResult = intl3.formatToPlainString(util.t.SJ6pPX, obj11);
      AttachmentIcon = CirclePlayIcon.CirclePlayIcon;
    } else if (num2 > 0) {
      const intl2 = util.intl;
      const obj12 = { count: num2 };
      if (1 === num2) {
        let ImagesIcon = ImageIcon.ImageIcon;
      } else {
        ImagesIcon = ImagesIcon2.ImagesIcon;
      }
      AttachmentIcon = ImagesIcon;
      formatToPlainStringResult = intl2.formatToPlainString(util.t.h4pFfU, obj12);
      const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.h4pFfU, obj12);
    } else {
      const intl = util.intl;
      const obj13 = { count: length };
      formatToPlainStringResult = intl.formatToPlainString(util.t["89ihS8"], obj13);
      AttachmentIcon = AttachmentIcon2.AttachmentIcon;
    }
    const tmp2Result = _mod12;
  } else {
    tmp7 = null;
    tmp8 = null;
    tmp9 = null;
  }
  let tmp33 = tmp7;
  if (attachments.length > 1) {
    tmp33 = tmp7;
    if (null != tmp7) {
      const size3 = { shape: ClipView.CutoutShape.RoundedRect, x: 28, y: 28, width: 32, height: 32, cornerRadius: 12 };
      const obj15 = { style: tmp.attachmentPreviewOverflow, children: null };
      const obj16 = { cutouts: null, children: null };
      const items2 = [size3];
      obj16.cutouts = items2;
      obj16.children = tmp7;
      const items3 = [hasOwnProperty(ClipViewDefault, obj16), ];
      const obj17 = { style: tmp.overflowCount, variant: "text-xs/semibold", color: "text-default", children: null };
      const items4 = ["+", length - 1];
      obj17.children = items4;
      items3[1] = timestampProducer(Text_Text.Text, obj17);
      obj15.children = items3;
      tmp33 = timestampProducer(View, obj15);
    }
  }
  const obj19 = { style: tmp.forwardPreview, children: null };
  const items5 = [hasOwnProperty(View, { style: tmp.quote }), , , ];
  const obj21 = { style: tmp.contentWrapper, children: null };
  let tmp36Result = null != checkpointData;
  if (tmp36Result) {
    const obj22 = { variant: "text-md/medium", children: null };
    const intl5 = util.intl;
    obj22.children = intl5.string(_modDef2915.goiR2u);
    tmp36Result = hasOwnProperty(Text_Text.Text, obj22);
  }
  const items6 = [tmp36Result, , ];
  let tmp36Result5 = hasContent;
  if (hasContent) {
    const obj23 = { message, contentMessage, attachmentCount: length };
    tmp36Result5 = hasOwnProperty(MessagePreview, obj23);
  }
  items6[1] = tmp36Result5;
  let tmp34Result = length > 0;
  if (tmp34Result) {
    const obj24 = { style: tmp.attachmentRow, children: null };
    let tmp36Result6 = null != tmp8;
    if (tmp36Result6) {
      let str2 = "custom";
      if (hasContent) {
        str2 = "sm";
      }
      const obj25 = { size: str2, style: null, color: "text-muted" };
      let largeIcon = !hasContent;
      if (!hasContent) {
        largeIcon = tmp.largeIcon;
      }
      obj25.style = largeIcon;
      tmp36Result6 = hasOwnProperty(tmp8, obj25);
    }
    const items7 = [tmp36Result6, ];
    let tmp36Result7 = null != tmp9;
    if (tmp36Result7) {
      let str3 = "text-md/medium";
      if (hasContent) {
        str3 = "text-sm/medium";
      }
      const obj26 = { variant: str3, color: "text-muted", children: tmp9 };
      tmp36Result7 = hasOwnProperty(Text_Text.Text, obj26);
    }
    items7[1] = tmp36Result7;
    obj24.children = items7;
    tmp34Result = timestampProducer(View, obj24);
  }
  items6[2] = tmp34Result;
  obj21.children = items6;
  items5[1] = timestampProducer(View, obj21);
  items5[2] = tmp33;
  let tmp36Result8 = null != checkpointData;
  if (tmp36Result8) {
    const obj27 = { style: tmp.attachmentPreview, children: null };
    const size4 = { style: null, width: null, height: null, source: null };
    const obj28 = { backgroundColor: primaryColor };
    size4.style = obj28;
    size4.width = v56;
    size4.height = v56;
    const tmp46 = FastImageDefault;
    let num5 = checkpointData.cardId;
    if (num5 == null) {
      num5 = 0;
    }
    const obj29 = { uri: CheckpointUtils.getCardAssetUrl(num5) };
    size4.source = obj29;
    obj27.children = hasOwnProperty(tmp46, size4);
    tmp36Result8 = hasOwnProperty(View, obj27);
    const tmp2Result2 = CheckpointUtils;
  }
  items5[3] = tmp36Result8;
  obj19.children = items5;
  return timestampProducer(View, obj19);
};