// === Module 19253: ChannelDetailsScreen ===

// Module 19253 (ChannelDetailsScreen)
import Link from "Link" /* 1500 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 5329 */;
import ChannelDetailsDefault from "ChannelDetails" /* 18989 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default noop.memo(function ChannelDetailsScreen(navigation) {
  navigation = navigation.navigation;
  const route = Link.useRoute();
  items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  return jsx(ChannelDetailsDefault, { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensionsDefault().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});