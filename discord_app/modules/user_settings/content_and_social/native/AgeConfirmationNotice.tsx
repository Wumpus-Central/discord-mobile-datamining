// === Module 14630: AgeConfirmationNotice ===

// Module 14630 (AgeConfirmationNotice)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import LinkingDefault from "Linking" /* 4565 */;
import Text_Text from "Text/Text" /* 4886 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14498 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 8075 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let onPress;
  let sensitiveContentFilterHelpArticle;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp8;
  let tmp9;
  const tmp = sensitiveContentFilterHelpArticle;
  let obj = sensitiveContentFilterHelpArticle(576);
  const cResult = obj.c(11);
  let obj2 = sensitiveContentFilterHelpArticle(6804);
  sensitiveContentFilterHelpArticle = obj2.useSensitiveContentFilterHelpArticle();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = sensitiveContentFilterHelpArticle(dependencyMap[7]);
      const result = obj.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp5 = fn;
    tmp6 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const effect = react.useEffect(tmp5, tmp6);
  if (cResult[2] !== sensitiveContentFilterHelpArticle) {
    const fn2 = function _() {
      const openURL = LinkingDefault.openURL;
      LinkingDefault;
      const obj = HelpdeskUtilsDefault;
      openURL(obj.getArticleURL(sensitiveContentFilterHelpArticle));
      const obj2 = SafetySettingsUtils;
      const result = obj2.trackSafetySettingsNoticeAnalytics(metroRequire.AGE_CONFIRMATION_NOTICE, hasOwnProperty.LEARN_MORE);
    };
    cResult[2] = sensitiveContentFilterHelpArticle;
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  importDefault = tmp8;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function f() {
      const obj = onPress(dependencyMap[10]);
      const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
      const result = obj.showAgeVerificationGetStartedModal(obj2);
      const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
      const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
    };
    cResult[4] = fn3;
    tmp9 = fn3;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { marginBottom: nativeDefault.space.PX_8 };
    cResult[5] = obj3;
    tmp10 = obj3;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const Button = tmp(5594).Button;
    const intl = tmp(1126).intl;
    const tmp14 = <Button variant="secondary" size="sm" text={intl.string(tmp(1126).t.FDSSia)} onPress={tmp9} />;
    cResult[6] = tmp14;
    tmp12 = tmp14;
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
    tmp15 = formatResult;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== tmp15) {
    ({ messageType: tmp(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: tmp12, children: tmp15 });
    const HelpMessage = tmp(1188).HelpMessage;
    const tmp21 = <View style={tmp10}>{null}</View>;
    cResult[9] = tmp15;
    cResult[10] = tmp21;
    tmp17 = tmp21;
  } else {
    tmp17 = cResult[10];
  }
  return tmp17;
}) : (() => {
  let intl;
  let intl2;
  let onPress;
  let sensitiveContentFilterHelpArticle;
  let obj = sensitiveContentFilterHelpArticle(6804);
  sensitiveContentFilterHelpArticle = obj.useSensitiveContentFilterHelpArticle();
  const effect = react.useEffect(() => {
    const obj = sensitiveContentFilterHelpArticle(dependencyMap[7]);
    const result = obj.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
  }, []);
  const items = [sensitiveContentFilterHelpArticle];
  importDefault = react.useCallback(() => {
    const openURL = LinkingDefault.openURL;
    LinkingDefault;
    const obj = HelpdeskUtilsDefault;
    openURL(obj.getArticleURL(sensitiveContentFilterHelpArticle));
    const obj2 = SafetySettingsUtils;
    const result = obj2.trackSafetySettingsNoticeAnalytics(metroRequire.AGE_CONFIRMATION_NOTICE, hasOwnProperty.LEARN_MORE);
  }, items);
  let obj3 = { marginBottom: nativeDefault.space.PX_8 };
  const callback = react.useCallback(() => {
    const obj = onPress(dependencyMap[10]);
    const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(dependencyMap[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result = obj.showAgeVerificationGetStartedModal(obj2);
    const obj3 = sensitiveContentFilterHelpArticle(dependencyMap[7]);
    const result1 = obj3.trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  ({ messageType: sensitiveContentFilterHelpArticle(1188).HelpMessageTypes.INFO, borderRadius: nativeDefault.radii.lg, button: null, children: intl2.format(sensitiveContentFilterHelpArticle(1126).t.mFgsfg, obj6) });
  const HelpMessage = sensitiveContentFilterHelpArticle(1188).HelpMessage;
  ({ variant: "secondary", size: "sm", text: intl.string(sensitiveContentFilterHelpArticle(1126).t.FDSSia), onPress: callback });
  const Button = sensitiveContentFilterHelpArticle(5594).Button;
  intl = sensitiveContentFilterHelpArticle(1126).intl;
  intl2 = sensitiveContentFilterHelpArticle(1126).intl;
  return <View style={obj3}>{null}</View>;
});
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default tmp3;