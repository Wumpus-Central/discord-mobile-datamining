// === Module 13105: useShopThisLookMarketing ===

// Module 13105 (useShopThisLookMarketing)
import dismissible_content from "dismissible_content" /* 1943 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7388 */;
import useMaybeFetchEquippedCollectibleProducts from "useMaybeFetchEquippedCollectibleProducts" /* 8216 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  let obj = useMaybeFetchEquippedCollectibleProducts;
  useSelectedDismissibleContent;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = _slicedToArray(tmp5([], undefined, true), 2);
    obj = { isVisible: null != tmp8[0], markAsDismissed: tmp8[1] };
    return obj;
  }
};