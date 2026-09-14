// === Module 8452: MediaShareActions ===

// Module 8452 (MediaShareActions)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import useChatLayout from "useChatLayout" /* 4497 */;
import DownloadIcon from "DownloadIcon" /* 4585 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import transitionToChannel from "transitionToChannel" /* 4647 */;
import MediaFormatTesters from "MediaFormatTesters" /* 4786 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5162 */;
import ActionSheet from "ActionSheet" /* 7300 */;
import ActionSheetRow from "ActionSheetRow" /* 7302 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 8379 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8383 */;
import showShareActionSheet from "showShareActionSheet" /* 8479 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8488 */;
import ShareIcon from "ShareIcon" /* 9182 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11810 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11818 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 11866 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 13087 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8453 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import MessageStore from "MessageStore" /* 4857 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8478 */;

require = fn;
function useMediaShareActions(source) {
  source = source.source;
  let disableDownload = source.disableDownload;
  const shareable = source.shareable;
  let obscure;
  let action;
  let videoSourceType;
  const channelId = source.channelId;
  const messageId = source.messageId;
  let items = [obscure, messageId, action];
  let items1 = [channelId, messageId];
  const stateFromStores = source(shareable[8]).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != channelId) {
      tmp2 = null;
      if (null != messageId) {
        let message = MessageStore.getMessage(tmp, messageId);
        if (message == null) {
          message = MessagePreviewStore.getMessage(messageId);
        }
        if (message == null) {
          message = ICYMIStore.getMessage(messageId);
        }
        tmp2 = message;
      }
    }
    return tmp2;
  }, items1);
  let obj = source(shareable[8]);
  const tmp = source;
  let tmp2 = shareable;
  let result = source(shareable[9]).shouldAgeVerifyForExplicitMedia();
  let obj2 = source(shareable[9]);
  obscure = source(shareable[10]).getAttachmentObscurityProps({ attachment: source, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: 0, shouldAgeVerify: result }).obscure;
  const items2 = [source];
  action = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != source.videoURI) {
      const result = MediaSourceUtil.downloadMediaAssetWithContentType(source.videoURI, constants2.VIDEO, source.contentType);
    } else if (null != source.sourceURI) {
      const result1 = MediaFormatTesters.urlMatchesFileExtension(source.sourceURI, React7);
      const result2 = MediaSourceUtil.downloadMediaAssetWithContentType(source.sourceURI, result1 ? constants2.GIF : constants2.IMAGE, source.contentType);
    }
  }, items2);
  const items3 = [source];
  const callback1 = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    showShareActionSheet.showShareActionSheet({ source }, constants.MEDIA_VIEWER);
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerShareButtonTapped();
  }, items3);
  const items4 = [source];
  const callback2 = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != source.sourceURI) {
      const obj3 = {
        href: tmp3.sourceURI,
        onConfirm() {
            disableDownload(shareable[17]).openURL(sourceURI.sourceURI);
          }
      };
      MaskedLinkUtils.handleClick(obj3);
    }
  }, items4);
  const items5 = [stateFromStores, source];
  const callback3 = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = source.attachmentId;
        if (null != attachmentId) {
          const obj3 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "STREAM_SERVER_UPDATE" };
          const obj4 = { onlyAttachmentIds: null };
          const items = [attachmentId];
          obj4.onlyAttachmentIds = items;
          obj3.forwardOptions = obj4;
          ForwardModalUtils.openForwardModal(obj3);
        }
      } else {
        const obj6 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "STREAM_SERVER_UPDATE" };
        const obj7 = { onlyEmbedIndices: null };
        const items1 = [source.mediaIndex];
        obj7.onlyEmbedIndices = items1;
        obj6.forwardOptions = obj7;
        ForwardModalUtils.openForwardModal(obj6);
      }
    }
  }, items5);
  const items6 = [source];
  const callback4 = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (tmp4) {
      ({ channelId, messageId } = source);
      const obj2 = transitionToChannel;
      const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
      const obj4 = { navigationReplace: !isChatLockedOpen };
      obj2.transitionToMessage(channelId, messageId, obj4);
      const tmp6 = !isChatLockedOpen;
    }
    tmp4 = null != ChannelStore.getChannel(source.channelId) && null != source.channelId && null != source.messageId;
  }, items6);
  const items7 = [source];
  const callback5 = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const attachmentId = source.attachmentId;
    if (tmp5) {
      const obj2 = { messageId: null, channelId: null, attachmentId: null };
      ({ messageId: obj3.messageId, channelId: obj3.channelId } = source);
      obj2.attachmentId = attachmentId;
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11807, dependencyMap.paths), closure_11, obj2);
      const tmpResult = ActionSheetActionCreatorsDefault;
    }
    tmp5 = null != attachmentId && null != source.channelId && null != source.messageId;
  }, items7);
  let obj3 = source(shareable[10]);
  let obj4 = channelId;
  let canForwardMessage = source(shareable[23]).useCanForwardMessage(stateFromStores);
  if (canForwardMessage) {
    let tmp13 = null != source.attachmentId;
    if (!tmp13) {
      tmp13 = "embed" === source.accessoryType;
    }
    canForwardMessage = tmp13;
  }
  let obj5 = source(shareable[23]);
  videoSourceType = tmp(tmp2[12]).getVideoSourceType(source);
  const items8 = [disableDownload, callback3, callback4, callback2, callback5, action, callback1, obscure, shareable, canForwardMessage, videoSourceType, , , ];
  ({ channelId: arr9[11], messageId: arr9[12], disableDownload: arr9[13] } = source);
  return obj4.useMemo(() => {
    disableDownload = true === disableDownload;
    if (!disableDownload) {
      disableDownload = videoSourceType === MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME;
    }
    if (!disableDownload) {
      disableDownload = source.disableDownload;
    }
    const items = [];
    if (!disableDownload) {
      const obj = { IconComponent: DownloadIcon.DownloadIcon, label: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["R3BPH+"]);
      obj.action = action;
      items.push(obj);
    }
    if (canForwardMessage) {
      const obj2 = { IconComponent: ForwardingIconDefault, label: null, action: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.I3ltXO);
      obj2.action = callback3;
      items.push(obj2);
    }
    if (shareable) {
      const obj3 = { IconComponent: ShareIcon.ShareIcon, label: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.RDE0Sc);
      obj3.action = callback1;
      items.push(obj3);
    }
    const obj4 = { IconComponent: WindowLaunchIcon.WindowLaunchIcon, label: null, action: null };
    const intl4 = util.intl;
    obj4.label = intl4.string(util.t.q5jLJB);
    obj4.action = callback2;
    items.push(obj4);
    if (tmp30) {
      const obj5 = { IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, label: null, action: null };
      const intl5 = util.intl;
      obj5.label = intl5.string(util.t["+TSRGD"]);
      obj5.action = callback4;
      items.push(obj5);
    }
    if (obscure) {
      const obj6 = { IconComponent: ImageWarningIcon.ImageWarningIcon, label: null, action: null };
      const intl6 = util.intl;
      obj6.label = intl6.string(util.t.ZH7P2h);
      obj6.action = callback5;
      items.push(obj6);
    }
    return items;
  }, items8);
}
const Constants = fn(1074);
({ AnalyticsSections: closure_8, GIF_RE_IOS: closure_9, MediaType: c10 } = Constants);
let closure_11 = fn(7703).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default function MediaShareActionSheet(source) {
  const obj2 = { children: null };
  const arr = useMediaShareActions({ source: source.source, disableDownload: source.disableDownload, shareable: source.shareable });
  let obj = { source: source.source, disableDownload: source.disableDownload, shareable: source.shareable };
  obj2.children = jsx(ActionSheetRow.ActionSheetRow.Group, {
    hasIcons: true,
    children: useMediaShareActions({ source: source.source, disableDownload: source.disableDownload, shareable: source.shareable }).map((IconComponent, index) => {
      const obj = { icon: jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent }), onPress: null, label: null };
      ({ action: obj.onPress, label: obj.label } = IconComponent);
      return jsx(ActionSheetRow.ActionSheetRow, { icon: jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent }), onPress: null, label: null }, index);
    })
  });
  return jsx(ActionSheet.ActionSheet, { children: null });
};
export { useMediaShareActions };