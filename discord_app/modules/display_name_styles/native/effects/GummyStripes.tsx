// === Module 14899: GummyStripes ===

// Module 14899 (GummyStripes)
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4 } = jsxProd);
const createStyles = fn(4757);
let closure_5 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  closure_0 = closure_5();
  return closure_3(closure_4, {
    children: colors.map((item, index) => {
      const items = [closure_0.stripe, , ];
      let stripeOverlap = index > 0;
      if (stripeOverlap) {
        stripeOverlap = closure_0.stripeOverlap;
      }
      const obj = { style: null };
      items[1] = stripeOverlap;
      const obj2 = { backgroundColor: utils_ColorUtils.int2hex(item) };
      items[2] = obj2;
      obj.style = items;
      return React3(View, obj, index);
    })
  });
};