// === Module 19036: SearchNavigatorPreviewHeader ===

// Module 19036 (SearchNavigatorPreviewHeader)
import ChannelHeaderDefault from "ChannelHeader" /* 14288 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4792);
let closure_4 = createStyles.createStyles({ container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx");

export default noop.memo(function SearchNavigatorPreviewHeader(channelId) {
  return <View style={closure_4().container}>{jsx(ChannelHeaderDefault, { channelId: channelId.channelId, screenIndex: "none", pressable: false, isGuildMemberCountVisible: false, isNavigationScreen: true })}</View>;
});