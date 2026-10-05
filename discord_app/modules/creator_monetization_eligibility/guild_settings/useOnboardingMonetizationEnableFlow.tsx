// discord_app/modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx
import GuildRecord from "../../../records/GuildRecord.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, features, tmp4;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const isGuildOwner = GuildRecord.isGuildOwner;
({ GuildFeatures: metroRequire, HelpdeskArticles: metroImportDefault, MarketingURLs: metroImportAll } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (features) => {
      let closure_2;
      let createEnableRequest;
      let error;
      let error2;
      let isApplicationRejected;
      let loading;
      let loading2;
      let refresh;
      let requestCooldownDuration;
      let submittedRequest;
      let tmp13;
      let tmp17;
      let tmp21Result2;
      let tmp28;
      let tmp7;
      _require = features;
      const tmp = _require;
      const tmp2 = dependencyMap;
      const obj = require("react");
      const cResult = obj.c(40);
      const obj2 = require("CreatorMonetizationEligibilityExperimentUtils");
      let isExpeditedOnboardingGuild = obj2.useIsExpeditedOnboardingGuild(features);
      let features1;
      const first = cResult[0];
      if (features != null) {
        features1 = features.features;
      }
      if (first !== features1) {
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
        tmp7 = hasItem;
      } else {
        tmp7 = cResult[1];
      }
      let features4;
      const tmp11 = cResult[2];
      if (features != null) {
        features4 = features.features;
      }
      if (tmp11 !== features4) {
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
        tmp13 = hasItem1;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        cResult[4] = items;
        tmp17 = items;
      } else {
        tmp17 = cResult[4];
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
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(tmp17, T);
      const tmp22 = refresh(17908);
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
      ({ error, loading, createEnableRequest, submittedRequest } = tmp22(undefined));
      tmp22(undefined);
      const tmp21Result = refresh(17909);
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
      const tmp21ResultResult = tmp21Result(undefined);
      ({ loading: loading2, error: error2, refresh } = tmp21ResultResult);
      const eligibility = tmp21ResultResult.eligibility;
      ({ isApplicationRejected, requestCooldownDuration } = refresh(17910)(eligibility));
      refresh(17910)(eligibility);
      const tmp27 = cResult[7];
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
      if (tmp27 !== undefined) {
        let hasItem2;
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
          hasItem2 = obj4.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
        }
        let tmp31 = true === hasItem2;
        if (!tmp31) {
          let hasItem3;
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
            hasItem3 = obj5.has(constants.CREATOR_MONETIZABLE_DISABLED);
          }
          tmp31 = true === hasItem3;
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
        cResult[8] = tmp31;
        tmp28 = tmp31;
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
      const useIsMonetizationReapplicationDisabled = tmp(6756).useIsMonetizationReapplicationDisabled;
      tmp(6756);
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
        useIsMonetizationReapplicationDisabled(undefined).isMonetizationReapplicationDisabled;
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
        const format = tmp39.format;
        const obj3 = { faqUrl: tmp21Result2.getArticleURL(constants2.CREATOR_FAQ) };
        const aJUdOi = tmp(1126).t.aJUdOi;
        tmp21Result2 = refresh(2115);
        cResult[9] = format(aJUdOi, obj3);
        const formatResult = format(aJUdOi, obj3);
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
        let tmp45 = isExpeditedOnboardingGuild && stateFromStores;
        if (tmp45) {
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
          tmp45 = false === tmp13;
        }
        dependencyMap = tmp45;
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
          isExpeditedOnboardingGuild = false === tmp7;
        }
        let tmp46 = isExpeditedOnboardingGuild;
        if (tmp46) {
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
          tmp46 = tmp28;
        }
        const _Symbol = Symbol;
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
          const creatorMonetizationAcceptTermsCheckboxText = obj8.getCreatorMonetizationAcceptTermsCheckboxText();
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
          if (true === undefined) {
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
              formatResult1 = obj9.format(tmp(1126).t.wbVIUB, {});
            }
          }
        }
        cResult[15] = true === undefined;
        cResult[16] = isApplicationRejected;
        cResult[17] = stateFromStores;
        cResult[18] = formatResult1;
      }
      const tmp42 = isApplicationRejected && null != requestCooldownDuration;
      if (tmp42) {
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
  : (features) => {
      let canApply;
      let closure_2;
      let createEnableRequest;
      let eligibility;
      let error;
      let error2;
      let formatResult2;
      let hasItem;
      let isApplicationRejected;
      let loading;
      let loading2;
      let refresh;
      let requestCooldownDuration;
      let submittedRequest;
      let tmp9Result4;
      _require = features;
      const tmp = _require;
      const tmp2 = dependencyMap;
      const obj = require("CreatorMonetizationEligibilityExperimentUtils");
      let isExpeditedOnboardingGuild = obj.useIsExpeditedOnboardingGuild(features);
      if (features != null) {
        features = features.features;
        hasItem = features.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      if (features != null) {
        const features2 = features.features;
        const hasItem1 = features2.has(constants.CREATOR_MONETIZABLE);
      }
      const items = [UserStore];
      const tmpResult = tmp(573);
      const stateFromStores = tmpResult.useStateFromStores(items, () => {
        const tmp3 = null != features && isGuildOwner(tmp2, tmp);
        return tmp3;
      });
      let id;
      const tmp10 = refresh(17908);
      if (features != null) {
        id = features.id;
      }
      ({ submittedRequest, error, loading, createEnableRequest } = tmp10(id));
      let id1;
      tmp10(id);
      const tmp9Result = refresh(17909);
      if (features != null) {
        id1 = features.id;
      }
      const tmp9ResultResult = tmp9Result(id1);
      refresh = tmp9ResultResult.refresh;
      ({ eligibility, loading: loading2, error: error2 } = tmp9ResultResult);
      ({ isApplicationRejected, requestCooldownDuration } = refresh(17910)(eligibility));
      let hasItem2;
      refresh(17910)(eligibility);
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
      let id2;
      const useIsMonetizationReapplicationDisabled = tmp(6756).useIsMonetizationReapplicationDisabled;
      tmp(6756);
      if (features != null) {
        id2 = features.id;
      }
      let tmp24 = submittedRequest;
      const isMonetizationReapplicationDisabled =
        useIsMonetizationReapplicationDisabled(id2).isMonetizationReapplicationDisabled;
      if (!submittedRequest) {
        let isApplicationPending;
        if (eligibility != null) {
          isApplicationPending = eligibility.isApplicationPending;
        }
        tmp24 = true === isApplicationPending;
      }
      if (eligibility != null) {
        canApply = eligibility.canApply;
      }
      const intl = tmp(1126).intl;
      const aJUdOi = tmp(1126).t.aJUdOi;
      const tmp9Result3 = refresh(2115);
      ({ faqUrl: null }).faqUrl = tmp9Result3.getArticleURL(constants2.CREATOR_FAQ);
      if (isApplicationRejected) {
        if (isMonetizationReapplicationDisabled) {
          let formatResult;
          if (true === hasItem) {
            const intl4 = tmp(1126).intl;
            const obj2 = { communityGuidelineUrl: constants3.GUIDELINES };
            formatResult = intl4.format(tmp(1126).t["0o1Q+t"], obj2);
          } else {
            const intl3 = tmp(1126).intl;
            const obj3 = { communityGuidelineUrl: constants3.GUIDELINES };
            formatResult = intl3.format(tmp(1126).t.b6h59n, obj3);
          }
          formatResult2 = formatResult;
        }
        dependencyMap = tmp33;
        if (isExpeditedOnboardingGuild) {
          isExpeditedOnboardingGuild = false === hasItem;
        }
        let formatResult1;
        const tmpResult4 = tmp(17911);
        const creatorMonetizationAcceptTermsCheckboxText = tmpResult4.getCreatorMonetizationAcceptTermsCheckboxText();
        if (isApplicationRejected) {
          if (true === canApply) {
            if (stateFromStores) {
              const intl5 = tmp(1126).intl;
              formatResult1 = intl5.format(tmp(1126).t.wbVIUB, {});
            }
          }
        }
        const items1 = [refresh, tmp33];
        const effect = react.useEffect(() => {
          if (closure_2) {
            refresh();
          }
        }, items1);
        const obj4 = {
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
          isApplicationPending: tmp24,
          hasPreviousApplicationRejection: isApplicationRejected,
          requestRejectedNoticeText: formatResult2,
          reapplyNoticeText: formatResult1,
          showAcceptTermsFlow: isExpeditedOnboardingGuild,
          wasRejectedInV1: isExpeditedOnboardingGuild,
          requirementsFinePrintText: tmp27,
          acceptTermsCheckboxText: creatorMonetizationAcceptTermsCheckboxText,
        };
        if (isExpeditedOnboardingGuild) {
          if (!tmp19) {
            tmp19 = isApplicationRejected;
          }
          isExpeditedOnboardingGuild = tmp19;
        }
        return obj4;
      }
      const tmp28 = isApplicationRejected && null != requestCooldownDuration;
      if (tmp28) {
        const intl2 = tmp(1126).intl;
        const format = intl2.format;
        const obj5 = {
          requestCooldownDuration,
          creatorRevenuePolicyUrl: tmp9Result4.getArticleURL(constants2.CREATOR_POLICY),
        };
        const TvX207 = tmp(1126).t.TvX207;
        tmp9Result4 = refresh(2115);
        formatResult2 = format(TvX207, obj5);
      }
    };
const result = size.fileFinishedImporting(
  "modules/creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx",
);

export default tmp3;
