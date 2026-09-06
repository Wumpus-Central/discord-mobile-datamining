// === Module 16440: ChannelPressableWrapper ===

// Module 16440 (ChannelPressableWrapper)
import ChannelListLayout from "ChannelListLayout" /* 10121 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx");

export const renderChannelPressableWrapper = function renderChannelPressableWrapper(children, panelVariant) {
  let flag = panelVariant.panelVariant;
  ({ layout, launchpad, isThread } = panelVariant);
  if (flag === undefined) {
    flag = false;
  }
  let obj = ChannelListLayout;
  const layout2 = obj.getLayoutStyles(layout, launchpad).layout;
  if (isThread) {
    let marginThread = layout2.marginThread;
  } else {
    marginThread = flag ? layout2.marginPanels : layout2.margin;
  }
  obj = { style: null, children };
  const items = [marginThread, { flex: 1, flexDirection: "row", alignItems: "center" }];
  obj.style = items;
  return <View style={null}>{children}</View>;
};