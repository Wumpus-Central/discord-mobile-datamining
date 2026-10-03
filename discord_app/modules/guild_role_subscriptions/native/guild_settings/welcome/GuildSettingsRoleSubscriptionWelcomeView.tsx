// discord_app/modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01987_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import NavigatorConstants from "../../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import ErrorBlockDefault from "../../components/ErrorBlock.tsx";
import WarningNoticeDefault from "../../components/WarningNotice.tsx";
import EligibilityActionSheet from "EligibilityActionSheet.tsx";
import HowItWorksSectionDefault from "HowItWorksSection.tsx";
import CreatorBenefitsSectionDefault from "CreatorBenefitsSection.tsx";
import CreatorHighlightSectionDefault from "CreatorHighlightSection.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
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
  const navigation = isTermsAccepted(submitAcceptTermsRequest[16]).useNavigation();
  const items = [submitAcceptTermsRequest];
  const items1 = [eligibility, navigation];
  const callback = noop.useCallback(() => submitAcceptTermsRequest(), items);
  const callback1 = noop.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    return obj.openLazy(
      asyncRequireImpl(17859, dependencyMap.paths),
      EligibilityActionSheet.ELIGIBILITY_ACTION_SHEET_KEY,
      {
        eligibility,
        onRequireModeratorMFAClick() {
          navigation.push(constants.SECURITY);
        },
      },
    );
  }, items1);
  let obj = isTermsAccepted(submitAcceptTermsRequest[16]);
  const obj3 = { style, children: null };
  let tmp13 = eligibleForMonetization;
  const obj2 = {
    style: tmp.tos,
    leading: closure_11(isTermsAccepted(submitAcceptTermsRequest[21]).FormRow.Checkbox, { selected: isTermsAccepted }),
    label: closure_11(isTermsAccepted(submitAcceptTermsRequest[14]).Text, {
      variant: "text-xs/normal",
      color: "text-default",
      children: acceptTermsCheckboxText,
    }),
    onPress() {
      return importDefault(!isTermsAccepted);
    },
  };
  if (eligibleForMonetization) {
    tmp13 = (true === flag && !isTermsAccepted) || true !== flag;
    const tmp14 = (true === flag && !isTermsAccepted) || true !== flag;
  }
  if (tmp13) {
    tmp13 = tmp10;
  }
  const items2 = [tmp13];
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
    const intl2 = tmp5(tmp3[12]).intl;
    obj5.text = intl2.string(tmp5(tmp3[12]).t.NL5ZNS);
    obj5.onPress = callback;
    obj4.children = closure_11(tmp5(tmp3[22]).Button, obj5);
    const items3 = [closure_11(closure_6, obj4)];
    let tmp11Result = null != error;
    if (tmp11Result) {
      const obj6 = { children: null };
      const items4 = [closure_11(tmp5(tmp3[23]).Spacer, { size: 12 })];
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
    const intl = tmp5(tmp3[12]).intl;
    obj9.text = intl.string(tmp5(tmp3[12]).t.NL5ZNS);
    const obj10 = {
      source: require("../../../../../../_runtime/metro/04808__.js"),
      color: require("native").unsafe_rawColors.WHITE,
      size: tmp5(tmp3[23]).Icon.Sizes.SMALL_20,
    };
    obj9.icon = closure_11(tmp5(tmp3[23]).Icon, obj10);
    obj9.pillStyle = { backgroundColor: "#EB5D30" };
    obj9.onPress = callback1;
    obj4.children = closure_11(tmp5(tmp3[24]).BaseTextButton, obj9);
    tmp11Result2 = closure_11(closure_6, obj4);
  }
  items2[1] = tmp11Result2;
  obj3.children = items2;
  return closure_12(closure_6, obj3);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const creatorPortalUrl = fn(15019).CREATOR_REVENUE_PORTAL_URL;
