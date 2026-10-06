// === Module 17924: GuildSettingsRoleSubscriptionWelcomeView ===

// Module 17924 (GuildSettingsRoleSubscriptionWelcomeView)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import Text_Text from "Text/Text" /* 4892 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import ErrorBlockDefault from "ErrorBlock" /* 11866 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15038 */;
import CreatorMonetizationEligibilityConstants from "CreatorMonetizationEligibilityConstants" /* 17925 */;
import WarningNoticeDefault from "WarningNotice" /* 17926 */;
import EligibilityActionSheet from "EligibilityActionSheet" /* 17929 */;
import HowItWorksSectionDefault from "HowItWorksSection" /* 17937 */;
import CreatorBenefitsSectionDefault from "CreatorBenefitsSection" /* 17941 */;
import CreatorHighlightSectionDefault from "CreatorHighlightSection" /* 17950 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, guild, importAll, importDefault, measureResult, navigation;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
let unpackModuleId;
function StartEarningButton(isTermsAccepted) {
  let Icon;
  let acceptTermsCheckboxText;
  let eligibility;
  let eligibleForMonetization;
  let error;
  let guildId;
  let intl;
  let intl2;
  let items2;
  let items4;
  let loading;
  let obj10;
  let style;
  let submitAcceptTermsRequest;
  let tmp11Result2;
  let tmp17;
  isTermsAccepted = isTermsAccepted.isTermsAccepted;
  ({ setTermsAccepted: importDefault, eligibleForMonetization, eligibility } = isTermsAccepted);
  let flag = isTermsAccepted.isFab;
  ({ guildId, acceptTermsCheckboxText, style } = isTermsAccepted);
  if (flag === undefined) {
    flag = false;
  }
  submitAcceptTermsRequest = undefined;
  const tmp = closure_14();
  const tmp4 = require("useCreatorMonetizationAcceptTerms")(guildId);
  ({ error, loading, submitAcceptTermsRequest } = tmp4);
  const canSubmitAcceptance = tmp4.canSubmitAcceptance;
  let obj = isTermsAccepted(submitAcceptTermsRequest[16]);
  navigation = obj.useNavigation();
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = react.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = react.useCallback(() => {
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    const obj = {
      eligibility,
      onRequireModeratorMFAClick() {
        navigation.push(constants.SECURITY);
      }
    };
    const tmp2 = asyncRequire(17929, dependencyMap.paths);
    return openLazy(tmp2, EligibilityActionSheet.ELIGIBILITY_ACTION_SHEET_KEY, obj);
  }, items1);
  const obj2 = {
    style: tmp.tos,
    leading: closure_11(isTermsAccepted(submitAcceptTermsRequest[21]).FormRow.Checkbox, { selected: isTermsAccepted }),
    label: closure_11(isTermsAccepted(submitAcceptTermsRequest[14]).Text, { variant: "text-xs/normal", color: "text-default", children: acceptTermsCheckboxText }),
    onPress() {
      return importDefault(!isTermsAccepted);
    }
  };
  const FormRow = isTermsAccepted(submitAcceptTermsRequest[21]).FormRow;
  let tmp13 = eligibleForMonetization;
  const obj3 = { style, children: items2 };
  const tmp10 = closure_11(FormRow, obj2);
  if (eligibleForMonetization) {
    tmp13 = true === flag && !isTermsAccepted || true !== flag;
  }
  if (tmp13) {
    tmp13 = tmp10;
  }
  items2 = [tmp13, ];
  const obj4 = { style: null, children: null };
  if (eligibleForMonetization) {
    obj4.style = tmp.startEarningButton;
    const obj5 = { loading, disabled: tmp17, text: intl2.string(isTermsAccepted(submitAcceptTermsRequest[12]).t.NL5ZNS), onPress: callback };
    tmp17 = !isTermsAccepted;
    const Button = tmp5(tmp3[22]).Button;
    if (isTermsAccepted) {
      tmp17 = !canSubmitAcceptance;
    }
    if (!tmp17) {
      tmp17 = !eligibleForMonetization;
    }
    intl2 = tmp5(tmp3[12]).intl;
    obj4.children = closure_11(Button, obj5);
    const items3 = [closure_11(closure_6, obj4), ];
    let tmp11Result = null != error;
    if (tmp11Result) {
      const obj6 = { children: items4 };
      items4 = [closure_11(isTermsAccepted(submitAcceptTermsRequest[23]).Spacer, { size: 12 }), ];
      const obj7 = { children: error.getAnyErrorMessage() };
      const tmp2Result = require("ErrorBlock");
      items4[1] = closure_11(tmp2Result, obj7);
      tmp11Result = closure_12(closure_13, obj6);
    }
    const obj8 = { children: items3 };
    items3[1] = tmp11Result;
    tmp11Result2 = closure_12(closure_13, obj8);
  } else {
    obj4.style = tmp.startEarningButton;
    const obj9 = { loading, text: intl.string(isTermsAccepted(submitAcceptTermsRequest[12]).t.NL5ZNS), icon: closure_11(Icon, obj10), pillStyle: { backgroundColor: "#EB5D30" }, onPress: callback1 };
    const BaseTextButton = tmp5(tmp3[24]).BaseTextButton;
    intl = tmp5(tmp3[12]).intl;
    obj10 = { source: require("AssetRegistry"), color: require("native").unsafe_rawColors.WHITE, size: isTermsAccepted(submitAcceptTermsRequest[23]).Icon.Sizes.SMALL_20 };
    Icon = tmp5(tmp3[23]).Icon;
    obj4.children = closure_11(BaseTextButton, obj9);
    tmp11Result2 = closure_11(closure_6, obj4);
  }
  items2[1] = tmp11Result2;
  return closure_12(closure_6, obj3);
}
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const creatorPortalUrl = GuildRoleSubscriptionsConstants.CREATOR_REVENUE_PORTAL_URL;
const GuildSettingsSections = Constants.GuildSettingsSections;
const constants = CreatorMonetizationEligibilityConstants.CreatorMonetizationOnboardingMarketingSection;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: { flex: 1, padding: 24 }, heroImage: { resizeMode: "cover", width: "100%" }, subtitle: { marginTop: 8 }, tos: obj2, startEarningButton: { marginTop: 12 }, startEarningButtonContainer: { marginTop: 14 }, startEarningFabContainer: { marginHorizontal: 24 }, divider: size, sectionTitle: { marginTop: 36, marginBottom: 10 }, sectionFooter: { marginTop: 36 }, statusNoticeContainer: { marginHorizontal: 0, marginTop: 14 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, marginTop: 10 };
createStyles = createStyles.createStyles;
size = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
let closure_14 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((isApplicationPending) => {
  let createEnableRequest;
  let items1;
  let obj5;
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  let resubmittingEnableRequest;
  let style;
  const obj = react2;
  const cResult = obj.c(19);
  ({ style, resubmittingEnableRequest, resubmissionError, createEnableRequest, requestRejectedNoticeText, reapplyNoticeText } = isApplicationPending);
  isApplicationPending = isApplicationPending.isApplicationPending;
  const tmp4 = closure_14();
  if (null != resubmissionError) {
    if (cResult[0] === style) {
      let tmp17;
      let tmp18;
      let tmp20;
      if (cResult[1] === tmp4.statusNoticeContainer) {
        tmp17 = cResult[2];
      }
      if (cResult[3] !== resubmissionError) {
        const anyErrorMessage = resubmissionError.getAnyErrorMessage();
        cResult[3] = resubmissionError;
        cResult[4] = anyErrorMessage;
        tmp18 = anyErrorMessage;
      } else {
        tmp18 = cResult[4];
      }
      if (cResult[5] !== tmp18) {
        const obj2 = { children: tmp18 };
        const tmp23 = unpackModuleId(ErrorBlockDefault, obj2);
        cResult[5] = tmp18;
        cResult[6] = tmp23;
        tmp20 = tmp23;
      } else {
        tmp20 = cResult[6];
      }
      if (cResult[7] === tmp17) {
        let tmp24;
        if (cResult[8] === tmp20) {
          tmp24 = cResult[9];
        }
        return tmp24;
      }
      const obj3 = { style: tmp17, children: tmp20 };
      const tmp27 = unpackModuleId(metroRequire, obj3);
      cResult[7] = tmp17;
      cResult[8] = tmp20;
      cResult[9] = tmp27;
      tmp24 = tmp27;
    }
    const items = [tmp4.statusNoticeContainer, style];
    cResult[0] = style;
    cResult[1] = tmp4.statusNoticeContainer;
    cResult[2] = items;
    tmp17 = items;
  } else {
    if (isApplicationPending) {
      let tmp10;
      const _Symbol2 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult = intl2.string(intl4.t.OrkTBn);
        cResult[10] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[10];
      }
      requestRejectedNoticeText = tmp10;
    } else if (null == requestRejectedNoticeText) {
      requestRejectedNoticeText = null;
      if (null != reapplyNoticeText) {
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult1 = intl.string(intl4.t["YKw/NQ"]);
          cResult[11] = stringResult1;
        }
        requestRejectedNoticeText = reapplyNoticeText;
      }
    }
    if (cResult[12] === createEnableRequest) {
      if (cResult[13] === tmp5) {
        if (cResult[14] === requestRejectedNoticeText) {
          if (cResult[15] === resubmittingEnableRequest) {
            if (cResult[16] === style) {
              let tmp12;
              if (cResult[17] === tmp4) {
                tmp12 = cResult[18];
              }
              return tmp12;
            }
          }
        }
      }
    }
    let tmp13 = null;
    if (null != requestRejectedNoticeText) {
      const obj4 = { style: items1, children: unpackModuleId(WarningNoticeDefault, obj5) };
      items1 = [tmp4.statusNoticeContainer, style];
      obj5 = { notice: requestRejectedNoticeText, ctaLabel: tmp5, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
      tmp13 = unpackModuleId(metroRequire, obj4);
    }
    cResult[12] = createEnableRequest;
    cResult[13] = tmp5;
    cResult[14] = requestRejectedNoticeText;
    cResult[15] = resubmittingEnableRequest;
    cResult[16] = style;
    cResult[17] = tmp4;
    cResult[18] = tmp13;
    tmp12 = tmp13;
  }
}) : ((arg0) => {
  let createEnableRequest;
  let isApplicationPending;
  let items;
  let items1;
  let obj3;
  let obj4;
  let reapplyNoticeText;
  let requestRejectedNoticeText;
  let resubmissionError;
  let resubmittingEnableRequest;
  let style;
  let tmp16;
  ({ style, resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = arg0);
  ({ resubmittingEnableRequest, createEnableRequest, isApplicationPending } = arg0);
  const tmp = closure_14();
  if (null != resubmissionError) {
    const obj2 = { style: items, children: unpackModuleId(tmp16, obj3) };
    items = [tmp.statusNoticeContainer, style];
    obj3 = { children: resubmissionError.getAnyErrorMessage() };
    tmp16 = ErrorBlockDefault;
    return unpackModuleId(metroRequire, obj2);
  } else {
    let stringResult;
    if (isApplicationPending) {
      const intl2 = intl4.intl;
      requestRejectedNoticeText = intl2.string(intl4.t.OrkTBn);
    } else if (null == requestRejectedNoticeText) {
      requestRejectedNoticeText = null;
      if (null != reapplyNoticeText) {
        const intl = intl4.intl;
        requestRejectedNoticeText = reapplyNoticeText;
        stringResult = intl.string(intl4.t["YKw/NQ"]);
      }
    }
    let tmp7 = null;
    if (null != requestRejectedNoticeText) {
      const obj = { style: items1, children: unpackModuleId(WarningNoticeDefault, obj4) };
      items1 = [tmp.statusNoticeContainer, style];
      obj4 = { notice: requestRejectedNoticeText, ctaLabel: stringResult, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
      tmp7 = unpackModuleId(metroRequire, obj);
    }
    return tmp7;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let footer;
  let items;
  let onLayout;
  let title;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(15);
  ({ title, children, footer, onLayout } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] !== tmp4.divider) {
    const obj2 = { style: tmp4.divider };
    const tmp8 = unpackModuleId(metroRequire, obj2);
    cResult[0] = tmp4.divider;
    cResult[1] = tmp8;
    tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.sectionTitle) {
    let tmp9;
    if (cResult[3] === title) {
      tmp9 = cResult[4];
    }
    if (cResult[5] === footer) {
      let tmp11;
      if (cResult[6] === tmp4.sectionFooter) {
        tmp11 = cResult[7];
      }
      if (cResult[8] === children) {
        if (cResult[9] === onLayout) {
          if (cResult[10] === tmp4.container) {
            if (cResult[11] === tmp5) {
              if (cResult[12] === tmp9) {
                let tmp15;
                if (cResult[13] === tmp11) {
                  tmp15 = cResult[14];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const obj3 = { onLayout, style: tmp4.container, children: items };
      items = [tmp5, tmp9, children, tmp11];
      const tmp18 = closure_12(metroRequire, obj3);
      cResult[8] = children;
      cResult[9] = onLayout;
      cResult[10] = tmp4.container;
      cResult[11] = tmp5;
      cResult[12] = tmp9;
      cResult[13] = tmp11;
      cResult[14] = tmp18;
      tmp15 = tmp18;
    }
    let tmp13 = null != footer;
    if (tmp13) {
      const obj4 = { style: tmp4.sectionFooter, variant: "text-sm/normal", color: "text-default", children: footer };
      tmp13 = unpackModuleId(Text_Text.Text, obj4);
    }
    cResult[5] = footer;
    cResult[6] = tmp4.sectionFooter;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const obj5 = { style: tmp4.sectionTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: title };
  const tmp10 = unpackModuleId(Text_Text.Text, obj5);
  cResult[2] = tmp4.sectionTitle;
  cResult[3] = title;
  cResult[4] = tmp10;
  tmp9 = tmp10;
}) : ((footer) => {
  let children;
  let items;
  let onLayout;
  let title;
  footer = footer.footer;
  ({ title, children, onLayout } = footer);
  const tmp = closure_14();
  const obj = { onLayout, style: tmp.container, children: items };
  items = [, , , ];
  const obj2 = { style: tmp.divider };
  items[0] = unpackModuleId(metroRequire, obj2);
  const obj3 = { style: tmp.sectionTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: title };
  items[1] = unpackModuleId(Text_Text.Text, obj3);
  items[2] = children;
  let tmp4Result = null != footer;
  if (tmp4Result) {
    const obj4 = { style: tmp.sectionFooter, variant: "text-sm/normal", color: "text-default", children: footer };
    tmp4Result = unpackModuleId(Text_Text.Text, obj4);
  }
  items[3] = tmp4Result;
  return closure_12(metroRequire, obj);
});
let closure_16 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let closure_1;
  let items;
  let onHowItWorksLayoutChange;
  let onboardingMarketing;
  let tmp13;
  let tmp18;
  let tmp20;
  let tmp4;
  let tmp5;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(16);
  ({ onboardingMarketing, onHowItWorksLayoutChange } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(require("intl").t.R9rNIk);
    const intl2 = tmp(1126).intl;
    let obj2 = { creatorPortalUrl };
    const formatResult = intl2.format(require("intl").t.oxW30N, obj2);
    cResult[0] = stringResult;
    cResult[1] = formatResult;
    tmp4 = stringResult;
    tmp5 = formatResult;
  } else {
    [tmp4, tmp5] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = closure_11(HowItWorksSectionDefault, {});
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] !== onHowItWorksLayoutChange) {
    const obj3 = { title: tmp4, footer: tmp5, onLayout: onHowItWorksLayoutChange, children: tmp9 };
    const tmp17 = closure_11(closure_16, obj3, constants.HOW_IT_WORKS);
    cResult[3] = onHowItWorksLayoutChange;
    cResult[4] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[4];
  }
  _require = tmp13;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(require("intl").t["1QHJaW"]);
    cResult[5] = stringResult1;
    tmp18 = stringResult1;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { title: tmp18, children: closure_11(CreatorBenefitsSectionDefault, {}) };
    const tmp25 = closure_11(closure_16, obj4, constants.BENEFITS);
    cResult[6] = tmp25;
    tmp20 = tmp25;
  } else {
    tmp20 = cResult[6];
  }
  importDefault = tmp20;
  let sections;
  if (onboardingMarketing != null) {
    sections = onboardingMarketing.sections;
  }
  if (null == sections) {
    let tmp34;
    if (cResult[7] !== tmp13) {
      const obj5 = { children: items };
      items = [tmp13, tmp20];
      const tmp37 = closure_12(closure_13, obj5);
      cResult[7] = tmp13;
      cResult[8] = tmp37;
      tmp34 = tmp37;
    } else {
      tmp34 = cResult[8];
    }
    return tmp34;
  } else {
    let tmp28;
    if (cResult[9] === tmp13) {
      let tmp27;
      let tmp30;
      if (cResult[10] === onboardingMarketing.sections) {
        tmp27 = cResult[11];
      }
      if (cResult[14] !== tmp27) {
        const obj6 = { children: tmp27 };
        const tmp33 = closure_11(closure_13, obj6);
        cResult[14] = tmp27;
        cResult[15] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[15];
      }
      return tmp30;
    }
    if (cResult[12] !== tmp13) {
      const fn = function x(type) {
        let intl;
        let obj2;
        type = type.type;
        if (constants.HOW_IT_WORKS === type) {
          return closure_0;
        } else if (constants.BENEFITS === type) {
          return closure_1;
        } else if (constants.OTHER_CREATORS === type) {
          const obj = { title: intl.string(intl4.t["tJp+QV"]), children: unpackModuleId(CreatorHighlightSectionDefault, obj2) };
          intl = intl4.intl;
          obj2 = { highlightedCreators: type.creators };
          return unpackModuleId(closure_16, obj, constants.OTHER_CREATORS);
        }
      };
      cResult[12] = tmp13;
      cResult[13] = fn;
      tmp28 = fn;
    } else {
      tmp28 = cResult[13];
    }
    const sections1 = onboardingMarketing.sections;
    const mapped = sections1.map(tmp28);
    cResult[9] = tmp13;
    cResult[10] = onboardingMarketing.sections;
    cResult[11] = mapped;
    tmp27 = mapped;
  }
}) : ((onboardingMarketing) => {
  let closure_0;
  let closure_1;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let onHowItWorksLayoutChange;
  let sections1;
  let tmpResult;
  onboardingMarketing = onboardingMarketing.onboardingMarketing;
  _require = undefined;
  let obj = { title: intl.string(require("intl").t.R9rNIk), footer: intl2.format(require("intl").t.oxW30N, obj2), onLayout: onHowItWorksLayoutChange, children: closure_11(HowItWorksSectionDefault, {}) };
  onHowItWorksLayoutChange = onboardingMarketing.onHowItWorksLayoutChange;
  intl = require("intl").intl;
  intl2 = require("intl").intl;
  obj2 = { creatorPortalUrl };
  const tmp2 = closure_11(closure_16, obj, constants.HOW_IT_WORKS);
  _require = tmp2;
  const obj3 = { title: intl3.string(require("intl").t["1QHJaW"]), children: closure_11(CreatorBenefitsSectionDefault, {}) };
  intl3 = require("intl").intl;
  const tmp3 = closure_11(closure_16, obj3, constants.BENEFITS);
  importDefault = tmp3;
  let sections;
  if (onboardingMarketing != null) {
    sections = onboardingMarketing.sections;
  }
  if (null == sections) {
    const obj4 = { children: items };
    items = [tmp2, tmp3];
    tmpResult = closure_12(closure_13, obj4);
  } else {
    const obj5 = {
      children: sections1.map((type) => {
          let intl;
          let obj2;
          type = type.type;
          if (constants.HOW_IT_WORKS === type) {
            return closure_0;
          } else if (constants.BENEFITS === type) {
            return closure_1;
          } else if (constants.OTHER_CREATORS === type) {
            const obj = { title: intl.string(intl4.t["tJp+QV"]), children: unpackModuleId(CreatorHighlightSectionDefault, obj2) };
            intl = intl4.intl;
            obj2 = { highlightedCreators: type.creators };
            return unpackModuleId(closure_16, obj, constants.OTHER_CREATORS);
          }
        })
    };
    sections1 = onboardingMarketing.sections;
    tmpResult = closure_11(closure_13, obj5);
  }
  return tmpResult;
});
let closure_18 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let acceptTermsCheckboxText;
  let closure_5;
  let eligibility;
  let eligibilityError;
  let eligibilityLoading;
  let eligibleForMonetization;
  let first;
  let isGuildOwner;
  let ref;
  let refreshEligibility;
  let tmp12;
  let tmp14;
  let tmp15;
  let wasRejectedInV1;
  const tmp2 = ref;
  const obj = refreshEligibility(ref[10]);
  const cResult = obj.c(58);
  guild = guild.guild;
  closure_14();
  const obj2 = refreshEligibility(ref[16]);
  navigation = obj2.useNavigation();
  const tmp7 = require("useOnboardingMonetizationEnableFlow")(guild);
  ({ isGuildOwner, eligibility, refreshEligibility } = tmp7);
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1, eligibilityLoading, eligibilityError } = tmp7);
  const obj3 = refreshEligibility(ref[30]);
  const creatorMonetizationIneligibleReasons = obj3.useCreatorMonetizationIneligibleReasons(eligibility);
  require("useCreatorMonetizationOnboardingMarketing")(guild.id);
  [r10045, r10046] = first(react.useState(false), 2);
  first(react.useState(false), 2);
  importDefault = react.useRef(true);
  if (cResult[0] !== refreshEligibility) {
    const fn = function c() {
      if (!ref.current) {
        refreshEligibility();
      }
    };
    cResult[0] = refreshEligibility;
    cResult[1] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[1];
  }
  const tmpResult = refreshEligibility(tmp2[32]);
  const focusEffect = tmpResult.useFocusEffect(tmp12);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      if (ref.current) {
        tmp.current = false;
      }
    };
    const items = [];
    cResult[2] = fn2;
    cResult[3] = items;
    tmp15 = items;
    tmp14 = fn2;
  } else {
    tmp14 = cResult[2];
    tmp15 = cResult[3];
  }
  const effect = obj4.useEffect(tmp14, tmp15);
  if (cResult[4] === eligibleForMonetization) {
    if (cResult[5] === guild.id) {
      if (cResult[6] === creatorMonetizationIneligibleReasons) {
        let tmp17;
        let tmp20;
        let tmp29;
        if (cResult[7] === isGuildOwner) {
          tmp17 = cResult[8];
        }
        if (cResult[9] !== (null == guild.id || null == eligibility)) {
          const obj5 = { disableTrack: null == guild.id || null == eligibility };
          cResult[9] = null == guild.id || null == eligibility;
          cResult[10] = obj5;
          tmp20 = obj5;
        } else {
          tmp20 = cResult[10];
        }
        require("useTrackImpression")(tmp17, tmp20);
        [r10109, importAll] = first(react.useState(false), 2);
        first(react.useState(false), 2);
        ref = obj4.useRef(null);
        const tmp10Result2 = first(react.useState(), 2);
        first = tmp10Result2[0];
        react = tmp10Result2[1];
        const _Symbol = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(arg0) {
              closure_0 = guild.nativeEvent.layout.y;
              if (closure_3 != null) {
                current = closure_3.current;
                if (current != null) {
                  measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                    const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
                    closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
                  });
                }
              }
              return;
            }
          }
          cResult[11] = U;
        } else {
          class U {
            constructor(arg0) {
              closure_0 = guild.nativeEvent.layout.y;
              if (closure_3 != null) {
                current = closure_3.current;
                if (current != null) {
                  measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                    const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
                    closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
                  });
                }
              }
              return;
            }
          }
        }
        if (cResult[12] !== first) {
          class U {
            constructor(arg0) {
              closure_0 = guild.nativeEvent.layout.y;
              if (closure_3 != null) {
                current = closure_3.current;
                if (current != null) {
                  measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                    const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
                    closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
                  });
                }
              }
              return;
            }
          }
          cResult[12] = first;
          cResult[13] = tmp28;
        } else {
          class U {
            constructor(arg0) {
              closure_0 = guild.nativeEvent.layout.y;
              if (closure_3 != null) {
                current = closure_3.current;
                if (current != null) {
                  measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                    const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
                    closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
                  });
                }
              }
              return;
            }
          }
        }
        if (!eligibilityLoading) {
          class U {
            constructor(arg0) {
              closure_0 = guild.nativeEvent.layout.y;
              if (closure_3 != null) {
                current = closure_3.current;
                if (current != null) {
                  measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                    const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
                    closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
                  });
                }
              }
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor(arg0) {
              closure_0 = guild.nativeEvent.layout.y;
              if (closure_3 != null) {
                current = closure_3.current;
                if (current != null) {
                  measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                    const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
                    closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
                  });
                }
              }
              return;
            }
          }
          const tmp30 = closure_11(require("Placeholder"), {});
          cResult[14] = tmp30;
          tmp29 = tmp30;
        } else {
          class U {
            constructor(arg0) {
              closure_0 = guild.nativeEvent.layout.y;
              if (closure_3 != null) {
                current = closure_3.current;
                if (current != null) {
                  measureResult = current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
                    const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
                    closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
                  });
                }
              }
              return;
            }
          }
        }
        return tmp29;
      }
    }
  }
  const obj6 = { type: refreshEligibility(tmp2[33]).ImpressionTypes.PANE, name: refreshEligibility(tmp2[33]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING, properties: { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons } };
  cResult[4] = eligibleForMonetization;
  cResult[5] = guild.id;
  cResult[6] = creatorMonetizationIneligibleReasons;
  cResult[7] = isGuildOwner;
  cResult[8] = obj6;
  tmp17 = obj6;
}) : ((guild) => {
  let _undefined;
  let acceptTermsCheckboxText;
  let closure_5;
  let creatorMonetizationOnboardingMarketing;
  let eligibility;
  let eligibilityError;
  let eligibilityLoading;
  let eligibleForMonetization;
  let intl2;
  let intl3;
  let isGuildOwner;
  let isLoading;
  let items3;
  let items4;
  let items5;
  let obj8;
  let refreshEligibility;
  let tmp10;
  let tmp11;
  let tmp19;
  let tmp20;
  let tmp32Result2;
  let wasRejectedInV1;
  guild = guild.guild;
  refreshEligibility = undefined;
  let ref;
  let ref1;
  let first;
  react = undefined;
  const tmp = closure_14();
  const tmp2 = refreshEligibility;
  const obj = refreshEligibility(ref1[16]);
  navigation = obj.useNavigation();
  const tmp5 = ref(ref1[29])(guild);
  ({ eligibility, refreshEligibility } = tmp5);
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1, isGuildOwner, eligibilityLoading, eligibilityError } = tmp5);
  const obj2 = refreshEligibility(ref1[30]);
  const creatorMonetizationIneligibleReasons = obj2.useCreatorMonetizationIneligibleReasons(eligibility);
  ({ isLoading, creatorMonetizationOnboardingMarketing } = ref(ref1[31])(guild.id));
  ref(ref1[31])(guild.id);
  [tmp10, tmp11] = first(react.useState(false), 2);
  first(react.useState(false), 2);
  ref = react.useRef(true);
  const items = [ref, refreshEligibility];
  const obj4 = refreshEligibility(ref1[32]);
  const focusEffect = obj4.useFocusEffect(react.useCallback(() => {
    if (!ref.current) {
      refreshEligibility();
    }
  }, items));
  const effect = react.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    }
  }, []);
  const obj5 = { type: refreshEligibility(ref1[33]).ImpressionTypes.PANE, name: refreshEligibility(ref1[33]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING, properties: { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons } };
  const tmp15 = ref(ref1[34]);
  const tmp16 = null == guild.id || null == eligibility;
  tmp15(obj5, { disableTrack: tmp16 });
  [tmp19, tmp20] = first(react.useState(false), 2);
  importAll = tmp20;
  first(react.useState(false), 2);
  ref1 = obj3.useRef(null);
  const tmp8Result2 = first(react.useState(), 2);
  first = tmp8Result2[0];
  react = tmp24;
  const items1 = [tmp8Result2[1]];
  const items2 = [tmp20, first];
  const callback = obj3.useCallback((nativeEvent) => {
    let closure_0;
    const y = nativeEvent.nativeEvent.layout.y;
    if (ref1 != null) {
      const current = ref1.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          const diff = arg5 - NavigatorConstants.STATUS_BAR_HEIGHT;
          closure_5(closure_0 + (diff - NavigatorConstants.NAV_BAR_HEIGHT));
        });
      }
    }
  }, items1);
  if (!eligibilityLoading) {
    if (null != eligibility) {
      let tmp31Result;
      if (!isLoading) {
        let tmp32Result;
        if (null != eligibilityError) {
          const presentFailedToast = require("ToastUtils").presentFailedToast;
          require("ToastUtils");
          const intl = tmp2(tmp3[12]).intl;
          presentFailedToast(intl.string(tmp2(ref1[12]).t.R0RpRX));
          navigation.pop();
        }
        const obj6 = { bottom: true, style: tmp.container, children: items5 };
        const obj7 = { onScroll: tmp26, scrollEventThrottle: 36, children: closure_12(closure_6, obj8) };
        obj8 = { style: tmp.container, children: items3 };
        const SafeAreaPaddingView = tmp2(tmp3[40]).SafeAreaPaddingView;
        const obj9 = { source: ref(ref1[39]), resizeMethod: "scale", style: tmp.heroImage };
        const tmp4Result = ref(ref1[38]);
        items3 = [closure_11(tmp4Result, obj9), ];
        const obj10 = { ref: ref1, style: tmp.contentContainer, collapsable: false, children: items4 };
        const obj11 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(ref1[12]).t.QYqDQ0) };
        const Text = tmp2(tmp3[14]).Text;
        intl2 = tmp2(tmp3[12]).intl;
        items4 = [closure_11(Text, obj11), , , ];
        const obj12 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: intl3.string(tmp2(ref1[12]).t["41wkMc"]) };
        const Text2 = tmp2(tmp3[14]).Text;
        intl3 = tmp2(tmp3[12]).intl;
        items4[1] = closure_11(Text2, obj12);
        if (wasRejectedInV1) {
          const obj13 = { style: tmp.statusNoticeContainer };
          const merged = Object.assign(tmp5);
          tmp32Result = closure_11(closure_15, obj13);
        } else {
          const obj14 = { style: tmp.startEarningButtonContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText };
          tmp32Result = closure_11(StartEarningButton, obj14);
        }
        items4[2] = tmp32Result;
        const obj15 = { onboardingMarketing: creatorMonetizationOnboardingMarketing, onHowItWorksLayoutChange: callback };
        items4[3] = closure_11(closure_18, obj15);
        items3[1] = closure_12(closure_6, obj10);
        items5 = [closure_11(closure_7, obj7), ];
        if (tmp32Result2) {
          tmp32Result2 = eligibleForMonetization;
        }
        if (tmp32Result2) {
          tmp32Result2 = !wasRejectedInV1;
        }
        if (tmp32Result2) {
          const obj16 = { style: tmp.startEarningFabContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText, isFab: true };
          tmp32Result2 = closure_11(StartEarningButton, obj16);
        }
        items5[1] = tmp32Result2;
        tmp31Result = closure_12(SafeAreaPaddingView, obj6);
      }
      return tmp31Result;
    }
  }
  tmp31Result = closure_11(tmp4(tmp3[36]), {});
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx");

export default tmp7;
export const SectionContainer = tmp5;
export const MarketingSections = tmp6;