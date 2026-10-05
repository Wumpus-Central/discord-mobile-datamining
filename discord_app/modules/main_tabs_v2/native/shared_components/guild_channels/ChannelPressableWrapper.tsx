// discord_app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import ChannelListLayout from "layouts/ChannelListLayout.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import size from "../../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx",
);

export const renderChannelPressableWrapper = function renderChannelPressableWrapper(children, panelVariant) {
  let isThread;
  let launchpad;
  let layout;
  let marginThread;
  let flag = panelVariant.panelVariant;
  ({ layout, launchpad, isThread } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  const obj = ChannelListLayout;
  const layout2 = obj.getLayoutStyles(layout, launchpad).layout;
  if (isThread) {
    marginThread = layout2.marginThread;
  } else {
    marginThread = flag ? layout2.marginPanels : layout2.margin;
  }
  const items = [marginThread, { flex: 1, flexDirection: "row", alignItems: "center" }];
  return <View style={items}>{children}</View>;
};
