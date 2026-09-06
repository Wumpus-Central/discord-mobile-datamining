// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx",
);

export const renderChannelWrapper = function renderChannelWrapper(children, fontScale) {
  ({ channel, layout, launchpad, panelVariant } = fontScale);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let obj = ChannelListLayout;
  let isThreadResult;
  if (channel != null) {
    isThreadResult = channel.isThread();
  }
  if (isThreadResult) {
    isThreadResult = !launchpad;
  }
  const scaledChannelRowHeight = obj.getScaledChannelRowHeight(fontScale.fontScale, layout, isThreadResult);
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout, launchpad);
  const items = [{ flex: 1, flexDirection: "row", alignItems: "center", position: "relative" }, ,];
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
  return <View style={items}>{children}</View>;
};
