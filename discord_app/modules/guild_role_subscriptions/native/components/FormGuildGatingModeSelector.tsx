// === Module 17723: FormGuildGatingModeSelector ===

// Module 17723 (FormGuildGatingModeSelector)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { padding: 16 }, space: { height: 8 }, alertHeader: { paddingBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx");

export default function FormGuildGatingModeSelector(isFullServerGating) {
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = isFullServerGating(17724);
  const roleSubscriptionSettingsDisabled = obj.useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = noop.useCallback(() => {
    onChange(false);
  }, items);
  obj = { style: tmp.container, accessibilityRole: "radiogroup", accessibilityState: { disabled: roleSubscriptionSettingsDisabled }, children: null };
  const callback1 = noop.useCallback(() => {
    if (!isFullServerGating) {
      let obj = { confirmText: null, children: null };
      const intl = util.intl;
      obj.confirmText = intl.string(util.t["NX+WJN"]);
      obj = { children: null };
      const obj1 = { style: alertHeader.alertHeader, variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: null };
      const intl2 = util.intl;
      obj1.children = intl2.string(util.t.dmVoOz);
      const items = [hasOwnProperty(Text_Text.Text, obj1), ];
      const obj2 = { variant: "text-md/normal", children: null };
      const intl3 = util.intl;
      obj2.children = intl3.string(util.t.mtwzdD);
      items[1] = hasOwnProperty(Text_Text.Text, obj2);
      obj.children = items;
      obj.children = React5(timestampProducer, obj);
      obj.show(obj);
    }
    onChange(true);
  }, items1);
  obj = { icon: onChange(11804), title: null, description: null, selected: null, onPress: null, disabled: null };
  let intl = isFullServerGating(1114).intl;
  obj.title = intl.string(isFullServerGating(1114).t.rXqxhF);
  let intl2 = isFullServerGating(1114).intl;
  obj.description = intl2.string(isFullServerGating(1114).t.yQiJne);
  obj.selected = !isFullServerGating;
  obj.onPress = callback;
  obj.disabled = roleSubscriptionSettingsDisabled;
  const items2 = [closure_5(onChange(17726), obj), closure_5(View, { style: tmp.space }), ];
  let obj2 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
  let obj1 = { style: tmp.space };
  const tmp5 = onChange(17726);
  obj2.icon = onChange(17727);
  let intl3 = isFullServerGating(1114).intl;
  obj2.title = intl3.string(isFullServerGating(1114).t.WzC9s6);
  const intl4 = isFullServerGating(1114).intl;
  obj2.description = intl4.string(isFullServerGating(1114).t.WmagiB);
  obj2.selected = isFullServerGating;
  obj2.onPress = callback1;
  obj2.disabled = roleSubscriptionSettingsDisabled;
  items2[2] = closure_5(onChange(17726), obj2);
  obj.children = items2;
  return closure_7(View, obj);
};