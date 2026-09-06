// === Module 16861: SearchNavigatorPreviewScreen ===

// Module 16861 (SearchNavigatorPreviewScreen)
import search_tracking_TrackingDefault from "search/tracking/Tracking" /* 12358 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
const SearchTypes = fn(1074).SearchTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { flex: 1 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/navigator/SearchNavigatorPreviewScreen.tsx");

export default function SearchNavigatorPreviewScreen() {
  let obj = navigation(searchContext[5]);
  navigation = obj.useNavigation();
  const tmp = closure_7();
  const route = navigation(searchContext[6]).useRoute();
  const channelId = route.params.channelId;
  searchContext = route.params.searchContext;
  const onBeforeJumpToMessage = route.params.onBeforeJumpToMessage;
  const items = [searchContext, channelId, onBeforeJumpToMessage, navigation];
  const callback = onBeforeJumpToMessage.useCallback(() => {
    const obj = { searchContext, channelId };
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
      obj = { channelId, onBeforeJumpToMessage: callback };
      return jsx(channelId(tmp2[8]), { channelId, onBeforeJumpToMessage: callback });
    }
  }
  obj = { horizontal: true, scrollEnabled: false, bounces: false, contentContainerStyle: tmp.container, children: jsx(channelId(tmp2[8]), { channelId, onBeforeJumpToMessage: callback }) };
  return <ScrollView horizontal scrollEnabled={false} bounces={false} contentContainerStyle={tmp.container}>{jsx(channelId(tmp2[8]), { channelId, onBeforeJumpToMessage: callback })}</ScrollView>;
};