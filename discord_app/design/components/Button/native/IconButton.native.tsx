// === Module 8035: IconButton ===

// Module 8035 (IconButton)
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import BaseButton from "BaseButton" /* 4752 */;
import BaseIconButton from "BaseIconButton" /* 8036 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

require = fn;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles((arg0) => {
  const labelPressable = { paddingBottom: ThemesDefault.space.PX_4, gap: ThemesDefault.space.PX_8, alignItems: "center", alignSelf: "center", flexGrow: null };
  let num = 0;
  if (arg0) {
    num = 1;
  }
  labelPressable[4] = num;
  return { labelPressable, label: { textAlign: "center" } };
});
const forwardRefResult = importAllResult.forwardRef((grow) => {
  ({ label, accessibilityLabel, maxFontSizeMultiplier, accessibilityHint } = grow);
  const merged = Object.assign(grow, Object.create(null));
  const tmp2 = callback3(grow.grow);
  if (null != label) {
    let obj = { style: null };
    obj[0] = tmp2.labelPressable;
    const merged1 = Object.assign(merged);
    obj.variant = "none";
    obj.accessibilityLabel = accessibilityLabel;
    obj.accessibilityHint = accessibilityHint;
    obj = { ref: null };
    obj[0] = arg1;
    const merged2 = Object.assign(merged);
    obj.accessibilityRole = "none";
    obj.accessibilityLabel = "";
    obj.size = "lg";
    obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
    const items = [callback(BaseIconButton.BaseIconButton, obj), ];
    obj1 = { style: null, variant: "text-xs/medium", color: "interactive-text-default", maxFontSizeMultiplier: null, children: null };
    obj1[0] = tmp2.label;
    obj1[3] = maxFontSizeMultiplier;
    obj1[4] = label;
    items[1] = callback(Text.Text, obj1);
    obj.children = items;
    let tmp9 = callback2(BaseButton.BaseButton, obj);
  } else {
    obj = { ref: null };
    obj[0] = arg1;
    const merged3 = Object.assign(merged);
    obj.accessibilityLabel = accessibilityLabel;
    obj.accessibilityHint = accessibilityHint;
    obj.maxFontSizeMultiplier = maxFontSizeMultiplier;
    tmp9 = callback(BaseIconButton.BaseIconButton, obj);
  }
  return tmp9;
});
const result = require("obj132").fileFinishedImporting("design/components/Button/native/IconButton.native.tsx");

export const IconButton = forwardRefResult;