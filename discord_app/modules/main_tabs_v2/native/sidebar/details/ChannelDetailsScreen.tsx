// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { useBaseAppContainerDimensions } from "../../../../screen/native/useBaseAppContainerDimensions.tsx";
import { PX_8 } from "ChannelDetails.tsx";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  let obj = navigation(1500);
  const route = obj.useRoute();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
  }, items);
  obj = { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensions().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic };
  return jsx(PX_8, { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensions().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});
const result = require("createStandardNavigationFactories").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;