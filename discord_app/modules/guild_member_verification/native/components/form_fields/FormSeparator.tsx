// === Module 5683: form_fields/FormSeparator ===

// Module 5683 (form_fields/FormSeparator)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
const obj2 = { separator: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 } };
let closure_2 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx");

export default function FormSeparator(style) {
  const obj = {};
  const merged = Object.assign(style);
  const items = [closure_2().separator, style.style];
  obj.style = items;
  return <View />;
};