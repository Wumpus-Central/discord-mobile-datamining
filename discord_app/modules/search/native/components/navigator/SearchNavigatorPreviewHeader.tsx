// === Module 16287: ? ===

// Module 16287
import ChannelHeaderDefault from "ChannelHeader" /* 12822 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;

let closure_4 = createCacheKey.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const memoResult = importAllResult.memo((channelId) => <View style={callback().container}>{jsx(ChannelHeaderDefault, { channelId: arg0.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>);
const result = require("set").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;