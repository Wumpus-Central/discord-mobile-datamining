// discord_app/modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AppLauncherOnboardingBannerDefault from "AppLauncherOnboardingBanner.tsx";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { useBestActiveChatInputContainerHeight as closure_3 } from "../../../../chat_input/native/useChatBottomManagerUIStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

let obj = { container: null };
obj = {
  opacity: 1,
  width: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM,
};
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((visibleContent) => {
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  if (null != visibleContent) {
    let obj = { style: null, children: null };
    const items = [tmp.container];
    obj = { bottom: null };
    obj[0] = tmp2 + bottomOffset;
    items[1] = obj;
    obj[0] = items;
    obj = { context: null, visibleContent: null };
    obj[0] = context;
    obj[1] = visibleContent;
    obj[1] = jsx(AppLauncherOnboardingBannerDefault, { context: null, visibleContent: null });
    tmp3 = <View context={null} visibleContent={null} />;
  }
  return tmp3;
});
const result = require("set").fileFinishedImporting(
  "modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx",
);

export default memoResult;
