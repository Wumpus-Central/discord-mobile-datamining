// === Module 17681: ApplicationStatusNotice ===

// Module 17681 (ApplicationStatusNotice)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import ErrorBlockDefault from "ErrorBlock" /* 12223 */;
import WarningNoticeDefault from "WarningNotice" /* 17683 */;
import HowItWorksCardDefault from "HowItWorksCard" /* 17694 */;
import EarningPreviewDefault from "EarningPreview" /* 17698 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { CREATOR_REVENUE_PORTAL_URL as closure_8 } from "MAX_SUBSCRIPTION_TIERS" /* 15205 */;
import { GuildSettingsSections } from "ME" /* 1074 */;
import { CreatorMonetizationOnboardingMarketingSection as closure_10 } from "CreatorMonetizationApplicationState" /* 17682 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function ApplicationStatusNotice(arg0) {
  ({ style, resubmissionError, requestRejectedNoticeText, reapplyNoticeText } = arg0);
  ({ resubmittingEnableRequest, createEnableRequest, isApplicationPending } = arg0);
  const tmp = callback3();
  if (null != resubmissionError) {
    let obj = { style: null, children: null };
    const items = [tmp.statusNoticeContainer, style];
    obj[0] = items;
    obj = { children: null };
    obj[0] = resubmissionError.getAnyErrorMessage();
    obj[1] = callback(ErrorBlockDefault, obj);
    return callback(closure_6, obj);
  } else {
    if (isApplicationPending) {
      const intl2 = getSystemLocale.intl;
      requestRejectedNoticeText = intl2.string(getSystemLocale.t.OrkTBn);
    } else if (null == requestRejectedNoticeText) {
      requestRejectedNoticeText = null;
      if (null != reapplyNoticeText) {
        const intl = getSystemLocale.intl;
        requestRejectedNoticeText = reapplyNoticeText;
        const stringResult = intl.string(getSystemLocale.t["YKw/NQ"]);
      }
    }
    let tmp7 = null;
    if (null != requestRejectedNoticeText) {
      obj = { style: null, children: null };
      const items1 = [tmp.statusNoticeContainer, style];
      obj[0] = items1;
      obj1 = { notice: null, ctaLabel: null, onClick: null, submitting: null };
      obj1[0] = requestRejectedNoticeText;
      obj1[1] = stringResult;
      obj1[2] = createEnableRequest;
      obj1[3] = resubmittingEnableRequest;
      obj[1] = callback(WarningNoticeDefault, obj1);
      tmp7 = callback(closure_6, obj);
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
    items[1] = jsx(require("Text").Text, obj1);
    items[2] = children;
    tmp4Result = null != footer;
    if (tmp4Result) {
      obj2 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
      obj2[0] = tmp.sectionFooter;
      obj2[3] = footer;
      tmp4Result = tmp4(require("Text").Text, obj2);
    }
    items[3] = tmp4Result;
    obj[2] = items;
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
  let navigation;
  const tmp = callback3();
  const tmp4 = importDefault(submitAcceptTermsRequest[13])(guildId);
  ({ error, loading, submitAcceptTermsRequest } = tmp4);
  let obj = isTermsAccepted(submitAcceptTermsRequest[14]);
  navigation = obj.useNavigation();
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = React.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = React.useCallback(() => {
    let obj = closure_1_1(submitAcceptTermsRequest[15]);
    obj = {
      eligibility,
      onRequireModeratorMFAClick() {

      }
    };
    return obj.openLazy(isTermsAccepted(submitAcceptTermsRequest[17])(submitAcceptTermsRequest[16], submitAcceptTermsRequest.paths), isTermsAccepted(submitAcceptTermsRequest[18]).ELIGIBILITY_ACTION_SHEET_KEY, obj);
  }, items1);
  obj = {
    style: tmp.tos,
    leading: callback(isTermsAccepted(submitAcceptTermsRequest[19]).FormRow.Checkbox, { selected: isTermsAccepted }),
    label: callback(isTermsAccepted(submitAcceptTermsRequest[12]).Text, { variant: "text-xs/normal", color: "text-default", children: acceptTermsCheckboxText }),
    onPress() {
      return callback(!isTermsAccepted);
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
  obj1 = { style: null, children: null };
  if (eligibleForMonetization) {
    obj1[0] = tmp.startEarningButton;
    const obj2 = { loading: null, disabled: null, text: null, onPress: null };
    obj2[0] = loading;
    let tmp17 = !isTermsAccepted;
    if (isTermsAccepted) {
      tmp17 = !tmp4.canSubmitAcceptance;
    }
    if (!tmp17) {
      tmp17 = !eligibleForMonetization;
    }
    obj2[1] = tmp17;
    const intl2 = tmp5(tmp3[10]).intl;
    obj2[2] = intl2.string(tmp5(tmp3[10]).t.NL5ZNS);
    obj2[3] = callback;
    obj1[1] = tmp9(tmp5(tmp3[20]).Button, obj2);
    const items3 = [tmp9(tmp12, obj1), ];
    let tmp11Result = null != error;
    if (tmp11Result) {
      const obj3 = { children: null };
      const items4 = [tmp9(tmp5(tmp3[21]).Spacer, { size: 12 }), ];
      const obj4 = { children: null };
      obj4[0] = error.getAnyErrorMessage();
      items4[1] = tmp9(tmp2(tmp3[9]), obj4);
      obj3[0] = items4;
      tmp11Result = tmp11(tmp16, obj3);
      const tmp2Result = tmp2(tmp3[9]);
    }
    const obj5 = { children: null };
    items3[1] = tmp11Result;
    obj5[0] = items3;
    tmp11Result = tmp11(tmp16, obj5);
  } else {
    obj1[0] = tmp.startEarningButton;
    const obj6 = { loading: null, text: null, icon: null, pillStyle: null, onPress: null };
    obj6[0] = loading;
    const intl = tmp5(tmp3[10]).intl;
    obj6[1] = intl.string(tmp5(tmp3[10]).t.NL5ZNS);
    const obj7 = { source: null, color: null, size: null };
    obj7[0] = tmp2(tmp3[23]);
    obj7[1] = tmp2(tmp3[8]).unsafe_rawColors.WHITE;
    obj7[2] = tmp5(tmp3[21]).Icon.Sizes.SMALL_20;
    obj6[2] = tmp9(tmp5(tmp3[21]).Icon, obj7);
    obj6[3] = { backgroundColor: "#EB5D30" };
    obj6[4] = callback1;
    obj1[1] = tmp9(tmp5(tmp3[22]).BaseTextButton, obj6);
    tmp11Result = tmp9(tmp12, obj1);
  }
  items2[1] = tmp11Result;
  obj[1] = items2;
  return closure_12(closure_6, obj);
}
class MarketingSections {
  constructor(arg0) {
    onboardingMarketing = global.onboardingMarketing;
    closure_0 = undefined;
    closure_1 = undefined;
    obj = { title: null, footer: null, onLayout: null, children: null };
    tmp = jsx;
    intl = require("getSystemLocale").intl;
    obj[0] = intl.string(require("getSystemLocale").t.R9rNIk);
    intl2 = require("getSystemLocale").intl;
    obj = { creatorPortalUrl: closure_8 };
    obj[1] = intl2.format(require("getSystemLocale").t.oxW30N, obj);
    obj[2] = global.onHowItWorksLayoutChange;
    obj[3] = jsx(require("HowItWorksCard"), {});
    tmp2 = jsx(SectionContainer, obj, closure_10.HOW_IT_WORKS);
    closure_0 = tmp2;
    obj1 = { title: null, children: null };
    intl3 = require("getSystemLocale").intl;
    obj1[0] = intl3.string(require("getSystemLocale").t["1QHJaW"]);
    obj1[1] = jsx(require("EarningPreview"), {});
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
      obj2[0] = items;
      tmpResult = jsxs(Fragment, obj2);
    } else {
      tmp5 = Fragment;
      obj3 = { children: null };
      sections1 = onboardingMarketing.sections;
      obj3[0] = sections1.map((type) => {
        type = type.type;
        if (closure_1_10.HOW_IT_WORKS === type) {
          return callback;
        } else if (tmp.BENEFITS === type) {
          return callback2;
        } else if (tmp.OTHER_CREATORS === type) {
          let obj = { title: null, children: null };
          const intl = callback(closure_1_3[10]).intl;
          obj[0] = intl.string(callback(closure_1_3[10]).t["tJp+QV"]);
          obj = { highlightedCreators: null };
          obj[0] = type.creators;
          obj[1] = closure_1_11(callback2(closure_1_3[26]), obj);
          return closure_1_11(closure_1_16, obj, tmp.OTHER_CREATORS);
        }
      });
      tmpResult = tmp(Fragment, obj3);
    }
    return tmpResult;
  }
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = jsxProd);
createCacheKey = { container: { flex: 1 }, contentContainer: { flex: 1, padding: 24 }, heroImage: { resizeMode: "cover", width: "100%" }, subtitle: { marginTop: 8 }, tos: null, startEarningButton: null, startEarningButtonContainer: null, startEarningFabContainer: null, divider: null, sectionTitle: null, sectionFooter: null, statusNoticeContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderRadius: ThemesDefault.radii.sm, marginTop: 10 };
createCacheKey[4] = createCacheKey;
createCacheKey[5] = { marginTop: 12 };
createCacheKey[6] = { marginTop: 14 };
createCacheKey[7] = { marginHorizontal: 24 };
createCacheKey[8] = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[9] = { marginTop: 36, marginBottom: 10 };
createCacheKey[10] = { marginTop: 36 };
createCacheKey[11] = { marginHorizontal: 0, marginTop: 14 };
let closure_14 = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx");

export default function GuildSettingsRoleSubscriptionWelcomeView(guild) {
  guild = guild.guild;
  refreshEligibility = undefined;
  let ref;
  importAll = undefined;
  let ref1;
  let first;
  let React;
  const tmp = callback3();
  let obj = refreshEligibility(ref1[14]);
  const navigation = obj.useNavigation();
  const tmp5 = ref(ref1[27])(guild);
  ({ eligibility, refreshEligibility } = tmp5);
  ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1, isGuildOwner, eligibilityLoading, eligibilityError } = tmp5);
  obj1 = refreshEligibility(ref1[28]);
  const creatorMonetizationIneligibleReasons = obj1.useCreatorMonetizationIneligibleReasons(eligibility);
  let obj2 = React;
  ({ isLoading, creatorMonetizationOnboardingMarketing } = ref(ref1[29])(guild.id));
  const tmp7 = ref(ref1[29])(guild.id);
  [tmp10, tmp11] = first(React.useState(false), 2);
  ref = React.useRef(true);
  let obj3 = refreshEligibility(ref1[30]);
  const items = [ref, refreshEligibility];
  const focusEffect = obj3.useFocusEffect(React.useCallback(() => {
    if (!ref.current) {
      refreshEligibility();
    }
  }, items));
  const effect = React.useEffect(() => {
    if (ref.current) {
      tmp.current = false;
    }
  }, []);
  obj = { type: null, name: null, properties: null };
  const tmp9 = first(React.useState(false), 2);
  obj[0] = refreshEligibility(ref1[32]).ImpressionTypes.PANE;
  obj[1] = refreshEligibility(ref1[32]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
  obj[2] = { guild_id: guild.id, is_owner: isGuildOwner, is_eligible: eligibleForMonetization, ineligible_reasons: creatorMonetizationIneligibleReasons };
  ref(ref1[31])(obj, { disableTrack: null == guild.id || null == eligibility });
  let tmp8Result = tmp8(obj2.useState(false), 2);
  [tmp19, tmp20] = tmp8Result;
  importAll = tmp20;
  ref1 = obj2.useRef(null);
  tmp8Result = tmp8(obj2.useState(), 2);
  first = tmp8Result[0];
  React = tmp24;
  const items1 = [tmp8Result[1]];
  const items2 = [tmp20, first];
  const callback = obj2.useCallback((nativeEvent) => {
    const y = nativeEvent.nativeEvent.layout.y;
    if (ref1 != null) {
      const current = ref1.current;
      if (current != null) {
        current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
          const diff = arg5 - refreshEligibility(ref1[33]).STATUS_BAR_HEIGHT;
          closure_1_5(closure_0 + (diff - refreshEligibility(ref1[33]).NAV_BAR_HEIGHT));
        });
      }
    }
  }, items1);
  if (!eligibilityLoading) {
    if (null != eligibility) {
      if (!isLoading) {
        if (null != eligibilityError) {
          let obj5 = importAll(tmp3[35]);
          const intl = tmp2(tmp3[10]).intl;
          obj5.presentFailedToast(intl.string(tmp2(tmp3[10]).t.R0RpRX));
          navigation.pop();
        }
        obj = { bottom: true, style: null, children: null };
        obj[1] = tmp.container;
        obj1 = { onScroll: null, scrollEventThrottle: 36, children: null };
        obj1[0] = tmp26;
        obj2 = { style: null, children: null };
        obj2[0] = tmp.container;
        obj3 = { source: null, resizeMethod: "scale", style: null };
        obj3[0] = tmp4(tmp3[38]);
        obj3[2] = tmp.heroImage;
        const items3 = [callback(tmp4(tmp3[37]), obj3), ];
        const obj4 = { ref: null, style: null, collapsable: false, children: null };
        obj4[0] = ref1;
        obj4[1] = tmp.contentContainer;
        obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
        const intl2 = tmp2(tmp3[10]).intl;
        obj5[2] = intl2.string(tmp2(tmp3[10]).t.QYqDQ0);
        const items4 = [callback(tmp2(tmp3[12]).Text, obj5), , , ];
        const obj6 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
        obj6[0] = tmp.subtitle;
        const intl3 = tmp2(tmp3[10]).intl;
        obj6[3] = intl3.string(tmp2(tmp3[10]).t["41wkMc"]);
        items4[1] = callback(tmp2(tmp3[12]).Text, obj6);
        if (wasRejectedInV1) {
          const obj7 = { style: null };
          obj7[0] = tmp.statusNoticeContainer;
          const merged = Object.assign(tmp5);
          let tmp31Result = tmp31(ApplicationStatusNotice, obj7);
        } else {
          const obj8 = { style: null, guildId: null, isTermsAccepted: null, setTermsAccepted: null, eligibleForMonetization: null, eligibility: null, acceptTermsCheckboxText: null };
          obj8[0] = tmp.startEarningButtonContainer;
          obj8[1] = guild.id;
          obj8[2] = tmp10;
          obj8[3] = tmp11;
          obj8[4] = eligibleForMonetization;
          obj8[5] = eligibility;
          obj8[6] = acceptTermsCheckboxText;
          tmp31Result = tmp31(StartEarningButton, obj8);
        }
        items4[2] = tmp31Result;
        const obj9 = { onboardingMarketing: null, onHowItWorksLayoutChange: null };
        obj9[0] = creatorMonetizationOnboardingMarketing;
        obj9[1] = callback;
        items4[3] = callback(MarketingSections, obj9);
        obj4[3] = items4;
        items3[1] = closure_12(closure_6, obj4);
        obj2[1] = items3;
        obj1[2] = closure_12(closure_6, obj2);
        const items5 = [callback(closure_7, obj1), ];
        if (tmp31Result) {
          tmp31Result = eligibleForMonetization;
        }
        if (tmp31Result) {
          tmp31Result = !wasRejectedInV1;
        }
        if (tmp31Result) {
          const obj10 = { style: null, guildId: null, isTermsAccepted: null, setTermsAccepted: null, eligibleForMonetization: null, eligibility: null, acceptTermsCheckboxText: null, isFab: true };
          obj10[0] = tmp.startEarningFabContainer;
          obj10[1] = guild.id;
          obj10[2] = tmp10;
          obj10[3] = tmp11;
          obj10[4] = eligibleForMonetization;
          obj10[5] = eligibility;
          obj10[6] = acceptTermsCheckboxText;
          tmp31Result = tmp31(StartEarningButton, obj10);
        }
        items5[1] = tmp31Result;
        obj[2] = items5;
        let tmp30Result = tmp30(tmp2(tmp3[36]).SafeAreaPaddingView, obj);
        const tmp32 = closure_7;
        const tmp4Result = tmp4(tmp3[37]);
      }
      return tmp30Result;
    }
  }
  tmp30Result = callback(tmp4(tmp3[34]), {});
};
export { SectionContainer };
export { MarketingSections };