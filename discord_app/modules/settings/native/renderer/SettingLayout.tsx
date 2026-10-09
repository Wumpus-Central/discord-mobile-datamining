// === Module 14883: SettingLayout ===

// Module 14883 (SettingLayout)
import c from "c" /* 576 */;
import SettingListRenderer from "SettingListRenderer" /* 14884 */;
import SettingSegmentedControlRendererDefault from "SettingSegmentedControlRenderer" /* 14898 */;
import noop from "module_19" /* 19 */;

require = fn;
const NodeType = fn(10630).NodeType;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SettingLayout(node) {
  const cResult = c.c(4);
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    if (cResult[0] !== node) {
      const obj2 = { node };
      const tmp11 = jsx(SettingListRenderer.SettingsList, { node });
      cResult[0] = node;
      cResult[1] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[1];
    }
    return tmp9;
  } else if (tmp4.SEGMENTED_CONTROL === type) {
    if (cResult[2] !== node) {
      const obj3 = { node };
      const tmp8 = jsx(SettingSegmentedControlRendererDefault, { node });
      cResult[2] = node;
      cResult[3] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[3];
    }
    return tmp5;
  }
}) : (function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    const obj2 = { node };
    return jsx(SettingListRenderer.SettingsList, { node });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    const obj = { node };
    return jsx(SettingSegmentedControlRendererDefault, { node });
  }
}));