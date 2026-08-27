// === Module 8743: useXboxGamePassStoreUrl ===

// Module 8743 (useXboxGamePassStoreUrl)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import XBOX_DISCORD_OCID from "XBOX_DISCORD_OCID" /* 8736 */;

const Distributors = ME.Distributors;
const result = set.fileFinishedImporting("modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx");

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
      xboxGamePassStoreUrl = XBOX_DISCORD_OCID.buildXboxGamePassStoreUrl(found.id);
      let obj = XBOX_DISCORD_OCID;
    }
    return xboxGamePassStoreUrl;
  }
};