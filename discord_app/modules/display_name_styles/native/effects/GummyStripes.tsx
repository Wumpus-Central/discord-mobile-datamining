// discord_app/modules/display_name_styles/native/effects/GummyStripes.tsx
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, Fragment: closure_4 } = jsxProd);
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  closure_0 = closure_5();
  return closure_3(closure_4, {
    children: colors.map((item, index) => {
      const items = [closure_0.stripe, ,];
      let stripeOverlap = index > 0;
      if (stripeOverlap) {
        stripeOverlap = closure_0.stripeOverlap;
      }
      let obj = { style: null };
      items[1] = stripeOverlap;
      obj = { backgroundColor: utils_ColorUtils.int2hex(item) };
      items[2] = obj;
      obj.style = items;
      return React3(View, obj, index);
    }),
  });
}
