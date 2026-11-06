// === Module 15251: useMaybeFetchPromotionsForApplication ===

// Module 15251 (useMaybeFetchPromotionsForApplication)
import StorefrontActionCreators from "StorefrontActionCreators" /* 9582 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/storefront/hooks/useMaybeFetchPromotionsForApplication.tsx");

export default function useMaybeFetchPromotionsForApplication(arg0) {
  closure_0 = arg0;
  items = [arg0];
  const effect = noop.useEffect(() => {
    if (null != closure_0) {
      items = [tmp];
      const result = StorefrontActionCreators.maybeFetchStorefrontPromotions(items);
    }
  }, items);
};