// discord_app/modules/storefront/hooks/useMaybeFetchPromotionsForApplication.tsx
import StorefrontActionCreators from "../StorefrontActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
