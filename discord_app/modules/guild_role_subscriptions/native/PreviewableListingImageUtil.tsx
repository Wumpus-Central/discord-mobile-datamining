// === Module 16942: getSource ===

// Module 16942 (getSource)
import obj132 from "obj132" /* 2 */;
import getSourceAll from "getSource" /* 16943 */;

const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = getSourceAll.getSource(imageLocal);
  }
  return imageLocal;
};