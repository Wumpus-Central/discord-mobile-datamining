// === Module 10067: AudienceGridRow ===

// Module 10067 (AudienceGridRow)
import BlankAudienceTileDefault from "BlankAudienceTile" /* 10068 */;
import AudienceTileDefault from "AudienceTile" /* 10069 */;
import noop from "module_19" /* 19 */;

class BlankAudience {
  constructor(arg0) {
    count = global.count;
    items = [];
    for (let num = 0; num < count; num = num + 1) {
      tmp = jsx;
      tmp2 = closure_0;
      tmp3 = closure_1;
      arr = items.push(jsx(closure_0(closure_1[5]), {}, num));
    }
    return items;
  }
}
const View = fn(17).View;
const MAX_AUDIENCE_ROW_LIMIT = fn(5414).MAX_AUDIENCE_ROW_LIMIT;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles({ rowContainer: { flex: 1, flexDirection: "row", marginVertical: 16, paddingHorizontal: 4, justifyContent: "space-between" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/AudienceGridRow.tsx");

export default noop.memo((theme) => {
  ({ channel: importDefault, participants, renderBlankAudience } = theme);
  if (renderBlankAudience === undefined) {
    renderBlankAudience = true;
  }
  theme = theme.theme;
  let num = 0;
  if (renderBlankAudience) {
    num = MAX_AUDIENCE_ROW_LIMIT - participants.length;
  }
  const items = [closure_6().rowContainer, ];
  let str = "center";
  if (renderBlankAudience) {
    str = "space-between";
  }
  let obj = { style: items, children: null };
  items[1] = { justifyContent: str };
  const items1 = [participants.map((participant) => React4(AudienceTileDefault, { theme, channel, participant }, participant.id)), ];
  let tmp5 = null;
  if (num > 0) {
    obj = { count: num };
    tmp5 = closure_4(BlankAudience, obj);
  }
  items1[1] = tmp5;
  obj.children = items1;
  return closure_5(View, obj);
});
export { BlankAudience };