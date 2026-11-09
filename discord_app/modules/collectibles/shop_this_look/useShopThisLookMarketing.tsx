// === Module 15056: useShopThisLookMarketing ===

// Module 15056 (useShopThisLookMarketing)
import dismissible_content from "dismissible_content" /* 4973 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7641 */;
import useMaybeFetchEquippedCollectibleProducts from "useMaybeFetchEquippedCollectibleProducts" /* 8859 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  useSelectedDismissibleContent;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = _slicedToArray(tmp5([], { bypassAutoDismiss: true }), 2);
    const obj2 = { isVisible: null != tmp8[0], markAsDismissed: tmp8[1] };
    return obj2;
  }
  tmp3 = useMaybeFetchEquippedCollectibleProducts.useEquippedCollectibleSkuIds(id, guildId).length > 0;
}