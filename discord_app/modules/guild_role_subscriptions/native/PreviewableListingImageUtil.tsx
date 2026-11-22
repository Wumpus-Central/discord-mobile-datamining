// === Module 19998: PreviewableListingImageUtil ===

// Module 19998 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 19999 */;
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