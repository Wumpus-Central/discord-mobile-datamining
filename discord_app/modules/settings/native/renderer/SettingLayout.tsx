// === Module 14563: ? ===

// Module 14563
import SearchListSectionLabel from "SearchListSectionLabel" /* 14564 */;
import SettingSegmentedControlDefault from "SettingSegmentedControl" /* 14577 */;
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 11289 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
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
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;