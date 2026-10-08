// === Module 11949: ChatInputImageCarousel ===

// Module 11949 (ChatInputImageCarousel)
import noop from "module_19" /* 19 */;
import ApplicationCommandStore from "ApplicationCommandStore" /* 7894 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7880 */;

const require = fn;
const DraftType = fn(7232).DraftType;
let closure_6 = fn(9318).useChatShowingAutoComplete;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ChatInputImageCarousel(canUpload) {
  const cResult = canUpload(576).c(9);
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  const tmp4 = closure_6(canUpload.screenIndex);
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UploadAttachmentStore, ApplicationCommandStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === canUpload) {
    if (cResult[2] === channelId) {
      if (cResult[3] === tmp4) {
        let tmp8 = cResult[4];
        let tmp9 = cResult[5];
      }
      const stateFromStores = tmp(504).useStateFromStores(first, tmp8, tmp9);
      if (cResult[6] === stateFromStores) {
        if (cResult[7] === channelId) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
      let tmp12 = null;
      if (null != stateFromStores) {
        const obj2 = { attachments: stateFromStores, channelId };
        tmp12 = jsx(channelId(9970), { attachments: stateFromStores, channelId });
      }
      cResult[6] = stateFromStores;
      cResult[7] = channelId;
      cResult[8] = tmp12;
      tmp11 = tmp12;
      const tmpResult = tmp(504);
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
  const obj = canUpload(576);
  tmp = canUpload;
}) : (function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let tmp = closure_6(canUpload.screenIndex);
  dependencyMap = tmp;
  const items = [UploadAttachmentStore, ApplicationCommandStore];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = canUpload(504).useStateFromStores(items, () => {
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
    const obj2 = { attachments: stateFromStores, channelId };
    tmp4 = jsx(channelId(9970), { attachments: stateFromStores, channelId });
  }
  return tmp4;
}));