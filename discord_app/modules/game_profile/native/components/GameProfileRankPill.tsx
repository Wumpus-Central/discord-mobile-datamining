// === Module 8716: GameProfileRankPill ===

// Module 8716 (GameProfileRankPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import TrophyIcon from "TrophyIcon" /* 8717 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: null };
createStyles = { flexDirection: "row", backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_4 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.gameRankPill = createStyles;
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.gameRankPill, children: null };
  obj = { size: "xxs", color: nativeDefault.colors.BLACK };
  const items = [React4(TrophyIcon.TrophyIcon, obj), ];
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (compact) {
    const obj1 = { rank };
    let str = formatToPlainString(t.UA6RoE, obj1);
  } else {
    const obj2 = { rank };
    str = formatToPlainString(t.ehZXlZ, obj2);
  }
  items[1] = React4(Text_Text.Text, { variant: "text-xs/bold", color: "text-overlay-dark", children: str.toUpperCase() });
  obj.children = items;
  obj.children = hasOwnProperty(View, obj);
  return React4(View, obj);
};