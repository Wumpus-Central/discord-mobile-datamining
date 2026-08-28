// === Module 15351: FeaturedFirstCardCoachmarkAnchor ===

// Module 15351 (FeaturedFirstCardCoachmarkAnchor)
import WishlistButtonCoachmarkDefault from "WishlistButtonCoachmark" /* 15352 */;
import closure_2 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = React.useRef(null);
  const obj = { collapsable: false, children: null };
  const items = [callback(View, { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false }), children.children, callback(WishlistButtonCoachmarkDefault, { anchorRef: ref })];
  obj[1] = items;
  return callback2(View, obj);
};