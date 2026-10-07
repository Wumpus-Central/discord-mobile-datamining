// === Module 7586: IconButton ===

// Module 7586 (IconButton)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const Text_Text = BaseButton(4892);
const Button_BaseButton = BaseButton(5617);
const BaseIconButton = BaseButton(7587);
require = fn;
let closure_3 = ["label", "grow", "accessibilityLabel", "maxFontSizeMultiplier", "accessibilityHint"];
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
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

export const IconButton = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let BaseButton = require;
  let tmp = dependencyMap;
  const cResult = c.c(28);
  if (cResult[0] !== arg0) {
    ({ label, grow, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityHint;
    cResult[2] = accessibilityLabel;
    cResult[3] = grow;
    cResult[4] = label;
    cResult[5] = maxFontSizeMultiplier;
    cResult[6] = tmp11;
    let tmp8 = tmp11;
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
  }
  let labelPressable = closure_7(tmp5);
  if (null != tmp6) {
    if (cResult[7] === tmp7) {
      if (cResult[8] === tmp8) {
        if (cResult[9] === ref) {
          let tmp18 = cResult[10];
        }
        if (cResult[11] === tmp6) {
          if (cResult[12] === tmp7) {
            if (cResult[13] === labelPressable.label) {
              let tmp24 = cResult[14];
            }
            if (cResult[15] === tmp3) {
              if (cResult[16] === tmp4) {
                if (cResult[17] === tmp8) {
                  if (cResult[18] === labelPressable.labelPressable) {
                    if (cResult[19] === tmp18) {
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
            const items = [tmp18, tmp24];
            obj2.children = items;
            tmp = timestampProducer(BaseButton, obj2);
            cResult[15] = tmp3;
            cResult[16] = tmp4;
            cResult[17] = tmp8;
            labelPressable = labelPressable.labelPressable;
            cResult[18] = labelPressable;
            cResult[19] = tmp18;
            cResult[20] = tmp24;
            cResult[21] = tmp;
          }
        }
        const obj3 = { style: labelPressable.label, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: tmp7, children: tmp6 };
        const tmp26 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[11] = tmp6;
        cResult[12] = tmp7;
        cResult[13] = labelPressable.label;
        cResult[14] = tmp26;
        tmp24 = tmp26;
      }
    }
    const obj4 = { ref };
    const merged1 = Object.assign(tmp8);
    obj4.accessibilityRole = "none";
    obj4.accessibilityLabel = "";
    obj4.size = "lg";
    obj4.maxFontSizeMultiplier = tmp7;
    const tmp23 = hasOwnProperty(BaseIconButton.BaseIconButton, obj4);
    cResult[7] = tmp7;
    cResult[8] = tmp8;
    cResult[9] = ref;
    cResult[10] = tmp23;
    tmp18 = tmp23;
  } else {
    if (cResult[22] === tmp3) {
      if (cResult[23] === tmp4) {
        if (cResult[24] === tmp7) {
          if (cResult[25] === tmp8) {
            if (cResult[26] === ref) {
              let tmp12 = cResult[27];
            }
            return tmp12;
          }
        }
      }
    }
    const obj5 = { ref };
    const merged2 = Object.assign(tmp8);
    obj5.accessibilityLabel = tmp4;
    obj5.accessibilityHint = tmp3;
    obj5.maxFontSizeMultiplier = tmp7;
    const tmp17 = hasOwnProperty(BaseIconButton.BaseIconButton, obj5);
    cResult[22] = tmp3;
    cResult[23] = tmp4;
    cResult[24] = tmp7;
    cResult[25] = tmp8;
    cResult[26] = ref;
    cResult[27] = tmp17;
    tmp12 = tmp17;
  }
}) : ((grow, ref) => {
  ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = grow);
  const merged = Object.assign(grow, Object.assign({ label: 0, grow: 0, accessibilityLabel: 0, maxFontSizeMultiplier: 0, accessibilityHint: 0 }));
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
}));