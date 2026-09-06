// === Module 17747: FormTrialIntervalPicker ===

// Module 17747 (FormTrialIntervalPicker)
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import FormDropdownDefault from "FormDropdown" /* 13896 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx");

export default function FormTrialIntervalPicker(disabled) {
  const interval = disabled.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = disabled);
  if (null == interval) {
    let intl = interval(1114).intl;
    let stringResult = intl.string(interval(1114).t.WZG1BU);
  } else {
    let obj = interval(15231);
    stringResult = obj.formatPlanIntervalDuration(interval);
  }
  obj = {
    label: stringResult,
    onPress() {
      const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = util.intl;
      obj.title = intl.string(util.t.m1KuWd);
      obj.items = items;
      obj.onItemSelect = function onItemSelect(arg0) {
        if (closure_1_1 != null) {
          tmp(arg0);
        }
        require("ActionSheetActionCreators").hideActionSheet(GuildRoleSubscriptionTrialIntervalSelect);
      };
      let tmp3 = interval;
      if (interval == null) {
        tmp3 = null;
      }
      obj.selectedItem = tmp3;
      obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), GuildRoleSubscriptionTrialIntervalSelect, obj);
      const tmp = asyncRequireImpl(9426, dependencyMap.paths);
    },
    disabled: disabled.disabled
  };
  return jsx(FormDropdownDefault, {
    label: stringResult,
    onPress() {
      const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = util.intl;
      obj.title = intl.string(util.t.m1KuWd);
      obj.items = items;
      obj.onItemSelect = function onItemSelect(arg0) {
        if (closure_1_1 != null) {
          tmp(arg0);
        }
        require("ActionSheetActionCreators").hideActionSheet(GuildRoleSubscriptionTrialIntervalSelect);
      };
      let tmp3 = interval;
      if (interval == null) {
        tmp3 = null;
      }
      obj.selectedItem = tmp3;
      obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), GuildRoleSubscriptionTrialIntervalSelect, obj);
      const tmp = asyncRequireImpl(9426, dependencyMap.paths);
    },
    disabled: disabled.disabled
  });
};