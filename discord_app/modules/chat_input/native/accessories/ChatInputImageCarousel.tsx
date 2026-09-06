// discord_app/modules/chat_input/native/accessories/ChatInputImageCarousel.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationCommandStore from "../../../application_commands/ApplicationCommandStore.tsx";
import UploadAttachmentStore from "../../../../stores/UploadAttachmentStore.tsx";

const require = fn;
const DraftType = fn(4901).DraftType;
let closure_6 = fn(9485).useChatShowingAutoComplete;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default noop.memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let tmp = closure_6(canUpload.screenIndex);
  dependencyMap = tmp;
  let obj = canUpload(504);
  const items = [UploadAttachmentStore, ApplicationCommandStore];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { attachments: stateFromStores, channelId };
    tmp4 = jsx(channelId(10631), { attachments: stateFromStores, channelId });
  }
  return tmp4;
});
