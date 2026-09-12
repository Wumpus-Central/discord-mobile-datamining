// discord_app/modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TimerIcon from "../../../../design/components/Icon/native/redesign/generated/TimerIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4636);
let obj = { pill: null, text: null };
obj = {
  alignItems: "center",
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.round,
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: 6,
  paddingVertical: 2,
};
obj.pill = obj;
obj.text = { textTransform: "uppercase" };
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx");

export default noop.memo(function QuestDockLimitedTimePill() {
  const tmp = closure_6();
  let obj = { style: tmp.pill, accessible: true, accessibilityRole: "text", children: null };
  obj = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT };
  const items = [React4(TimerIcon.TimerIcon, obj)];
  obj = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["h/uBCR"]);
  items[1] = React4(Text_Text.Text, obj);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
