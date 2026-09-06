// === Module 5267: StickerMessagePreviewStore ===

// Module 5267 (StickerMessagePreviewStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DraftStore from "DraftStore" /* 4901 */;
import size from "module_2" /* 2 */;

const DraftType = DraftStore.DraftType;
let closure_1 = {};
let closure_2 = {};
const Store = initializeDefault.Store;
class StickerMessagePreviewStore extends Store {
}
StickerMessagePreviewStore.prototype["getStickerPreview"] = function getStickerPreview(c1, ChannelMessage) {
  return ChannelMessage === DraftType.FirstThreadMessage ? closure_2 : closure_1[c1];
};
StickerMessagePreviewStore.displayName = "StickerMessagePreviewStore";
const stickerMessagePreviewStore = new StickerMessagePreviewStore(DispatcherDefault, {
  ADD_STICKER_PREVIEW: function handleAddStickerPreview(sticker) {
    const items = [sticker.sticker];
    sticker.draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1[sticker.channelId] = items;
  },
  CLEAR_STICKER_PREVIEW: function handleClearStickerPreview(arg0) {
    if (null != arg0.draftType === DraftType.FirstThreadMessage ? closure_2 : closure_1[arg0.channelId]) {
      delete tmp[tmp2];
    }
  },
  LOGOUT: function resetState() {
    closure_1 = {};
    closure_2 = {};
  }
});
const result = size.fileFinishedImporting("modules/stickers/StickerMessagePreviewStore.tsx");

export default stickerMessagePreviewStore;