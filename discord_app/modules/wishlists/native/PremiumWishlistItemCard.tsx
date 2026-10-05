// discord_app/modules/wishlists/native/PremiumWishlistItemCard.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import SKUPreview from "../../skus/native/SKUPreview.tsx";
import WishlistItemCardBaseDefault from "WishlistItemCardBase.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let closure_3 = ["sku", "source", "size"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _require;
      let sku;
      let source;
      let tmp3;
      let tmp5;
      let tmp6;
      const obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] !== arg0) {
        ({ sku, source, size } = arg0);
        _require = size;
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = tmp9;
        cResult[2] = size;
        cResult[3] = sku;
        cResult[4] = source;
        tmp6 = source;
        tmp5 = sku;
        tmp3 = tmp9;
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
      WishlistItemCardBaseDefault;
      const merged = Object.assign(tmp3);
      cResult[7] = tmp3;
      cResult[8] = P;
      cResult[9] = size;
      cResult[10] = tmp5.name;
      cResult[11] = tmp6;
      cResult[12] = <tmp11 accessibilityLabel={tmp5.name} renderPreview={P} source={tmp6} size={size} />;
    }
  : (size) => {
      let sku;
      let source;
      size = size.size;
      ({ sku, source } = size);
      const merged = Object.assign(size, Object.assign({ sku: 0, source: 0, size: 0 }));
      const items = [size];
      const callback = react.useCallback(() => jsx(SKUPreview.PremiumSKUPreview, { size }), items);
      WishlistItemCardBaseDefault;
      const merged1 = Object.assign(merged);
      return <tmp3 accessibilityLabel={sku.name} renderPreview={callback} source={source} size={size} />;
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/PremiumWishlistItemCard.tsx");

export default tmp2;
