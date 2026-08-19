// === Module 10621: SafetyToolsSafetyTipsActionSheet ===

// Module 10621 (SafetyToolsSafetyTipsActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import SafetyTipsContainerDefault from "SafetyTipsContainer" /* 10588 */;
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper" /* 10612 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { getInappropriateConversationsSafetyTips as closure_4 } from "LOCATION_CONTEXT_MOBILE" /* 10569 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
noopAll;
createCacheKey = { safetyTipsContainer: null };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const tmp = callback2();
  const intl = getSystemLocale.intl;
  obj[4] = intl.string(getSystemLocale.t.EtNxi6);
  obj[5] = channelId;
  obj[6] = onClose;
  obj = { style: tmp.safetyTipsContainer, children: null };
  obj = { description: null, safetyTips: null };
  const tmp2 = SafetyToolsActionSheetWrapperDefault;
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t.DJMZX6);
  const tmp3 = SafetyTipsContainerDefault;
  obj[1] = callback().map((children) => callback2(callback(table[9]).Text, { variant: "text-sm/medium", children }, arg1));
  obj[1] = <tmp3 description={null} safetyTips={null} />;
  obj[7] = <View description={null} safetyTips={null} />;
  return <tmp2 description={null} safetyTips={null} />;
};