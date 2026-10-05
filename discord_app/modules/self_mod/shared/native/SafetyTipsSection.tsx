// discord_app/modules/self_mod/shared/native/SafetyTipsSection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import SafetyTipsRowDefault from "SafetyTipsRow.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { image: { alignSelf: "center", justifySelf: "center" }, tips: obj2, text: { textAlign: "center" } };
obj2 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (showHeader) => {
      let description;
      let first;
      let intl;
      let items;
      let items1;
      let safetyTips;
      let tmp8;
      let obj = safetyTips(576);
      const cResult = obj.c(23);
      ({ description, safetyTips } = showHeader);
      showHeader = showHeader.showHeader;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = closure_4(safetyTips(9807).SafetyBookletSpotIllustration, {});
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.image) {
        const obj2 = { style: tmp4.image, children: first };
        const tmp11 = closure_4(View, obj2);
        cResult[1] = tmp4.image;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === showHeader) {
        let tmp12;
        if (cResult[4] === tmp4.text) {
          tmp12 = cResult[5];
        }
        if (cResult[6] === description) {
          let tmp15;
          if (cResult[7] === tmp4.text) {
            tmp15 = cResult[8];
          }
          if (cResult[9] === tmp12) {
            let tmp18;
            let tmp21;
            if (cResult[10] === tmp15) {
              tmp18 = cResult[11];
            }
            const tips = tmp4.tips;
            if (cResult[12] !== safetyTips) {
              let tmp22;
              if (cResult[14] !== safetyTips.length) {
                const fn = function k(tip, arg1) {
                  const obj = { index: arg1 + 1, tip, end: arg1 === safetyTips.length - 1 };
                  return React3(SafetyTipsRowDefault, obj, arg1);
                };
                cResult[14] = safetyTips.length;
                cResult[15] = fn;
                tmp22 = fn;
              } else {
                tmp22 = cResult[15];
              }
              const mapped = safetyTips.map(tmp22);
              cResult[12] = safetyTips;
              cResult[13] = mapped;
              tmp21 = mapped;
            } else {
              tmp21 = cResult[13];
            }
            if (cResult[16] === tmp4.tips) {
              let tmp24;
              if (cResult[17] === tmp21) {
                tmp24 = cResult[18];
              }
              if (cResult[19] === tmp8) {
                if (cResult[20] === tmp18) {
                  let tmp28;
                  if (cResult[21] === tmp24) {
                    tmp28 = cResult[22];
                  }
                  return tmp28;
                }
              }
              const obj3 = { spacing: 16, children: items };
              items = [tmp8, tmp18, tmp24];
              const tmp30 = closure_5(safetyTips(5593).Stack, obj3);
              cResult[19] = tmp8;
              cResult[20] = tmp18;
              cResult[21] = tmp24;
              cResult[22] = tmp30;
              tmp28 = tmp30;
            }
            const obj4 = { style: tips, children: tmp21 };
            const tmp27 = closure_4(View, obj4);
            cResult[16] = tmp4.tips;
            cResult[17] = tmp21;
            cResult[18] = tmp27;
            tmp24 = tmp27;
          }
          const obj5 = { spacing: 8, align: "center", justify: "center", children: items1 };
          items1 = [tmp12, tmp15];
          const tmp20 = closure_5(safetyTips(5593).Stack, obj5);
          cResult[9] = tmp12;
          cResult[10] = tmp15;
          cResult[11] = tmp20;
          tmp18 = tmp20;
        }
        const obj6 = {
          style: tmp4.text,
          accessibilityRole: "header",
          variant: "text-md/medium",
          color: "text-default",
          children: description,
        };
        const tmp17 = closure_4(safetyTips(4886).Text, obj6);
        cResult[6] = description;
        cResult[7] = tmp4.text;
        cResult[8] = tmp17;
        tmp15 = tmp17;
      }
      let tmp13 = showHeader;
      if (tmp13) {
        const obj7 = {
          style: tmp4.text,
          variant: "heading-xl/semibold",
          children: intl.string(safetyTips(1126).t.eAbVfS),
        };
        const Text = safetyTips(4886).Text;
        intl = safetyTips(1126).intl;
        tmp13 = closure_4(Text, obj7);
      }
      cResult[3] = showHeader;
      cResult[4] = tmp4.text;
      cResult[5] = tmp13;
      tmp12 = tmp13;
    }
  : (safetyTips) => {
      let intl;
      let items1;
      safetyTips = safetyTips.safetyTips;
      let showHeader = safetyTips.showHeader;
      const description = safetyTips.description;
      const tmp = closure_6();
      let obj = { style: tmp.image, children: closure_4(safetyTips(9807).SafetyBookletSpotIllustration, {}) };
      const Stack = safetyTips(5593).Stack;
      const items = [closure_4(View, obj), ,];
      const Stack2 = safetyTips(5593).Stack;
      if (showHeader) {
        const obj2 = {
          style: tmp.text,
          variant: "heading-xl/semibold",
          children: intl.string(safetyTips(1126).t.eAbVfS),
        };
        const Text = tmp3(4886).Text;
        intl = tmp3(1126).intl;
        showHeader = closure_4(Text, obj2);
      }
      const obj4 = { spacing: 8, align: "center", justify: "center", children: items1 };
      items1 = [showHeader];
      const obj3 = { spacing: 16, children: items };
      const obj5 = {
        style: tmp.text,
        accessibilityRole: "header",
        variant: "text-md/medium",
        color: "text-default",
        children: description,
      };
      items1[1] = closure_4(safetyTips(4886).Text, obj5);
      items[1] = closure_5(Stack2, obj4);
      const obj6 = {
        style: tmp.tips,
        children: safetyTips.map((tip, index) => {
          const obj = { index: index + 1, tip, end: index === safetyTips.length - 1 };
          return React3(SafetyTipsRowDefault, obj, index);
        }),
      };
      items[2] = closure_4(View, obj6);
      return closure_5(Stack, obj3);
    };
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default tmp4;
