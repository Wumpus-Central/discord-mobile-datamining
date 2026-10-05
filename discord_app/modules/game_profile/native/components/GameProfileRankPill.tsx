// === Module 8363: GameProfileRankPill ===

// Module 8363 (GameProfileRankPill)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import TrophyIcon2 from "TrophyIcon" /* 8364 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: obj2 };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.WHITE, borderRadius: nativeDefault.radii.round, paddingHorizontal: nativeDefault.space.PX_8, alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_6 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let compact;
  let container;
  let first;
  let gameRankPill;
  let items;
  let rank;
  let str;
  const obj = react2;
  const cResult = obj.c(12);
  ({ rank, compact } = arg0);
  const tmp5 = closure_6();
  ({ container, gameRankPill } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "xxs", color: nativeDefault.colors.BLACK };
    const TrophyIcon = TrophyIcon2.TrophyIcon;
    const tmp9 = React3(TrophyIcon, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === (undefined !== compact && compact)) {
    let tmp10;
    let tmp12;
    if (cResult[2] === rank) {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== tmp10) {
      const obj3 = { variant: "text-xs/bold", color: "text-overlay-dark", children: tmp10 };
      const tmp14 = React3(Text_Text.Text, obj3);
      cResult[4] = tmp10;
      cResult[5] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === tmp5.gameRankPill) {
      let tmp15;
      if (cResult[7] === tmp12) {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp5.container) {
        let tmp19;
        if (cResult[10] === tmp15) {
          tmp19 = cResult[11];
        }
        return tmp19;
      }
      const obj4 = { style: container, children: tmp15 };
      const tmp22 = React3(View, obj4);
      cResult[9] = tmp5.container;
      cResult[10] = tmp15;
      cResult[11] = tmp22;
      tmp19 = tmp22;
    }
    const obj5 = { style: gameRankPill, children: items };
    items = [first, tmp12];
    const tmp18 = hasOwnProperty(View, obj5);
    cResult[6] = tmp5.gameRankPill;
    cResult[7] = tmp12;
    cResult[8] = tmp18;
    tmp15 = tmp18;
  }
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl2.t;
  if (undefined !== compact && compact) {
    const obj6 = { rank };
    str = formatToPlainString(t.UA6RoE, obj6);
  } else {
    const obj7 = { rank };
    str = formatToPlainString(t.ehZXlZ, obj7);
  }
  const formatted = str.toUpperCase();
  cResult[1] = undefined !== compact && compact;
  cResult[2] = rank;
  cResult[3] = formatted;
  tmp10 = formatted;
}) : ((arg0) => {
  let compact;
  let items;
  let obj2;
  let rank;
  let str;
  ({ rank, compact } = arg0);
  if (compact === undefined) {
    compact = false;
  }
  const tmp = closure_6();
  const obj = { style: tmp.container, children: hasOwnProperty(View, obj2) };
  obj2 = { style: tmp.gameRankPill, children: items };
  const obj3 = { size: "xxs", color: nativeDefault.colors.BLACK };
  const TrophyIcon = TrophyIcon2.TrophyIcon;
  items = [React3(TrophyIcon, obj3), ];
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = intl2.t;
  if (compact) {
    const obj4 = { rank };
    str = formatToPlainString(t.UA6RoE, obj4);
  } else {
    const obj5 = { rank };
    str = formatToPlainString(t.ehZXlZ, obj5);
  }
  const obj6 = { variant: "text-xs/bold", color: "text-overlay-dark", children: str.toUpperCase() };
  items[1] = React3(Text, obj6);
  return React3(View, obj);
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default tmp6;