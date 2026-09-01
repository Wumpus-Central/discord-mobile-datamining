// discord_app/modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx
import WishlistButtonCoachmarkDefault from "WishlistButtonCoachmark.tsx";
import closure_2 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

({ jsx: c4, jsxs: c5 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = React.useRef(null);
  const obj = { collapsable: false, children: null };
  const items = [
    callback(View, {
      ref,
      style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 },
      collapsable: false,
    }),
    children.children,
    callback(WishlistButtonCoachmarkDefault, { anchorRef: ref }),
  ];
  obj[1] = items;
  return callback2(View, obj);
}
