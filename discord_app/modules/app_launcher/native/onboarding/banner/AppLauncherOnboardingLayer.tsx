// === Module 11723: AppLauncherOnboardingLayer ===

// Module 11723 (AppLauncherOnboardingLayer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AppLauncherOnboardingBannerDefault from "AppLauncherOnboardingBanner" /* 11724 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
let closure_4 = fn(9383).useBestActiveChatInputContainerHeight;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj = { container: null };
const rect = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj.container = rect;
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function AppLauncherOnboardingLayer(arg0) {
  const cResult = c.c(6);
  ({ context, visibleContent, bottomOffset } = arg0);
  const tmp3 = closure_6();
  const tmp4 = closure_4();
  if (cResult[0] === bottomOffset) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === context) {
        if (cResult[3] === tmp3) {
          if (cResult[4] === visibleContent) {
            let tmp5 = cResult[5];
          }
          return tmp5;
        }
      }
    }
  }
  let tmp6 = null;
  if (null != visibleContent) {
    const obj2 = { style: null, children: null };
    const items = [tmp3.container, ];
    const obj3 = { bottom: tmp4 + bottomOffset };
    items[1] = obj3;
    obj2.style = items;
    const obj4 = { context, visibleContent };
    obj2.children = jsx(AppLauncherOnboardingBannerDefault, { context, visibleContent });
    tmp6 = <View style={null}>{null}</View>;
  }
  cResult[0] = bottomOffset;
  cResult[1] = tmp4;
  cResult[2] = context;
  cResult[3] = tmp3;
  cResult[4] = visibleContent;
  cResult[5] = tmp6;
  tmp5 = tmp6;
}) : (function AppLauncherOnboardingLayer(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  if (null != visibleContent) {
    const obj = { style: null, children: null };
    const items = [tmp.container, ];
    const obj2 = { bottom: tmp2 + bottomOffset };
    items[1] = obj2;
    obj.style = items;
    const obj3 = { context, visibleContent };
    obj.children = jsx(AppLauncherOnboardingBannerDefault, { context, visibleContent });
    tmp3 = <View style={null}>{null}</View>;
  }
  return tmp3;
}));