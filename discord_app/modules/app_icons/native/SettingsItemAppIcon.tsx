// === Module 14571: SettingsItemAppIcon ===

// Module 14571 (SettingsItemAppIcon)
import "noop";
import { getIconById } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { icon: null };
createCacheKey = { borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = require(7570) /* fetchCurrentAppIcon */;
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp3 = createCacheKey();
  const tmp4 = require;
  if (currentAppIcon !== require(7572) /* FreemiumAppIconIds */.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp7) {
      obj = { style: null, id: null, size: 32 };
      obj[0] = tmp3.icon;
      obj[1] = currentAppIcon;
      let tmp11 = jsx(importDefault(14572), { style: null, id: null, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(tmp4(9921).ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
};