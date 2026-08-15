// discord_app/modules/media_viewer/native/components/MediaShareActions.tsx
import transitionToChannel from "transitionToChannel";
import filterStaffGuild from "filterStaffGuild";
import ensureGuildLoaded from "ensureGuildLoaded";
import reinjectEphemerals from "reinjectEphemerals";
import messages from "messages";
import ME from "ME";
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_11 } from "USER_SETTING_ACTION_SHEET_KEY";
import { jsx } from "ExplicitMediaObscuredFalsePositiveActionSheet";
import { ActionSheet } from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import { ActionSheetRowIcon } from "../../../../design/components/Sheet/native/ActionSheetRow.native.tsx";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function useMediaShareActions(source) {
  source = source.source;
  let disableDownload = source.disableDownload;
  const shareable = source.shareable;
  let channelId;
  let messageId;
  let stateFromStores;
  let obscure;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  let canForwardMessage;
  let videoSourceType;
  channelId = source.channelId;
  messageId = source.messageId;
  let items = [obscure, messageId, callback];
  let items1 = [channelId, messageId];
  stateFromStores = source(shareable[8]).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != channelId) {
      tmp2 = null;
      if (null != messageId) {
        let message = obscure.getMessage(tmp, tmp3);
        if (message == null) {
          message = callback.getMessage(tmp3);
        }
        if (message == null) {
          message = messageId.getMessage(tmp3);
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
  callback = channelId.useCallback(() => {
    disableDownload(shareable[11]).hideActionSheet();
    if (null != source.videoURI) {
      const result = source(tmp[12]).downloadMediaAssetWithContentType(tmp3.videoURI, callback3.VIDEO, tmp3.contentType);
      const obj2 = source(tmp[12]);
    } else if (null != tmp3.sourceURI) {
      const result1 = source(tmp[13]).urlMatchesFileExtension(tmp3.sourceURI, callback2);
      const obj3 = source(tmp[13]);
      const result2 = source(tmp[12]).downloadMediaAssetWithContentType(tmp3.sourceURI, result1 ? tmp11.GIF : tmp11.IMAGE, tmp3.contentType);
      const obj4 = source(tmp[12]);
    }
  }, items2);
  const items3 = [source];
  callback1 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    obj = { source };
    source(shareable[14]).showShareActionSheet(obj, callback1.MEDIA_VIEWER);
    const MediaViewerAnalytics = source(shareable[15]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerShareButtonTapped();
  }, items3);
  const items4 = [source];
  callback2 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (null != source.sourceURI) {
      obj = { href: null, onConfirm: null };
      obj[0] = tmp3.sourceURI;
      obj[1] = function onConfirm() {
        outer1_1(outer1_2[17]).openURL(sourceURI.sourceURI);
      };
      source(shareable[16]).handleClick(obj);
      const obj2 = source(shareable[16]);
    }
  }, items4);
  const items5 = [stateFromStores, source];
  callback3 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = tmp8.attachmentId;
        if (null != attachmentId) {
          obj = { message: null, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z" };
          obj[0] = tmp3;
          obj = { onlyAttachmentIds: null };
          const items = [attachmentId];
          obj[0] = items;
          obj[3] = obj;
          source(tmp[18]).openForwardModal(obj);
          const obj5 = source(tmp[18]);
        }
      } else {
        let obj1 = source(tmp[18]);
        obj1 = { message: null, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z" };
        obj1[0] = tmp3;
        const obj2 = { onlyEmbedIndices: null };
        const items1 = [tmp8.mediaIndex];
        obj2[0] = items1;
        obj1[3] = obj2;
        obj1.openForwardModal(obj1);
      }
    }
  }, items5);
  const items6 = [source];
  callback4 = channelId.useCallback(() => {
    let channelId;
    let messageId;
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (tmp4) {
      ({ channelId, messageId } = tmp3);
      const obj2 = source(tmp[19]);
      const isChatLockedOpen = source(tmp[20]).getChatLayout().isChatLockedOpen;
      obj = { navigationReplace: null };
      obj[0] = !isChatLockedOpen;
      obj2.transitionToMessage(channelId, messageId, obj);
      const obj3 = source(tmp[20]);
      const tmp6 = !isChatLockedOpen;
    }
  }, items6);
  const items7 = [source];
  callback5 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    const attachmentId = source.attachmentId;
    if (tmp5) {
      obj = { messageId: null, channelId: null, attachmentId: null };
      ({ messageId: obj3[0], channelId: obj3[1] } = tmp4);
      obj[2] = attachmentId;
      disableDownload(tmp2[11]).openLazy(source(tmp2[22])(tmp2[21], tmp2.paths), callback4, obj);
      const tmpResult = disableDownload(tmp2[11]);
    }
  }, items7);
  let obj3 = source(shareable[10]);
  let obj4 = channelId;
  canForwardMessage = source(shareable[23]).useCanForwardMessage(stateFromStores);
  if (canForwardMessage) {
    let tmp13 = null != source.attachmentId;
    if (!tmp13) {
      tmp13 = "embed" === source.accessoryType;
    }
    canForwardMessage = tmp13;
  }
  let obj5 = source(shareable[23]);
  videoSourceType = tmp(tmp2[12]).getVideoSourceType(source);
  const items8 = [disableDownload, callback3, callback4, callback2, callback5, callback, callback1, obscure, shareable, canForwardMessage, videoSourceType, , , ];
  ({ channelId: arr9[11], messageId: arr9[12], disableDownload: arr9[13] } = source);
  return obj4.useMemo(() => {
    disableDownload = true === disableDownload;
    if (!disableDownload) {
      disableDownload = videoSourceType === source(shareable[12]).VideoSourceType.WEB_FILE_IFRAME;
    }
    if (!disableDownload) {
      disableDownload = source.disableDownload;
    }
    const items = [];
    if (!disableDownload) {
      let obj = { IconComponent: null, label: null, action: null };
      obj[0] = source(shareable[24]).DownloadIcon;
      const intl = source(shareable[25]).intl;
      obj[1] = intl.string(source(shareable[25]).t["R3BPH+"]);
      obj[2] = callback;
      items.push(obj);
    }
    if (canForwardMessage) {
      obj = { IconComponent: null, label: null, action: null };
      obj[0] = disableDownload(shareable[26]);
      const intl2 = source(shareable[25]).intl;
      obj[1] = intl2.string(source(shareable[25]).t.I3ltXO);
      obj[2] = callback3;
      items.push(obj);
    }
    if (shareable) {
      obj = { IconComponent: null, label: null, action: null };
      obj[0] = source(shareable[27]).ShareIcon;
      const intl3 = source(shareable[25]).intl;
      obj[1] = intl3.string(source(shareable[25]).t.RDE0Sc);
      obj[2] = callback1;
      items.push(obj);
    }
    const obj1 = { IconComponent: source(shareable[28]).WindowLaunchIcon, label: null, action: null };
    const intl4 = source(shareable[25]).intl;
    obj1[1] = intl4.string(source(shareable[25]).t.q5jLJB);
    obj1[2] = callback2;
    items.push(obj1);
    if (tmp30) {
      const obj2 = { IconComponent: null, label: null, action: null };
      obj2[0] = source(shareable[29]).ChatArrowRightIcon;
      const intl5 = source(shareable[25]).intl;
      obj2[1] = intl5.string(source(shareable[25]).t["+TSRGD"]);
      obj2[2] = callback4;
      items.push(obj2);
    }
    if (obscure) {
      const obj3 = { IconComponent: null, label: null, action: null };
      obj3[0] = source(shareable[30]).ImageWarningIcon;
      const intl6 = source(shareable[25]).intl;
      obj3[1] = intl6.string(source(shareable[25]).t.ZH7P2h);
      obj3[2] = callback5;
      items.push(obj3);
    }
    return items;
  }, items8);
}
({ AnalyticsSections: metroImportAll, GIF_RE_IOS: c9, MediaType: c10 } = ME);
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default function MediaShareActionSheet(source) {
  let obj = { source: source.source, disableDownload: source.disableDownload, shareable: source.shareable };
  obj = { children: null };
  obj = { hasIcons: true, children: null };
  obj[1] = useMediaShareActions(obj).map((IconComponent) => {
    let obj = { icon: null, onPress: null, label: null };
    obj = { IconComponent: IconComponent.IconComponent };
    obj[0] = callback2(callback(7177).ActionSheetRow.Icon, obj);
    ({ action: obj[1], label: obj[2] } = IconComponent);
    return callback2(callback(7177).ActionSheetRow, obj, arg1);
  });
  obj[0] = jsx(ActionSheetRowIcon.ActionSheetRow.Group, { hasIcons: true, children: null });
  return jsx(ActionSheet.ActionSheet, { hasIcons: true, children: null });
};
export { useMediaShareActions };