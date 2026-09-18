// === Module 12418: AppLauncherSelectOptionFormRow ===

// Module 12418 (AppLauncherSelectOptionFormRow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4718 */;
import Form from "Form" /* 8831 */;
import useAnimationDelayedAutoFocus from "useAnimationDelayedAutoFocus" /* 12411 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj2 = { formRow: { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, alignItems: "center", flex: 1 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/AppLauncherSelectOptionFormRow.tsx");

export default function AppLauncherSelectOptionFormRow(arg0) {
  ({ selected, selectedItemName: require, unselectedSubLabel } = arg0);
  ({ style, option, autoFocus } = arg0);
  const merged = Object.assign(arg0, Object.assign({ style: 0, option: 0, selected: 0, selectedItemName: 0, unselectedSubLabel: 0, autoFocus: 0 }));
  const tmp2 = closure_4();
  const animationDelayedAutoFocus = useAnimationDelayedAutoFocus.useAnimationDelayedAutoFocus(autoFocus, merged.onPress);
  const obj2 = { start: true, end: true, style: null, label: null, subLabel: null, trailing: null };
  const items = [tmp2.formRow, style];
  obj2.style = items;
  let str = "text-md/medium";
  if (selected) {
    str = "text-sm/medium";
  }
  const obj3 = { variant: str, color: null, lineClamp: 1, children: null };
  let str2 = "text-default";
  if (selected) {
    str2 = "interactive-text-default";
  }
  obj3.color = str2;
  obj3.children = option.displayName;
  obj2.label = jsx(Text_Text.Text, { variant: str, color: null, lineClamp: 1, children: null });
  if (selected) {
    let fn = () => jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children });
  } else {
    fn = null;
    if (null != unselectedSubLabel) {
      fn = () => jsx(Text_Text.Text, { variant: "text-sm/normal", color: "text-muted", lineClamp: 1, children: unselectedSubLabel });
    }
  }
  obj2.subLabel = fn;
  obj2.trailing = jsx(native.Icon, { source: unselectedSubLabel(7338), size: native.IconSizes.SMALL_20 });
  const merged1 = Object.assign(merged);
  return jsx(Form.FormRow, { start: true, end: true, style: null, label: null, subLabel: null, trailing: null });
};