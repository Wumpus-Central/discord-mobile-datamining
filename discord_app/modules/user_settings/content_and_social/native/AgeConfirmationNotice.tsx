// discord_app/modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import SafetyToastType from "SafetyToastType";
import { jsx } from "jsxProd";

let c5;
let closure_6;
const require = arg1;
({ SafetySettingsNoticeAction: c5, SafetySettingsNoticeType: closure_6 } = SafetyToastType);
let result = require("SafetyToastType").fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  let obj = sensitiveContentFilterHelpArticle(5886);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = React.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(13798).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  const importDefault = React.useCallback(() => {
    const obj = callback(outer1_2[6]);
    obj.openURL(callback(outer1_2[7]).getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = callback(outer1_2[7]);
    const result = sensitiveContentFilterHelpArticle(outer1_2[5]).trackSafetySettingsNoticeAnalytics(outer1_6.AGE_CONFIRMATION_NOTICE, outer1_5.LEARN_MORE);
  }, items);
  obj = { style: null, children: null };
  obj = { marginBottom: null };
  const callback = React.useCallback(() => {
    let obj = callback(6750);
    obj = { entryPoint: sensitiveContentFilterHelpArticle(6752).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj);
    const result1 = sensitiveContentFilterHelpArticle(13798).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj[0] = importDefault(712).space.PX_8;
  obj[0] = obj;
  const obj1 = { messageType: null, borderRadius: null, button: null, children: null };
  obj1[0] = sensitiveContentFilterHelpArticle(1297).HelpMessageTypes.INFO;
  obj1[1] = importDefault(712).radii.lg;
  let obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = sensitiveContentFilterHelpArticle(1236).intl;
  obj2[2] = intl.string(sensitiveContentFilterHelpArticle(1236).t.FDSSia);
  obj2[3] = callback;
  obj1[2] = jsx(sensitiveContentFilterHelpArticle(4604).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
  const intl2 = sensitiveContentFilterHelpArticle(1236).intl;
  obj1[3] = intl2.format(sensitiveContentFilterHelpArticle(1236).t.mFgsfg, {
    hook(children) {
      return outer1_7(sensitiveContentFilterHelpArticle(outer1_2[14]).Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress: closure_1, children });
    }
  });
  obj[1] = jsx(sensitiveContentFilterHelpArticle(1297).HelpMessage, { messageType: null, borderRadius: null, button: null, children: null });
  return <View marginBottom={null} />;
};