// === Module 15555: SettingsItemAppIcon ===

// Module 15555 (SettingsItemAppIcon)
import nativeDefault from "native" /* 576 */;
import AppIconTypes from "AppIconTypes" /* 9356 */;
import ClydeIcon from "ClydeIcon" /* 10850 */;
import AppIconUtils from "AppIconUtils" /* 13390 */;
import AppIconDefault from "AppIcon" /* 15556 */;
import noop from "module_19" /* 19 */;

require = fn;
const getIconById = fn(9355).getIconById;
const jsx = fn(21).jsx;
fn(4574);
let createStyles = { icon: null };
createStyles = { borderRadius: nativeDefault.radii.round };
createStyles.icon = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = AppIconUtils;
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp3 = closure_5();
  if (currentAppIcon !== AppIconTypes.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp7) {
      obj = { style: tmp3.icon, id: currentAppIcon, size: 32 };
      let tmp11 = jsx(AppIconDefault, { style: tmp3.icon, id: currentAppIcon, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(ClydeIcon.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
  tmp7 = getIconById(currentAppIcon);
};