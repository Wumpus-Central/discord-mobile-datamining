// discord_app/modules/guild_member_verification/native/components/form_fields/MultipleChoiceField.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
const obj2 = { container: { marginVertical: 12, flexDirection: "column" }, formHeader: null };
const obj3 = {};
const merged = Object.assign(
  TextStyles(fn(1085).Fonts.DISPLAY_SEMIBOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 16, {
    uppercase: false,
  }),
);
obj3.paddingBottom = 16;
obj2.formHeader = obj3;
let closure_6 = createStyles.createStyles(obj2);
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
  const obj = { style: tmp.container, children: null };
  const items1 = [
    closure_4(require("Text/Text").Text, {
      style: tmp.formHeader,
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: field.label,
    }),
  ];
  if (num == null) {
    num = -1;
  }
  items1[1] = closure_4(require("TableRadioGroup").TableRadioGroup, {
    defaultValue: num,
    onChange(arg0) {
      return require(arg0);
    },
    hasIcons: hasIcons.hasIcons,
    children: memo.map((label) =>
      closure_1_4(require("TableRadioRow").TableRadioRow, { label: label.name, value: label.value }, label.value),
    ),
  });
  obj.children = items1;
  return closure_5(View, obj);
}
