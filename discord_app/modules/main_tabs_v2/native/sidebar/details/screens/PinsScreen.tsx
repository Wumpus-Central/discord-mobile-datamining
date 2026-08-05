// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchTabs } from "MessageEmbedTypes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";
import { InitialPinsScreen } from "../../../../../search/native/components/tabs/pages/messages/PinsScreen.tsx";

const require = arg1;
let obj = { container: null };
obj = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(() => {
  let obj = channelId(1483);
  channelId = obj.useRoute().params.channelId;
  const items = [ensureGuildLoaded];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    const channel = outer1_4.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(589);
  const channelDetailsSearchContext = channelId(11583).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(InitialPinsScreen, obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;