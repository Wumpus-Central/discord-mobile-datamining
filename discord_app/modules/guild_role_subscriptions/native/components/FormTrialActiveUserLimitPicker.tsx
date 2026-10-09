// === Module 18437: FormTrialActiveUserLimitPicker ===

// Module 18437 (FormTrialActiveUserLimitPicker)
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let c4 = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx");

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = onChange(18438)();
  if (null == activeTrialUserlimit.activeTrialUserlimit) {
    let intl = str(1126).intl;
    let stringResult = intl.string(str(1126).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  return jsx(onChange(14045), {
    label: stringResult,
    onPress: function handleSelectLimit() {
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
      obj.openLazy(asyncRequireImpl(8537, dependencyMap.paths), c4, obj2);
    },
    disabled: activeTrialUserlimit.disabled
  });
};