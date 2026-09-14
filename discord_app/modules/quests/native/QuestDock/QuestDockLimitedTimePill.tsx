// === Module 15286: QuestDockLimitedTimePill ===

// Module 15286 (QuestDockLimitedTimePill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import TimerIcon from "TimerIcon" /* 11735 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj = { pill: { alignItems: "center", alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: 6, paddingVertical: 2 }, text: { textTransform: "uppercase" } };
let closure_6 = createStyles.createStyles(obj);
let obj3 = { alignItems: "center", alignSelf: "flex-start", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.round, flexDirection: "row", gap: nativeDefault.space.PX_4, paddingHorizontal: 6, paddingVertical: 2 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx");

export default noop.memo(function QuestDockLimitedTimePill() {
  const tmp = closure_6();
  const obj = { style: tmp.pill, accessible: true, accessibilityRole: "text", children: null };
  const items = [React4(TimerIcon.TimerIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT }), ];
  const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["h/uBCR"]);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});