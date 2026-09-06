// discord_app/modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
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
  dependencyMap = onChange(17749)();
  if (null == activeTrialUserlimit.activeTrialUserlimit) {
    let intl = str(1114).intl;
    let stringResult = intl.string(str(1114).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  return jsx(onChange(13896), {
    label: stringResult,
    onPress() {
      const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = util.intl;
      obj.title = intl.string(util.t["/JD9oe"]);
      obj.items = items;
      obj.onItemSelect = function onItemSelect(arg0) {
        closure_1_1(arg0);
        onChange(closure_2[5]).hideActionSheet(closure_2_4);
      };
      obj.selectedItem = str;
      obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), c4, obj);
    },
    disabled: activeTrialUserlimit.disabled,
  });
}
