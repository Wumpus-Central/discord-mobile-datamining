// === Module 20001: PreviewableListingImageUtil ===

// Module 20001 (PreviewableListingImageUtil)
import ListingImageUtilAll from "ListingImageUtil" /* 20002 */;
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