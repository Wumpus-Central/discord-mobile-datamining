// discord_app/modules/app_icons/native/SettingsItemAppIcon.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AppIconDefault from "AppIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const AppIconTypes = ClydeIcon(9469);
const ClydeIcon2 = ClydeIcon(10171);
const AppIconUtils = ClydeIcon(13724);
require = fn;
const getIconById = fn(9468).getIconById;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { icon: { borderRadius: nativeDefault.radii.round } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.round };
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SettingsItemAppIcon(color) {
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
    }
  : function SettingsItemAppIcon(color) {
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
    };
