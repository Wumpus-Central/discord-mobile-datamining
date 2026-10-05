// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx",
);

export const renderChannelWrapper = function renderChannelWrapper(children, fontScale) {
  let channel;
  let launchpad;
  let layout;
  let paddingThread;
  let panelVariant;
  let result;
  ({ channel, layout, launchpad, panelVariant } = fontScale);
  fontScale = fontScale.fontScale;
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let isThreadResult;
  const getScaledChannelRowHeight = ChannelListLayout.getScaledChannelRowHeight;
  ChannelListLayout;
  if (channel != null) {
    isThreadResult = channel.isThread();
  }
  if (isThreadResult) {
    isThreadResult = !launchpad;
  }
  const scaledChannelRowHeight = getScaledChannelRowHeight(fontScale, layout, isThreadResult);
  const tmpResult = ChannelListLayout;
  const layoutStyles = tmpResult.getLayoutStyles(layout, launchpad);
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, ,];
  let isThreadResult1;
  if (channel != null) {
    isThreadResult1 = channel.isThread();
  }
  const layout2 = layoutStyles.layout;
  if (isThreadResult1) {
    result = 2 * layout2.marginThread.marginVertical;
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
    paddingThread = container.paddingThread;
  } else {
    paddingThread = panelVariant ? container.paddingPanels : container.padding;
  }
  items[2] = paddingThread;
  return <View style={items}>{children}</View>;
};
