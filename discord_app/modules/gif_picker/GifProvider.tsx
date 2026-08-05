// discord_app/modules/gif_picker/GifProvider.tsx
const result = require("set").fileFinishedImporting("modules/gif_picker/GifProvider.tsx");

export const GIF_PROVIDER = "klipy";
export const GIF_PROVIDER_EMBED_NAME = "Klipy";
export const getSearchPlaceholder = function getSearchPlaceholder() {
  const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
  return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.T1Frnm);
};