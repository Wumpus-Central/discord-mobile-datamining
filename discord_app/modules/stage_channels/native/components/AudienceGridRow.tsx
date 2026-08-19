// === Module 12623: BlankAudience ===

// Module 12623 (BlankAudience)
import _modDef12624 from "module_12624" /* 12624 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { MAX_AUDIENCE_ROW_LIMIT } from "MAX_STAGE_TOPIC_LENGTH" /* 4978 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

class BlankAudience {
  constructor(arg0) {
    count = global.count;
    items = [];
    for (let num = 0; num < count; num = num + 1) {
      tmp = jsx;
      tmp2 = closure_0;
      tmp3 = closure_1;
      arr = items.push(jsx(require("module_12624"), {}, num));
    }
    return items;
  }
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ rowContainer: { flex: 1, flexDirection: "row", marginVertical: 16, paddingHorizontal: 4, justifyContent: "space-between" } });
const memoResult = importAllResult.memo((theme) => {
  ({ channel: importDefault, participants, renderBlankAudience } = theme);
  if (renderBlankAudience === undefined) {
    renderBlankAudience = true;
  }
  theme = theme.theme;
  let num = 0;
  if (renderBlankAudience) {
    num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
  }
  const items = [callback2().rowContainer, ];
  let str = "center";
  if (renderBlankAudience) {
    str = "space-between";
  }
  let obj = { style: items, children: null };
  items[1] = { justifyContent: str };
  const items1 = [participants.map((item, index) => closure_1_4(importDefault(theme[6]), { theme, channel: closure_0, participant: item }, item.id)), ];
  let tmp5 = null;
  if (num > 0) {
    obj = { count: null };
    obj[0] = num;
    tmp5 = callback(BlankAudience, obj);
  }
  items1[1] = tmp5;
  obj[1] = items1;
  return callback(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default memoResult;
export { BlankAudience };