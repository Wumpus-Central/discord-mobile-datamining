// === Module 15794: ShowDevWidgetSetting ===

// Module 15794 (ShowDevWidgetSetting)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15795 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7401 */;

require = fn;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10629);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useShowDevWidgetSettingToggleValue() {
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
}) : (function useShowDevWidgetSettingToggleValue() {
  const items = [DevToolsSettingsStore];
  return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: fn(15796).StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const result = DevToolsActionCreators.updateDevToolsSettings({ showDevWidget });
  },
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (function useShowDevWidgetSettingToggleValue() {
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
  }) : (function useShowDevWidgetSettingToggleValue() {
    const items = [DevToolsSettingsStore];
    return initialize.useStateFromStores(items, () => showDevWidget.showDevWidget);
  }),
  usePredicate: fn(15039).useStaffOrDeveloperSettingPredicate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;