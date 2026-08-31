// discord_app/modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import SafetyToastType from "../../../safety_common/Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ SafetySettingsNoticeAction: c5, SafetySettingsNoticeType: closure_6 } = SafetyToastType);
let result = require("set").fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  let obj = sensitiveContentFilterHelpArticle(6114);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = React.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(14306).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = React.useCallback(() => {
    const obj = callback(closure_1_2[6]);
    obj.openURL(callback(closure_1_2[7]).getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = callback(closure_1_2[7]);
    const result = sensitiveContentFilterHelpArticle(closure_1_2[5]).trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.LEARN_MORE);
  }, items);
  obj = { style: null, children: null };
  obj = { marginBottom: null };
  const callback = React.useCallback(() => {
    let obj = callback(8650);
    obj = { entryPoint: sensitiveContentFilterHelpArticle(8652).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
    const result1 = sensitiveContentFilterHelpArticle(14306).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj[0] = ThemesDefault.space.PX_8;
  obj[0] = obj;
  obj1 = { messageType: sensitiveContentFilterHelpArticle(1297).HelpMessageTypes.INFO, borderRadius: ThemesDefault.radii.lg, button: null, children: null };
  let obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = sensitiveContentFilterHelpArticle(1236).intl;
  obj2[2] = intl.string(sensitiveContentFilterHelpArticle(1236).t.FDSSia);
  obj2[3] = callback;
  obj1[2] = jsx(sensitiveContentFilterHelpArticle(4896).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
  const intl2 = sensitiveContentFilterHelpArticle(1236).intl;
  obj1[3] = intl2.format(sensitiveContentFilterHelpArticle(1236).t.mFgsfg, {
    hook(children) {
      return closure_1_7(sensitiveContentFilterHelpArticle(closure_1_2[14]).Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress: closure_1, children });
    }
  });
  obj[1] = jsx(sensitiveContentFilterHelpArticle(1297).HelpMessage, { messageType: sensitiveContentFilterHelpArticle(1297).HelpMessageTypes.INFO, borderRadius: ThemesDefault.radii.lg, button: null, children: null });
  return <View marginBottom={null} />;
};