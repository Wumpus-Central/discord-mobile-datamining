// discord_app/modules/guild_member_verification/native/components/form_fields/TextInputField.tsx
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TextInput from "../../../../../design/components/TextInput/native/TextInput.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const MAX_TEXT_RESPONSE_LENGTH = fn(5059).MAX_TEXT_RESPONSE_LENGTH;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ container: { marginVertical: 12, flexDirection: "column" } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/TextInputField.tsx",
);

export default function TextInputField(field) {
  field = field.field;
  let str = field.response;
  let obj = { style: closure_5().container, children: null };
  obj = {
    label: jsx(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: field.label,
    }),
    maxLength: MAX_TEXT_RESPONSE_LENGTH,
    value: null,
    placeholder: null,
    onChange: null,
  };
  if (str == null) {
    str = "";
  }
  obj.value = str;
  const intl = tmp3(1114).intl;
  obj.placeholder = intl.string(util.t["Sqn+Wh"]);
  obj.onChange = field.onChange;
  obj.children = jsx(TextInput.TextInput, {
    label: jsx(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      children: field.label,
    }),
    maxLength: MAX_TEXT_RESPONSE_LENGTH,
    value: null,
    placeholder: null,
    onChange: null,
  });
  return (
    <View
      label={jsx(Text_Text.Text, {
        variant: "heading-md/semibold",
        color: "mobile-text-heading-primary",
        children: field.label,
      })}
      maxLength={MAX_TEXT_RESPONSE_LENGTH}
      value={null}
      placeholder={null}
      onChange={null}
    />
  );
}
