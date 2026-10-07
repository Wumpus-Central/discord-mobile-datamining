// discord_app/modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const isGuildOwner = fn(2070).isGuildOwner;
const Constants = fn(1085);
({ GuildFeatures: metroRequire, HelpdeskArticles: closure_7, MarketingURLs: closure_8 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (features) => {
      _require = features;
      const cResult = require("c").c(40);
      const obj = require("c");
      let isExpeditedOnboardingGuild =
        require("CreatorMonetizationEligibilityExperimentUtils").useIsExpeditedOnboardingGuild(features);
      let features1;
      if (features != null) {
        features1 = features.features;
      }
      if (cResult[0] !== features1) {
        let hasItem;
        if (features != null) {
          features = features.features;
          hasItem = features.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
        }
        let features3;
        if (features != null) {
          features3 = features.features;
        }
        cResult[0] = features3;
        cResult[1] = hasItem;
        let tmp6 = hasItem;
      } else {
        tmp6 = cResult[1];
      }
      let features4;
      if (features != null) {
        features4 = features.features;
      }
      if (cResult[2] !== features4) {
        let hasItem1;
        if (features != null) {
          const features2 = features.features;
          hasItem1 = features2.has(constants.CREATOR_MONETIZABLE);
        }
        let features5;
        if (features != null) {
          features5 = features.features;
        }
        cResult[2] = features5;
        cResult[3] = hasItem1;
        let tmp11 = hasItem1;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[4] = items;
        let tmp15 = items;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== features) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        cResult[5] = features;
        cResult[6] = T;
      } else {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      const obj2 = require("CreatorMonetizationEligibilityExperimentUtils");
      const stateFromStores = require("useStateFromStores").useStateFromStores(tmp15, T);
      const tmpResult = require("useStateFromStores");
      if (features != null) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      const tmp20 = refresh(17954);
      ({ error, loading, createEnableRequest, submittedRequest } = refresh(17954)(undefined));
      const tmp20Result = refresh(17954)(undefined);
      if (features != null) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      const tmp19ResultResult = refresh(17955)(undefined);
      ({ loading: loading2, error: error2, refresh } = tmp19ResultResult);
      const eligibility = tmp19ResultResult.eligibility;
      const tmp19Result = refresh(17955);
      ({ isApplicationRejected, requestCooldownDuration } = refresh(17956)(eligibility));
      if (features != null) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if (cResult[7] !== undefined) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        if (features != null) {
          class T {
            constructor() {
              tmp3 = null != closure_0;
              if (tmp3) {
                tmp4 = isGuildOwner;
                tmp3 = isGuildOwner(tmp2, tmp);
              }
              return tmp3;
            }
          }
          const hasItem2 = obj4.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
        }
        let tmp28 = true === hasItem2;
        if (!tmp28) {
          class T {
            constructor() {
              tmp3 = null != closure_0;
              if (tmp3) {
                tmp4 = isGuildOwner;
                tmp3 = isGuildOwner(tmp2, tmp);
              }
              return tmp3;
            }
          }
          if (features != null) {
            class T {
              constructor() {
                tmp3 = null != closure_0;
                if (tmp3) {
                  tmp4 = isGuildOwner;
                  tmp3 = isGuildOwner(tmp2, tmp);
                }
                return tmp3;
              }
            }
            const hasItem3 = obj5.has(constants.CREATOR_MONETIZABLE_DISABLED);
          }
          tmp28 = true === hasItem3;
        }
        if (features != null) {
          class T {
            constructor() {
              tmp3 = null != closure_0;
              if (tmp3) {
                tmp4 = isGuildOwner;
                tmp3 = isGuildOwner(tmp2, tmp);
              }
              return tmp3;
            }
          }
        }
        cResult[7] = undefined;
        cResult[8] = tmp28;
      } else {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      const tmp24 = refresh(17956)(eligibility);
      if (features != null) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      const isMonetizationReapplicationDisabled =
        require("CreatorMonetizationRestrictionsHooks").useIsMonetizationReapplicationDisabled(
          undefined,
        ).isMonetizationReapplicationDisabled;
      if (!submittedRequest) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        if (eligibility != null) {
          class T {
            constructor() {
              tmp3 = null != closure_0;
              if (tmp3) {
                tmp4 = isGuildOwner;
                tmp3 = isGuildOwner(tmp2, tmp);
              }
              return tmp3;
            }
          }
        }
      }
      if (eligibility != null) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        const obj3 = { faqUrl: refresh(2115).getArticleURL(constants2.CREATOR_FAQ) };
        const formatResult = obj7.format(tmp(1126).t.aJUdOi, obj3);
        cResult[9] = formatResult;
        const tmp19Result2 = refresh(2115);
      } else {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if (isApplicationRejected) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if (isApplicationRejected) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if (isApplicationRejected) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      let tmp39 = isExpeditedOnboardingGuild;
      if (isExpeditedOnboardingGuild) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if (tmp39) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        tmp39 = false === tmp11;
      }
      dependencyMap = tmp39;
      if (isExpeditedOnboardingGuild) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        isExpeditedOnboardingGuild = false === tmp6;
      }
      if (isExpeditedOnboardingGuild) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        const creatorMonetizationAcceptTermsCheckboxText = obj10.getCreatorMonetizationAcceptTermsCheckboxText();
        cResult[14] = creatorMonetizationAcceptTermsCheckboxText;
      } else {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      if ((cResult[15] === true) === undefined) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
      }
      let formatResult1;
      if (isApplicationRejected) {
        class T {
          constructor() {
            tmp3 = null != closure_0;
            if (tmp3) {
              tmp4 = isGuildOwner;
              tmp3 = isGuildOwner(tmp2, tmp);
            }
            return tmp3;
          }
        }
        if (tmp43) {
          class T {
            constructor() {
              tmp3 = null != closure_0;
              if (tmp3) {
                tmp4 = isGuildOwner;
                tmp3 = isGuildOwner(tmp2, tmp);
              }
              return tmp3;
            }
          }
          if (stateFromStores) {
            class T {
              constructor() {
                tmp3 = null != closure_0;
                if (tmp3) {
                  tmp4 = isGuildOwner;
                  tmp3 = isGuildOwner(tmp2, tmp);
                }
                return tmp3;
              }
            }
            formatResult1 = obj11.format(tmp(1126).t.wbVIUB, {});
          }
        }
      }
      cResult[15] = true === undefined;
      cResult[16] = isApplicationRejected;
      cResult[17] = stateFromStores;
      cResult[18] = formatResult1;
      const tmpResult2 = require("CreatorMonetizationRestrictionsHooks");
    }
  : (features) => {
      _require = features;
      let isExpeditedOnboardingGuild =
        require("CreatorMonetizationEligibilityExperimentUtils").useIsExpeditedOnboardingGuild(features);
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
      const tmp10 = refresh(17954);
      ({ submittedRequest, error, loading, createEnableRequest } = refresh(17954)(id));
      let id1;
      const tmp10Result = refresh(17954)(id);
      if (features != null) {
        id1 = features.id;
      }
      const tmp9ResultResult = refresh(17955)(id1);
      refresh = tmp9ResultResult.refresh;
      ({ eligibility, loading: loading2, error: error2 } = tmp9ResultResult);
      const tmp9Result = refresh(17955);
      ({ isApplicationRejected, requestCooldownDuration } = refresh(17956)(eligibility));
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
      const tmp16 = refresh(17956)(eligibility);
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
      const intl = tmp(1126).intl;
      const obj2 = { faqUrl: null };
      const tmpResult3 = require("CreatorMonetizationRestrictionsHooks");
      obj2.faqUrl = refresh(2115).getArticleURL(constants2.CREATOR_FAQ);
      const tmp9Result3 = refresh(2115);
      if (isApplicationRejected) {
        if (tmpResult3.useIsMonetizationReapplicationDisabled(id2).isMonetizationReapplicationDisabled) {
          if (true === hasItem) {
            const intl4 = tmp(1126).intl;
            const obj3 = { communityGuidelineUrl: constants3.GUIDELINES };
            let formatResult1 = intl4.format(tmp(1126).t["0o1Q+t"], obj3);
          } else {
            const intl3 = tmp(1126).intl;
            const obj4 = { communityGuidelineUrl: constants3.GUIDELINES };
            formatResult1 = intl3.format(tmp(1126).t.b6h59n, obj4);
          }
        }
      }
      let tmp28 = isApplicationRejected;
      if (isApplicationRejected) {
        tmp28 = null != requestCooldownDuration;
      }
      let formatResult2;
      if (tmp28) {
        const intl2 = tmp(1126).intl;
        const obj5 = {
          requestCooldownDuration,
          creatorRevenuePolicyUrl: tmp9(2115).getArticleURL(constants2.CREATOR_POLICY),
        };
        formatResult2 = intl2.format(tmp(1126).t.TvX207, obj5);
        const tmp9Result4 = tmp9(2115);
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
      const creatorMonetizationAcceptTermsCheckboxText =
        require("CreatorMonetizationAcceptTermCheckboxText").getCreatorMonetizationAcceptTermsCheckboxText();
      if (isApplicationRejected) {
        if (tmp35) {
          if (stateFromStores) {
            const intl5 = tmp(1126).intl;
            formatResult3 = intl5.format(tmp(1126).t.wbVIUB, {});
          }
        }
      }
      const items1 = [refresh, tmp34];
      const effect = noop.useEffect(() => {
        if (closure_2) {
          refresh();
        }
      }, items1);
      const obj6 = {
        resubmittingEnableRequest: loading,
        resubmissionError: error,
        isGuildOwner: stateFromStores,
        createEnableRequest,
        resubmittedRequest: submittedRequest,
        eligibilityLoading: loading2,
        eligibilityError: error2,
        refreshEligibility: refresh,
        eligibility,
        eligibleForMonetization: true === canApply,
        isApplicationPending: tmp23,
        hasPreviousApplicationRejection: isApplicationRejected,
        requestRejectedNoticeText: formatResult2,
        reapplyNoticeText: formatResult3,
        showAcceptTermsFlow: isExpeditedOnboardingGuild,
        wasRejectedInV1: null,
        requirementsFinePrintText: null,
        acceptTermsCheckboxText: null,
      };
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
