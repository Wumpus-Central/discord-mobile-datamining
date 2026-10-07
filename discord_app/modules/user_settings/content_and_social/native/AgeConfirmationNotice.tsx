// === Module 14646: AgeConfirmationNotice ===

// Module 14646 (AgeConfirmationNotice)
import nativeDefault from "native" /* 587 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import LinkingDefault from "Linking" /* 4571 */;
import Text_Text from "Text/Text" /* 4892 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14514 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(8108);
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = sensitiveContentFilterHelpArticle(576).c(11);
  let obj = sensitiveContentFilterHelpArticle(576);
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(6814).useSensitiveContentFilterHelpArticle();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const result = sensitiveContentFilterHelpArticle(14514).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = noop.useEffect(tmp5, tmp6);
  if (cResult[2] !== sensitiveContentFilterHelpArticle) {
    const fn2 = function _() {
      const obj = LinkingDefault;
      obj.openURL(HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle));
      const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.LEARN_MORE);
    };
    cResult[2] = sensitiveContentFilterHelpArticle;
    cResult[3] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  importDefault = tmp8;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      const obj = onPress(8117);
      const result = obj.showAgeVerificationGetStartedModal({ entryPoint: sensitiveContentFilterHelpArticle(8119).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
      const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(8119).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result1 = sensitiveContentFilterHelpArticle(14514).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
    };
    cResult[4] = fn3;
    let tmp9 = fn3;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { marginBottom: nativeDefault.space.PX_8 };
    cResult[5] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "secondary", size: "sm", text: null, onPress: null };
    const intl = tmp(1126).intl;
    obj4.text = intl.string(tmp(1126).t.FDSSia);
    obj4.onPress = tmp9;
    const tmp14 = jsx(tmp(5601).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
    cResult[6] = tmp14;
    let tmp12 = tmp14;
  } else {
    tmp12 = cResult[6];
  }
  if (cResult[7] !== tmp8) {
    const intl2 = tmp(1126).intl;
    const obj5 = {
      hook(children) {
          return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
        }
    };
    const formatResult = intl2.format(tmp(1126).t.mFgsfg, obj5);
    cResult[7] = tmp8;
    cResult[8] = formatResult;
    let tmp15 = formatResult;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== tmp15) {
    const obj6 = { style: tmp10, children: null };
    const obj7 = { messageType: tmp(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: tmp12, children: tmp15 };
    obj6.children = jsx(tmp(1188).HelpMessage, { messageType: tmp(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: tmp12, children: tmp15 });
    const tmp21 = <View style={tmp10}>{null}</View>;
    cResult[9] = tmp15;
    cResult[10] = tmp21;
    let tmp17 = tmp21;
  } else {
    tmp17 = cResult[10];
  }
  return tmp17;
}) : (() => {
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(6814).useSensitiveContentFilterHelpArticle();
  const effect = noop.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(14514).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = noop.useCallback(() => {
    const obj = LinkingDefault;
    obj.openURL(HelpdeskUtilsDefault.getArticleURL(sensitiveContentFilterHelpArticle));
    const result = SafetySettingsUtils.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.LEARN_MORE);
  }, items);
  let obj2 = { style: null, children: null };
  const obj3 = { marginBottom: null };
  const callback = noop.useCallback(() => {
    const obj = onPress(8117);
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: sensitiveContentFilterHelpArticle(8119).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(8119).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result1 = sensitiveContentFilterHelpArticle(14514).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj3.marginBottom = nativeDefault.space.PX_8;
  obj2.style = obj3;
  const obj4 = { messageType: sensitiveContentFilterHelpArticle(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: null };
  const obj5 = { variant: "secondary", size: "sm", text: null, onPress: null };
  const intl = sensitiveContentFilterHelpArticle(1126).intl;
  obj5.text = intl.string(sensitiveContentFilterHelpArticle(1126).t.FDSSia);
  obj5.onPress = callback;
  obj4.button = jsx(sensitiveContentFilterHelpArticle(5601).Button, { variant: "secondary", size: "sm", text: null, onPress: null });
  const intl2 = sensitiveContentFilterHelpArticle(1126).intl;
  obj4.children = intl2.format(sensitiveContentFilterHelpArticle(1126).t.mFgsfg, {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    }
  });
  obj2.children = jsx(sensitiveContentFilterHelpArticle(1188).HelpMessage, { messageType: sensitiveContentFilterHelpArticle(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: null });
  return <View style={null}>{null}</View>;
});