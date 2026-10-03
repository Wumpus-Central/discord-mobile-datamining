// discord_app/modules/user_settings/defs/native/ShowDevWidgetSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import DevToolsActionCreators from "../../../devtools/DevToolsActionCreators.tsx";
import DevToolsSettingsStore from "../../../devtools/DevToolsSettingsStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11129);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DevToolsSettingsStore];
        const fn = function n() {
          return showDevWidget.showDevWidget;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [DevToolsSettingsStore];
      return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
    };
const toggle = SettingBuilders.createToggle({
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(15401).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const result = DevToolsActionCreators.updateDevToolsSettings({ showDevWidget });
  },
  useValue: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [DevToolsSettingsStore];
          const fn = function n() {
            return showDevWidget.showDevWidget;
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp4 = items;
          tmp5 = fn;
        } else {
          [tmp4, tmp5] = cResult;
        }
        return initialize.useStateFromStores(tmp4, tmp5);
      }
    : () => {
        const items = [DevToolsSettingsStore];
        return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
      },
  usePredicate: fn(14646).useStaffOrDeveloperSettingPredicate,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;
