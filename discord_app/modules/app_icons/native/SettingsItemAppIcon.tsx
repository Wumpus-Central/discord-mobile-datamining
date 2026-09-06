// === Module 15522: SettingsItemAppIcon ===

// Module 15522 (SettingsItemAppIcon)
import nativeDefault from "native" /* 576 */;
import AppIconTypes from "AppIconTypes" /* 9324 */;
import ClydeIcon from "ClydeIcon" /* 10818 */;
import AppIconUtils from "AppIconUtils" /* 13363 */;
import AppIconDefault from "AppIcon" /* 15523 */;
import noop from "module_19" /* 19 */;

require = fn;
const getIconById = fn(9323).getIconById;
const jsx = fn(21).jsx;
fn(4560);
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