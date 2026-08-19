// === Module 9043: useMediaShareActions ===

// Module 9043 (useMediaShareActions)
import ActionSheet from "ActionSheet" /* 7175 */;
import ActionSheetRowIcon from "ActionSheetRowIcon" /* 7177 */;
import noop from "noop" /* 19 */;
import filterStaffGuild from "filterStaffGuild" /* 9044 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import reinjectEphemerals from "reinjectEphemerals" /* 4994 */;
import messages from "messages" /* 9066 */;
import ME from "ME" /* 676 */;
import { EXPLICIT_MEDIA_FALSE_POSITIVE_ACTION_SHEET_KEY as closure_11 } from "USER_SETTING_ACTION_SHEET_KEY" /* 5004 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
function useMediaShareActions(source) {
  source = source.source;
  let disableDownload = source.disableDownload;
  const shareable = source.shareable;
  let obscure;
  let callback;
  let videoSourceType;
  const channelId = source.channelId;
  const messageId = source.messageId;
  let items = [obscure, messageId, callback];
  let items1 = [channelId, messageId];
  const stateFromStores = source(shareable[8]).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != channelId) {
      tmp2 = null;
      if (null != messageId) {
        let message = obscure.getMessage(tmp, messageId);
        if (message == null) {
          message = callback.getMessage(messageId);
        }
        if (message == null) {
          message = messageId.getMessage(messageId);
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
      const result = source(shareable[12]).downloadMediaAssetWithContentType(source.videoURI, callback3.VIDEO, source.contentType);
      const obj2 = source(shareable[12]);
    } else if (null != source.sourceURI) {
      const result1 = source(shareable[13]).urlMatchesFileExtension(source.sourceURI, callback2);
      const obj3 = source(shareable[13]);
      const result2 = source(shareable[12]).downloadMediaAssetWithContentType(source.sourceURI, result1 ? callback3.GIF : callback3.IMAGE, source.contentType);
      const obj4 = source(shareable[12]);
    }
    const obj = disableDownload(shareable[11]);
  }, items2);
  const items3 = [source];
  const callback1 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    obj = { source };
    source(shareable[14]).showShareActionSheet(obj, callback1.MEDIA_VIEWER);
    const MediaViewerAnalytics = source(shareable[15]).MediaViewerAnalytics;
    const result = MediaViewerAnalytics.trackMediaViewerShareButtonTapped();
  }, items3);
  const items4 = [source];
  const callback2 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (null != source.sourceURI) {
      obj = { href: null, onConfirm: null };
      obj[0] = tmp3.sourceURI;
      obj[1] = function onConfirm() {
        disableDownload(shareable[17]).openURL(sourceURI.sourceURI);
      };
      source(shareable[16]).handleClick(obj);
      const obj2 = source(shareable[16]);
    }
  }, items4);
  const items5 = [stateFromStores, source];
  const callback3 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (null != stateFromStores) {
      if ("embed" !== source.accessoryType) {
        const attachmentId = source.attachmentId;
        if (null != attachmentId) {
          obj = { message: null, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z" };
          obj[0] = stateFromStores;
          obj = { onlyAttachmentIds: null };
          const items = [attachmentId];
          obj[0] = items;
          obj[3] = obj;
          source(shareable[18]).openForwardModal(obj);
          const obj5 = source(shareable[18]);
        }
      } else {
        source(shareable[18]);
        obj1 = { message: null, source: "media-viewer", initialSelectedDestinations: "Array", forwardOptions: "M5 9H1v1h4V9ZM1 3H0v1h1V3ZM4 15H3v1h1v-1ZM6 10H5v1h1v-1Z" };
        obj1[0] = stateFromStores;
        const obj2 = { onlyEmbedIndices: null };
        const items1 = [source.mediaIndex];
        obj2[0] = items1;
        obj1[3] = obj2;
        obj1.openForwardModal(obj1);
      }
    }
  }, items5);
  const items6 = [source];
  const callback4 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    if (tmp4) {
      ({ channelId, messageId } = source);
      const obj2 = source(shareable[19]);
      const isChatLockedOpen = source(shareable[20]).getChatLayout().isChatLockedOpen;
      obj = { navigationReplace: null };
      obj[0] = !isChatLockedOpen;
      obj2.transitionToMessage(channelId, messageId, obj);
      const obj3 = source(shareable[20]);
    }
    tmp4 = null != stateFromStores.getChannel(source.channelId) && null != source.channelId && null != source.messageId;
  }, items6);
  const items7 = [source];
  const callback5 = channelId.useCallback(() => {
    let obj = disableDownload(shareable[11]);
    obj.hideActionSheet();
    const attachmentId = source.attachmentId;
    if (tmp5) {
      obj = { messageId: null, channelId: null, attachmentId: null };
      ({ messageId: obj3[0], channelId: obj3[1] } = source);
      obj[2] = attachmentId;
      disableDownload(shareable[11]).openLazy(source(shareable[22])(shareable[21], shareable.paths), callback4, obj);
      const tmpResult = disableDownload(shareable[11]);
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
    obj1 = { IconComponent: source(shareable[28]).WindowLaunchIcon, label: null, action: null };
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
({ AnalyticsSections: closure_8, GIF_RE_IOS: c9, MediaType: c10 } = ME);
let result = require("obj132").fileFinishedImporting("modules/media_viewer/native/components/MediaShareActions.tsx");

export default function MediaShareActionSheet(source) {
  let obj = { children: null };
  obj = {
    hasIcons: true,
    children: useMediaShareActions(obj).map((item, index) => {
      const obj = { IconComponent: item.IconComponent };
      obj[0] = callback2(callback(7177).ActionSheetRow.Icon, obj);
      ({ action: obj[1], label: obj[2] } = item);
      return callback2(callback(7177).ActionSheetRow, obj, index);
    })
  };
  obj[0] = jsx(ActionSheetRowIcon.ActionSheetRow.Group, {
    hasIcons: true,
    children: useMediaShareActions(obj).map((item, index) => {
      const obj = { IconComponent: item.IconComponent };
      obj[0] = callback2(callback(7177).ActionSheetRow.Icon, obj);
      ({ action: obj[1], label: obj[2] } = item);
      return callback2(callback(7177).ActionSheetRow, obj, index);
    })
  });
  return jsx(ActionSheet.ActionSheet, {
    hasIcons: true,
    children: useMediaShareActions(obj).map((item, index) => {
      const obj = { IconComponent: item.IconComponent };
      obj[0] = callback2(callback(7177).ActionSheetRow.Icon, obj);
      ({ action: obj[1], label: obj[2] } = item);
      return callback2(callback(7177).ActionSheetRow, obj, index);
    })
  });
};
export { useMediaShareActions };