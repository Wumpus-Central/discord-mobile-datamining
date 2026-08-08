// discord_app/modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = importAll(16800).getSource(imageLocal);
    const obj = importAll(16800);
  }
  return imageLocal;
};