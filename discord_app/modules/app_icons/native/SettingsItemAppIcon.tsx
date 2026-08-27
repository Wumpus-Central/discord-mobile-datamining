// discord_app/modules/app_icons/native/SettingsItemAppIcon.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FreemiumAppIconIds from "../AppIconTypes.tsx";
import ClydeIcon from "../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import fetchCurrentAppIcon from "AppIconUtils.tsx";
import AppIconDefault from "AppIcon.tsx";
import { getIconById } from "AppIconConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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