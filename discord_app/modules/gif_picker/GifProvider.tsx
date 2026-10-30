// === Module 10225: GifProvider ===

// Module 10225 (GifProvider)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export function getSearchPlaceholder() {
  const intl = util.intl;
  return intl.string(util.t.T1Frnm);
}