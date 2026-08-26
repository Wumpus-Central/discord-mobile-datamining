// discord_app/modules/stage_channels/native/components/AudienceGridRow.tsx
import _modDef11109 from "BlankAudienceTile.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_AUDIENCE_ROW_LIMIT } from "../../StageChannelsConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

class BlankAudience {
  constructor(arg0) {
    count = global.count;
    items = [];
    for (let num = 0; num < count; num = num + 1) {
      tmp = jsx;
      tmp2 = closure_0;
      tmp3 = closure_1;
      arr = items.push(jsx(require("BlankAudienceTile.tsx"), {}, num));
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
  const items1 = [participants.map((id) => closure_1_4(closure_1_0(theme[6]), { theme, channel: closure_0, participant: id }, id.id)), ];
  let tmp5 = null;
  if (num > 0) {
    obj = { count: null };
    obj[0] = num;
    tmp5 = callback(BlankAudience, obj);
  }
  items1[1] = tmp5;
  obj[1] = items1;
  return closure_5(View, obj);
});
const result = require("set").fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default memoResult;
export { BlankAudience };