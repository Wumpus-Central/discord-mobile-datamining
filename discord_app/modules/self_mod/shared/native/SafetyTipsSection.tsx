// discord_app/modules/self_mod/shared/native/SafetyTipsSection.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import SafetyTipsRowDefault from "SafetyTipsRow.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  image: { alignSelf: "center", justifySelf: "center" },
  tips: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
  },
  text: { textAlign: "center" },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  overflow: "hidden",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyTipsSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SafetyTipsContainer(showHeader) {
      const cResult = safetyTips(576).c(23);
      ({ description, safetyTips } = showHeader);
      showHeader = showHeader.showHeader;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = closure_4(safetyTips(10370).SafetyBookletSpotIllustration, {});
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.image) {
        const obj2 = { style: tmp4.image, children: first };
        const tmp11 = closure_4(View, obj2);
        cResult[1] = tmp4.image;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === showHeader) {
        if (cResult[4] === tmp4.text) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] === description) {
          if (cResult[7] === tmp4.text) {
            let tmp15 = cResult[8];
          }
          if (cResult[9] === tmp12) {
            if (cResult[10] === tmp15) {
              let tmp18 = cResult[11];
            }
            if (cResult[12] !== safetyTips) {
              if (cResult[14] !== safetyTips.length) {
                const fn = function _(tip, arg1) {
                  return React4(
                    SafetyTipsRowDefault,
                    { index: arg1 + 1, tip, end: arg1 === safetyTips.length - 1 },
                    arg1,
                  );
                };
                cResult[14] = safetyTips.length;
                cResult[15] = fn;
                let tmp23 = fn;
              } else {
                tmp23 = cResult[15];
              }
              const mapped = safetyTips.map(tmp23);
              cResult[12] = safetyTips;
              cResult[13] = mapped;
            } else {
              if (cResult[16] === tmp4.tips) {
                if (cResult[17] === tmp22) {
                  let tmp26 = cResult[18];
                }
                if (cResult[19] === tmp8) {
                  if (cResult[20] === tmp18) {
                    if (cResult[21] === tmp26) {
                      let tmp30 = cResult[22];
                    }
                    return tmp30;
                  }
                }
                const obj3 = { spacing: 16, children: null };
                const items = [tmp8, tmp18, tmp26];
                obj3.children = items;
                const tmp32 = closure_5(safetyTips(5374).Stack, obj3);
                cResult[19] = tmp8;
                cResult[20] = tmp18;
                cResult[21] = tmp26;
                cResult[22] = tmp32;
                tmp30 = tmp32;
              }
              const obj4 = { style: tmp21, children: cResult[13] };
              const tmp29 = closure_4(View, obj4);
              cResult[16] = tmp4.tips;
              cResult[17] = cResult[13];
              cResult[18] = tmp29;
              tmp26 = tmp29;
            }
          }
          const obj5 = { spacing: 8, align: "center", justify: "center", children: null };
          const items1 = [tmp12, tmp15];
          obj5.children = items1;
          const tmp20 = closure_5(safetyTips(5374).Stack, obj5);
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
        const tmp17 = closure_4(safetyTips(5087).Text, obj6);
        cResult[6] = description;
        cResult[7] = tmp4.text;
        cResult[8] = tmp17;
        tmp15 = tmp17;
      }
      let tmp13 = showHeader;
      if (showHeader) {
        const obj7 = { style: tmp4.text, variant: "heading-xl/semibold", children: null };
        const intl = safetyTips(1126).intl;
        obj7.children = intl.string(safetyTips(1126).t.eAbVfS);
        tmp13 = closure_4(safetyTips(5087).Text, obj7);
      }
      cResult[3] = showHeader;
      cResult[4] = tmp4.text;
      cResult[5] = tmp13;
      tmp12 = tmp13;
      const obj = safetyTips(576);
    }
  : function SafetyTipsContainer(children) {
      const safetyTips = children.safetyTips;
      let showHeader = children.showHeader;
      const tmp = closure_6();
      const items = [
        closure_4(View, { style: tmp.image, children: closure_4(safetyTips(10370).SafetyBookletSpotIllustration, {}) }),
        ,
      ];
      if (showHeader) {
        const obj2 = { style: tmp.text, variant: "heading-xl/semibold", children: null };
        const intl = tmp3(1126).intl;
        obj2.children = intl.string(tmp3(1126).t.eAbVfS);
        showHeader = closure_4(tmp3(5087).Text, obj2);
      }
      const obj3 = { spacing: 16, children: null };
      const obj4 = { spacing: 8, align: "center", justify: "center", children: null };
      const items1 = [
        showHeader,
        closure_4(safetyTips(5087).Text, {
          style: tmp.text,
          accessibilityRole: "header",
          variant: "text-md/medium",
          color: "text-default",
          children: children.description,
        }),
      ];
      obj4.children = items1;
      items[1] = closure_5(safetyTips(5374).Stack, obj4);
      const obj = { style: tmp.image, children: closure_4(safetyTips(10370).SafetyBookletSpotIllustration, {}) };
      const obj5 = {
        style: tmp.text,
        accessibilityRole: "header",
        variant: "text-md/medium",
        color: "text-default",
        children: children.description,
      };
      items[2] = closure_4(View, {
        style: tmp.tips,
        children: safetyTips.map((tip, index) =>
          React4(SafetyTipsRowDefault, { index: index + 1, tip, end: index === safetyTips.length - 1 }, index),
        ),
      });
      obj3.children = items;
      return closure_5(safetyTips(5374).Stack, obj3);
    };
