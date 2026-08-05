// discord_app/modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx
import { Distributors } from "ME";

const result = require("XBOX_DISCORD_OCID").fileFinishedImporting("modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx");

export default function useXboxGamePassStoreUrl(thirdPartySkus) {
  if (null == thirdPartySkus) {
    return null;
  } else {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    const found = thirdPartySkus.find((distributor) => {
      let tmp = distributor.distributor === constants.XBOX_GAME_PASS;
      if (tmp) {
        tmp = !callback(table[1]).isNullOrEmpty(distributor.id);
        const obj = callback(table[1]);
      }
      return tmp;
    });
    let id;
    if (found != null) {
      id = found.id;
    }
    let xboxGamePassStoreUrl = null;
    if (null != id) {
      xboxGamePassStoreUrl = require("../../activities/utils/distributorStoreUrls.tsx") /* XBOX_DISCORD_OCID */.buildXboxGamePassStoreUrl(found.id);
      let obj = require("../../activities/utils/distributorStoreUrls.tsx") /* XBOX_DISCORD_OCID */;
    }
    return xboxGamePassStoreUrl;
  }
};