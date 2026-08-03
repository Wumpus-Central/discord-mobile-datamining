import noop from "noop";
import { isGuildOwner } from "GuildNSFWContentLevel";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ GuildFeatures: closure_6, HelpdeskArticles: error, MarketingURLs: metroImportAll } = ME);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx");

export default function useOnboardingMonetizationEnableFlow(features) {
  let createEnableRequest;
  let eligibility;
  let error;
  let error2;
  let isApplicationRejected;
  let loading;
  let loading2;
  let requestCooldownDuration;
  let submittedRequest;
  const _require = features;
  let obj = _require(5761);
  let isExpeditedOnboardingGuild = obj.useIsExpeditedOnboardingGuild(features);
  if (features != null) {
    features = features.features;
    const hasItem = features.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
  }
  if (features != null) {
    const features2 = features.features;
    const hasItem1 = features2.has(constants.CREATOR_MONETIZABLE);
  }
  let tmpResult = tmp(647);
  const items = [mergeGuildAvatar];
  const stateFromStores = tmpResult.useStateFromStores(items, () => {
    let tmp3 = null != closure_0;
    if (tmp3) {
      tmp3 = outer1_4(tmp2, tmp);
    }
    return tmp3;
  });
  let id;
  if (features != null) {
    id = features.id;
  }
  const tmp10 = refresh(16640);
  ({ submittedRequest, error, loading, createEnableRequest } = refresh(16640)(id));
  let id1;
  let tmp9Result = tmp9(16641);
  if (features != null) {
    id1 = features.id;
  }
  const tmp9ResultResult = tmp9Result(id1);
  refresh = tmp9ResultResult.refresh;
  ({ eligibility, loading: loading2, error: error2 } = tmp9ResultResult);
  const tmp10Result = refresh(16640)(id);
  ({ isApplicationRejected, requestCooldownDuration } = refresh(16642)(eligibility));
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
  tmpResult = tmp(5753);
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
  const intl = tmp(1236).intl;
  obj = { faqUrl: null };
  tmp9Result = tmp9(1945);
  obj[0] = tmp9Result.getArticleURL(constants2.CREATOR_FAQ);
  const tmp16 = refresh(16642)(eligibility);
  const tmp26 = constants2;
  if (isApplicationRejected) {
    if (tmpResult.useIsMonetizationReapplicationDisabled(id2).isMonetizationReapplicationDisabled) {
      if (true === hasItem) {
        const intl4 = tmp(1236).intl;
        obj = { communityGuidelineUrl: null };
        obj[0] = constants3.GUIDELINES;
        let formatResult1 = intl4.format(tmp(1236).t["0o1Q+t"], obj);
      } else {
        const intl3 = tmp(1236).intl;
        const obj1 = { communityGuidelineUrl: null };
        obj1[0] = constants3.GUIDELINES;
        formatResult1 = intl3.format(tmp(1236).t.b6h59n, obj1);
      }
    }
  }
  let tmp28 = isApplicationRejected;
  if (isApplicationRejected) {
    tmp28 = null != requestCooldownDuration;
  }
  let formatResult2;
  if (tmp28) {
    const intl2 = tmp(1236).intl;
    const obj2 = { requestCooldownDuration: null, creatorRevenuePolicyUrl: null };
    obj2[0] = requestCooldownDuration;
    obj2[1] = tmp9(1945).getArticleURL(tmp26.CREATOR_POLICY);
    formatResult2 = intl2.format(tmp(1236).t.TvX207, obj2);
    const tmp9Result1 = tmp9(1945);
  }
  let tmp34 = isExpeditedOnboardingGuild;
  if (isExpeditedOnboardingGuild) {
    tmp34 = stateFromStores;
  }
  if (tmp34) {
    tmp34 = false === hasItem1;
  }
  const dependencyMap = tmp34;
  if (isExpeditedOnboardingGuild) {
    isExpeditedOnboardingGuild = false === hasItem;
  }
  const formatResult = intl.format(_require(1236).t.aJUdOi, obj);
  let formatResult3;
  const creatorMonetizationAcceptTermsCheckboxText = _require(16643).getCreatorMonetizationAcceptTermsCheckboxText();
  if (isApplicationRejected) {
    if (tmp35) {
      if (stateFromStores) {
        const intl5 = tmp(1236).intl;
        formatResult3 = intl5.format(tmp(1236).t.wbVIUB, {});
      }
    }
  }
  const items1 = [refresh, tmp34];
  const effect = React.useEffect(() => {
    if (closure_2) {
      refresh();
    }
  }, items1);
  const obj3 = { resubmittingEnableRequest: loading, resubmissionError: error, isGuildOwner: stateFromStores, createEnableRequest, resubmittedRequest: submittedRequest, eligibilityLoading: loading2, eligibilityError: error2, refreshEligibility: refresh, eligibility, eligibleForMonetization: true === canApply, isApplicationPending: tmp23, hasPreviousApplicationRejection: isApplicationRejected, requestRejectedNoticeText: formatResult2, reapplyNoticeText: formatResult3, showAcceptTermsFlow: isExpeditedOnboardingGuild, wasRejectedInV1: null, requirementsFinePrintText: null, acceptTermsCheckboxText: null };
  if (isExpeditedOnboardingGuild) {
    if (!tmp19) {
      tmp19 = isApplicationRejected;
    }
    isExpeditedOnboardingGuild = tmp19;
  }
  obj3[15] = isExpeditedOnboardingGuild;
  obj3[16] = formatResult;
  obj3[17] = creatorMonetizationAcceptTermsCheckboxText;
  return obj3;
};