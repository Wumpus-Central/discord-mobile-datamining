// === Module 15764: FeaturedFirstCardCoachmarkAnchor ===

// Module 15764 (FeaturedFirstCardCoachmarkAnchor)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import WishlistButtonCoachmarkDefault from "WishlistButtonCoachmark" /* 15765 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  let first;
  let items;
  let tmp12;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(4);
  children = children.children;
  const ref = react.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false };
    const tmp7 = hasOwnProperty(View, obj2);
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { anchorRef: ref };
    const tmp11 = hasOwnProperty(WishlistButtonCoachmarkDefault, obj3);
    cResult[1] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== children) {
    const obj4 = { collapsable: false, children: items };
    items = [first, children, tmp8];
    const tmp15 = metroRequire(View, obj4);
    cResult[2] = children;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : ((children) => {
  let items;
  children = children.children;
  const ref = react.useRef(null);
  const obj = { collapsable: false, children: items };
  items = [hasOwnProperty(View, { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false }), children, hasOwnProperty(WishlistButtonCoachmarkDefault, { anchorRef: ref })];
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default tmp3;