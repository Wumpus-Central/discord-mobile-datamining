// === Module 14617: GummyStripes ===

// Module 14617 (GummyStripes)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
noopAll;
({ jsx: c3, Fragment: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const result = require("set").fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  closure_0 = undefined;
  closure_0 = callback2();
  return callback(closure_4, {
    children: colors.map((color) => {
      const items = [lib.stripe, , ];
      let stripeOverlap = arg1 > 0;
      if (stripeOverlap) {
        stripeOverlap = lib.stripeOverlap;
      }
      let obj = { style: null };
      items[1] = stripeOverlap;
      obj = { backgroundColor: lib(closure_1_1[4]).int2hex(color) };
      items[2] = obj;
      obj[0] = items;
      return closure_1_3(closure_1_2, obj, arg1);
    })
  });
};