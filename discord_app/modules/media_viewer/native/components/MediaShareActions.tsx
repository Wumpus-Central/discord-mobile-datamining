// === Module 8020: MediaShareActions ===

// Module 8020 (MediaShareActions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl8 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import useChatLayout from "useChatLayout" /* 4745 */;
import LinkIcon from "LinkIcon" /* 4845 */;
import DownloadIcon from "DownloadIcon" /* 4851 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import transitionToChannel from "transitionToChannel" /* 4907 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5046 */;
import ImageWarningIcon from "ImageWarningIcon" /* 5872 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import ActionSheetRow2 from "ActionSheetRow" /* 6704 */;
import ActionSheet2 from "ActionSheet" /* 6708 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7123 */;
import MediaViewerAnalyticsManager from "MediaViewerAnalyticsManager" /* 7946 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7950 */;
import showShareActionSheet from "showShareActionSheet" /* 8048 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8057 */;
import ForwardModalUtils from "ForwardModalUtils" /* 11319 */;
import ForwardingIconDefault from "ForwardingIcon" /* 11328 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 11381 */;
import ShareIcon from "ShareIcon" /* 12730 */;
import WindowLaunchIcon from "WindowLaunchIcon" /* 12772 */;
import react from "react" /* 19 */;
import ICYMIStore from "ICYMIStore" /* 8021 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MessageStore from "MessageStore" /* 5116 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8047 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
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
  const tmp = source;
  let tmp2 = shareable;
  let obj = source(shareable[8]);
  let items = [obscure, messageId, action];
  let items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(items, () => {
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
  let obj2 = source(shareable[9]);
  let result = obj2.shouldAgeVerifyForExplicitMedia();
  let obj3 = source(shareable[10]);
  obscure = obj3.getAttachmentObscurityProps({ attachment: source, shouldObscureSpoiler: true, enabledContentHarmTypeFlags: 0, shouldAgeVerify: result }).obscure;
  let obj4 = channelId;
  const items2 = [source];
  action = channelId.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != source.videoURI) {
      const obj2 = MediaSourceUtil;
      const result = obj2.downloadMediaAssetWithContentType(source.videoURI, callback2.VIDEO, source.contentType);
    } else if (null != source.sourceURI) {
      const obj3 = MediaFormatTesters;
      const result1 = obj3.urlMatchesFileExtension(source.sourceURI, React4);
      const obj4 = MediaSourceUtil;
      const result2 = obj4.downloadMediaAssetWithContentType(source.sourceURI, result1 ? callback2.GIF : callback2.IMAGE, source.contentType);
    }
  }, items2);
  const items3 = [source];
  const callback1 = channelId.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = showShareActionSheet;
    const obj3 = { source };
    obj2.showShareActionSheet(obj3, metroImportAll.MEDIA_VIEWER);
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
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = ClipboardUtils;
    obj2.copy(uri);
    const obj3 = ToastUtils;
    obj3.presentLinkCopied();
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const obj4 = { href: uri, success: true };
    const result = MediaViewerAnalytics.trackMediaViewerLinkCopied(obj4);
  }, items4);
  const items5 = [source];
  callback3 = obj4.useCallback(() => {
    let sourceURI;
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != source.sourceURI) {
      const obj3 = {
        href: tmp3.sourceURI,
        onConfirm() {
            const obj = disableDownload(shareable[19]);
            obj.openURL(sourceURI.sourceURI);
          }
      };
      const obj2 = MaskedLinkUtils;
      obj2.handleClick(obj3);
    }
  }, items5);
  const items6 = [stateFromStores, source];
  callback4 = obj4.useCallback(() => {
    let items;
    let items1;
    let obj4;
    let obj7;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = source.attachmentId;
        if (null != attachmentId) {
          const obj3 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: obj4 };
          obj4 = { onlyAttachmentIds: items };
          items = [attachmentId];
          const obj5 = ForwardModalUtils;
          obj5.openForwardModal(obj3);
        }
      } else {
        const obj6 = { message: stateFromStores, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: obj7 };
        obj7 = { onlyEmbedIndices: items1 };
        items1 = [source.mediaIndex];
        const obj2 = ForwardModalUtils;
        obj2.openForwardModal(obj6);
      }
    }
  }, items6);
  const items7 = [source];
  callback5 = obj4.useCallback(() => {
    let tmp7;
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const tmp4 = null != ChannelStore.getChannel(source.channelId) && null != source.channelId && null != source.messageId;
    if (tmp4) {
      const transitionToMessage = transitionToChannel.transitionToMessage;
      ({ channelId, messageId } = source);
      transitionToChannel;
      const obj2 = useChatLayout;
      const isChatLockedOpen = obj2.getChatLayout().isChatLockedOpen;
      const obj3 = { navigationReplace: tmp7 };
      tmp7 = !isChatLockedOpen;
      transitionToMessage(channelId, messageId, obj3);
    }
  }, items7);
  const items8 = [source];
  callback6 = obj4.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const attachmentId = source.attachmentId;
    const tmp5 = null != attachmentId && null != source.channelId && null != source.messageId;
    if (tmp5) {
      const obj2 = { messageId: null, channelId: null, attachmentId };
      ({ messageId: obj3.messageId, channelId: obj3.channelId } = source);
      const tmpResult = ActionSheetActionCreatorsDefault;
      tmpResult.openLazy(asyncRequire(11314, dependencyMap.paths), closure_11, obj2);
    }
  }, items8);
  let tmpResult = tmp(tmp2[25]);
  canForwardMessage = tmpResult.useCanForwardMessage(stateFromStores);
  if (canForwardMessage) {
    let tmp13 = null != source.attachmentId;
    if (!tmp13) {
      tmp13 = "embed" === source.accessoryType;
    }
    canForwardMessage = tmp13;
  }
  const tmpResult3 = tmp(tmp2[12]);
  videoSourceType = tmpResult3.getVideoSourceType(source);
  const tmpResult4 = tmp(tmp2[26]);
  mobileMediaViewerShareExperimentEnabled = tmpResult4.useMobileMediaViewerShareExperimentEnabled("mediaViewerCopyLink");
  const items9 = [mobileMediaViewerShareExperimentEnabled, disableDownload, callback2, callback4, callback5, callback3, callback6, action, callback1, obscure, shareable, canForwardMessage, videoSourceType, , , ];
  ({ channelId: arr10[13], messageId: arr10[14], disableDownload: arr10[15] } = source);
  return obj4.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let intl7;
    disableDownload = true === disableDownload || videoSourceType === MediaSourceUtil.VideoSourceType.WEB_FILE_IFRAME || source.disableDownload;
    const items = [];
    if (!disableDownload) {
      const push = items.push;
      const obj = { IconComponent: DownloadIcon.DownloadIcon, label: intl.string(intl8.t["R3BPH+"]), action };
      intl = intl8.intl;
      push(obj);
    }
    if (canForwardMessage) {
      const push2 = items.push;
      const obj2 = { IconComponent: ForwardingIconDefault, label: intl2.string(intl8.t.I3ltXO), action: callback4 };
      intl2 = intl8.intl;
      push2(obj2);
    }
    let tmp22 = shareable;
    if (tmp22) {
      const push3 = items.push;
      const obj3 = { IconComponent: ShareIcon.ShareIcon, label: intl3.string(intl8.t.RDE0Sc), action: callback1 };
      intl3 = intl8.intl;
      push3(obj3);
    }
    if (tmp22) {
      tmp22 = mobileMediaViewerShareExperimentEnabled;
    }
    if (tmp22) {
      const push4 = items.push;
      const obj4 = { IconComponent: LinkIcon.LinkIcon, label: intl4.string(intl8.t["92CPQ+"]), action: callback2 };
      intl4 = intl8.intl;
      push4(obj4);
    }
    const push5 = items.push;
    const obj5 = { IconComponent: WindowLaunchIcon.WindowLaunchIcon, label: intl5.string(intl8.t.q5jLJB), action: callback3 };
    intl5 = intl8.intl;
    push5(obj5);
    const tmp40 = null != source.channelId && null != source.messageId;
    if (tmp40) {
      const push6 = items.push;
      const obj6 = { IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, label: intl6.string(intl8.t["+TSRGD"]), action: callback5 };
      intl6 = intl8.intl;
      push6(obj6);
    }
    if (obscure) {
      const push7 = items.push;
      const obj7 = { IconComponent: ImageWarningIcon.ImageWarningIcon, label: intl7.string(intl8.t.ZH7P2h), action: callback6 };
      intl7 = intl8.intl;
      push7(obj7);
    }
    return items;
  }, items9);
}
({ AnalyticsSections: metroImportAll, GIF_RE_IOS: c9, MediaType: c10 } = Constants);
let closure_11 = ExplicitMediaRedactionConstants.EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disableDownload;
  let shareable;
  let source;
  let obj = react2;
  const cResult = obj.c(9);
  ({ source, disableDownload, shareable } = arg0);
  if (cResult[0] === disableDownload) {
    if (cResult[1] === shareable) {
      let tmp4;
      let tmp6;
      let tmp10;
      if (cResult[2] === source) {
        tmp4 = cResult[3];
      }
      const arr = useMediaShareActions(tmp4);
      if (cResult[4] !== arr) {
        let tmp8;
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(IconComponent, id) {
            const obj = { icon: null, onPress: null, label: null };
            const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
            ({ action: obj.onPress, label: obj.label } = IconComponent);
            return <ActionSheetRow key={id} icon={null} onPress={null} label={null} />;
          };
          cResult[6] = fn;
          tmp8 = fn;
        } else {
          tmp8 = cResult[6];
        }
        const mapped = arr.map(tmp8);
        cResult[4] = arr;
        cResult[5] = mapped;
        tmp6 = mapped;
      } else {
        tmp6 = cResult[5];
      }
      if (cResult[7] !== tmp6) {
        const ActionSheet = ActionSheet2.ActionSheet;
        const tmp12 = <ActionSheet>{null}</ActionSheet>;
        cResult[7] = tmp6;
        cResult[8] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[8];
      }
      return tmp10;
    }
  }
  const obj4 = { source, disableDownload, shareable };
  cResult[0] = disableDownload;
  cResult[1] = shareable;
  cResult[2] = source;
  cResult[3] = obj4;
  tmp4 = obj4;
}) : ((source) => {
  let obj = { source: source.source, disableDownload: source.disableDownload, shareable: source.shareable };
  const arr = useMediaShareActions(obj);
  const ActionSheet = ActionSheet2.ActionSheet;
  ({
    hasIcons: true,
    children: arr.map((IconComponent, index) => {
      const obj = { icon: null, onPress: null, label: null };
      const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
      ({ action: obj.onPress, label: obj.label } = IconComponent);
      return <ActionSheetRow key={index} icon={null} onPress={null} label={null} />;
    })
  });
  const Group = ActionSheetRow2.ActionSheetRow.Group;
  return <ActionSheet>{null}</ActionSheet>;
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default tmp3;
export { useMediaShareActions };