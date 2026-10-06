// === Module 12761: utils/CustomActivityLinkUtils ===

// Module 12761 (utils/CustomActivityLinkUtils)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

const CustomLinkType = { MANAGED: 0, [0]: "MANAGED", QUICK: 1, [1]: "QUICK" };
const result = size.fileFinishedImporting("../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx");

export { CustomLinkType };
export const decodeCustomActivityLink = function decodeCustomActivityLink(link_id) {
  let first;
  let obj;
  let tmp4;
  if (null == link_id) {
    return null;
  } else {
    let MANAGED;
    [first, tmp4] = link_id.split("-");
    if ("0" === first) {
      MANAGED = obj.MANAGED;
    } else {
      MANAGED = null;
      if ("1" === first) {
        MANAGED = obj.QUICK;
      }
    }
    let tmp8 = null;
    if (null != MANAGED) {
      obj = { type: MANAGED, encodedLinkId: link_id, decodedLinkId: tmp4 };
      tmp8 = obj;
    }
    return tmp8;
  }
};