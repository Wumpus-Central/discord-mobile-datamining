// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx
import c from "../../../../../_runtime/00576_c.js";
import GroupListingsFetchContext from "../../GroupListingsFetchContext.tsx";
import useOnboardingMonetizationEnableFlowDefault from "../../../creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx";
import RoleSubscriptionSettingsDisabledContext from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const ErrorBlockDefault = tmp13(11875);
const WarningNoticeDefault = tmp13(18375);
require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const GuildFeatures = fn(1085).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let closure_9 = createStyles.createStyles({
  container: { flex: 1 },
  warningBlockContainer: { marginHorizontal: 16, marginTop: 16 },
  spinner: { marginTop: 12 },
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ApplicationRejectedNotice(guildId) {
      let tmp2 = dependencyMap;
      const cResult = guildId(576).c(20);
      guildId = guildId.guildId;
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function c() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = guildId(576);
      const stateFromStores = guildId(504).useStateFromStores(first, tmp7);
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        const hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
      }
      let tmp13 = importDefault;
      const tmpResult = guildId(504);
      ({
        resubmittingEnableRequest,
        resubmissionError,
        createEnableRequest,
        requestRejectedNoticeText,
        reapplyNoticeText,
      } = useOnboardingMonetizationEnableFlowDefault(stateFromStores));
      if (null != resubmissionError) {
        if (cResult[3] !== resubmissionError) {
          const anyErrorMessage = resubmissionError.getAnyErrorMessage();
          cResult[3] = resubmissionError;
          cResult[4] = anyErrorMessage;
          let tmp37 = anyErrorMessage;
        } else {
          tmp37 = cResult[4];
        }
        if (cResult[5] !== tmp37) {
          tmp13 = ErrorBlockDefault;
          const obj2 = { children: tmp37 };
          tmp2 = closure_7(tmp13, obj2);
          cResult[5] = tmp37;
          cResult[6] = tmp2;
        }
      } else {
        if (null != requestRejectedNoticeText) {
          if (cResult[7] !== requestRejectedNoticeText) {
            const obj3 = { notice: requestRejectedNoticeText };
            const tmp36 = closure_7(WarningNoticeDefault, obj3);
            cResult[7] = requestRejectedNoticeText;
            cResult[8] = tmp36;
            let tmp34 = tmp36;
          } else {
            tmp34 = cResult[8];
          }
          let tmp20 = tmp34;
        } else if (tmp15) {
          const _Symbol3 = Symbol;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            const obj4 = { notice: null };
            const intl4 = tmp(1126).intl;
            obj4.notice = intl4.string(tmp(1126).t.MyJpJT);
            const tmp33 = closure_7(WarningNoticeDefault, obj4);
            cResult[9] = tmp33;
            let tmp30 = tmp33;
            const tmp13Result = WarningNoticeDefault;
          } else {
            tmp30 = cResult[9];
          }
          tmp20 = tmp30;
        } else if (null != reapplyNoticeText) {
          const _Symbol2 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = tmp(1126).intl;
            const stringResult = intl3.string(tmp(1126).t["YKw/NQ"]);
            cResult[10] = stringResult;
            let tmp25 = stringResult;
          } else {
            tmp25 = cResult[10];
          }
          if (cResult[11] === createEnableRequest) {
            if (cResult[12] === reapplyNoticeText) {
              if (cResult[13] === resubmittingEnableRequest) {
                let tmp27 = cResult[14];
              }
              tmp20 = tmp27;
            }
          }
          const obj5 = {
            notice: reapplyNoticeText,
            ctaLabel: tmp25,
            onClick: createEnableRequest,
            submitting: resubmittingEnableRequest,
          };
          const tmp29 = closure_7(WarningNoticeDefault, obj5);
          cResult[11] = createEnableRequest;
          cResult[12] = reapplyNoticeText;
          cResult[13] = resubmittingEnableRequest;
          cResult[14] = tmp29;
          tmp27 = tmp29;
        } else if (true === hasItem1) {
          const _Symbol = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { notice: null };
            const intl2 = tmp(1126).intl;
            obj6.notice = intl2.string(tmp(1126).t.e2g9sW);
            const tmp24 = closure_7(WarningNoticeDefault, obj6);
            cResult[15] = tmp24;
            let tmp21 = tmp24;
            const tmp13Result3 = WarningNoticeDefault;
          } else {
            tmp21 = cResult[15];
          }
          tmp20 = tmp21;
        } else {
          tmp20 = null;
          if (true === hasItem) {
            const _Symbol4 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { notice: null };
              const intl = tmp(1126).intl;
              obj7.notice = intl.string(tmp(1126).t.rxI9sl);
              const tmp19 = closure_7(WarningNoticeDefault, obj7);
              cResult[16] = tmp19;
              let tmp16 = tmp19;
              const tmp13Result4 = WarningNoticeDefault;
            } else {
              tmp16 = cResult[16];
            }
            tmp20 = tmp16;
          }
        }
        if (cResult[17] === tmp20) {
          if (cResult[18] === tmp4) {
            let tmp42 = cResult[19];
          }
          return tmp42;
        }
        let tmp43 = null;
        if (null != tmp20) {
          const obj8 = { style: tmp4.warningBlockContainer, children: tmp20 };
          tmp43 = closure_7(closure_4, obj8);
        }
        cResult[17] = tmp20;
        cResult[18] = tmp4;
        cResult[19] = tmp43;
        tmp42 = tmp43;
      }
      const tmp14 = useOnboardingMonetizationEnableFlowDefault(stateFromStores);
    }
  : function ApplicationRejectedNotice(guildId) {
      guildId = guildId.guildId;
      const tmp = closure_9();
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
      if (stateFromStores != null) {
        const features = stateFromStores.features;
        const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (stateFromStores != null) {
        const features2 = stateFromStores.features;
        const hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
      }
      const obj = guildId(504);
      ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } =
        useOnboardingMonetizationEnableFlowDefault(stateFromStores));
      if (null != resubmissionError) {
        const obj2 = { children: resubmissionError.getAnyErrorMessage() };
        let tmp14 = closure_7(ErrorBlockDefault, obj2);
        const tmp9Result = ErrorBlockDefault;
      } else if (null != requestRejectedNoticeText) {
        const obj3 = { notice: requestRejectedNoticeText };
        tmp14 = closure_7(WarningNoticeDefault, obj3);
      } else if (tmp13) {
        const obj4 = { notice: null };
        const intl3 = tmp2(1126).intl;
        obj4.notice = intl3.string(tmp2(1126).t.MyJpJT);
        tmp14 = closure_7(WarningNoticeDefault, obj4);
        const tmp9Result5 = WarningNoticeDefault;
      } else if (null != reapplyNoticeText) {
        const obj5 = { notice: reapplyNoticeText, ctaLabel: null, onClick: null, submitting: null };
        const intl2 = tmp2(1126).intl;
        obj5.ctaLabel = intl2.string(tmp2(1126).t["YKw/NQ"]);
        obj5.onClick = tmp12;
        obj5.submitting = tmp11;
        tmp14 = closure_7(WarningNoticeDefault, obj5);
        const tmp9Result6 = WarningNoticeDefault;
      } else if (true === hasItem1) {
        const obj6 = { notice: null };
        const intl = tmp2(1126).intl;
        obj6.notice = intl.string(tmp2(1126).t.e2g9sW);
        tmp14 = closure_7(WarningNoticeDefault, obj6);
        const tmp9Result7 = WarningNoticeDefault;
      } else {
        tmp14 = null;
        if (true === hasItem) {
          const obj7 = { notice: null };
          const intl4 = tmp2(1126).intl;
          obj7.notice = intl4.string(tmp2(1126).t.rxI9sl);
          tmp14 = closure_7(WarningNoticeDefault, obj7);
          const tmp9Result8 = WarningNoticeDefault;
        }
      }
      let tmp24 = null;
      if (null != tmp14) {
        const obj8 = { style: tmp.warningBlockContainer, children: tmp14 };
        tmp24 = closure_7(closure_4, obj8);
      }
      return tmp24;
    };
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsRoleSubscription(arg0) {
      const cResult = c.c(9);
      ({ guildId, children } = arg0);
      let container = closure_9();
      if (obj2.useGroupListingsFetchContext()) {
        if (cResult[3] !== guildId) {
          const obj3 = { guildId };
          const tmp14 = React5(closure_10, obj3);
          cResult[3] = guildId;
          cResult[4] = tmp14;
          let tmp11 = tmp14;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] === children) {
          if (cResult[6] === container.container) {
          }
        }
        const obj4 = { style: container.container, children: null };
        const items = [tmp11, children];
        obj4.children = items;
        const tmp18 = closure_1_8(React4, obj4);
        cResult[5] = children;
        container = container.container;
        cResult[6] = container;
        cResult[7] = tmp11;
        cResult[8] = tmp18;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp6 = React5(React3, {});
          cResult[0] = tmp6;
          let first = tmp6;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== container.spinner) {
          const obj5 = { style: container.spinner, children: first };
          const tmp10 = React5(React4, obj5);
          cResult[1] = container.spinner;
          cResult[2] = tmp10;
          let tmp7 = tmp10;
        } else {
          tmp7 = cResult[2];
        }
        return tmp7;
      }
      obj2 = GroupListingsFetchContext;
    }
  : function GuildSettingsRoleSubscription(arg0) {
      ({ guildId, children } = arg0);
      const tmp = closure_9();
      if (obj.useGroupListingsFetchContext()) {
        const obj2 = { style: tmp.container, children: null };
        const obj3 = { guildId };
        const items = [React5(closure_10, obj3), children];
        obj2.children = items;
        let tmp5 = closure_1_8(React4, obj2);
      } else {
        const obj4 = { style: tmp.spinner, children: React5(React3, {}) };
        tmp5 = React5(React4, obj4);
      }
      return tmp5;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsRoleSubscriptionContainer(guildId) {
      const cResult = c.c(8);
      if (cResult[0] !== guildId) {
        const obj2 = {};
        const merged = Object.assign(guildId);
        const tmp10 = React5(closure_11, obj2);
        cResult[0] = guildId;
        cResult[1] = tmp10;
        let tmp4 = tmp10;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === guildId.guildId) {
        if (cResult[3] === tmp4) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === guildId.guildId) {
          if (cResult[6] === tmp11) {
            let tmp13 = cResult[7];
          }
          return tmp13;
        }
        const obj3 = { guildId: guildId.guildId, refetchOnMount: true, children: tmp11 };
        const tmp15 = React5(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj3);
        cResult[5] = guildId.guildId;
        cResult[6] = tmp11;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      }
      const tmp12 = React5(RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider, {
        guildId: guildId.guildId,
        children: tmp4,
      });
      cResult[2] = guildId.guildId;
      cResult[3] = tmp4;
      cResult[4] = tmp12;
      tmp11 = tmp12;
      const obj4 = { guildId: guildId.guildId, children: tmp4 };
    }
  : function GuildSettingsRoleSubscriptionContainer(guildId) {
      const obj = { guildId: guildId.guildId, refetchOnMount: true, children: null };
      const obj2 = { guildId: guildId.guildId, children: null };
      const merged = Object.assign(guildId);
      obj2.children = React5(closure_11, {});
      obj.children = React5(
        RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider,
        obj2,
      );
      return React5(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
    };
