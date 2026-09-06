// === Module 16405: getIconSize ===

// Module 16405 (getIconSize)
import size from "module_2" /* 2 */;

const ICON_SIZE = { xxs: 12, xs: 16, sm: 18, md: 24, lg: 32, custom: "ip", refresh_sm: true };
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Icon/getIconSize.tsx");

export const getIconSize = function getIconSize(arg0) {
  if ("custom" === arg0) {
    return null;
  } else {
    const size = { width: obj[arg0], height: obj[arg0] };
    return size;
  }
};
export { ICON_SIZE };