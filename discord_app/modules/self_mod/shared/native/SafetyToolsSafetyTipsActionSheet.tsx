// discord_app/modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { getInappropriateConversationsSafetyTips as closure_4 } from "LOCATION_CONTEXT_MOBILE";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { safetyTipsContainer: null };
createCacheKey = { marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("LOCATION_CONTEXT_MOBILE").fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx");

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  let channelId;
  let onClose;
  let recipientId;
  let warningId;
  let warningType;
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  let obj = { hasHeaderBack: true, recipientId, warningId, warningType, headerTitle: null, channelId: null, onClose: null, children: null };
  const tmp = createCacheKey();
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[4] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.EtNxi6);
  obj[5] = channelId;
  obj[6] = onClose;
  obj = { style: tmp.safetyTipsContainer, children: null };
  obj = { description: null, safetyTips: null };
  const tmp2 = require("SafetyToolsActionSheetWrapper.tsx");
  const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.DJMZX6);
  const tmp3 = require("SafetyTipsSection.tsx");
  obj[1] = callback().map((children) => callback2(callback(table[9]).Text, { variant: "text-sm/medium", children }, arg1));
  obj[1] = <tmp3 description={null} safetyTips={null} />;
  obj[7] = <View description={null} safetyTips={null} />;
  return <tmp2 description={null} safetyTips={null} />;
};