// === Module 16138: FeaturedFirstCardCoachmarkAnchor ===

// Module 16138 (FeaturedFirstCardCoachmarkAnchor)
import c from "c" /* 576 */;
import WishlistButtonCoachmarkDefault from "WishlistButtonCoachmark" /* 16139 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedFirstCardCoachmarkAnchor.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function FeaturedFirstCardCoachmarkAnchor(children) {
  const cResult = c.c(4);
  children = children.children;
  const ref = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false };
    const tmp7 = hasOwnProperty(View, obj2);
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { anchorRef: ref };
    const tmp11 = hasOwnProperty(WishlistButtonCoachmarkDefault, obj3);
    cResult[1] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== children) {
    const obj4 = { collapsable: false, children: null };
    const items = [first, children, tmp8];
    obj4.children = items;
    const tmp15 = timestampProducer(View, obj4);
    cResult[2] = children;
    cResult[3] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (function FeaturedFirstCardCoachmarkAnchor(children) {
  const ref = noop.useRef(null);
  const obj = { collapsable: false, children: null };
  const items = [hasOwnProperty(View, { ref, style: { position: "absolute", top: 0, right: 6, width: 32, height: 32 }, collapsable: false }), children.children, hasOwnProperty(WishlistButtonCoachmarkDefault, { anchorRef: ref })];
  obj.children = items;
  return timestampProducer(View, obj);
});