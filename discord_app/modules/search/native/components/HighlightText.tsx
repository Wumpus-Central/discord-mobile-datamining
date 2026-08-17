// discord_app/modules/search/native/components/HighlightText.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import hexToRgba from "../../../../utils/ColorUtils.tsx";

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