const GuildSettingsSections = fn(1085).GuildSettingsSections;
const constants = fn(17855).CreatorMonetizationOnboardingMarketingSection;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { flex: 1 },
  contentContainer: { flex: 1, padding: 24 },
  heroImage: { resizeMode: "cover", width: "100%" },
  subtitle: { marginTop: 8 },
  tos: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    borderRadius: nativeDefault.radii.sm,
    marginTop: 10,
  },
  startEarningButton: { marginTop: 12 },
  startEarningButtonContainer: { marginTop: 14 },
  startEarningFabContainer: { marginHorizontal: 24 },
  divider: null,
  sectionTitle: null,
  sectionFooter: null,
  statusNoticeContainer: null,
};
let size = { width: "100%", height: 0.8, marginTop: 36, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.divider = size;
obj2.sectionTitle = { marginTop: 36, marginBottom: 10 };
obj2.sectionFooter = { marginTop: 36 };
obj2.statusNoticeContainer = { marginHorizontal: 0, marginTop: 14 };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isApplicationPending) => {
      const cResult = c.c(19);
      ({
        style,
        resubmittingEnableRequest,
        resubmissionError,
        createEnableRequest,
        requestRejectedNoticeText,
        reapplyNoticeText,
      } = isApplicationPending);
      const tmp4 = closure_14();
      if (null != resubmissionError) {
        if (cResult[0] === style) {
          if (cResult[1] === tmp4.statusNoticeContainer) {
            let tmp18 = cResult[2];
          }
          if (cResult[3] !== resubmissionError) {
            const anyErrorMessage = resubmissionError.getAnyErrorMessage();
            cResult[3] = resubmissionError;
            cResult[4] = anyErrorMessage;
            let tmp19 = anyErrorMessage;
          } else {
            tmp19 = cResult[4];
          }
          if (cResult[5] !== tmp19) {
            const obj2 = { children: tmp19 };
            const tmp24 = closure_1_11(ErrorBlockDefault, obj2);
            cResult[5] = tmp19;
            cResult[6] = tmp24;
            let tmp21 = tmp24;
          } else {
            tmp21 = cResult[6];
          }
          if (cResult[7] === tmp18) {
            if (cResult[8] === tmp21) {
              let tmp25 = cResult[9];
            }
            return tmp25;
          }
          const obj3 = { style: tmp18, children: tmp21 };
          const tmp28 = closure_1_11(timestampProducer, obj3);
          cResult[7] = tmp18;
          cResult[8] = tmp21;
          cResult[9] = tmp28;
          tmp25 = tmp28;
        }
        const items = [tmp4.statusNoticeContainer, style];
        cResult[0] = style;
        cResult[1] = tmp4.statusNoticeContainer;
        cResult[2] = items;
        tmp18 = items;
      } else if (isApplicationPending.isApplicationPending) {
        const _Symbol2 = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult = intl2.string(util.t.OrkTBn);
          cResult[10] = stringResult;
        }
      } else {
        let tmp5;
        if (null == requestRejectedNoticeText) {
          requestRejectedNoticeText = null;
          if (null != reapplyNoticeText) {
            const _Symbol = Symbol;
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = util.intl;
              const stringResult1 = intl.string(util.t["YKw/NQ"]);
              cResult[11] = stringResult1;
              let tmp7 = stringResult1;
            } else {
              tmp7 = cResult[11];
            }
            tmp5 = tmp7;
            requestRejectedNoticeText = reapplyNoticeText;
          }
        }
        if (cResult[12] === createEnableRequest) {
          if (cResult[13] === tmp5) {
            if (cResult[14] === requestRejectedNoticeText) {
              if (cResult[15] === resubmittingEnableRequest) {
                if (cResult[16] === style) {
                  if (cResult[17] === tmp4) {
                    let tmp13 = cResult[18];
                  }
                  return tmp13;
                }
              }
            }
          }
        }
        let tmp14 = null;
        if (null != requestRejectedNoticeText) {
          const obj4 = { style: null, children: null };
          const items1 = [tmp4.statusNoticeContainer, style];
          obj4.style = items1;
          const obj5 = {
            notice: requestRejectedNoticeText,
            ctaLabel: tmp5,
            onClick: createEnableRequest,
            submitting: resubmittingEnableRequest,
          };
          obj4.children = closure_1_11(WarningNoticeDefault, obj5);
          tmp14 = closure_1_11(timestampProducer, obj4);
        }
        cResult[12] = createEnableRequest;
        cResult[13] = tmp5;
        cResult[14] = requestRejectedNoticeText;
        cResult[15] = resubmittingEnableRequest;
        cResult[16] = style;
        cResult[17] = tmp4;
        cResult[18] = tmp14;
        tmp13 = tmp14;
      }
    }
  : (arg0) => {
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
          const obj4 = {
            notice: requestRejectedNoticeText,
            ctaLabel: stringResult,
            onClick: createEnableRequest,
            submitting: resubmittingEnableRequest,
          };
          obj.children = closure_1_11(WarningNoticeDefault, obj4);
          tmp7 = closure_1_11(timestampProducer, obj);
        }
        return tmp7;
      }
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(15);
      ({ title, children, footer, onLayout } = arg0);
      const tmp4 = closure_14();
      if (cResult[0] !== tmp4.divider) {
        const obj2 = { style: tmp4.divider };
        const tmp8 = closure_1_11(timestampProducer, obj2);
        cResult[0] = tmp4.divider;
        cResult[1] = tmp8;
        let tmp5 = tmp8;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.sectionTitle) {
        if (cResult[3] === title) {
          let tmp9 = cResult[4];
        }
        if (cResult[5] === footer) {
          if (cResult[6] === tmp4.sectionFooter) {
            let tmp11 = cResult[7];
          }
          if (cResult[8] === children) {
            if (cResult[9] === onLayout) {
              if (cResult[10] === tmp4.container) {
                if (cResult[11] === tmp5) {
                  if (cResult[12] === tmp9) {
                    if (cResult[13] === tmp11) {
                      let tmp15 = cResult[14];
                    }
                    return tmp15;
                  }
                }
              }
            }
          }
          const obj3 = { onLayout, style: tmp4.container, children: null };
          const items = [tmp5, tmp9, children, tmp11];
          obj3.children = items;
          const tmp18 = __initData(timestampProducer, obj3);
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
          const obj4 = {
            style: tmp4.sectionFooter,
            variant: "text-sm/normal",
            color: "text-default",
            children: footer,
          };
          tmp13 = closure_1_11(Text_Text.Text, obj4);
        }
        cResult[5] = footer;
        cResult[6] = tmp4.sectionFooter;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
      const tmp10 = closure_1_11(Text_Text.Text, {
        style: tmp4.sectionTitle,
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: title,
      });
      cResult[2] = tmp4.sectionTitle;
      cResult[3] = title;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj5 = {
        style: tmp4.sectionTitle,
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: title,
      };
    }
  : (footer) => {
      footer = footer.footer;
      ({ title, children, onLayout } = footer);
      const tmp = closure_14();
      const obj = { onLayout, style: tmp.container, children: null };
      const items = [
        closure_1_11(timestampProducer, { style: tmp.divider }),
        closure_1_11(Text_Text.Text, {
          style: tmp.sectionTitle,
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
        children,
      ];
      let tmp4Result = null != footer;
      if (tmp4Result) {
        const obj4 = { style: tmp.sectionFooter, variant: "text-sm/normal", color: "text-default", children: footer };
        tmp4Result = closure_1_11(Text_Text.Text, obj4);
      }
      items[3] = tmp4Result;
      obj.children = items;
      return __initData(timestampProducer, obj);
    };
let closure_16 = tmp4;
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = require("c").c(16);
      ({ onboardingMarketing, onHowItWorksLayoutChange } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.R9rNIk);
        const intl2 = tmp(1126).intl;
        let obj2 = { creatorPortalUrl };
        const formatResult = intl2.format(tmp(1126).t.oxW30N, obj2);
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
        let tmp9 = tmp12;
      } else {
        tmp9 = cResult[2];
      }
      if (cResult[3] !== onHowItWorksLayoutChange) {
        const obj3 = { title: tmp4, footer: tmp5, onLayout: onHowItWorksLayoutChange, children: tmp9 };
        const tmp17 = closure_11(closure_16, obj3, constants.HOW_IT_WORKS);
        cResult[3] = onHowItWorksLayoutChange;
        cResult[4] = tmp17;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[4];
      }
      _require = tmp13;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult1 = intl3.string(tmp(1126).t["1QHJaW"]);
        cResult[5] = stringResult1;
        let tmp18 = stringResult1;
      } else {
        tmp18 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { title: tmp18, children: closure_11(CreatorBenefitsSectionDefault, {}) };
        const tmp25 = closure_11(closure_16, obj4, constants.BENEFITS);
        cResult[6] = tmp25;
        let tmp20 = tmp25;
      } else {
        tmp20 = cResult[6];
      }
      importDefault = tmp20;
      let sections;
      if (onboardingMarketing != null) {
        sections = onboardingMarketing.sections;
      }
      if (null == sections) {
        if (cResult[7] !== tmp13) {
          const obj5 = { children: null };
          const items = [tmp13, tmp20];
          obj5.children = items;
          const tmp38 = closure_12(closure_13, obj5);
          cResult[7] = tmp13;
          cResult[8] = tmp38;
          let tmp35 = tmp38;
        } else {
          tmp35 = cResult[8];
        }
        return tmp35;
      } else {
        if (cResult[9] === tmp13) {
          if (cResult[10] === onboardingMarketing.sections) {
            if (cResult[14] !== cResult[11]) {
              const obj6 = { children: tmp27 };
              const tmp34 = closure_11(closure_13, obj6);
              cResult[14] = tmp27;
              cResult[15] = tmp34;
              let tmp31 = tmp34;
            } else {
              tmp31 = cResult[15];
            }
            return tmp31;
          }
        }
        if (cResult[12] !== tmp13) {
          const fn = function x(type) {
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
              return closure_2_11(closure_16, obj, constants.OTHER_CREATORS);
            }
          };
          cResult[12] = tmp13;
          cResult[13] = fn;
          let tmp28 = fn;
        } else {
          tmp28 = cResult[13];
        }
        const sections1 = onboardingMarketing.sections;
        const mapped = sections1.map(tmp28);
        cResult[9] = tmp13;
        onboardingMarketing = onboardingMarketing.sections;
        cResult[10] = onboardingMarketing;
        cResult[11] = mapped;
      }
      let obj = require("c");
    }
  : (onboardingMarketing) => {
      onboardingMarketing = onboardingMarketing.onboardingMarketing;
      _require = undefined;
      let obj = { title: null, footer: null, onLayout: null, children: null };
      let intl = require("util").intl;
      obj.title = intl.string(require("util").t.R9rNIk);
      const intl2 = require("util").intl;
      obj.footer = intl2.format(require("util").t.oxW30N, { creatorPortalUrl });
      obj.onLayout = onboardingMarketing.onHowItWorksLayoutChange;
      obj.children = closure_11(HowItWorksSectionDefault, {});
      const tmp2 = closure_11(closure_16, obj, constants.HOW_IT_WORKS);
      _require = tmp2;
      const obj3 = { title: null, children: null };
      const intl3 = require("util").intl;
      obj3.title = intl3.string(require("util").t["1QHJaW"]);
      obj3.children = closure_11(CreatorBenefitsSectionDefault, {});
      const tmp3 = closure_11(closure_16, obj3, constants.BENEFITS);
      importDefault = tmp3;
      let sections;
      if (onboardingMarketing != null) {
        sections = onboardingMarketing.sections;
      }
      if (null == sections) {
        const obj4 = { children: null };
        const items = [tmp2, tmp3];
        obj4.children = items;
        let tmpResult = closure_12(closure_13, obj4);
      } else {
        const obj5 = { children: null };
        const sections1 = onboardingMarketing.sections;
        obj5.children = sections1.map((type) => {
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
            return closure_2_11(closure_16, obj, constants.OTHER_CREATORS);
          }
        });
        tmpResult = closure_11(closure_13, obj5);
      }
      return tmpResult;
    };
