// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx
import Link from "../../../../../../_runtime/01484_Link.js";
import useBaseAppContainerDimensionsDefault from "../../../../screen/native/useBaseAppContainerDimensions.tsx";
import ChannelDetailsDefault from "ChannelDetails.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

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
  obj = {
    channelId: route.params.channelId,
    isSearchLocked: true === route.params.search,
    onBackPress: callback,
    componentWidth: useBaseAppContainerDimensionsDefault().width,
    onChannelDeleted: callback,
    expandTopic: true === route.params.expandTopic,
  };
  return jsx(ChannelDetailsDefault, {
    channelId: route.params.channelId,
    isSearchLocked: true === route.params.search,
    onBackPress: callback,
    componentWidth: useBaseAppContainerDimensionsDefault().width,
    onChannelDeleted: callback,
    expandTopic: true === route.params.expandTopic,
  });
});
