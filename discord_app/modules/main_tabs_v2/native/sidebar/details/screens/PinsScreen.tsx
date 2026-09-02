// === Module 16677: ? ===

// Module 16677
import ThemesDefault from "Themes" /* 709 */;
import InitialPinsScreenDefault from "InitialPinsScreen" /* 16529 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import { SearchTabs } from "MessageEmbedTypes" /* 7632 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
let obj = { container: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let obj = channelId(1501);
  channelId = obj.useRoute().params.channelId;
  const items = [closure_4];
  const stateFromStores = channelId(586).useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(586);
  const channelDetailsSearchContext = channelId(12089).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(InitialPinsScreenDefault, obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;