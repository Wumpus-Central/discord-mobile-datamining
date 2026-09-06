// discord_app/modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useMaybeFetchEquippedCollectibleProducts from "../hooks/useMaybeFetchEquippedCollectibleProducts.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

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
  tmp3 = obj.useEquippedCollectibleSkuIds(id, guildId).length > 0;
};
