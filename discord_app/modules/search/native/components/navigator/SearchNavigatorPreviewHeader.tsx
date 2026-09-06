// === Module 16860: SearchNavigatorPreviewHeader ===

// Module 16860 (SearchNavigatorPreviewHeader)
import ChannelHeaderDefault from "ChannelHeader" /* 13263 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default noop.memo((channelId) => <View style={closure_4().container}>{jsx(ChannelHeaderDefault, { channelId: channelId.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>);