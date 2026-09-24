// === Module 18244: GuildSettingsRoleSubscriptionWelcomeView ===

// Module 18244 (GuildSettingsRoleSubscriptionWelcomeView)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import Text_Text from "Text/Text" /* 4825 */;
import NavigatorConstants from "NavigatorConstants" /* 5987 */;
import ErrorBlockDefault from "ErrorBlock" /* 12565 */;
import WarningNoticeDefault from "WarningNotice" /* 18246 */;
import EligibilityActionSheet from "EligibilityActionSheet" /* 18249 */;
import HowItWorksSectionDefault from "HowItWorksSection" /* 18257 */;
import CreatorBenefitsSectionDefault from "CreatorBenefitsSection" /* 18261 */;
import CreatorHighlightSectionDefault from "CreatorHighlightSection" /* 18270 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function ApplicationStatusNotice(arg0) {
  ({ style, resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = arg0);
  ({ resubmittingEnableRequest, createEnableRequest, isApplicationPending } = arg0);
  const tmp = closure_14();
  if (null != resubmissionError) {
    const obj2 = { style: null, children: null };
    const items = [tmp.statusNoticeContainer, style];
    obj2.style = items;
    const obj3 = { children: resubmissionError.getAnyErrorMessage() };
    obj2.children = closure_1_11(ErrorBlockDefault, obj3);
    return closure_1_11(timestampProducer, obj2);
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
      const obj = { style: null, children: null };
      const items1 = [tmp.statusNoticeContainer, style];
      obj.style = items1;
      const obj4 = { notice: requestRejectedNoticeText, ctaLabel: stringResult, onClick: createEnableRequest, submitting: resubmittingEnableRequest };
      obj.children = closure_1_11(WarningNoticeDefault, obj4);
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
    obj1 = { style: tmp.divider };
    tmp2 = jsxs;
    tmp3 = View;
    tmp4 = jsx;
    items = [, , , ];
    items[0] = jsx(View, obj1);
    tmp5 = closure_0;
    tmp6 = closure_3;
    obj5 = { style: tmp.sectionTitle, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: title };
    items[1] = jsx(closure_0(closure_3[12]).Text, obj5);
    items[2] = children;
    tmp4Result = null != footer;
    if (tmp4Result) {
      obj6 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
      obj6.style = tmp.sectionFooter;
      obj6.children = footer;
      tmp4Result = tmp4(tmp5(tmp6[12]).Text, obj6);
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
  const navigation = isTermsAccepted(submitAcceptTermsRequest[14]).useNavigation();
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = noop.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    return obj.openLazy(asyncRequireImpl(18249, dependencyMap.paths), EligibilityActionSheet.ELIGIBILITY_ACTION_SHEET_KEY, {
      eligibility,
      onRequireModeratorMFAClick() {
        navigation.push(constants.SECURITY);
      }
    });
  }, items1);
  let obj = isTermsAccepted(submitAcceptTermsRequest[14]);
  const obj3 = { style, children: null };
  let tmp13 = eligibleForMonetization;
  const obj2 = {
    style: tmp.tos,
    leading: closure_11(isTermsAccepted(submitAcceptTermsRequest[19]).FormRow.Checkbox, { selected: isTermsAccepted }),
    label: closure_11(isTermsAccepted(submitAcceptTermsRequest[12]).Text, { variant: "text-xs/normal", color: "text-default", children: acceptTermsCheckboxText }),
    onPress() {
      return importDefault(!isTermsAccepted);
    }
  };
  if (eligibleForMonetization) {
    tmp13 = true === flag && !isTermsAccepted || true !== flag;
    const tmp14 = true === flag && !isTermsAccepted || true !== flag;
  }
  if (tmp13) {
    tmp13 = tmp10;
  }
  const items2 = [tmp13, ];
  const obj4 = { style: null, children: null };
  if (eligibleForMonetization) {
    obj4.style = tmp.startEarningButton;
    const obj5 = { loading, disabled: null, text: null, onPress: null };
    let tmp17 = !isTermsAccepted;
    if (isTermsAccepted) {
      tmp17 = !tmp4.canSubmitAcceptance;
    }
    if (!tmp17) {
      tmp17 = !eligibleForMonetization;
    }
    obj5.disabled = tmp17;
    const intl2 = tmp5(tmp3[10]).intl;
    obj5.text = intl2.string(tmp5(tmp3[10]).t.NL5ZNS);
    obj5.onPress = callback;
    obj4.children = closure_11(tmp5(tmp3[20]).Button, obj5);
    const items3 = [closure_11(closure_6, obj4), ];
    let tmp11Result = null != error;
    if (tmp11Result) {
      const obj6 = { children: null };
      const items4 = [closure_11(tmp5(tmp3[21]).Spacer, { size: 12 }), ];
      const obj7 = { children: error.getAnyErrorMessage() };
      items4[1] = closure_11(require("ErrorBlock"), obj7);
      obj6.children = items4;
      tmp11Result = closure_12(closure_13, obj6);
      const tmp2Result = require("ErrorBlock");
    }
    const obj8 = { children: null };
    items3[1] = tmp11Result;
    obj8.children = items3;
    let tmp11Result2 = closure_12(closure_13, obj8);
  } else {
    obj4.style = tmp.startEarningButton;
    const obj9 = { loading, text: null, icon: null, pillStyle: null, onPress: null };
    const intl = tmp5(tmp3[10]).intl;
    obj9.text = intl.string(tmp5(tmp3[10]).t.NL5ZNS);
    const obj10 = { source: require("module_9796"), color: require("native").unsafe_rawColors.WHITE, size: tmp5(tmp3[21]).Icon.Sizes.SMALL_20 };
    obj9.icon = closure_11(tmp5(tmp3[21]).Icon, obj10);
    obj9.pillStyle = { backgroundColor: "#EB5D30" };
    obj9.onPress = callback1;
    obj4.children = closure_11(tmp5(tmp3[22]).BaseTextButton, obj9);
    tmp11Result2 = closure_11(closure_6, obj4);
  }
  items2[1] = tmp11Result2;
  obj3.children = items2;
  return closure_12(closure_6, obj3);
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
    obj1 = { creatorPortalUrl: closure_8 };
    obj.footer = intl2.format(closure_0(closure_3[10]).t.oxW30N, obj1);
    obj.onLayout = global.onHowItWorksLayoutChange;
    obj.children = jsx(closure_1(closure_3[24]), {});
    tmp2 = jsx(SectionContainer, obj, closure_10.HOW_IT_WORKS);
    closure_0 = tmp2;
    obj6 = { title: null, children: null };
    intl3 = closure_0(closure_3[10]).intl;
    obj6.title = intl3.string(closure_0(closure_3[10]).t["1QHJaW"]);
    obj6.children = jsx(closure_1(closure_3[25]), {});
    tmp3 = jsx(SectionContainer, obj6, closure_10.BENEFITS);
    closure_1 = tmp3;
    sections = undefined;
    if (onboardingMarketing != null) {
      sections = onboardingMarketing.sections;
    }
    if (null == sections) {
      tmp7 = jsxs;
      tmp8 = Fragment;
      obj7 = { children: null };
      items = [, ];
      items[0] = tmp2;
      items[1] = tmp3;
      obj7.children = items;
      tmpResult = jsxs(Fragment, obj7);
    } else {
      tmp5 = Fragment;
      obj8 = { children: null };
      sections1 = onboardingMarketing.sections;
      obj8.children = sections1.map((type) => {
        type = type.type;
        if (constants.HOW_IT_WORKS === type) {
          return closure_0;
        } else if (constants.BENEFITS === type) {
          return closure_1;
        } else if (constants.OTHER_CREATORS === type) {
          const obj = { title: null, children: null };
          const intl = util.intl;
          obj.title = intl.string(util.t["tJp+QV"]);
          const obj2 = { highlightedCreators: type.creators };
          obj.children = closure_2_11(CreatorHighlightSectionDefault, obj2);
          return closure_2_11(SectionContainer, obj, constants.OTHER_CREATORS);
        }
      });
      tmpResult = tmp(Fragment, obj8);
    }
    return tmpResult;
  }
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const React6 = fn(15554).CREATOR_REVENUE_PORTAL_URL;
const GuildSettingsSections = fn(1074).GuildSettingsSections;
const constants = fn(18245).CreatorMonetizationOnboardingMarketingSection;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flex: 1 }, contentContainer: { flex: 1, padding: 24 }, heroImage: { resizeMode: "cover", width: "100%" }, subtitle: { marginTop: 8 }, tos: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderRadius: nativeDefault.radii.sm, marginTop: 10 }, startEarningButton: { marginTop: 12 }, startEarningButtonContainer: { marginTop: 14 }, startEarningFabContainer: { marginHorizontal: 24 }, divider: null, sectionTitle: null, sectionFooter: null, statusNoticeContainer: null };
let size = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.divider = size;
obj2.sectionTitle = { marginTop: 36, marginBottom: 10 };
obj2.sectionFooter = { marginTop: 36 };
obj2.statusNoticeContainer = { marginHorizontal: 0, marginTop: 14 };
const value = createStyles.createStyles(obj2);
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
  const navigation = refreshEligibility(ref1[14]).useNavigation();
  const tmp5 = ref(ref1[27])(guild);
  ({ eligibility, refreshEligibility } = tmp5);
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1, isGuildOwner, eligibilityLoading, eligibilityError } = tmp5);
  const obj = refreshEligibility(ref1[14]);
  const creatorMonetizationIneligibleReasons = refreshEligibility(ref1[28]).useCreatorMonetizationIneligibleReasons(eligibility);
  const obj2 = refreshEligibility(ref1[28]);
  ({ isLoading, creatorMonetizationOnboardingMarketing } = ref(ref1[29])(guild.id));
  const tmp7 = ref(ref1[29])(guild.id);
  [tmp10, tmp11] = first(noop.useState(false), 2);
  ref = noop.useRef(true);
  const tmp9 = first(noop.useState(false), 2);
  const items = [ref, refreshEligibility];
  const focusEffect = refreshEligibility(ref1[30]).useFocusEffect(noop.useCallback(() => {
    if (!ref.current) {
      refreshEligibility();
    }
  }, items));
  const effect = noop.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    }
  }, []);
  const obj5 = { type: null, name: null, properties: null };
  const obj4 = refreshEligibility(ref1[30]);
  obj5.type = refreshEligibility(ref1[32]).ImpressionTypes.PANE;
  obj5.name = refreshEligibility(ref1[32]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
  obj5.properties = { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons };
  ref(ref1[31])(obj5, { disableTrack: null == guild.id || null == eligibility });
  const tmp15 = ref(ref1[31]);
  const tmp16 = null == guild.id || null == eligibility;
  [tmp19, tmp20] = first(noop.useState(false), 2);
  importAll = tmp20;
  ref1 = obj3.useRef(null);
  const tmp8Result2 = first(noop.useState(), 2);
  first = tmp8Result2[0];
  noop = tmp24;
  const items1 = [tmp8Result2[1]];
  const items2 = [tmp20, first];
  const callback = obj3.useCallback((nativeEvent) => {
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
          const intl = tmp2(tmp3[10]).intl;
          require("ToastUtils").presentFailedToast(intl.string(tmp2(tmp3[10]).t.R0RpRX));
          navigation.pop();
          const obj6 = require("ToastUtils");
        }
        const obj7 = { bottom: true, style: tmp.container, children: null };
        const obj8 = { onScroll: tmp26, scrollEventThrottle: 36, children: null };
        const obj9 = { style: tmp.container, children: null };
        const obj10 = { source: tmp4(tmp3[38]), resizeMethod: "scale", style: tmp.heroImage };
        const items3 = [closure_11(tmp4(tmp3[37]), obj10), ];
        const obj11 = { ref: ref1, style: tmp.contentContainer, collapsable: false, children: null };
        const obj12 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp2(tmp3[10]).intl;
        obj12.children = intl2.string(tmp2(tmp3[10]).t.QYqDQ0);
        const items4 = [closure_11(tmp2(tmp3[12]).Text, obj12), , , ];
        const obj13 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
        const intl3 = tmp2(tmp3[10]).intl;
        obj13.children = intl3.string(tmp2(tmp3[10]).t["41wkMc"]);
        items4[1] = closure_11(tmp2(tmp3[12]).Text, obj13);
        if (wasRejectedInV1) {
          const obj14 = { style: tmp.statusNoticeContainer };
          const merged = Object.assign(tmp5);
          let tmp31Result = closure_11(ApplicationStatusNotice, obj14);
        } else {
          const obj15 = { style: tmp.startEarningButtonContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText };
          tmp31Result = closure_11(StartEarningButton, obj15);
        }
        items4[2] = tmp31Result;
        const obj16 = { onboardingMarketing: creatorMonetizationOnboardingMarketing, onHowItWorksLayoutChange: callback };
        items4[3] = closure_11(MarketingSections, obj16);
        obj11.children = items4;
        items3[1] = closure_12(closure_6, obj11);
        obj9.children = items3;
        obj8.children = closure_12(closure_6, obj9);
        const items5 = [closure_11(closure_7, obj8), ];
        if (tmp31Result2) {
          tmp31Result2 = eligibleForMonetization;
        }
        if (tmp31Result2) {
          tmp31Result2 = !wasRejectedInV1;
        }
        if (tmp31Result2) {
          const obj17 = { style: tmp.startEarningFabContainer, guildId: guild.id, isTermsAccepted: tmp10, setTermsAccepted: tmp11, eligibleForMonetization, eligibility, acceptTermsCheckboxText, isFab: true };
          tmp31Result2 = closure_11(StartEarningButton, obj17);
        }
        items5[1] = tmp31Result2;
        obj7.children = items5;
        let tmp30Result = closure_12(tmp2(tmp3[36]).SafeAreaPaddingView, obj7);
        const tmp4Result = tmp4(tmp3[37]);
      }
      return tmp30Result;
    }
  }
  tmp30Result = closure_11(tmp4(tmp3[34]), {});
  const tmp8Result = first(noop.useState(false), 2);
};
export { SectionContainer };
export { MarketingSections };