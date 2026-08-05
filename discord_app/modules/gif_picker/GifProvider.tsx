import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/gif_picker/GifProvider.tsx
const result = require("set").fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = getSystemLocale /* getSystemLocale */.intl;
  return intl.string(getSystemLocale /* getSystemLocale */.t.T1Frnm);
};