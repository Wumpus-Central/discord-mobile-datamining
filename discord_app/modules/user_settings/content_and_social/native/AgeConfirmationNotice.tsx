// discord_app/modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SafetySettingsUtils from "../../../safety_common/SafetySettingsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(8631);
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(7497).useSensitiveContentFilterHelpArticle();
  const effect = noop.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(14903).trackSafetySettingsNoticeAnalytics(
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
    const obj = onPress(8643);
    const result = obj.showAgeVerificationGetStartedModal({
      entryPoint: sensitiveContentFilterHelpArticle(8645).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
    });
    const obj2 = {
      entryPoint: sensitiveContentFilterHelpArticle(8645).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
    };
    const result1 = sensitiveContentFilterHelpArticle(14903).trackSafetySettingsNoticeAnalytics(
      constants2.AGE_CONFIRMATION_NOTICE,
      constants.CONFIRM_AGE,
    );
  }, []);
  obj3.marginBottom = nativeDefault.space.PX_8;
  obj2.style = obj3;
  const obj4 = {
    messageType: sensitiveContentFilterHelpArticle(1177).HelpMessageTypes.INFO,
    borderRadius: nativeDefault.radii.lg,
    button: null,
    children: null,
  };
  const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = sensitiveContentFilterHelpArticle(1115).intl;
  obj5.text = intl.string(sensitiveContentFilterHelpArticle(1115).t.FDSSia);
  obj5.onPress = callback;
  obj4.button = jsx(sensitiveContentFilterHelpArticle(5144).Button, {
    variant: "secondary",
    size: "sm",
    text: null,
    onPress: null,
  });
  const intl2 = sensitiveContentFilterHelpArticle(1115).intl;
  obj4.children = intl2.format(sensitiveContentFilterHelpArticle(1115).t.mFgsfg, {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    },
  });
  obj2.children = jsx(sensitiveContentFilterHelpArticle(1177).HelpMessage, {
    messageType: sensitiveContentFilterHelpArticle(1177).HelpMessageTypes.INFO,
    borderRadius: nativeDefault.radii.lg,
    button: null,
    children: null,
  });
  return <View style={null}>{null}</View>;
}
