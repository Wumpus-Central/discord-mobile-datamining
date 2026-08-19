// === Module 8171: frozen ===

// Module 8171 (frozen)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

const Image = get_ActivityIndicator.Image;
const frozen = Object.freeze(new Set(["YouTube", "TikTok"]));
const set = new Set(["YouTube", "TikTok"]);
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

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