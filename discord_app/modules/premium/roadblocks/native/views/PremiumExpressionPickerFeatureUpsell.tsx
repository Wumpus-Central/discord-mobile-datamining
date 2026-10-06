// === Module 9944: PremiumExpressionPickerFeatureUpsell ===

// Module 9944 (PremiumExpressionPickerFeatureUpsell)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 6117 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let num, num2, tmp, tmp2;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0) => {
  let rect;
  const obj = { container: rect };
  rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  return obj;
});
const __initData = { code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
const __initData2 = { code: "function PremiumExpressionPickerFeatureUpsellTsx2(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}" };
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((bottomSheetIndex) => {
  let analyticsLocation;
  let featureName;
  let inPortalKeyboard;
  const obj = react2;
  const cResult = obj.c(6);
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  ({ featureName, analyticsLocation, inPortalKeyboard } = bottomSheetIndex);
  const shouldShow = bottomSheetIndex.shouldShow;
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp4 = useKeyboardIsOpenDefault();
  let tmp5 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom);
  const fn = function u() {
    let value1 = shouldShow.get();
    if (value1) {
      let tmp5;
      const value = bottomSheetIndex.get();
      if (inPortalKeyboard) {
        tmp5 = 1 === value;
      } else {
        tmp5 = 0 === value;
      }
      value1 = tmp5;
    }
    return value1;
  };
  fn.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  fn.__workletHash = 15061973364879;
  fn.__initData = __initData;
  const obj2 = ReanimatedRexport;
  const derivedValue = obj2.useDerivedValue(fn);
  if (cResult[0] === analyticsLocation) {
    if (cResult[1] === featureName) {
      if (cResult[2] === tmp4) {
        if (cResult[3] === derivedValue) {
          let tmp7;
          if (cResult[4] === tmp5) {
            tmp7 = cResult[5];
          }
          return tmp7;
        }
      }
    }
  }
  let tmp8 = null;
  if (!tmp4) {
    tmp8 = <View style={tmp5.container}>{null}</View>;
  }
  cResult[0] = analyticsLocation;
  cResult[1] = featureName;
  cResult[2] = tmp4;
  cResult[3] = derivedValue;
  cResult[4] = tmp5;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((bottomSheetIndex) => {
  let analyticsLocation;
  let featureName;
  bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
  const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
  const shouldShow = bottomSheetIndex.shouldShow;
  ({ featureName, analyticsLocation } = bottomSheetIndex);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmp3 = useKeyboardIsOpenDefault();
  const tmp4 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + bottom);
  let tmp5 = ReanimatedRexport;
  class S {
    constructor() {
      tmp = shouldShow.get();
      if (tmp) {
        tmp2 = inPortalKeyboard;
        tmp3 = bottomSheetIndex;
        value = bottomSheetIndex.get();
        if (inPortalKeyboard) {
          num2 = 1;
          tmp5 = 1 === value;
        } else {
          num = 0;
          tmp5 = 0 === value;
        }
        tmp = tmp5;
      }
      return tmp;
    }
  }
  S.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
  S.__workletHash = 12214341650956;
  S.__initData = __initData2;
  let tmp7 = null;
  if (!tmp3) {
    tmp7 = <View style={tmp4.container}>{null}</View>;
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx");

export default tmp3;