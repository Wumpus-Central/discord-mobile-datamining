// === Module 8331: renderer/EmbedUtils ===

// Module 8331 (renderer/EmbedUtils)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1084 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

export function getAssetUriForEmbed(Image) {
  return Image.resolveAssetSource(Image).uri;
}
export function isWebviewVideo(video) {
  video = video.video;
  let tmp = null != video;
  if (tmp) {
    tmp = null == video.proxyURL;
  }
  if (tmp) {
    tmp = video.type !== MessageEmbedTypes.GIFV;
  }
  return tmp;
}