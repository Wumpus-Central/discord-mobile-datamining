// === Module 11536: ? ===

// Module 11536
import ThemesDefault from "Themes" /* 712 */;
import AppLauncherOnboardingBannerDefault from "AppLauncherOnboardingBanner" /* 11537 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { useBestActiveChatInputContainerHeight as closure_3 } from "updateChatInputContainerHeight" /* 9455 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importAllResult from "noop" /* 19 */;

let obj = { container: null };
obj = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((visibleContent) => {
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  if (null != visibleContent) {
    let obj = { style: null, children: null };
    const items = [tmp.container, ];
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
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default memoResult;