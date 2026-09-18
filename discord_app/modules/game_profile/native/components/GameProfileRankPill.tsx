// === Module 8950: GameProfileRankPill ===

// Module 8950 (GameProfileRankPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4718 */;
import TrophyIcon from "TrophyIcon" /* 8951 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4722);
let obj2 = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.gameRankPill = { flexDirection: "row", backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default function GameProfileRankPill(arg0) {
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.gameRankPill, children: null };
  const items = [React4(TrophyIcon.TrophyIcon, { size: "xxs", color: nativeDefault.colors.BLACK }), ];
  const intl = util.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = util.t;
  if (compact) {
    const obj4 = { rank };
    let str = formatToPlainString(t.UA6RoE, obj4);
  } else {
    const obj5 = { rank };
    str = formatToPlainString(t.ehZXlZ, obj5);
  }
  const obj3 = { size: "xxs", color: nativeDefault.colors.BLACK };
  items[1] = React4(Text_Text.Text, { variant: "text-xs/bold", color: "text-overlay-dark", children: str.toUpperCase() });
  obj2.children = items;
  obj.children = hasOwnProperty(View, obj2);
  return React4(View, obj);
};