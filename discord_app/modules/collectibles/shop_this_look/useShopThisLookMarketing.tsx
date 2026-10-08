// discord_app/modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx
import c from "../../../../_runtime/00576_c.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useMaybeFetchEquippedCollectibleProducts from "../hooks/useMaybeFetchEquippedCollectibleProducts.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShopThisLookMarketing(arg0, arg1, arg2) {
      const cResult = c.c(6);
      let num = 0;
      const tmp4 = useMaybeFetchEquippedCollectibleProducts.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
      if (cResult[0] === tmp4) {
        if (cResult[1] === arg2) {
          const tmp7 = _slicedToArray(
            useSelectedDismissibleContent.useSelectedDismissibleContent(cResult[2], undefined, true),
            2,
          );
          if (cResult[3] === tmp7[1]) {
            if (cResult[4] === tmp10) {
              let tmp11 = cResult[5];
            }
            return tmp11;
          }
          const obj3 = { isVisible: null != tmp7[0], markAsDismissed: tmp7[1] };
          cResult[3] = tmp7[1];
          cResult[4] = null != tmp7[0];
          cResult[5] = obj3;
          tmp11 = obj3;
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
    }
  : function useShopThisLookMarketing(arg0, arg1, arg2) {
      useSelectedDismissibleContent;
      if (arg2) {
        if (tmp3) {
          const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
        }
        const tmp8 = _slicedToArray(tmp5([], undefined, true), 2);
        const obj2 = { isVisible: null != tmp8[0], markAsDismissed: tmp8[1] };
        return obj2;
      }
      tmp3 = useMaybeFetchEquippedCollectibleProducts.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
    };
