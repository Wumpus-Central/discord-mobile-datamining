// === Module 15403: ShowDevWidgetSetting ===

// Module 15403 (ShowDevWidgetSetting)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import useIsStaffOrDeveloperSettingPredicate from "useIsStaffOrDeveloperSettingPredicate" /* 14650 */;
import DevToolsActionCreators from "DevToolsActionCreators" /* 15404 */;
import StaffBadgeIcon from "StaffBadgeIcon" /* 15405 */;
import DevToolsSettingsStore from "DevToolsSettingsStore" /* 7203 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let showDevWidget;
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
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
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let showDevWidget;
  const items = [DevToolsSettingsStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => showDevWidget.showDevWidget);
});
let obj = {
  useTitle() {
    return "Show Dev Tools Widget";
  },
  parent: null,
  IconComponent: StaffBadgeIcon.StaffBadgeIcon,
  onValueChange: function handleShowDevWidgetSettingToggle(showDevWidget) {
    const obj = DevToolsActionCreators;
    const obj2 = { showDevWidget };
    const result = obj.updateDevToolsSettings(obj2);
  },
  useValue: tmp2,
  usePredicate: useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate
};
const toggle = SettingBuilders.createToggle(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/ShowDevWidgetSetting.tsx");

export default toggle;