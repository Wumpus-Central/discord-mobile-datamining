// discord_app/modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import useKeyboardIsOpenDefault from "../../../../keyboard/native/useKeyboardIsOpen.tsx";
import PremiumFeatureUpsellDefault from "PremiumFeatureUpsell.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles((arg0) => {
  const obj = { container: null };
  const rect = { position: "absolute", bottom: arg0 + nativeDefault.space.PX_12, left: 0, right: 0 };
  obj.container = rect;
  return obj;
});
const __initData = {
  code: "function PremiumExpressionPickerFeatureUpsellTsx1(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}",
};
const __initData2 = {
  code: "function PremiumExpressionPickerFeatureUpsellTsx2(){const{shouldShow,inPortalKeyboard,bottomSheetIndex}=this.__closure;if(!shouldShow.get()){return false;}return inPortalKeyboard?bottomSheetIndex.get()===1:bottomSheetIndex.get()===0;}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/premium/roadblocks/native/views/PremiumExpressionPickerFeatureUpsell.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (bottomSheetIndex) => {
      const cResult = c.c(6);
      bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
      ({ featureName, analyticsLocation, inPortalKeyboard } = bottomSheetIndex);
      const shouldShow = bottomSheetIndex.shouldShow;
      const tmp4 = useKeyboardIsOpenDefault();
      let tmp5 = closure_5(ConstantsIOS.EXPRESSION_FOOTER_HEIGHT + useSafeAreaInsetsDefault().bottom);
      const fn = function u() {
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
      const derivedValue = ReanimatedRexport.useDerivedValue(fn);
      if (cResult[0] === analyticsLocation) {
        if (cResult[1] === featureName) {
          if (cResult[2] === tmp4) {
            if (cResult[3] === derivedValue) {
              if (cResult[4] === tmp5) {
                let tmp7 = cResult[5];
              }
              return tmp7;
            }
          }
        }
      }
      let tmp8 = null;
      if (!tmp4) {
        const obj3 = { style: tmp5.container, children: null };
        const obj4 = { shouldShow: derivedValue, featureName, analyticsLocation };
        obj3.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: derivedValue, featureName, analyticsLocation });
        tmp8 = <View style={tmp5.container}>{null}</View>;
      }
      cResult[0] = analyticsLocation;
      cResult[1] = featureName;
      cResult[2] = tmp4;
      cResult[3] = derivedValue;
      cResult[4] = tmp5;
      cResult[5] = tmp8;
      tmp7 = tmp8;
    }
  : (bottomSheetIndex) => {
      bottomSheetIndex = bottomSheetIndex.bottomSheetIndex;
      const inPortalKeyboard = bottomSheetIndex.inPortalKeyboard;
      const shouldShow = bottomSheetIndex.shouldShow;
      ({ featureName, analyticsLocation } = bottomSheetIndex);
      const tmp3 = useKeyboardIsOpenDefault();
      ReanimatedRexport;
      class S {
        constructor() {
          tmp = shouldShow.get();
          if (!tmp) {
            return tmp;
          } else {
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
            tmp6 = tmp5;
          }
          return;
        }
      }
      S.__closure = { shouldShow, inPortalKeyboard, bottomSheetIndex };
      S.__workletHash = 12214341650956;
      S.__initData = __initData2;
      let tmp7 = null;
      if (!tmp3) {
        const obj = { style: tmp4.container, children: null };
        const obj2 = { shouldShow: tmp6, featureName, analyticsLocation };
        obj.children = jsx(PremiumFeatureUpsellDefault, { shouldShow: tmp6, featureName, analyticsLocation });
        tmp7 = <View style={tmp4.container}>{null}</View>;
      }
      return tmp7;
    };
