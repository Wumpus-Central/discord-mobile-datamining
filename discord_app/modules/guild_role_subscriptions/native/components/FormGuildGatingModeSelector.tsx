// discord_app/modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({
  container: { padding: 16 },
  space: { height: 8 },
  alertHeader: { paddingBottom: 16 },
});
const result = require("set").fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx",
);

export default function FormGuildGatingModeSelector(isFullServerGating) {
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  dependencyMap = undefined;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = isFullServerGating(17724);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = React.useCallback(() => {
    onChange(false);
  }, items);
  obj = {
    style: tmp.container,
    accessibilityRole: "radiogroup",
    accessibilityState: { disabled: roleSubscriptionSettingsDisabled },
    children: null,
  };
  const callback1 = React.useCallback(() => {
    if (!isFullServerGating) {
      let obj = onChange(alertHeader[5]);
      obj = { confirmText: null, children: null };
      const intl = isFullServerGating(alertHeader[6]).intl;
      obj[0] = intl.string(isFullServerGating(alertHeader[6]).t["NX+WJN"]);
      obj = { children: null };
      obj1 = { style: null, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
      obj1[0] = alertHeader.alertHeader;
      const intl2 = isFullServerGating(alertHeader[6]).intl;
      obj1[3] = intl2.string(isFullServerGating(alertHeader[6]).t.dmVoOz);
      const items = [closure_1_5(isFullServerGating(alertHeader[7]).Text, obj1)];
      const obj2 = { variant: "text-md/normal", children: null };
      const intl3 = isFullServerGating(alertHeader[6]).intl;
      obj2[1] = intl3.string(isFullServerGating(alertHeader[6]).t.mtwzdD);
      items[1] = closure_1_5(isFullServerGating(alertHeader[7]).Text, obj2);
      obj[0] = items;
      obj[1] = closure_1_7(closure_1_6, obj);
      obj.show(obj);
    }
    onChange(true);
  }, items1);
  obj = { icon: onChange(11804), title: null, description: null, selected: null, onPress: null, disabled: null };
  let intl = isFullServerGating(1114).intl;
  obj[1] = intl.string(isFullServerGating(1114).t.rXqxhF);
  let intl2 = isFullServerGating(1114).intl;
  obj[2] = intl2.string(isFullServerGating(1114).t.yQiJne);
  obj[3] = !isFullServerGating;
  obj[4] = callback;
  obj[5] = roleSubscriptionSettingsDisabled;
  const items2 = [callback(onChange(17726), obj), callback(View, { style: tmp.space })];
  let obj2 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
  obj1 = { style: tmp.space };
  const tmp5 = onChange(17726);
  obj2[0] = onChange(17727);
  let intl3 = isFullServerGating(1114).intl;
  obj2[1] = intl3.string(isFullServerGating(1114).t.WzC9s6);
  const intl4 = isFullServerGating(1114).intl;
  obj2[2] = intl4.string(isFullServerGating(1114).t.WmagiB);
  obj2[3] = isFullServerGating;
  obj2[4] = callback1;
  obj2[5] = roleSubscriptionSettingsDisabled;
  items2[2] = callback(onChange(17726), obj2);
  obj[3] = items2;
  return callback2(View, obj);
}
