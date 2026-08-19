// === Module 12601: StageChannelBackground ===

// Module 12601 (StageChannelBackground)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

noopAll;
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[0] = createCacheKey;
let closure_2 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default function StageChannelBackground(children) {
  return <View style={callback().container}>{children.children}</View>;
};