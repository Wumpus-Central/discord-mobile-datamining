// discord_app/modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx
import WishlistButtonCoachmarkDefault from "WishlistButtonCoachmark.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = noop.useRef(null);
  const obj = { collapsable: false, children: null };
  const items = [
    React4(View, { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false }),
    children.children,
    React4(WishlistButtonCoachmarkDefault, { anchorRef: ref }),
  ];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
