// === Module 19815: PreviewableListingImageUtil ===

// Module 19815 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19816 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/PreviewableListingImageUtil.tsx");

export function getSource(imageLocal) {
  if (null != imageLocal.imageLocal) {
    imageLocal = imageLocal.imageLocal;
  } else {
    imageLocal = ListingImageUtilAll.getSource(imageLocal);
  }
  return imageLocal;
}