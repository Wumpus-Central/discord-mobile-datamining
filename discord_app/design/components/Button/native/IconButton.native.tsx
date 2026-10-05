// discord_app/design/components/Button/native/IconButton.native.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import Button_BaseButton from "BaseButton.native.tsx";
import BaseIconButton3 from "BaseIconButton.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let closure_3 = ["label", "grow", "accessibilityLabel", "maxFontSizeMultiplier", "accessibilityHint"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0) => {
  let num;
  const labelPressable = {
    paddingBottom: nativeDefault.space.PX_4,
    gap: nativeDefault.space.PX_8,
    alignItems: "center",
    alignSelf: "center",
    flexGrow: num,
  };
  num = 0;
  if (arg0) {
    num = 1;
  }
  return { labelPressable, label: { textAlign: "center" } };
});
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        let accessibilityHint;
        let accessibilityLabel;
        let grow;
        let items;
        let label;
        let maxFontSizeMultiplier;
        let tmp14;
        let tmp4;
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        const obj = react2;
        const cResult = obj.c(28);
        if (cResult[0] !== arg0) {
          ({ label, grow, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = arg0);
          const tmp12 = _objectWithoutProperties(arg0, closure_3);
          cResult[0] = arg0;
          cResult[1] = accessibilityHint;
          cResult[2] = accessibilityLabel;
          cResult[3] = grow;
          cResult[4] = label;
          cResult[5] = maxFontSizeMultiplier;
          cResult[6] = tmp12;
          tmp9 = tmp12;
          tmp8 = maxFontSizeMultiplier;
          tmp7 = label;
          tmp6 = grow;
          tmp5 = accessibilityLabel;
          tmp4 = accessibilityHint;
        } else {
          tmp4 = cResult[1];
          tmp5 = cResult[2];
          tmp6 = cResult[3];
          tmp7 = cResult[4];
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        const tmp13 = closure_7(tmp6);
        if (null != tmp7) {
          if (cResult[7] === tmp8) {
            if (cResult[8] === tmp9) {
              let tmp20;
              if (cResult[9] === ref) {
                tmp20 = cResult[10];
              }
              if (cResult[11] === tmp7) {
                if (cResult[12] === tmp8) {
                  let tmp26;
                  if (cResult[13] === tmp13.label) {
                    tmp26 = cResult[14];
                  }
                  if (cResult[15] === tmp4) {
                    if (cResult[16] === tmp5) {
                      if (cResult[17] === tmp9) {
                        if (cResult[18] === tmp13.labelPressable) {
                          if (cResult[19] === tmp20) {
                            let tmp29;
                            if (cResult[20] === tmp26) {
                              tmp29 = cResult[21];
                            }
                            tmp14 = tmp29;
                          }
                        }
                      }
                    }
                  }
                  const obj2 = {
                    style: tmp13.labelPressable,
                    variant: "none",
                    accessibilityLabel: tmp5,
                    accessibilityHint: tmp4,
                    children: items,
                  };
                  const BaseButton = Button_BaseButton.BaseButton;
                  const merged = Object.assign(tmp9);
                  items = [tmp20, tmp26];
                  const tmp34 = metroRequire(BaseButton, obj2);
                  cResult[15] = tmp4;
                  cResult[16] = tmp5;
                  cResult[17] = tmp9;
                  cResult[18] = tmp13.labelPressable;
                  cResult[19] = tmp20;
                  cResult[20] = tmp26;
                  cResult[21] = tmp34;
                  tmp29 = tmp34;
                }
              }
              const obj3 = {
                style: tmp13.label,
                variant: "text-xs/medium",
                color: "interactive-text-default",
                maxFontSizeMultiplier: tmp8,
                children: tmp7,
              };
              const tmp28 = hasOwnProperty(Text_Text.Text, obj3);
              cResult[11] = tmp7;
              cResult[12] = tmp8;
              cResult[13] = tmp13.label;
              cResult[14] = tmp28;
              tmp26 = tmp28;
            }
          }
          const obj4 = {
            ref,
            accessibilityRole: "none",
            accessibilityLabel: "",
            size: "lg",
            maxFontSizeMultiplier: tmp8,
          };
          const BaseIconButton2 = BaseIconButton3.BaseIconButton;
          const merged1 = Object.assign(tmp9);
          const tmp25 = hasOwnProperty(BaseIconButton2, obj4);
          cResult[7] = tmp8;
          cResult[8] = tmp9;
          cResult[9] = ref;
          cResult[10] = tmp25;
          tmp20 = tmp25;
        } else {
          if (cResult[22] === tmp4) {
            if (cResult[23] === tmp5) {
              if (cResult[24] === tmp8) {
                if (cResult[25] === tmp9) {
                  if (cResult[26] === ref) {
                    tmp14 = cResult[27];
                  }
                }
              }
            }
          }
          const obj5 = { ref, accessibilityLabel: tmp5, accessibilityHint: tmp4, maxFontSizeMultiplier: tmp8 };
          const BaseIconButton = BaseIconButton3.BaseIconButton;
          const merged2 = Object.assign(tmp9);
          const tmp19 = hasOwnProperty(BaseIconButton, obj5);
          cResult[22] = tmp4;
          cResult[23] = tmp5;
          cResult[24] = tmp8;
          cResult[25] = tmp9;
          cResult[26] = ref;
          cResult[27] = tmp19;
          tmp14 = tmp19;
        }
        return tmp14;
      }
    : (grow, ref) => {
        let accessibilityHint;
        let accessibilityLabel;
        let items;
        let label;
        let maxFontSizeMultiplier;
        let tmp9;
        ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = grow);
        grow = grow.grow;
        const merged = Object.assign(
          grow,
          Object.assign({ label: 0, grow: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, accessibilityHint: 0 }),
        );
        const tmp2 = closure_7(grow);
        if (null != label) {
          const obj2 = {
            style: tmp2.labelPressable,
            variant: "none",
            accessibilityLabel,
            accessibilityHint,
            children: items,
          };
          const BaseButton = Button_BaseButton.BaseButton;
          const merged1 = Object.assign(merged);
          const obj3 = { ref, accessibilityRole: "none", accessibilityLabel: "", size: "lg", maxFontSizeMultiplier };
          const BaseIconButton2 = BaseIconButton3.BaseIconButton;
          const merged2 = Object.assign(merged);
          items = [hasOwnProperty(BaseIconButton2, obj3)];
          const obj4 = {
            style: tmp2.label,
            variant: "text-xs/medium",
            color: "interactive-text-default",
            maxFontSizeMultiplier,
            children: label,
          };
          items[1] = hasOwnProperty(Text_Text.Text, obj4);
          tmp9 = metroRequire(BaseButton, obj2);
        } else {
          const obj = { ref, accessibilityLabel, accessibilityHint, maxFontSizeMultiplier };
          const BaseIconButton = BaseIconButton3.BaseIconButton;
          const merged3 = Object.assign(merged);
          tmp9 = hasOwnProperty(BaseIconButton, obj);
        }
        return tmp9;
      },
);
const result = size.fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export const IconButton = forwardRefResult;
