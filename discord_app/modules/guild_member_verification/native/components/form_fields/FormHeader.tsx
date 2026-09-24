// === Module 10163: FormHeader ===

// Module 10163 (FormHeader)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import noop from "module_19" /* 19 */;
import TextStyles from "TextStyles" /* 5829 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = { fieldHeader: null };
const obj3 = {};
let merged = Object.assign(TextStyles(fn(1085).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
obj3.paddingBottom = 8;
obj2.fieldHeader = obj3;
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormHeader.tsx");

export default function FormHeader(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_3().fieldHeader, merged.style];
  obj.style = items;
  obj.children = children.children;
  return jsx(native.LegacyText, {});
};