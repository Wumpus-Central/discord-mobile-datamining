// === Module 11220: ? ===

// Module 11220
import ThemesDefault from "Themes" /* 712 */;
import AppLauncherOnboardingBannerDefault from "AppLauncherOnboardingBanner" /* 11221 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { useBestActiveChatInputContainerHeight as closure_3 } from "updateChatInputContainerHeight" /* 8682 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

let obj = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SCRIM };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((visibleContent) => {
  visibleContent = visibleContent.visibleContent;
  ({ context, bottomOffset } = visibleContent);
  let tmp3 = null;
  if (null != visibleContent) {
    const items = [tmp.container, ];
    let obj = { bottom: null };
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
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default memoResult;