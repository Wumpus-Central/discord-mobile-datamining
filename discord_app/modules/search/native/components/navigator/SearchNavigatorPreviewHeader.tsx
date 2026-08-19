// === Module 16076: ? ===

// Module 16076
import ChannelHeaderDefault from "ChannelHeader" /* 12705 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

let closure_4 = createCacheKey.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const memoResult = importAllResult.memo((channelId) => <View style={callback().container}>{jsx(ChannelHeaderDefault, { channelId: channelId.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>);
const result = require("obj132").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;