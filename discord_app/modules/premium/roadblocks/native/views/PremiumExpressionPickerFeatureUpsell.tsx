// discord_app/modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import useKeyboardIsOpenDefault from "../../../../keyboard/native/useKeyboardIsOpen.tsx";
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
const __initData = {
  code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}",
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx",
);

export default function PremiumExpressionPickerFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  const tmp3 = useKeyboardIsOpenDefault();
  ReanimatedRexport;
  const fn = function b() {
    value = shouldShow.get();
    if (!value) {
      return value;
    } else {
      value = bottomSheetIndex.get();
      if (inPortalKeyboard) {
        let tmp5 = 1 === value;
      } else {
        tmp5 = 0 === value;
      }
    }
  };
  fn.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  fn.__workletHash = 15061973364879;
  fn.__initData = __initData;
  let tmp7 = null;
  if (!tmp3) {
    let obj = { style: tmp4.container, children: null };
    obj = { shouldShow: tmp6, featureName: bottomSheetIndex.featureName };
    obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp6, featureName: bottomSheetIndex.featureName });
    tmp7 = <View shouldShow={tmp6} featureName={bottomSheetIndex.featureName} />;
  }
  return tmp7;
}
