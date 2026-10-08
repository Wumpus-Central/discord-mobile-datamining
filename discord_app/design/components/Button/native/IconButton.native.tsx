// === Module 8106: IconButton ===

// Module 8106 (IconButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const Text_Text = BaseButton(5086);
const Button_BaseButton = BaseButton(5383);
const BaseIconButton = BaseButton(8107);
require = fn;
let closure_3 = ["label", "grow", "accessibilityLabel", "maxFontSizeMultiplier", "accessibilityHint", "ref"];
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles((arg0) => {
  const labelPressable = { paddingBottom: nativeDefault.space.PX_4, gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: null };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  labelPressable.flexGrow = num;
  return { labelPressable, label: { textAlign: "center" } };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export const IconButton = ReactCompilerGating.isReactCompilerEnabled() ? (function IconButton(arg0) {
  let BaseButton = require;
  let tmp = dependencyMap;
  const cResult = c.c(29);
  if (cResult[0] !== arg0) {
    ({ label, grow, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint, ref } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityHint;
    cResult[2] = accessibilityLabel;
    cResult[3] = grow;
    cResult[4] = label;
    cResult[5] = maxFontSizeMultiplier;
    cResult[6] = tmp12;
    cResult[7] = ref;
    let tmp9 = ref;
    let tmp8 = tmp12;
    let tmp7 = maxFontSizeMultiplier;
    let tmp6 = label;
    let tmp5 = grow;
    let tmp4 = accessibilityLabel;
    let tmp3 = accessibilityHint;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
  }
  let labelPressable = closure_7(tmp5);
  if (null != tmp6) {
    if (cResult[8] === tmp7) {
      if (cResult[9] === tmp8) {
        if (cResult[10] === tmp9) {
          let tmp19 = cResult[11];
        }
        if (cResult[12] === tmp6) {
          if (cResult[13] === tmp7) {
            if (cResult[14] === labelPressable.label) {
              let tmp25 = cResult[15];
            }
            if (cResult[16] === tmp3) {
              if (cResult[17] === tmp4) {
                if (cResult[18] === tmp8) {
                  if (cResult[19] === labelPressable.labelPressable) {
                    if (cResult[20] === tmp19) {
                    }
                  }
                }
              }
            }
            BaseButton = Button_BaseButton.BaseButton;
            const obj2 = { style: labelPressable.labelPressable };
            const merged = Object.assign(tmp8);
            obj2.variant = "none";
            obj2.accessibilityLabel = tmp4;
            obj2.accessibilityHint = tmp3;
            const items = [tmp19, tmp25];
            obj2.children = items;
            tmp = timestampProducer(BaseButton, obj2);
            cResult[16] = tmp3;
            cResult[17] = tmp4;
            cResult[18] = tmp8;
            labelPressable = labelPressable.labelPressable;
            cResult[19] = labelPressable;
            cResult[20] = tmp19;
            cResult[21] = tmp25;
            cResult[22] = tmp;
          }
        }
        const obj3 = { style: labelPressable.label, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: tmp7, children: tmp6 };
        const tmp27 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[12] = tmp6;
        cResult[13] = tmp7;
        cResult[14] = labelPressable.label;
        cResult[15] = tmp27;
        tmp25 = tmp27;
      }
    }
    const obj4 = { ref: tmp9 };
    const merged1 = Object.assign(tmp8);
    obj4.accessibilityRole = "none";
    obj4.accessibilityLabel = "";
    obj4.size = "lg";
    obj4.maxFontSizeMultiplier = tmp7;
    const tmp24 = hasOwnProperty(BaseIconButton.BaseIconButton, obj4);
    cResult[8] = tmp7;
    cResult[9] = tmp8;
    cResult[10] = tmp9;
    cResult[11] = tmp24;
    tmp19 = tmp24;
  } else {
    if (cResult[23] === tmp3) {
      if (cResult[24] === tmp4) {
        if (cResult[25] === tmp7) {
          if (cResult[26] === tmp8) {
            if (cResult[27] === tmp9) {
              let tmp13 = cResult[28];
            }
            return tmp13;
          }
        }
      }
    }
    const obj5 = { ref: tmp9 };
    const merged2 = Object.assign(tmp8);
    obj5.accessibilityLabel = tmp4;
    obj5.accessibilityHint = tmp3;
    obj5.maxFontSizeMultiplier = tmp7;
    const tmp18 = hasOwnProperty(BaseIconButton.BaseIconButton, obj5);
    cResult[23] = tmp3;
    cResult[24] = tmp4;
    cResult[25] = tmp7;
    cResult[26] = tmp8;
    cResult[27] = tmp9;
    cResult[28] = tmp18;
    tmp13 = tmp18;
  }
}) : (function IconButton(grow) {
  ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint, ref } = grow);
  const merged = Object.assign(grow, Object.assign({ label: 0, grow: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, accessibilityHint: 0, ref: 0 }));
  const tmp2 = closure_7(grow.grow);
  if (null != label) {
    const obj2 = { style: tmp2.labelPressable };
    const merged1 = Object.assign(merged);
    obj2.variant = "none";
    obj2.accessibilityLabel = accessibilityLabel;
    obj2.accessibilityHint = accessibilityHint;
    const obj3 = { ref };
    const merged2 = Object.assign(merged);
    obj3.accessibilityRole = "none";
    obj3.accessibilityLabel = "";
    obj3.size = "lg";
    obj3.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items = [hasOwnProperty(BaseIconButton.BaseIconButton, obj3), ];
    const obj4 = { style: tmp2.label, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier, children: label };
    items[1] = hasOwnProperty(Text_Text.Text, obj4);
    obj2.children = items;
    let tmp9 = timestampProducer(Button_BaseButton.BaseButton, obj2);
  } else {
    const obj = { ref };
    const merged3 = Object.assign(merged);
    obj.accessibilityLabel = accessibilityLabel;
    obj.accessibilityHint = accessibilityHint;
    obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
    tmp9 = hasOwnProperty(BaseIconButton.BaseIconButton, obj);
  }
  return tmp9;
});