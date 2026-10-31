// discord_app/modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import SafetySettingsUtils from "../../../safety_common/SafetySettingsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(7490);
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(7472).useSensitiveContentFilterHelpArticle();
  const effect = noop.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(16574).trackSafetySettingsNoticeAnalytics(
      constants2.AGE_CONFIRMATION_NOTICE,
      constants.VIEWED,
    );
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = noop.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle));
    const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(
      constants2.AGE_CONFIRMATION_NOTICE,
      constants.LEARN_MORE,
    );
  }, items);
  let obj2 = { style: null, children: null };
  const obj3 = { marginBottom: null };
  const callback = noop.useCallback(() => {
    const obj = onPress(7955);
    const result = obj.showAgeVerificationGetStartedModal({
      entryPoint: sensitiveContentFilterHelpArticle(6729).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
    });
    const obj2 = {
      entryPoint: sensitiveContentFilterHelpArticle(6729).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
    };
    const result1 = sensitiveContentFilterHelpArticle(16574).trackSafetySettingsNoticeAnalytics(
      constants2.AGE_CONFIRMATION_NOTICE,
      constants.CONFIRM_AGE,
    );
  }, []);
  obj3.marginBottom = nativeDefault.space.PX_8;
  obj2.style = obj3;
  const obj4 = { type: "info", message: null, role: "status", action: null };
  const intl = sensitiveContentFilterHelpArticle(1113).intl;
  obj4.message = intl.format(sensitiveContentFilterHelpArticle(1113).t.mFgsfg, {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    },
  });
  const obj6 = { text: null, onPress: null };
  const intl2 = sensitiveContentFilterHelpArticle(1113).intl;
  obj6.text = intl2.string(sensitiveContentFilterHelpArticle(1113).t.FDSSia);
  obj6.onPress = callback;
  obj4.action = obj6;
  obj2.children = jsx(sensitiveContentFilterHelpArticle(8025).InlineNotice, {
    type: "info",
    message: null,
    role: "status",
    action: null,
  });
  return <View style={null}>{null}</View>;
}
