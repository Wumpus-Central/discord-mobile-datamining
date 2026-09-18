// discord_app/modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
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
  dependencyMap = onChange(18118)();
  if (null == activeTrialUserlimit.activeTrialUserlimit) {
    let intl = str(1115).intl;
    let stringResult = intl.string(str(1115).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  return jsx(onChange(14104), {
    label: stringResult,
    onPress() {
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
      obj.openLazy(asyncRequireImpl(9664, dependencyMap.paths), c4, obj2);
    },
    disabled: activeTrialUserlimit.disabled,
  });
}
