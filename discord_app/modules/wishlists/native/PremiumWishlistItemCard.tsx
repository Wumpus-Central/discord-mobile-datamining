// === Module 12730: PremiumWishlistItemCard ===

// Module 12730 (PremiumWishlistItemCard)
import SKUPreview from "SKUPreview" /* 8975 */;
import WishlistItemCardBaseDefault from "WishlistItemCardBase" /* 8976 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["sku", "source", "size"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumWishlistItemCard(arg0) {
  const cResult = require("c").c(13);
  if (cResult[0] !== arg0) {
    ({ sku, source, size } = arg0);
    _require = size;
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = tmp9;
    cResult[2] = size;
    cResult[3] = sku;
    cResult[4] = source;
    let tmp6 = source;
    let tmp5 = sku;
    let tmp3 = tmp9;
  } else {
    tmp3 = cResult[1];
    _require = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
  }
  if (cResult[5] !== size) {
    class P {
      constructor() {
        obj = { size: closure_0 };
        return jsx(closure_0(closure_2[5]).PremiumSKUPreview, obj);
      }
    }
    cResult[5] = size;
    cResult[6] = P;
  } else {
    class P {
      constructor() {
        obj = { size: closure_0 };
        return jsx(closure_0(closure_2[5]).PremiumSKUPreview, obj);
      }
    }
  }
  if (cResult[7] === tmp3) {
    class P {
      constructor() {
        obj = { size: closure_0 };
        return jsx(closure_0(closure_2[5]).PremiumSKUPreview, obj);
      }
    }
  }
  const obj = require("c");
  const obj2 = { accessibilityLabel: tmp5.name, renderPreview: P, source: tmp6, size };
  const merged = Object.assign(tmp3);
  cResult[7] = tmp3;
  cResult[8] = P;
  cResult[9] = size;
  cResult[10] = tmp5.name;
  cResult[11] = tmp6;
  cResult[12] = jsx(WishlistItemCardBaseDefault, { accessibilityLabel: tmp5.name, renderPreview: P, source: tmp6, size });
  const tmp13 = jsx(WishlistItemCardBaseDefault, { accessibilityLabel: tmp5.name, renderPreview: P, source: tmp6, size });
}) : (function PremiumWishlistItemCard(size) {
  size = size.size;
  ({ sku, source } = size);
  const merged = Object.assign(size, Object.assign({ sku: 0, source: 0, size: 0 }));
  const items = [size];
  const callback = noop.useCallback(() => jsx(SKUPreview.PremiumSKUPreview, { size }), items);
  const merged1 = Object.assign(merged);
  return jsx(WishlistItemCardBaseDefault, { accessibilityLabel: sku.name, renderPreview: callback, source, size });
});