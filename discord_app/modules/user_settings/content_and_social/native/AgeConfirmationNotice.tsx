// === Module 14175: AgeConfirmationNotice ===

// Module 14175 (AgeConfirmationNotice)
import ThemesDefault from "Themes" /* 712 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import SafetyToastType from "SafetyToastType" /* 5430 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
({ SafetySettingsNoticeAction: c5, SafetySettingsNoticeType: closure_6 } = SafetyToastType);
let result = require("obj132").fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  let obj = sensitiveContentFilterHelpArticle(5025);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = React.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(14105).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = React.useCallback(() => {
    const obj = callback(dependencyMap[6]);
    obj.openURL(callback(dependencyMap[7]).getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = callback(dependencyMap[7]);
    const result = sensitiveContentFilterHelpArticle(dependencyMap[5]).trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.LEARN_MORE);
  }, items);
  obj = { marginBottom: null };
  const callback = React.useCallback(() => {
    callback(5428);
    const obj = { entryPoint: sensitiveContentFilterHelpArticle(5254).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
    const result1 = sensitiveContentFilterHelpArticle(14105).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj[0] = ThemesDefault.space.PX_8;
  obj[0] = obj;
  obj1 = { messageType: sensitiveContentFilterHelpArticle(1297).HelpMessageTypes.INFO, borderRadius: ThemesDefault.radii.lg, button: null, children: null };
  let obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = sensitiveContentFilterHelpArticle(1236).intl;
  obj2[2] = intl.string(sensitiveContentFilterHelpArticle(1236).t.FDSSia);
  obj2[3] = callback;
  obj1[2] = jsx(sensitiveContentFilterHelpArticle(4745).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
  const intl2 = sensitiveContentFilterHelpArticle(1236).intl;
  obj1[3] = intl2.format(sensitiveContentFilterHelpArticle(1236).t.mFgsfg, {
    hook(children) {
      return jsx(sensitiveContentFilterHelpArticle(dependencyMap[14]).Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress: closure_1, children });
    }
  });
  obj[1] = jsx(sensitiveContentFilterHelpArticle(1297).HelpMessage, { messageType: sensitiveContentFilterHelpArticle(1297).HelpMessageTypes.INFO, borderRadius: ThemesDefault.radii.lg, button: null, children: null });
  return <View marginBottom={null} />;
};