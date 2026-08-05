import { ChannelHeader } from "../../../../main_tabs_v2/native/channel/header/ChannelHeader.tsx";
// discord_app/modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let closure_4 = createCacheKey.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const memoResult = require("noop").memo((channelId) => <View style={callback().container}>{jsx(ChannelHeader, { channelId: arg0.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>);
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default memoResult;