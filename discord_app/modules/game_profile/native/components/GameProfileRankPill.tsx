// discord_app/modules/game_profile/native/components/GameProfileRankPill.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import TrophyIcon from "../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, flexDirection: "row", alignItems: "flex-end" }, gameRankPill: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.gameRankPill = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileRankPill.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileRankPill(arg0) {
      const cResult = c.c(12);
      ({ rank, compact } = arg0);
      const tmp5 = closure_6();
      ({ container, gameRankPill } = tmp5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "xxs", color: nativeDefault.colors.BLACK };
        const tmp9 = React4(TrophyIcon.TrophyIcon, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === (undefined !== compact && compact)) {
        if (cResult[2] === rank) {
          if (cResult[4] !== cResult[3]) {
            const obj3 = { variant: "text-xs/bold", color: "text-overlay-dark", children: tmp10 };
            const tmp13 = React4(Text_Text.Text, obj3);
            cResult[4] = tmp10;
            cResult[5] = tmp13;
            let tmp11 = tmp13;
          } else {
            tmp11 = cResult[5];
          }
          if (cResult[6] === tmp5.gameRankPill) {
            if (cResult[7] === tmp11) {
              let tmp14 = cResult[8];
            }
            if (cResult[9] === tmp5.container) {
              if (cResult[10] === tmp14) {
                let tmp18 = cResult[11];
              }
              return tmp18;
            }
            const obj4 = { style: container, children: tmp14 };
            const tmp21 = React4(View, obj4);
            cResult[9] = tmp5.container;
            cResult[10] = tmp14;
            cResult[11] = tmp21;
            tmp18 = tmp21;
          }
          const obj5 = { style: gameRankPill, children: null };
          const items = [first, tmp11];
          obj5.children = items;
          const tmp17 = hasOwnProperty(View, obj5);
          cResult[6] = tmp5.gameRankPill;
          cResult[7] = tmp11;
          cResult[8] = tmp17;
          tmp14 = tmp17;
        }
      }
      const intl = util.intl;
      const formatToPlainString = intl.formatToPlainString;
      let t = util.t;
      if (undefined !== compact && compact) {
        const obj6 = { rank };
        let str = formatToPlainString(t.UA6RoE, obj6);
      } else {
        const obj7 = { rank };
        str = formatToPlainString(t.ehZXlZ, obj7);
      }
      t = str.toUpperCase();
      cResult[1] = undefined !== compact && compact;
      cResult[2] = rank;
      cResult[3] = t;
    }
  : function GameProfileRankPill(arg0) {
      ({ rank, compact } = arg0);
      if (compact === undefined) {
        compact = false;
      }
      const tmp = closure_6();
      const obj = { style: tmp.container, children: null };
      const obj2 = { style: tmp.gameRankPill, children: null };
      const items = [React4(TrophyIcon.TrophyIcon, { size: "xxs", color: nativeDefault.colors.BLACK })];
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
      items[1] = React4(Text_Text.Text, {
        variant: "text-xs/bold",
        color: "text-overlay-dark",
        children: str.toUpperCase(),
      });
      obj2.children = items;
      obj.children = hasOwnProperty(View, obj2);
      return React4(View, obj);
    };
