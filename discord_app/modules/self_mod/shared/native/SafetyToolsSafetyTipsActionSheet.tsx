// discord_app/modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import SafetyTipsContainerDefault from "SafetyTipsSection.tsx";
import SafetyToolsActionSheetWrapperDefault from "SafetyToolsActionSheetWrapper.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { getInappropriateConversationsSafetyTips as closure_4 } from "../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { safetyTipsContainer: null };
createCacheKey = { marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting(
  "modules/self_mod/shared/native/SafetyToolsSafetyTipsActionSheet.tsx",
);

export default function SafetyToolsSafetyTipsActionSheet(arg0) {
  ({ channelId, recipientId, warningId, warningType, onClose } = arg0);
  let obj = {
    hasHeaderBack: true,
    recipientId,
    warningId,
    warningType,
    headerTitle: null,
    channelId: null,
    onClose: null,
    children: null,
  };
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
  obj[1] = callback().map((children) =>
    callback2(callback(table[9]).Text, { variant: "text-sm/medium", children }, arg1),
  );
  obj[1] = <tmp3 description={null} safetyTips={null} />;
  obj[7] = <View description={null} safetyTips={null} />;
  return <tmp2 description={null} safetyTips={null} />;
}
