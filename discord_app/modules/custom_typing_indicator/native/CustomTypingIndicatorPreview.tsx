// === Module 14713: CustomTypingIndicatorPreview ===

// Module 14713 (CustomTypingIndicatorPreview)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Stack from "Stack" /* 4733 */;
import Text from "Text" /* 4734 */;
import getRandomCustomTypingIndicatorEmojis from "getRandomCustomTypingIndicatorEmojis" /* 14709 */;
import CustomTypingIndicatorGlyphDefault from "CustomTypingIndicatorGlyph" /* 14711 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ row: { height: 32 } });
const result = require("obj132").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorPreview.tsx");

export default function CustomTypingIndicatorPreview(name) {
  const config = name.config;
  let obj = getRandomCustomTypingIndicatorEmojis;
  const customTypingIndicatorSuggestionWithNameMessage = obj.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion);
  { direction: "horizontal", spacing: 8, align: "center", justify: "center", style: callback3().row, children: null };
  const items = [callback(CustomTypingIndicatorGlyphDefault, { config, size: 24 }), ];
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.format(customTypingIndicatorSuggestionWithNameMessage, { name: name.username });
  items[1] = callback(Text.Text, obj);
  obj[5] = items;
  return callback2(Stack.Stack, obj);
};