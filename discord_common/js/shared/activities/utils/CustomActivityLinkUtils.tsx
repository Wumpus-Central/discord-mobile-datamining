// === Module 12720: CustomLinkType ===

// Module 12720 (CustomLinkType)
import closure_0 from "_slicedToArray" /* 32 */;

let obj = { MANAGED: 0, [0]: "MANAGED", QUICK: 1, [1]: "QUICK" };
const result = require("set").fileFinishedImporting("../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx");

export const CustomLinkType = obj;
export const decodeCustomActivityLink = function decodeCustomActivityLink(link_id) {
  if (null == link_id) {
    return null;
  } else {
    const tmp2 = callback(link_id.split("-"), 2);
    const first = tmp2[0];
    if ("0" === first) {
      let MANAGED = obj.MANAGED;
    } else {
      MANAGED = null;
      if ("1" === first) {
        MANAGED = obj.QUICK;
      }
    }
    let tmp7 = null;
    if (null != MANAGED) {
      obj = { type: null, encodedLinkId: null, decodedLinkId: null };
      obj[0] = MANAGED;
      obj[1] = link_id;
      obj[2] = tmp2[1];
      tmp7 = obj;
    }
    return tmp7;
  }
};