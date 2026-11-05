// === Module 17799: SettingsItemAppIcon ===

// Module 17799 (SettingsItemAppIcon)
import nativeDefault from "native" /* 575 */;
import AppIconTypes from "AppIconTypes" /* 10168 */;
import ClydeIcon from "ClydeIcon" /* 10869 */;
import AppIconUtils from "AppIconUtils" /* 15586 */;
import AppIconDefault from "AppIcon" /* 17283 */;
import noop from "module_19" /* 19 */;

require = fn;
const getIconById = fn(10167).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(5143);
let obj2 = { icon: { borderRadius: nativeDefault.radii.round } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const tmp3 = closure_5();
  const currentAppIcon = AppIconUtils.useCurrentAppIcon();
  if (currentAppIcon !== AppIconTypes.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp7) {
      const obj2 = { style: tmp3.icon, id: currentAppIcon, size: 32 };
      let tmp11 = jsx(AppIconDefault, { style: tmp3.icon, id: currentAppIcon, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(ClydeIcon.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
  tmp7 = getIconById(currentAppIcon);
};