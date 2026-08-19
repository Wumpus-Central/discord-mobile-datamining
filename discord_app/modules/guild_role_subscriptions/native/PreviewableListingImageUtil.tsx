// discord_app/modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSourceAll from "../ListingImageUtil.tsx";

const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = getSourceAll.getSource(imageLocal);
  }
  return imageLocal;
};