// discord_app/modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import useAnimationDelayedAutoFocus from "../hooks/useAnimationDelayedAutoFocus.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { formRow: null };
createStyles = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  flex: 1,
};
createStyles.formRow = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx",
);

export default function AppLauncherSelectOptionFormRow(arg0) {
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ style, option, autoFocus } = arg0);
  const merged = Object.assign(
    arg0,
    Object.assign({ style: 0, option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }),
  );
  let obj = useAnimationDelayedAutoFocus;
  const animationDelayedAutoFocus = obj.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  obj = { start: true, end: true, style: null, label: null, subLabel: null, trailing: null };
  const items = [closure_4().formRow, style];
  obj.style = items;
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  obj = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj.color = str2;
  obj.children = option.displayName;
  obj.label = jsx(Text_Text.Text, { variant: str, color: null, lineClamp: 1, children: null });
  if (selected) {
    let fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () =>
        jsx(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-muted",
          lineClamp: 1,
          children: unselectedSubLabel,
        });
    }
  }
  obj.subLabel = fn;
  const tmp2 = closure_4();
  obj.trailing = jsx(native.Icon, { source: unselectedSubLabel(7142), size: native.IconSizes.SMALL_20 });
  const merged1 = Object.assign(merged);
  return jsx(Form.FormRow, { variant: str, color: null, lineClamp: 1, children: null });
}
