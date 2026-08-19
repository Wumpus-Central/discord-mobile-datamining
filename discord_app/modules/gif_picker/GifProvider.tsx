// === Module 10196: GIF_PROVIDER ===

// Module 10196 (GIF_PROVIDER)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = obj132.fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = getSystemLocale.intl;
  return intl.string(getSystemLocale.t.T1Frnm);
};