// === Module 17352: AgeConfirmationNotice ===

// Module 17352 (AgeConfirmationNotice)
import nativeDefault from "native" /* 575 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2188 */;
import Text_Text from "Text/Text" /* 5929 */;
import LinkingDefault from "Linking" /* 6012 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 17212 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(6910);
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: closure_6 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(8643).useSensitiveContentFilterHelpArticle();
  const effect = noop.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(17212).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  items = [sensitiveContentFilterHelpArticle];
  importDefault = noop.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle));
    const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.LEARN_MORE);
  }, items);
  let obj2 = { style: null, children: null };
  const obj3 = { marginBottom: null };
  const callback = noop.useCallback(() => {
    const obj = onPress(8190);
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: sensitiveContentFilterHelpArticle(6833).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(6833).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result1 = sensitiveContentFilterHelpArticle(17212).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj3.marginBottom = nativeDefault.space.PX_8;
  obj2.style = obj3;
  const obj4 = { type: "info", message: null, role: "status", action: null };
  const intl = sensitiveContentFilterHelpArticle(1113).intl;
  obj4.message = intl.format(sensitiveContentFilterHelpArticle(1113).t.mFgsfg, {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "body-sm/medium", color: "text-link", onPress, children });
    }
  });
  const obj6 = { text: null, onPress: null };
  const intl2 = sensitiveContentFilterHelpArticle(1113).intl;
  obj6.text = intl2.string(sensitiveContentFilterHelpArticle(1113).t.FDSSia);
  obj6.onPress = callback;
  obj4.action = obj6;
  obj2.children = jsx(sensitiveContentFilterHelpArticle(8159).InlineNotice, { type: "info", message: null, role: "status", action: null });
  return <View style={null}>{null}</View>;
};