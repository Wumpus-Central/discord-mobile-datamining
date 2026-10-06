// === Module 11675: AppLauncherOnboardingLayer ===

// Module 11675 (AppLauncherOnboardingLayer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 9100 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let rect;
const View = react_native.View;
let closure_4 = useChatBottomManagerUIStore.useBestActiveChatInputContainerHeight;
const jsx = Fragment.jsx;
let obj = { container: rect };
rect = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
let closure_6 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottomOffset;
  let context;
  let visibleContent;
  const obj = react2;
  const cResult = obj.c(6);
  ({ context, visibleContent, bottomOffset } = arg0);
  const tmp3 = closure_6();
  const tmp4 = closure_4();
  if (cResult[0] === bottomOffset) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === context) {
        if (cResult[3] === tmp3) {
          let tmp5;
          if (cResult[4] === visibleContent) {
            tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  let tmp6 = null;
  if (null != visibleContent) {
    const items = [tmp3.container, ];
    const obj3 = { bottom: tmp4 + bottomOffset };
    items[1] = obj3;
    tmp6 = <View style={items}>{null}</View>;
  }
  cResult[0] = bottomOffset;
  cResult[1] = tmp4;
  cResult[2] = context;
  cResult[3] = tmp3;
  cResult[4] = visibleContent;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : ((visibleContent) => {
  let bottomOffset;
  let context;
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  const tmp = closure_6();
  if (null != visibleContent) {
    const items = [tmp.container, ];
    const obj2 = { bottom: tmp2 + bottomOffset };
    items[1] = obj2;
    tmp3 = <View style={items}>{null}</View>;
  }
  return tmp3;
}));
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default memoResult;