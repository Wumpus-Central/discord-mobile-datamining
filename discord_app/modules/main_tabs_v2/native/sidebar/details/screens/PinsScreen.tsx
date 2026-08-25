// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import InitialPinsScreenDefault from "../../../../../search/native/components/tabs/pages/messages/PinsScreen.tsx";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../../../stores/ChannelStore.tsx";
import { SearchTabs } from "../../../../../search/SearchConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";

const require = arg1;
let obj = { container: null };
obj = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(() => {
  let obj = channelId(1503);
  channelId = obj.useRoute().params.channelId;
  const items = [closure_4];
  const stateFromStores = channelId(589).useStateFromStores(items, () => {
    const channel = closure_1_4.getChannel(channelId);
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  });
  const obj2 = channelId(589);
  const channelDetailsSearchContext = channelId(11866).useChannelDetailsSearchContext(channelId, stateFromStores);
  obj = { style: callback().container, children: jsx(InitialPinsScreenDefault, obj) };
  obj = { searchContext: channelDetailsSearchContext, isFocused: true, tab: SearchTabs.PINS };
  return <View searchContext={channelDetailsSearchContext} isFocused tab={SearchTabs.PINS} />;
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/PinsScreen.tsx");

export default memoResult;