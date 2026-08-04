// discord_app/modules/display_name_styles/native/effects/GummyStripes.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, Fragment: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ stripe: { flex: 1 }, stripeOverlap: { marginLeft: -1 } });
const result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/effects/GummyStripes.tsx");

export default function GummyStripes(colors) {
  colors = colors.colors;
  let closure_0;
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
      obj = { backgroundColor: null };
      obj[0] = lib(outer1_1[4]).int2hex(color);
      items[2] = obj;
      obj[0] = items;
      return outer1_3(outer1_2, obj, arg1);
    })
  });
};