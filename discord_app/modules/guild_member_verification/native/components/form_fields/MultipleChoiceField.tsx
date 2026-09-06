// discord_app/modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: null };
createStyles = {};
const merged = Object.assign(
  TextStyles(fn(1085).Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, {
    uppercase: false,
  }),
);
createStyles.paddingBottom = 16;
createStyles.formHeader = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx",
);

export default function MultipleChoiceField(hasIcons) {
  ({ field, onChange: require } = hasIcons);
  const tmp = closure_6();
  const choices = field.choices;
  let num = field.response;
  const items = [choices];
  const memo = noop.useMemo(() => choices.map((name, value) => ({ name, value })), items);
  let obj = { style: tmp.container, children: null };
  obj = {
    style: tmp.formHeader,
    variant: "heading-md/semibold",
    color: "mobile-text-heading-primary",
    children: field.label,
  };
  const items1 = [closure_4(require("Text/Text").Text, obj)];
  if (num == null) {
    num = -1;
  }
  obj = {
    defaultValue: num,
    onChange(arg0) {
      return require(arg0);
    },
    hasIcons: hasIcons.hasIcons,
    children: memo.map((label) =>
      closure_1_4(require("TableRadioRow").TableRadioRow, { label: label.name, value: label.value }, label.value),
    ),
  };
  items1[1] = closure_4(require("TableRadioGroup").TableRadioGroup, obj);
  obj.children = items1;
  return closure_5(View, obj);
}
