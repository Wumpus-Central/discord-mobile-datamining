// discord_app/modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { content: null };
createStyles = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx",
);

export default function ExplicitMediaSettingsActionSheet(options) {
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    const found = options.find((value) => value.value === closure_0);
    if (null != found) {
      found.onPress();
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
  }, items);
  const items1 = [closure_5(options(7149).BottomSheetTitleHeader, { title, subtitle })];
  let obj = { style: closure_7().content, children: null };
  if (SHOW == null) {
    SHOW = options(1187).ExplicitContentRedaction.SHOW;
  }
  obj = { startExpanded: true, children: null };
  obj = {
    defaultValue: SHOW,
    onChange: callback,
    hasIcons: false,
    children: options.map((label) =>
      closure_1_5(options(dependencyMap[10]).TableRadioRow, { label: label.label, value: label.value }, label.value),
    ),
  };
  obj.children = closure_5(options(5685).TableRadioGroup, obj);
  items1[1] = closure_5(View, obj);
  obj.children = items1;
  return closure_6(options(7150).BottomSheet, obj);
}
