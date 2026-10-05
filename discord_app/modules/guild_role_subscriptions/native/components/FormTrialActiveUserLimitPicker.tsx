// discord_app/modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

const jsx = Fragment.jsx;
const GuildRoleSubscriptionTrialActiveUserLimitSelect = "GuildRoleSubscriptionTrialActiveUserLimitSelect";
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/FormTrialActiveUserLimitPicker.tsx",
);

export default function FormTrialActiveUserLimitPicker(activeTrialUserlimit) {
  let items;
  let stringResult;
  const str = activeTrialUserlimit.activeTrialUserlimit;
  const onChange = activeTrialUserlimit.onChange;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  const disabled = activeTrialUserlimit.disabled;
  dependencyMap = onChange(17943)();
  onChange(13708);
  if (null == str) {
    let intl = str(1126).intl;
    stringResult = intl.string(str(1126).t.zHfL6o);
  } else {
    stringResult = str.toString();
  }
  return (
    <tmp3
      label={stringResult}
      onPress={function onPress() {
        let intl;
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        let obj = {
          title: intl.string(intl2.t["/JD9oe"]),
          items,
          onItemSelect(arg0) {
            closure_1_1(arg0);
            const obj = onChange(items[5]);
            obj.hideActionSheet(GuildRoleSubscriptionTrialActiveUserLimitSelect);
          },
          selectedItem: str,
          hasIcons: false,
        };
        const tmp2 = asyncRequire(8949, dependencyMap.paths);
        intl = intl2.intl;
        openLazy(tmp2, GuildRoleSubscriptionTrialActiveUserLimitSelect, obj);
      }}
      disabled={disabled}
    />
  );
}
