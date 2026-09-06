// === Module 16859: ChannelDetailsScreen ===

// Module 16859 (ChannelDetailsScreen)
import Link from "Link" /* 1484 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4422 */;
import ChannelDetailsDefault from "ChannelDetails" /* 16624 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default noop.memo((navigation) => {
  navigation = navigation.navigation;
  let obj = Link;
  const route = obj.useRoute();
  const items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  obj = { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensionsDefault().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic };
  return jsx(ChannelDetailsDefault, { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensionsDefault().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});