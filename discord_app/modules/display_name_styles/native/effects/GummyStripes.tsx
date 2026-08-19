// === Module 14035: GummyStripes ===

// Module 14035 (GummyStripes)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
noopAll;
({ jsx: c3, Fragment: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const result = require("obj132").fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  closure_0 = callback2();
  return callback(closure_4, {
    children: colors.map((item, index) => {
      const items = [lib.stripe, , ];
      let stripeOverlap = index > 0;
      if (stripeOverlap) {
        stripeOverlap = lib.stripeOverlap;
      }
      items[1] = stripeOverlap;
      const obj = { backgroundColor: lib(dependencyMap[4]).int2hex(item) };
      items[2] = obj;
      obj[0] = items;
      return closure_1_3(View, obj, index);
    })
  });
};