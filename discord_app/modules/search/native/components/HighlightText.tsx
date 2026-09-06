// === Module 10126: HighlightText ===

// Module 10126 (HighlightText)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;

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
};