// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AppLauncherOnboardingBannerDefault from "AppLauncherOnboardingBanner.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
let closure_3 = fn(9485).useBestActiveChatInputContainerHeight;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: null };
const rect = {
  opacity: 1,
  width: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SCRIM,
};
obj.container = rect;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx",
);

export default noop.memo((visibleContent) => {
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  if (null != visibleContent) {
    let obj = { style: null, children: null };
    const items = [tmp.container];
    obj = { bottom: tmp2 + bottomOffset };
    items[1] = obj;
    obj.style = items;
    obj = { context, visibleContent };
    obj.children = jsx(AppLauncherOnboardingBannerDefault, { context, visibleContent });
    tmp3 = <View context={context} visibleContent={visibleContent} />;
  }
  return tmp3;
});
