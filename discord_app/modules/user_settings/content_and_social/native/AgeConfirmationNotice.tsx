// === Module 15078: AgeConfirmationNotice ===

// Module 15078 (AgeConfirmationNotice)
import nativeDefault from "native" /* 587 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import LinkingDefault from "Linking" /* 4806 */;
import Text_Text from "Text/Text" /* 5088 */;
import SafetySettingsUtils from "SafetySettingsUtils" /* 14941 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const Constants = fn(7019);
({ SafetySettingsNoticeAction: hasOwnProperty, SafetySettingsNoticeType: metroRequire } = Constants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/AgeConfirmationNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function AgeConfirmationNotice() {
  const cResult = sensitiveContentFilterHelpArticle(576).c(11);
  let obj = sensitiveContentFilterHelpArticle(576);
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(6999).useSensitiveContentFilterHelpArticle();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const result = sensitiveContentFilterHelpArticle(14941).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
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
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
    cResult[4] = E;
  } else {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
    tmp11[0] = nativeDefault.space.PX_8;
    cResult[5] = tmp11;
  } else {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
  }
  if (cResult[6] !== tmp8) {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
    const obj4 = {
      hook(children) {
          return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
        }
    };
    const formatResult = obj3.format(tmp(1126).t.mFgsfg, obj4);
    cResult[6] = tmp8;
    cResult[7] = formatResult;
  } else {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
    const intl = tmp(1126).intl;
    tmp16[0] = intl.string(tmp(1126).t.FDSSia);
    tmp16[1] = E;
    cResult[8] = tmp16;
  } else {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
  }
  if (cResult[9] !== tmp13) {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
    const obj5 = { style: tmp11, children: null };
    const obj6 = { type: "info", message: tmp13, role: "status", action: tmp16 };
    obj5.children = jsx(tmp(7567).InlineNotice, { type: "info", message: tmp13, role: "status", action: tmp16 });
    const tmp19 = <View style={tmp11}>{null}</View>;
    cResult[9] = tmp13;
    cResult[10] = tmp19;
    const tmp17 = tmp19;
  } else {
    class E {
      constructor() {
        obj = closure_1(closure_1_2[10]);
        obj1 = { entryPoint: closure_0(closure_1_2[11]).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
        result = obj.showAgeVerificationGetStartedModal(obj1);
        obj3 = closure_0(closure_1_2[7]);
        result1 = obj3.trackSafetySettingsNoticeAnalytics(closure_1_6.AGE_CONFIRMATION_NOTICE, closure_1_5.CONFIRM_AGE);
        return;
      }
    }
  }
  return tmp17;
}) : (function AgeConfirmationNotice() {
  sensitiveContentFilterHelpArticle = sensitiveContentFilterHelpArticle(6999).useSensitiveContentFilterHelpArticle();
  const effect = noop.useEffect(() => {
    const result = sensitiveContentFilterHelpArticle(14941).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.VIEWED);
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
    const obj = onPress(7497);
    const result = obj.showAgeVerificationGetStartedModal({ entryPoint: sensitiveContentFilterHelpArticle(5918).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE });
    const obj2 = { entryPoint: sensitiveContentFilterHelpArticle(5918).AgeVerificationModalEntryPoint.CONTENT_AND_SOCIAL_NOTICE };
    const result1 = sensitiveContentFilterHelpArticle(14941).trackSafetySettingsNoticeAnalytics(constants2.AGE_CONFIRMATION_NOTICE, constants.CONFIRM_AGE);
  }, []);
  obj3.marginBottom = nativeDefault.space.PX_8;
  obj2.style = obj3;
  const obj4 = { type: "info", message: null, role: "status", action: null };
  const intl = sensitiveContentFilterHelpArticle(1126).intl;
  obj4.message = intl.format(sensitiveContentFilterHelpArticle(1126).t.mFgsfg, {
    hook(children) {
      return jsx(Text_Text.Text, { role: "link", variant: "text-sm/medium", color: "text-link", onPress, children });
    }
  });
  const obj6 = { text: null, onClick: null };
  const intl2 = sensitiveContentFilterHelpArticle(1126).intl;
  obj6.text = intl2.string(sensitiveContentFilterHelpArticle(1126).t.FDSSia);
  obj6.onClick = callback;
  obj4.action = obj6;
  obj2.children = jsx(sensitiveContentFilterHelpArticle(7567).InlineNotice, { type: "info", message: null, role: "status", action: null });
  return <View style={null}>{null}</View>;
});