import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { padding: 16 }, space: { height: 8 }, alertHeader: { paddingBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx");

export default function FormGuildGatingModeSelector(isFullServerGating) {
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  let dependencyMap;
  const tmp = callback3();
  dependencyMap = tmp;
  let obj = isFullServerGating(16653);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = React.useCallback(() => {
    onChange(false);
  }, items);
  obj = { style: tmp.container, accessibilityRole: "radiogroup", accessibilityState: { disabled: roleSubscriptionSettingsDisabled }, children: null };
  const callback1 = React.useCallback(() => {
    if (!isFullServerGating) {
      let obj = onChange(_undefined[5]);
      obj = { confirmText: null, children: null };
      const intl = isFullServerGating(_undefined[6]).intl;
      obj[0] = intl.string(isFullServerGating(_undefined[6]).t["NX+WJN"]);
      obj = { children: null };
      const obj1 = { style: null, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
      obj1[0] = _undefined.alertHeader;
      const intl2 = isFullServerGating(_undefined[6]).intl;
      obj1[3] = intl2.string(isFullServerGating(_undefined[6]).t.dmVoOz);
      const items = [outer1_5(isFullServerGating(_undefined[7]).Text, obj1), ];
      const obj2 = { variant: "text-md/normal", children: null };
      const intl3 = isFullServerGating(_undefined[6]).intl;
      obj2[1] = intl3.string(isFullServerGating(_undefined[6]).t.mtwzdD);
      items[1] = outer1_5(isFullServerGating(_undefined[7]).Text, obj2);
      obj[0] = items;
      obj[1] = outer1_7(outer1_6, obj);
      obj.show(obj);
    }
    onChange(true);
  }, items1);
  obj = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
  obj[0] = onChange(11125);
  let intl = isFullServerGating(1236).intl;
  obj[1] = intl.string(isFullServerGating(1236).t.rXqxhF);
  let intl2 = isFullServerGating(1236).intl;
  obj[2] = intl2.string(isFullServerGating(1236).t.yQiJne);
  obj[3] = !isFullServerGating;
  obj[4] = callback;
  obj[5] = roleSubscriptionSettingsDisabled;
  const items2 = [callback(onChange(16655), obj), callback(View, { style: tmp.space }), ];
  let obj2 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
  let obj1 = { style: tmp.space };
  const tmp5 = onChange(16655);
  obj2[0] = onChange(16656);
  let intl3 = isFullServerGating(1236).intl;
  obj2[1] = intl3.string(isFullServerGating(1236).t.WzC9s6);
  const intl4 = isFullServerGating(1236).intl;
  obj2[2] = intl4.string(isFullServerGating(1236).t.WmagiB);
  obj2[3] = isFullServerGating;
  obj2[4] = callback1;
  obj2[5] = roleSubscriptionSettingsDisabled;
  items2[2] = callback(onChange(16655), obj2);
  obj[3] = items2;
  return callback2(View, obj);
};