// === Module 9107: useXboxGamePassStoreUrl ===

// Module 9107 (useXboxGamePassStoreUrl)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import XBOX_DISCORD_OCID from "XBOX_DISCORD_OCID" /* 9100 */;

const Distributors = ME.Distributors;
const result = obj132.fileFinishedImporting("modules/game_profile/hooks/useXboxGamePassStoreUrl.tsx");

export default function useXboxGamePassStoreUrl(thirdPartySkus) {
  if (null == thirdPartySkus) {
    return null;
  } else {
    thirdPartySkus = thirdPartySkus.thirdPartySkus;
    const found = thirdPartySkus.find((item, index) => {
      let tmp = item.distributor === constants.XBOX_GAME_PASS;
      if (tmp) {
        tmp = !callback(table[1]).isNullOrEmpty(item.id);
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
    }
    return xboxGamePassStoreUrl;
  }
};