// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import messages_PinsScreenDefault from "../../../../../search/native/components/tabs/pages/messages/PinsScreen.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";

const require = fn;
const View = fn(17).View;
const SearchTabs = fn(8125).SearchTabs;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_7 = createStyles.createStyles(obj);
const obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default noop.memo(() => {
  channelId = channelId(1487).useRoute().params.channelId;
  const obj = channelId(1487);
  const items = [ChannelStore];
  const stateFromStores = channelId(504).useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(504);
  const channelDetailsSearchContext = channelId(12557).useChannelDetailsSearchContext(channelId, stateFromStores);
  const obj4 = {
    style: closure_7().container,
    children: jsx(messages_PinsScreenDefault, {
      searchContext: channelDetailsSearchContext,
      isFocused: true,
      tab: SearchTabs.PINS,
    }),
  };
  return (
    <View style={closure_7().container}>
      {jsx(messages_PinsScreenDefault, {
        searchContext: channelDetailsSearchContext,
        isFocused: true,
        tab: SearchTabs.PINS,
      })}
    </View>
  );
});
