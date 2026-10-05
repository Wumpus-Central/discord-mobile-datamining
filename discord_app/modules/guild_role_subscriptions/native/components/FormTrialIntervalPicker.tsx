// discord_app/modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import FormDropdownDefault from "FormDropdown.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx",
);

export default function FormTrialIntervalPicker(interval) {
  let items;
  let stringResult;
  interval = interval.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = interval);
  const disabled = interval.disabled;
  FormDropdownDefault;
  if (null == interval) {
    let intl = interval(1126).intl;
    stringResult = intl.string(interval(1126).t.WZG1BU);
  } else {
    let tmp4 = interval;
    let obj = interval(15049);
    stringResult = obj.formatPlanIntervalDuration(interval);
  }
  return (
    <tmp3
      label={stringResult}
      onPress={function onPress() {
        let intl;
        let tmp4;
        const tmp = ActionSheetActionCreatorsDefault;
        const openLazy = tmp.openLazy;
        let obj = {
          title: intl.string(intl2.t.m1KuWd),
          items: dependencyMap,
          onItemSelect(arg0) {
            if (closure_1_1 != null) {
              tmp(arg0);
            }
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(GuildRoleSubscriptionTrialIntervalSelect);
          },
          selectedItem: tmp4,
          hasIcons: false,
        };
        const tmp2 = asyncRequire(8949, dependencyMap.paths);
        intl = intl2.intl;
        tmp4 = interval;
        if (interval == null) {
          tmp4 = null;
        }
        openLazy(tmp2, GuildRoleSubscriptionTrialIntervalSelect, obj);
      }}
      disabled={disabled}
    />
  );
}
