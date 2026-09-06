// discord_app/modules/auth/native/components/atoms/AuthHeader.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { header: null };
createStyles = {};
const merged = Object.assign(
  TextStyles(fn(1074).Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
createStyles.textAlign = "center";
createStyles.header = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  ({ children, style } = arg0);
  const obj = { style: null, accessibilityRole: "header", children };
  const items = [closure_3().header, style];
  obj.style = items;
  return jsx(native.LegacyText, { style: null, accessibilityRole: "header", children });
}
