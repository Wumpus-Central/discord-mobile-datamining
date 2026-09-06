// discord_app/modules/messages/native/renderer/EmbedUtils.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
const frozen = Object.freeze(new Set(["YouTube", "TikTok"]));
const result = size.fileFinishedImporting("modules/messages/native/renderer/EmbedUtils.tsx");

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
