// === Module 11054: HighlightText ===

// Module 11054 (HighlightText)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
const obj2 = { text: null };
const obj3 = { fontFamily: fn(1072).Fonts.PRIMARY_BOLD, backgroundColor: null, color: null };
const ColorUtils = fn(5011);
obj3.backgroundColor = ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3);
obj3.color = nativeDefault.colors.TEXT_STRONG;
obj2.text = obj3;
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  const tmp = closure_3();
  return jsx(native.LegacyText, { style: closure_3().text, children: children.children });
};