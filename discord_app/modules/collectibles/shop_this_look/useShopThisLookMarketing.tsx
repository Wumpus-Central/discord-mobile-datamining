// discord_app/modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx
import _slicedToArray from "_slicedToArray";
import { DismissibleContent } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { useSelectedDismissibleContent } from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import { useEquippedCollectibleSkuIds } from "../hooks/useMaybeFetchEquippedCollectibleProducts.tsx";

const require = arg1;
const result = require("useSelectedDismissibleContent").fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = function useShopThisLookMarketing(id, guildId, isShopThisLookMobileEnabled) {
  let obj = useEquippedCollectibleSkuIds /* useEquippedCollectibleSkuIds */;
  useSelectedDismissibleContent /* useSelectedDismissibleContent */;
  if (isShopThisLookMobileEnabled) {
    if (tmp3) {
      const items = [DismissibleContent /* DismissibleContent */.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = callback(tmp5([], undefined, true), 2);
    obj = { isVisible: null, markAsDismissed: null };
    obj[0] = null != tmp8[0];
    obj[1] = tmp8[1];
    return obj;
  }
};