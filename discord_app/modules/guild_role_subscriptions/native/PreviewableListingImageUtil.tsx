// === Module 17807: PreviewableListingImageUtil ===

// Module 17807 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 17808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export const getSource = function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = ListingImageUtilAll.getSource(imageLocal);
  }
  return imageLocal;
};