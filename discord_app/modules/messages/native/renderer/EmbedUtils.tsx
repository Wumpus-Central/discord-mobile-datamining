// discord_app/modules/messages/native/renderer/EmbedUtils.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
const result = size.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

export const getAssetUriForEmbed = function getAssetUriForEmbed(Image) {
  return Image.resolveAssetSource(Image).uri;
};
export const isWebviewVideo = function isWebviewVideo(video) {
  video = video.video;
  let tmp = null != video;
  if (tmp) {
    tmp = null == video.proxyURL;
  }
  if (tmp) {
    tmp = video.type !== MessageEmbedTypes.GIFV;
  }
  return tmp;
};
