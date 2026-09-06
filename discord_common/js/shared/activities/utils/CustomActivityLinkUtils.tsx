// === Module 12943: utils/CustomActivityLinkUtils ===

// Module 12943 (utils/CustomActivityLinkUtils)
import _slicedToArray from "module_32" /* 32 */;

const CustomLinkType = { MANAGED: 0, [0]: "MANAGED", QUICK: 1, [1]: "QUICK" };
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx");

export { CustomLinkType };
export const decodeCustomActivityLink = function decodeCustomActivityLink(link_id) {
  if (null == link_id) {
    return null;
  } else {
    const tmp2 = _slicedToArray(link_id.split("-"), 2);
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
      obj = { type: MANAGED, encodedLinkId: link_id, decodedLinkId: tmp2[1] };
      tmp7 = obj;
    }
    return tmp7;
  }
};