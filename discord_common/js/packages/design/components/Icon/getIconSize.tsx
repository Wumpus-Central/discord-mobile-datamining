// === Module 15762: getIconSize ===

// Module 15762 (getIconSize)
import set from "set" /* 2 */;

let obj = { xxs: 12, xs: 16, sm: 18, md: 24, lg: 32, custom: "disabled", refresh_sm: true };
const result = set.fileFinishedImporting("../discord_common/js/packages/design/components/Icon/getIconSize.tsx");

export const getIconSize = function getIconSize(arg0) {
  if ("custom" === arg0) {
    return null;
  } else {
    obj = { width: null, height: null };
    obj[0] = obj[arg0];
    obj[1] = obj[arg0];
    return obj;
  }
};
export const ICON_SIZE = obj;