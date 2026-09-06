// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionContainer.tsx
import GroupListingsFetchContext from "../../GroupListingsFetchContext.tsx";
import useOnboardingMonetizationEnableFlowDefault from "../../../creator_monetization_eligibility/guild_settings/useOnboardingMonetizationEnableFlow.tsx";
import RoleSubscriptionSettingsDisabledContext from "../../RoleSubscriptionSettingsDisabledContext.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
function ApplicationRejectedNotice(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(504);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    const hasItem = features.has(GuildFeatures.CREATOR_MONETIZABLE_RESTRICTED);
  }
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    const hasItem1 = features2.has(GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  const tmp = closure_9();
  ({ resubmissionError, requestRejectedNoticeText, reapplyNoticeText } =
    useOnboardingMonetizationEnableFlowDefault(stateFromStores));
  if (null != resubmissionError) {
    obj = { children: null };
    let tmp9Result = tmp9(12223);
    obj.children = resubmissionError.getAnyErrorMessage();
    let tmp14 = closure_7(tmp9Result, obj);
  } else if (null != requestRejectedNoticeText) {
    obj = { notice: requestRejectedNoticeText };
    tmp14 = closure_7(tmp9(17683), obj);
  } else if (tmp13) {
    const obj1 = { notice: null };
    tmp9Result = tmp9(17683);
    const intl3 = tmp2(1114).intl;
    obj1.notice = intl3.string(tmp2(1114).t.MyJpJT);
    tmp14 = closure_7(tmp9Result, obj1);
  } else if (null != reapplyNoticeText) {
    const obj2 = { notice: reapplyNoticeText, ctaLabel: null, onClick: null, submitting: null };
    const intl2 = tmp2(1114).intl;
    obj2.ctaLabel = intl2.string(tmp2(1114).t["YKw/NQ"]);
    obj2.onClick = tmp12;
    obj2.submitting = tmp11;
    tmp14 = closure_7(tmp9(17683), obj2);
    const tmp9Result1 = tmp9(17683);
  } else if (true === hasItem1) {
    const obj3 = { notice: null };
    const intl = tmp2(1114).intl;
    obj3.notice = intl.string(tmp2(1114).t.e2g9sW);
    tmp14 = closure_7(tmp9(17683), obj3);
    const tmp9Result2 = tmp9(17683);
  } else {
    tmp14 = null;
    if (true === hasItem) {
      const obj4 = { notice: null };
      const intl4 = tmp2(1114).intl;
      obj4.notice = intl4.string(tmp2(1114).t.rxI9sl);
      tmp14 = closure_7(tmp9(17683), obj4);
      const tmp9Result3 = tmp9(17683);
    }
  }
  let tmp24 = null;
  if (null != tmp14) {
    const obj5 = { style: tmp.warningBlockContainer, children: tmp14 };
    tmp24 = closure_7(closure_4, obj5);
  }
  return tmp24;
}
function GuildSettingsRoleSubscription(arg0) {
  ({ guildId, children } = arg0);
  const tmp = closure_9();
  let obj = GroupListingsFetchContext;
  if (obj.useGroupListingsFetchContext()) {
    obj = { style: tmp.container, children: null };
    obj = { guildId };
    const items = [React5(ApplicationRejectedNotice, obj), children];
    obj.children = items;
    let tmp5 = React6(React4, obj);
  } else {
    const obj1 = { style: tmp.spinner, children: React5(React3, {}) };
    tmp5 = React5(React4, obj1);
  }
  return tmp5;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4 } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
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
  let obj = { guildId: guildId.guildId, refetchOnMount: true, children: null };
  obj = { guildId: guildId.guildId, children: null };
  obj = {};
  const merged = Object.assign(guildId);
  obj.children = React5(GuildSettingsRoleSubscription, obj);
  obj.children = React5(RoleSubscriptionSettingsDisabledContext.RoleSubscriptionSettingsDisabledContextProvider, obj);
  return React5(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
}
