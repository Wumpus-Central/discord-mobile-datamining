// discord_app/modules/settings/native/renderer/SettingLayout.tsx
import SearchListSectionLabel from "SettingListRenderer.tsx";
import SettingSegmentedControlDefault from "SettingSegmentedControlRenderer.tsx";
import { NodeType } from "SettingRendererConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
const memoResult = importAllResult.memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let obj = { node: null };
    obj[0] = node;
    return jsx(SearchListSectionLabel.SettingsList, { node: null });
  } else if (tmp.SEGMENTED_CONTROL === type) {
    obj = { node: null };
    obj[0] = node;
    return jsx(SettingSegmentedControlDefault, { node: null });
  }
});
const result = require("obj132").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;