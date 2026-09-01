// discord_app/modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx
import set from "../../../../_runtime/00002_set.js";
import getSourceAll from "../ListingImageUtil.tsx";

const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = getSourceAll.getSource(imageLocal);
    const obj = getSourceAll;
  }
  return imageLocal;
};
