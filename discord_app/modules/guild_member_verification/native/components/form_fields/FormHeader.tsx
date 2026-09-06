// discord_app/modules/guild_member_verification/native/components/form_fields/FormHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { fieldHeader: null };
createStyles = {};
let merged = Object.assign(
  TextStyles(fn(1085).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }),
);
createStyles.paddingBottom = 8;
createStyles.fieldHeader = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/form_fields/FormHeader.tsx",
);

export default function FormHeader(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  const items = [closure_3().fieldHeader, merged.style];
  obj.style = items;
  obj.children = children.children;
  return jsx(native.LegacyText, {});
}
