// discord_app/modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = { content: { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
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
  const items1 = [closure_5(options(6570).BottomSheetTitleHeader, { title, subtitle })];
  const obj = { style: closure_7().content, children: null };
  if (SHOW == null) {
    SHOW = tmp4(1186).ExplicitContentRedaction.SHOW;
  }
  let obj2 = { startExpanded: true, children: null };
  const tmp = closure_7();
  tmp4 = options;
  obj.children = closure_5(options(5997).TableRadioGroup, {
    defaultValue: SHOW,
    onChange: callback,
    hasIcons: false,
    children: options.map((label) =>
      closure_1_5(options(dependencyMap[10]).TableRadioRow, { label: label.label, value: label.value }, label.value),
    ),
  });
  items1[1] = closure_5(View, obj);
  obj2.children = items1;
  return closure_6(options(6571).BottomSheet, obj2);
}
