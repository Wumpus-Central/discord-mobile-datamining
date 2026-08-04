import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx");

export const renderChannelWrapper = function renderChannelWrapper(children, fontScale) {
  let channel;
  let launchpad;
  let layout;
  let panelVariant;
  ({ channel, layout, launchpad, panelVariant } = fontScale);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let obj = require(9711) /* getLayoutStyles */;
  let isThreadResult;
  if (channel != null) {
    isThreadResult = channel.isThread();
  }
  if (isThreadResult) {
    isThreadResult = !launchpad;
  }
  const scaledChannelRowHeight = obj.getScaledChannelRowHeight(fontScale.fontScale, layout, isThreadResult);
  const layoutStyles = require(9711) /* getLayoutStyles */.getLayoutStyles(layout, launchpad);
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, , ];
  let isThreadResult1;
  if (channel != null) {
    isThreadResult1 = channel.isThread();
  }
  const layout2 = layoutStyles.layout;
  if (isThreadResult1) {
    let result = 2 * layout2.marginThread.marginVertical;
  } else {
    result = 2 * layout2.margin.marginVertical;
  }
  items[1] = { minHeight: scaledChannelRowHeight - result };
  let isThreadResult2;
  if (channel != null) {
    isThreadResult2 = channel.isThread();
  }
  const container = layoutStyles.container;
  if (isThreadResult2) {
    let paddingThread = container.paddingThread;
  } else {
    paddingThread = panelVariant ? container.paddingPanels : container.padding;
  }
  obj = { style: items, children };
  items[2] = paddingThread;
  return <View style={items}>{arg0}</View>;
};