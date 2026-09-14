// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx
import ErrorBlockDefault from "../components/ErrorBlock.tsx";
import GroupListingsFetchContext from "../../GroupListingsFetchContext.tsx";
import WarningNoticeDefault from "../components/WarningNotice.tsx";
import useOnboardingMonetizationEnableFlowDefault from "../../../creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx";
import RoleSubscriptionSettingsDisabledContext from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function ApplicationRejectedNotice(guildId) {
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
    const intl3 = tmp2(1114).intl;
    obj4.notice = intl3.string(tmp2(1114).t.MyJpJT);
    tmp14 = closure_7(WarningNoticeDefault, obj4);
    const tmp9Result5 = WarningNoticeDefault;
  } else if (null != reapplyNoticeText) {
    const obj5 = { notice: reapplyNoticeText, ctaLabel: null, onClick: null, submitting: null };
    const intl2 = tmp2(1114).intl;
    obj5.ctaLabel = intl2.string(tmp2(1114).t["YKw/NQ"]);
    obj5.onClick = tmp12;
    obj5.submitting = tmp11;
    tmp14 = closure_7(WarningNoticeDefault, obj5);
    const tmp9Result6 = WarningNoticeDefault;
  } else if (true === hasItem1) {
    const obj6 = { notice: null };
    const intl = tmp2(1114).intl;
    obj6.notice = intl.string(tmp2(1114).t.e2g9sW);
    tmp14 = closure_7(WarningNoticeDefault, obj6);
    const tmp9Result7 = WarningNoticeDefault;
  } else {
    tmp14 = null;
    if (true === hasItem) {
      const obj7 = { notice: null };
      const intl4 = tmp2(1114).intl;
      obj7.notice = intl4.string(tmp2(1114).t.rxI9sl);
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
}
function GuildSettingsRoleSubscription(arg0) {
  ({ guildId, children } = arg0);
  const tmp = closure_9();
  if (obj.useGroupListingsFetchContext()) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { guildId };
    const items = [React5(ApplicationRejectedNotice, obj3), children];
    obj2.children = items;
    let tmp5 = React6(React4, obj2);
  } else {
    const obj4 = { style: tmp.spinner, children: React5(React3, {}) };
    tmp5 = React5(React4, obj4);
  }
  return tmp5;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let closure_9 = createStyles.createStyles({
  container: { flex: 1 },
  warningBlockContainer: { marginHorizontal: 16, marginTop: 16 },
  spinner: { marginTop: 12 },
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx",
);

export default function GuildSettingsRoleSubscriptionContainer(guildId) {
  const obj = { guildId: guildId.guildId, refetchOnMount: true, children: null };
  const obj2 = { guildId: guildId.guildId, children: null };
  const merged = Object.assign(guildId);
  obj2.children = React5(GuildSettingsRoleSubscription, {});
  obj.children = React5(RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider, obj2);
  return React5(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
}
