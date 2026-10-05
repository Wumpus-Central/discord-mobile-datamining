// === Module 8010: MediaShareActions ===

// Module 8010 (MediaShareActions)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import useChatLayout from "useChatLayout" /* 4739 */;
import LinkIcon from "LinkIcon" /* 4839 */;
import DownloadIcon from "DownloadIcon" /* 4845 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import transitionToChannel from "transitionToChannel" /* 4901 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5040 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5865 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import ActionSheetRow from "ActionSheetRow" /* 6697 */;
import ActionSheet from "ActionSheet" /* 6701 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7935 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7939 */;
import showShareActionSheet from "showShareActionSheet" /* 8038 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8047 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11306 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11315 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 11368 */;
import ShareIcon from "ShareIcon" /* 12715 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 12757 */;
import noop from "module_19" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8011 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5110 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8037 */;

require = fn;
function useMediaShareActions(source) {
  source = source.source;
  let disableDownload = source.disableDownload;
  const shareable = source.shareable;
  let obscure;
  let action;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let callback6;
  let canForwardMessage;
  let videoSourceType;
  let mobileMediaViewerShareExperimentEnabled;
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
  let result = source(shareable[9]).shouldAgeVerifyForExplicitMedia();
  let obj2 = source(shareable[9]);
  obscure = source(shareable[10]).getAttachmentObscurityProps({ attachment: source, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: 0, shouldAgeVerify: result }).obscure;
  const items2 = [source];
  action = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != source.videoURI) {
      const result = MediaSourceUtil.downloadMediaAssetWithContentType(source.videoURI, constants2.VIDEO, source.contentType);
    } else if (null != source.sourceURI) {
      const result1 = MediaFormatTesters.urlMatchesFileExtension(source.sourceURI, options);
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
  let uri = source.shareURI;
  if (uri == null) {
    uri = source.videoURI;
  }
  if (uri == null) {
    uri = source.sourceURI;
  }
  if (uri == null) {
    uri = source.uri;
  }
  const items4 = [uri];
  callback2 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    ClipboardUtils.copy(uri);
    ToastUtils.presentLinkCopied();
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerLinkCopied({ href: uri, success: true });
  }, items4);
  const items5 = [source];
  callback3 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != source.sourceURI) {
      const obj3 = {
        href: tmp3.sourceURI,
        onConfirm() {
            disableDownload(shareable[19]).openURL(sourceURI.sourceURI);
          }
      };
      MaskedLinkUtils.handleClick(obj3);
    }
  }, items5);
  const items6 = [stateFromStores, source];
  callback4 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = source.attachmentId;
        if (null != attachmentId) {
          const obj3 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "NOTIFICATION_SETTINGS_UPDATE" };
          const obj4 = { onlyAttachmentIds: null };
          const items = [attachmentId];
          obj4.onlyAttachmentIds = items;
          obj3.forwardOptions = obj4;
          ForwardModalUtils.openForwardModal(obj3);
        }
      } else {
        const obj6 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "NOTIFICATION_SETTINGS_UPDATE" };
        const obj7 = { onlyEmbedIndices: null };
        const items1 = [source.mediaIndex];
        obj7.onlyEmbedIndices = items1;
        obj6.forwardOptions = obj7;
        ForwardModalUtils.openForwardModal(obj6);
      }
    }
  }, items6);
  const items7 = [source];
  callback5 = obj4.useCallback(() => {
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
  }, items7);
  const items8 = [source];
  callback6 = obj4.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const attachmentId = source.attachmentId;
    if (tmp5) {
      const obj2 = { messageId: null, channelId: null, attachmentId: null };
      ({ messageId: obj3.messageId, channelId: obj3.channelId } = source);
      obj2.attachmentId = attachmentId;
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11301, dependencyMap.paths), closure_11, obj2);
      const tmpResult = ActionSheetActionCreatorsDefault;
    }
    tmp5 = null != attachmentId && null != source.channelId && null != source.messageId;
  }, items8);
  let obj3 = source(shareable[10]);
  canForwardMessage = source(shareable[25]).useCanForwardMessage(stateFromStores);
  if (canForwardMessage) {
    let tmp13 = null != source.attachmentId;
    if (!tmp13) {
      tmp13 = "embed" === source.accessoryType;
    }
    canForwardMessage = tmp13;
  }
  let tmpResult = source(shareable[25]);
  videoSourceType = source(shareable[12]).getVideoSourceType(source);
  const tmpResult3 = source(shareable[12]);
  mobileMediaViewerShareExperimentEnabled = source(shareable[26]).useMobileMediaViewerShareExperimentEnabled("mediaViewerCopyLink");
  const items9 = [mobileMediaViewerShareExperimentEnabled, disableDownload, callback2, callback4, callback5, callback3, callback6, action, callback1, obscure, shareable, canForwardMessage, videoSourceType, , , ];
  ({ channelId: arr10[13], messageId: arr10[14], disableDownload: arr10[15] } = source);
  return channelId.useMemo(() => {
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
      obj2.action = callback4;
      items.push(obj2);
    }
    let tmp21 = shareable;
    if (shareable) {
      const obj3 = { IconComponent: ShareIcon.ShareIcon, label: null, action: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.RDE0Sc);
      obj3.action = callback1;
      items.push(obj3);
    }
    if (tmp21) {
      tmp21 = mobileMediaViewerShareExperimentEnabled;
    }
    if (tmp21) {
      const obj4 = { IconComponent: LinkIcon.LinkIcon, label: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(util.t["92CPQ+"]);
      obj4.action = callback2;
      items.push(obj4);
    }
    const obj5 = { IconComponent: WindowLaunchIcon.WindowLaunchIcon, label: null, action: null };
    const intl5 = util.intl;
    obj5.label = intl5.string(util.t.q5jLJB);
    obj5.action = callback3;
    items.push(obj5);
    if (tmp39) {
      const obj6 = { IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, label: null, action: null };
      const intl6 = util.intl;
      obj6.label = intl6.string(util.t["+TSRGD"]);
      obj6.action = callback5;
      items.push(obj6);
    }
    if (obscure) {
      const obj7 = { IconComponent: ImageWarningIcon.ImageWarningIcon, label: null, action: null };
      const intl7 = util.intl;
      obj7.label = intl7.string(util.t.ZH7P2h);
      obj7.action = callback6;
      items.push(obj7);
    }
    return items;
  }, items9);
}
const Constants = fn(1085);
({ AnalyticsSections: closure_8, GIF_RE_IOS: closure_9, MediaType: c10 } = Constants);
let closure_11 = fn(7110).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(9);
  ({ source, disableDownload, shareable } = arg0);
  if (cResult[0] === disableDownload) {
    if (cResult[1] === shareable) {
      if (cResult[2] === source) {
        let tmp4 = cResult[3];
      }
      const arr = useMediaShareActions(tmp4);
      if (cResult[4] !== arr) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(IconComponent, id) {
            const obj = { icon: jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent }), onPress: null, label: null };
            ({ action: obj.onPress, label: obj.label } = IconComponent);
            return jsx(ActionSheetRow.ActionSheetRow, { icon: jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent }), onPress: null, label: null }, id);
          };
          cResult[6] = fn;
          let tmp8 = fn;
        } else {
          tmp8 = cResult[6];
        }
        const mapped = arr.map(tmp8);
        cResult[4] = arr;
        cResult[5] = mapped;
      } else {
        if (cResult[7] !== cResult[5]) {
          const obj2 = { children: null };
          const obj3 = { hasIcons: true, children: tmp6 };
          obj2.children = jsx(ActionSheetRow.ActionSheetRow.Group, { hasIcons: true, children: tmp6 });
          const tmp13 = jsx(ActionSheet.ActionSheet, { children: null });
          cResult[7] = tmp6;
          cResult[8] = tmp13;
          let tmp11 = tmp13;
        } else {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
  }
  const obj4 = { source, disableDownload, shareable };
  cResult[0] = disableDownload;
  cResult[1] = shareable;
  cResult[2] = source;
  cResult[3] = obj4;
  tmp4 = obj4;
}) : ((source) => {
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
});
export { useMediaShareActions };