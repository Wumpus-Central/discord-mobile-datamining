// === Module 14718: SettingLayout ===

// Module 14718 (SettingLayout)
import SettingListRenderer from "SettingListRenderer" /* 14719 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 14732 */;
import noop from "module_19" /* 19 */;

require = fn;
const NodeType = fn(11501).NodeType;
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