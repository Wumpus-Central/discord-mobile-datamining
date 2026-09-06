// discord_app/modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx
import Constants from "../../../Constants.tsx";
import StringUtils from "../../../utils/StringUtils.tsx";
import distributorStoreUrls from "../../activities/utils/distributorStoreUrls.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const Distributors = Constants.Distributors;
const result = size.fileFinishedImporting("modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx");

export default function useXboxGamePassStoreUrl(thirdPartySkus) {
  if (null == thirdPartySkus) {
    return null;
  } else {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    const found = thirdPartySkus.find((distributor) => {
      let tmp = distributor.distributor === constants.XBOX_GAME_PASS;
      if (tmp) {
        tmp = !StringUtils.isNullOrEmpty(distributor.id);
      }
      return tmp;
    });
    let id;
    if (found != null) {
      id = found.id;
    }
    let xboxGamePassStoreUrl = null;
    if (null != id) {
      xboxGamePassStoreUrl = distributorStoreUrls.buildXboxGamePassStoreUrl(found.id);
    }
    return xboxGamePassStoreUrl;
  }
}
