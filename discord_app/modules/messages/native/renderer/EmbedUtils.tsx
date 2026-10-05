// discord_app/modules/messages/native/renderer/EmbedUtils.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
