// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import messages_PinsScreenDefault from "../../../../../search/native/components/tabs/pages/messages/PinsScreen.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";

const require = fn;
const View = fn(17).View;
const SearchTabs = fn(7878).SearchTabs;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
obj = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
let closure_7 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default noop.memo(() => {
  let obj = channelId(1486);
  channelId = obj.useRoute().params.channelId;
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
  const channelDetailsSearchContext = channelId(12299).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: closure_7().container, children: null };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  obj.children = jsx(messages_PinsScreenDefault, {
    searchContext: channelDetailsSearchContext,
    isFocused: true,
    tab: SearchTabs.PINS,
  });
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
