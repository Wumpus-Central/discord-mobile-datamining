// === Module 7605: renderer/EmbedUtils ===

// Module 7605 (renderer/EmbedUtils)
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const set = new Set(["YouTube", "TikTok"]);
const freezeResult = freeze(set);
const map = freezeResult;
const result = size.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

export const getAssetUriForEmbed = function getAssetUriForEmbed(Image) {
  return Image.resolveAssetSource(Image).uri;
};
export const SUPPORTED_VIDEO_PARTNERS = freezeResult;
export const shouldPlayVideoInline = function shouldPlayVideoInline(effectiveVideoProvider) {
  let str = effectiveVideoProvider;
  const has = map.has;
  if (effectiveVideoProvider == null) {
    str = "";
  }
  return has(str);
};