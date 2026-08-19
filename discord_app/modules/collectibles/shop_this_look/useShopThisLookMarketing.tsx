// discord_app/modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useEquippedCollectibleSkuIds from "../hooks/useMaybeFetchEquippedCollectibleProducts.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  let obj = useEquippedCollectibleSkuIds;
  useSelectedDismissibleContent;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      const items = [DismissibleContent.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = callback(tmp5([], undefined, true), 2);
    obj = { isVisible: null, markAsDismissed: null };
    obj[0] = null != tmp8[0];
    obj[1] = tmp8[1];
    return obj;
  }
  tmp3 = obj.useEquippedCollectibleSkuIds(id, guildId).length > 0;
};