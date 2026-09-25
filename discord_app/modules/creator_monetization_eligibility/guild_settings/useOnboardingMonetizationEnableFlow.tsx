// === Module 17504: useOnboardingMonetizationEnableFlow ===

// Module 17504 (useOnboardingMonetizationEnableFlow)
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

const require = fn;
const isGuildOwner = fn(2062).isGuildOwner;
const Constants = fn(1074);
({ GuildFeatures: metroRequire, HelpdeskArticles: closure_7, MarketingURLs: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx");

export default function useOnboardingMonetizationEnableFlow(features) {
  _require = features;
  let isExpeditedOnboardingGuild = require("CreatorMonetizationEligibilityExperimentUtils").useIsExpeditedOnboardingGuild(features);
  if (features != null) {
    features = features.features;
    const hasItem = features.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
  }
  if (features != null) {
    const features2 = features.features;
    const hasItem1 = features2.has(constants.CREATOR_MONETIZABLE);
  }
  const obj = require("CreatorMonetizationEligibilityExperimentUtils");
  const items = [UserStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = isGuildOwner(tmp2, tmp);
    }
    return tmp3;
  });
  let id;
  const tmpResult = require("useStateFromStores");
  if (features != null) {
    id = features.id;
  }
  const tmp10 = refresh(17505);
  ({ submittedRequest, error, loading, createEnableRequest } = refresh(17505)(id));
  let id1;
  const tmp10Result = refresh(17505)(id);
  if (features != null) {
    id1 = features.id;
  }
  const tmp9ResultResult = refresh(17506)(id1);
  refresh = tmp9ResultResult.refresh;
  ({ eligibility, loading: loading2, error: error2 } = tmp9ResultResult);
  const tmp9Result = refresh(17506);
  ({ isApplicationRejected, requestCooldownDuration } = refresh(17507)(eligibility));
  let hasItem2;
  if (features != null) {
    const features3 = features.features;
    hasItem2 = features3.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
  }
  let tmp19 = true === hasItem2;
  if (!tmp19) {
    let hasItem3;
    if (features != null) {
      const features4 = features.features;
      hasItem3 = features4.has(constants.CREATOR_MONETIZABLE_DISABLED);
    }
    tmp19 = true === hasItem3;
  }
  const tmp16 = refresh(17507)(eligibility);
  let id2;
  if (features != null) {
    id2 = features.id;
  }
  let tmp23 = submittedRequest;
  if (!submittedRequest) {
    let isApplicationPending;
    if (eligibility != null) {
      isApplicationPending = eligibility.isApplicationPending;
    }
    tmp23 = true === isApplicationPending;
  }
  let canApply;
  if (eligibility != null) {
    canApply = eligibility.canApply;
  }
  const intl = tmp(1115).intl;
  const obj2 = { faqUrl: null };
  const tmpResult3 = require("CreatorMonetizationRestrictionsHooks");
  obj2.faqUrl = refresh(2110).getArticleURL(constants2.CREATOR_FAQ);
  const tmp9Result3 = refresh(2110);
  if (isApplicationRejected) {
    if (tmpResult3.useIsMonetizationReapplicationDisabled(id2).isMonetizationReapplicationDisabled) {
      if (true === hasItem) {
        const intl4 = tmp(1115).intl;
        const obj3 = { communityGuidelineUrl: constants3.GUIDELINES };
        let formatResult1 = intl4.format(tmp(1115).t["0o1Q+t"], obj3);
      } else {
        const intl3 = tmp(1115).intl;
        const obj4 = { communityGuidelineUrl: constants3.GUIDELINES };
        formatResult1 = intl3.format(tmp(1115).t.b6h59n, obj4);
      }
    }
  }
  let tmp28 = isApplicationRejected;
  if (isApplicationRejected) {
    tmp28 = null != requestCooldownDuration;
  }
  let formatResult2;
  if (tmp28) {
    const intl2 = tmp(1115).intl;
    const obj5 = { requestCooldownDuration, creatorRevenuePolicyUrl: tmp9(2110).getArticleURL(constants2.CREATOR_POLICY) };
    formatResult2 = intl2.format(tmp(1115).t.TvX207, obj5);
    const tmp9Result4 = tmp9(2110);
  }
  let tmp34 = isExpeditedOnboardingGuild;
  if (isExpeditedOnboardingGuild) {
    tmp34 = stateFromStores;
  }
  if (tmp34) {
    tmp34 = false === hasItem1;
  }
  dependencyMap = tmp34;
  if (isExpeditedOnboardingGuild) {
    isExpeditedOnboardingGuild = false === hasItem;
  }
  const formatResult = intl.format(require("util").t.aJUdOi, obj2);
  let formatResult3;
  const creatorMonetizationAcceptTermsCheckboxText = require("CreatorMonetizationAcceptTermCheckboxText").getCreatorMonetizationAcceptTermsCheckboxText();
  if (isApplicationRejected) {
    if (tmp35) {
      if (stateFromStores) {
        const intl5 = tmp(1115).intl;
        formatResult3 = intl5.format(tmp(1115).t.wbVIUB, {});
      }
    }
  }
  const items1 = [refresh, tmp34];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      refresh();
    }
  }, items1);
  const obj6 = { resubmittingEnableRequest: loading, resubmissionError: error, isGuildOwner: stateFromStores, createEnableRequest, resubmittedRequest: submittedRequest, eligibilityLoading: loading2, eligibilityError: error2, refreshEligibility: refresh, eligibility, eligibleForMonetization: true === canApply, isApplicationPending: tmp23, hasPreviousApplicationRejection: isApplicationRejected, requestRejectedNoticeText: formatResult2, reapplyNoticeText: formatResult3, showAcceptTermsFlow: isExpeditedOnboardingGuild, wasRejectedInV1: null, requirementsFinePrintText: null, acceptTermsCheckboxText: null };
  if (isExpeditedOnboardingGuild) {
    if (!tmp19) {
      tmp19 = isApplicationRejected;
    }
    isExpeditedOnboardingGuild = tmp19;
  }
  obj6.wasRejectedInV1 = isExpeditedOnboardingGuild;
  obj6.requirementsFinePrintText = formatResult;
  obj6.acceptTermsCheckboxText = creatorMonetizationAcceptTermsCheckboxText;
  return obj6;
};