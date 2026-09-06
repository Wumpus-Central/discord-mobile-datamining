// discord_app/modules/media_viewer/native/components/MediaShareActions.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import useChatLayout from "../../../chat/native/useChatLayout.tsx";
import DownloadIcon from "../../../../design/components/Icon/native/redesign/generated/DownloadIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import transitionToChannel from "../../../routing/transitionToChannel.tsx";
import MediaFormatTesters from "../../../messages/MediaFormatTesters.tsx";
import ImageWarningIcon from "../../../../design/components/Icon/native/redesign/generated/ImageWarningIcon.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import ActionSheetRow from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";
import MediaSourceUtil from "../MediaSourceUtil.tsx";
import MediaViewerAnalyticsManager from "../../MediaViewerAnalyticsManager.tsx";
import showShareActionSheet from "../../../action_sheet/native/showShareActionSheet.tsx";
import MaskedLinkUtils from "../../../../utils/MaskedLinkUtils.tsx";
import ShareIcon from "../../../../design/components/Icon/native/redesign/generated/ShareIcon.tsx";
import ForwardModalUtils from "../../../forwarding/native/ForwardModalUtils.tsx";
import ForwardingIconDefault from "../../../forwarding/native/ForwardingIcon.tsx";
import ChatArrowRightIcon from "../../../../design/components/Icon/native/redesign/generated/ChatArrowRightIcon.tsx";
import WindowLaunchIcon from "../../../../design/components/Icon/native/redesign/generated/WindowLaunchIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ICYMIStore from "../../../icymi/ICYMIStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MessageStore from "../../../../stores/MessageStore.tsx";
import MessagePreviewStore from "../../../../stores/native/MessagePreviewStore.tsx";

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
  const stateFromStores = source(shareable[8]).useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
  let obj = source(shareable[8]);
  const tmp = source;
  let tmp2 = shareable;
  let result = source(shareable[9]).shouldAgeVerifyForExplicitMedia();
  let obj2 = source(shareable[9]);
  obscure = source(shareable[10]).getAttachmentObscurityProps({
    attachment: source,
    shouldObscureSpoiler: true,
    enabledContentHarmTypeFlags: 0,
    shouldAgeVerify: result,
  }).obscure;
  const items2 = [source];
  action = channelId.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    if (null != source.videoURI) {
      const result = MediaSourceUtil.downloadMediaAssetWithContentType(
        source.videoURI,
        constants2.VIDEO,
        source.contentType,
      );
    } else if (null != source.sourceURI) {
      const result1 = MediaFormatTesters.urlMatchesFileExtension(source.sourceURI, React7);
      const result2 = MediaSourceUtil.downloadMediaAssetWithContentType(
        source.sourceURI,
        result1 ? constants2.GIF : constants2.IMAGE,
        source.contentType,
      );
    }
  }, items2);
  const items3 = [source];
  const callback1 = channelId.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { source };
    showShareActionSheet.showShareActionSheet(obj, constants.MEDIA_VIEWER);
    const MediaViewerAnalytics = MediaViewerAnalyticsManager.MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerShareButtonTapped();
  }, items3);
  const items4 = [source];
  const callback2 = channelId.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != source.sourceURI) {
      obj = {
        href: tmp3.sourceURI,
        onConfirm() {
          disableDownload(shareable[17]).openURL(sourceURI.sourceURI);
        },
      };
      MaskedLinkUtils.handleClick(obj);
    }
  }, items4);
  const items5 = [stateFromStores, source];
  const callback3 = channelId.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = source.attachmentId;
        if (null != attachmentId) {
          obj = {
            message: stateFromStores,
            source: "media-viewer",
            initialSelectedDestinations: "Array",
            forwardOptions: "QUESTS_USER_COMPLETION_UPDATE",
          };
          obj = { onlyAttachmentIds: null };
          const items = [attachmentId];
          obj.onlyAttachmentIds = items;
          obj.forwardOptions = obj;
          ForwardModalUtils.openForwardModal(obj);
        }
      } else {
        const obj1 = {
          message: stateFromStores,
          source: "media-viewer",
          initialSelectedDestinations: "Array",
          forwardOptions: "QUESTS_USER_COMPLETION_UPDATE",
        };
        const obj2 = { onlyEmbedIndices: null };
        const items1 = [source.mediaIndex];
        obj2.onlyEmbedIndices = items1;
        obj1.forwardOptions = obj2;
        obj1.openForwardModal(obj1);
      }
    }
  }, items5);
  const items6 = [source];
  const callback4 = channelId.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (tmp4) {
      ({ channelId, messageId } = source);
      const obj2 = transitionToChannel;
      const isChatLockedOpen = useChatLayout.getChatLayout().isChatLockedOpen;
      obj = { navigationReplace: !isChatLockedOpen };
      obj2.transitionToMessage(channelId, messageId, obj);
      const tmp6 = !isChatLockedOpen;
    }
    tmp4 = null != ChannelStore.getChannel(source.channelId) && null != source.channelId && null != source.messageId;
  }, items6);
  const items7 = [source];
  const callback5 = channelId.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const attachmentId = source.attachmentId;
    if (tmp5) {
      obj = { messageId: null, channelId: null, attachmentId: null };
      ({ messageId: obj3.messageId, channelId: obj3.channelId } = source);
      obj.attachmentId = attachmentId;
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(11677, dependencyMap.paths), closure_11, obj);
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
  const items8 = [
    disableDownload,
    callback3,
    callback4,
    callback2,
    callback5,
    action,
    callback1,
    obscure,
    shareable,
    canForwardMessage,
    videoSourceType,
    ,
    ,
  ];
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
      let obj = { IconComponent: DownloadIcon.DownloadIcon, label: null, action: null };
      const intl = util.intl;
      obj.label = intl.string(util.t["R3BPH+"]);
      obj.action = action;
      items.push(obj);
    }
    if (canForwardMessage) {
      obj = { IconComponent: ForwardingIconDefault, label: null, action: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.I3ltXO);
      obj.action = callback3;
      items.push(obj);
    }
    if (shareable) {
      obj = { IconComponent: ShareIcon.ShareIcon, label: null, action: null };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t.RDE0Sc);
      obj.action = callback1;
      items.push(obj);
    }
    const obj1 = { IconComponent: WindowLaunchIcon.WindowLaunchIcon, label: null, action: null };
    const intl4 = util.intl;
    obj1.label = intl4.string(util.t.q5jLJB);
    obj1.action = callback2;
    items.push(obj1);
    if (tmp30) {
      const obj2 = { IconComponent: ChatArrowRightIcon.ChatArrowRightIcon, label: null, action: null };
      const intl5 = util.intl;
      obj2.label = intl5.string(util.t["+TSRGD"]);
      obj2.action = callback4;
      items.push(obj2);
    }
    if (obscure) {
      const obj3 = { IconComponent: ImageWarningIcon.ImageWarningIcon, label: null, action: null };
      const intl6 = util.intl;
      obj3.label = intl6.string(util.t.ZH7P2h);
      obj3.action = callback5;
      items.push(obj3);
    }
    return items;
  }, items8);
}
const Constants = fn(1074);
({ AnalyticsSections: closure_8, GIF_RE_IOS: closure_9, MediaType: c10 } = Constants);
let closure_11 = fn(7601).EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default function MediaShareActionSheet(source) {
  let obj = { source: source.source, disableDownload: source.disableDownload, shareable: source.shareable };
  obj = { children: null };
  obj = {
    hasIcons: true,
    children: useMediaShareActions(obj).map((IconComponent, index) => {
      let obj = { icon: null, onPress: null, label: null };
      obj = { IconComponent: IconComponent.IconComponent };
      obj.icon = jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent });
      ({ action: obj.onPress, label: obj.label } = IconComponent);
      return jsx(ActionSheetRow.ActionSheetRow, { IconComponent: IconComponent.IconComponent }, index);
    }),
  };
  obj.children = jsx(ActionSheetRow.ActionSheetRow.Group, {
    hasIcons: true,
    children: useMediaShareActions(obj).map((IconComponent, index) => {
      let obj = { icon: null, onPress: null, label: null };
      obj = { IconComponent: IconComponent.IconComponent };
      obj.icon = jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent });
      ({ action: obj.onPress, label: obj.label } = IconComponent);
      return jsx(ActionSheetRow.ActionSheetRow, { IconComponent: IconComponent.IconComponent }, index);
    }),
  });
  return jsx(ActionSheet.ActionSheet, {
    hasIcons: true,
    children: useMediaShareActions(obj).map((IconComponent, index) => {
      let obj = { icon: null, onPress: null, label: null };
      obj = { IconComponent: IconComponent.IconComponent };
      obj.icon = jsx(ActionSheetRow.ActionSheetRow.Icon, { IconComponent: IconComponent.IconComponent });
      ({ action: obj.onPress, label: obj.label } = IconComponent);
      return jsx(ActionSheetRow.ActionSheetRow, { IconComponent: IconComponent.IconComponent }, index);
    }),
  });
}
export { useMediaShareActions };
