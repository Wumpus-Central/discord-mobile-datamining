// === Module 18310: FormTrialIntervalPicker ===

// Module 18310 (FormTrialIntervalPicker)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import FormDropdownDefault from "FormDropdown" /* 14262 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(disabled) {
  const interval = disabled.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = disabled);
  if (null == interval) {
    let intl = interval(1115).intl;
    let stringResult = intl.string(interval(1115).t.WZG1BU);
  } else {
    stringResult = interval(15580).formatPlanIntervalDuration(interval);
    let obj = interval(15580);
  }
  return jsx(FormDropdownDefault, {
    label: stringResult,
    onPress() {
      const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj2.title = intl.string(util.t.m1KuWd);
      obj2.items = items;
      obj2.onItemSelect = function onItemSelect(arg0) {
        if (closure_1_1 != null) {
          tmp(arg0);
        }
        require("ActionSheetActionCreators").hideActionSheet(GuildRoleSubscriptionTrialIntervalSelect);
      };
      let tmp3 = interval;
      if (interval == null) {
        tmp3 = null;
      }
      obj2.selectedItem = tmp3;
      obj.openLazy(asyncRequireImpl(9623, dependencyMap.paths), GuildRoleSubscriptionTrialIntervalSelect, obj2);
      const tmp = asyncRequireImpl(9623, dependencyMap.paths);
    },
    disabled: disabled.disabled
  });
};