let closure_18 = tmp5;
ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderRadius: nativeDefault.radii.sm,
  marginTop: 10,
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/welcome/GuildSettingsRoleSubscriptionWelcomeView.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      const cResult = refreshEligibility(ref[10]).c(58);
      guild = guild.guild;
      closure_14();
      const obj = refreshEligibility(ref[10]);
      const navigation = refreshEligibility(ref[16]).useNavigation();
      const tmp7 = require("useOnboardingMonetizationEnableFlow")(guild);
      ({ isGuildOwner, eligibility, refreshEligibility } = tmp7);
      ({ eligibleForMonetization, acceptTermsCheckboxText, wasRejectedInV1, eligibilityLoading, eligibilityError } =
        tmp7);
      const obj2 = refreshEligibility(ref[16]);
      const creatorMonetizationIneligibleReasons = refreshEligibility(ref[30]).useCreatorMonetizationIneligibleReasons(
        eligibility,
      );
      require("useCreatorMonetizationOnboardingMarketing")(guild.id);
      const obj3 = refreshEligibility(ref[30]);
      [r10045, r10046] = first(noop.useState(false), 2);
      importDefault = noop.useRef(true);
      if (cResult[0] !== refreshEligibility) {
        const fn = function c() {
          if (!ref.current) {
            refreshEligibility();
          }
        };
        cResult[0] = refreshEligibility;
        cResult[1] = fn;
        let tmp12 = fn;
      } else {
        tmp12 = cResult[1];
      }
      const tmp11 = first(noop.useState(false), 2);
      const focusEffect = refreshEligibility(ref[32]).useFocusEffect(tmp12);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          if (ref.current) {
            tmp.current = false;
          }
        };
        const items = [];
        cResult[2] = fn2;
        cResult[3] = items;
        let tmp15 = items;
        let tmp14 = fn2;
      } else {
        tmp14 = cResult[2];
        tmp15 = cResult[3];
      }
      const effect = obj4.useEffect(tmp14, tmp15);
      if (cResult[4] === eligibleForMonetization) {
        if (cResult[5] === guild.id) {
          if (cResult[6] === creatorMonetizationIneligibleReasons) {
            if (cResult[7] === isGuildOwner) {
              let tmp17 = cResult[8];
            }
            if (cResult[9] !== (null == guild.id || null == eligibility)) {
              const obj5 = { disableTrack: tmp19 };
              cResult[9] = tmp19;
              cResult[10] = obj5;
              let tmp20 = obj5;
            } else {
              tmp20 = cResult[10];
            }
            tmp6(tmp2[34])(tmp17, tmp20);
            [r10109, importAll] = tmp10(obj4.useState(false), 2);
            ref = obj4.useRef(null);
            const tmp10Result2 = tmp10(obj4.useState(), 2);
            first = tmp10Result2[0];
            noop = tmp10Result2[1];
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
              const tmp30 = closure_11(tmp6(tmp2[36]), {});
              cResult[14] = tmp30;
              const tmp29 = tmp30;
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
      const obj6 = {
        type: refreshEligibility(ref[33]).ImpressionTypes.PANE,
        name: refreshEligibility(ref[33]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING,
        properties: {
          guild_id: guild.id,
          is_owner: isGuildOwner,
          is_eligible: eligibleForMonetization,
          ineligible_reasons: creatorMonetizationIneligibleReasons,
        },
      };
      cResult[4] = eligibleForMonetization;
      cResult[5] = guild.id;
      cResult[6] = creatorMonetizationIneligibleReasons;
      cResult[7] = isGuildOwner;
      cResult[8] = obj6;
      tmp17 = obj6;
      const tmpResult = refreshEligibility(ref[32]);
    }
  : (guild) => {
      guild = guild.guild;
      refreshEligibility = undefined;
      let ref;
      let ref1;
      let first;
      noop = undefined;
      const tmp = closure_14();
      const navigation = refreshEligibility(ref1[16]).useNavigation();
      const tmp5 = ref(ref1[29])(guild);
      ({ eligibility, refreshEligibility } = tmp5);
      ({
        eligibleForMonetization,
        acceptTermsCheckboxText,
        wasRejectedInV1,
        isGuildOwner,
        eligibilityLoading,
        eligibilityError,
      } = tmp5);
      const obj = refreshEligibility(ref1[16]);
      const creatorMonetizationIneligibleReasons = refreshEligibility(ref1[30]).useCreatorMonetizationIneligibleReasons(
        eligibility,
      );
      const obj2 = refreshEligibility(ref1[30]);
      ({ isLoading, creatorMonetizationOnboardingMarketing } = ref(ref1[31])(guild.id));
      const tmp7 = ref(ref1[31])(guild.id);
      [tmp10, tmp11] = first(noop.useState(false), 2);
      ref = noop.useRef(true);
      const tmp9 = first(noop.useState(false), 2);
      const items = [ref, refreshEligibility];
      const focusEffect = refreshEligibility(ref1[32]).useFocusEffect(
        noop.useCallback(() => {
          if (!ref.current) {
            refreshEligibility();
          }
        }, items),
      );
      const effect = noop.useEffect(() => {
        if (ref.current) {
          tmp.current = false;
        }
      }, []);
      const obj5 = { type: null, name: null, properties: null };
      const obj4 = refreshEligibility(ref1[32]);
      obj5.type = refreshEligibility(ref1[33]).ImpressionTypes.PANE;
      obj5.name = refreshEligibility(ref1[33]).ImpressionNames.ENABLE_CREATOR_MONETIZATION_ACCEPT_TERMS_LANDING;
      obj5.properties = {
        guild_id: guild.id,
        is_owner: isGuildOwner,
        is_eligible: eligibleForMonetization,
        ineligible_reasons: creatorMonetizationIneligibleReasons,
      };
      ref(ref1[34])(obj5, { disableTrack: null == guild.id || null == eligibility });
      const tmp15 = ref(ref1[34]);
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
              const intl = tmp2(tmp3[12]).intl;
              require("ToastUtils").presentFailedToast(intl.string(tmp2(tmp3[12]).t.R0RpRX));
              navigation.pop();
              const obj6 = require("ToastUtils");
            }
            const obj7 = { bottom: true, style: tmp.container, children: null };
            const obj8 = { onScroll: tmp26, scrollEventThrottle: 36, children: null };
            const obj9 = { style: tmp.container, children: null };
            const obj10 = { source: tmp4(tmp3[39]), resizeMethod: "scale", style: tmp.heroImage };
            const items3 = [closure_11(tmp4(tmp3[38]), obj10)];
            const obj11 = { ref: ref1, style: tmp.contentContainer, collapsable: false, children: null };
            const obj12 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
            const intl2 = tmp2(tmp3[12]).intl;
            obj12.children = intl2.string(tmp2(tmp3[12]).t.QYqDQ0);
            const items4 = [closure_11(tmp2(tmp3[14]).Text, obj12), , ,];
            const obj13 = { style: tmp.subtitle, variant: "text-sm/normal", color: "text-default", children: null };
            const intl3 = tmp2(tmp3[12]).intl;
            obj13.children = intl3.string(tmp2(tmp3[12]).t["41wkMc"]);
            items4[1] = closure_11(tmp2(tmp3[14]).Text, obj13);
            if (wasRejectedInV1) {
              const obj14 = { style: tmp.statusNoticeContainer };
              const merged = Object.assign(tmp5);
              let tmp31Result = closure_11(closure_15, obj14);
            } else {
              const obj15 = {
                style: tmp.startEarningButtonContainer,
                guildId: guild.id,
                isTermsAccepted: tmp10,
                setTermsAccepted: tmp11,
                eligibleForMonetization,
                eligibility,
                acceptTermsCheckboxText,
              };
              tmp31Result = closure_11(StartEarningButton, obj15);
            }
            items4[2] = tmp31Result;
            const obj16 = {
              onboardingMarketing: creatorMonetizationOnboardingMarketing,
              onHowItWorksLayoutChange: callback,
            };
            items4[3] = closure_11(closure_18, obj16);
            obj11.children = items4;
            items3[1] = closure_12(closure_6, obj11);
            obj9.children = items3;
            obj8.children = closure_12(closure_6, obj9);
            const items5 = [closure_11(closure_7, obj8)];
            if (tmp31Result2) {
              tmp31Result2 = eligibleForMonetization;
            }
            if (tmp31Result2) {
              tmp31Result2 = !wasRejectedInV1;
            }
            if (tmp31Result2) {
              const obj17 = {
                style: tmp.startEarningFabContainer,
                guildId: guild.id,
                isTermsAccepted: tmp10,
                setTermsAccepted: tmp11,
                eligibleForMonetization,
                eligibility,
                acceptTermsCheckboxText,
                isFab: true,
              };
              tmp31Result2 = closure_11(StartEarningButton, obj17);
            }
            items5[1] = tmp31Result2;
            obj7.children = items5;
            let tmp30Result = closure_12(tmp2(tmp3[40]).SafeAreaPaddingView, obj7);
            const tmp4Result = tmp4(tmp3[38]);
          }
          return tmp30Result;
        }
      }
      tmp30Result = closure_11(tmp4(tmp3[36]), {});
      const tmp8Result = first(noop.useState(false), 2);
    };
export const SectionContainer = tmp4;
export const MarketingSections = tmp5;
