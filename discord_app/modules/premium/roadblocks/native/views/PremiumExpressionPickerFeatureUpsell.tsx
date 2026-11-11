// discord_app/modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import useKeyboardIsOpenDefault from "../../../../keyboard/native/useKeyboardIsOpen.tsx";
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
let closure_6 = {
  code: "(function PremiumExpressionPickerFeatureUpsellTsx1(){let[shouldShow,inPortalKeyboard,bottomSheetIndex]=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;})",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx",
);

export default function PremiumExpressionPickerFeatureUpsell(arg0) {
  ({ bottomSheetIndex, featureName, analyticsLocation, inPortalKeyboard, shouldShow } = arg0);
  const tmp3 = useKeyboardIsOpenDefault();
  _mod1652;
  items = [closure_6, shouldShow, inPortalKeyboard, bottomSheetIndex];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp6, tmp7, tmp8, tmp9] = items;
  class PremiumExpressionPickerFeatureUpsellTsx1 {
    constructor() {
      tmp = closure_0.get();
      if (!tmp) {
        return tmp;
      } else {
        tmp2 = closure_1;
        tmp3 = closure_2;
        value = closure_2.get();
        if (closure_1) {
          num2 = 1;
          tmp5 = 1 === value;
        } else {
          num = 0;
          tmp5 = 0 === value;
        }
        tmp6 = tmp5;
      }
      return;
    }
  }
  const items1 = [tmp7, tmp8, tmp9];
  PremiumExpressionPickerFeatureUpsellTsx1.__closure = items1;
  PremiumExpressionPickerFeatureUpsellTsx1.__workletHash = 15896580392790;
  PremiumExpressionPickerFeatureUpsellTsx1.__initData = tmp6;
  let tmp11 = null;
  if (!tmp3) {
    const obj = { style: tmp4.container, children: null };
    const obj2 = { shouldShow: tmp10, featureName, analyticsLocation };
    obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp10, featureName, analyticsLocation });
    tmp11 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp11;
}
