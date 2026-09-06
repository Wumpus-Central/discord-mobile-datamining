// discord_app/modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx
import ChannelHeaderDefault from "../../../../main_tabs_v2/native/channel/header/ChannelHeader.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({
  container: { flexShrink: 1, paddingRight: 12, flexDirection: "row", alignItems: "center" },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/search/native/components/navigator/SearchNavigatorPreviewHeader.tsx",
);

export default noop.memo((channelId) => (
  <View style={closure_4().container}>
    {jsx(ChannelHeaderDefault, {
      channelId: arg0.channelId,
      screenIndex: "none",
      pressable: false,
      isGuildMemberCountVisible: false,
      isNavigationScreen: true,
    })}
  </View>
));
