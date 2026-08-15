// discord_app/modules/custom_typing_indicator/native/CustomTypingIndicatorPreview.tsx
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Stack } from "../../../design/components/Stack/native/Stack.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getRandomCustomTypingIndicatorEmojis } from "../CustomTypingIndicatorUtils.tsx";
import { CustomTypingIndicatorGlyph } from "CustomTypingIndicatorGlyph.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ row: { height: 32 } });
const result = require("createCacheKey").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorPreview.tsx");

export default function CustomTypingIndicatorPreview(name) {
  const config = name.config;
  let obj = getRandomCustomTypingIndicatorEmojis;
  const customTypingIndicatorSuggestionWithNameMessage = obj.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion);
  obj = { direction: "horizontal", spacing: 8, align: "center", justify: "center", style: callback3().row, children: null };
  const items = [callback(CustomTypingIndicatorGlyph, { config, size: 24 }), ];
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.format(customTypingIndicatorSuggestionWithNameMessage, { name: name.username });
  items[1] = callback(Text.Text, obj);
  obj[5] = items;
  return callback2(Stack.Stack, obj);
};