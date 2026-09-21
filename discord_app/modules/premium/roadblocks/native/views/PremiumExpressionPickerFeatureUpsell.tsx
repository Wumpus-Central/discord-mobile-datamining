// === Module 10586: PremiumExpressionPickerFeatureUpsell ===

// Module 10586 (PremiumExpressionPickerFeatureUpsell)
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4492 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 6867 */;
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell" /* 10222 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
const __initData = { code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx");

export default function PremiumExpressionPickerFeatureUpsell(bottomSheetIndex) {
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  const tmp3 = useKeyboardIsOpenDefault();
  ReanimatedRexport;
  const fn = function b() {
    const value1 = shouldShow.get();
    if (!value1) {
      return value1;
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
    const obj = { style: tmp4.container, children: null };
    const obj2 = { shouldShow: tmp6, featureName: bottomSheetIndex.featureName };
    obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp6, featureName: bottomSheetIndex.featureName });
    tmp7 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp7;
};