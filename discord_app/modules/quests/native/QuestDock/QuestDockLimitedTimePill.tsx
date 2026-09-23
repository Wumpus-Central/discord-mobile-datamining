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
const createStyles = fn(4827);
let obj = {
  pill: {
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: nativeDefault.unsafe_rawColors.NEUTRAL_79,
    borderRadius: nativeDefault.radii.round,
    flexDirection: "row",
    gap: nativeDefault.space.PX_4,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  text: { textTransform: "uppercase" },
};
let closure_6 = createStyles.createStyles(obj);
let obj3 = {
  alignItems: "center",
  alignSelf: "flex-start",
  backgroundColor: nativeDefault.unsafe_rawColors.NEUTRAL_79,
  borderRadius: nativeDefault.radii.round,
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: 6,
  paddingVertical: 2,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockLimitedTimePill.tsx");

export default noop.memo(function QuestDockLimitedTimePill() {
  const tmp = closure_6();
  const obj = { style: tmp.pill, accessible: true, accessibilityRole: "text", children: null };
  const items = [React4(TimerIcon.TimerIcon, { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT })];
  const obj3 = { variant: "text-xs/bold", color: "text-overlay-light", style: tmp.text, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["h/uBCR"]);
  items[1] = React4(Text_Text.Text, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
