// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  let obj = navigation(1481);
  const route = obj.useRoute();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => {
    navigation.goBack();
  }, items);
  obj = { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: require("../../../../screen/native/useBaseAppContainerDimensions.tsx")().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic };
  return jsx(require("ChannelDetails.tsx"), { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: require("../../../../screen/native/useBaseAppContainerDimensions.tsx")().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
});
const result = require("Link").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default memoResult;