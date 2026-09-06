// === Module 17681: GuildSettingsRoleSubscriptionWelcomeView ===

// Module 17681 (GuildSettingsRoleSubscriptionWelcomeView)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import NavigatorConstants from "NavigatorConstants" /* 5682 */;
import ErrorBlockDefault from "ErrorBlock" /* 12223 */;
import WarningNoticeDefault from "WarningNotice" /* 17683 */;
import EligibilityActionSheet from "EligibilityActionSheet" /* 17686 */;
import HowItWorksSectionDefault from "HowItWorksSection" /* 17694 */;
import CreatorBenefitsSectionDefault from "CreatorBenefitsSection" /* 17698 */;
import CreatorHighlightSectionDefault from "CreatorHighlightSection" /* 17707 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function ApplicationStatusNotice(arg0) {
  ({ style, resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = arg0);
  ({ resubmittingEnableRequest, createEnableRequest, isApplicationPending } = arg0);
  const tmp = closure_14();
  if (null != resubmissionError) {
    let obj = { style: null, children: null };
    const items = [tmp.statusNoticeContainer, style];
    obj.style = items;
    obj = { children: resubmissionError.getAnyErrorMessage() };
    obj.children = closure_1_11(ErrorBlockDefault, obj);
    return closure_1_11(timestampProducer, obj);
  } else {
    if (isApplicationPending) {
      const intl2 = util.intl;
      requestRejectedNoticeText = intl2.string(util.t.OrkTBn);
    } else if (null == requestRejectedNoticeText) {
      requestRejectedNoticeText = null;
      if (null != reapplyNoticeText) {
        const intl = util.intl;
        requestRejectedNoticeText = reapplyNoticeText;
        const stringResult = intl.string(util.t["YKw/NQ"]);
      }
    }
    let tmp7 = null;
    if (null != requestRejectedNoticeText) {
      obj = { style: null, children: null };
      const items1 = [tmp.statusNoticeContainer, style];
      obj.style = items1;
      const obj1 = { notice: requestRejectedNoticeText, ctaLabel: stringResult, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
      obj.children = closure_1_11(WarningNoticeDefault, obj1);
      tmp7 = closure_1_11(timestampProducer, obj);
    }
    return tmp7;
  }
}
class SectionContainer {
  constructor(arg0) {
    footer = global.footer;
    ({ title, children, onLayout } = global);
    tmp = closure_14();
    obj = { onLayout, style: tmp.container, children: null };
    obj = { style: tmp.divider };
    tmp2 = jsxs;
    tmp3 = View;
    tmp4 = jsx;
    items = [, , , ];
    items[0] = jsx(View, obj);
    tmp5 = closure_0;
    tmp6 = closure_3;
    obj1 = { style: tmp.sectionTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: title };
    items[1] = jsx(closure_0(closure_3[12]).Text, obj1);
    items[2] = children;
    tmp4Result = null != footer;
    if (tmp4Result) {
      obj2 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
      obj2.style = tmp.sectionFooter;
      obj2.children = footer;
      tmp4Result = tmp4(tmp5(tmp6[12]).Text, obj2);
    }
    items[3] = tmp4Result;
    obj.children = items;
    return tmp2(tmp3, obj);
  }
}
function StartEarningButton(isTermsAccepted) {
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
  let obj = isTermsAccepted(submitAcceptTermsRequest[14]);
  const navigation = obj.useNavigation();
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = noop.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = noop.useCallback(() => {
    const obj = {
      eligibility,
      onRequireModeratorMFAClick() {
        navigation.push(constants.SECURITY);
      }
    };
    return obj.openLazy(asyncRequireImpl(17686, dependencyMap.paths), EligibilityActionSheet.ELIGIBILITY_ACTION_SHEET_KEY, obj);
  }, items1);
  obj = {
    style: tmp.tos,
    leading: closure_11(isTermsAccepted(submitAcceptTermsRequest[19]).FormRow.Checkbox, { selected: isTermsAccepted }),
    label: closure_11(isTermsAccepted(submitAcceptTermsRequest[12]).Text, { variant: "text-xs/normal", color: "text-default", children: acceptTermsCheckboxText }),
    onPress() {
      return importDefault(!isTermsAccepted);
    }
  };
  obj = { style, children: null };
  let tmp13 = eligibleForMonetization;
  if (eligibleForMonetization) {
    tmp13 = true === flag && !isTermsAccepted || true !== flag;
    const tmp14 = true === flag && !isTermsAccepted || true !== flag;
  }
  if (tmp13) {
    tmp13 = tmp10;
  }
  const items2 = [tmp13, ];
  const obj1 = { style: null, children: null };
  if (eligibleForMonetization) {
    obj1.style = tmp.startEarningButton;
    const obj2 = { loading, disabled: null, text: null, onPress: null };
    let tmp17 = !isTermsAccepted;
    if (isTermsAccepted) {
      tmp17 = !tmp4.canSubmitAcceptance;
    }
    if (!tmp17) {
      tmp17 = !eligibleForMonetization;
    }
    obj2.disabled = tmp17;
    const intl2 = tmp5(tmp3[10]).intl;
    obj2.text = intl2.string(tmp5(tmp3[10]).t.NL5ZNS);
    obj2.onPress = callback;
    obj1.children = closure_11(tmp5(tmp3[20]).Button, obj2);
    const items3 = [closure_11(closure_6, obj1), ];
    let tmp11Result = null != error;
    if (tmp11Result) {
      const obj3 = { children: null };
      const items4 = [closure_11(tmp5(tmp3[21]).Spacer, { size: 12 }), ];
      const obj4 = { children: error.getAnyErrorMessage() };
      items4[1] = closure_11(require("ErrorBlock"), obj4);
      obj3.children = items4;
      tmp11Result = closure_12(closure_13, obj3);
      const tmp2Result = require("ErrorBlock");
    }
    const obj5 = { children: null };
    items3[1] = tmp11Result;
    obj5.children = items3;
    tmp11Result = closure_12(closure_13, obj5);
  } else {
    obj1.style = tmp.startEarningButton;
    const obj6 = { loading, text: null, icon: null, pillStyle: null, onPress: null };
    const intl = tmp5(tmp3[10]).intl;
    obj6.text = intl.string(tmp5(tmp3[10]).t.NL5ZNS);
    const obj7 = { source: require("module_9625"), color: require("native").unsafe_rawColors.WHITE, size: tmp5(tmp3[21]).Icon.Sizes.SMALL_20 };
    obj6.icon = closure_11(tmp5(tmp3[21]).Icon, obj7);
    obj6.pillStyle = { backgroundColor: "#EB5D30" };
    obj6.onPress = callback1;
    obj1.children = closure_11(tmp5(tmp3[22]).BaseTextButton, obj6);
    tmp11Result = closure_11(closure_6, obj1);
  }
  items2[1] = tmp11Result;
  obj.children = items2;
  return closure_12(closure_6, obj);
}
class MarketingSections {
  constructor(arg0) {
    onboardingMarketing = global.onboardingMarketing;
    closure_0 = undefined;
    closure_1 = undefined;
    obj = { title: null, footer: null, onLayout: null, children: null };
    tmp = jsx;
    intl = closure_0(closure_3[10]).intl;
    obj.title = intl.string(closure_0(closure_3[10]).t.R9rNIk);
    intl2 = closure_0(closure_3[10]).intl;
    obj = { creatorPortalUrl: closure_8 };
    obj.footer = intl2.format(closure_0(closure_3[10]).t.oxW30N, obj);
    obj.onLayout = global.onHowItWorksLayoutChange;
    obj.children = jsx(closure_1(closure_3[24]), {});
    tmp2 = jsx(SectionContainer, obj, closure_10.HOW_IT_WORKS);
    closure_0 = tmp2;
    obj1 = { title: null, children: null };
    intl3 = closure_0(closure_3[10]).intl;
    obj1.title = intl3.string(closure_0(closure_3[10]).t["1QHJaW"]);
    obj1.children = jsx(closure_1(closure_3[25]), {});
    tmp3 = jsx(SectionContainer, obj1, closure_10.BENEFITS);
    closure_1 = tmp3;
    sections = undefined;
    if (onboardingMarketing != null) {
      sections = onboardingMarketing.sections;
    }
    if (null == sections) {
      tmp7 = jsxs;
      tmp8 = Fragment;
      obj2 = { children: null };
      items = [, ];
      items[0] = tmp2;
      items[1] = tmp3;
      obj2.children = items;
      tmpResult = jsxs(Fragment, obj2);
    } else {
      tmp5 = Fragment;
      obj3 = { children: null };
      sections1 = onboardingMarketing.sections;
      obj3.children = sections1.map((type) => {
        type = type.type;
        if (constants.HOW_IT_WORKS === type) {
          return closure_0;
        } else if (constants.BENEFITS === type) {
          return closure_1;
        } else if (constants.OTHER_CREATORS === type) {
          let obj = { title: null, children: null };
          const intl = util.intl;
          obj.title = intl.string(util.t["tJp+QV"]);
          obj = { highlightedCreators: type.creators };
          obj.children = closure_2_11(CreatorHighlightSectionDefault, obj);
          return closure_2_11(SectionContainer, obj, constants.OTHER_CREATORS);
        }
      });
      tmpResult = tmp(Fragment, obj3);
    }
    return tmpResult;
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const React6 = fn(15205).CREATOR_REVENUE_PORTAL_URL;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const constants = fn(17682).CreatorMonetizationOnboardingMarketingSection;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let createStyles = { container: { flex: 1 }, contentContainer: { flex: 1, padding: 24 }, heroImage: { resizeMode: "cover", width: "100%" }, subtitle: { marginTop: 8 }, tos: null, startEarningButton: null, startEarningButtonContainer: null, startEarningFabContainer: null, divider: null, sectionTitle: null, sectionFooter: null, statusNoticeContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, marginTop: 10 };
createStyles.tos = createStyles;
createStyles.startEarningButton = { marginTop: 12 };
createStyles.startEarningButtonContainer = { marginTop: 14 };
createStyles.startEarningFabContainer = { marginHorizontal: 24 };
let size = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.divider = size;
createStyles.sectionTitle = { marginTop: 36, marginBottom: 10 };
createStyles.sectionFooter = { marginTop: 36 };
createStyles.statusNoticeContainer = { marginHorizontal: 0, marginTop: 14 };
const value = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx");

export default function GuildSettingsRoleSubscriptionWelcomeView(guild) {
  guild = guild.guild;
  refreshEligibility = undefined;
  let ref;
  let ref1;
  let first;
  noop = undefined;
  const tmp = closure_14();
  let obj = refreshEligibility(ref1[14]);
  const navigation = obj.useNavigation();
  const tmp5 = ref(ref1[27])(guild);
  ({ eligibility, refreshEligibility } = tmp5);
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1, isGuildOwner, eligibilityLoading, eligibilityError } = tmp5);
  let obj1 = refreshEligibility(ref1[28]);
  const creatorMonetizationIneligibleReasons = obj1.useCreatorMonetizationIneligibleReasons(eligibility);
  let obj2 = noop;
  ({ isLoading, creatorMonetizationOnboardingMarketing } = ref(ref1[29])(guild.id));
  const tmp7 = ref(ref1[29])(guild.id);
  [tmp10, tmp11] = first(noop.useState(false), 2);
  ref = noop.useRef(true);
  let obj3 = refreshEligibility(ref1[30]);
  const items = [ref, refreshEligibility];
  const focusEffect = obj3.useFocusEffect(noop.useCallback(() => {
    if (!ref.current) {
      refreshEligibility();
    }
  }, items));
  const effect = noop.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    }
  }, []);
  obj = { type: null, name: null, properties: null };
  const tmp9 = first(noop.useState(false), 2);
  obj.type = refreshEligibility(ref1[32]).ImpressionTypes.PANE;
  obj.name = refreshEligibility(ref1[32]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
  obj.properties = { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons };
  ref(ref1[31])(obj, { disableTrack: null == guild.id || null == eligibility });
  let tmp8Result = tmp8(obj2.useState(false), 2);
  [tmp19, tmp20] = tmp8Result;
  importAll = tmp20;
  ref1 = obj2.useRef(null);
  tmp8Result = tmp8(obj2.useState(), 2);
  first = tmp8Result[0];
  noop = tmp24;
  const items1 = [tmp8Result[1]];
  const items2 = [tmp20, first];
  const callback = obj2.useCallback((nativeEvent) => {
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
      if (!isLoading) {
        if (null != eligibilityError) {
          let obj5 = require("ToastUtils");
          const intl = tmp2(tmp3[10]).intl;
          obj5.presentFailedToast(intl.string(tmp2(tmp3[10]).t.R0RpRX));
          navigation.pop();
        }
        obj = { bottom: true, style: tmp.container, children: null };
        obj1 = { onScroll: tmp26, scrollEventThrottle: 36, children: null };
        obj2 = { style: tmp.container, children: null };
        obj3 = { source: tmp4(tmp3[38]), resizeMethod: "scale", style: tmp.heroImage };
        const items3 = [closure_11(tmp4(tmp3[37]), obj3), ];
        const obj4 = { ref: ref1, style: tmp.contentContainer, collapsable: false, children: null };
        obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp2(tmp3[10]).intl;
        obj5.children = intl2.string(tmp2(tmp3[10]).t.QYqDQ0);
        const items4 = [closure_11(tmp2(tmp3[12]).Text, obj5), , , ];
        const obj6 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
        const intl3 = tmp2(tmp3[10]).intl;
        obj6.children = intl3.string(tmp2(tmp3[10]).t["41wkMc"]);
        items4[1] = closure_11(tmp2(tmp3[12]).Text, obj6);
        if (wasRejectedInV1) {
          const obj7 = { style: tmp.statusNoticeContainer };
          const merged = Object.assign(tmp5);
          let tmp31Result = closure_11(ApplicationStatusNotice, obj7);
        } else {
          const obj8 = { style: tmp.startEarningButtonContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText };
          tmp31Result = closure_11(StartEarningButton, obj8);
        }
        items4[2] = tmp31Result;
        const obj9 = { onboardingMarketing: creatorMonetizationOnboardingMarketing, onHowItWorksLayoutChange: callback };
        items4[3] = closure_11(MarketingSections, obj9);
        obj4.children = items4;
        items3[1] = closure_12(closure_6, obj4);
        obj2.children = items3;
        obj1.children = closure_12(closure_6, obj2);
        const items5 = [closure_11(closure_7, obj1), ];
        if (tmp31Result) {
          tmp31Result = eligibleForMonetization;
        }
        if (tmp31Result) {
          tmp31Result = !wasRejectedInV1;
        }
        if (tmp31Result) {
          const obj10 = { style: tmp.startEarningFabContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText, isFab: true };
          tmp31Result = closure_11(StartEarningButton, obj10);
        }
        items5[1] = tmp31Result;
        obj.children = items5;
        let tmp30Result = closure_12(tmp2(tmp3[36]).SafeAreaPaddingView, obj);
        const tmp4Result = tmp4(tmp3[37]);
      }
      return tmp30Result;
    }
  }
  tmp30Result = closure_11(tmp4(tmp3[34]), {});
  const tmp15 = ref(ref1[31]);
  const tmp16 = null == guild.id || null == eligibility;
};
export { SectionContainer };
export { MarketingSections };