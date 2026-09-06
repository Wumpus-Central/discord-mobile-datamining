// discord_app/modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SafetySettingsUtils from "../../../safety_common/SafetySettingsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const Constants = fn(8399);
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default function AgeConfirmationNotice() {
  let obj = sensitiveContentFilterHelpArticle(7301);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = noop.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(14688).trackSafetySettingsNoticeAnalytics(
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
  obj = { style: null, children: null };
  obj = { marginBottom: null };
  const callback = noop.useCallback(() => {
    onPress(8411);
    const obj = {
      entryPoint: sensitiveContentFilterHelpArticle(8413).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE,
    };
    const result = obj.showAgeVerificationGetStartedModal(obj);
    const result1 = sensitiveContentFilterHelpArticle(14688).trackSafetySettingsNoticeAnalytics(
      constants2.AGE_CONFIRMATION_NOTICE,
      constants.CONFIRM_AGE,
    );
  }, []);
  obj.marginBottom = nativeDefault.space.PX_8;
  obj.style = obj;
  const obj1 = {
    messageType: sensitiveContentFilterHelpArticle(1178).HelpMessageTypes.INFO,
    borderRadius: nativeDefault.radii.lg,
    button: null,
    children: null,
  };
  let obj2 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = sensitiveContentFilterHelpArticle(1114).intl;
  obj2.text = intl.string(sensitiveContentFilterHelpArticle(1114).t.FDSSia);
  obj2.onPress = callback;
  obj1.button = jsx(sensitiveContentFilterHelpArticle(4975).Button, {
    variant: "secondary",
    size: "sm",
    text: null,
    onPress: null,
  });
  const intl2 = sensitiveContentFilterHelpArticle(1114).intl;
  obj1.children = intl2.format(sensitiveContentFilterHelpArticle(1114).t.mFgsfg, {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    },
  });
  obj.children = jsx(sensitiveContentFilterHelpArticle(1178).HelpMessage, {
    messageType: sensitiveContentFilterHelpArticle(1178).HelpMessageTypes.INFO,
    borderRadius: nativeDefault.radii.lg,
    button: null,
    children: null,
  });
  return <View marginBottom={null} />;
}
