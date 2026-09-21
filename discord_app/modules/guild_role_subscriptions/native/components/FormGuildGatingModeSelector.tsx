// === Module 18182: FormGuildGatingModeSelector ===

// Module 18182 (FormGuildGatingModeSelector)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5109 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let closure_8 = createStyles.createStyles({ container: { padding: 16 }, space: { height: 8 }, alertHeader: { paddingBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx");

export default function FormGuildGatingModeSelector(isFullServerGating) {
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  const tmp = closure_8();
  dependencyMap = tmp;
  const roleSubscriptionSettingsDisabled = isFullServerGating(18183).useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = noop.useCallback(() => {
    onChange(false);
  }, items);
  let obj2 = { style: tmp.container, accessibilityRole: "radiogroup", accessibilityState: { disabled: roleSubscriptionSettingsDisabled }, children: null };
  const callback1 = noop.useCallback(() => {
    if (!isFullServerGating) {
      const obj2 = { confirmText: null, children: null };
      const intl = util.intl;
      obj2.confirmText = intl.string(util.t["NX+WJN"]);
      const obj3 = { children: null };
      const obj4 = { style: alertHeader.alertHeader, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.dmVoOz);
      const items = [hasOwnProperty(Text_Text.Text, obj4), ];
      const obj5 = { variant: "text-md/normal", children: null };
      const intl3 = util.intl;
      obj5.children = intl3.string(util.t.mtwzdD);
      items[1] = hasOwnProperty(Text_Text.Text, obj5);
      obj3.children = items;
      obj2.children = React5(timestampProducer, obj3);
      actions_AlertActionCreatorsDefault.show(obj2);
    }
    onChange(true);
  }, items1);
  let obj3 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
  let obj = isFullServerGating(18183);
  obj3.icon = onChange(12058);
  let intl = isFullServerGating(1115).intl;
  obj3.title = intl.string(isFullServerGating(1115).t.rXqxhF);
  let intl2 = isFullServerGating(1115).intl;
  obj3.description = intl2.string(isFullServerGating(1115).t.yQiJne);
  obj3.selected = !isFullServerGating;
  obj3.onPress = callback;
  obj3.disabled = roleSubscriptionSettingsDisabled;
  const items2 = [closure_5(onChange(18185), obj3), closure_5(View, { style: tmp.space }), ];
  let obj5 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
  let obj4 = { style: tmp.space };
  const tmp5 = onChange(18185);
  obj5.icon = onChange(18186);
  let intl3 = isFullServerGating(1115).intl;
  obj5.title = intl3.string(isFullServerGating(1115).t.WzC9s6);
  const intl4 = isFullServerGating(1115).intl;
  obj5.description = intl4.string(isFullServerGating(1115).t.WmagiB);
  obj5.selected = isFullServerGating;
  obj5.onPress = callback1;
  obj5.disabled = roleSubscriptionSettingsDisabled;
  items2[2] = closure_5(onChange(18185), obj5);
  obj2.children = items2;
  return closure_7(View, obj2);
};