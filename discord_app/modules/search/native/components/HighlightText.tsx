// discord_app/modules/search/native/components/HighlightText.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import hexToRgba from "hexToRgba";

const require = arg1;
createCacheKey = { text: null };
createCacheKey = { fontFamily: require("ME").Fonts.PRIMARY_BOLD, backgroundColor: null, color: null };
createCacheKey[1] = hexToRgba.hexOpacityToRgba(require("Themes").unsafe_rawColors.YELLOW_300, 0.3);
createCacheKey[2] = require("Themes").colors.TEXT_STRONG;
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  const tmp = createCacheKey();
  return jsx(require(1297) /* Button */.LegacyText, { style: createCacheKey().text, children: children.children });
};