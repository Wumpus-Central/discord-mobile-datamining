// === Module 11877: ChatInputImageCarousel ===

// Module 11877 (ChatInputImageCarousel)
import Fragment from "Fragment" /* 21 */;
import DraftStore from "DraftStore" /* 7044 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9100 */;
import react from "react" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7419 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let canUpload, dependencyMap;

const DraftType = DraftStore.DraftType;
let closure_6 = useChatBottomManagerUIStore.useChatShowingAutoComplete;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((canUpload) => {
  let closure_2;
  let first;
  let tmp = canUpload;
  const obj = canUpload(576);
  const cResult = obj.c(9);
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  const tmp4 = closure_6(canUpload.screenIndex);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore, ApplicationCommandStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === canUpload) {
    if (cResult[2] === channelId) {
      let tmp8;
      let tmp9;
      if (cResult[3] === tmp4) {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
      if (cResult[6] === stateFromStores) {
        let tmp11;
        if (cResult[7] === channelId) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      let tmp12 = null;
      if (null != stateFromStores) {
        tmp12 = jsx(channelId(10373), { attachments: stateFromStores, channelId });
      }
      cResult[6] = stateFromStores;
      cResult[7] = channelId;
      cResult[8] = tmp12;
      tmp11 = tmp12;
    }
  }
  const fn = function h() {
    let tmp = null;
    if (!closure_2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == ApplicationCommandStore.getActiveCommand(channelId)) {
          uploads = UploadAttachmentStore.getUploads(channelId, DraftType.ChannelMessage);
        }
      }
      tmp = uploads;
    }
    return tmp;
  };
  const items1 = [channelId, canUpload, tmp4];
  cResult[1] = canUpload;
  cResult[2] = channelId;
  cResult[3] = tmp4;
  cResult[4] = fn;
  cResult[5] = items1;
  tmp9 = items1;
  tmp8 = fn;
}) : ((canUpload) => {
  let closure_2;
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let tmp = closure_6(canUpload.screenIndex);
  dependencyMap = tmp;
  const items = [UploadAttachmentStore, ApplicationCommandStore];
  const items1 = [channelId, canUpload, tmp];
  const obj = canUpload(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null;
    if (!closure_2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == ApplicationCommandStore.getActiveCommand(channelId)) {
          uploads = UploadAttachmentStore.getUploads(channelId, DraftType.ChannelMessage);
        }
      }
      tmp = uploads;
    }
    return tmp;
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = jsx(channelId(10373), { attachments: stateFromStores, channelId });
  }
  return tmp4;
}));
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;