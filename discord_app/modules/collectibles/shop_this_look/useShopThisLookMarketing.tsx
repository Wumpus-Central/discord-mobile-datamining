// === Module 13045: useShopThisLookMarketing ===

// Module 13045 (useShopThisLookMarketing)
import c from "c" /* 576 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7093 */;
import useMaybeFetchEquippedCollectibleProducts from "useMaybeFetchEquippedCollectibleProducts" /* 8325 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = ReactCompilerGating.isReactCompilerEnabled() ? (function useShopThisLookMarketing(arg0, arg1, arg2) {
  const cResult = c.c(7);
  let num = 0;
  const tmp4 = useMaybeFetchEquippedCollectibleProducts.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
  if (cResult[0] === tmp4) {
    if (cResult[1] === arg2) {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { bypassAutoDismiss: true };
        cResult[3] = obj3;
        let tmp7 = obj3;
      } else {
        tmp7 = cResult[3];
      }
      const tmp9 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[2], tmp7), 2);
      if (cResult[4] === tmp9[1]) {
        if (cResult[5] === tmp12) {
          let tmp13 = cResult[6];
        }
        return tmp13;
      }
      const obj4 = { isVisible: null != tmp9[0], markAsDismissed: tmp9[1] };
      cResult[4] = tmp9[1];
      cResult[5] = null != tmp9[0];
      cResult[6] = obj4;
      tmp13 = obj4;
      const tmpResult = useSelectedDismissibleContent;
    }
  }
  if (!arg2) {
    let items = [];
    cResult[num] = tmp4;
    cResult[1] = arg2;
    num = 2;
    cResult[2] = items;
  }
  const items1 = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
  items = items1;
}) : (function useShopThisLookMarketing(arg0, arg1, arg2) {
  useSelectedDismissibleContent;
  if (arg2) {
    if (tmp3) {
      const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
    }
    const tmp8 = _slicedToArray(tmp5([], { bypassAutoDismiss: true }), 2);
    const obj2 = { isVisible: null != tmp8[0], markAsDismissed: tmp8[1] };
    return obj2;
  }
  tmp3 = useMaybeFetchEquippedCollectibleProducts.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
});