// === Module 8881: HeaderButton ===

// Module 8881 (HeaderButton)
import noopAll from "noop" /* 19 */;
import CollapsingText from "CollapsingText" /* 4880 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
class HeaderButton {
  constructor(arg0) {
    tmp = closure_4();
    obj = { accessibilityRole: "header" };
    merged = Object.assign(global);
    obj.pillStyle = tmp.pill;
    obj.size = "sm";
    obj.textVariant = c3;
    obj.variant = "secondary-overlay";
    return jsx(require("CollapsingText").BaseTextButton, obj);
  }
}
noopAll;
let c3 = "heading-md/bold";
const diff = require("MINIMUM_HIT_AREA").SMALL_BUTTON_HEIGHT - 2 * require("MINIMUM_HIT_AREA").BUTTON_BORDER_WIDTH;
const diff1 = diff - require("Text").TextStyleSheet["heading-md/bold"].lineHeight;
createCacheKey = { paddingVertical: diff1 / 2 };
let closure_4 = createCacheKey.createStyles({ pill: createCacheKey });
HeaderButton.Icon = require("CollapsingText").BaseTextButton.Icon;
const result = require("set").fileFinishedImporting("design/components/experimental/Button/native/HeaderButton.native.tsx");

export { HeaderButton };