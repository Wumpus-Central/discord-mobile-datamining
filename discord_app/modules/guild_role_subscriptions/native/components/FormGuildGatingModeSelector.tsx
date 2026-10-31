// discord_app/modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 }, alertHeader: null };
let obj3 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.alertHeader = { paddingBottom: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/FormGuildGatingModeSelector.tsx",
);

export default function FormGuildGatingModeSelector(isFullServerGating) {
  isFullServerGating = isFullServerGating.isFullServerGating;
  const onChange = isFullServerGating.onChange;
  const tmp = closure_8();
  dependencyMap = tmp;
  const roleSubscriptionSettingsDisabled = isFullServerGating(19938).useRoleSubscriptionSettingsDisabled();
  let items = [onChange];
  const items1 = [onChange, isFullServerGating, tmp];
  const callback = noop.useCallback(() => {
    onChange(false);
  }, items);
  let obj2 = {
    style: tmp.container,
    accessibilityRole: "radiogroup",
    accessibilityState: { disabled: roleSubscriptionSettingsDisabled },
    children: null,
  };
  const callback1 = noop.useCallback(() => {
    if (!isFullServerGating) {
      const obj2 = { confirmText: null, children: null };
      const intl = util.intl;
      obj2.confirmText = intl.string(util.t["NX+WJN"]);
      const obj3 = { children: null };
      const obj4 = {
        style: alertHeader.alertHeader,
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.dmVoOz);
      const items = [hasOwnProperty(Text_Text.Text, obj4)];
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
  let obj = isFullServerGating(19938);
  obj3.icon = isFullServerGating(8652).TextIcon;
  let intl = isFullServerGating(1113).intl;
  obj3.title = intl.string(isFullServerGating(1113).t.rXqxhF);
  let intl2 = isFullServerGating(1113).intl;
  obj3.description = intl2.string(isFullServerGating(1113).t.yQiJne);
  obj3.selected = !isFullServerGating;
  obj3.onPress = callback;
  obj3.disabled = roleSubscriptionSettingsDisabled;
  const items2 = [closure_5(onChange(19940), obj3)];
  let obj4 = { icon: null, title: null, description: null, selected: null, onPress: null, disabled: null };
  const tmp5 = onChange(19940);
  obj4.icon = isFullServerGating(7125).KeyIcon;
  let intl3 = isFullServerGating(1113).intl;
  obj4.title = intl3.string(isFullServerGating(1113).t.WzC9s6);
  const intl4 = isFullServerGating(1113).intl;
  obj4.description = intl4.string(isFullServerGating(1113).t.WmagiB);
  obj4.selected = isFullServerGating;
  obj4.onPress = callback1;
  obj4.disabled = roleSubscriptionSettingsDisabled;
  items2[1] = closure_5(onChange(19940), obj4);
  obj2.children = items2;
  return closure_7(View, obj2);
}
