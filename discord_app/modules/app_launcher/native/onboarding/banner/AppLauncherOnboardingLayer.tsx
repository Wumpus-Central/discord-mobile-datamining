// === Module 11346: ? ===

// Module 11346
import { View } from "get ActivityIndicator";
import { useBestActiveChatInputContainerHeight as closure_3 } from "updateChatInputContainerHeight";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let obj = { container: null };
obj = { opacity: 1, width: "100%", position: "absolute", left: 0, top: 0, backgroundColor: require("Themes").colors.BACKGROUND_SCRIM };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo((visibleContent) => {
  let bottomOffset;
  let context;
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
    obj[1] = jsx(importDefault(11347), { context: null, visibleContent: null });
    tmp3 = <View context={null} visibleContent={null} />;
  }
  return tmp3;
});
const result = require("updateChatInputContainerHeight").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/AppLauncherOnboardingLayer.tsx");

export default memoResult;