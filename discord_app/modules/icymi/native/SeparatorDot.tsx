// discord_app/modules/icymi/native/SeparatorDot.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { separatorDot: null };
createCacheKey = { width: 4, height: 4, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/SeparatorDot.tsx");

export default function SeparatorDot() {
  const obj = { style: null };
  const items = [createCacheKey().separatorDot];
  obj[0] = items;
  return <View style={null} />;
};