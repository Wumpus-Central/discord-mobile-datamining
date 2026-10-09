// === Module 15739: SettingsItemAppIcon ===

// Module 15739 (SettingsItemAppIcon)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AppIconDefault from "AppIcon" /* 15740 */;
import noop from "module_19" /* 19 */;

const AppIconTypes = ClydeIcon(9440);
const ClydeIcon2 = ClydeIcon(10142);
const AppIconUtils = ClydeIcon(13672);
require = fn;
const getIconById = fn(9439).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { icon: { borderRadius: nativeDefault.radii.round } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.round };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsItemAppIcon(color) {
  let ClydeIcon = require;
  let tmp = dependencyMap;
  const cResult = c.c(5);
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (undefined === INTERACTIVE_ICON_DEFAULT) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const tmp4 = closure_5();
  const currentAppIcon = AppIconUtils.useCurrentAppIcon();
  const ClydeIconResult = AppIconUtils;
  if (currentAppIcon !== AppIconTypes.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp6) {
      if (cResult[2] === currentAppIcon) {
        if (cResult[3] === tmp4.icon) {
          let tmp8 = cResult[4];
        }
        return tmp8;
      }
      const obj2 = { style: tmp4.icon, id: currentAppIcon, size: 32 };
      const tmp11 = jsx(AppIconDefault, { style: tmp4.icon, id: currentAppIcon, size: 32 });
      cResult[2] = currentAppIcon;
      cResult[3] = tmp4.icon;
      cResult[4] = tmp11;
      tmp8 = tmp11;
    }
  }
  if (cResult[0] !== INTERACTIVE_ICON_DEFAULT) {
    ClydeIcon = ClydeIcon2.ClydeIcon;
    const obj3 = { color: INTERACTIVE_ICON_DEFAULT };
    tmp = <ClydeIcon color={INTERACTIVE_ICON_DEFAULT} />;
    cResult[0] = INTERACTIVE_ICON_DEFAULT;
    cResult[1] = tmp;
  }
  tmp6 = getIconById(currentAppIcon);
}) : (function SettingsItemAppIcon(color) {
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
  tmp11 = jsx(ClydeIcon2.ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
  tmp7 = getIconById(currentAppIcon);
});