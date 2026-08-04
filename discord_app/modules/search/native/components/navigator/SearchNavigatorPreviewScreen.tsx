// discord_app/modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx
import noop from "noop";
import { ScrollView } from "get ActivityIndicator";
import { SearchTypes } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ container: { flex: 1 } });
let result = require("ME").fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default function SearchNavigatorPreviewScreen() {
  let obj = navigation(searchContext[5]);
  navigation = obj.useNavigation();
  const tmp = callback();
  const route = navigation(searchContext[6]).useRoute();
  const channelId = route.params.channelId;
  searchContext = route.params.searchContext;
  const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
  const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
  callback = onBeforeJumpToMessage.useCallback(() => {
    let obj = channelId(searchContext[7]);
    obj = { searchContext, channelId };
    const result = obj.trackSearchJumpToMessage(obj);
    if (onBeforeJumpToMessage != null) {
      onBeforeJumpToMessage();
    }
    const type = searchContext.type;
    const parent = navigation.getParent();
    if (null != parent) {
      parent.goBack();
    }
  }, items);
  let type = searchContext.type;
  if (SearchTypes.CHANNEL !== type) {
    if (SearchTypes.GUILD_CHANNEL !== type) {
      obj = { channelId: null, onBeforeJumpToMessage: null };
      obj[0] = channelId;
      obj[1] = callback;
      return jsx(channelId(tmp2[8]), { channelId: null, onBeforeJumpToMessage: null });
    }
  }
  obj = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: tmp.container, children: jsx(channelId(tmp2[8]), { channelId, onBeforeJumpToMessage: callback }) };
  return <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp.container}>{jsx(channelId(tmp2[8]), { channelId, onBeforeJumpToMessage: callback })}</ScrollView>;
};