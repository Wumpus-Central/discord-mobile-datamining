// discord_app/modules/display_name_styles/native/effects/GummyStripes.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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