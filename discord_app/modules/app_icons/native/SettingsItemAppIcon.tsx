// === Module 15522: SettingsItemAppIcon ===

// Module 15522 (SettingsItemAppIcon)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import FreemiumAppIconIds from "FreemiumAppIconIds" /* 9324 */;
import ClydeIcon from "ClydeIcon" /* 10818 */;
import fetchCurrentAppIcon from "fetchCurrentAppIcon" /* 13363 */;
import AppIconDefault from "AppIcon" /* 15523 */;
import { getIconById } from "items" /* 9323 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
createCacheKey = { icon: null };
createCacheKey = { borderRadius: ThemesDefault.radii.round };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = ThemesDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = fetchCurrentAppIcon;
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp3 = callback();
  const tmp4 = require;
  if (currentAppIcon !== FreemiumAppIconIds.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp7) {
      obj = { style: null, id: null, size: 32 };
      obj[0] = tmp3.icon;
      obj[1] = currentAppIcon;
      let tmp11 = jsx(AppIconDefault, { style: null, id: null, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(ClydeIcon.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
};