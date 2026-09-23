// === Module 15048: SettingLayout ===

// Module 15048 (SettingLayout)
import SettingListRenderer from "SettingListRenderer" /* 15049 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 15062 */;
import noop from "module_19" /* 19 */;

require = fn;
const NodeType = fn(11806).NodeType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default noop.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    const obj2 = { node };
    return jsx(SettingListRenderer.SettingsList, { node });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    const obj = { node };
    return jsx(SettingSegmentedControlRendererDefault, { node });
  }
});