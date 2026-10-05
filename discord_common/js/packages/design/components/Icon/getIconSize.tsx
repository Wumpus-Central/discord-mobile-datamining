// discord_common/js/packages/design/components/Icon/getIconSize.tsx
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const ICON_SIZE = { xxs: 12, xs: 16, sm: 18, md: 24, lg: 32, custom: "duration", refresh_sm: true };
let size = size_mod;
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Icon/getIconSize.tsx");

export const getIconSize = function getIconSize(arg0) {
  if ("custom" === arg0) {
    return null;
  } else {
    size = { width: obj[arg0], height: obj[arg0] };
    return size;
  }
};
export { ICON_SIZE };
