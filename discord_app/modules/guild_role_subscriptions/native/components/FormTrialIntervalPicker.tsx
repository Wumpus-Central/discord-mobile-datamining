// discord_app/modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const GuildRoleSubscriptionTrialIntervalSelect = "GuildRoleSubscriptionTrialIntervalSelect";
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/FormTrialIntervalPicker.tsx",
);

export default function FormTrialIntervalPicker(interval) {
  interval = interval.interval;
  ({ onChange: importDefault, trialIntervalOptions: dependencyMap } = interval);
  let obj = { label: null, subLabel: null, trailing: null, arrow: true, onPress: null, disabled: null };
  let intl = interval(1114).intl;
  obj.label = intl.string(interval(1114).t.m1KuWd);
  const intl2 = interval(1114).intl;
  obj.subLabel = intl2.string(interval(1114).t.NB9NLF);
  if (null == interval) {
    const intl3 = tmp2(1114).intl;
    let stringResult = intl3.string(tmp2(1114).t.WZG1BU);
  } else {
    stringResult = tmp2(17151).formatPlanIntervalDuration(interval);
    const tmp2Result = tmp2(17151);
  }
  obj.trailing = jsx(interval(6969).TableRow.TrailingText, { text: stringResult });
  obj.onPress = function handleSelectTrialInterval() {
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
    obj.openLazy(asyncRequireImpl(8993, dependencyMap.paths), GuildRoleSubscriptionTrialIntervalSelect, obj2);
    const tmp = asyncRequireImpl(8993, dependencyMap.paths);
  };
  obj.disabled = interval.disabled;
  return jsx(interval(6969).TableRow, {
    label: null,
    subLabel: null,
    trailing: null,
    arrow: true,
    onPress: null,
    disabled: null,
  });
}
