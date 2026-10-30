// discord_app/modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01995_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let c4 = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx",
);

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = onChange(19902)();
  let obj = { label: null, subLabel: null, trailing: null, arrow: true, onPress: null, disabled: null };
  let intl = str(1114).intl;
  obj.label = intl.string(activeTrialUserlimit.activeTrialUserlimit(1114).t["/JD9oe"]);
  const intl2 = str(1114).intl;
  obj.subLabel = intl2.string(activeTrialUserlimit.activeTrialUserlimit(1114).t.Cg5eBm);
  if (null == activeTrialUserlimit.activeTrialUserlimit) {
    const intl3 = tmp3(1114).intl;
    let stringResult = intl3.string(tmp3(1114).t.GiTC5a);
  } else {
    stringResult = str.toString();
  }
  obj.trailing = jsx(activeTrialUserlimit.activeTrialUserlimit(6969).TableRow.TrailingText, { text: stringResult });
  obj.onPress = function handleSelectLimit() {
    const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
    const obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t["/JD9oe"]);
    obj2.items = items;
    obj2.onItemSelect = function onItemSelect(arg0) {
      closure_1_1(arg0);
      onChange(closure_2[5]).hideActionSheet(closure_2_4);
    };
    obj2.selectedItem = str;
    obj.openLazy(asyncRequireImpl(8993, dependencyMap.paths), c4, obj2);
  };
  obj.disabled = activeTrialUserlimit.disabled;
  return jsx(activeTrialUserlimit.activeTrialUserlimit(6969).TableRow, {
    label: null,
    subLabel: null,
    trailing: null,
    arrow: true,
    onPress: null,
    disabled: null,
  });
}
