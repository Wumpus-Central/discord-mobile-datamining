// discord_app/modules/search/native/components/HighlightText.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { text: null };
createStyles = { fontFamily: fn(1074).Fonts.PRIMARY_BOLD, backgroundColor: null, color: null };
const ColorUtils = fn(4409);
createStyles.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3);
createStyles.color = nativeDefault.colors.TEXT_STRONG;
createStyles.text = createStyles;
let closure_3 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  const tmp = closure_3();
  return jsx(native.LegacyText, { style: closure_3().text, children: children.children });
}
