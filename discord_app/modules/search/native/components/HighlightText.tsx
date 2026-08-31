// === Module 10168: HighlightText ===

// Module 10168 (HighlightText)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;
import hexToRgba from "hexToRgba" /* 4296 */;

require = arg1;
noopAll;
createCacheKey = { text: null };
createCacheKey = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, backgroundColor: null, color: null };
createCacheKey[1] = hexToRgba.hexOpacityToRgba(ThemesDefault.unsafe_rawColors.YELLOW_300, 0.3);
createCacheKey[2] = ThemesDefault.colors.TEXT_STRONG;
createCacheKey[0] = createCacheKey;
let closure_3 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  const tmp = callback();
  return jsx(Button.LegacyText, { style: callback().text, children: children.children });
};