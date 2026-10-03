// === Module 17014: ChannelDetailsScreen ===

// Module 17014 (ChannelDetailsScreen)
import c from "c" /* 576 */;
import Link from "Link" /* 1491 */;
import useBaseAppContainerDimensionsDefault from "useBaseAppContainerDimensions" /* 4741 */;
import ChannelDetailsDefault from "ChannelDetails" /* 16769 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((navigation) => {
  const cResult = c.c(8);
  navigation = navigation.navigation;
  const route = Link.useRoute();
  const channelId = route.params.channelId;
  const width = useBaseAppContainerDimensionsDefault().width;
  if (cResult[0] !== navigation) {
    const fn = function o() {
      navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === channelId) {
    if (cResult[3] === width) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === tmp6) {
          if (cResult[6] === tmp5) {
            let tmp8 = cResult[7];
          }
          return tmp8;
        }
      }
    }
  }
  const tmp9 = jsx(ChannelDetailsDefault, { channelId, isSearchLocked: true === route.params.search, onBackPress: tmp5, componentWidth: width, onChannelDeleted: tmp5, expandTopic: true === route.params.expandTopic });
  cResult[2] = channelId;
  cResult[3] = width;
  cResult[4] = true === route.params.expandTopic;
  cResult[5] = true === route.params.search;
  cResult[6] = tmp5;
  cResult[7] = tmp9;
  tmp8 = tmp9;
}) : ((navigation) => {
  navigation = navigation.navigation;
  const route = Link.useRoute();
  const items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  return jsx(ChannelDetailsDefault, { channelId: route.params.channelId, isSearchLocked: true === route.params.search, onBackPress: callback, componentWidth: useBaseAppContainerDimensionsDefault().width, onChannelDeleted: callback, expandTopic: true === route.params.expandTopic });
}));