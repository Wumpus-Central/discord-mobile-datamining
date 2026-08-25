// === Module 17067: getSource ===

// Module 17067 (getSource)
import set from "set" /* 2 */;
import getSourceAll from "getSource" /* 17068 */;

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