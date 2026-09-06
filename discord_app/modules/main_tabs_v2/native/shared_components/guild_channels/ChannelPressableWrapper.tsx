// === Module 16440: renderChannelPressableWrapper ===

// Module 16440 (renderChannelPressableWrapper)
import noopAll from "noop" /* 19 */;
import getLayoutStyles from "getLayoutStyles" /* 10121 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx");

export const renderChannelPressableWrapper = function renderChannelPressableWrapper(children, panelVariant) {
  let flag = panelVariant.panelVariant;
  ({ layout, launchpad, isThread } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  let obj = getLayoutStyles;
  const layout2 = obj.getLayoutStyles(layout, launchpad).layout;
  if (isThread) {
    let marginThread = layout2.marginThread;
  } else {
    marginThread = flag ? layout2.marginPanels : layout2.margin;
  }
  obj = { style: items, children };
  items = [marginThread, { flex: 1, flexDirection: "row", alignItems: "center" }];
  return <View style={items}>{arg0}</View>;
};