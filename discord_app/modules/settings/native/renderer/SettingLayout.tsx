// discord_app/modules/settings/native/renderer/SettingLayout.tsx
import SettingListRenderer from "SettingListRenderer.tsx";
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const NodeType = fn(11469).NodeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default noop.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let obj = { node };
    return jsx(SettingListRenderer.SettingsList, { node });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    obj = { node };
    return jsx(SettingSegmentedControlRendererDefault, { node });
  }
});
