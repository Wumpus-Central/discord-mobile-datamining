// discord_app/modules/stage_channels/native/components/StageChannelBackground.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

noopAll;
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BLACK };
createCacheKey[0] = createCacheKey;
let closure_2 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/StageChannelBackground.tsx");

export default function StageChannelBackground(children) {
  return <View style={callback().container}>{children.children}</View>;
};