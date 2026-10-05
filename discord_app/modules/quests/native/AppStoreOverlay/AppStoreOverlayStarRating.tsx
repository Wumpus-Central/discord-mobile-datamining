// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import StarIcon2 from "../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import StarOutlineIcon2 from "../../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let fillAmounts;

let closure_4;
let hasOwnProperty;
let rect;
let size;
let size1;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  row: { flexDirection: "row", alignItems: "center", gap: 2 },
  star: size,
  starIcon: size1,
  starFillMask: rect,
};
size = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "relative" };
createStyles = createStyles.createStyles;
size1 = { width: nativeDefault.space.PX_10, height: nativeDefault.space.PX_10, position: "absolute", left: 0, top: 0 };
rect = { position: "absolute", left: 0, top: 0, height: nativeDefault.space.PX_10, overflow: "hidden" };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (fillAmount) => {
      let StarIcon;
      let items;
      let items1;
      let obj6;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(10);
      fillAmount = fillAmount.fillAmount;
      const tmp4 = closure_6();
      if (cResult[0] !== tmp4.starIcon) {
        const obj2 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp4.starIcon };
        const StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
        const tmp8 = React3(StarOutlineIcon, obj2);
        cResult[0] = tmp4.starIcon;
        cResult[1] = tmp8;
        tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === fillAmount) {
        if (cResult[3] === tmp4.starFillMask) {
          let tmp9;
          if (cResult[4] === tmp4.starIcon) {
            tmp9 = cResult[5];
          }
          if (cResult[6] === tmp4.star) {
            if (cResult[7] === tmp5) {
              let tmp14;
              if (cResult[8] === tmp9) {
                tmp14 = cResult[9];
              }
              return tmp14;
            }
          }
          const obj3 = {
            style: tmp4.star,
            importantForAccessibility: "no",
            accessibilityElementsHidden: true,
            children: items,
          };
          items = [tmp5, tmp9];
          const tmp17 = hasOwnProperty(View, obj3);
          cResult[6] = tmp4.star;
          cResult[7] = tmp5;
          cResult[8] = tmp9;
          cResult[9] = tmp17;
          tmp14 = tmp17;
        }
      }
      let tmp10 = fillAmount > 0;
      if (tmp10) {
        const obj4 = { style: items1, children: React3(StarIcon, obj6) };
        items1 = [tmp4.starFillMask];
        items1[1] = { width: nativeDefault.space.PX_10 * fillAmount };
        const obj5 = { width: nativeDefault.space.PX_10 * fillAmount };
        obj6 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp4.starIcon };
        StarIcon = StarIcon2.StarIcon;
        tmp10 = React3(View, obj4);
      }
      cResult[2] = fillAmount;
      cResult[3] = tmp4.starFillMask;
      cResult[4] = tmp4.starIcon;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (fillAmount) => {
      let StarIcon;
      let items;
      let items1;
      let obj5;
      fillAmount = fillAmount.fillAmount;
      const tmp = closure_6();
      const obj = {
        style: tmp.star,
        importantForAccessibility: "no",
        accessibilityElementsHidden: true,
        children: items,
      };
      const obj2 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon };
      const StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
      items = [React3(StarOutlineIcon, obj2)];
      let tmp4Result = fillAmount > 0;
      if (tmp4Result) {
        const obj3 = { style: items1, children: React3(StarIcon, obj5) };
        items1 = [tmp.starFillMask];
        items1[1] = { width: nativeDefault.space.PX_10 * fillAmount };
        const obj4 = { width: nativeDefault.space.PX_10 * fillAmount };
        obj5 = { size: "custom", color: nativeDefault.colors.TEXT_MUTED, style: tmp.starIcon };
        StarIcon = StarIcon2.StarIcon;
        tmp4Result = React3(View, obj3);
      }
      items[1] = tmp4Result;
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (fillAmounts) => {
      let tmp3;
      let obj = react2;
      const cResult = obj.c(6);
      fillAmounts = fillAmounts.fillAmounts;
      const tmp2 = closure_6();
      const row = tmp2.row;
      if (cResult[0] !== fillAmounts) {
        let tmp5;
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(fillAmount, arg1) {
            const obj = { fillAmount };
            return closure_1_4(closure_1_7, obj, arg1);
          };
          cResult[2] = fn;
          tmp5 = fn;
        } else {
          tmp5 = cResult[2];
        }
        const mapped = fillAmounts.map(tmp5);
        cResult[0] = fillAmounts;
        cResult[1] = mapped;
        tmp3 = mapped;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[3] === tmp2.row) {
        let tmp7;
        if (cResult[4] === tmp3) {
          tmp7 = cResult[5];
        }
        return tmp7;
      }
      const tmp8 = React3(View, { style: row, children: tmp3 });
      cResult[3] = tmp2.row;
      cResult[4] = tmp3;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (fillAmounts) => {
      fillAmounts = fillAmounts.fillAmounts;
      let obj = {
        style: closure_6().row,
        children: fillAmounts.map((fillAmount, index) => {
          const obj = { fillAmount };
          return closure_1_4(closure_1_7, obj, index);
        }),
      };
      return React3(View, obj);
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayStarRating.tsx");

export default tmp5;
