// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx
import useBaseAppContainerDimensionsDefault from "../../../../screen/native/useBaseAppContainerDimensions.tsx";
import PX_8Default from "ChannelDetails.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo((navigation) => {
  navigation = navigation.navigation;
  let obj = navigation(1499);
  const route = obj.useRoute();
  const items = [navigation];
  const callback = importAllResult.useCallback(() => {
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
  return jsx(PX_8Default, {
    channelId: route.params.channelId,
    isSearchLocked: true === route.params.search,
    onBackPress: callback,
    componentWidth: useBaseAppContainerDimensionsDefault().width,
    onChannelDeleted: callback,
    expandTopic: true === route.params.expandTopic,
  });
});
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx",
);

export default memoResult;
