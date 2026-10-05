// discord_app/modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx
import react from "../../../../_runtime/00576_react.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useMaybeFetchEquippedCollectibleProducts from "../hooks/useMaybeFetchEquippedCollectibleProducts.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let tmp5;
      const obj = react;
      const cResult = obj.c(6);
      const obj2 = useMaybeFetchEquippedCollectibleProducts;
      const tmp4 = obj2.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
      if (cResult[0] === tmp4) {
        if (cResult[1] === arg2) {
          tmp5 = cResult[2];
        }
        const tmpResult = useSelectedDismissibleContent;
        const tmp7 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp5, undefined, true), 2);
        if (cResult[3] === tmp7[1]) {
          let tmp11;
          if ((cResult[4] === null) != tmp7[0]) {
            tmp11 = cResult[5];
          }
          return tmp11;
        }
        const obj3 = { isVisible: null != tmp7[0], markAsDismissed: tmp7[1] };
        cResult[3] = tmp7[1];
        cResult[4] = null != tmp7[0];
        cResult[5] = obj3;
        tmp11 = obj3;
      }
      if (arg2) {
        let items1;
        if (tmp4) {
          const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
          items1 = items;
        }
        cResult[0] = tmp4;
        cResult[1] = arg2;
        cResult[2] = items1;
        tmp5 = items1;
      }
      items1 = [];
    }
  : (arg0, arg1, arg2) => {
      const obj = useMaybeFetchEquippedCollectibleProducts;
      const tmp3 = obj.useEquippedCollectibleSkuIds(arg0, arg1).length > 0;
      useSelectedDismissibleContent;
      const tmp6 = arg2;
      if (tmp6) {
        if (tmp3) {
          const items = [dismissible_content.DismissibleContent.SHOP_THIS_LOOK_WEB_MARKETING];
        }
        const tmp9 = _slicedToArray(tmp5([], undefined, true), 2);
        return { isVisible: null != tmp9[0], markAsDismissed: tmp9[1] };
      }
    };
const result = size.fileFinishedImporting("modules/collectibles/shop_this_look/useShopThisLookMarketing.tsx");

export const useShopThisLookMarketing = tmp2;
