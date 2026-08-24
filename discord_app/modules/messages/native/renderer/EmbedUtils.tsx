// === Module 8171: frozen ===

// Module 8171 (frozen)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import set from "set" /* 2 */;

const Image = get_ActivityIndicator.Image;
let set = new Set(["YouTube", "TikTok"]);
const frozen = Object.freeze(set);
const result = set.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

export const getAssetUriForEmbed = function getAssetUriForEmbed(Image) {
  return Image.resolveAssetSource(Image).uri;
};
export const SUPPORTED_VIDEO_PARTNERS = frozen;
export const shouldPlayVideoInline = function shouldPlayVideoInline(effectiveVideoProvider) {
  let str = effectiveVideoProvider;
  if (effectiveVideoProvider == null) {
    str = "";
  }
  return frozen.has(str);
};