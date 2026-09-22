// === Module 12304: AppLauncherOnboardingLayer ===

// Module 12304 (AppLauncherOnboardingLayer)
import nativeDefault from "native" /* 576 */;
import AppLauncherOnboardingBannerDefault from "AppLauncherOnboardingBanner" /* 12305 */;
import noop from "module_19" /* 19 */;

const View = fn(17).View;
let closure_3 = fn(9660).useBestActiveChatInputContainerHeight;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj = { container: null };
const rect = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM };
obj.container = rect;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default noop.memo((visibleContent) => {
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
});