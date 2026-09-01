// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx
import noopAll from "../../../../../../_runtime/00019_noop.js";
import getLayoutStyles from "layouts/ChannelListLayout.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx",
);

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
